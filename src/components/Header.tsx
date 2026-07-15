import React, { useState } from "react";
import { Search, CalendarDays, Layers, SlidersHorizontal, ChevronDown, ChevronUp, X } from "lucide-react";
import { MapFilters } from "../types";

interface HeaderProps {
  filters: MapFilters;
  onFilterChange: (filters: MapFilters) => void;
  mediums: string[];
  isFiltersOpen: boolean;
  setIsFiltersOpen: (isOpen: boolean) => void;
}

export default function Header({
  filters,
  onFilterChange,
  mediums,
  isFiltersOpen,
  setIsFiltersOpen,
}: HeaderProps) {

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, searchQuery: e.target.value });
  };

  const handleMediumChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, selectedMedium: e.target.value });
  };

  const handleWeekend1Toggle = () => {
    onFilterChange({ ...filters, showWeekend1: !filters.showWeekend1 });
  };

  const handleWeekend2Toggle = () => {
    onFilterChange({ ...filters, showWeekend2: !filters.showWeekend2 });
  };

  const handleWeekend3Toggle = () => {
    onFilterChange({ ...filters, showWeekend3: !filters.showWeekend3 });
  };

  return (
    <header className="bg-[#fec811] border-b border-[#EAE3D5] sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-4">
        {/* Title and Top Actions */}
        <div className="flex flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-base md:text-2xl font-bold font-display tracking-tight text-[#1A1615]">
              Artist Studio Tour Map
            </h1>
            <p className="hidden md:block text-xs text-[#4A3C15] font-medium mt-0.5">
              Explore local artist studios, view biographies, and filter by weekend or artistic mediums.
            </p>
          </div>
        </div>

        {/* 1. Mobile Filter Section (Airbnb Style Scrollable Top Filters Bar) */}
        <div className="flex md:hidden flex-col gap-2 mt-1.5">
          {/* Horizontal Row of Pills (Scrollable for premium Airbnb feel) */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 -mx-4 px-4 whitespace-nowrap">
            {/* Medium Pill Dropdown with hidden real select */}
            <div className="relative inline-block shrink-0">
              <div className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer h-9 shadow-2xs ${
                filters.selectedMedium 
                  ? "bg-[#C85C40] text-white border-[#C85C40]" 
                  : "bg-white text-[#1A1615] border-black/10 hover:bg-zinc-50"
              }`}>
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span className="max-w-[110px] truncate">{filters.selectedMedium || "All Mediums"}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70 shrink-0" />
              </div>
              <select
                value={filters.selectedMedium}
                onChange={handleMediumChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              >
                <option value="">All Mediums</option>
                {mediums.map((med) => (
                  <option key={med} value={med}>
                    {med}
                  </option>
                ))}
              </select>
            </div>

            {/* Weekend Group with a Weekend header */}
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-full border border-black/10 shrink-0 h-9 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A3C15] pl-2.5 pr-1 select-none flex items-center gap-1">
                <CalendarDays className="w-3.5 h-3.5 text-[#C85C40]" />
                Weekends
              </span>
              <button
                onClick={handleWeekend1Toggle}
                className={`w-8 h-7 flex items-center justify-center text-xs font-bold rounded-full transition-all cursor-pointer ${
                  filters.showWeekend1
                    ? "bg-[#C85C40] text-white shadow-xs"
                    : "text-[#4F4744]/70 hover:text-[#1A1615] hover:bg-black/5"
                }`}
                title="Weekend 1"
              >
                1
              </button>
              <button
                onClick={handleWeekend2Toggle}
                className={`w-8 h-7 flex items-center justify-center text-xs font-bold rounded-full transition-all cursor-pointer ${
                  filters.showWeekend2
                    ? "bg-[#C85C40] text-white shadow-xs"
                    : "text-[#4F4744]/70 hover:text-[#1A1615] hover:bg-black/5"
                }`}
                title="Weekend 2"
              >
                2
              </button>
              <button
                onClick={handleWeekend3Toggle}
                className={`w-8 h-7 flex items-center justify-center text-xs font-bold rounded-full transition-all cursor-pointer ${
                  filters.showWeekend3
                    ? "bg-[#C85C40] text-white shadow-xs"
                    : "text-[#4F4744]/70 hover:text-[#1A1615] hover:bg-black/5"
                }`}
                title="Weekend 3"
              >
                3
              </button>
            </div>
          </div>
        </div>

        {/* 2. Desktop Filters Grid (Always visible and responsive on larger screens) */}
        <div className="hidden md:flex flex-col md:flex-row gap-3 items-stretch md:items-center mt-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C5245]" />
            <input
              type="text"
              value={filters.searchQuery}
              onChange={handleSearchChange}
              placeholder="Search artists, mediums, or studios..."
              className="w-full bg-white border border-black/10 rounded-xl pl-9 pr-10 py-2.5 text-base md:text-sm text-[#1A1615] placeholder-[#5C5245]/70 focus:outline-hidden focus:ring-2 focus:ring-[#C85C40]/20 focus:border-[#C85C40] focus:bg-white shadow-xs transition-all"
            />
            {filters.searchQuery && (
              <button
                type="button"
                onClick={() => onFilterChange({ ...filters, searchQuery: "" })}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5C5245] hover:text-[#1A1615] p-1.5 rounded-lg hover:bg-black/5 transition-all cursor-pointer flex items-center justify-center"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Medium selector */}
          <div className="relative min-w-[160px]">
            <Layers className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C5245] pointer-events-none" />
            <select
              value={filters.selectedMedium}
              onChange={handleMediumChange}
              className="w-full bg-white border border-black/10 rounded-xl pl-9 pr-8 py-2.5 text-base md:text-sm text-[#1A1615] focus:outline-hidden focus:ring-2 focus:ring-[#C85C40]/20 focus:border-[#C85C40] focus:bg-white appearance-none cursor-pointer transition-all shadow-xs"
            >
              <option value="">All Mediums</option>
              {mediums.map((med) => (
                <option key={med} value={med}>
                  {med}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#5C5245]">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>

          {/* Weekend Checkboxes */}
          <div className="flex gap-1.5 items-center bg-white border border-black/10 rounded-xl p-1 shrink-0 h-10 shadow-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A3C15] pl-2.5 pr-1 select-none flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5 text-[#C85C40]" />
              Weekends
            </span>
            <button
              onClick={handleWeekend1Toggle}
              className={`w-8 h-8 flex items-center justify-center text-xs font-bold rounded-lg transition-all cursor-pointer ${
                filters.showWeekend1
                  ? "bg-[#C85C40] text-white shadow-xs"
                  : "text-[#4F4744]/70 hover:text-[#1A1615] hover:bg-black/5"
              }`}
              title="Weekend 1"
            >
              1
            </button>
            <button
              onClick={handleWeekend2Toggle}
              className={`w-8 h-8 flex items-center justify-center text-xs font-bold rounded-lg transition-all cursor-pointer ${
                filters.showWeekend2
                  ? "bg-[#C85C40] text-white shadow-xs"
                  : "text-[#4F4744]/70 hover:text-[#1A1615] hover:bg-black/5"
              }`}
              title="Weekend 2"
            >
              2
            </button>
            <button
              onClick={handleWeekend3Toggle}
              className={`w-8 h-8 flex items-center justify-center text-xs font-bold rounded-lg transition-all cursor-pointer ${
                filters.showWeekend3
                  ? "bg-[#C85C40] text-white shadow-xs"
                  : "text-[#4F4744]/70 hover:text-[#1A1615] hover:bg-black/5"
              }`}
              title="Weekend 3"
            >
              3
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
