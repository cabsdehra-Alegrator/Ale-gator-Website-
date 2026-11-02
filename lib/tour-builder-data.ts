export type AttractionCategory =
  | "nature"
  | "heritage"
  | "culture"
  | "adventure"
  | "spiritual"
  | "family"
  | "viewpoint";

export type VerificationStatus =
  | "needs_review"
  | "editorially_reviewed"
  | "source_verified";

export type AttractionSeed = {
  id: string;
  name: string;
  category: AttractionCategory;
  summary: string;
  suggestedVisitMinutes: number;
  verificationStatus: VerificationStatus;
};

export type CitySeed = {
  id: string;
  slug: string;
  name: string;
  stateName: string;
  regionName: string;
  summary: string;
  suggestedNights: number;
  themes: string[];
  attractions: AttractionSeed[];
  verificationStatus: VerificationStatus;
};

export type RouteConnectionSeed = {
  fromCityId: string;
  toCityId: string;
  connectionType: "common_corridor" | "nearby_option" | "interstate";
  distanceKm: number | null;
  driveMinutesMin: number | null;
  driveMinutesMax: number | null;
  verificationStatus: VerificationStatus;
  planningNote: string;
};

export type TourStyle = "Relaxed" | "Balanced" | "Sightseeing focused";
export type TourInterest =
  | "Nature"
  | "Heritage"
  | "Culture"
  | "Adventure"
  | "Spiritual"
  | "Family";

export const TOUR_STYLES: TourStyle[] = [
  "Relaxed",
  "Balanced",
  "Sightseeing focused",
];

export const TOUR_INTERESTS: TourInterest[] = [
  "Nature",
  "Heritage",
  "Culture",
  "Adventure",
  "Spiritual",
  "Family",
];

/**
 * Starter editorial catalogue for the Tour Builder interface.
 * This is deliberately not a claim of operating coverage, partner availability,
 * live access, opening hours, route distance or current road conditions.
 * Review each record and attach authoritative source references before publishing.
 */
export const CITY_SEEDS: CitySeed[] = [
  {
    id: "dehradun",
    slug: "dehradun",
    name: "Dehradun",
    stateName: "Uttarakhand",
    regionName: "Garhwal",
    summary: "A useful gateway for journeys towards Mussoorie, Rishikesh and the Garhwal region.",
    suggestedNights: 1,
    themes: ["Nature", "Culture", "Spiritual", "Family"],
    verificationStatus: "needs_review",
    attractions: [
      { id: "robbers-cave", name: "Robber's Cave", category: "nature", summary: "A river cave setting on the outskirts of the city.", suggestedVisitMinutes: 90, verificationStatus: "needs_review" },
      { id: "sahastradhara", name: "Sahastradhara", category: "nature", summary: "A well-known spring and waterfall area.", suggestedVisitMinutes: 90, verificationStatus: "needs_review" },
      { id: "mindrolling", name: "Mindrolling Monastery", category: "culture", summary: "A Buddhist monastery complex and cultural landmark.", suggestedVisitMinutes: 75, verificationStatus: "needs_review" },
      { id: "tapkeshwar", name: "Tapkeshwar Mahadev Temple", category: "spiritual", summary: "A cave temple associated with Lord Shiva.", suggestedVisitMinutes: 60, verificationStatus: "needs_review" },
    ],
  },
  {
    id: "mussoorie",
    slug: "mussoorie",
    name: "Mussoorie",
    stateName: "Uttarakhand",
    regionName: "Garhwal",
    summary: "A hill station with viewpoints, heritage lanes and nearby nature stops.",
    suggestedNights: 2,
    themes: ["Nature", "Heritage", "Family"],
    verificationStatus: "needs_review",
    attractions: [
      { id: "gun-hill", name: "Gun Hill", category: "viewpoint", summary: "A popular viewpoint above the Mall Road area.", suggestedVisitMinutes: 75, verificationStatus: "needs_review" },
      { id: "landour", name: "Landour", category: "heritage", summary: "A quieter hillside area known for its old-world character.", suggestedVisitMinutes: 120, verificationStatus: "needs_review" },
      { id: "lal-tibba", name: "Lal Tibba", category: "viewpoint", summary: "A high viewpoint in the Landour area.", suggestedVisitMinutes: 45, verificationStatus: "needs_review" },
      { id: "kempty-falls", name: "Kempty Falls", category: "nature", summary: "A waterfall attraction outside the central town area.", suggestedVisitMinutes: 120, verificationStatus: "needs_review" },
      { id: "company-garden", name: "Company Garden", category: "family", summary: "A landscaped garden and family-oriented stop.", suggestedVisitMinutes: 60, verificationStatus: "needs_review" },
    ],
  },
  {
    id: "dhanaulti",
    slug: "dhanaulti",
    name: "Dhanaulti",
    stateName: "Uttarakhand",
    regionName: "Garhwal",
    summary: "A quieter forest destination that can be considered as an additional hill stop.",
    suggestedNights: 1,
    themes: ["Nature", "Family"],
    verificationStatus: "needs_review",
    attractions: [
      { id: "eco-park", name: "Dhanaulti Eco Park", category: "nature", summary: "A forest park area with walking paths.", suggestedVisitMinutes: 90, verificationStatus: "needs_review" },
      { id: "surkanda-devi", name: "Surkanda Devi Temple", category: "spiritual", summary: "A hilltop temple reached by a trek or ropeway option, subject to current operations.", suggestedVisitMinutes: 150, verificationStatus: "needs_review" },
    ],
  },
  {
    id: "rishikesh",
    slug: "rishikesh",
    name: "Rishikesh",
    stateName: "Uttarakhand",
    regionName: "Garhwal",
    summary: "A Ganga-side destination known for riverfront areas, yoga, temples and outdoor activities.",
    suggestedNights: 2,
    themes: ["Nature", "Adventure", "Spiritual", "Culture"],
    verificationStatus: "needs_review",
    attractions: [
      { id: "ram-jhula", name: "Ram Jhula", category: "culture", summary: "A well-known pedestrian suspension bridge area.", suggestedVisitMinutes: 45, verificationStatus: "needs_review" },
      { id: "triveni-ghat", name: "Triveni Ghat", category: "spiritual", summary: "A prominent Ganga ghat and evening ritual location.", suggestedVisitMinutes: 75, verificationStatus: "needs_review" },
      { id: "neer-garh", name: "Neer Garh Waterfall", category: "nature", summary: "A waterfall reached by a walk from the road access point.", suggestedVisitMinutes: 120, verificationStatus: "needs_review" },
      { id: "beatles-ashram", name: "Beatles Ashram", category: "heritage", summary: "An historic ashram complex within the Rajaji landscape.", suggestedVisitMinutes: 90, verificationStatus: "needs_review" },
      { id: "river-rafting", name: "River Rafting", category: "adventure", summary: "Seasonal and operator-regulated activity; check current permissions and conditions.", suggestedVisitMinutes: 180, verificationStatus: "needs_review" },
    ],
  },
  {
    id: "haridwar",
    slug: "haridwar",
    name: "Haridwar",
    stateName: "Uttarakhand",
    regionName: "Garhwal",
    summary: "A major pilgrimage city with riverfront ghats and temple visits.",
    suggestedNights: 1,
    themes: ["Spiritual", "Culture", "Family"],
    verificationStatus: "needs_review",
    attractions: [
      { id: "har-ki-pauri", name: "Har Ki Pauri", category: "spiritual", summary: "A central Ganga ghat associated with the evening Ganga Aarti.", suggestedVisitMinutes: 90, verificationStatus: "needs_review" },
      { id: "mansa-devi", name: "Mansa Devi Temple", category: "spiritual", summary: "A hill temple with a ropeway option, subject to current operations.", suggestedVisitMinutes: 120, verificationStatus: "needs_review" },
      { id: "chandi-devi", name: "Chandi Devi Temple", category: "spiritual", summary: "A hill temple on the other side of the Ganga valley.", suggestedVisitMinutes: 120, verificationStatus: "needs_review" },
    ],
  },
  {
    id: "nainital",
    slug: "nainital",
    name: "Nainital",
    stateName: "Uttarakhand",
    regionName: "Kumaon",
    summary: "A Kumaon lake town and a base for selected nearby lake and hill destinations.",
    suggestedNights: 2,
    themes: ["Nature", "Family", "Adventure"],
    verificationStatus: "needs_review",
    attractions: [
      { id: "naini-lake", name: "Naini Lake", category: "nature", summary: "The central lake and waterfront area of Nainital.", suggestedVisitMinutes: 90, verificationStatus: "needs_review" },
      { id: "snow-view", name: "Snow View Point", category: "viewpoint", summary: "A viewpoint overlooking the surrounding Himalayan ranges when visibility permits.", suggestedVisitMinutes: 75, verificationStatus: "needs_review" },
      { id: "tiffin-top", name: "Tiffin Top", category: "viewpoint", summary: "A popular hilltop viewpoint reached by a walk or local arrangements.", suggestedVisitMinutes: 150, verificationStatus: "needs_review" },
      { id: "hanuman-garhi", name: "Hanuman Garhi", category: "spiritual", summary: "A hilltop temple and sunset-viewing area.", suggestedVisitMinutes: 60, verificationStatus: "needs_review" },
    ],
  },
  {
    id: "shimla",
    slug: "shimla",
    name: "Shimla",
    stateName: "Himachal Pradesh",
    regionName: "Himachal",
    summary: "A heritage hill city with pedestrian promenades, viewpoints and nearby excursions.",
    suggestedNights: 2,
    themes: ["Heritage", "Nature", "Family"],
    verificationStatus: "needs_review",
    attractions: [
      { id: "mall-road-shimla", name: "Mall Road", category: "culture", summary: "The city's central pedestrian promenade and shopping area.", suggestedVisitMinutes: 90, verificationStatus: "needs_review" },
      { id: "ridge-shimla", name: "The Ridge", category: "heritage", summary: "An open central space with views and historic buildings nearby.", suggestedVisitMinutes: 60, verificationStatus: "needs_review" },
      { id: "jakhoo", name: "Jakhoo Temple", category: "spiritual", summary: "A hilltop temple above the main town.", suggestedVisitMinutes: 120, verificationStatus: "needs_review" },
      { id: "kufri", name: "Kufri", category: "nature", summary: "A nearby hill destination with seasonal activities.", suggestedVisitMinutes: 150, verificationStatus: "needs_review" },
    ],
  },
  {
    id: "jaipur",
    slug: "jaipur",
    name: "Jaipur",
    stateName: "Rajasthan",
    regionName: "Rajasthan",
    summary: "A heritage city with forts, palaces, markets and established sightseeing circuits.",
    suggestedNights: 2,
    themes: ["Heritage", "Culture", "Family"],
    verificationStatus: "needs_review",
    attractions: [
      { id: "amber-fort", name: "Amber Fort", category: "heritage", summary: "A major hilltop fort complex north of the city.", suggestedVisitMinutes: 150, verificationStatus: "needs_review" },
      { id: "hawa-mahal", name: "Hawa Mahal", category: "heritage", summary: "An iconic palace facade in the historic city.", suggestedVisitMinutes: 60, verificationStatus: "needs_review" },
      { id: "city-palace-jaipur", name: "City Palace", category: "heritage", summary: "A palace and museum complex in the walled city.", suggestedVisitMinutes: 120, verificationStatus: "needs_review" },
      { id: "jantar-mantar-jaipur", name: "Jantar Mantar", category: "heritage", summary: "A historic astronomical observation site.", suggestedVisitMinutes: 75, verificationStatus: "needs_review" },
    ],
  },
];

/**
 * Route edges are intentionally unmeasured in this prototype.
 * Add distance/time only after checking a dependable road-routing source,
 * recording the source and the date checked.
 */
export const ROUTE_CONNECTIONS: RouteConnectionSeed[] = [
  { fromCityId: "dehradun", toCityId: "mussoorie", connectionType: "common_corridor", distanceKm: null, driveMinutesMin: null, driveMinutesMax: null, verificationStatus: "needs_review", planningNote: "Common Garhwal hill corridor; verify route timing and current access before use." },
  { fromCityId: "mussoorie", toCityId: "dhanaulti", connectionType: "nearby_option", distanceKm: null, driveMinutesMin: null, driveMinutesMax: null, verificationStatus: "needs_review", planningNote: "Possible combined hill itinerary; verify road conditions and realistic travel duration." },
  { fromCityId: "dehradun", toCityId: "rishikesh", connectionType: "common_corridor", distanceKm: null, driveMinutesMin: null, driveMinutesMax: null, verificationStatus: "needs_review", planningNote: "Common regional corridor; exact journey time depends on pickup point and traffic." },
  { fromCityId: "rishikesh", toCityId: "haridwar", connectionType: "common_corridor", distanceKm: null, driveMinutesMin: null, driveMinutesMax: null, verificationStatus: "needs_review", planningNote: "Common regional corridor; verify local traffic and access restrictions." },
];

/** Suggested durable database tables for the future persistence phase. */
export const FUTURE_DATA_ENTITIES = [
  "regions",
  "states",
  "cities",
  "attractions",
  "city_attractions",
  "routes",
  "route_sources",
  "nearby_places",
  "travel_guides",
  "tours",
  "tour_destinations",
  "tour_attractions",
  "tour_preferences",
  "itinerary_days",
  "itinerary_activities",
  "tour_shares",
  "cab_enquiries",
] as const;
