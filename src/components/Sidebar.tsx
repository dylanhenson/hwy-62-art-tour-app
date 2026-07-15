import React, { useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Search } from "lucide-react";
import { Studio, MapFilters } from "../types";
import { MEDIUM_COLORS } from "../data/defaultArtists";
import SafeImage from "./SafeImage";
import StudioDetail from "./StudioDetail";
import StudioList from "./StudioList";

interface SidebarProps {
  studios: Studio[];
  filteredStudios: Studio[];
  selectedStudio: Studio | null;
  onSelectStudio: (studio: Studio | null) => void;
  isMobile: boolean;
  mobileHeightMode: "minimized" | "half" | "full";
  setMobileHeightMode: (mode: "minimized" | "half" | "full") => void;
  showMobileFullProfile?: boolean;
  setShowMobileFullProfile?: (show: boolean) => void;
  filters: MapFilters;
  onFilterChange: (filters: MapFilters) => void;
}

export default function Sidebar({
  filteredStudios,
  selectedStudio,
  onSelectStudio,
  isMobile,
  mobileHeightMode,
  setMobileHeightMode,
  showMobileFullProfile = false,
  setShowMobileFullProfile = () => {},
  filters,
  onFilterChange,
}: SidebarProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const getColor = (med: string) => MEDIUM_COLORS[med] || MEDIUM_COLORS["Default"];

  const getDirectionsUrl = (address: string, town: string, zip: string) => {
    const fullQuery = `${address}, ${town}, CA ${zip}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullQuery)}`;
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, searchQuery: e.target.value });
  };

  const handleSearchFocus = () => {
    setMobileHeightMode("full");
    // iOS Safari keyboard scroll-into-view fix: reset layout viewport scroll position
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const handleSearchDone = () => {
    if (searchInputRef.current) {
      searchInputRef.current.blur();
    }
    setMobileHeightMode("half");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const handleClearSearch = () => {
    onFilterChange({ ...filters, searchQuery: "" });
  };

  const handleDragBarClick = () => {
    if (mobileHeightMode === "minimized") {
      setMobileHeightMode("half");
    } else if (mobileHeightMode === "half") {
      setMobileHeightMode("minimized");
    } else if (mobileHeightMode === "full") {
      setMobileHeightMode("half");
    }
  };

  // Render Mobile Layout with touch-friendly slide-up drawer and floating Airbnb-style preview card
  if (isMobile) {
    return (
      <AnimatePresence>
        {/* Full-Screen Profile Modal View when selected & showMobileFullProfile is active */}
        {selectedStudio && showMobileFullProfile && (
          <motion.div
            key="mobile-full-profile"
            initial={{ opacity: 0, y: "20%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "20%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-50 bg-[#fec811] overflow-y-auto flex flex-col pointer-events-auto"
          >
            {/* Sticky Close Header */}
            <div className="sticky top-0 right-0 left-0 h-14 bg-[#fec811]/95 backdrop-blur-md border-b border-black/10 flex items-center justify-between px-4 z-30 shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C85C40] animate-pulse" />
                <span className="text-xs font-mono font-bold text-[#4A3C15] uppercase tracking-wider">
                  Artist Profile
                </span>
              </div>
              <button
                onClick={() => setShowMobileFullProfile(false)}
                className="p-1.5 bg-white/80 hover:bg-white text-[#1A1615] rounded-full cursor-pointer transition-all duration-200 border border-black/5 shadow-2xs"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <StudioDetail
                studio={selectedStudio}
                onBack={() => setShowMobileFullProfile(false)}
                isMobile={true}
                searchQuery={filters.searchQuery}
              />
            </div>
          </motion.div>
        )}

        {/* Floating Preview Card when selected & full profile NOT active */}
        {selectedStudio && !showMobileFullProfile && (
          <motion.div
            key="mobile-floating-preview"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            onClick={() => setShowMobileFullProfile(true)}
            className="fixed bottom-4 left-4 right-4 z-30 bg-white rounded-2xl shadow-2xl border border-black/10 overflow-hidden flex h-[140px] cursor-pointer pointer-events-auto hover:border-[#C85C40] transition-colors"
          >
            {/* Left Column: Image (40% width) */}
            <div className="w-[40%] h-full relative bg-[#1A1615] overflow-hidden shrink-0">
              <SafeImage
                src={selectedStudio.artists[0]?.imageUrl}
                alt={selectedStudio.artists[0]?.name}
                className="w-full h-full object-cover"
                textClassName="text-[10px]"
              />
              {/* Studio Number Badge */}
              <div
                className="absolute top-2 left-2 text-white text-[10px] font-display font-black px-2 py-0.5 rounded-full shadow-md border border-white/20"
                style={{ backgroundColor: getColor(selectedStudio.artists[0]?.medium || "") }}
              >
                #{selectedStudio.studioNumber}
              </div>
              {/* More Artists Badge overlaying the bottom-right of the image */}
              {selectedStudio.artists.length > 1 && (
                <div className="absolute bottom-2 right-2 bg-black/75 backdrop-blur-xs text-white text-[9px] font-black px-1.5 py-0.5 rounded-md flex items-center gap-0.5 shadow-xs border border-white/10 uppercase tracking-wider font-mono">
                  +{selectedStudio.artists.length - 1} More
                </div>
              )}
            </div>

            {/* Right Column: Details (60% width) */}
            <div className="w-[60%] p-3.5 flex flex-col justify-between relative">
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectStudio(null);
                }}
                className="absolute top-2 right-2 p-1 bg-zinc-100 hover:bg-zinc-200 rounded-full text-zinc-500 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              {/* Main text metadata */}
              <div className="pr-5">
                <span 
                  className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-[#4A3C15]"
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: getColor(selectedStudio.artists[0]?.medium || "") }} />
                  {selectedStudio.artists.length > 1 
                    ? `Shared Studio • ${selectedStudio.artists.length} Artists` 
                    : selectedStudio.artists[0]?.medium}
                </span>
                <h4 className="text-xs font-bold text-[#1A1615] font-display leading-snug line-clamp-2 mt-0.5">
                  {selectedStudio.artists.map(a => a.name).join(", ")}
                </h4>
                <p className="text-[10px] text-[#5C5245] truncate mt-0.5">
                  {selectedStudio.town}
                </p>
              </div>

              {/* Action Button Row */}
              <div className="flex gap-1.5">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMobileFullProfile(true);
                  }}
                  className="flex-1 bg-[#C85C40] hover:bg-[#A7432B] text-white text-[11px] font-bold py-1.5 px-2 rounded-lg text-center cursor-pointer transition-colors shadow-2xs"
                >
                  Profile
                </button>
                {!selectedStudio.notGpsFriendly && (
                  <a
                    href={getDirectionsUrl(selectedStudio.address, selectedStudio.town, selectedStudio.zipCode)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[#1A1615] hover:bg-black text-white text-[11px] font-bold py-1.5 px-2 rounded-lg text-center cursor-pointer transition-colors shadow-2xs flex items-center justify-center"
                  >
                    Directions
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Traditional list bottom sheet only when NO studio is selected */}
        {!selectedStudio && (
          <div 
            className={`fixed inset-x-0 bottom-0 z-20 pointer-events-none ${
              mobileHeightMode === "full" ? "top-[112px] h-[calc(100dvh-112px)]" : ""
            }`}
          >
            {/* Slide drawer for listing */}
            <motion.div
              key="mobile-listing-drawer"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className={`relative w-full ${
                mobileHeightMode === "minimized"
                  ? "h-[116px]"
                  : mobileHeightMode === "half"
                  ? "h-[48vh]"
                  : "h-full"
              } bg-[#fec811] rounded-t-3xl shadow-2xl border-t border-black/10 overflow-hidden flex flex-col pointer-events-auto transition-all duration-300`}
            >
              {/* Drag bar indicator */}
              <div 
                onClick={handleDragBarClick}
                className="h-6 w-full flex items-center justify-center bg-[#fec811] sticky top-0 z-30 shrink-0 cursor-pointer"
              >
                <div className="w-12 h-1 bg-zinc-400/50 rounded-full" />
              </div>

              {/* iOS-Style Search Input at the top of bottom drawer */}
              <div className="px-4 pb-3 shrink-0 border-b border-black/5 flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C5245]" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={filters.searchQuery}
                    onChange={handleSearchChange}
                    onFocus={handleSearchFocus}
                    placeholder="Search artists, mediums, or studios..."
                    className="w-full bg-white border border-black/10 rounded-full pl-9 pr-10 py-2 text-base text-[#1A1615] placeholder-[#5C5245]/70 focus:outline-hidden focus:ring-2 focus:ring-[#C85C40]/20 focus:border-[#C85C40] focus:bg-white transition-all shadow-2xs"
                  />
                  {filters.searchQuery && (
                    <button
                      type="button"
                      onClick={handleClearSearch}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5C5245] hover:text-[#1A1615] p-1 rounded-full hover:bg-black/5 transition-all cursor-pointer flex items-center justify-center"
                      title="Clear search"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
                {mobileHeightMode === "full" && (
                  <button
                    onClick={handleSearchDone}
                    className="text-sm font-semibold text-[#C85C40] px-2 py-1 hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                )}
              </div>

              {/* Drawer Body content */}
              <div className={`flex-1 ${mobileHeightMode === "minimized" ? "overflow-hidden" : "overflow-y-auto"}`}>
                <div className="flex flex-col h-full">
                  <StudioList
                    filteredStudios={filteredStudios}
                    selectedStudio={selectedStudio}
                    onSelectStudio={onSelectStudio}
                    isMobile={isMobile}
                    mobileHeightMode={mobileHeightMode}
                    setMobileHeightMode={setMobileHeightMode}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  }

  // Render Desktop stationary sidebar
  return (
    <div className="w-[420px] bg-[#fec811] border-r border-black/10 flex flex-col h-full shadow-md shrink-0 relative z-20 overflow-hidden">
      {selectedStudio ? (
        <StudioDetail
          studio={selectedStudio}
          onBack={() => onSelectStudio(null)}
          isMobile={false}
          searchQuery={filters.searchQuery}
        />
      ) : (
        <StudioList
          filteredStudios={filteredStudios}
          selectedStudio={selectedStudio}
          onSelectStudio={onSelectStudio}
          isMobile={false}
          mobileHeightMode="minimized"
          setMobileHeightMode={() => {}}
        />
      )}
    </div>
  );
}
