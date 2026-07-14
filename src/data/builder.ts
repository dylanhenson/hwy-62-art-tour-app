import * as fs from "fs";
import * as path from "path";

// Embedded CSV from the user's message
const csvPath = path.join(process.cwd(), "src/data/registrations.csv");
const fallbackPath = path.join(process.cwd(), "src/data/registrations-old.csv");

let csvData = "";
if (fs.existsSync(csvPath)) {
  const buffer = fs.readFileSync(csvPath);
  try {
    csvData = new TextDecoder("utf-8", { fatal: true }).decode(buffer);
  } catch (e) {
    console.log("Failed to decode registrations.csv as UTF-8. Falling back to windows-1252.");
    csvData = new TextDecoder("windows-1252").decode(buffer);
  }
} else if (fs.existsSync(fallbackPath)) {
  console.log("registrations.csv not found, using registrations-old.csv as a fallback.");
  const buffer = fs.readFileSync(fallbackPath);
  try {
    csvData = new TextDecoder("utf-8", { fatal: true }).decode(buffer);
  } catch (e) {
    console.log("Failed to decode registrations-old.csv as UTF-8. Falling back to windows-1252.");
    csvData = new TextDecoder("windows-1252").decode(buffer);
  }
} else {
  console.warn("No registration CSV files found. Skipping builder compilation to preserve pre-existing data.");
  process.exit(0);
}


function cleanText(text: string): string {
  if (!text) return text;
  
  // 1. Replace smart quotes with straight ones
  text = text
    .replace(/[\u201C\u201D]/g, '"') // smart double quotes
    .replace(/[\u2018\u2019]/g, "'"); // smart single quotes
  
  // 2. Convert Im to I'm, dont to don't, womens to women's (using word boundaries)
  text = text.replace(/\bIm\b/g, "I'm");
  text = text.replace(/\bim\b/g, "i'm");
  text = text.replace(/\bDont\b/g, "Don't");
  text = text.replace(/\bdont\b/g, "don't");
  text = text.replace(/\bWomens\b/g, "Women's");
  text = text.replace(/\bwomens\b/g, "women's");
  
  // 3. Standardize em-dashes and en-dashes to standard dashes (hyphens or clean dashes)
  text = text.replace(/[\u2014\u2013]/g, "—"); // standardize to EM DASH
  text = text.replace(/—maps\b/g, "-maps");     // standardize sun—maps / —maps to standard hyphens
  text = text.replace(/sun—maps\b/g, "sun-maps");
  
  return text;
}

function parseCSV(text: string): string[][] {
  text = cleanText(text);
  const result: string[][] = [];
  let row: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === '"') {
      if (inQuotes && text[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      row.push(current.trim());
      current = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && text[i + 1] === "\n") {
        i++;
      }
      row.push(current.trim());
      if (row.length > 0 && row.some(cell => cell !== "")) {
        result.push(row);
      }
      row = [];
      current = "";
    } else {
      current += char;
    }
  }
  if (current || row.length > 0) {
    row.push(current.trim());
    result.push(row);
  }
  return result;
}



function getField(row: any, keys: string[]): string {
  for (const key of keys) {
    if (row[key] !== undefined && row[key] !== null) {
      return String(row[key]);
    }
    const normKey = key.replace(/\r?\n/g, " ").trim().toLowerCase();
    for (const rowKey in row) {
      const normRowKey = rowKey.replace(/\r?\n/g, " ").trim().toLowerCase();
      if (normRowKey === normKey) {
        return String(row[rowKey]);
      }
    }
  }
  return "";
}

function parseWeekends(showingStr: string): string[] {
  if (!showingStr) return [];
  const str = showingStr.toLowerCase();
  const weekends: string[] = [];
  
  if (str.includes("all") || str.includes("three") || str.includes("all weekends")) {
    return ["Weekend 1", "Weekend 2", "Weekend 3"];
  }
  if (str.includes("1st") || str.includes("first") || str.includes("weekend 1") || str.includes("weekends 1") || str.includes("weekend1")) {
    weekends.push("Weekend 1");
  }
  if (str.includes("2nd") || str.includes("second") || str.includes("weekend 2") || str.includes("weekends 2") || str.includes("weekend2")) {
    weekends.push("Weekend 2");
  }
  if (str.includes("3rd") || str.includes("third") || str.includes("weekend 3") || str.includes("weekends 3") || str.includes("weekend3")) {
    weekends.push("Weekend 3");
  }
  
  // fallback for things like "1 & 2"
  if (weekends.length === 0) {
    if (str.includes("1")) weekends.push("Weekend 1");
    if (str.includes("2")) weekends.push("Weekend 2");
    if (str.includes("3")) weekends.push("Weekend 3");
  }
  
  return weekends;
}

async function run() {
  console.log("Starting parsing and join...");

  // 1. Read and parse artists registrations
  const parsedArtists = parseCSV(csvData);
  if (parsedArtists.length < 2) {
    throw new Error("Artist CSV seems empty or invalid");
  }
  const artistHeaders = parsedArtists[0];
  const artistRows = parsedArtists.slice(1).map(row => {
    const obj: { [key: string]: string } = {};
    artistHeaders.forEach((header, index) => {
      obj[header] = row[index] || "";
    });
    return obj;
  });

  // 2. Read and parse studios CSV (optional fallback)
  const studiosCsvPath = path.join(process.cwd(), "src/data/studios.csv");
  const hasStudiosCsv = fs.existsSync(studiosCsvPath);
  let parsedStudios: string[][] = [];
  let studioRows: any[] = [];

  if (hasStudiosCsv) {
    const studiosCsvContent = fs.readFileSync(studiosCsvPath, "utf-8");
    parsedStudios = parseCSV(studiosCsvContent);
    if (parsedStudios.length >= 2) {
      const studioHeaders = parsedStudios[0];
      studioRows = parsedStudios.slice(1).map(row => {
        const obj: { [key: string]: string } = {};
        studioHeaders.forEach((header, index) => {
          obj[header] = row[index] || "";
        });
        return obj;
      });
    }
  }

  // 3. Group studioRows by Studio Number to collect weekends and coords
  const studioGroups: { [key: number]: { weekends: string[]; lat: number; lng: number; rows: any[] } } = {};
  
  // Check if artistRows have lat/lng columns (like in the new proposed format)
  const firstArtistRow = artistRows[0] || {};
  const hasLatLngInArtists = getField(firstArtistRow, ["latitude", "Latitude"]) !== "" && 
                             getField(firstArtistRow, ["longitude", "Longitude"]) !== "";
  
  if (hasLatLngInArtists) {
    console.log("Detecting latitude/longitude directly in artist registrations. Using it for studio locations!");
    artistRows.forEach(row => {
      const studioNumStr = getField(row, ["STUDIO NUMBER", "Studio Number"]);
      const studioNum = parseInt(studioNumStr, 10);
      if (isNaN(studioNum)) return;
      
      const latVal = getField(row, ["latitude", "Latitude"]);
      const lngVal = getField(row, ["longitude", "Longitude"]);
      const lat = parseFloat(latVal) || 0;
      const lng = parseFloat(lngVal) || 0;
      
      if (!studioGroups[studioNum]) {
        studioGroups[studioNum] = {
          weekends: [],
          lat: lat,
          lng: lng,
          rows: []
        };
      }
      
      studioGroups[studioNum].rows.push(row);
      
      const weekendsShowingStr = getField(row, ["Weekends Showing", "I will be showing:", "Weekend"]);
      const parsedWknds = parseWeekends(weekendsShowingStr);
      parsedWknds.forEach(wknd => {
        if (wknd && !studioGroups[studioNum].weekends.includes(wknd)) {
          studioGroups[studioNum].weekends.push(wknd);
        }
      });
    });
  } else {
    if (!hasStudiosCsv) {
      throw new Error("No studios.csv found, and registrations.csv is missing latitude/longitude columns!");
    }
    studioRows.forEach(row => {
      const studioNumStr = row["Studio Number"] || row["STUDIO NUMBER"];
      const studioNum = parseInt(studioNumStr, 10);
      if (isNaN(studioNum)) return;

      if (!studioGroups[studioNum]) {
        studioGroups[studioNum] = {
          weekends: [],
          lat: parseFloat(row["Latitude"]) || parseFloat(row["latitude"]) || 0,
          lng: parseFloat(row["Longitude"]) || parseFloat(row["longitude"]) || 0,
          rows: []
        };
      }
      studioGroups[studioNum].rows.push(row);
      const wknd = (row["Weekend"] || row["Weekend Showing"] || "")?.trim();
      if (wknd && !studioGroups[studioNum].weekends.includes(wknd)) {
        studioGroups[studioNum].weekends.push(wknd);
      }
    });
  }

  // 4. Group artists by STUDIO NUMBER
  const artistsByStudio: { [key: number]: any[] } = {};
  artistRows.forEach(row => {
    const studioNumStr = getField(row, ["STUDIO NUMBER", "Studio Number"]);
    const studioNum = parseInt(studioNumStr, 10);
    if (isNaN(studioNum)) return;

    if (!artistsByStudio[studioNum]) {
      artistsByStudio[studioNum] = [];
    }
    artistsByStudio[studioNum].push(row);
  });

  // 5. Build Unified Studio structure
  const finalStudios: any[] = [];
  let artistIndexCount = 0;

  Object.keys(studioGroups).forEach(studioNumStr => {
    const studioNum = parseInt(studioNumStr, 10);
    const studioMeta = studioGroups[studioNum];
    const rawArtists = artistsByStudio[studioNum] || [];

    // Skip studios with zero coordinates (unless they are valid, but keep coords safe)
    if (studioMeta.lat === 0 && studioMeta.lng === 0) {
      console.log(`Warning: Studio #${studioNum} has 0,0 coordinates. Skipping...`);
      return;
    }

    const artistsList: any[] = rawArtists.map((row, idx) => {
      artistIndexCount++;
      const firstName = getField(row, ["First name", "First Name"]) || "";
      const lastName = getField(row, ["Last name", "Last Name"]) || "";
      const fullName = `${firstName} ${lastName}`.trim();
      
      const name = getField(row, [
        "Artist Listing All Caps\n- FOR CATALOG",
        "Artist Listing All Caps - FOR CATALOG",
        "Artist Listing All Caps",
        "What do you want your artist name (or studio) listed as?",
        "ARTIST NAME - To use in catalog"
      ]) || fullName || `Artist ${artistIndexCount}`;
      
      const medium = getField(row, ["Select Your Primary Medium", "Select One Primary Medium"])?.trim() || "Default";
      const secondaryMedium = getField(row, ["Secondary Medium (OPTIONAL)", "Secondary Medium"])?.trim() || "";
      const bio = getField(row, [
        "Artist statement - 50 WORDS MAX! (will be returned if your count is over 50 words)",
        "Artist statement",
        "Bio",
        "Artist statement - 50 WORDS MAX!"
      ])?.trim() || "Creative desert artist showcasing fine artwork.";
      
      const isHostStr = getField(row, [
        "Host Artist (list first for shared studios)",
        "If you're sharing a studio who is the designated host artist?"
      ]) || "";
      
      const soloOrShared = getField(row, ["Solo or Shared"]) || "";
      const showingStr = getField(row, ["Weekends Showing", "I will be showing:"]) || "";
      
      const isHost = 
        soloOrShared.toLowerCase().includes("solo") ||
        showingStr.toLowerCase().includes("alone") || 
        isHostStr.toLowerCase().includes("myself") || 
        isHostStr.toLowerCase().includes("host") ||
        (isHostStr.trim() !== "" && (
          name.toLowerCase().includes(isHostStr.trim().toLowerCase()) ||
          lastName.toLowerCase().includes(isHostStr.trim().toLowerCase())
        ));

      const phone = getField(row, [
        "Listed Artist Phone Number",
        "PHONE - TO INCLUDE IN CATLOG LISTING",
        "Artist Phone Number for catalog (optional)",
        "Primary Phone Number"
      ]) || "";
      
      const email = getField(row, [
        "Listed Email Address",
        "Email Address - to include in catlog listing",
        "E-mail",
        "Email"
      ]) || "";
      
      const website = getField(row, [
        "WEBSITE FOR CATALOG",
        "Website Cleaned up for Catalog Listing",
        "Website URL"
      ]) || "";
      
      const instagram = getField(row, [
        "IG FOR CATALOG",
        "Instagram for Catalog",
        "Instagram Username",
        "IG Formatting"
      ]) || "";
      
      const facebook = getField(row, [
        "FB FOR CATALOG",
        "Facebook Cleaned up for Catalog",
        "Facebook Username or Page Name",
        "reformatted FB"
      ]) || "";
      
      const appointmentOnly = getField(row, ["Also Available By Appointment?"])?.toLowerCase() === "yes" || 
                              showingStr.toLowerCase().includes("appointment");

      const artistIdVal = getField(row, ["artist_id", "artist id", "Artist ID", "ARTIST ID", "artist-id"])?.trim();
      const userId = getField(row, ["USER ID", "User ID"]);
      const artistId = artistIdVal ? `artist-${artistIdVal}` : `artist-${userId || artistIndexCount}`;

      // Automatically construct public URLs pointing to the public GitHub repository's optimized WebP files. No fallbacks!
      const imageUrl = artistIdVal ? `https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/${artistIdVal}_1.webp` : "";
      const imageUrl2 = artistIdVal ? `https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/${artistIdVal}_2.webp` : undefined;
      const imageUrl3 = artistIdVal ? `https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/${artistIdVal}_3.webp` : undefined;

      return {
        id: artistId,
        userId: userId || undefined,
        name,
        phone: phone ? phone.trim() : undefined,
        email: email ? email.trim() : undefined,
        website: website ? website.trim() : undefined,
        instagram: instagram ? instagram.trim() : undefined,
        facebook: facebook ? facebook.trim() : undefined,
        medium,
        secondaryMedium: secondaryMedium ? secondaryMedium : undefined,
        bio,
        imageUrl,
        imageUrl2,
        imageUrl3,
        isHost,
        appointmentOnly: appointmentOnly ? true : undefined,
        weekendsShowingRaw: showingStr || undefined
      };
    });

    // If there are no artists registered for this studio, skip it so we only show real, registered studios and artists
    if (artistsList.length === 0) {
      console.log(`Skipping Studio #${studioNum} as it has no registered artists.`);
      return;
    }

    // Sort artists so host is first
    artistsList.sort((a, b) => (b.isHost ? 1 : 0) - (a.isHost ? 1 : 0));

    // Derive Studio Metadata from first/host artist or raw rows
    const primaryArtist = artistsList[0];
    const sourceRow = rawArtists.find(r => {
      const rName = getField(r, [
        "Artist Listing All Caps\n- FOR CATALOG",
        "Artist Listing All Caps - FOR CATALOG",
        "Artist Listing All Caps",
        "What do you want your artist name (or studio) listed as?",
        "ARTIST NAME - To use in catalog"
      ]);
      return rName === primaryArtist.name;
    }) || rawArtists[0] || {};

    const address = (getField(sourceRow, ["STUDIO ADDRESS", "Studio Address"]) || "Desert Studio Location").trim();
    
    let town = getField(sourceRow, ["Town"])?.trim();
    let zipCode = getField(sourceRow, ["Zip Code"])?.trim();

    if (!town || !zipCode) {
      const zipMatch = address.match(/\b(922\d{2})\b/);
      if (zipMatch) {
        zipCode = zipMatch[1];
      } else {
        zipCode = "92252";
      }
      
      const parts = address.split(",").map(p => p.trim());
      if (parts.length >= 2) {
        const potentialTown = parts[parts.length - 2];
        if (potentialTown && potentialTown.toLowerCase() !== "ca" && potentialTown.toLowerCase() !== "california") {
          town = potentialTown;
        } else {
          town = parts[1];
        }
      }
      if (!town) {
        town = "Joshua Tree";
      }
    }
    
    const gpsFriendlyVal = getField(sourceRow, [
      "GPS Friendly?",
      "Is your address GPS Friendly? (No means put warning in catalog listing"
    ]) || "";
    const gpsFriendly = !gpsFriendlyVal.toLowerCase().includes("no");
    
    const notGpsFriendlyVal = getField(sourceRow, ["Not GPS Friendly"]) || "";
    const notGpsFriendly = notGpsFriendlyVal.trim().toLowerCase().includes("don't use gps");
    
    const directions = getField(sourceRow, [
      "TURN BY TURN DIRECTIONS\n(only listed for host artist on shared studios)",
      "TURN BY TURN DIRECTIONS - (only listed for host artist on shared studios)",
      "TURN BY TURN DIRECTIONS",
      "John's Reworked Directions - Use in Catalog",
      "Studio Directions - Only required from solo and host artists at studios that are not GPS friendly.",
      "Studio Directions -DIRECTLY FROM REGISTRATION (comments in grey can be ignored)"
    ]) || "";

    const csvStudioName = studioMeta.rows && studioMeta.rows[0] ? studioMeta.rows[0]["Studio or Venue"] : "";
    const isPlaceholder = primaryArtist.id.startsWith("studio-placeholder-");
    const studioName = (isPlaceholder && csvStudioName) ? csvStudioName : (
      primaryArtist.name.toLowerCase().includes("studio") || primaryArtist.name.toLowerCase().includes("shop") || primaryArtist.name.toLowerCase().includes("sanctuary") || primaryArtist.name.toLowerCase().includes("space")
        ? primaryArtist.name
        : `${primaryArtist.name} Studio`
    );

    finalStudios.push({
      studioNumber: studioNum,
      studioName,
      address,
      town,
      zipCode,
      lat: studioMeta.lat,
      lng: studioMeta.lng,
      gpsFriendly,
      notGpsFriendly,
      directions: directions ? directions.trim() : undefined,
      weekends: studioMeta.weekends,
      artists: artistsList
    });
  });

  // Sort studios by studio number ascending
  finalStudios.sort((a, b) => a.studioNumber - b.studioNumber);

  // Generate output TypeScript file
  const outputFileContent = `import { Studio } from "../types";

export const MEDIUM_COLORS: { [key: string]: string } = {
  "Painting": "#C85C40", // Terracotta clay
  "Ceramics": "#B57B4C", // Earthy sienna amber
  "Printmaking": "#5B7C63", // Muted Sage Green
  "Glassworking": "#4E7E85", // Muted Desert Sky Blue/Cyan
  "Glass": "#4E7E85", // Muted Desert Sky Blue/Cyan
  "Woodworking": "#866D59", // Natural Wood brown
  "Woodwork": "#866D59", // Natural Wood brown
  "Photography": "#546E7A", // Dusk Slate
  "Fiber arts/textiles": "#827397", // Desert Lavender
  "Textiles": "#827397", // Desert Lavender
  "Jewelry": "#C49A45", // Warm Ochre Gold
  "Metal Work": "#4F5D75", // Deep Pewter
  "Mixed Media": "#9A6D7F", // Warm Rose Sunset
  "Assemblage": "#7A5C50", // Mocha Clay
  "Installation": "#5E503F", // Dark Bronze
  "Sculpture": "#6C7A6B", // Light Olive
  "Drawing": "#9E8C6C", // Sandy Khaki
  "Illustration": "#4B6B75", // Dusty Indigo
  "Ink": "#3E4E50", // Charcoal Pine
  "Multi-media": "#B87D4B", // Rich Rust
  "Other": "#706E6B", // Warm Grey
  "Default": "#706E6B" // Warm Grey
};

export const DEFAULT_STUDIOS: Studio[] = ${JSON.stringify(finalStudios, null, 2)};
`;

  const outputPath = path.join(process.cwd(), "src/data/defaultArtists.ts");
  fs.writeFileSync(outputPath, outputFileContent, "utf-8");
  console.log(`Successfully compiled and wrote ${finalStudios.length} studios to ${outputPath}`);
}

run().catch(err => {
  console.error("Error in builder:", err);
  process.exit(1);
});

