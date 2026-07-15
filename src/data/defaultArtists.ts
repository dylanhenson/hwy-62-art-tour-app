import { Studio } from "../types";

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

export const DEFAULT_STUDIOS: Studio[] = [
  {
    "studioNumber": 1,
    "studioName": "MARK HEUSTON Studio",
    "address": "83230 Garden Ave, Wonder Valley, CA",
    "town": "Wonder Valley",
    "zipCode": "92252",
    "lat": 34.155373,
    "lng": -115.8758354,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in 29 Palms \n N on Godwin Rd. 2 miles\n E on Amboy Road 5 miles\n N on Shadow Mountain Rd. 1.25 miles\n Pink cabin with solar panels on left.",
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-heuston_mark",
        "name": "MARK HEUSTON",
        "phone": "760-596-9210",
        "email": "markheuston7@gmail.com",
        "website": "markheuston7.wixsite.com/website",
        "medium": "Metal Work",
        "secondaryMedium": "Sculpture",
        "bio": "Expressing my love for the desert by interpreting and defending desert culture, wildlife, and landscapes. Extensive use of found (recycled) metals, off grid solar, and earth friendly processes are important to me.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/heuston_mark_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/heuston_mark_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/heuston_mark_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 2,
    "studioName": "WONDER MOUNTAIN COLOR Studio",
    "address": "5268 Danby Rd, Twentynine Palms, CA",
    "town": "Twentynine Palms",
    "zipCode": "92252",
    "lat": 34.1587984,
    "lng": -115.8969123,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in 29 Palms\nN on Ironage RD 3.1 miles\nL on Amboy RD 1.4 miles\nL on Danby RD 0.1 miles\nThe studio is in the house on the right.",
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-baker_emily",
        "name": "WONDER MOUNTAIN COLOR",
        "phone": "206-992-3932",
        "email": "emilybakerworks@gmail.com",
        "website": "https://you-joy.life/wonder-mountain-color",
        "instagram": "@wondermountaincolor",
        "medium": "Painting",
        "secondaryMedium": "Mixed Media",
        "bio": "My paintings are a dreamlike dialogue with the wind and sun-maps of a life lived in collaboration with the land. Visit my workspace to see handmade pigments by Wonder Mountain Color, where Mojave minerals become an abstract prayer to slow living, a quiet pace with the local stones.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/baker_emily_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/baker_emily_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/baker_emily_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 3,
    "studioName": "ANDREW G SANCHEZ Studio",
    "address": "3113 Amador Ave, Wonder Valley, CA",
    "town": "Wonder Valley",
    "zipCode": "92252",
    "lat": 34.1991546,
    "lng": -115.9948173,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-sanchez_andrew",
        "name": "ANDREW G SANCHEZ",
        "phone": "562-278-6601",
        "email": "thisistheandrew@gmail.com",
        "instagram": "@AmadorAcres",
        "medium": "Ceramics",
        "secondaryMedium": "Painting",
        "bio": "Raw, experimental, and grounded in clay, I shape stories through texture and fire. My work blends painting and ceramics, instinct over perfection. I chase feelings. Each piece holds movement, memory, and grit, honoring process as truth and imperfection as beauty, always becoming, never fixed or complete.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/sanchez_andrew_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/sanchez_andrew_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/sanchez_andrew_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      },
      {
        "id": "artist-bogysanchez_morgan",
        "name": "MORGAN H. BOGY-SANCHEZ",
        "phone": "760-361-9062",
        "email": "morgan@desertsistersco.com",
        "website": "Desertsistersco.com",
        "instagram": "@DesertSistersCo",
        "medium": "Painting",
        "secondaryMedium": "Printmaking",
        "bio": "Morgan Bogy-Sanchez is a multimedia artist whose work spans textiles, ceramics, painting, drawing, and printmaking, inspired by the Mojave Desert and her love of nature. A breast cancer survivor and advocate, she shares her story through art, creating work rooted in resilience, connection, and a deep sense of place and culture.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bogysanchez_morgan_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bogysanchez_morgan_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bogysanchez_morgan_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 4,
    "studioName": "ANNA STUMP Studio",
    "address": "74256 Mesa Dr, Twentynine Palms, CA",
    "town": "Twentynine Palms",
    "zipCode": "92252",
    "lat": 34.1797715,
    "lng": -116.0420473,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-stump_anna",
        "name": "ANNA STUMP",
        "email": "amstump@gmail.com",
        "website": "annastump.com",
        "instagram": "@amstump",
        "medium": "Painting",
        "secondaryMedium": "Mixed Media",
        "bio": "Welcome to the original dairy farm of 29 Palms, built in 1930. We don't have cows, but we do have friendly donkeys, an old barn, a milk truck and an oasis. Anna's work is painting on metal, inspired by the desert landscapes. Please visit our Desert Dairy.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/stump_anna_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/stump_anna_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/stump_anna_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-meyer_ted",
        "name": "TED MEYER",
        "phone": "323-683-2205",
        "email": "Ted@artyourworld.com",
        "website": "TedMeyer.Com",
        "instagram": "@TedMeyerArt",
        "facebook": "ArtYourWorld",
        "medium": "Painting",
        "bio": "This art tour, along with my desert painting I will be showing my series of large abstracts influenced by classic television reruns.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/meyer_ted_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/meyer_ted_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/meyer_ted_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 5,
    "studioName": "JENNIFER MATHEWS Studio",
    "address": "74945 Alta Loma Dr, Twentynine Palms, CA",
    "town": "Twentynine Palms",
    "zipCode": "92252",
    "lat": 34.1232401,
    "lng": -116.0269127,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-mathews_jennifer",
        "name": "JENNIFER MATHEWS",
        "phone": "949-689-0625",
        "email": "Jmathews1t@icloud.com",
        "website": "jmathewsfineart.com",
        "instagram": "@jmathews1t",
        "facebook": "Jennifer.S.Mathews.1",
        "medium": "Painting",
        "bio": "Stop by Roadrunner Art Studio, my desert oasis just outside the JTNP/29 Palms entrance. See how the surprising beauty and quiet energy of this creative space inspires each of my oil paintings.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mathews_jennifer_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mathews_jennifer_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mathews_jennifer_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 6,
    "studioName": "DAVID ISAKSON Studio",
    "address": "7507 Persia Ave, Twentynine Palms, CA",
    "town": "Twentynine Palms",
    "zipCode": "92252",
    "lat": 34.1176098,
    "lng": -116.0265308,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-isakson_david",
        "name": "DAVID ISAKSON",
        "phone": "818-519-1792",
        "email": "canofmeatfilm@yahoo.com",
        "instagram": "@david.isakson",
        "medium": "Assemblage",
        "bio": "I weld and join materials to make humorous deconstructions out of everyday objects. I'm a prize-winning self-taught assemblage sculptor. Come and see me where I work.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/isakson_david_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/isakson_david_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/isakson_david_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 7,
    "studioName": "JOSHR Studio",
    "address": "74668 Twilight Dr, Twentynine Palms, CA",
    "town": "Twentynine Palms",
    "zipCode": "92252",
    "lat": 34.1145001,
    "lng": -116.0334163,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-grelock_josh",
        "name": "JOSHR",
        "email": "joshgrelock@yahoo.com",
        "instagram": "@therealjoshr",
        "medium": "Painting",
        "secondaryMedium": "Printmaking",
        "bio": "JOSHR is a painter, muralist and printmaker influenced by his childhood love for cartoons, horror films and skateboarding culture. Coming up in the 90's SoCal punk and graffiti scene. JOSHR still loves working with spray paint and neon colors. Life in 29 Palms has made the desert his inspiration.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/grelock_josh_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/grelock_josh_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/grelock_josh_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-hoshizaki_ellie",
        "name": "ELLIE HOSHIZAKI (ELHOSH)",
        "email": "elena.hoshizaki@gmail.com",
        "website": "elhosh.com",
        "instagram": "@el.hosh",
        "medium": "Mixed Media",
        "secondaryMedium": "Installation",
        "bio": "Ellie creates desert-inspired works that blur the line between landscape and dream. Through sculpture, print, and found materials, she explores portals, symbols, and hidden worlds—inviting a sense of curiosity within a playful, otherworldly dimension.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hoshizaki_ellie_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hoshizaki_ellie_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hoshizaki_ellie_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-spady_matthew",
        "name": "MATTHEW E SPADY",
        "phone": "650-740-4839",
        "email": "matthew.spady@gmail.com",
        "instagram": "@29problems",
        "medium": "Woodwork",
        "secondaryMedium": "Mixed Media",
        "bio": "Matthew is a musician, composer, and multimedia artist/fabricator living in Twentynine Palms, California. Influenced by an eclectic background in music and manufacturing, Matthew's work explores natural and intuitively derived aspects of time, harmony, texture, and memory in a visual context, crossing media and method as necessary.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/spady_matthew_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/spady_matthew_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/spady_matthew_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-nun_punk",
        "name": "PUNK NUN",
        "phone": "213-247-5713",
        "email": "punk.nun29@gmail.com",
        "instagram": "@punk.nun29",
        "medium": "Painting",
        "secondaryMedium": "Photography",
        "bio": "29 Palms has an art scene that's as hot as temperatures in July. This year, Punk Nun joins Art Tours as a painter and photographer. Her space may be shady, but her love of art is not!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/nun_punk_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/nun_punk_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/nun_punk_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-straziuso_tayler",
        "name": "STRAY CERAMICS",
        "email": "strayceramics@gmail.com",
        "website": "strayceramics.com/",
        "instagram": "@strayceramics",
        "medium": "Ceramics",
        "bio": "My work focuses on celebrating the female form and making everyday ceramics for all of the badass misfits that live life a little differently. Drawing inspiration from our beautiful desert, the creatures that live in it, women's empowerment and biker culture.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/straziuso_tayler_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/straziuso_tayler_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/straziuso_tayler_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 8,
    "studioName": "GRETCHEN GRUNT Studio",
    "address": "6847 Adobe Rd, Twentynine Palms, CA",
    "town": "Twentynine Palms",
    "zipCode": "92252",
    "lat": 34.1295686,
    "lng": -116.0540412,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-grunt_gretchen",
        "name": "GRETCHEN GRUNT",
        "phone": "760-361-3461",
        "email": "29palmscreativecenter@gmail.com",
        "website": "29palmsart.com/",
        "instagram": "@29PalmsCreativeCenter",
        "facebook": "29PalmsCreativeCenter",
        "medium": "Ceramics",
        "secondaryMedium": "Multi-media",
        "bio": "Gretchen returned to her hometown to establish a creative compound where artists work and teach. Today, resident artists Sarah Jane Pepper, Allie Jimenez, Liv Stofko, and Wendell Hunt welcome you into their interactive studio demos featuring pottery, glass and copper jewelry, wood burning, collage, encaustic painting, tie-dye, quilts, and stained glass.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/grunt_gretchen_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/grunt_gretchen_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/grunt_gretchen_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-jimenez_allie",
        "name": "ALLIE JIMENEZ",
        "phone": "760-808-2474",
        "email": "Thepourtician@outlook.com",
        "instagram": "@thepourtician",
        "facebook": "ThePourtician",
        "medium": "Other",
        "secondaryMedium": "Painting",
        "bio": "Born and raised in Twentynine Palms, the desert has deeply shaped Allie's perspective and creativity. She works primarily with resin and also creates miniature watercolor paintings. She is drawn to the charm of tiny things, desert life, and the enigma of death and dying.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/jimenez_allie_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/jimenez_allie_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/jimenez_allie_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-stofko_liv",
        "name": "LIV STOFKO",
        "phone": "714-308-7196",
        "email": "liv.stofko@gmail.com",
        "website": "livstofko.com",
        "instagram": "@lodi.dottie.art",
        "medium": "Glass",
        "secondaryMedium": "Drawing",
        "bio": "Inspired by the desert light and landscape, my glasswork is created in my studio using found and reclaimed materials, including collected green and brown bottles, donated antique glass, and foil-wrapped plant forms. I also create large-scale, intricate micron ink drawings based on yuccas I feel deeply connected to.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/stofko_liv_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/stofko_liv_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/stofko_liv_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-pepper_sarah_jane",
        "name": "SARAH JANE PEPPER",
        "instagram": "@peppermadethis",
        "medium": "Fiber arts/textiles",
        "secondaryMedium": "Ceramics",
        "bio": "I make bright and useful items through pottery, weaving, fabric dyeing, macrame, and sewing. I love the contrast of colorful textiles, lush houseplants, and glossy pottery against the desert landscape. Working with my hands brings me peace; I hope that peace is imbued into the objects and spreads to others.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/pepper_sarah_jane_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/pepper_sarah_jane_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/pepper_sarah_jane_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-hunt_wendell",
        "name": "WENDELL HUNT",
        "phone": "909-841-4999",
        "email": "plumnelly@gmail.com",
        "instagram": "@wendellsuehunt",
        "facebook": "WendySueHunt",
        "medium": "Painting",
        "secondaryMedium": "Jewelry",
        "bio": "Wendell Hunt works in watercolor, pen-and-ink, hammered copper art, and jewelry. Her work centers on the organic, felt experience of making, where the artist's hand remains visible in gesture, line, and hammered form. She explores immediacy, material, and touch, and will be showing alongside four fellow artists in a shared studio.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hunt_wendell_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hunt_wendell_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hunt_wendell_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 9,
    "studioName": "SHELIAH BAILEY Studio",
    "address": "6540 National Park Dr, Twentynine Palms, CA",
    "town": "Twentynine Palms",
    "zipCode": "92252",
    "lat": 34.1349242,
    "lng": -116.0518576,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-bailey_sheliah",
        "name": "SHELIAH BAILEY",
        "phone": "760-216-1797",
        "email": "Debosslady@msn.com",
        "instagram": "@art.o.motive.gallery",
        "facebook": "Shelia Bailey",
        "medium": "Metal Work",
        "secondaryMedium": "Photography",
        "bio": "I enjoy Taking Photos and Gathering History in the Morongo Basin. I find it Very satisfying to Create Metal Art from being in the Automotive Field for over 40 years. Each Piece different, each has a story, and everyone sees something different when they look at it. I'm looking forward to seeing everyone at The Studio in 29 Palms.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bailey_sheliah_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bailey_sheliah_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bailey_sheliah_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-byrd_duane",
        "name": "DUANE BYRD",
        "email": "smallybyrdranch@gmail.com",
        "website": "smallbyrdranch.com/",
        "instagram": "@smallbyrd_ranch",
        "facebook": "smallbyrdranch",
        "medium": "Metal Work",
        "bio": "Duane Byrd transforms locally sourced scrap metal into collectible welded sculpture. Each piece is one of a kind, shaped by the history embedded in its materials. Weathered steel and found objects are elevated into enduring works that celebrate craftsmanship, desert heritage, and thoughtful reuse.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/byrd_duane_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/byrd_duane_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/byrd_duane_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-byrd_stacy",
        "name": "STACY BYRD",
        "email": "smallybyrdranch@gmail.com",
        "website": "smallbyrdranch.com/",
        "instagram": "@smallbyrd_ranch",
        "facebook": "smallbyrdranch",
        "medium": "Mixed Media",
        "secondaryMedium": "Digital Art",
        "bio": "Stacy Byrd creates unique works inspired by the desert's emotional landscape. Through abstract composition and digital experimentation, each piece captures transformation and impermanence—preserving moments of erosion, heat, and renewal before time and elements reclaim them.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/byrd_stacy_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/byrd_stacy_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/byrd_stacy_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 10,
    "studioName": "KEVIN MADDREY Studio",
    "address": "73317 Old Dale Rd, Twentynine Palms, CA",
    "town": "Twentynine Palms",
    "zipCode": "92252",
    "lat": 34.1315815,
    "lng": -116.0629144,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-maddrey_kevin",
        "name": "KEVIN MADDREY",
        "email": "info@maddrey.net",
        "website": "maddrey.net",
        "medium": "Painting",
        "bio": "Visit a working studio in a historic adobe surrounded by desert gardens. Pastels of glass and skies, oils of the high desert and a deep collection that includes watercolors, monotypes, and bronze sculptures. Come for the art, stay for the views and enjoy the historic collection of old neon signs",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/maddrey_kevin_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/maddrey_kevin_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/maddrey_kevin_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 11,
    "studioName": "VIOLET HILL Studio",
    "address": "73589 Desert Trail Dr, Twentynine Palms, CA",
    "town": "Twentynine Palms",
    "zipCode": "92252",
    "lat": 34.1484038,
    "lng": -116.0566461,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-hill_violet",
        "name": "VIOLET HILL",
        "phone": "443-788-2008",
        "email": "violetmaehill@gmail.com",
        "instagram": "@violetmaehill",
        "medium": "Painting",
        "bio": "Drawn to the vastness of the desert as well as its light and warmth, Violet finds inspiration for her paintings in the resilience of the plants and people who seek comfort in this unforgiving landscape and bask in the rare beauty that results from such extremes.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hill_violet_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hill_violet_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hill_violet_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 12,
    "studioName": "RANDY RANIERI Studio",
    "address": "5868 Mesquite Springs Rd, Twentynine Palms, CA",
    "town": "Twentynine Palms",
    "zipCode": "92252",
    "lat": 34.146747,
    "lng": -116.0722715,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-ranieri_randy",
        "name": "RANDY RANIERI",
        "phone": "714-296-5502",
        "email": "rrarch57@gmail.com",
        "facebook": "randy.ranieri",
        "medium": "Painting",
        "secondaryMedium": "Drawing",
        "bio": "My interest in art started at an early age. I was exposed to art & architecture through family travel in Europe.  I was influenced by the old masters.  I am an Architect and have been immersing myself in the high desert art community over the last four years.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/ranieri_randy_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/ranieri_randy_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/ranieri_randy_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-spangenberg_mark",
        "name": "MARK SPANGENBERG",
        "phone": "442-214-5227",
        "website": "markspangenbergfineart.com",
        "medium": "Painting",
        "secondaryMedium": "Ink",
        "bio": "I attempt to interpret from eye, to hand, to the surface as accurately of a subject without being coldly analytical. Always searching for the spirit and soul of what is before me. Exploring , expressing with brush or a delicate line from a pen stroke and still figuring out this ephemeral life.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/spangenberg_mark_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/spangenberg_mark_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/spangenberg_mark_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 13,
    "studioName": "ANTHONY SUGGS A.K.A WILEY COYOTE Studio",
    "address": "428 Alfalfa Ave, Twentynine Palms, CA",
    "town": "Twentynine Palms",
    "zipCode": "92252",
    "lat": 34.2455709,
    "lng": -116.1272524,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-suggs_anthony",
        "name": "ANTHONY SUGGS A.K.A WILEY COYOTE",
        "phone": "213-332-5800",
        "email": "thedesartstore@gmail.com",
        "website": "desartstore.com",
        "instagram": "@wiley_art",
        "medium": "Painting",
        "secondaryMedium": "Printmaking",
        "bio": "Wiley Coyote often paints with vibrant colors using iconic imagery from contemporary car culture. He also enjoys creative manipulation so that others can have fun and interact with the art, altering or combining images to create new and original artworks.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/suggs_anthony_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/suggs_anthony_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/suggs_anthony_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 14,
    "studioName": "DUOTONE Studio",
    "address": "70751 Mesa Dr, Twentynine Palms, CA",
    "town": "Twentynine Palms",
    "zipCode": "92252",
    "lat": 34.1786188,
    "lng": -116.1196732,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in 29 Palms\nN on Lear Ave 3.5 miles\nR on Indian Trl 1.8 miles \nR on Agua, \nCorner of Agua & Mesa\n *DO NOT TAKE MESA DR. - SOFT SAND",
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-granados_rick",
        "name": "DUOTONE",
        "phone": "323-868-1097",
        "email": "mail@duotone29.com",
        "website": "duotone29.com",
        "instagram": "@duotone_29",
        "medium": "Printmaking",
        "secondaryMedium": "Sculpture",
        "bio": "Duotone is the collaborative practice of Teri Rommelmann and Rick Granados, working in non-figurative geometric abstraction across paper, wood, steel and textiles.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/granados_rick_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/granados_rick_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/granados_rick_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 15,
    "studioName": "GREGORY MALPHURS Studio",
    "address": "2944 Indian Cove Rd, Twentynine Palms, CA",
    "town": "Twentynine Palms",
    "zipCode": "92252",
    "lat": 34.1992284,
    "lng": -116.1564724,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-malphurs_gregory",
        "name": "GREGORY MALPHURS",
        "email": "gmstudiomanager@gmail.com",
        "website": "gregorymalphurs.shop/",
        "instagram": "@gregorymalphurs",
        "facebook": "gregory.malphurs",
        "medium": "Painting",
        "bio": "Gregory Malphurs makes layered works that blur the line between realism and abstraction, exploring memory, identity, and perception. Faces and forms emerge through shifting color and gesture. Visit the studio to see the paintings up close, discover new work, and experience where the ideas—and the paint—come together.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/malphurs_gregory_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/malphurs_gregory_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/malphurs_gregory_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 16,
    "studioName": "TIM HOGARTH Studio",
    "address": "68336 Indian Trl, Twentynine Palms, CA",
    "town": "Twentynine Palms",
    "zipCode": "92252",
    "lat": 34.1865212,
    "lng": -116.1719682,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-hogarth_tim",
        "name": "TIM HOGARTH",
        "email": "timothyhogarth@gmail.com",
        "instagram": "@timhogarthart",
        "medium": "Painting",
        "bio": "Tim Hogarth is a controversial oil painter that was forced into desert hiding after using his art to challenge the classism found within raccoon and opossum society. Stop by to see those hotly contested allegorical works as well as other portraits, landscapes, and still lifes.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hogarth_tim_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hogarth_tim_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hogarth_tim_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-oehl_michael",
        "name": "HI DESERT CONCRETE DESIGN",
        "instagram": "@oehlepithecus",
        "medium": "Other",
        "bio": "An array of artistic concrete designs for indoor and outdoor display.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/oehl_michael_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/oehl_michael_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/oehl_michael_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 17,
    "studioName": "RECAPITATE HEADWEAR Studio",
    "address": "6776 Valley View Dr, Twentynine Palms, CA",
    "town": "Twentynine Palms",
    "zipCode": "92252",
    "lat": 34.1301145,
    "lng": -116.1175169,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-fink_todd",
        "name": "RECAPITATE HEADWEAR",
        "phone": "402-981-6259",
        "email": "RecapitateHeadwear@gmail.com",
        "website": "recapitateheadwear.com",
        "instagram": "@recapitateheadwear",
        "medium": "Fiber arts/textiles",
        "secondaryMedium": "Sculpture",
        "bio": "Come visit the high desert hatter! Step into the workshop of musician and hat maker Todd Fink (The Faint) and try on handmade felt hats from a massive wall of styles. Watch the craft up close -> fire, steam, vintage tools, aging techniques, hand shaping, hatband construction, sewing and more.  Get measured for a custom piece of your own!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/fink_todd_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/fink_todd_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/fink_todd_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 18,
    "studioName": "GLENN GRUBBS Studio",
    "address": "6787 Galleta Ave, Twentynine Palms, CA",
    "town": "Twentynine Palms",
    "zipCode": "92252",
    "lat": 34.1298782,
    "lng": -116.1231251,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-grubbs_glenn",
        "name": "GLENN GRUBBS",
        "email": "ggrubbs@mac.com",
        "website": "grubbsartist.com/",
        "instagram": "@GrubbsArtist",
        "facebook": "GrubbsArtist",
        "medium": "Painting",
        "bio": "Soldier. Architect. Public servant. Artist. Glenn Grubbs' studio practice draws on decades of lived experience to create bold, layered works exploring memory, time, and the weight of the past. His paintings are made by hand, built slowly, and meant to last. Come check it out!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/grubbs_glenn_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/grubbs_glenn_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/grubbs_glenn_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 19,
    "studioName": "GILLYAN THORBURN Studio",
    "address": "70141 Arenoso Trl, Twentynine Palms, CA",
    "town": "Twentynine Palms",
    "zipCode": "92252",
    "lat": 34.1245946,
    "lng": -116.1322034,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in 29 Palms\nS on Sherman Rd 0.5 miles\nR on Arenoso Trl 0.2 miles at the top\nStudio is behind the 3rd house on the left",
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-thorburn_gillyan",
        "name": "GILLYAN THORBURN",
        "phone": "760-865-0704",
        "facebook": "GillyanThorburn",
        "medium": "Photography",
        "secondaryMedium": "Jewelry",
        "bio": "Whenever I am exploring Joshua Tree National Park, I got to witness nature telling stories. My late grandmother introduced me to oral tradition. That wisdom guided me in the creation of all of my artwork. I used my camera as a tool to record nature telling stories.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/thorburn_gillyan_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/thorburn_gillyan_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/thorburn_gillyan_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-mortimer_art",
        "name": "ART MORTIMER",
        "phone": "310-909-4990",
        "website": "artmortimer.com",
        "medium": "Painting",
        "bio": "I have been a working artist and muralist since 1971, and moved to 29 Palms in 2012. In my work I strive to express and share my experiences of the beauty, power and energy of the desert and its wildlife.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mortimer_art_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mortimer_art_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mortimer_art_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 20,
    "studioName": "ALEKSANDRA ZEE Studio",
    "address": "69262 Cottonwood Dr, Twentynine Palms, CA",
    "town": "Twentynine Palms",
    "zipCode": "92252",
    "lat": 34.1301458,
    "lng": -116.1510143,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-zee_aleksandra",
        "name": "ALEKSANDRA ZEE",
        "email": "hello@aleksandrazee.com",
        "website": "aleksandrazee.com",
        "instagram": "@aleksandrazee",
        "medium": "Sculpture",
        "secondaryMedium": "Woodwork",
        "bio": "Aleksandra Zee's sculptural woodwork draws from the desert, an exploration of light, shadow, and material. Through restrained forms and natural textures, the work invites stillness and reflection, revealing the subtle relationship between object, space, and time.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/zee_aleksandra_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/zee_aleksandra_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/zee_aleksandra_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "Solo Artist — 1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 21,
    "studioName": "LILI T. CALIFORNIA Studio",
    "address": "6905 Peterson Rd, Twentynine Palms, CA",
    "town": "Twentynine Palms",
    "zipCode": "92252",
    "lat": 34.1263514,
    "lng": -116.1850494,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-tanner_lili",
        "name": "LILI T. CALIFORNIA",
        "phone": "310-508-0538",
        "email": "lilitcali@gmail.com",
        "website": "LiliTCalifornia.com",
        "instagram": "@lili.t.california",
        "medium": "Jewelry",
        "bio": "I mostly work in bronze clay. I love how I can sculpt each piece to its own characteristics.\nThe organic designs pair beautifully with the desert palette: warm, earthy, and unpretentious. No flash. Just form. Individually handmade statement rings, chunky bracelets, necklaces, bolo ties and more.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/tanner_lili_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/tanner_lili_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/tanner_lili_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 22,
    "studioName": "MEGAN WOOD Studio",
    "address": "6597 Peterson Rd, Twentynine Palms, CA",
    "town": "Twentynine Palms",
    "zipCode": "92252",
    "lat": 34.133684,
    "lng": -116.1854627,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-wood_megan",
        "name": "MEGAN WOOD",
        "email": "meganemwood@gmail.com",
        "website": "meganwoodstudio.com",
        "instagram": "@meganwoodstudio",
        "medium": "Fiber arts/textiles",
        "secondaryMedium": "Ceramics",
        "bio": "I work with natural fiber textiles including cotton, linen, and silk, sewing and stretching fabric into forms that evoke the body. Inspired by the desert, I use traditional techniques such as sewing and natural dyes to guide my practice. I also create functional ceramics with earthy tones and minimal forms that parallel my textile work.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/wood_megan_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/wood_megan_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/wood_megan_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-smith_donovan",
        "name": "DONOVAN SMITH",
        "instagram": "@Pricks.prints.pottery",
        "medium": "Ceramics",
        "secondaryMedium": "Printmaking",
        "bio": "From sweeping desert expanses to delicate microclimates, Donovan's work is inspired by the natural world at every scale. Blending environmental consciousness with a sense of whimsy, he creates pieces that invite warmth and gentle humor.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/smith_donovan_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/smith_donovan_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/smith_donovan_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 23,
    "studioName": "DION MACELLARI Studio",
    "address": "7084 Mount Lassen Ave, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1245072,
    "lng": -116.2279094,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-macellari_dion",
        "name": "DION MACELLARI",
        "email": "dionm@me.com",
        "website": "dionart.com",
        "instagram": "@dionmacellari",
        "medium": "Painting",
        "bio": "Ex New Yorker whose art explores subconscious personal narratives, while borrowing stylistically from sci-fi and pulp illustration as well as pop art.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/macellari_dion_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/macellari_dion_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/macellari_dion_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 24,
    "studioName": "ALANE LEVINSOHN Studio",
    "address": "5554 Cascade Rd, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1539709,
    "lng": -116.2303177,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in Joshua Tree\n N on Cascade Rd 1.2 miles\n Studio on the left",
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-levinsohn_alane",
        "name": "ALANE LEVINSOHN",
        "phone": "323-646-7104",
        "email": "alanelevinsohn@gmail.com",
        "website": "alanelevinsohn.com",
        "instagram": "@alanelevinsohn",
        "facebook": "alane.levinsohn",
        "medium": "Painting",
        "secondaryMedium": "Pastel",
        "bio": "Inspired by the quiet magic of the Mojave Desert, my paintings explore the symbolic relationship between animals, plants, and landscape. Desert creatures appear as watchful companions within fields of luminous gold leaf, inviting reflection on nature, spirit, and place. Each piece celebrates the beauty, mystery, and resilience of the desert. Each painting is a love letter to the desert.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/levinsohn_alane_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/levinsohn_alane_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/levinsohn_alane_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-morgan_jenkins_sharon",
        "name": "SHARON M JENKINS (AKA MAGGIE)",
        "phone": "818-425-5233",
        "email": "morganwordsworth@gmail.com",
        "facebook": "Sharon Morgan Jenkins",
        "medium": "Painting",
        "bio": "From Wales to the Desert. Stop by and see how my oil painting inspiration & life journeys unfolded from exploring the Welsh mountains, Devonshire moors among standing stones, wild seascapes, London, Paris and LA. Finally, I discovered the beauty of Joshua Tree. Currently, I'm working on still life and landscape paintings.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/morgan_jenkins_sharon_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/morgan_jenkins_sharon_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/morgan_jenkins_sharon_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 25,
    "studioName": "ANGEL CHEN Studio",
    "address": "65122 East Broadway, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1647102,
    "lng": -116.2425011,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in Joshua Tree\nN on Sunfair 2 miles\nR on Broadway 0.1 mile\nStudio on corner of Sunview\nDome house on left",
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-chen_angel",
        "name": "ANGEL CHEN",
        "email": "angelchen@icloud.com",
        "instagram": "@angelchenartist",
        "medium": "Painting",
        "secondaryMedium": "Ceramics",
        "bio": "Angel Chen is a land artist, integrating art, philosophy, and embodied experience to nurture connection to the natural world.\nJoshua Tree studio living laboratory fosters immersive experiences to explore environmental ethics, deep ecology, and sustainable living.  Regenerative earthwork activations include: Subterranean Excavation / Displacement, Yucatan, and upcoming Rhine River Float.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/chen_angel_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/chen_angel_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/chen_angel_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 26,
    "studioName": "KEVIN E. KANE Studio",
    "address": "64975 Sun Mesa Rd, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.167458,
    "lng": -116.2452054,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-kane_kevin",
        "name": "KEVIN E. KANE",
        "phone": "909-821-1445",
        "email": "kevin@kekaneconsulting.com",
        "facebook": "K.E. Kane Art Studio",
        "medium": "Assemblage",
        "secondaryMedium": "Metal Work",
        "bio": "assemblage  art,\nparts as  found. \nretired engineer",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/kane_kevin_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/kane_kevin_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/kane_kevin_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 27,
    "studioName": "JAYA Studio",
    "address": "64994 Walpi Dr, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1589215,
    "lng": -116.2451307,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-tengco_jaya",
        "name": "JAYA",
        "phone": "323-719-7759",
        "email": "robot.rhythm@gmail.com",
        "website": "Jayatengco.com",
        "instagram": "@heebiejeebiejaya",
        "medium": "Paper Arts",
        "secondaryMedium": "Drawing",
        "bio": "\"Jaya (she/they) is an artist and tarot reader living in Joshua Tree. Personal artifacts, long-lost memories, and a deep connection to the universe shape their work. This year, Jaya and their sister will present a collaborative outdoor exhibition in the high desert.\"",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/tengco_jaya_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/tengco_jaya_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/tengco_jaya_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      },
      {
        "id": "artist-tengco_kaya",
        "name": "KAYA",
        "instagram": "@giantscreamer",
        "medium": "Paper Arts",
        "secondaryMedium": "Mixed Media",
        "bio": "I'm on a lifelong quest to find the absurd, the whimsy, and the color in everything <3\n\nThis year JAYA x KAYA will present a collaborative outdoor exhibition in their studio in the high desert.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/tengco_kaya_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/tengco_kaya_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/tengco_kaya_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 28,
    "studioName": "SIMI DABAH Studio",
    "address": "5255 Sunfair Rd, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1573791,
    "lng": -116.2464802,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-bowden__larry",
        "name": "SIMI DABAH",
        "phone": "760-501-1718",
        "email": "larryb29@yahoo.com",
        "website": "simidabahsculptures.com",
        "instagram": "@SimiDabah",
        "facebook": "simidabahsculptures",
        "medium": "Sculpture",
        "bio": "Simi Dabah created more than 2000 steel sculptures from industrial scrap starting in 1968. The Simi Dabah Sculpture Foundation donates many of his works for display in public spaces. They also donate sales from his pieces to Morongo Basin nonprofits and charitable causes.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bowden__larry_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bowden__larry_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bowden__larry_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      },
      {
        "id": "artist-allanoff_benjamin",
        "name": "BEN ALLANOFF",
        "email": "ben.allanoff@gmail.com",
        "website": "benallanoff.com/",
        "instagram": "@ben.allanoff",
        "medium": "Sculpture",
        "secondaryMedium": "Installation",
        "bio": "I make sculpture of all sizes out of welded steel, wire, carved wood, and found objects.  I also make large scale installations, some of which  invite public participation.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/allanoff_benjamin_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/allanoff_benjamin_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/allanoff_benjamin_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 29,
    "studioName": "JENIFER PALMER-LACY Studio",
    "address": "63558 Walpi Dr, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1593733,
    "lng": -116.276526,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-palmerlacy_jenifer",
        "name": "JENIFER PALMER-LACY",
        "phone": "323-573-1645",
        "email": "Laloland1947@gmail.com",
        "facebook": "Jenifer Palmer-Lacy",
        "medium": "Painting",
        "secondaryMedium": "Installation",
        "bio": "Jenifer Palmer-Lacy specializes in landscape and architectural paintings, created in plein air,  many of which glow in the dark. Two installations, Tiny Arizona and the Glow Barn add to the enjoyment of the site.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/palmerlacy_jenifer_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/palmerlacy_jenifer_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/palmerlacy_jenifer_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      },
      {
        "id": "artist-adams_matt",
        "name": "MATT ADAMS",
        "phone": "949-300-5938",
        "email": "mjadamsart@gmail.com",
        "website": "theblanktapes.bandcamp.com/merch",
        "instagram": "@mattjadamsart",
        "facebook": "blanktapes",
        "medium": "Ink",
        "secondaryMedium": "Illustration",
        "bio": "Matt Adams is a Southern California native, living in Yucca Valley since 2014. From working on a comic in MAD Magazine to illustrating designs for the Grateful Dead, he's been commissioned internationally for posters, album covers & more. When he's not drawing, he's playing in his band The Blank Tapes.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/adams_matt_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/adams_matt_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/adams_matt_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 30,
    "studioName": "ART BY HAWK Studio",
    "address": "5674 Sunbeam Ave, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.150226,
    "lng": -116.258694,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-hawkins_thomas",
        "name": "ART BY HAWK",
        "phone": "310-463-3681",
        "email": "artbyhawk@outlook.com",
        "website": "TFHCalifornia.com",
        "medium": "Illustration",
        "secondaryMedium": "Photography",
        "bio": "Step off the highway and into the unknown. Mid-century-inspired UFO illustrations, hand-drawn pen and ink. Mysterious UFO Polaroids captured under Mojave skies. Visit my studio and step into the fantastical.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hawkins_thomas_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hawkins_thomas_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hawkins_thomas_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 31,
    "studioName": "JUDY LICHTMAN Studio",
    "address": "63821 Roadrunner Rd, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.0973911,
    "lng": -116.2717018,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-lichtman_judy",
        "name": "JUDY LICHTMAN",
        "phone": "443-983-7100",
        "email": "jimandjudyshow@gmail.com",
        "website": "judylichtman.com",
        "instagram": "@judylichtman",
        "medium": "Sculpture",
        "secondaryMedium": "Installation",
        "bio": "signs in the landscape",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/lichtman_judy_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/lichtman_judy_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/lichtman_judy_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-rieck_james",
        "name": "JAMES RIECK",
        "phone": "443-983-0186",
        "email": "jamesrieck65@gmail.com",
        "website": "jamesrieck.com",
        "instagram": "@jamesrieck",
        "facebook": "jdrart",
        "medium": "Painting",
        "bio": "Big Paintings",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/rieck_james_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/rieck_james_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/rieck_james_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 32,
    "studioName": "PAU Studio",
    "address": "63458 Wagon Wheel Rd, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1038005,
    "lng": -116.2791604,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in Joshua Tree\nS on Park Blvd/Quail Springs Rd 4 miles\nL on Uphill Rd 0.75 miles\nR on Wagon Wheel Rd 0.2 miles\nStudio on the left",
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-tricklebank_ange",
        "name": "PAU",
        "email": "Angela@angelapau.com",
        "website": "angelapau.com",
        "instagram": "@Angela.pau.art",
        "medium": "Fiber arts/textiles",
        "secondaryMedium": "Ceramics",
        "bio": "Angela Pau creates hand-crafted textile wall hangings, decorative ceramics, and scented candles using natural, minimally processed materials. Inspired by nature's textures and tones, her work embraces imperfection and organic forms, resulting in pieces that feel grounded, expressive, and thoughtfully made.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/tricklebank_ange_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/tricklebank_ange_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/tricklebank_ange_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-tricklebank_ben",
        "name": "BEN TRICKLEBANK",
        "website": "bentricklebank.com",
        "instagram": "@ben.tricklebank",
        "medium": "Photography",
        "bio": "Ben is an artist and filmmaker whose work sits between stillness and story. His photographs often feel like fragments of a larger narrative—moments suspended in time, shaped by light, space, and subtle tension. Drawing from a cinematic sensibility, he explores the emotional undercurrents of contemporary life and our relationship with technology.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/tricklebank_ben_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/tricklebank_ben_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/tricklebank_ben_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 33,
    "studioName": "BLUE TREE CREATES Studio",
    "address": "62775 Kent Rd, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.0916638,
    "lng": -116.2946286,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-forrester_deedee",
        "name": "BLUE TREE CREATES",
        "phone": "949-241-3035",
        "email": "forrestkhat@hotmail.com",
        "instagram": "@Deedee.forrester",
        "medium": "Book Arts",
        "secondaryMedium": "Mixed Media",
        "bio": "I'm excited to welcome you to my home studio in Joshua Tree this coming October! My latest works of art are hand made, sewn, dyed journals. Each one has a name. I will also be showing acrylic art and doodle art from past shows. Welcome!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/forrester_deedee_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/forrester_deedee_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/forrester_deedee_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 34,
    "studioName": "DAVID JESSE MCCHESNEY Studio",
    "address": "8421 Sunset Rd, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.0994862,
    "lng": -116.3176048,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From Hwy 62 in Joshua Tree  \n S on Sunset Rd 1 mile\n R on Alta Loma .01 miles\n L on Sunset Rd 1.5 miles \n Studio on L at Park View",
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-mcchesney_david_jesse",
        "name": "DAVID JESSE MCCHESNEY",
        "phone": "760-362-3875",
        "email": "setitup@earthlink.net",
        "instagram": "@davidmcchesneyjoshuatree",
        "facebook": "David McChesney",
        "medium": "Photography",
        "secondaryMedium": "Book Arts",
        "bio": "Exhibiting over 500 hanging prints, thousands of photo notecards, my books, matted prints, smaller framed prints and photo gift items.  Location is beautiful and quite picturesque.  My imagery has been published in 80+ countries.  As a national harmonica champion, I'm happy to perform for you.  Bring your camera!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mcchesney_david_jesse_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mcchesney_david_jesse_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mcchesney_david_jesse_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 35,
    "studioName": "JULIE ALVARADO VISUAL ARTIST Studio",
    "address": "61660 Mountain View Trl, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1076597,
    "lng": -116.3188809,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-alvarado_julie",
        "name": "JULIE ALVARADO VISUAL ARTIST",
        "website": "juliealvaradoartist.com",
        "medium": "Painting",
        "bio": "I was an Artist in Residence in Joshua Tree National Park and it has become a treasure trove of creative inspiration for my work.  My paintings tell colorful stories of interactions between desert dwellers and the people they encounter.  Visitors are welcome .",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/alvarado_julie_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/alvarado_julie_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/alvarado_julie_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 36,
    "studioName": "DEAN MERMELL Studio",
    "address": "61535 Prescott Trl, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1083449,
    "lng": -116.3216195,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-mermell_dean",
        "name": "DEAN MERMELL",
        "email": "deanmermell@gmail.com",
        "website": "deanmermell.com",
        "medium": "Painting",
        "secondaryMedium": "Photography",
        "bio": "The Mojave provides a rich source of form, color, and light. In painting, I ride the edge of something intentional and something that just comes through me, the visual equivalent of jazz. I also create large desert landscape photographs, using only moonlight for illumination. Framed and ready to hang.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mermell_dean_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mermell_dean_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mermell_dean_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      },
      {
        "id": "artist-hirschman_celia",
        "name": "DESIGN BY CELIA",
        "phone": "530-826-6556",
        "email": "Celiahirschman@gmail.com",
        "instagram": "@designbycelia",
        "facebook": "handcraftedbycelia",
        "medium": "Jewelry",
        "bio": "Design by Celia\nCelia Hirschman\n\nThere's nothing like finding an adornment that speaks to you. \nLocally produced, handcrafted from wire and sheet, stone centric.\nEach piece unique. Selections of rings, necklaces, pendants, earrings and bracelets.\nLimited commissions available.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hirschman_celia_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hirschman_celia_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hirschman_celia_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 37,
    "studioName": "ANYASF Studio",
    "address": "61566 Sandalwood Trl, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1111543,
    "lng": -116.3209966,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-broenink_anja",
        "name": "ANYASF",
        "phone": "415-517-6048",
        "email": "anja@anyasf.com",
        "website": "anyasf.com",
        "instagram": "@anyasfdesign",
        "medium": "Fiber arts/textiles",
        "secondaryMedium": "Painting",
        "bio": "I design and create contemporary clothing. My work includes up-cycled shirts, skirts and dresses made from discarded T-shirts, hand-printed jackets and other unique pieces.\nAlongside my clothing line I paint. These series explore the bond between my dog and me-and more broadly, the connection between a pet and its person.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/broenink_anja_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/broenink_anja_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/broenink_anja_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      },
      {
        "id": "artist-bottoms_david",
        "name": "DAVID BOTTOMS",
        "email": "david@dbottoms.com",
        "website": "dbottoms.com",
        "instagram": "@davidbottoms",
        "medium": "Drawing",
        "secondaryMedium": "Mixed Media",
        "bio": "I make art on and with paper, exploring its dual role as surface and substance. These works treat paper as both medium and subject—fragile, expressive, and adaptable, capable of holding form while remaining inherently unstable.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bottoms_david_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bottoms_david_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bottoms_david_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      },
      {
        "id": "artist-davies_jorge",
        "name": "JORGE DAVIES",
        "email": "jwd@jwdavies.com",
        "instagram": "@davies.jorge",
        "medium": "Installation",
        "secondaryMedium": "Multi-media",
        "bio": "I walk the world, filming and recording what moves me:\nfleeting glimpses of sound and image that are worn, true to me, and already disappearing.\nI share them through large projections paired with immersive soundscapes.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/davies_jorge_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/davies_jorge_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/davies_jorge_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      },
      {
        "id": "artist-valentine_shahasp",
        "name": "SHAHASP VALENTINE",
        "phone": "415-932-9950",
        "email": "shahaspvalentine@gmail.com",
        "instagram": "@PrecieuxMetalClayJewelry",
        "facebook": "ModernArtifactsJewelry",
        "medium": "Jewelry",
        "bio": "The Modern Artifacts Series is of a unique medium, fine silver & 24k gold Precious Metal Clay with precious gems and pearls. Works are limited edition, signed & numbered in a series. \nAlso new work including repurposed antiques and rosaries, and serpent, moon, stars and swords themed jewelry.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/valentine_shahasp_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/valentine_shahasp_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/valentine_shahasp_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 38,
    "studioName": "RACHEL RICKERT Studio",
    "address": "61140 Sandalwood Trl, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1111611,
    "lng": -116.3302439,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-rickert_rachel",
        "name": "RACHEL RICKERT",
        "email": "rachelrickertart@gmail.com",
        "website": "www.rachelrickert.com",
        "instagram": "@rayrickk",
        "medium": "Painting",
        "bio": "I paint the natural world, capturing the landscape from perception, in addition to studio works combining figuration and experience of place. I also make natural pigments from the earth of the places depicted, deepening this connection to make work that uses the land itself as paint.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/rickert_rachel_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/rickert_rachel_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/rickert_rachel_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-marland_sarah",
        "name": "SARAH MARLAND BRETZ",
        "instagram": "@smbretz.studio",
        "medium": "Ceramics",
        "bio": "Sarah is a Yucca Valley based ceramicist and designer whose work focuses on functional objects for the home. Inspired by the desert, her work reflects its textures, tones, and quiet resilience, resulting in pieces that are both practical and grounded.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/marland_sarah_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/marland_sarah_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/marland_sarah_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 39,
    "studioName": "BRIAN BERGERON Studio",
    "address": "61326 Onaga Trl, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1138402,
    "lng": -116.3262668,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-bergeron_brian",
        "name": "BRIAN BERGERON",
        "email": "b@b-havior.com",
        "website": "b-havior.com",
        "instagram": "@bhavior",
        "medium": "Illustration",
        "secondaryMedium": "Mixed Media",
        "bio": "My artworks are illustrations of the natural wildlife in the Mojave Desert, with an emphasis on the dreamy and softer qualities of existing in one of the world's harshest environments. I work in mixed media on paper and gather my inspiration daily from my residence and studio in Joshua Tree.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bergeron_brian_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bergeron_brian_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bergeron_brian_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 3rd Weekends Only"
      },
      {
        "id": "artist-summers_braden",
        "name": "BRADEN SUMMERS PHOTOGRAPHY",
        "email": "braden@bradensummers.com",
        "website": "bradensummers.com",
        "instagram": "@bradensummers",
        "medium": "Photography",
        "bio": "My desert fashion work draws from found objects and the visual language of desert architecture, using only natural light. The images embrace spectacle while maintaining restraint—staging the body within vast landscapes where design, environment, and gesture converge into something both constructed and elemental.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/summers_braden_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/summers_braden_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/summers_braden_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 40,
    "studioName": "HA Studio",
    "address": "7133 Sunnyhill Rd, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1233642,
    "lng": -116.3280262,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-hoskins_jason",
        "name": "HA",
        "phone": "949-606-2618",
        "email": "halafineart@gmail.com",
        "instagram": "@halaart333",
        "medium": "Multi-media",
        "secondaryMedium": "Painting",
        "bio": "My mixed media paintings consist of bold, abstract images using expressive colors and textured layers. Drawing inspiration from tribal symbolism, sometimes mythic figures like warriors and guardians, to spiritual forms. I enjoy exploring the human form through geometric planes and overlapping perspectives with emotional energy.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hoskins_jason_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hoskins_jason_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hoskins_jason_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-verdugohoskins_laurie",
        "name": "LAURIE HOSKINS",
        "phone": "949-606-2618",
        "email": "halafineart@gmail.com",
        "instagram": "@halaart333",
        "medium": "Multi-media",
        "secondaryMedium": "Multi-media",
        "bio": "My work is inspired by the beauty of the Joshua Tree area. From vibrant paintings, figurative studies and vivid color contrasts using dynamic lines in a vibrant pop-surrealistic style. I work in multiple medias, canvas paintings, handmade sun-catchers, wind-chimes and drawings. The Mojave-High Desert is my source of passion and inspiration.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/verdugohoskins_laurie_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/verdugohoskins_laurie_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/verdugohoskins_laurie_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 41,
    "studioName": "BRIAN WALL Studio",
    "address": "61488 Alta Vista Ln, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1235732,
    "lng": -116.3220396,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-wall_brian",
        "name": "BRIAN WALL",
        "phone": "714-454-7208",
        "email": "bgwall@verizon.net",
        "website": "bwallsart.com",
        "instagram": "@brianwall1964",
        "medium": "Painting",
        "secondaryMedium": "Drawing",
        "bio": "Stop by my Joshua Tree studio and you'll see artwork that draws heavily on the desert influence—its landscape, fauna, built environments, and occasional human presence—capturing the region's light, atmosphere, colors, and spirit through oil, gouache, and drawing media",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/wall_brian_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/wall_brian_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/wall_brian_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 42,
    "studioName": "SHARLA PIDD Studio",
    "address": "61785 Alta Mura Dr, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1224105,
    "lng": -116.3157739,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-pidd_sharla",
        "name": "SHARLA PIDD",
        "website": "sunsetadobe.com",
        "instagram": "@sunsetadobeco",
        "medium": "Installation",
        "bio": "My Lumina Blocks disrupt the concrete industry and exist at the intersection of ancient building techniques and creative reuse. Made with sun-cured adobe and salvaged glass, I sculpt light through earth and prove that sustainable construction can be both technically precise and ethereally beautiful, honoring the high desert's unique radiance.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/pidd_sharla_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/pidd_sharla_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/pidd_sharla_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 43,
    "studioName": "JEN GOTCH Studio",
    "address": "61829 Sunburst Cir, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1265284,
    "lng": -116.3145102,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-gotch_jen",
        "name": "JEN GOTCH",
        "phone": "213-280-6008",
        "email": "jen@jengotch.com",
        "website": "jengotch.com",
        "instagram": "@jengotch",
        "medium": "Multi-media",
        "bio": "Excited to share a bunch of the art I've been making over the last 6 years. I set out to paint my feelings and instead ended up with some sort of multimedia sci-fi memoir, and I'm cool with that. Come check it out and get a free portal :)",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/gotch_jen_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/gotch_jen_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/gotch_jen_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 44,
    "studioName": "MARK WALSH Studio",
    "address": "6455 Juniper Rd, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1355672,
    "lng": -116.332177,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-walsh_mark",
        "name": "MARK WALSH",
        "phone": "213-620-8599",
        "email": "mark@markwalshart.com",
        "website": "markwalshart.com",
        "medium": "Ceramics",
        "bio": "I recently put a new twist on my popular Fungoid planter series, come and see the results at the Juniper Clay Shop.  You can see the extruders, slab rollers and other tools I used to make them. I'm also going to be showing my nerikomi cactus pots, vases and mugs.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/walsh_mark_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/walsh_mark_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/walsh_mark_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      },
      {
        "id": "artist-bartels_karen",
        "name": "KAREN BARTELS",
        "email": "karenbartelsceramics@gmail.com",
        "instagram": "@geistrockstudios",
        "medium": "Ceramics",
        "secondaryMedium": "Photography",
        "bio": "I create functional ceramics and small sculptural pieces inspired by my scientific and mathematical background. Nature photography is a second love; wandering the desert, camera in hand, I zoom in and focus on capturing small quiet moments.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bartels_karen_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bartels_karen_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bartels_karen_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      },
      {
        "id": "artist-roberts_nicholas",
        "name": "MANIFEST CERAMICS",
        "email": "hello@manifestceramics.com",
        "website": "manifestceramics.com",
        "instagram": "@manifest.ceramics",
        "medium": "Ceramics",
        "bio": "Nicholas Roberts is a high desert craftsperson fully devoted to creating functional and decorative ceramics.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/roberts_nicholas_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/roberts_nicholas_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/roberts_nicholas_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      },
      {
        "id": "artist-kieley_michael",
        "name": "MICHAEL KIELEY",
        "phone": "310-945-5939",
        "email": "michaelkieley@gmail.com",
        "website": "mKieley.com",
        "instagram": "@desertMODfab",
        "medium": "Sculpture",
        "secondaryMedium": "Furniture",
        "bio": "I design and build luminous architectural objects that explore the relationship between pattern, light, and material.\nWorking in wood, metal, and layered color, each piece transforms space through shadow, structure, and warmth.\nI welcome select commissions and collaborations, including gates, doors, sculptural lighting, and furniture.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/kieley_michael_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/kieley_michael_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/kieley_michael_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      },
      {
        "id": "artist-long_pat",
        "name": "PAT LONG",
        "email": "geistrockstudios@gmail.com",
        "instagram": "@geistrockstudios",
        "medium": "Ceramics",
        "bio": "I am a functional potter, creating different forms of cups, bowls, and other daily ware.  I alter my work to make it more dramatic with glazes, glazing techniques, and various surface alterations.  I have dabbled in Horsehair pottery and native American pottery as I like the aesthetic of early pottery.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/long_pat_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/long_pat_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/long_pat_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 45,
    "studioName": "RON THERRIO Studio",
    "address": "6260 Juniper Rd, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1392345,
    "lng": -116.3331896,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-therrio_ron",
        "name": "RON THERRIO",
        "phone": "310-408-3991",
        "email": "rnthrr@gmail.com",
        "website": "RonTherrio.com",
        "instagram": "@RonTherrio",
        "medium": "Sculpture",
        "secondaryMedium": "Printmaking",
        "bio": "My art is tactile, engaging with a sensuous quality, whimsical pieces that capture the imagination. Inviting you to explore your inner self. Totemic in nature, my work attempts to connect with the viewer on a deeper level. My studio/work is meant to inspire your own visual, musical & spiritual journey.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/therrio_ron_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/therrio_ron_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/therrio_ron_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-leas_ilan",
        "name": "ILAN LEAS",
        "website": "ilanleas.com",
        "instagram": "@ilan_leas",
        "medium": "Painting",
        "secondaryMedium": "Drawing",
        "bio": "Working with aphantasia, I translate unseen imagery from my subconscious into intuitive patternless patterns. I overthink much of life, but with art I don't think, just draw. Art becomes a place of equanimity, each painting a puzzle I both discover and resolve. Featured by Fila, Sweetgreen, and the Coachella MF.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/leas_ilan_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/leas_ilan_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/leas_ilan_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-stroud_olivia",
        "name": "OLIVIA STROUD",
        "instagram": "@OliviaStroudArt",
        "medium": "Printmaking",
        "bio": "I am a printmaker inspired by the Mojave Desert. Working in linocut, I hand carve and print each piece in my home studio. I love the slow, intentional pace of the printmaking process. My work captures fleeting desert impressions- flora, solitude, and wonder- making them permanent in ink and paper.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/stroud_olivia_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/stroud_olivia_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/stroud_olivia_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 46,
    "studioName": "DIANE BEST Studio",
    "address": "6390 Veterans Way, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1369594,
    "lng": -116.3164492,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-best_diane",
        "name": "DIANE BEST",
        "phone": "909-224-8626",
        "email": "dianebest13@gmail.com",
        "website": "dbestart.com",
        "instagram": "@dianebestart",
        "medium": "Painting",
        "secondaryMedium": "Photography",
        "bio": "30 years in the desert, combining its power with the energy of art and its ability to transform the life of the artist, and by projection, the lives of others. Studio D, a working studio.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/best_diane_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/best_diane_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/best_diane_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "Solo Artist — 1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 47,
    "studioName": "FRANCES WHETSAW Studio",
    "address": "6425 Park Blvd, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1363698,
    "lng": -116.3148453,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-whetsaw_frances",
        "name": "FRANCES WHETSAW",
        "phone": "323-793-7342",
        "email": "movaltine@me.com",
        "instagram": "@frances_whetsaw.    and  @whetsawithdrawn",
        "medium": "Drawing",
        "secondaryMedium": "Painting",
        "bio": "walking into the deep silence here, i am moved while standing still the sparseness clears the mind and there is space for sorting out the noise. i keep a daily sketchbook of drawings and writings which will be on display in my studio, along with my paintings.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/whetsaw_frances_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/whetsaw_frances_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/whetsaw_frances_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 48,
    "studioName": "ROSE CEFALU Studio",
    "address": "61884 Commercial St, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1359718,
    "lng": -116.3135528,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-cefalu_rose",
        "name": "ROSE CEFALU",
        "phone": "213-407-2984",
        "email": "rcefalu@mac.com",
        "website": "rosecefaluphoto.com",
        "instagram": "@rose_cefalu_photo",
        "facebook": "RoseCefaluPhoto",
        "medium": "Photography",
        "secondaryMedium": "Printmaking",
        "bio": "I create one-of-a-kind image transfers, blending photography and painting. Working through a gold phase, I hand-transfer each piece, embracing imperfection and surprise. Every work is a balance of control and the unexpected.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/cefalu_rose_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/cefalu_rose_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/cefalu_rose_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-turin_miranda",
        "name": "MIRANDA PENN TURIN",
        "phone": "310-502-6606",
        "email": "miranda@mirandapennturin.com",
        "website": "mirandapennturin.com/",
        "instagram": "@mirandapennturin",
        "facebook": "miranda.turin",
        "medium": "Photography",
        "bio": "I'm Miranda, a freelance photographer and director who has been specializing in portraiture for decades. The work I show during the Highway 62 Art Tours is usually either conceptual or inspired by the local fauna and desert landscapes.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/turin_miranda_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/turin_miranda_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/turin_miranda_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-cate_stephanie",
        "name": "STEPHANIE CATE",
        "phone": "541-601-8325",
        "email": "scs@scatestudio.com",
        "website": "scatestudio.com",
        "instagram": "@kalamity.cate",
        "medium": "Painting",
        "secondaryMedium": "Collage",
        "bio": "Stephanie Cate is a California abstract painter and collage artist. She holds a BFA from Massachusetts College of Art and Design in Boston. Her childhood in France influences her in capturing the beauty and haunting detritus of the desert landscape in her work.  She will be featuring her new homestead series.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/cate_stephanie_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/cate_stephanie_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/cate_stephanie_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 49,
    "studioName": "SEPHORA WOLDU Studio",
    "address": "61876 Morningside Rd, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1424511,
    "lng": -116.314195,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-woldu_sephora",
        "name": "SEPHORA WOLDU",
        "email": "sephorawoldu@gmail.com",
        "website": "sephorawoldu.com/",
        "instagram": "@abyssurdian",
        "medium": "Mixed Media",
        "secondaryMedium": "Installation",
        "bio": "Sephora Woldu is a filmmaker + designer with her head in California and her heart in Eritrea. Her artistic practice is informed by doing a lot with a little, scrappy excellence passed down from generations of making something out of nothing. Her visual work honors this inheritance through absolute, unadulterated whimsy.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/woldu_sephora_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/woldu_sephora_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/woldu_sephora_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 50,
    "studioName": "DEAR.MRS.FANTASY Studio",
    "address": "61780 Oleander Dr, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.143732,
    "lng": -116.315613,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-schultz_jennifer",
        "name": "DEAR.MRS.FANTASY",
        "phone": "714-271-9295",
        "email": "jenn@dearmrsfantasy.com",
        "website": "dearmrsfantasy.com",
        "instagram": "@dear.mrs.fantasy",
        "facebook": "dear.mrs.fantasy",
        "medium": "Painting",
        "secondaryMedium": "Ink",
        "bio": "Based in the high desert, Jennifer Casares-Schultz is a multidisciplinary artist working across welding, drawing, and painting. Her work interrogates cultural ideals of beauty, body image, and sexuality by celebrating the human figure through humor, inclusion, and form. She invites viewers to find liberation in vulnerability, joy, and tenderness.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/schultz_jennifer_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/schultz_jennifer_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/schultz_jennifer_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 51,
    "studioName": "EDDIE A. TUCKER Studio",
    "address": "4524 Avenida La Flora Desierta, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1708071,
    "lng": -116.3125122,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-tucker_eddie",
        "name": "EDDIE A. TUCKER",
        "phone": "760-819-2159",
        "email": "powerhawk1956@gmail.com",
        "facebook": "eddie.tucker.385187",
        "medium": "Painting",
        "secondaryMedium": "Multi-media",
        "bio": "Visit my gallery and studio to see colorful abstract paintings as well as small crafted works. Acrylic, watercolor, and ink are used to create warmth and mystery. Guests are also invited to create their own alcohol ink pictures in my studio to take home (free!).",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/tucker_eddie_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/tucker_eddie_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/tucker_eddie_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-schatz_tracie",
        "name": "TRACIE SCHATZ",
        "email": "tracie.schatz@gmail.com",
        "instagram": "Zentangle_joshuatree",
        "medium": "Ink",
        "secondaryMedium": "Drawing",
        "bio": "Tracie Schatz creates Zentangle-inspired art rooted in the quiet rhythms of Joshua Tree.\nShe builds intricate worlds of line and pattern through botanical forms and flowing geometry. \nStep into her meditative landscapes of ink—where careful lines invite you to slow down, look closer, and discover quiet wonder in every detail.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/schatz_tracie_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/schatz_tracie_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/schatz_tracie_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 52,
    "studioName": "KYLE CONLAN ARONSON Studio",
    "address": "62033 Canterbury St, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1817987,
    "lng": -116.3112251,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-aronson_kyle",
        "name": "KYLE CONLAN ARONSON",
        "phone": "714-624-3997",
        "email": "lifeismega@gmail.com",
        "instagram": "@artofkca",
        "medium": "Painting",
        "secondaryMedium": "Mixed Media",
        "bio": "As a video game artist by day and former graphic illustrator, I create raw, analog personal work on wood, metal, and other imperfect surfaces. Inspired by horror films and comic books, my art finds beauty and intrigue in the grotesque, ugly, and violent themes we avoid in real life.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/aronson_kyle_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/aronson_kyle_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/aronson_kyle_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 53,
    "studioName": "CAROLYN MACARTNEY Studio",
    "address": "62929 Golden St, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1784211,
    "lng": -116.290132,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-macartney_carolyn",
        "name": "CAROLYN MACARTNEY",
        "email": "cmacpix@gmail.com",
        "website": "cmacpictures.com/",
        "instagram": "@cmacpix",
        "medium": "Photography",
        "bio": "Landscape photographs investigating the precariousness of our existence in the desert.  Yearning after a larger something that's embedded in the vast open spaces, we cling to the sand like a Bedouin tent.  In looking for an underlying truth beyond the obvious, here I find a soft, beguiling lonesomeness.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/macartney_carolyn_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/macartney_carolyn_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/macartney_carolyn_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-newfield_kelly",
        "name": "KELLY NEWFIELD",
        "email": "kelly.newfield@mac.com",
        "instagram": "@kelly.newfield.clothing",
        "medium": "Fiber arts/textiles",
        "bio": "Clothing for creatives, inspired by nature and the built environment - insects, architecture, plants.        \nMade in mostly dark, inky colors with obsessive attention to detail.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/newfield_kelly_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/newfield_kelly_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/newfield_kelly_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 54,
    "studioName": "EARTHLOVING ART Studio",
    "address": "4035 Dewey Ave, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1800939,
    "lng": -116.2836286,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-henry_susan",
        "name": "EARTHLOVING ART",
        "phone": "760-574-5267",
        "website": "earthlovingart.com",
        "instagram": "@earthlovingart",
        "facebook": "earthloving art",
        "medium": "Glass",
        "secondaryMedium": "Metal Work",
        "bio": "Working in glass has always been a passion since I was in my early 20's. Working with recycled glass in the kiln a challenge to accept.  Southwest native plants even more. Framing the glass with metal was the means to display and add to landscaping.  Mission accomplished!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/henry_susan_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/henry_susan_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/henry_susan_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 3rd Weekends Only"
      },
      {
        "id": "artist-hays_carey_ann",
        "name": "CAREY ANN HAYS",
        "email": "heycareyann@gmail.com",
        "website": "heycareyann.com",
        "instagram": "@quarter_moon",
        "facebook": "HEYCAREYANN",
        "medium": "Photography",
        "bio": "Here you'll find photography with a feeling, designed to evoke a vibe, with a touch of nostalgia. A print production artist by trade, I am drawn to images that communicate. I seek to capture moods more than subjects — colors, patterns and designs, from the desert and beyond.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hays_carey_ann_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hays_carey_ann_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hays_carey_ann_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 55,
    "studioName": "BARBARA DRUCKER Studio",
    "address": "2950 Rice Rd, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1995212,
    "lng": -116.2823409,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in Joshua Tree\n  N on Sunburst St 3 miles\n  R on Golden St 0.5 miles\n  L on Border Ave 1 mile\n  R on Aberdeen Dr 0.5 miles\n  L on Center Ave 0.2 miles\n  R on Cielito Dr 0.5 miles\n  L on Rice Rd 0.2 miles\n  Studio is burnt orange building on left",
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-drucker_barbara",
        "name": "BARBARA DRUCKER",
        "email": "bdrucker@g.ucla.edu",
        "website": "barbara-drucker.squarespace.com",
        "instagram": "@barbaradruckerartstudio",
        "medium": "Mixed Media",
        "secondaryMedium": "Painting",
        "bio": "This year I will be exhibiting current and past work, including paintings and carvings from Greece, and mixed media pieces from Joshua Tree. The work is feminist, symbolic and autobiographical. If you enjoy this type of contemporary art please come by the studio and check it out.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/drucker_barbara_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/drucker_barbara_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/drucker_barbara_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 56,
    "studioName": "SUE FEENSTRA Studio",
    "address": "61777 Aberdeen Dr, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1928109,
    "lng": -116.3153491,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-feenstra_sue",
        "name": "SUE FEENSTRA",
        "email": "suefeenstraartist@gmail.com",
        "website": "suefeenstraartist.com",
        "medium": "Painting",
        "bio": "First place winner at the 2025 Joshua Tree National Park Art Expo Sue Feenstra is a multidisciplinary artist. Her work frequently combines materials and techniques to achieve her artistic vision. As an avid equestrian , Sue finds inspiration riding her horse on trails crossing the desert landscape.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/feenstra_sue_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/feenstra_sue_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/feenstra_sue_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 57,
    "studioName": "PANDA LANDA Studio",
    "address": "2724 Stonehill Ave, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.20381392,
    "lng": -116.3017861,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-landa_panda",
        "name": "PANDA LANDA",
        "email": "akindofbear@gmail.com",
        "website": "linktr.ee/pandalandastudio",
        "instagram": "@panda_landa_studio",
        "medium": "Fiber arts/textiles",
        "bio": "panda landa makes quilts, textiles, beaded work, and paintings. Their process is intuitive- by using reclaimed and hand-dyed fabrics, they are able to tap into improvisation as a form of play and experimentation.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/landa_panda_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/landa_panda_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/landa_panda_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 58,
    "studioName": "ERIC BANAS - LA BONETTO STUDIO",
    "address": "2575 Manana Ave, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.2067872,
    "lng": -116.3096467,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in Joshua Tree \n  N on Sunburst St 3 miles\n  R on Golden St .5 miles \n  L on Border Ave 2 miles \n  L on La Crescenta Dr .5 miles \n  R on Manana Ave .1 miles\n  La Bonetto Studio is on the right side \n Look for 15' metal man sculpture",
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-banas_eric",
        "name": "ERIC BANAS - LA BONETTO STUDIO",
        "phone": "760-218-4406",
        "email": "michele.eric@gmail.com",
        "website": "labonettostudio.com",
        "instagram": "@labonettostudio",
        "medium": "Sculpture",
        "secondaryMedium": "Assemblage",
        "bio": "Eric Banas — La Bonetto Studio, Joshua Tree. Sculptures and mixed media with grit, built from reclaimed materials. Four artist collaborations. New explorations await. Come curious, leave with original work you didn't know you needed. Your new favorite art stop.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/banas_eric_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/banas_eric_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/banas_eric_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-bassterpstra_dominique",
        "name": "DOMINIQUE BASS-TERPSTRA, TRAVELING PAINTER",
        "phone": "760-974-2562",
        "email": "Travelingpainterjt@gmail.com",
        "instagram": "@traveling_painter",
        "medium": "Painting",
        "bio": "During 2026 the studio artist collaborated on a series. Looking forward to sharing this during art tours. Personally my studio has been filled with Aliens, Plein air desert landscapes, and James Webb telescopes paintings. Paintings created to bring joy to all ages. You will find price points for all collectors.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bassterpstra_dominique_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bassterpstra_dominique_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bassterpstra_dominique_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-saks_eric",
        "name": "ERIC SAKS",
        "email": "joshuatreeskies@gmail.com",
        "website": "joshuatreefort.com",
        "instagram": "@joshuatreefort",
        "facebook": "Eric Saks",
        "medium": "Painting",
        "secondaryMedium": "Mixed Media",
        "bio": "New desert mysteries on canvas, debut of a new book publishing, and a collection of collaborative works with fellow La Bonetto artists as well as a canvas created live during our two weekends. Come buy a $10 ticket for the framed work, raffled on Sunday 10/11/25.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/saks_eric_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/saks_eric_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/saks_eric_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-kearns_susan",
        "name": "SUSAN KEARNS",
        "phone": "503-951-8325",
        "email": "suza503@gmail.com",
        "instagram": "@susankearnsart",
        "facebook": "susankearnsart",
        "medium": "Painting",
        "bio": "Susan Kearns' expressionist paintings draw inspiration from the rugged beauty of the desert landscape and the beings that inhabit it.  Balancing complexity with minimalism, Susan's work explores the tension between fragility and resilience.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/kearns_susan_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/kearns_susan_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/kearns_susan_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 59,
    "studioName": "DAVID SELIB Studio",
    "address": "60785 La Brisa Dr, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.2072267,
    "lng": -116.3368089,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From Hwy 62 in Yucca Valley\nN on Yucca Mesa Rd 4 miles\nR on Aberdeen Dr 1.5 miles\nL on Wesley Rd 1 mile\nR on La Brisa Dr 0.4 miles\nStudio on the right",
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-selib_david",
        "name": "DAVID SELIB",
        "email": "dselib@me.com",
        "website": "davidselib.com",
        "instagram": "@selib.art",
        "medium": "Painting",
        "bio": "I work in oil because of the slow dry period, allowing for new inspirations to take form. My process is layered across time. Allowing the paint to dry in various stages lets new influences enter the canvas and attract themselves to the work in the form of color, texture.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/selib_david_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/selib_david_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/selib_david_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 60,
    "studioName": "YASMINE PICO Studio",
    "address": "60811 Moonlight Mesa St, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.2148331,
    "lng": -116.3347388,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in Joshua Tree \nN on Yucca Mesa Rd 5 mi\nR on Aberdeen Dr 2.0 mi\nL on Sunny Vista Rd 1.0 mi \n - driveable dirt road\nL on Moonlight Mesa 200 ft \nStudio is the front container",
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-pico_yasmine",
        "name": "YASMINE PICO",
        "phone": "323-481-1916",
        "email": "yasminepicophotography@gmail.com",
        "website": "yasminepicophotography.com",
        "instagram": "@yasminepico.photo",
        "facebook": "yasminepicophotography",
        "medium": "Photography",
        "secondaryMedium": "Mixed Media",
        "bio": "Yasmine Pico is an interdisciplinary artist based in Joshua Tree. Her soft landscapes showcase the captivating American Southwest through her unique perspective. She aims to deepen the viewers connection to nature, especially public lands.\nHer studio is at The Portal, concept container for Reset Hotel, making art inside art.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/pico_yasmine_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/pico_yasmine_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/pico_yasmine_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 61,
    "studioName": "JUDITH-SCHORR WOLD Studio",
    "address": "60433 Sonora Rd, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.2220917,
    "lng": -116.3444486,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in Joshua Tree \n  N on Sunburst Ave 3 miles \n  R on Golden St .5 miles \n  L on Border Ave. 3 miles\n  L Sonora Road 2.6 miles \n  Studio is on the left",
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-wold_judithschorr",
        "name": "JUDITH-SCHORR WOLD",
        "phone": "310-384-7781",
        "email": "judywold5@gmail.com",
        "website": "judithschorrwold.com",
        "instagram": "@judithschorrwold",
        "facebook": "Judith-Schorr Wold",
        "medium": "Painting",
        "secondaryMedium": "Drawing",
        "bio": "With paintings which emphasize color, this bringing together of forms in the color field can propose a new richness, a new quality of sensuality and relationship, a tender approach to composition.       \n                                                               \n--Marcia Hafif",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/wold_judithschorr_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/wold_judithschorr_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/wold_judithschorr_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 62,
    "studioName": "BOOTLEG Studio",
    "address": "60340 Applegate Way, Landers, CA",
    "town": "Landers",
    "zipCode": "92252",
    "lat": 34.285117,
    "lng": -116.346538,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-adams_jason",
        "name": "BOOTLEG",
        "phone": "323-833-2533",
        "email": "jason@bootlegtheater.org",
        "website": "bootlegtheater.org",
        "instagram": "@bootlegtheater",
        "medium": "Installation",
        "bio": "Bootleg welcomes you to LETRA (Landers ExtraTerrestrial Research Association). Back by popular demand! Through artifacts and specimens, we illuminate Landers' rich history of anomalous encounters, inviting viewers to question the boundaries between terrestrial knowledge and extraterrestrial possibilities. Dare to wonder, ask, look, feel, believe (or not). Enjoy the new exhibits!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/adams_jason_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/adams_jason_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/adams_jason_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 63,
    "studioName": "VICTORIA SEBANZ Studio",
    "address": "59572 Phillipi Ln, Landers, CA",
    "town": "Landers",
    "zipCode": "92252",
    "lat": 34.2773502,
    "lng": -116.3631992,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in Yucca Valley\n N on HWY 247/Old Woman Springs Rd 10.6 miles\n R on Reche Rd 4.4 miles\n L on Yucca Mesa Rd 0.8 miles\n R on Philippi Ln 0.3 miles\n Studio on left",
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-sebanz_victoria",
        "name": "VICTORIA SEBANZ",
        "website": "victoriasebanz.com/",
        "instagram": "@victoriasebanzart",
        "facebook": "victoria.sebanz",
        "medium": "Mixed Media",
        "secondaryMedium": "Drawing",
        "bio": "Creativity is our freedom, identity and sovereignty. Themes reference nature, the feminine, spirituality, my death experience, dance and indigenous ways. I invite you into my home of mini studio areas in which I build series in assemblage, photography, drawing, painting and poetic installation. Originals, prints, books and mugs are available.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/sebanz_victoria_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/sebanz_victoria_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/sebanz_victoria_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 64,
    "studioName": "AL'S METAL SHOP",
    "address": "1142 Yucca Mesa Rd, Landers, CA",
    "town": "Landers",
    "zipCode": "92252",
    "lat": 34.2708188,
    "lng": -116.3693822,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-miyares_alberto",
        "name": "AL'S METAL SHOP",
        "phone": "917-656-1860",
        "email": "pamela@alsmetalshop.com",
        "website": "alsmetalshop.com",
        "instagram": "@alsmetalshop",
        "medium": "Metal Work",
        "bio": "Alberto Miyares is inspired by past lives of found objects and future possibilities of raw materials. Machines and metal are passions. And music. The spirit of my studio is, as the Grateful Dead sings: Some come to laugh their past away, some come to make it just one more day.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/miyares_alberto_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/miyares_alberto_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/miyares_alberto_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-newton_raymond",
        "name": "RAYMOND Y NEWTON",
        "email": "R.Y.N@Mac.com",
        "website": "LAEdge.com",
        "medium": "Photography",
        "bio": "This photographic series invites the viewer to examine common metal objects that we walk by without noticing on a daily basis. When enlarged and isolated, unexpected beauty emerges.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/newton_raymond_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/newton_raymond_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/newton_raymond_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 65,
    "studioName": "ALEX FREUND Studio",
    "address": "2868 Avalon Ave, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.2006399,
    "lng": -116.3875455,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-freund_alex",
        "name": "ALEX FREUND",
        "phone": "917-685-8162",
        "email": "alex@alexfreund.com",
        "website": "alexfreund.com",
        "instagram": "@_alex_freund_",
        "medium": "Photography",
        "secondaryMedium": "Multi-media",
        "bio": "Alex is a photographer and multimedia artist whose practice examines how meaning is constructed, imposed, and interpreted — across bodies, objects, and landscapes. His work resists easy categorization, asking what we project onto the world and why. Exhibited at Sotheby's, The Bombay Beach Biennale, and SCOPE Art Fair.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/freund_alex_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/freund_alex_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/freund_alex_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "Solo Artist — 1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 66,
    "studioName": "KATE SHEARER Studio",
    "address": "2907 Harmony Rd, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1998833,
    "lng": -116.3896019,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-shearer_kate",
        "name": "KATE SHEARER",
        "phone": "6465104551",
        "email": "kathrynshearer@gmail.com",
        "website": "kateshearerstudio.com",
        "instagram": "@kateshearerstudio",
        "facebook": "KateShearerStudio",
        "medium": "Photography",
        "secondaryMedium": "Installation",
        "bio": "Kate Shearer is an Australian photographer and installation artist opening her working photography and art studio. Her work explores the complexities of the human experience in the modern world, and our connection to nature and intuition. Visitors can view large-scale installations, purchase fine art prints, and book studio portraits.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/shearer_kate_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/shearer_kate_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/shearer_kate_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 67,
    "studioName": "MARY JEYS Studio",
    "address": "3136 Inez Ave, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1957544,
    "lng": -116.3643434,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-jeys_mary",
        "name": "MARY JEYS",
        "email": "maryjeys@gmail.com",
        "website": "maryjeys.com",
        "instagram": "@maryjeys_studio",
        "medium": "Multi-media",
        "secondaryMedium": "Drawing",
        "bio": "I am an interdisciplinary artist with work ranging from drawing to ceramics and from social engagement to live streaming. I create situations for play, ritual, resilience, and for resistance. My works reach towards ambiguity and unknowing. I live and work in the desert full-time and would love to meet you.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/jeys_mary_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/jeys_mary_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/jeys_mary_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-kraft_joseph",
        "name": "JOE KRAFT",
        "phone": "917-686-1516",
        "email": "maryjeys@gmail.com",
        "website": "josephkraft.com/",
        "instagram": "@josephkarlkraft",
        "medium": "Printmaking",
        "secondaryMedium": "Ceramics",
        "bio": "A playful and hopeful pursuit of life through drawing.  Colorful, bold shapes create Joe Kraft's vocabulary in both his print and ceramic work.  His imagery will pull you in with whimsical curiosity and leave you smiling in contemplation.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/kraft_joseph_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/kraft_joseph_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/kraft_joseph_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 68,
    "studioName": "ALEJANDRA ROBLES LUNA Studio",
    "address": "3739 Inez Ave, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1851123,
    "lng": -116.3625152,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-robles_luna_alejandra",
        "name": "ALEJANDRA ROBLES LUNA",
        "website": "alejandraroblesluna.com",
        "instagram": "@seneca_falls",
        "medium": "Photography",
        "bio": "Mexican photographer and musician Alejandra Robles Luna, trained at the International Center of Photography, uses surrealist imagery and modern techniques to transform nature's inspiration into dreamlike, sometimes-nightmarish photos. Her work blurs reality and imagination, inviting thought-provoking collective reflections rather than isolated moments that challenge perception and always evoke deep emotion.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/robles_luna_alejandra_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/robles_luna_alejandra_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/robles_luna_alejandra_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-roberts_jane",
        "name": "JANE ROBERTS",
        "email": "janerobertslive@gmail.com",
        "website": "janeobjects.com",
        "instagram": "@JaneObjects",
        "medium": "Sculpture",
        "secondaryMedium": "Furniture",
        "bio": "Influenced by wabi-sabi and the high desert, I explore balance between fragility and strength through vessels, furnishings, sculpture, and home decor. Composite forms meet magnetite, quartz, and fossils, holding geological memory. Each piece embraces impermanence and tension — delicate yet resilient, held in quiet equilibrium as earth, energy, and stillness converge.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/roberts_jane_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/roberts_jane_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/roberts_jane_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 69,
    "studioName": "DARRIAS BAKER Studio",
    "address": "58950 Canterbury St, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1825236,
    "lng": -116.3755661,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-baker_darrias",
        "name": "DARRIAS BAKER",
        "phone": "818-426-1910",
        "email": "info@darrias.com",
        "website": "darrias.com",
        "instagram": "@darriasarts",
        "facebook": "Darrias Baker",
        "medium": "Mixed Media",
        "bio": "My art is about the mystery, culture, and energy of the Mojave desert. I like to explore the mystique of the desert, including plants, animals, landscape and eclectic people that inhabit this strange and wonderful realm. My desert pop surrealistic art includes paintings, sculpture, media, stories, commentaries and screen printed graphics.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/baker_darrias_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/baker_darrias_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/baker_darrias_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 70,
    "studioName": "MARK WADE Studio",
    "address": "4958 Bonmar Rd, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1625894,
    "lng": -116.3562677,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-wade_mark",
        "name": "MARK WADE",
        "phone": "760-577-5559",
        "email": "Sculpturemw@gmail.com",
        "instagram": "@MarkWade83",
        "medium": "Sculpture",
        "secondaryMedium": "Ceramics",
        "bio": "I had a gallery in Palm Desert for 30 years and moved up here for the easy life and the beautiful views and wildlife",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/wade_mark_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/wade_mark_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/wade_mark_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 71,
    "studioName": "CHER TOWNSEND Studio",
    "address": "4985 Indio Ave, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.16244,
    "lng": -116.3778784,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in Yucca Valley\n  N on Yucca Mesa Rd 2 miles\n  L on Buena Vista Dr 0.5 miles\n  L on Indio Ave 0.1 miles\n  Studio is on the left",
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-townsend_cher",
        "name": "CHER TOWNSEND",
        "phone": "951-415-8130",
        "email": "just_cher@yahoo.com",
        "website": "chertownsend.com/",
        "instagram": "@chertownsend",
        "facebook": "chertownsendart",
        "medium": "Sculpture",
        "secondaryMedium": "Ceramics",
        "bio": "Come visit my studio that I work in year-round. There is sculpture in the yard, inside the studio and on the back patio. I do figurative sculpture in clay. Some are fun pieces that are part animal and part human with a story for the viewer to figure out.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/townsend_cher_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/townsend_cher_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/townsend_cher_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-lakey_melissa",
        "name": "MELISSA LAKEY",
        "phone": "951-306-6827",
        "email": "melissa.lakey.art@gmail.com",
        "website": "melissalakey.com/",
        "instagram": "@melissa.lakey",
        "medium": "Mixed Media",
        "secondaryMedium": "Painting",
        "bio": "I work in mixed media, combining organic textures and fun colors to create artwork that celebrates the landscape and animals of the American Southwest. A lot of my inspiration comes from living here in the Mojave Desert — quail, jackrabbits, roadrunners, and even bobcats find their way into my work.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/lakey_melissa_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/lakey_melissa_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/lakey_melissa_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 72,
    "studioName": "ED KEESLING CLAYWORKS Studio",
    "address": "58775 Wilmar Ave, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1511246,
    "lng": -116.3812707,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-keesling_ed",
        "name": "ED KEESLING CLAYWORKS",
        "phone": "780-910-1603",
        "email": "ededkeesling@aol.com",
        "website": "EdsClayworks.com",
        "facebook": "EdKeesling",
        "medium": "Ceramics",
        "bio": "I make ceramic art pottery and sculptural form by hand building and on the potter's wheel.  Most of my work is fired in a reduction kiln to achieve the greatest marriage of clay and glaze.   My work reflects the Mojave Desert and the asymmetrical Golden Mean.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/keesling_ed_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/keesling_ed_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/keesling_ed_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "Solo Artist — 1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 73,
    "studioName": "VALERIE DAVIS Studio",
    "address": "5786 Marvin Dr, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1479196,
    "lng": -116.3720977,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-davis_valerie",
        "name": "VALERIE DAVIS",
        "phone": "760-820-4336",
        "email": "valdavisartinjt@gmail.com",
        "website": "etsy.com/shop/SeleniteEarrings",
        "instagram": "@valdavisartinjt",
        "medium": "Painting",
        "secondaryMedium": "Jewelry",
        "bio": "Using Selenite, a clear, soft mineral, I make jewelry and jeweled wands, which I carve and infuse with color.\nI create mixed media sculptures that I call Planimerals, part plant, animal, and mineral. \nI also work within the mandala form, in contrasting organic forms and textures withn the sacred geometry.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/davis_valerie_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/davis_valerie_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/davis_valerie_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-geiger_marcia",
        "name": "MARCIA GEIGER",
        "phone": "760-820-4336",
        "email": "geigarts@gmail.com",
        "website": "geigarts.com",
        "medium": "Painting",
        "secondaryMedium": "Assemblage",
        "bio": "My studio north of Joshua Tree allows my creative inspirations to grow. Working primarily in oil and gouache, I also incorporate old tins found rusting in the desert, that I turn into small desert dioramas. I advocate for environmental preservation by capturing the beauty and human response to the desert.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/geiger_marcia_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/geiger_marcia_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/geiger_marcia_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 74,
    "studioName": "DONALD MCPHERSON Studio",
    "address": "5889 Carmelita Ave, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1442585,
    "lng": -116.3789096,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-mcpherson_don",
        "name": "DONALD MCPHERSON",
        "phone": "760-861-7090",
        "email": "donmcpherson@verizon.net",
        "website": "donmcpherson@verizon.net",
        "medium": "Painting",
        "bio": "As I paint in the summer, I am able to provide the best selection of my art during the fall at the Open Studio Tours.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mcpherson_don_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mcpherson_don_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mcpherson_don_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 75,
    "studioName": "TOBLYNPHOTO | DEANNA VALDEZ Studio",
    "address": "6166 Yucca Mesa Rd, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1417366,
    "lng": -116.3702662,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-valdez_deanna",
        "name": "TOBLYNPHOTO | DEANNA VALDEZ",
        "phone": "760-238-0140",
        "email": "toblynphotography@gmail.com",
        "website": "toblynphoto.com",
        "instagram": "@toblynphoto",
        "facebook": "De Anna",
        "medium": "Photography",
        "secondaryMedium": "Digital Art",
        "bio": "Known for my abstract joshua tree images, this year I will also show work from the project where I discovered and grew the technique I use to alter my images. Hope you swing by to see some earlier work as well as some new work.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/valdez_deanna_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/valdez_deanna_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/valdez_deanna_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 76,
    "studioName": "BUD & DELORIS' Studio",
    "address": "60460 Alta Mura Dr, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1227199,
    "lng": -116.3445085,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-ebner_joshua",
        "name": "BUD & DELORIS'",
        "phone": "415-902-4924",
        "email": "jebner123@gmail.com",
        "website": "budanddeloris.com",
        "instagram": "@budanddeloris",
        "medium": "Illustration",
        "secondaryMedium": "Mixed Media",
        "bio": "Bud & Deloris' is a creative hub featuring illustrations, paintings, murals, woodwork, household goods, and wood burnings made by Joshua Ebner. Featuring live music, food for purchase from the Bud & Deloris' PotLuck Food Truck, billiards, putt putt and more! Come have fun, take in the beautiful view, and support local art.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/ebner_joshua_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/ebner_joshua_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/ebner_joshua_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 77,
    "studioName": "FRED HOERR Studio",
    "address": "60253 Latham Trl, Joshua Tree, CA",
    "town": "Joshua Tree",
    "zipCode": "92252",
    "lat": 34.1180598,
    "lng": -116.3496121,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-hoerr_fred",
        "name": "FRED HOERR",
        "phone": "213-284-4188",
        "email": "f@fhoerr.net",
        "website": "fredhoerr.net",
        "instagram": "@fhoerr",
        "facebook": "fhoerr",
        "medium": "Photography",
        "secondaryMedium": "Painting",
        "bio": "Upon arriving here last year, I soon realized that panoramas would be necessary to convey the vastness of the high desert. Unfortunately, these photos don't fit well into small squares on this page, hence the awkward crops below. Please drop by to view the prints in full wide beauty.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hoerr_fred_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hoerr_fred_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hoerr_fred_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 79,
    "studioName": "MICAH HEIMLICH Studio",
    "address": "7459 Chippewa Trl, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1170555,
    "lng": -116.3768924,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-heimlich_micah",
        "name": "MICAH HEIMLICH",
        "email": "micah@unheim.com",
        "website": "BookofMica.com",
        "instagram": "@unheim.design",
        "medium": "Mixed Media",
        "bio": "Architect-trained and Mojave-based designer Micah Heimlich works at the intersection of geology and geometry. Educated at Clemson University, SC, and shaped by projects both local and international, he divides his time between designing buildings and developing collectibles in mica and glass. His portfolio bridges architecture, art, furniture, interior design, and light-responsive materials.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/heimlich_micah_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/heimlich_micah_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/heimlich_micah_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 80,
    "studioName": "VALERIE GARZA Studio",
    "address": "7435 Indio Ave, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.117499,
    "lng": -116.3788431,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-garza_valerie",
        "name": "VALERIE GARZA",
        "email": "hello@coachellavalerie.com",
        "website": "valeriegarza.com",
        "instagram": "@CoachellaValerie",
        "medium": "Illustration",
        "secondaryMedium": "Book Arts",
        "bio": "Valerie Garza is an illustrator and painter. Her gouache paintings and digital illustrations are inspired by her life in the desert with her dog, Bug. She is the illustrator behind Coachella Valerie greeting cards and will have gouache originals, prints, zines, and stationery available at her stop. Come on by!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/garza_valerie_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/garza_valerie_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/garza_valerie_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 81,
    "studioName": "ESTHER SHAW Studio",
    "address": "8289 Palomar Ave, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.101771,
    "lng": -116.3872009,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From Hwy 62 in Yucca Valley \nS on Avalon Ave. 2.2 miles\nL at 8289 black mailbox - driveway.",
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-shaw_esther",
        "name": "ESTHER SHAW",
        "phone": "714-290-0254",
        "email": "esthernmike2@gmail.com",
        "website": "esthershawsart.com",
        "instagram": "@EstherShaw",
        "facebook": "Esther Shaw",
        "medium": "Painting",
        "secondaryMedium": "Sculpture",
        "bio": "My work has been centered around the desert, whether it is representational or abstract. I am inspired by the desert landscape, creatures, and climate conditions. Many of my works are oil or acrylic on canvas, but I also enjoy plein air painting in watercolor.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/shaw_esther_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/shaw_esther_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/shaw_esther_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 82,
    "studioName": "PERI MAKES LAMPS Studio",
    "address": "8980 Del Monte Ave, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.088883,
    "lng": -116.3852308,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-shefik_peri",
        "name": "PERI MAKES LAMPS",
        "phone": "213-880-5780",
        "email": "perilamps@gmail.com",
        "website": "etsy.com/shop/PeriMakesLamps",
        "instagram": "@perimakeslamps",
        "medium": "Furniture",
        "bio": "I have been designing and fabricating Modernist lamps for 25+ years. I have a large lamp family including dozens of styles, colors and materials, emphasizing function and craftsmanship. View dozens of lamps in a wide range of sizes and costs.  My full workshop and lampshade-making room will also be open!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/shefik_peri_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/shefik_peri_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/shefik_peri_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 83,
    "studioName": "CHERYL PIKORA Studio",
    "address": "58563 Santa Barbara Dr, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.083084,
    "lng": -116.3863686,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-pikora_cheryl",
        "name": "CHERYL PIKORA",
        "phone": "978-790-2052",
        "email": "cherylpikora@me.com",
        "instagram": "@Pikarmonarts",
        "facebook": "Pikarmon Arts",
        "medium": "Painting",
        "secondaryMedium": "Ceramics",
        "bio": "Cheryl Pikora is an artist residing in Yucca Valley with a spacious art studio featuring work in progress and many finished pieces with some reproductions. High desert landscapes, local wildlife art and figurative art in oil or watercolor and ceramics pieces ranging from sculptures to functional pottery are her specialties.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/pikora_cheryl_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/pikora_cheryl_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/pikora_cheryl_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 84,
    "studioName": "HIROKO MOMII Studio",
    "address": "9252 Joshua Ln, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.0844531,
    "lng": -116.3876987,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in Yucca Valley\nS on Joshua Lane 4.3 miles\nStudio on the right\n\n *GPS ok on Apple Map & Waze",
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-momii_hiroko",
        "name": "HIROKO MOMII",
        "phone": "310-218-7725",
        "email": "hirokomomiiart@gmail.com",
        "website": "hirokomomii.com",
        "instagram": "@hirokomomiiart",
        "facebook": "HirokoMomiiAbstractArt",
        "medium": "Painting",
        "secondaryMedium": "Drawing",
        "bio": "I see the Totality of Life, visible and invisible. Recently, I have become interested in giving art forms to the energy field of invisible feelings, thoughts, and experiences beyond forms. Art making is Meditation, Flow, and Life for me. Art is a celebration to share with viewers. Viewers complete Art.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/momii_hiroko_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/momii_hiroko_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/momii_hiroko_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 85,
    "studioName": "WALKER METTLING Studio",
    "address": "58209 Juarez Dr, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.09423,
    "lng": -116.3941345,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-mettling_walker",
        "name": "WALKER METTLING",
        "phone": "415-518-7059",
        "email": "walkermettling@gmail.com",
        "website": "walkermettling.com",
        "instagram": "@katrillioneyes",
        "medium": "Printmaking",
        "secondaryMedium": "Book Arts",
        "bio": "Howdy Friends! I've got weird desert comics, foam monster heads, shirts, activity books, flourescent screenprints, collages (made of those chopped up prints), banners, ceramics, dice-based drawing game books, and of course everyone's favorite - - -  the oversized and  risographed 2027 Calendar... All printed in my studio!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mettling_walker_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mettling_walker_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mettling_walker_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 86,
    "studioName": "ROSE KIRBY Studio",
    "address": "7666 Hilton Ave, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1130124,
    "lng": -116.4008494,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-kirby_rose",
        "name": "ROSE KIRBY",
        "phone": "530-305-1120",
        "email": "rosepetals55@att.net",
        "instagram": "@rosepetals54",
        "facebook": "Rose Kirby",
        "medium": "Painting",
        "secondaryMedium": "Mixed Media",
        "bio": "My art centers on female figures who exist\nSomewhere between the earthly and the symbolic. They are often accompanied by animals, plants, and or celestial elements that suggest our deep connection to our natural world. Come by my studio and say hi!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/kirby_rose_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/kirby_rose_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/kirby_rose_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 87,
    "studioName": "KIM SCHEER Studio",
    "address": "7405 Frontera Ave, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1182838,
    "lng": -116.3970031,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-scheer_kim",
        "name": "KIM SCHEER",
        "email": "Helper.monkey@sbcglobal.net",
        "instagram": "@Vegetarian.glass",
        "medium": "Glass",
        "secondaryMedium": "Glass",
        "bio": "Kim Scheer is a stained glass artist who incorporates new and repurposed items such as metal and wood into her glass creations. She cuts all her glass by hand, pulling it together using the classic foil and solder technique. Come by and say hi!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/scheer_kim_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/scheer_kim_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/scheer_kim_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 3rd Weekends Only"
      },
      {
        "id": "artist-young_rema",
        "name": "REMA YOUNG",
        "email": "remayoung@gmail.com",
        "instagram": "@ry.claystuff",
        "medium": "Ceramics",
        "bio": "Rema Young is a ceramicist who creates engaging functional and sculptural pieces using both hand-building techniques and the potters wheel. She uses stoneware clays, brightly colored glazes and underglazes.  Inspired by mid-century textiles, desert imagery, Little Golden Books, pop-culture and wildlife. Happy tours!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/young_rema_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/young_rema_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/young_rema_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 88,
    "studioName": "CHASER OF THE LIGHT Studio",
    "address": "6344 Murrieta Ave, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1379915,
    "lng": -116.4081909,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-cox_jennifer",
        "name": "CHASER OF THE LIGHT",
        "phone": "951-587-7839",
        "email": "Chaserofthelight86@gmail.com",
        "instagram": "@Chaser_ofthelight",
        "medium": "Photography",
        "bio": "I am drawn to chasing light in nature, revealing what often goes unseen in our vast universe. With a deep love of color, design, and creation, my work reflects a passion for life and travel-capturing the beauty that surrounds us and reminding us that light always outshines darkness.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/cox_jennifer_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/cox_jennifer_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/cox_jennifer_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 89,
    "studioName": "JOHN HENSON NAIL ART Studio",
    "address": "5634 Roberts Rd, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1508057,
    "lng": -116.4086723,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-henson_john",
        "name": "JOHN HENSON NAIL ART",
        "phone": "310-877-7933",
        "email": "johnjohnhenson@gmail.com",
        "website": "johnhensonart.com",
        "instagram": "@john.henson.art",
        "facebook": "john.henson.3957",
        "medium": "Nail Art",
        "secondaryMedium": "Assemblage",
        "bio": "Thousands of nails become desert landscapes, creatures, portraits, and abstract images. Each piece contains 5,000 to 70,000 nails set into painted wood panels. Stop by the studio to experience some unique art (2 artists) in a stunningly beautiful hi-desert setting.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/henson_john_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/henson_john_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/henson_john_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-grisi_melissa",
        "name": "MELISSA GRISI/WILD HOPE HANDMADE",
        "instagram": "@wild_hope_handmade",
        "medium": "Ceramics",
        "bio": "The Mojave Desert surrounds and inspires me. I found clay at 19 and never let it go; 30 years later, it remains a place of play and curiosity. I make work that explores texture and form, reflecting the landscape and the simple joy I find in working with clay.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/grisi_melissa_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/grisi_melissa_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/grisi_melissa_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 90,
    "studioName": "CHRIS RONK Studio",
    "address": "1188 Tahoe Ave, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.2319319,
    "lng": -116.427963,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-ronk_chris",
        "name": "CHRIS RONK",
        "phone": "760-910-1903",
        "email": "chris@ronk.art",
        "website": "ronk.art",
        "instagram": "@chrisronkart",
        "medium": "Painting",
        "bio": "I create minimalist abstract paintings. I am fortunate to to be able to create and show my work at the incredible Steve Rieman art studio located in Flamingo Heights, CA.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/ronk_chris_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/ronk_chris_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/ronk_chris_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 91,
    "studioName": "RACHEL RUST Studio",
    "address": "57157 Emerald Way, Landers, CA",
    "town": "Landers",
    "zipCode": "92252",
    "lat": 34.2764645,
    "lng": -116.4162631,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in Yucca Valley \nN on HWY 247/Old Woman Springs Rd 10.7 miles \nR on Reche Rd 2.2 miles \nL on Belfield 0.8 miles\nL on Emerald Way 0.6 miles\nEmerald Way dead ends at studio driveway",
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-mcgannon_rachel_rachelrust",
        "name": "RACHEL RUST",
        "phone": "941-320-9824",
        "website": "Rachel-rust.com",
        "instagram": "@rustyphotos",
        "medium": "Woodwork",
        "secondaryMedium": "Ceramics",
        "bio": "Known for her intricate woodwork, Rachel Rust inlays bits of her nomadic spirit into each piece. Whether inspired by the Art Deco architecture of NYC, Native American textiles, or the warm and worn hues of her desert home, Rust's art weaves a rich tapestry of complex geometries and found materials, inviting viewers on a visual journey that transcends boarders.Forthcoming",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mcgannon_rachel_rachelrust_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mcgannon_rachel_rachelrust_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mcgannon_rachel_rachelrust_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 92,
    "studioName": "BRAD BYRD Studio",
    "address": "57054 Richardson Rd, Landers, CA",
    "town": "Landers",
    "zipCode": "92252",
    "lat": 34.3017358,
    "lng": -116.4185705,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-byrd_brad",
        "name": "BRAD BYRD",
        "email": "bradbyrdmgmt@gmail.com",
        "website": "brad-byrd.com/",
        "instagram": "@bradbyrd",
        "facebook": "BradByrd",
        "medium": "Painting",
        "secondaryMedium": "Mixed Media",
        "bio": "Brad Byrd is a painter and songwriter based in Landers CA, creating instinct-driven work with oil, acrylic, and found materials. Influenced by Rothko, Pollock, and Van Gogh, his layered paintings and indie-rock/alt-country songs explore emotion, place, and the pursuit of something just beyond words.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/byrd_brad_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/byrd_brad_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/byrd_brad_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-valley_byrd_marnie",
        "name": "MARNIE VALLEY BYRD",
        "email": "marnievalley@gmail.com",
        "instagram": "@elusivegrl",
        "facebook": "MarnieValley",
        "medium": "Painting",
        "secondaryMedium": "Mixed Media",
        "bio": "Marnie Valley Byrd creates mixed-media paintings that explore memory, place, and emotional landscape. Using collage, acrylic, botanical imagery, maps, and found desert materials, she builds layered surfaces where forms emerge and recede. Influenced by art therapy, her work reflects resilience, transformation, and the quiet depth of lived experience.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/valley_byrd_marnie_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/valley_byrd_marnie_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/valley_byrd_marnie_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 93,
    "studioName": "MARSHALL VANDERHOOF Studio",
    "address": "56601 Linn Rd, Landers, CA",
    "town": "Landers",
    "zipCode": "92252",
    "lat": 34.2941017,
    "lng": -116.4289734,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-vanderhoof_marshall",
        "name": "MARSHALL VANDERHOOF",
        "email": "marshall@mjvphoto.com",
        "website": "mjvphoto.com",
        "instagram": "@marshallvanderhoof",
        "facebook": "marshallvanderhoofphotography",
        "medium": "Photography",
        "bio": "My great grandmother gave me my first camera to take photographs while at camp. I have always had a passion for photography ever since. My hope is to evoke emotion and inspiration through my photography. I don't know what the future holds, but photography will be a part of it.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/vanderhoof_marshall_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/vanderhoof_marshall_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/vanderhoof_marshall_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-hatheway_teale",
        "name": "TEALE HATHEWAY",
        "email": "inquire@tealehatheway.com",
        "website": "tealehatheway.com",
        "instagram": "@tealehathewayart",
        "medium": "Painting",
        "secondaryMedium": "Other",
        "bio": "I'm known for my colorful, expressionist paintings of architectural details which contemplate ideas of memory, time and the soulful deposits left behind as we experience physical spaces. I'm also the founder of Pearl & Maude, a boutique line of wallpaper and home décor.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hatheway_teale_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hatheway_teale_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hatheway_teale_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 94,
    "studioName": "CYBELE ROWE Studio",
    "address": "56423 Reche Rd, Landers, CA",
    "town": "Landers",
    "zipCode": "92252",
    "lat": 34.2654168,
    "lng": -116.4323547,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-rowe_cybele",
        "name": "CYBELE ROWE",
        "phone": "714-417-8176",
        "email": "cybele@cybelerowe.com",
        "website": "cybelerowe.com",
        "instagram": "@CYBELE_ROWE",
        "facebook": "CYBELE ROWE",
        "medium": "Sculpture",
        "secondaryMedium": "Painting",
        "bio": "My studio is the desert floor and the sky is my ceiling. My sculpture garden will be open for you to wander amongst my forms. I am represented by  Eric Firestone New York. Google me to see more.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/rowe_cybele_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/rowe_cybele_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/rowe_cybele_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 95,
    "studioName": "PAMELA GREEN Studio",
    "address": "771 Cherokee Trl, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.2400909,
    "lng": -116.4435716,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-green_pamela",
        "name": "PAMELA GREEN",
        "phone": "310-418-3911",
        "email": "pamelagrn3@gmail.com",
        "medium": "Drawing",
        "secondaryMedium": "Painting",
        "bio": "My investigation of Nature reflects a lifetime of observing the uniqueness of plants, trees, and flowers. The exploration of the cycle of life and death and the transitory aspect of all Nature are my concerns.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/green_pamela_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/green_pamela_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/green_pamela_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 96,
    "studioName": "JAKE REILAND Studio",
    "address": "877 Geronimo Trl, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.2374789,
    "lng": -116.4498391,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-reiland_jake",
        "name": "JAKE REILAND",
        "phone": "714-681-6423",
        "email": "jakereilandceramics@gmail.com",
        "instagram": "@jake_reiland",
        "medium": "Ceramics",
        "bio": "My work includes a wide variety of wheel thrown forms and glaze surfaces. From rough, earthy wood fired pieces to porcelain glazed with bright colors. Come see my unique studio and the rest of the 2 acre property that is a work of art in itself.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/reiland_jake_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/reiland_jake_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/reiland_jake_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 97,
    "studioName": "SHRINE Studio",
    "address": "1101 Old Woman Springs Rd, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.2338524,
    "lng": -116.4376866,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-spears_brent",
        "name": "SHRINE",
        "email": "Shrineonstudios@yahoo.com",
        "website": "Shrinetheworld.com",
        "instagram": "@Shrineon",
        "medium": "Assemblage",
        "secondaryMedium": "Painting",
        "bio": "Elegante 13ft trash towers await ,meet me in the garden under the Pakistani mulberry tree next to the gathering of ragged ghoulish stalagmite-esk curiosities. \nI'll be available to discuss the harmonious goings on between the colors orange, gold, cream, and black or the secret life of the color pink, or?",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/spears_brent_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/spears_brent_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/spears_brent_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-marcano_al",
        "name": "AL MARCANO",
        "instagram": "@Al_marcano",
        "facebook": "Al Marcano",
        "medium": "Mixed Media",
        "secondaryMedium": "Woodwork",
        "bio": "Don't be afraid",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/marcano_al_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/marcano_al_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/marcano_al_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-labaw_shannon",
        "name": "SHANNON LABAW-O'SULLIVAN",
        "email": "Shanneetown11@gmail.com",
        "website": "@themajamodernart",
        "instagram": "@themajamodernart",
        "facebook": "Shannonosullivantattoo",
        "medium": "Painting",
        "secondaryMedium": "Illustration",
        "bio": "Shannon makes abstract paintings based on geometric pattern and form, with a bold use of color and texture.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/labaw_shannon_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/labaw_shannon_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/labaw_shannon_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-gadzuk_wendy",
        "name": "WENDY LEE GADZUK",
        "email": "wendgadzuk@gmail.com",
        "website": "wendyleegadzuk.com",
        "instagram": "@wendy_lee_gadzuk",
        "facebook": "wendyleegadzuk",
        "medium": "Assemblage",
        "secondaryMedium": "Drawing",
        "bio": "I am a mixed media assemblage artist using the mundane to build the extraordinary. I pilfer junk piles, save my cans and bottles and even medical waste to create altar-like pieces that celebrate the tiny miracles of everyday existence.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/gadzuk_wendy_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/gadzuk_wendy_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/gadzuk_wendy_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 98,
    "studioName": "TESS JENKINS Studio",
    "address": "1087 Keeler Ave, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.2338591,
    "lng": -116.4365926,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-jenkins_tess",
        "name": "TESS JENKINS",
        "website": "tessjenkins.com",
        "instagram": "@tessseessee",
        "medium": "Painting",
        "secondaryMedium": "Ceramics",
        "bio": "Joyful guardians and ancient relics from the future in the form of paintings and playful housewares",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/jenkins_tess_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/jenkins_tess_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/jenkins_tess_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-endo_emily",
        "name": "EMILY ENDO",
        "email": "contact@emilyendo.com",
        "website": "emilyendo.com",
        "instagram": "@emily__endo",
        "medium": "Sculpture",
        "secondaryMedium": "Mixed Media",
        "bio": "I create sculptural works that bring together glass, scent, and material processes to explore the relationships between body, nature, and matter. Drawing on science and mysticism, my work considers transformation, interdependence, and time, inviting multisensory encounters where physical form and atmosphere blur boundaries between the real and imagined.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/endo_emily_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/endo_emily_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/endo_emily_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 99,
    "studioName": "SUZEN SMALLWOOD Studio",
    "address": "55473 Luna Vista Ln, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.2218515,
    "lng": -116.45349,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From Hwy 62 in Yucca Valley \nN on hwy 247/Old Woman Springs Rd 8 miles\nL on Tanager Rd to end 0.9 miles\nL on Jemez Tr 0.2 miles\nL on Luna Vista Ln 75 ft to top\nR in driveway after telephone pole",
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-smallwood_suzen",
        "name": "SUZEN SMALLWOOD",
        "phone": "760-364-9158",
        "email": "suzensmallwood@gmail.com",
        "facebook": "suzensmallwoodjewelry",
        "medium": "Jewelry",
        "bio": "Just can't help myself, one more year. REALLY!\nI wanted to finish here in my own studio.  I still have many medium cholla pieces and silver chains, but the high cost of replacement silver is creating an opportunity to use up what I have.  Can't wait to show you.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/smallwood_suzen_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/smallwood_suzen_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/smallwood_suzen_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-schuetzecoburn_marje",
        "name": "DESERT SHADOW ARTWORKS",
        "phone": "310-619-5242",
        "email": "desertshadow.artworks@gmail.com",
        "instagram": "@desertshadow.artworks",
        "medium": "Fiber arts/textiles",
        "bio": "I am drawn to the desert in search of solitude, beauty and inspiration. Fabric, thread, beads and working with my hands makes me happy. Creating my tiny fabric bits allows me to play with these materials and find a sense of calmness and joy.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/schuetzecoburn_marje_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/schuetzecoburn_marje_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/schuetzecoburn_marje_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 100,
    "studioName": "ZENBUNNYLAND | STEFFI SUTTON Studio",
    "address": "3132 Juniper Trl, Pioneertown, CA",
    "town": "Pioneertown",
    "zipCode": "92252",
    "lat": 34.1966409,
    "lng": -116.498919,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in Yucca Valley\n  N on HWY 247/Old Woman Springs Rd 5.4 miles\n  L on Pipes Cyn Rd 4.4 miles\n  L on Acacia Ave 500 ft\n  L on Cielito Trl 0.3 miles\n  Road dead ends at studio",
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-sutton_steffi",
        "name": "ZENBUNNYLAND | STEFFI SUTTON",
        "phone": "760-464-3630",
        "email": "zenbunnystudios@gmail.com",
        "website": "zenbunnystudios.com",
        "instagram": "@zenbunnyland",
        "facebook": "zenbunnyland",
        "medium": "Pyrogravure",
        "secondaryMedium": "Mixed Media",
        "bio": "Discovering pyrograuve in the hi-dez hills of Pioneertown is a natural progression from my experiences with Fire. I love the unique element it brings, creating lines and marks through burning into wood. Curiosity leads to mythology, astrology, science, and fable, drawing stories and inspiration from them all and more.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/sutton_steffi_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/sutton_steffi_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/sutton_steffi_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-sutton_paul",
        "name": "ARTPIMP CREATIONS",
        "phone": "323-829-2330",
        "email": "Fuzzytooth@gmail.com",
        "website": "zenbunnystudios.com/original-metal-yard-art",
        "instagram": "@hidezartpimp",
        "medium": "Metal Work",
        "bio": "I transform metal into desert creatures, alien forms, and otherworldly landscapes. Each piece is one of a kind, guided by imagination, curiosity, and a love of the process. Over time, exposure to the elements creates a naturally weathered surface enhancing its rustic character",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/sutton_paul_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/sutton_paul_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/sutton_paul_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 101,
    "studioName": "AUDREY GREEN Studio",
    "address": "5462 Roy Rogers Rd, Pioneertown, CA",
    "town": "Pioneertown",
    "zipCode": "92252",
    "lat": 34.1540982,
    "lng": -116.4975443,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-green_audrey",
        "name": "AUDREY GREEN",
        "phone": "760-333-9184",
        "email": "desertgreen9@me.com",
        "facebook": "AUDREYGREEN",
        "medium": "Painting",
        "secondaryMedium": "Assemblage",
        "bio": "I am a self taught folk artist, in love with my desert home.  My art has always been about my obsession with color, bold and bright, landscapes coated in magenta and lime, among blooming cactus, rabbits and goats. I hope my art brings a smile to your face.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/green_audrey_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/green_audrey_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/green_audrey_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      },
      {
        "id": "artist-lanicca_jenny",
        "name": "JENNY LANICCA",
        "website": "jennylanicca.com",
        "medium": "Drawing",
        "bio": "My work explores the stickers attached to fruit as markers of origin, transforming natural objects into tracked commodities linking farms, countries, retailers, and consumers.\nI invite viewers to reflect on how ideas of origin, authenticity, and value are constructed, and how labels identify things while obscuring the complexity behind them.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/lanicca_jenny_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/lanicca_jenny_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/lanicca_jenny_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      },
      {
        "id": "artist-wood_tami",
        "name": "TAMI WOOD",
        "phone": "760-774-2553",
        "email": "tamiwoodcreations@gmail.com",
        "instagram": "@TamiWoodCreations",
        "medium": "Assemblage",
        "secondaryMedium": "Mixed Media",
        "bio": "Rusty Desert Art Inspired Assemblage created with unique objects and thrown away materials. The treasures were found in the foothills of my Beautiful small town Morongo Valley, CA.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/wood_tami_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/wood_tami_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/wood_tami_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 102,
    "studioName": "VICTORIA ROTHLISBERG Studio",
    "address": "4929 Canton St, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1637076,
    "lng": -116.4296009,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-rothlisberg_victoria",
        "name": "VICTORIA ROTHLISBERG",
        "phone": "760-832-5611",
        "email": "deerfoot1@msn.com",
        "website": "fineartsbyvictoria.com",
        "instagram": "@rothlisbergvictoria",
        "facebook": "fineartsbyvictoria.com",
        "medium": "Painting",
        "secondaryMedium": "Pastel",
        "bio": "My paintings are a distillation of decades.  Painting never has a final destination, but chooses instead to be just out of reach.  Like the trails I ride, the creative process leaves patterns of memory.  The trail may be the same but the approach is different every day and year.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/rothlisberg_victoria_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/rothlisberg_victoria_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/rothlisberg_victoria_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 103,
    "studioName": "DESERT DUDE WOODWORKS Studio",
    "address": "5126 Canton St, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.159835,
    "lng": -116.4304328,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-karp_jonathan",
        "name": "DESERT DUDE WOODWORKS",
        "phone": "760-275-6800",
        "email": "desertdudewoodworks@aol.com",
        "website": "desertdudewoodworks.com",
        "medium": "Woodwork",
        "secondaryMedium": "Mixed Media",
        "bio": "Step into Desert Dude Woodworks, where logs, reclaimed wood and desert driftwood become one-of-a-kind art. Explore handcrafted furniture, décor, and sculptural pieces shaped by nature and design. Meet the artist and discover works that brings warmth, character, and the spirit of the desert into your home.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/karp_jonathan_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/karp_jonathan_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/karp_jonathan_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 104,
    "studioName": "WILL KARP Studio",
    "address": "56540 Chipmunk Trl, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1591573,
    "lng": -116.4309005,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-karp_will",
        "name": "WILL KARP",
        "phone": "505-231-0054",
        "email": "WILLKARP.ART@GMAIL.COM",
        "website": "willkarp.com",
        "medium": "Paper Arts",
        "secondaryMedium": "Mixed Media",
        "bio": "Call me a Paper Engineer.  My skills include Printmaking, Photography, Painting, Papermaking, Book Arts, Mixed Media, and Recycled Art.  Unable to focus on a single art form, I combine and transform paper and books into unique sculptural 3-dimensional works of art. Oh, also paper jewelry, handmade journals, and note cards.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/karp_will_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/karp_will_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/karp_will_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 105,
    "studioName": "NICHOLE VIKDAL Studio",
    "address": "5247 Grand Ave, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1577472,
    "lng": -116.4252933,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in Yucca Valley\n  N on HWY 247/Old Woman Springs Rd 3 miles \n  L on Skyline Ranch Rd 300 ft\n  L on Wallaby St 0.8 miles\n  R on Duarte St 300 ft\n  L on Grand Ave. House on left corner\n  Follow signs for parking and studio\n  DO NOT TAKE COBALT - BAD ROAD\"",
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-vikdal_nichole",
        "name": "NICHOLE VIKDAL",
        "website": "crystalsbynichole.com",
        "instagram": "@crystalsbynichole",
        "facebook": "CrystalsByNichole",
        "medium": "Ceramics",
        "secondaryMedium": "Sculpture",
        "bio": "I specialize in crystalline glazed porcelain ceramics, where mesmerizing crystals form within the glaze during firing. My studio is the only stop on the Tours to experience this captivating art form. Visitors will enjoy a full gallery of water features, sculptures, and unique gifts while getting a look inside my studio.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/vikdal_nichole_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/vikdal_nichole_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/vikdal_nichole_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-wind_hollr",
        "name": "HOLLY RAE METAL MAGIC",
        "phone": "814-688-3442",
        "email": "hollyrae49@gmail.com",
        "website": "none",
        "instagram": "@HollyRaeJewelry",
        "facebook": "Holly Rae Wind",
        "medium": "Metal Work",
        "secondaryMedium": "Jewelry",
        "bio": "The beauty and luster from copper, stones and crystals mesmerized me many years ago.  I loved changing the color of copper with heat from a torch or my very own patinas.  This continues to excite me today as I create both small pieces of jewelry to large wall hangings.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/wind_hollr_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/wind_hollr_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/wind_hollr_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 106,
    "studioName": "JULIANNE KOZA Studio",
    "address": "5405 Grand Ave, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.155162,
    "lng": -116.4265552,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in Yucca Valley \n  N on HWY 247/Old Woman Springs Rd 3 miles \n  L on Skyline Ranch Rd 300 ft\n  L on Wallaby St (1st left) 0.8 miles\n  R on Grand Ave 0.5 miles\n  Studio is is first driveway on right. \n  DO NOT TAKE COBALT - BAD ROAD",
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-koza_julianne",
        "name": "JULIANNE KOZA",
        "phone": "760-625-2094",
        "email": "juliannekoza@verizon.net",
        "medium": "Photography",
        "bio": "As a toddler I was always pointing and saying \"Oh, look, pretty!\"  As an adult, photography is my way of sharing my excitement about the beauty of the creation around us, my way of still saying \"Oh, look, pretty!\"",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/koza_julianne_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/koza_julianne_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/koza_julianne_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-ryan_georgia",
        "name": "GEORGIA RYAN",
        "phone": "928-303-1292",
        "email": "woodgatestudio@gmail.com",
        "website": "woodgatestudio.com",
        "medium": "Glass",
        "secondaryMedium": "Ceramics",
        "bio": "Creating is a necessary component of a (my) balanced life.  Without it, I malfunction.  And it's fun!  I am inspired by anything: nature, conversations, a dream.  My work doesn't seek to persuade, judge, or impose a philosophy.  I hope you enjoy it as much as I enjoyed making it!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/ryan_georgia_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/ryan_georgia_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/ryan_georgia_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 107,
    "studioName": "DIANNE BENNETT Studio",
    "address": "56356 Cobalt Rd, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1514947,
    "lng": -116.4343859,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-bennett_dianne",
        "name": "DIANNE BENNETT",
        "phone": "805-640-8751",
        "email": "diannebennettblue@gmail.com",
        "website": "diannebennett.net",
        "instagram": "@diannebennettart",
        "facebook": "dianne bennett",
        "medium": "Painting",
        "secondaryMedium": "Assemblage",
        "bio": "I paint portraits of birds and other natural subjects on salvaged and repurposed grounds and make all of my art with found treasures.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bennett_dianne_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bennett_dianne_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bennett_dianne_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-engle_chris",
        "name": "CHRIS ENGLE",
        "phone": "805-630-1909",
        "email": "cdengle49@gmail.com",
        "instagram": "@bunkhausmojave",
        "facebook": "Chris Engle",
        "medium": "Furniture",
        "secondaryMedium": "Sculpture",
        "bio": "Visit the studio up in the boulder-scape and see work that includes wrought-iron furnishings, torch-cut sheet metal art, welded fabrications.\nSet up for virtually all art mediums- welding, steel sculpture, ceramics, assemblage, wood and paint. Enjoy the park-like setting of our \nhigh-desert rancho!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/engle_chris_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/engle_chris_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/engle_chris_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 108,
    "studioName": "LISA HADLEY ERBACHER Studio",
    "address": "56687 Cobalt Rd, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1489257,
    "lng": -116.4272316,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-erbacher_hadley_lisa",
        "name": "LISA HADLEY ERBACHER",
        "phone": "760-845-7898",
        "email": "Surfkatz60@gmail.com",
        "facebook": "Lisa Erbacher",
        "medium": "Fiber arts/textiles",
        "bio": "I have been crocheting, sewing and creating handmade pieces (blankets, ponchos, and purses) since my childhood. My work brings me fulfillment, enjoyment, and relaxation. I enjoy creating one-of-a-kind patterns and color schemes and all pieces are made with yarn that is durable and safe for the washer and dryer.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/erbacher_hadley_lisa_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/erbacher_hadley_lisa_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/erbacher_hadley_lisa_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-hadley_smith_kim",
        "name": "KIM HADLEY SMITH",
        "medium": "Assemblage",
        "secondaryMedium": "Drawing",
        "bio": "I love to create and merge images, ideas and objects that I find in the desert, combining items that, at first blush, might not seem to belong together, but when reimagined, create a natural harmony.  All of my work is inspired by the colors, the creatures  and the overlooked treasures of the High Desert.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hadley_smith_kim_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hadley_smith_kim_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hadley_smith_kim_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-hadley_wendy",
        "name": "WENDY HADLEY",
        "email": "wendyhadley@me.com",
        "website": "wendyhadley.com",
        "instagram": "@myscenicbyway",
        "medium": "Mixed Media",
        "secondaryMedium": "Printmaking",
        "bio": "Working across acrylic, watercolor, photography, monoprinting, and mixed media, I create abstract work rooted in joy, relaxation, and flow, inspired by color, form, and the magic of our desert landscape I've called home for over 15 years.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hadley_wendy_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hadley_wendy_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hadley_wendy_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 109,
    "studioName": "FALOSSI STUDIO",
    "address": "6229 Hoot Owl Trl, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1401779,
    "lng": -116.4239484,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-falossi_david",
        "name": "FALOSSI STUDIO",
        "phone": "760-220-3994",
        "email": "falossi@falossistudios.com",
        "website": "Falossistudios.com",
        "instagram": "@Falossistudios     And @Joshua tree stone sculptor",
        "facebook": "Falossistudios",
        "medium": "Sculpture",
        "bio": "Here at Falossi studio we carve exotic stone and combine glass and metals to create our contemporary forms . Our sculpture has been inspired by the environment of our area and the Genesis of life and the human spirit .",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/falossi_david_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/falossi_david_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/falossi_david_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 110,
    "studioName": "MALVOYANTE Studio",
    "address": "6498 Pioneertown Rd, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1355764,
    "lng": -116.4699675,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-plochere_michelle",
        "name": "MALVOYANTE",
        "instagram": "@malvoyante",
        "medium": "Installation",
        "bio": "As a visually impaired artist and curator, their work is focused on installations that engage ideas around perception and misperception of space, movement, time, and reality itself. They privilege investigative and creative curiosity, foregrounding problems over solutions, opacity over the strictly retinal, and community over solitude.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/plochere_michelle_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/plochere_michelle_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/plochere_michelle_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 111,
    "studioName": "JOHN FLORES Studio",
    "address": "7063 Pawnee Ave, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1249191,
    "lng": -116.4409032,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-flores_john",
        "name": "JOHN FLORES",
        "email": "jafceramics@gmail.com",
        "website": "jafceramics.wixsite.com/website",
        "instagram": "@Ministry_of_mud",
        "medium": "Ceramics",
        "secondaryMedium": "Sculpture",
        "bio": "I love all things clay. I am a ceramic sculptor in Yucca Valley, practicing professionally for the past 7 years. I use traditional clay hand building techniques, combined with contemporary glazing applications. Come visit my fully functioning ceramic studio and walk through my magical cactus garden.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/flores_john_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/flores_john_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/flores_john_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 112,
    "studioName": "MARA VLASIC, VLASIC STUDIO",
    "address": "7456 Barberry Ave, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1169738,
    "lng": -116.4202754,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-vlasic_marie",
        "name": "MARA VLASIC, VLASIC STUDIO",
        "email": "maravlasic@vlasicstudio.com",
        "website": "VlasicStudio.com",
        "instagram": "@VlasicStudio",
        "facebook": "MarieVlasicArt",
        "medium": "Painting",
        "bio": "Figurative realism oil paintings.\nArtist's working studio will be open.\n\n\"In painting the human form, I am attempting to find the humanity, the soul, in my subject, and in myself. Each new subject is a fresh journey of discovery that fuels my work.\"\n\nPlease Note: Nudes will be displayed.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/vlasic_marie_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/vlasic_marie_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/vlasic_marie_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 113,
    "studioName": "NATALIE FROST Studio",
    "address": "7583 Barberry Ave, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1143516,
    "lng": -116.419654,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-frost_natalie",
        "name": "NATALIE FROST",
        "email": "njfrost@gmail.com",
        "website": "talijane.com",
        "instagram": "@tali_jane",
        "medium": "Collage",
        "secondaryMedium": "Painting",
        "bio": "My creativity is a state of play, curiosity, and freedom. Guided by color and shape, I invite viewers to step into abstract realms of joy and levity. The quiet spaciousness of the high desert is a potent seed, allowing my imagination to surface uninterrupted.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/frost_natalie_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/frost_natalie_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/frost_natalie_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 114,
    "studioName": "ABE TOSTADO Studio",
    "address": "7768 Valley Vista Ave, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1110717,
    "lng": -116.4137067,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-alvareztostado_abe",
        "name": "ABE TOSTADO",
        "phone": "562-240-3908",
        "email": "abealvareztostado@icloud.com",
        "website": "abetostado.com",
        "instagram": "@abetheartist",
        "facebook": "Abe Alvarez-Tostado",
        "medium": "Painting",
        "secondaryMedium": "Printmaking",
        "bio": "Abe Alvarez-Tostado's work blends comic-book roots, skateboard culture, and street art into bold, pop-cubist compositions. His paintings and murals feature fragmented faces, vivid color, and recurring all-seeing eye motifs, exploring human connection, observation, and everyday life through playful yet surreal, urban-inspired visual storytelling.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/alvareztostado_abe_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/alvareztostado_abe_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/alvareztostado_abe_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 115,
    "studioName": "JOHN GREENFIELD Studio",
    "address": "56790 Desert Gold Dr, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1009033,
    "lng": -116.4255984,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-greenfield_john",
        "name": "JOHN GREENFIELD",
        "phone": "760-899-2230",
        "facebook": "John Greenfield",
        "medium": "Ceramics",
        "bio": "Ceramic Sculpture inspired by geologic forms and processes. I also make tiles and stepping stones.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/greenfield_john_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/greenfield_john_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/greenfield_john_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 116,
    "studioName": "THE LITTLE FRIENDS OF PRINTMAKING Studio",
    "address": "56886 Ivanhoe Dr, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.0960011,
    "lng": -116.4231665,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-of_printmaking__the_little_friends",
        "name": "THE LITTLE FRIENDS OF PRINTMAKING",
        "email": "info@thelittlefriendsofprintmaking.com",
        "website": "thelittlefriendsofprintmaking.com/",
        "instagram": "@littlefriendsof",
        "medium": "Printmaking",
        "secondaryMedium": "Illustration",
        "bio": "James & Melissa Buchanan are The Little Friends of Printmaking, a pair of award-winning illustrators and printmakers. We create colorful hand-made screenprints in our sunny studio in Yucca Valley. Inspired by cute cats, cartoons, Snoopy, mid-century illustration, and fluorescent inks. Check out our prints and tour our studio!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/of_printmaking__the_little_friends_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/of_printmaking__the_little_friends_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/of_printmaking__the_little_friends_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 117,
    "studioName": "KAT JOHNSON Studio",
    "address": "8658 Amador Ave, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.094997,
    "lng": -116.4289563,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-johnson_kat",
        "name": "KAT JOHNSON",
        "phone": "323-377-8729",
        "email": "katj.art13@gmail.com",
        "instagram": "@katjohnsonart",
        "medium": "Assemblage",
        "bio": "Lyrical, mysterious...ageless, magical...dreamlike, unearthly.... Though they transcend place and time, i like to think my poetry-in-a-box assemblages reflect many of the qualities of our beloved California high desert.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/johnson_kat_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/johnson_kat_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/johnson_kat_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 118,
    "studioName": "DIANA LEVIN Studio",
    "address": "7549 Borrego Trl, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1147602,
    "lng": -116.4384926,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-levin_diana",
        "name": "DIANA LEVIN",
        "phone": "818-370-4288",
        "email": "wickeddiana@gmail.com",
        "website": "ghoulishbunnystudios.com/",
        "instagram": "@ghoulishbunnystudios",
        "facebook": "ghoulishbunnystudios",
        "medium": "Painting",
        "secondaryMedium": "Drawing",
        "bio": "I'm an independent artist working with traditional mediums such as watercolors and ink. I describe my work as dark fantasy, blending my many inspirations from horror, sci-fi, nature, and the macabre. I have original paintings available for sale, along with prints, books, and small merch items.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/levin_diana_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/levin_diana_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/levin_diana_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 119,
    "studioName": "DIANA SHAY DIEHL Studio",
    "address": "8444 Bannock Trl, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.0986726,
    "lng": -116.4429215,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-shay_diehl_diana",
        "name": "DIANA SHAY DIEHL",
        "phone": "760-219-6219",
        "email": "info@dianashaydiehl.com",
        "website": "dianashaydiehl.com/",
        "instagram": "@mojavelight.studio",
        "facebook": "MojaveLightStudio",
        "medium": "Encaustic",
        "secondaryMedium": "Mixed Media",
        "bio": "Diana Shay Diehl's penchant for experimental photosensitive chemistry, natural pigments, and beeswax help her to express her experiences in the natural landscapes of the western US. Her specialties are using beeswax over hand-painted works. Diana also teaches her methods from her working studios in the high and low deserts.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/shay_diehl_diana_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/shay_diehl_diana_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/shay_diehl_diana_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      },
      {
        "id": "artist-ivanushka_paul",
        "name": "PAUL IVANUSHKA",
        "email": "pivanushka@gmail.com",
        "website": "paulivanushkaphotography.com/",
        "medium": "Photography",
        "secondaryMedium": "Printmaking",
        "bio": "Paul  specializes in alternative, historical photographic techniques. His handcrafted prints reveal unique textures and tonalities, reflecting his dedication to process and craft. HIs work celebrates imperfection and individuality, highlighting the tactile beauty found in layered, hand-made photographic art.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/ivanushka_paul_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/ivanushka_paul_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/ivanushka_paul_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 120,
    "studioName": "DANIEL HOGAN Studio",
    "address": "8372 Elk Trl, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.0998481,
    "lng": -116.4472285,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-hogan_daniel",
        "name": "DANIEL HOGAN",
        "email": "daniel@danielhogan.com",
        "website": "danielhogan.com",
        "instagram": "@danielhoganartist",
        "facebook": "danielinthedesert",
        "medium": "Glass",
        "secondaryMedium": "Mixed Media",
        "bio": "In my art I use a combination of antique stained glass and long forgotten glass objects from thrift stores, garage sales, and abandoned buildings. Come tour my studio where I give new life to these beautiful glass treasures!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hogan_daniel_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hogan_daniel_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hogan_daniel_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-shakti_jen",
        "name": "JEN SHAKTI",
        "email": "jenshakti@yahoo.com",
        "website": "jenshakti.com",
        "instagram": "@jenshakti",
        "medium": "Painting",
        "bio": "I paint whimsical stories about plants and animals in the desert. Quiet, mystical interactions most humans never get to witness. Realism helps these moments feel believable—like you've stumbled into a secret world hiding in plain sight. Slow down, look closely, and discover the magic of the desert landscape.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/shakti_jen_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/shakti_jen_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/shakti_jen_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 121,
    "studioName": "CESCA SPOONHOWER Studio",
    "address": "55587 El Dorado Dr, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.0993604,
    "lng": -116.4516636,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-spoonhower_cesca",
        "name": "CESCA SPOONHOWER",
        "phone": "760-422-7143",
        "email": "Fspoonhower@gmail.com",
        "facebook": "Cesca Spoonhower",
        "medium": "Painting",
        "bio": "Studied Classical art but fell in love with Abstract expressionism. I come from an art family.  Born and raised in San Diego but learned to love the desert. My art is expensive, it's about how it makes me and the viewer feel.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/spoonhower_cesca_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/spoonhower_cesca_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/spoonhower_cesca_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-mendoza_marta",
        "name": "MARTA MENDOZA",
        "email": "mmend36937@yahoo.com",
        "instagram": "@MartaMendoza",
        "facebook": "Marta Mendoza",
        "medium": "Other",
        "secondaryMedium": "Assemblage",
        "bio": "I am an Epoxy Resin artist using the beauty of the desert to inspire my work. I use the colors to create designs that enhance my wall art and sculpture items.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mendoza_marta_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mendoza_marta_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mendoza_marta_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 122,
    "studioName": "LILI TODD Studio",
    "address": "55654 Highland Trl, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1060731,
    "lng": -116.4499755,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-todd_lili",
        "name": "LILI TODD",
        "email": "lilitoddart@gmail.com",
        "website": "lilitodd.com/",
        "instagram": "@lilitoddart",
        "medium": "Illustration",
        "secondaryMedium": "Ceramics",
        "bio": "It's a family affair! Family of artists in our studio garage selling prints, ceramics, paintings, zines, stickers, and more. Come visit our beautiful property with a 1950's home, lush landscape, and meet our gaggle of chickens.  \n\nLili Todd makes ceramics and illustrated goods with a folky charm.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/todd_lili_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/todd_lili_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/todd_lili_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      },
      {
        "id": "artist-todd_mark",
        "name": "MARK TODD",
        "email": "marktoddart@gmail.com",
        "website": "funchicken.bigcartel.com",
        "instagram": "@mark_todd",
        "medium": "Painting",
        "secondaryMedium": "Illustration",
        "bio": "Like many kids raised in the seventies, Mark was influenced at an early age by Star Wars and comic books. His career began in New York, working with clients such as The New Yorker and Rolling Stone. His work involves humor where zine culture, eighties nostalgia, and absurdity collide.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/todd_mark_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/todd_mark_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/todd_mark_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 123,
    "studioName": "FRED NESS Studio",
    "address": "55625 Pueblo Trl, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1154332,
    "lng": -116.4507582,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-ness_fred",
        "name": "FRED NESS",
        "phone": "714-504-4832",
        "email": "fredness1946@gmail.com",
        "medium": "Drawing",
        "secondaryMedium": "Woodwork",
        "bio": "I've been a local artist since 1988, creating drawings and handcrafted wood pieces in a variety of mediums. I love exploring new materials and bringing ideas to life through ART. Stop by and see my work in person!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/ness_fred_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/ness_fred_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/ness_fred_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-martelli_haru",
        "name": "HARU MARTELLI",
        "phone": "760-898-1198",
        "email": "harumartelli@gmail.com",
        "instagram": "@harumartelli",
        "medium": "Painting",
        "secondaryMedium": "Ceramics",
        "bio": "Art, for me, is an adventure-- a playful exploration of lines, forms, and hues that captures the spirit of the desert.  I enjoy pushing boundaries and experimenting with different mediums to create pieces that feel both unique and familiar.  Stop by, look around, and experience the work up close.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/martelli_haru_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/martelli_haru_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/martelli_haru_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-peterson_janna_sage",
        "name": "JANNA SAGE PETERSON",
        "phone": "908-514-5665",
        "email": "jspyoga@gmail.com",
        "medium": "Painting",
        "secondaryMedium": "Drawing",
        "bio": "Night Time Landscapes, Big and Small\nNight time imagery has always intrigued me.  The journey began many moons ago with large, bold charcoal drawings.  After a long hiatus, the journey begins anew, this time emerging in small watercolor/gouache paintings, ink brush drawings, and a few collages.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/peterson_janna_sage_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/peterson_janna_sage_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/peterson_janna_sage_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 124,
    "studioName": "DELOS VAN EARL Studio",
    "address": "55666-A Yucca Trl, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1210766,
    "lng": -116.4495983,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-vanearl_delos",
        "name": "DELOS VAN EARL",
        "phone": "760-333-2271",
        "email": "teann.delosvanearlstudios@gmail.com",
        "website": "delosvanearlstudios.com",
        "instagram": "@delosvanearl",
        "facebook": "Deloa Van Earl",
        "medium": "Sculpture",
        "secondaryMedium": "Painting",
        "bio": "Contemporary art focusing on material exploration and personal narrative, creating an enduring dialogue between art and life, making it a compelling study for anyone interested in contemporary art practices",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/vanearl_delos_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/vanearl_delos_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/vanearl_delos_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-cox_teann",
        "name": "TEANN MARIE",
        "phone": "916-300-8000",
        "email": "teann.delosvanearlstudios@gmail.com",
        "instagram": "@Teann_Marie",
        "medium": "Painting",
        "bio": "My passion for artistic expression has been constant throughout my life, shaping how I view the world. After relocating to the high desert, my art began to reflect my immediate surroundings. Inspired by the landscape, I focused on elements that bring me joy and contribute to my sense of well-being.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/cox_teann_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/cox_teann_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/cox_teann_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 125,
    "studioName": "ILONA MERCIER - ALCOHOL INK ARTIST Studio",
    "address": "55050 Baker Trl, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.0960615,
    "lng": -116.4625429,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From Hwy 62 in Yucca Valley \nS on Kickapoo Tr 1.2 miles\nR on Hoopa Rd 0.3 miles\nL on Mayan Tr 0.2 miles\nFollow signs to studios",
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-mercier_ilona",
        "name": "ILONA MERCIER - ALCOHOL INK ARTIST",
        "phone": "760-218-1939",
        "website": "ilonamercierink.com",
        "instagram": "@ilonamercier_ink",
        "facebook": "ArtwithInkbyLona",
        "medium": "Ink",
        "bio": "I am excited to share my beautiful new art studios overlooking Yucca Valley and lots of new art this year. I will have paintings on tile, metals, glass, hand painted jewelry {Niobium ear wires) and much more! Unique handmade framing too. Come see us, it might be your favorite stop!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mercier_ilona_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mercier_ilona_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/mercier_ilona_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-marlowe_michele",
        "name": "MICHELE MARLOWE, AKA M4ART",
        "phone": "760-895-0138",
        "website": "ArtbyM4.com",
        "medium": "Other",
        "secondaryMedium": "Other",
        "bio": "Please visit us in studio during the 2026 Art Tours, where we feature both alcohol ink and watercolor paintings, also applied to mugs, greeting cards, jewelry,  and other fun gifts. The trip up the country dirt road is well worth the happy experience. See you soon!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/marlowe_michele_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/marlowe_michele_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/marlowe_michele_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 126,
    "studioName": "JASON GRAVES Studio",
    "address": "8577 Greathouse Ln, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.0965825,
    "lng": -116.4665044,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-graves_jason",
        "name": "JASON GRAVES",
        "phone": "310-980-4570",
        "email": "jason@jasongravesart.com",
        "website": "jasongravesart.com",
        "instagram": "@jgravesart",
        "medium": "Painting",
        "secondaryMedium": "Drawing",
        "bio": "In the desert, stillness becomes a trance.  My paintings hold that space — totemic forms rising as focal points for attention.  Geometry steadies the eye while color carries heat and memory, guiding the viewer inward toward a quiet, contemplative state.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/graves_jason_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/graves_jason_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/graves_jason_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 127,
    "studioName": "CLARK HUNTER- ARCANE LABORATORIES AND DEVICES Studio",
    "address": "55109 Mountain View Trl, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1064876,
    "lng": -116.4615257,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-hunter_clark",
        "name": "CLARK HUNTER- ARCANE LABORATORIES AND DEVICES",
        "phone": "323-459-0603",
        "email": "werdoomed@aol.com",
        "website": "ClarkHunter.com",
        "instagram": "@ClarkHunterPD",
        "medium": "Installation",
        "secondaryMedium": "Mixed Media",
        "bio": "The art and science of Irreproducible results",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hunter_clark_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hunter_clark_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/hunter_clark_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-case_clair",
        "name": "CLAIR CASE",
        "email": "claircase@gmail.com",
        "website": "claircase.com",
        "instagram": "@claircase",
        "medium": "Fiber arts/textiles",
        "secondaryMedium": "Mixed Media",
        "bio": "Where thread and paper meet — come see the magic!  I'll be showing at a new studio this year, be sure to find our gang of misfits!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/case_clair_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/case_clair_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/case_clair_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-rimada_melisa",
        "name": "MELISA RIMADA",
        "email": "Mtwentyfour624@gmail.com",
        "instagram": "@diydreamerstudio",
        "medium": "Fiber arts/textiles",
        "secondaryMedium": "Mixed Media",
        "bio": "Mexican fiber & textile artist. I use macrame rope to create desert inspired landscapes. I also like reuse and repurpose rusty desert objects, and desert driftwood and incorporate into my weavings along with beads and crystals.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/rimada_melisa_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/rimada_melisa_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/rimada_melisa_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-eiden_sarah",
        "name": "MOONLIGHT MIKATA",
        "email": "Moonlightmikata@gmail.com",
        "instagram": "@moonlightmikata",
        "medium": "Ceramics",
        "bio": "Sarah Kei of moonlight mikata creates mingei inspired ceramics, grounded in use and a subtle sense of play. These pieces are meant to be lived with ー steady, expressive, and human ーoffering a quiet anchor in the midst of it all.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/eiden_sarah_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/eiden_sarah_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/eiden_sarah_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-eiden_susan_hunter",
        "name": "SUSAN HUNTER EIDEN",
        "email": "Susanhunrereiden@gmail.com",
        "instagram": "@Susanhunter2732",
        "medium": "Glass",
        "bio": "Stained glass doesn't belong on a wall. It needs air and light and the surrounding environment to complete it. Because of this it is ever changing. Ephemeral.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/eiden_susan_hunter_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/eiden_susan_hunter_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/eiden_susan_hunter_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 128,
    "studioName": "CRAIG BARNES  FINE ART Studio",
    "address": "54911 Mountain View Trl, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1081352,
    "lng": -116.4663026,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-barnes_craig",
        "name": "CRAIG BARNES  FINE ART",
        "phone": "760-410-4198",
        "email": "craigbarnefineart@gmail.com",
        "website": "artworkarchive.com/profile/craig-barnes",
        "instagram": "@craigbarnesfineart",
        "facebook": "craigbarnesart",
        "medium": "Painting",
        "bio": "Craig Barnes' mosaic-inspired paintings explore the shifting dialogue between realism and abstraction. Through layered texture and dynamic color, he opens fields of infinite perspective. Fine art prints and cards also available. Visit Craig's studio to experience the depth and energy of his creative process firsthand.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/barnes_craig_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/barnes_craig_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/barnes_craig_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-barnes_marybel",
        "name": "MADDIE B'S BEADS",
        "email": "madiebarnes@msn.com",
        "instagram": "@twelvesisters12",
        "medium": "Jewelry",
        "bio": "I create handcrafted beadwork that blends color, texture, and intention—each piece meant to be worn as art. Visit my debut at the Hwy 62 Art Tours, meet me in person, and find the bracelet of necklace that speaks to you.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/barnes_marybel_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/barnes_marybel_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/barnes_marybel_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 129,
    "studioName": "TAMI ROLEFF Studio",
    "address": "7454 Cardillo Trl, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1168641,
    "lng": -116.4730097,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-roleff_tami",
        "name": "TAMI ROLEFF",
        "email": "Orchids59@yahoo.com",
        "website": "pixels.com/profiles/tamiroleff",
        "medium": "Photography",
        "bio": "The desert is my home and inspiration. Through my camera, I capture the quiet beauty of Joshua trees, wildlife, and forgotten places. Drawn to night photography, I reveal the Mojave's magic under starlit skies, inviting others to see this rugged landscape as vibrant, alive, and full of wonder.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/roleff_tami_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/roleff_tami_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/roleff_tami_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-clough_debbie",
        "name": "DESERT JEWELRY CREATIONS",
        "phone": "760-401-9811",
        "email": "info@desertjewelrycreations.com",
        "website": "REUSE",
        "instagram": "forgotten",
        "facebook": "RECYCLE. I create one-of-a-kind handcrafted jewelry designs using a variety of metals, materials, and motorcycle parts while incorporating natural gemstones, patinas and flame painting. I present beautiful unique jewelry items with the unused",
        "medium": "Jewelry",
        "secondaryMedium": "Mixed Media",
        "bio": "REPURPOSE",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/clough_debbie_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/clough_debbie_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/clough_debbie_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 130,
    "studioName": "SANDRA JONES CAMPBELL Studio",
    "address": "7545 Fairway Dr, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1152712,
    "lng": -116.4748807,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-jones_campbell_sandra",
        "name": "SANDRA JONES CAMPBELL",
        "phone": "949-310-0074",
        "email": "sandra@sandrajonescampbell.com",
        "website": "@sandrajones campbell",
        "facebook": "sandra.j.campbell.5",
        "medium": "Painting",
        "secondaryMedium": "Mixed Media",
        "bio": "New to the Hwy 62 Tour for the 2nd time. Been active in the Gallery Art world for over 45 years.  My paintings are 'Social Scenes\" with reference to the German Expressionists (plus a dash of MAD Magazine).  Featuring Acrylic originals and Giclee's prints on canvas.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/jones_campbell_sandra_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/jones_campbell_sandra_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/jones_campbell_sandra_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "2nd and 3rd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 131,
    "studioName": "GILLIAN KELLER Studio",
    "address": "54461 29 Palms Hwy, Yucca Valley, CA",
    "town": "Yucca Valley",
    "zipCode": "92252",
    "lat": 34.1085451,
    "lng": -116.4791406,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in Yucca Valley\nS on Camino Del Cielo Tr 0.1 miles\nR on Onaga Tr 0.2 miles\nL on Pinion Dr 0.1 miles\nR on Navajo Tr 0.5 miles (becomes dirt road)\nStudio is at the end, inside fenced area",
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-keller_gillian",
        "name": "GILLIAN KELLER",
        "phone": "415-297-7456",
        "email": "gilliankeller05@gmail.com",
        "website": "enlightenmentbarbie.com",
        "instagram": "@enlightenmentbarbie",
        "facebook": "GillianKellerArtist.EnlightenmentBarbie",
        "medium": "Mixed Media",
        "secondaryMedium": "Digital Art",
        "bio": "Hi, I'm Enlightenment Barbie.  The Soul's School of Hard Knocks has served me wisdom to share.  Messages from the ethers have been obsessively translated into my Eternal Ephemeral Tarot deck - each card is a stepping stone along the spiritual awakening journey.  Come re-discover your magic and awaken the mystery within!",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/keller_gillian_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/keller_gillian_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/keller_gillian_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-bone_alea",
        "name": "ALEA BONE",
        "phone": "503-470-9551",
        "email": "aleabone@gmail.com",
        "instagram": "@AleaBone",
        "facebook": "Bonewerx",
        "medium": "Mixed Media",
        "secondaryMedium": "Assemblage",
        "bio": "Folk Art inspired assemblages composed of\neveryday objects and discarded materials\ntransformed in colorful, unexpected ways.\nTake a walk down memory lane as you discover\nvintage hints of the past reimagined.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bone_alea_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bone_alea_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bone_alea_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 132,
    "studioName": "EMILIA LOUISA FRASHER Studio",
    "address": "9157 Ole St, Morongo Valley, CA",
    "town": "Morongo Valley",
    "zipCode": "92252",
    "lat": 34.085371,
    "lng": -116.5172439,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in Morongo Valley\n  S on Ole St \n  STAY TO RIGHT AT SPLIT \n  Studio is 6 houses down on left side\n  Do NOT take Rose Eden Dr",
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-frasher_emilia_luisa",
        "name": "EMILIA LOUISA FRASHER",
        "phone": "760-218-0539",
        "email": "emilialou@roadrunner.com",
        "instagram": "@emiliafrasher",
        "facebook": "emilia frasher",
        "medium": "Jewelry",
        "bio": "Jewelry components- Czech glass beads, gemstones, leather, and seashells. These include Coral, Turquoise, Lapis, Amethyst and Picture Jasper. Also Cabochons, Water Buffalo Bone, Nautiluses, and Swarski Chrystals as centerpieces. My work has been bought to hang on altars, as often as wearable jewelry. There will also be bracelets.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/frasher_emilia_luisa_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/frasher_emilia_luisa_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/frasher_emilia_luisa_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-gaunt_jane",
        "name": "JANE GAUNT",
        "phone": "760-365-4964",
        "email": "janegaunt@yahoo.com",
        "facebook": "Jane Gaunt",
        "medium": "Mixed Media",
        "secondaryMedium": "Painting",
        "bio": "I am primarily a water colorist who is not blind to the fun of other mediums. Watercolor plays well with so many other amazing mediums and it's a shame to make it play alone. I love to experiment  and it keeps my art practice challenging and fresh.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/gaunt_jane_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/gaunt_jane_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/gaunt_jane_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 133,
    "studioName": "LOISA BARTLETT Studio",
    "address": "8686 Little Morongo Rd, Morongo Valley, CA",
    "town": "Morongo Valley",
    "zipCode": "92252",
    "lat": 34.0947757,
    "lng": -116.5249809,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-bartlett_loisa",
        "name": "LOISA BARTLETT",
        "phone": "760-218-2474",
        "instagram": "@BOAFCREATIONS",
        "medium": "Fiber arts/textiles",
        "secondaryMedium": "Mixed Media",
        "bio": "This natural beautiful habitat I call home for 25 years, inspires me daily. I  make my best effort to express how much the Spirit of the desert speaks to my heart through fabric, textiles and mixed media. I am always willing to push my creativity to the next level.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bartlett_loisa_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bartlett_loisa_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bartlett_loisa_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-bartlett_dan",
        "name": "DAN BARTLETT",
        "phone": "760-401-9997",
        "email": "danbartlett@ymail.com",
        "instagram": "@danbartlettphotos",
        "facebook": "danbartlettstudio",
        "medium": "Sculpture",
        "secondaryMedium": "Photography",
        "bio": "With ingenuity and a lifetime of electrical /mechanical experience, Dan bartlett fuses vintage machinery and everyday objects into one of a kind illuminated sculptures.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bartlett_dan_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bartlett_dan_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/bartlett_dan_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 134,
    "studioName": "SNAKE JAGGER Studio",
    "address": "52031 Breezway, Morongo Valley, CA",
    "town": "Morongo Valley",
    "zipCode": "92252",
    "lat": 34.0934557,
    "lng": -116.5304523,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in Morongo Valley\n  N on Desert Willow Trl 0.7 miles\n  L on Breezeway 0.1 miles\n  Studio near the driveway with the white van",
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-jagger_snake",
        "name": "SNAKE JAGGER",
        "phone": "760-641-6342",
        "email": "Snakejagger@gmail.com",
        "website": "SnakeJagger.com",
        "instagram": "@snakejagger",
        "facebook": "SnakeJagger",
        "medium": "Painting",
        "secondaryMedium": "Mixed Media",
        "bio": "Snake Jagger's paintings are a blend of fact and fantasy. He begins with what he knows best - the California Desert. Snake paints in a style he calls whimsical surrealism, his artwork is meant to entertain, but also to inspire thoughts of preserving our home planet.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/jagger_snake_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/jagger_snake_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/jagger_snake_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 135,
    "studioName": "SHARON A. DAVIS /EARTH HOUSE STUDIOS",
    "address": "9102 Lanning Ln, Morongo Valley, CA",
    "town": "Morongo Valley",
    "zipCode": "92252",
    "lat": 34.0864761,
    "lng": -116.541992,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in Morongo Valley\nN on Lanning Ln 0.7 miles\nLanning Ln starts in Country Market parking lot \nDrive to last house on left",
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-davis_sharon",
        "name": "SHARON A. DAVIS /EARTH HOUSE STUDIOS",
        "phone": "703-508-7007",
        "email": "Earthhousestudios@gmail.com",
        "instagram": "@earthhousestudios",
        "facebook": "earthhousestudio",
        "medium": "Painting",
        "secondaryMedium": "Assemblage",
        "bio": "I have been painting since I was a teenager  and have explored  many different mediums,  but one thing my creations have in common is brilliant colors. I'm inspired by the mystical  desert that surrounds me. My paintings, described as whimsical realism caress the soul with happiness.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/davis_sharon_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/davis_sharon_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/davis_sharon_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-king_jessica",
        "name": "JESSICA KING",
        "phone": "909-379-9519",
        "email": "jessica.king.fwd@gmail.com",
        "website": "jessica-fwd.wixsite.com/mysite",
        "instagram": "@faerywingdesigns",
        "medium": "Painting",
        "secondaryMedium": "Assemblage",
        "bio": "My paintings explore blind contour and colorful folk themes; The space between the single line and the brush strokes reveal truth. Cyanotypes expose control and chaos in art.  My assemblage explores pop culture and politics through playful and obscure items. I'll be offering quick 5 min blind contour sketches",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/king_jessica_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/king_jessica_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/king_jessica_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-holloway_susan",
        "name": "SUSAN HOLLOWAY DESIGNS",
        "phone": "760-821-3190",
        "email": "sueholloway1@roadrunner.com",
        "facebook": "Susan Holloway Designs",
        "medium": "Jewelry",
        "bio": "This will be my 10th year exhibiting on the Hwy 62 Art Tours with our host Sharon Davis.  My passion is creating beautiful objects,  combining semi-precious stones, glass seed beads and crystals. I'd love to share my passions with you.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/holloway_susan_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/holloway_susan_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/holloway_susan_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 136,
    "studioName": "MARTIN DURAZO Studio",
    "address": "9755 Lanning Ln, Morongo Valley, CA",
    "town": "Morongo Valley",
    "zipCode": "92252",
    "lat": 34.0748021,
    "lng": -116.5414435,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-durazo_martin",
        "name": "MARTIN DURAZO",
        "email": "chavabros@hotmail.com",
        "instagram": "@mdluxx",
        "medium": "Painting",
        "secondaryMedium": "Ceramics",
        "bio": "The art of Martin Durazo is born from the vibrant, chaotic, and often-overlooked subcultures of his native Los Angeles. It is a practice deeply rooted in the rawness of the late 1980s punk scene, an ethos of rebellion and nonconformity that he has carried forward into a sophisticated multimedia language.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/durazo_martin_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/durazo_martin_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/durazo_martin_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 137,
    "studioName": "BILL LEIGH BREWER Studio",
    "address": "9622 Coyote St, Morongo Valley, CA",
    "town": "Morongo Valley",
    "zipCode": "92252",
    "lat": 34.0774526,
    "lng": -116.5620117,
    "gpsFriendly": true,
    "notGpsFriendly": true,
    "directions": "From HWY 62 in Morongo Valley\nN on Big Morongo Canyon Rd 0.9 miles\nR on Coyote Trail 0.1 miles\nStudio 1st driveway on the left",
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-brewer_bill_leigh",
        "name": "BILL LEIGH BREWER",
        "phone": "818-326-0006",
        "email": "bill@billybrewer.com",
        "website": "billybrewer.com",
        "instagram": "@billleighbrewer",
        "facebook": "bill.leigh.brewer",
        "medium": "Photography",
        "bio": "Contemporary landscape photography. Emphasis on man-altered landscapes. Desert-centric.  Mojave-centric. Lots of night photography, including a series called \"High Beams\", where I add (or find) artificial light sources. These can be my car's headlights, strobes, flashlights, the lights of passing cars, nearby signage, or really anything.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/brewer_bill_leigh_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/brewer_bill_leigh_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/brewer_bill_leigh_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All three weekends"
      },
      {
        "id": "artist-brewer_wini",
        "name": "WINI BREWER | STONE COTTAGE STUDIO",
        "email": "wini@winibrewer.com",
        "website": "winibrewer.com",
        "instagram": "@winibrewer",
        "medium": "Painting",
        "secondaryMedium": "Mixed Media",
        "bio": "Post Modern Art in a vintage setting.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/brewer_wini_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/brewer_wini_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/brewer_wini_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "All three weekends"
      }
    ]
  },
  {
    "studioNumber": 138,
    "studioName": "JAMES LOSTLEN STUDIO",
    "address": "50587 Elm Street, Morongo Valley, CA",
    "town": "Morongo Valley",
    "zipCode": "92252",
    "lat": 34.0700542,
    "lng": -116.5616827,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-lostlen_james",
        "name": "JAMES LOSTLEN STUDIO",
        "email": "studio@jameslostlen.com",
        "website": "jameslostlen.com",
        "instagram": "@jameslostlen",
        "facebook": "james.lostlen",
        "medium": "Sculpture",
        "bio": "James Lostlen works with local stone, letting nature lead — treating each piece as a puzzle while embracing irregularities and natural weathering as part of the design. His intention is simple: to bring people closer to the natural world. Experience the unique working studio of a fourth-generation Morongo Valley resident.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/lostlen_james_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/lostlen_james_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/lostlen_james_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "Solo Artist — 1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 139,
    "studioName": "STEVEN WYBENGA Studio",
    "address": "48908 Palo Verde Rd, Morongo Valley, CA",
    "town": "Morongo Valley",
    "zipCode": "92252",
    "lat": 34.0616562,
    "lng": -116.5977215,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2"
    ],
    "artists": [
      {
        "id": "artist-wybenga_steven",
        "name": "STEVEN WYBENGA",
        "email": "st.wybenga@gmail.com",
        "website": "stevenwybenga.com",
        "medium": "Painting",
        "bio": "Steven Wybenga lives in Morongo Valley - immersed and surrounded by the natural beauty of the hi-desert.  He works full time as a registered nurse at a local hospice agency and paints daily inspired by the untouched splendor of the Mojave Desert",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/wybenga_steven_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/wybenga_steven_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/wybenga_steven_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      },
      {
        "id": "artist-allred_chloe",
        "name": "CHLOE ALLRED",
        "email": "allredchloe@gmail.com",
        "website": "allredchloe.com",
        "medium": "Painting",
        "secondaryMedium": "Printmaking",
        "bio": "Painter, printmaker, and tenured art professor at Copper Mountain College. My work is inspired by Surrealist influences, ancient myth, and the beauty of the Mojave.",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/allred_chloe_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/allred_chloe_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/allred_chloe_3.webp",
        "isHost": false,
        "weekendsShowingRaw": "1st and 2nd Weekends Only"
      }
    ]
  },
  {
    "studioNumber": 140,
    "studioName": "CATHERINE RUANE Studio",
    "address": "49075 Paradise Ave, Morongo Valley, CA",
    "town": "Morongo Valley",
    "zipCode": "92252",
    "lat": 34.0455075,
    "lng": -116.5944758,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-ruane_catherine",
        "name": "CATHERINE RUANE",
        "phone": "760-680-1710",
        "email": "clruane2@gmail.com",
        "website": "catherineruane.com",
        "instagram": "@catherineruaneart",
        "facebook": "catherineruaneart",
        "medium": "Painting",
        "secondaryMedium": "Drawing",
        "bio": "\"I draw detailed images of plants to stand as a metaphor for the challenges and joys of living a full life.\"",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/ruane_catherine_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/ruane_catherine_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/ruane_catherine_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  },
  {
    "studioNumber": 141,
    "studioName": "SPENCER ANDREW COLLINS Studio",
    "address": "49247 Matzene Dr, Morongo Valley, CA",
    "town": "Morongo Valley",
    "zipCode": "92252",
    "lat": 34.0428853,
    "lng": -116.5909039,
    "gpsFriendly": true,
    "notGpsFriendly": false,
    "weekends": [
      "Weekend 1",
      "Weekend 2",
      "Weekend 3"
    ],
    "artists": [
      {
        "id": "artist-collins_spencer",
        "name": "SPENCER ANDREW COLLINS",
        "phone": "760-485-2276",
        "medium": "Painting",
        "secondaryMedium": "Pastel",
        "bio": "Welcome to my home art studio and private  Garden, I want to everyone to come and see how my process is from stretching the canvas to the end result when it's hung in my gallery Spencer's fine Arts .",
        "imageUrl": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/collins_spencer_1.webp",
        "imageUrl2": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/collins_spencer_2.webp",
        "imageUrl3": "https://raw.githubusercontent.com/dylanhenson/hwy-62-art-tour-images/main/collins_spencer_3.webp",
        "isHost": true,
        "weekendsShowingRaw": "All Three Weekends"
      }
    ]
  }
];
