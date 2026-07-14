import { useEffect, useRef } from "react";
import L from "leaflet";
import { Studio, MapFilters, parseStudioNumberFromQuery } from "../types";
import { MEDIUM_COLORS } from "../data/defaultArtists";

interface MapContainerProps {
  studios: Studio[];
  selectedStudio: Studio | null;
  onSelectStudio: (studio: Studio | null) => void;
  isFiltersOpen: boolean;
  isMobileListMinimized: boolean;
  isMobile: boolean;
  filters: MapFilters;
}

export default function MapContainer({
  studios,
  selectedStudio,
  onSelectStudio,
  isFiltersOpen,
  isMobileListMinimized,
  isMobile,
  filters,
}: MapContainerProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<number, L.Marker>>(new Map());

  // Store selection handler in a stable ref to prevent map re-initialization
  const onSelectStudioRef = useRef(onSelectStudio);
  useEffect(() => {
    onSelectStudioRef.current = onSelectStudio;
  }, [onSelectStudio]);

  // Keep track of the last animated selected studio and studios list to prevent redundant restarts of Leaflet animations
  const lastSelectedStudioIdRef = useRef<number | null>(null);
  const lastStudiosHashRef = useRef<string>("");

  // Store previous weekend filters to detect when they change
  const prevWeekend1Ref = useRef(filters.showWeekend1);
  const prevWeekend2Ref = useRef(filters.showWeekend2);
  const prevWeekend3Ref = useRef(filters.showWeekend3);

  // Initialize Map (default center around Morongo Basin / Joshua Tree)
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Clean up if there is an existing map instance to prevent "Map container is already initialized" error
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Safety clean-up of any residual leaflet properties or elements in the container
    // @ts-ignore
    delete mapContainerRef.current._leaflet_id;
    mapContainerRef.current.innerHTML = "";

    // High Desert Morongo Basin (Yucca Valley, Joshua Tree, 29 Palms) center
    const defaultCenter: [number, number] = [34.1359, -116.2332];
    const defaultZoom = 10;

    const map = L.map(mapContainerRef.current, {
      zoomControl: false,
      scrollWheelZoom: true,
    }).setView(defaultCenter, defaultZoom);

    // Click elsewhere on map zooms out and clears selection
    map.on("click", (e) => {
      onSelectStudioRef.current(null);
    });

    // Beautiful, clean, flat CartoDB Voyager map that removes noisy topographic hillshading while maintaining soft sandy/desert colors, roads, and national park boundaries
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      {
        attribution:
          "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>",
        subdomains: "abcd",
        maxZoom: 20,
        r: typeof window !== "undefined" && window.devicePixelRatio > 1 ? "@2x" : "",
      } as any
    ).addTo(map);

    L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(map);

    mapInstanceRef.current = map;

    // Fast resize invalidate
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Create, Remove, and Sync Markers on Studios / Selection changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Remove existing markers
    markersRef.current.forEach((marker) => {
      marker.remove();
    });
    markersRef.current.clear();

    if (studios.length === 0) return;

    const targetStudioNum = parseStudioNumberFromQuery(filters.searchQuery);

    studios.forEach((studio) => {
      const isSelected = selectedStudio?.studioNumber === studio.studioNumber;
      const isTargetGlow = targetStudioNum !== null && studio.studioNumber === targetStudioNum;
      
      const color = "#C85C40"; // Rich, rusty reddish terracotta color to match the desert theme
      const primaryMedium = studio.artists[0]?.medium || "Default";
      const artistNames = studio.artists.map(a => a.name).join(", ");
      const tooltipText = `Studio #${studio.studioNumber}: ${artistNames} (${primaryMedium})`;

      // Dynamic sizing based on whether studio is shared (more than 1 artist)
      const isShared = studio.artists.length > 1;
      const size = isShared ? 38 : 32;
      const anchor = size / 2;

      // Class names for the marker element including conditional glow highlight
      const markerClasses = [
        "numbered-marker",
        isSelected ? "ring-4 ring-white/70 scale-125 border-[#2B2523] font-black shadow-2xl bg-[#C85C40]" : "hover:scale-115",
        isTargetGlow ? "glowing-marker shadow-2xl scale-110" : ""
      ].filter(Boolean).join(" ");

      // Circular numbered studio pin marker with modern desert contrast selection
      const markerHtml = `
        <div class="${markerClasses}" 
             style="width: ${size}px; height: ${size}px; font-size: ${isShared ? '14px' : '13px'}; background-color: ${color}; transition: all 0.2s ease-in-out;"
             title="${tooltipText}">
           ${studio.studioNumber}
         </div>
      `;

      const customIcon = L.divIcon({
        className: "custom-div-icon",
        html: markerHtml,
        iconSize: [size, size],
        iconAnchor: [anchor, anchor],
      });

      // Create marker with the custom icon directly
      const marker = L.marker([studio.lat, studio.lng], { icon: customIcon }).addTo(map);

      if (isSelected || isTargetGlow) {
        marker.setZIndexOffset(1000);
      } else {
        marker.setZIndexOffset(0);
      }

      // On marker click, select this Studio and center map slightly
      marker.on("click", (e) => {
        onSelectStudioRef.current(studio);
        L.DomEvent.stopPropagation(e);
      });

      markersRef.current.set(studio.studioNumber, marker);
    });

    return () => {
      markersRef.current.forEach((marker) => {
        marker.remove();
      });
      markersRef.current.clear();
    };
  }, [studios, selectedStudio, filters.searchQuery]);

  // Handle layout adjustments, zooming, and re-centering
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    const currentStudiosHash = studios.map((s) => s.studioNumber).join(",");
    const currentSelectedStudioId = selectedStudio?.studioNumber ?? null;

    const hasSelectedStudioChanged = currentSelectedStudioId !== lastSelectedStudioIdRef.current;
    const hasStudiosListChanged = currentStudiosHash !== lastStudiosHashRef.current;

    // Check if weekend filter changed compared to cached ref values
    const weekendFilterChanged =
      prevWeekend1Ref.current !== filters.showWeekend1 ||
      prevWeekend2Ref.current !== filters.showWeekend2 ||
      prevWeekend3Ref.current !== filters.showWeekend3;

    // Helper to calculate target coordinate and offsets
    const getTargetLatLng = (studio: Studio, zoom: number) => {
      let offsetY = 0;
      if (isMobile) {
        // Shifting the map center down by 110px pushes the geographical pin marker up
        // so it centers perfectly in the upper visible area above the 140px floating preview card.
        offsetY = 110;
      }
      const targetPoint = map.project([studio.lat, studio.lng], zoom);
      const offsetPoint = L.point(targetPoint.x, targetPoint.y + offsetY);
      return map.unproject(offsetPoint, zoom);
    };

    const updateMapPosition = (isInitialTargetChange: boolean) => {
      if (!mapInstanceRef.current || mapInstanceRef.current !== map) return;

      map.invalidateSize();

      // Stop any active panning/zooming animations to prevent overlapping transition conflicts
      map.stop();

      if (selectedStudio) {
        const zoom = 14;
        const targetLatLng = getTargetLatLng(selectedStudio, zoom);

        if (isInitialTargetChange) {
          // A beautiful, slow, cinematic flight to the selected studio dot
          map.flyTo(targetLatLng, zoom, {
            animate: true,
            duration: isMobile ? 1.8 : 1.2, // Smooth, slow, and cinematic
            easeLinearity: 0.25,
          });
        } else {
          // If the layout changed but it's the SAME selected studio, do NOT restart flyTo.
          // Instead, gently pan to adjust for the updated header/filters size.
          map.panTo(targetLatLng, {
            animate: true,
            duration: 0.5,
          });
        }
      } else if (studios.length > 0) {
        const bounds = L.latLngBounds(studios.map(s => [s.lat, s.lng]));
        
        let padTop = 60;
        let padBottom = 60;
        let padLeft = 60;
        let padRight = 60;

        if (isMobile) {
          padTop = isFiltersOpen ? 180 : 80;
          padBottom = isMobileListMinimized ? 90 : 280;
          padLeft = 30;
          padRight = 30;
        } else {
          padTop = 40;
          padBottom = 40;
          padLeft = 40;
          padRight = 40;
        }

        // Fit bounds of visible studios
        map.fitBounds(bounds, {
          paddingTopLeft: [padLeft, padTop],
          paddingBottomRight: [padRight, padBottom],
          maxZoom: 14,
          animate: true,
          duration: isInitialTargetChange ? 1.2 : 0.5, // Smoothly adjust if layout changed
        });
      }
    };

    // Trigger update based on what changed
    if (weekendFilterChanged) {
      // If weekend filter changed, do NOT reset the map position (center/zoom).
      // Keep it exactly where it is. Just cache the updated studio list hash and update size.
      map.invalidateSize();
      lastSelectedStudioIdRef.current = currentSelectedStudioId;
      lastStudiosHashRef.current = currentStudiosHash;
    } else if (hasSelectedStudioChanged || hasStudiosListChanged) {
      updateMapPosition(true);
      // Cache current targets to prevent redundant transition restarts
      lastSelectedStudioIdRef.current = currentSelectedStudioId;
      lastStudiosHashRef.current = currentStudiosHash;
    } else {
      // Just a layout change (like toggling filters or minimizing sidebar list)
      updateMapPosition(false);
    }

    // Always update refs to latest filters to capture the change for next run
    prevWeekend1Ref.current = filters.showWeekend1;
    prevWeekend2Ref.current = filters.showWeekend2;
    prevWeekend3Ref.current = filters.showWeekend3;

    // Call invalidateSize after the CSS container transitions complete to ensure absolute accuracy
    const timer = setTimeout(() => {
      if (mapInstanceRef.current && mapInstanceRef.current === map) {
        map.invalidateSize();
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [studios, selectedStudio, isFiltersOpen, isMobileListMinimized, isMobile, filters]);

  // Watch container resize
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize();
    });

    if (mapContainerRef.current) {
      resizeObserver.observe(mapContainerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[350px] md:min-h-full flex flex-col">
      <div
        id="leaflet-studio-map"
        ref={mapContainerRef}
        className="w-full flex-1 min-h-0 z-10"
        style={{ background: "#f4f4f5" }}
      />
      {studios.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-xs z-20 transition-all pointer-events-none">
          <div className="bg-white/95 px-6 py-4 rounded-xl shadow-lg border border-zinc-200 text-center max-w-sm pointer-events-auto">
            <p className="font-display font-medium text-zinc-900 text-sm">
              No Open Studios Found
            </p>
            <p className="text-[11px] text-zinc-500 mt-1 leading-normal">
              Try adjusting your search query, selecting different mediums, or selecting more weekends.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
