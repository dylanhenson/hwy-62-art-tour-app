/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MapContainer from "./components/MapContainer";
import { DEFAULT_STUDIOS } from "./data/defaultArtists";
import { MapFilters, Studio, parseStudioNumberFromQuery } from "./types";

export default function App() {
  // 1. Map Filtering State supporting 3 exhibition weekends
  const [filters, setFilters] = useState<MapFilters>({
    searchQuery: "",
    showWeekend1: true,
    showWeekend2: true,
    showWeekend3: true,
    selectedMedium: "",
  });

  // 2. Studios Dataset State
  const [studios] = useState<Studio[]>(DEFAULT_STUDIOS);
  const [selectedStudio, setSelectedStudio] = useState<Studio | null>(null);
  const [showMobileFullProfile, setShowMobileFullProfile] = useState(false);

  const handleSelectStudio = (studio: Studio | null) => {
    setSelectedStudio(studio);
    if (!studio) {
      setShowMobileFullProfile(false);
    }
  };

  // 3. Layout and Mobile Viewport Detection
  const [isMobile, setIsMobile] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [mobileHeightMode, setMobileHeightMode] = useState<"minimized" | "half" | "full">("minimized");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-expand mobile bottom sheet when typing a search query to show results instantly
  useEffect(() => {
    if (isMobile && filters.searchQuery.trim().length > 0) {
      if (mobileHeightMode === "minimized") {
        setMobileHeightMode("half");
      }
    }
  }, [filters.searchQuery, isMobile]);

  // 4. Collect unique mediums across all artists
  const uniqueMediums = useMemo(() => {
    const categories = new Set<string>();
    studios.forEach((studio) => {
      studio.artists.forEach((artist) => {
        if (artist.medium) {
          categories.add(artist.medium);
        }
      });
    });
    return Array.from(categories).sort();
  }, [studios]);

  // 8. Filter and Sort studios based on search, medium, and weekend checkboxes
  const filteredStudios = useMemo(() => {
    const list = studios.filter((studio) => {
      // a. Weekend Availability Filter
      const showAnyWeekend = filters.showWeekend1 || filters.showWeekend2 || filters.showWeekend3;
      if (!showAnyWeekend) return false;

      let isAvailableOnSelectedWeekends = false;
      if (filters.showWeekend1 && studio.weekends.includes("Weekend 1")) {
        isAvailableOnSelectedWeekends = true;
      }
      if (filters.showWeekend2 && studio.weekends.includes("Weekend 2")) {
        isAvailableOnSelectedWeekends = true;
      }
      if (filters.showWeekend3 && studio.weekends.includes("Weekend 3")) {
        isAvailableOnSelectedWeekends = true;
      }
      if (!isAvailableOnSelectedWeekends) return false;

      // b. Medium/Category Filter (matches if at least one artist in studio matches)
      if (filters.selectedMedium) {
        const hasMatchingMedium = studio.artists.some(
          (artist) => artist.medium === filters.selectedMedium
        );
        if (!hasMatchingMedium) return false;
      }

      // c. Full Text Search Filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const targetStudioNum = parseStudioNumberFromQuery(filters.searchQuery);
        
        // Match studio number (exact match of text or exact match of parsed studio number)
        const matchesStudioNum =
          studio.studioNumber.toString() === query ||
          (targetStudioNum !== null && studio.studioNumber === targetStudioNum);

        // Match address/location details
        const matchesAddress =
          studio.address.toLowerCase().includes(query) ||
          studio.town.toLowerCase().includes(query) ||
          studio.zipCode.includes(query) ||
          (studio.directions && studio.directions.toLowerCase().includes(query));

        // Match artist details at this studio
        const matchesArtist = studio.artists.some((artist) => {
          return (
            artist.name.toLowerCase().includes(query) ||
            artist.bio.toLowerCase().includes(query) ||
            artist.medium.toLowerCase().includes(query) ||
            (artist.secondaryMedium && artist.secondaryMedium.toLowerCase().includes(query)) ||
            (artist.phone && artist.phone.includes(query)) ||
            (artist.email && artist.email.toLowerCase().includes(query)) ||
            (artist.userId && artist.userId.includes(query))
          );
        });

        if (!matchesStudioNum && !matchesAddress && !matchesArtist) {
          return false;
        }
      }

      return true;
    });

    // Sort matching studio numbers to the top
    if (filters.searchQuery) {
      const targetStudioNum = parseStudioNumberFromQuery(filters.searchQuery);
      if (targetStudioNum !== null) {
        return [...list].sort((a, b) => {
          const aIsExact = a.studioNumber === targetStudioNum;
          const bIsExact = b.studioNumber === targetStudioNum;
          if (aIsExact && !bIsExact) return -1;
          if (!aIsExact && bIsExact) return 1;
          return 0; // preserve relative order otherwise
        });
      }
    }

    return list;
  }, [studios, filters]);

  // Sync Selected Studio: if it is filtered out, close details
  useEffect(() => {
    if (selectedStudio) {
      const stillVisible = filteredStudios.some(
        (s) => s.studioNumber === selectedStudio.studioNumber
      );
      if (!stillVisible) {
        setSelectedStudio(null);
      }
    }
  }, [filteredStudios, selectedStudio]);

  return (
    <div className="flex flex-col h-full w-full overflow-hidden bg-[#fec811] font-sans antialiased text-[#2B2523]">
      {/* Settings / Search header */}
      <Header
        filters={filters}
        onFilterChange={setFilters}
        mediums={uniqueMediums}
        isFiltersOpen={isFiltersOpen}
        setIsFiltersOpen={setIsFiltersOpen}
      />

      {/* Main Viewport Split Layout */}
      <main className="flex-1 min-h-0 relative flex flex-col md:grid md:grid-cols-[420px_1fr]">
        {/* Directory Sidebar list & detail drawers */}
        <Sidebar
          studios={studios}
          filteredStudios={filteredStudios}
          selectedStudio={selectedStudio}
          onSelectStudio={handleSelectStudio}
          isMobile={isMobile}
          mobileHeightMode={mobileHeightMode}
          setMobileHeightMode={setMobileHeightMode}
          showMobileFullProfile={showMobileFullProfile}
          setShowMobileFullProfile={setShowMobileFullProfile}
          filters={filters}
          onFilterChange={setFilters}
        />

        {/* High-Fidelity Leaflet Map */}
        <div className="relative w-full flex-1 md:h-full min-h-0 z-10">
          <MapContainer
            studios={filteredStudios}
            selectedStudio={selectedStudio}
            onSelectStudio={handleSelectStudio}
            isFiltersOpen={isFiltersOpen}
            mobileHeightMode={mobileHeightMode}
            isMobile={isMobile}
            filters={filters}
          />
        </div>
      </main>
    </div>
  );
}
