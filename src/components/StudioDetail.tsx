import React, { useState, useEffect } from "react";
import { ArrowLeft, Sparkles, Calendar, MapPin, Navigation, Phone, Mail, Globe, Search, AlertTriangle, Facebook, Instagram } from "lucide-react";
import { Studio, Artist } from "../types";
import { MEDIUM_COLORS } from "../data/defaultArtists";
import SafeImage from "./SafeImage";

function getFacebookUrl(fb: string): string {
  const trimmed = fb.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }
  if (trimmed.startsWith("facebook.com") || trimmed.startsWith("www.facebook.com")) {
    return `https://${trimmed}`;
  }
  const handle = trimmed.replace(/^@/, "");
  if (handle.includes(" ")) {
    return `https://www.facebook.com/search/top/?q=${encodeURIComponent(handle)}`;
  }
  return `https://www.facebook.com/${handle}`;
}

function getFacebookDisplay(fb: string): string {
  let cleaned = fb.trim();
  if (cleaned.startsWith("http://") || cleaned.startsWith("https://")) {
    cleaned = cleaned.replace(/^https?:\/\/(www\.)?facebook\.com\//i, "");
  } else if (cleaned.startsWith("facebook.com/")) {
    cleaned = cleaned.replace(/^facebook\.com\//i, "");
  }
  cleaned = cleaned.replace(/\/$/, "");
  if (!cleaned.startsWith("@") && !cleaned.includes(" ")) {
    return `@${cleaned}`;
  }
  return cleaned || "Facebook";
}

interface StudioDetailProps {
  studio: Studio;
  onBack: () => void;
  isMobile: boolean;
  searchQuery?: string;
}

// Sub-component to isolate local state for changing images for each artist individually
function ArtistCard({
  artist,
  studioColor,
  isQueryMatch,
}: {
  artist: Artist;
  studioColor: string;
  isQueryMatch: boolean;
  key?: string;
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  // Collect all available images for this artist
  const imagesList = [
    artist.imageUrl,
    artist.imageUrl2,
    artist.imageUrl3,
  ].filter((url): url is string => !!url);

  const mainImageUrl = imagesList[activeImageIndex] || artist.imageUrl;

  // Reset aspect ratio state when active image changes to prevent previous ratio styling from bleeding over
  useEffect(() => {
    setAspectRatio(null);
  }, [mainImageUrl]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    if (img.naturalWidth && img.naturalHeight) {
      setAspectRatio(img.naturalWidth / img.naturalHeight);
    }
  };

  return (
    <div
      className={`relative bg-white border border-black/10 rounded-2xl p-5 space-y-4 transition-all duration-300 shadow-xs ${
        isQueryMatch
          ? "border-[#C85C40] shadow-md ring-4 ring-[#C85C40]/10"
          : "hover:shadow-sm hover:border-black/20"
      }`}
    >
      {/* Top header row with Name, Host badge, and query matches */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="text-base font-bold font-display text-[#1A1615]">
            {artist.name}
          </h3>
          {artist.userId && (
            <p className="text-[10px] font-mono text-[#5C5245] mt-0.5">
              REGISTRATION ID: {artist.userId}
            </p>
          )}
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-1.5">
          {isQueryMatch && (
            <span className="bg-[#C85C40] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-2xs">
              <Search className="w-2.5 h-2.5" />
              Matched search
            </span>
          )}
          {artist.isHost && (
            <span className="bg-[#1A1615] text-white border border-white/10 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide flex items-center gap-1 uppercase">
              <Sparkles className="w-2.5 h-2.5 text-[#C49A45]" />
              Host
            </span>
          )}
        </div>
      </div>

      {/* Medium category identifier */}
      <div className="flex items-center gap-1.5">
        <span
          className="inline-block w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: studioColor }}
        />
        <span className="text-xs font-semibold uppercase tracking-wider text-[#5C5245]">
          {artist.medium}
          {artist.secondaryMedium && ` • ${artist.secondaryMedium}`}
        </span>
      </div>

      {/* Artist Artwork Image */}
      <div 
        className="relative rounded-xl bg-[#1A1615] overflow-hidden border border-black/5 flex items-center justify-center transition-all duration-500 mx-auto"
        style={{
          aspectRatio: aspectRatio ? `${aspectRatio}` : "16/9",
          maxHeight: "450px",
          width: "100%",
          maxWidth: aspectRatio ? `calc(450px * ${aspectRatio})` : "100%",
        }}
      >
        <SafeImage
          src={mainImageUrl}
          alt={`${artist.name} - Artwork`}
          className="w-full h-full object-cover transition-all duration-300"
          textClassName="text-sm font-bold"
          onLoad={handleImageLoad}
        />
      </div>

      {/* Dynamic Image Gallery Thumbnails inside the artist card */}
      {imagesList.length > 1 && (
        <div className="flex gap-2 overflow-x-auto py-1 scrollbar-none">
          {imagesList.map((imgUrl, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`relative w-10 h-10 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                activeImageIndex === idx
                  ? "border-[#C85C40] scale-105 shadow-xs"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <SafeImage
                src={imgUrl}
                alt="thumbnail"
                className="w-full h-full object-cover"
                showText={false}
              />
            </button>
          ))}
        </div>
      )}

      {/* Bio / Artist Statement */}
      <div className="space-y-1">
        <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#5C5245]">
          Artist Statement
        </h4>
        <p className="text-xs text-[#1A1615] leading-relaxed whitespace-pre-line font-sans">
          {artist.bio}
        </p>
      </div>

      {/* Individual Contact Links inside card */}
      <div className="pt-3 border-t border-black/5 space-y-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[#1A1615] break-all">
          {artist.phone && (
            <div className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#C85C40] shrink-0" />
              <a href={`tel:${artist.phone}`} className="hover:text-[#C85C40] transition-colors font-medium">
                {artist.phone}
              </a>
            </div>
          )}
          {artist.email && (
            <div className="flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-[#C85C40] shrink-0" />
              <a href={`mailto:${artist.email}`} className="hover:text-[#C85C40] transition-colors font-medium">
                {artist.email}
              </a>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {artist.website && (
            <a
              href={artist.website.startsWith("http") ? artist.website : `https://${artist.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[90px] inline-flex items-center justify-center gap-1.5 py-1.5 px-2 border border-black/10 rounded-lg text-[10px] font-black text-[#1A1615] bg-[#fec811]/10 hover:bg-[#fec811] hover:text-[#1A1615] transition-colors shadow-3xs cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[#5C5245] shrink-0" />
              <span className="truncate">Website</span>
            </a>
          )}
          {artist.instagram && (
            <a
              href={`https://instagram.com/${artist.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[90px] inline-flex items-center justify-center gap-1.5 py-1.5 px-2 border border-black/10 rounded-lg text-[10px] font-black text-[#1A1615] bg-[#fec811]/10 hover:bg-[#fec811] hover:text-[#1A1615] transition-colors shadow-3xs cursor-pointer"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E1306C] shrink-0" />
              <span className="truncate">@{artist.instagram.replace("@", "")}</span>
            </a>
          )}
          {artist.facebook && (
            <a
              href={getFacebookUrl(artist.facebook)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[90px] inline-flex items-center justify-center gap-1.5 py-1.5 px-2 border border-black/10 rounded-lg text-[10px] font-black text-[#1A1615] bg-[#fec811]/10 hover:bg-[#fec811] hover:text-[#1A1615] transition-colors shadow-3xs cursor-pointer"
            >
              <Facebook className="w-3.5 h-3.5 text-[#1877F2] shrink-0 fill-current" />
              <span className="truncate">{getFacebookDisplay(artist.facebook)}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function StudioDetail({
  studio,
  onBack,
  isMobile,
  searchQuery = "",
}: StudioDetailProps) {
  const getDirectionsUrl = (address: string, town: string, zip: string) => {
    const fullQuery = `${address}, ${town}, CA ${zip}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullQuery)}`;
  };

  const getColor = (med: string) => MEDIUM_COLORS[med] || MEDIUM_COLORS["Default"];

  const query = searchQuery.trim().toLowerCase();

  return (
    <div className="flex flex-col h-full bg-[#fec811] overflow-y-auto">
      {/* Back Button (Desktop-only) */}
      {!isMobile && (
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold text-[#4A3C15] hover:text-[#1A1615] px-6 py-4 border-b border-black/10 bg-white transition-colors w-full text-left cursor-pointer font-sans shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4 text-[#C85C40]" />
          Back to All Studios
        </button>
      )}

      {/* Top Section: Studio Location, Details & Directions */}
      <div className="p-6 bg-white border-b border-black/10 space-y-4 shrink-0 shadow-xs">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-bold font-display text-[#1A1615] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C85C40] animate-pulse" />
            Studio #{studio.studioNumber}
          </h2>
          <span className="text-[10px] font-bold bg-[#1A1615] text-white px-2.5 py-1 rounded-md">
            {studio.artists.length} {studio.artists.length === 1 ? "ARTIST" : "ARTISTS"}
          </span>
        </div>

        {/* Address info */}
        <div className="flex items-start gap-2.5">
          <MapPin className="w-4 h-4 text-[#C85C40] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-xs font-bold text-[#1A1615] leading-relaxed">
              {studio.address}
            </p>
            <p className="text-xs text-[#5C5245] font-medium">
              {studio.town}, CA {studio.zipCode}
            </p>
          </div>
        </div>

        {/* Active Weekends */}
        <div className="space-y-1.5">
          <p className="text-[9px] font-bold uppercase tracking-wider text-[#5C5245]">
            Studio Exhibition Days
          </p>
          <div className="flex flex-wrap gap-1.5">
            {["Weekend 1", "Weekend 2", "Weekend 3"].map((wknd) => {
              const isActive = studio.weekends.includes(wknd);
              const activeClasses =
                wknd === "Weekend 1"
                  ? "bg-[#C85C40]/10 text-[#C85C40] border-[#C85C40]/30"
                  : wknd === "Weekend 2"
                  ? "bg-[#2C6E49]/10 text-[#2C6E49] border-[#2C6E49]/30"
                  : "bg-[#1F5156]/10 text-[#1F5156] border-[#1F5156]/30";

              return (
                <span
                  key={wknd}
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold border ${
                    isActive
                      ? activeClasses
                      : "bg-[#FAF6F0] text-zinc-400 border-zinc-200 line-through decoration-1"
                  }`}
                >
                  <Calendar className="w-3 h-3 shrink-0" />
                  {wknd}
                </span>
              );
            })}
          </div>
        </div>

        {/* Studio directions if present, or if GPS is not friendly */}
        {(studio.directions || studio.notGpsFriendly) && (
          <div className="bg-[#FAF6F0] rounded-xl p-3 border border-black/5 text-xs space-y-3">
            <p className="text-[10px] font-bold text-[#5C5245] uppercase tracking-wider mb-1 flex items-center gap-1">
              <Navigation className="w-3.5 h-3.5 text-[#C85C40] shrink-0" />
              Studio Directions:
            </p>
            {studio.directions ? (
              <p className="text-[11px] text-[#1A1615] leading-relaxed italic">
                {studio.directions}
              </p>
            ) : (
              <p className="text-[11px] text-[#5C5245] leading-relaxed italic">
                No turn-by-turn directions provided.
              </p>
            )}
            {studio.notGpsFriendly && (
              <div className="pt-1.5">
                <button
                  disabled
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-50 border border-red-200 text-red-500 rounded-xl text-xs font-semibold cursor-not-allowed shadow-2xs"
                  id="gps-warning-button"
                >
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-red-500" />
                  GPS is not reliable
                </button>
              </div>
            )}
          </div>
        )}

        {/* Maps Button */}
        {!studio.notGpsFriendly && (
          <a
            href={getDirectionsUrl(studio.address, studio.town, studio.zipCode)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#1A1615] hover:bg-black text-white rounded-xl text-xs font-semibold transition-all shadow-2xs cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5 shrink-0" />
            Navigate with Google Maps
          </a>
        )}
      </div>

      {/* Middle Section: Artists Header Info */}
      <div className="px-6 py-4 bg-zinc-50 border-b border-black/10 flex items-center justify-between shrink-0 shadow-xs">
        <div>
          <h3 className="text-xs font-mono font-bold text-[#5C5245] uppercase tracking-wider">
            Exhibiting Artists ({studio.artists.length})
          </h3>
          <p className="text-[10px] text-[#5C5245]/80 mt-0.5 font-medium">
            {studio.artists.length === 1
              ? "1 artist is showing work at this location."
              : `All ${studio.artists.length} artists are listed in individual cards below.`}
          </p>
        </div>
      </div>

      {/* Main Artists Cards Container */}
      <div className="p-6 space-y-6 flex-1 bg-[#fec811]">
        {studio.artists.map((artist) => {
          // Check if this artist matches the query
          const isQueryMatch =
            query.length > 0 &&
            (artist.name.toLowerCase().includes(query) ||
              artist.bio.toLowerCase().includes(query) ||
              artist.medium.toLowerCase().includes(query) ||
              (artist.secondaryMedium && artist.secondaryMedium.toLowerCase().includes(query)) ||
              (artist.userId && artist.userId.includes(query)));

          return (
            <ArtistCard
              key={artist.id}
              artist={artist}
              studioColor={getColor(artist.medium)}
              isQueryMatch={!!isQueryMatch}
            />
          );
        })}
      </div>
    </div>
  );
}
