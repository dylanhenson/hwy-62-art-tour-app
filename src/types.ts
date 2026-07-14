export interface Artist {
  id: string; // unique identifier
  userId?: string;
  name: string;
  phone?: string;
  email?: string;
  website?: string;
  instagram?: string;
  facebook?: string;
  medium: string;
  secondaryMedium?: string;
  bio: string;
  imageUrl: string;
  imageUrl2?: string;
  imageUrl3?: string;
  isHost: boolean;
  appointmentOnly?: boolean;
  weekendsShowingRaw?: string;
}

export interface Studio {
  studioNumber: number;
  studioName: string;
  address: string;
  town: string;
  zipCode: string;
  lat: number;
  lng: number;
  gpsFriendly: boolean;
  notGpsFriendly?: boolean;
  directions?: string;
  weekends: string[]; // e.g. ["Weekend 1", "Weekend 2", "Weekend 3"]
  artists: Artist[];
}

export interface MapFilters {
  searchQuery: string;
  showWeekend1: boolean;
  showWeekend2: boolean;
  showWeekend3: boolean;
  selectedMedium: string;
}

export function parseStudioNumberFromQuery(searchQuery: string): number | null {
  const trimmed = searchQuery.trim().toLowerCase();
  // Match "studio 60", "studio #60", "studio#60"
  const studioMatch = trimmed.match(/^studio\s*#?\s*(\d+)$/);
  if (studioMatch) {
    return parseInt(studioMatch[1], 10);
  }
  // Match "#60", "# 60"
  const hashMatch = trimmed.match(/^#\s*(\d+)$/);
  if (hashMatch) {
    return parseInt(hashMatch[1], 10);
  }
  // Match exact number "60"
  const exactMatch = trimmed.match(/^(\d+)$/);
  if (exactMatch) {
    return parseInt(exactMatch[1], 10);
  }
  return null;
}

