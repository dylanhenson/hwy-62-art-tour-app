import { Compass } from "lucide-react";
import { Studio } from "../types";
import { MEDIUM_COLORS } from "../data/defaultArtists";
import SafeImage from "./SafeImage";

interface StudioListProps {
  filteredStudios: Studio[];
  selectedStudio: Studio | null;
  onSelectStudio: (studio: Studio | null) => void;
  isMobile: boolean;
  mobileHeightMode: "minimized" | "half" | "full";
  setMobileHeightMode: (mode: "minimized" | "half" | "full") => void;
}

export default function StudioList({
  filteredStudios,
  selectedStudio,
  onSelectStudio,
  isMobile,
  mobileHeightMode,
  setMobileHeightMode,
}: StudioListProps) {
  const getColor = (med: string) => MEDIUM_COLORS[med] || MEDIUM_COLORS["Default"];

  return (
    <div className="flex flex-col h-full bg-[#fec811] overflow-hidden">
      {/* Status bar */}
      <div 
        onClick={() => {
          if (isMobile) {
            setMobileHeightMode(mobileHeightMode === "minimized" ? "half" : "minimized");
          }
        }}
        className={`px-6 py-4 bg-[#F5EFE6]/45 border-b border-[#EAE3D5] shrink-0 flex items-center justify-between select-none ${
          isMobile ? "cursor-pointer hover:bg-[#F5EFE6]/70 transition-colors" : ""
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold text-[#7A746B] uppercase tracking-wider">
            Directory Listing
          </span>
          {isMobile && (
            <span className="text-[10px] text-[#A8A296] font-sans font-medium">
              (tap to {mobileHeightMode === "minimized" ? "expand" : "collapse"})
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-[#C85C40] text-white text-xs font-black px-2.5 py-0.5 rounded-full shadow-xs">
            {filteredStudios.length} {filteredStudios.length === 1 ? "Studio" : "Studios"}
          </span>
        </div>
      </div>

      {/* List items scroll container */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {filteredStudios.length > 0 ? (
          filteredStudios.map((studio) => {
            const primaryArtist = studio.artists[0];
            if (!primaryArtist) return null;

            const totalArtists = studio.artists.length;
            const isSelected = selectedStudio?.studioNumber === studio.studioNumber;

            return (
              <div
                key={studio.studioNumber}
                onClick={() => onSelectStudio(studio)}
                className={`group flex flex-col gap-3 p-4 transition-all duration-200 cursor-pointer shadow-xs border ${
                  isSelected 
                    ? "bg-white border-black/10 rounded-2xl shadow-md border-l-4 border-l-[#C85C40] pl-3" 
                    : "bg-[#fec811] hover:bg-white/10 border-black/5 rounded-2xl border-l-4 border-l-transparent"
                }`}
              >
                {/* Header Row: Studio number + Artist count text */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold font-mono text-[#C85C40] bg-white px-2 py-0.5 rounded-md">
                      STUDIO #{studio.studioNumber}
                    </span>
                    <span className={`text-[11px] font-bold ${isSelected ? "text-[#5C5245]" : "text-[#4A3C15]"}`}>
                      {studio.town}
                    </span>
                  </div>
                  {/* Text indicating how many artists are at the studio */}
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0 border ${
                    isSelected 
                      ? "bg-[#FAF6F0] text-[#5C5245] border-black/5" 
                      : "bg-white/40 text-[#4A3C15] border-black/5"
                  }`}>
                    {totalArtists === 1 ? "1 Artist" : `${totalArtists} Artists`}
                  </span>
                </div>

                {/* Main body content */}
                <div className="flex gap-4">
                  {/* Left: Round image preview of the studio */}
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#1A1615] shrink-0 relative shadow-2xs border border-black/10">
                    <SafeImage
                      src={primaryArtist.imageUrl}
                      alt={primaryArtist.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      textClassName="text-[8px]"
                    />
                  </div>

                  {/* Right: Address + Weekends */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <p className={`text-xs leading-relaxed ${isSelected ? "text-[#5C5245]" : "text-[#4A3C15] font-medium"}`}>
                        {studio.address}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-2 mt-1.5">
                      {/* Weekend active pills */}
                      <div className="flex gap-1 text-[9px] font-bold">
                        {studio.weekends.map((wknd) => {
                          const simpleName = wknd.replace("Weekend ", "W");
                          return (
                            <span
                              key={wknd}
                              className="px-1.5 py-0.5 rounded text-white bg-[#C85C40]"
                            >
                              {simpleName}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Artists bubbles / squares list */}
                <div className="grid grid-cols-1 gap-2 mt-1">
                  {studio.artists.map((artist) => {
                    const artColor = getColor(artist.medium);
                    return (
                      <div
                        key={artist.id}
                        className={`${
                          isSelected 
                            ? "bg-zinc-50 border border-black/5" 
                            : "bg-white border border-black/5 shadow-2xs"
                        } rounded-xl p-2.5 flex items-center gap-2.5 shadow-3xs transition-all hover:border-[#C85C40]/50`}
                      >
                        <div className="w-9 h-9 rounded-lg overflow-hidden border border-black/5 shrink-0 bg-[#1A1615]">
                          <SafeImage
                            src={artist.imageUrl}
                            alt={artist.name}
                            className="w-full h-full object-cover"
                            showText={false}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-[#1A1615] truncate leading-tight">
                            {artist.name}
                          </p>
                          <span className="inline-flex items-center gap-1.5 text-[10px] text-[#5C5245] leading-none mt-1">
                            <span
                              className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: artColor }}
                            />
                            {artist.medium}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-12 text-center text-[#5C5245] bg-[#fec811]">
            <Compass className="w-8 h-8 mx-auto mb-2 text-[#C85C40] animate-pulse" />
            <p className="text-sm font-bold text-[#1A1615]">No studios match your filter</p>
            <p className="text-xs text-[#5C5245] mt-1">Try resetting or modifying search filters above.</p>
          </div>
        )}
      </div>
    </div>
  );
}
