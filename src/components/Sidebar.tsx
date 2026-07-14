import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { Studio } from "../types";
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
  isMobileListMinimized: boolean;
  setIsMobileListMinimized: (minimized: boolean) => void;
  showMobileFullProfile?: boolean;
  setShowMobileFullProfile?: (show: boolean) => void;
  searchQuery?: string;
}

export default function Sidebar({
  filteredStudios,
  selectedStudio,
  onSelectStudio,
  isMobile,
  isMobileListMinimized,
  setIsMobileListMinimized,
  showMobileFullProfile = false,
  setShowMobileFullProfile = () => {},
  searchQuery = "",
}: SidebarProps) {
  const getColor = (med: string) => MEDIUM_COLORS[med] || MEDIUM_COLORS["Default"];

  const getDirectionsUrl = (address: string, town: string, zip: string) => {
    const fullQuery = `${address}, ${town}, CA ${zip}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullQuery)}`;
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
            className="fixed inset-0 z-50 bg-[#FCFAF7] overflow-y-auto flex flex-col pointer-events-auto"
          >
            {/* Sticky Close Header */}
            <div className="sticky top-0 right-0 left-0 h-14 bg-[#FCFAF7]/95 backdrop-blur-md border-b border-[#EAE3D5] flex items-center justify-between px-4 z-30 shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C85C40] animate-pulse" />
                <span className="text-xs font-mono font-semibold text-[#7A746B] uppercase tracking-wider">
                  Artist Profile
                </span>
              </div>
              <button
                onClick={() => setShowMobileFullProfile(false)}
                className="p-1.5 bg-[#F5EFE6] hover:bg-[#EAE3D5] text-[#2B2523] rounded-full cursor-pointer transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <StudioDetail
                studio={selectedStudio}
                onBack={() => setShowMobileFullProfile(false)}
                isMobile={true}
                searchQuery={searchQuery}
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
            className="fixed bottom-4 left-4 right-4 z-30 bg-[#FCFAF7] rounded-2xl shadow-2xl border border-[#EAE3D5] overflow-hidden flex h-[140px] cursor-pointer pointer-events-auto hover:border-[#C85C40] transition-colors"
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
                  className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-[#7A746B]"
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: getColor(selectedStudio.artists[0]?.medium || "") }} />
                  {selectedStudio.artists.length > 1 
                    ? `Shared Studio • ${selectedStudio.artists.length} Artists` 
                    : selectedStudio.artists[0]?.medium}
                </span>
                <h4 className="text-xs font-bold text-[#2B2523] font-display leading-snug line-clamp-2 mt-0.5">
                  {selectedStudio.artists.map(a => a.name).join(", ")}
                </h4>
                <p className="text-[10px] text-[#7A746B] truncate mt-0.5">
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
                    className="bg-[#5B7C63] hover:bg-[#47624E] text-white text-[11px] font-bold py-1.5 px-2 rounded-lg text-center cursor-pointer transition-colors shadow-2xs flex items-center justify-center"
                  >
                    Directions
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Traditional list bottom sheet only when NO studio is selected */}
        {!selectedStudio && filteredStudios.length > 0 && (
          <div className="absolute inset-x-0 bottom-0 z-20 pointer-events-none">
            {/* Slide drawer for listing */}
            <motion.div
              key="mobile-listing-drawer"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className={`relative w-full ${
                isMobileListMinimized ? "h-[76px]" : "h-[45vh]"
              } bg-[#FCFAF7] rounded-t-3xl shadow-2xl border-t border-[#EAE3D5] overflow-hidden flex flex-col pointer-events-auto transition-all duration-300`}
            >
              {/* Drag bar indicator */}
              <div 
                onClick={() => setIsMobileListMinimized(!isMobileListMinimized)}
                className="h-6 w-full flex items-center justify-center bg-[#FCFAF7] sticky top-0 z-30 shrink-0 cursor-pointer"
              >
                <div className="w-12 h-1 bg-zinc-300 rounded-full" />
              </div>

              {/* Drawer Body content */}
              <div className={`flex-1 ${isMobileListMinimized ? "overflow-hidden" : "overflow-y-auto"}`}>
                <div className="flex flex-col h-full">
                  <StudioList
                    filteredStudios={filteredStudios}
                    selectedStudio={selectedStudio}
                    onSelectStudio={onSelectStudio}
                    isMobile={isMobile}
                    isMobileListMinimized={isMobileListMinimized}
                    setIsMobileListMinimized={setIsMobileListMinimized}
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
    <div className="w-[420px] bg-[#FCFAF7] border-r border-[#EAE3D5] flex flex-col h-full shadow-md shrink-0 relative z-20 overflow-hidden">
      {selectedStudio ? (
        <StudioDetail
          studio={selectedStudio}
          onBack={() => onSelectStudio(null)}
          isMobile={false}
          searchQuery={searchQuery}
        />
      ) : (
        <StudioList
          filteredStudios={filteredStudios}
          selectedStudio={selectedStudio}
          onSelectStudio={onSelectStudio}
          isMobile={false}
          isMobileListMinimized={false}
          setIsMobileListMinimized={() => {}}
        />
      )}
    </div>
  );
}
