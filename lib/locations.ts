export type LocationCity = {
  slug: string;
  name: string;
  summary: string;
};

export type LocationState = {
  slug: string;
  name: string;
  kind: "State" | "Union Territory" | "Regional cluster";
  description: string;
  cities: LocationCity[];
};

export const LOCATION_STATES: LocationState[] = [
  {
    slug: "delhi-ncr",
    name: "Delhi NCR",
    kind: "Regional cluster",
    description: "A connected urban travel region for journeys between Delhi, Gurugram, Noida, Ghaziabad and Faridabad. Each enquiry is reviewed for the exact pickup point, destination and operating corridor.",
    cities: [
      { slug: "delhi", name: "Delhi", summary: "Plan an intercity, airport or outstation journey with Delhi as your pickup or drop location. Share the exact area and timing so the route can be reviewed." },
      { slug: "gurugram", name: "Gurugram", summary: "Use Gurugram as the start or end point for business, airport and outstation travel enquiries across the wider North India network." },
      { slug: "noida", name: "Noida", summary: "Explore one-way and return journey enquiries from Noida, with pickup sector, destination and vehicle needs checked before a quote is shared." },
      { slug: "ghaziabad", name: "Ghaziabad", summary: "Arrange a journey enquiry from Ghaziabad to cities and destinations across the North, subject to route and partner confirmation." },
      { slug: "faridabad", name: "Faridabad", summary: "Start a North India cab enquiry from Faridabad for intercity, airport or outstation travel with details reviewed by the operations team." }
    ]
  },
  {
    slug: "uttarakhand",
    name: "Uttarakhand",
    kind: "State",
    description: "A varied mountain and plains region with city, pilgrimage, leisure and hill-station travel corridors. Hill-route feasibility, local operating conditions and partner availability are checked before confirmation.",
    cities: [
      { slug: "dehradun", name: "Dehradun", summary: "Use Dehradun as a pickup or drop point for journeys into the Garhwal hills, the plains and other North Indian destinations. Share your full route for review." },
      { slug: "rishikesh", name: "Rishikesh", summary: "Plan a cab enquiry from Rishikesh for onward travel to nearby towns, hill destinations or intercity locations. Route timing and vehicle suitability are reviewed first." },
      { slug: "haridwar", name: "Haridwar", summary: "Start or finish a journey in Haridwar with an enquiry for city transfers, outstation travel or a multi-stop itinerary." },
      { slug: "mussoorie", name: "Mussoorie", summary: "For journeys involving Mussoorie, share the travel date, stay location and onward destination so hill-road access and availability can be checked." },
      { slug: "nainital", name: "Nainital", summary: "Use Nainital as a hill-station pickup or drop point. Your enquiry can include nearby Kumaon stops and a return plan for route review." },
      { slug: "haldwani", name: "Haldwani", summary: "Plan intercity and Kumaon-region travel enquiries from Haldwani, including onward connections to hill towns where route conditions permit." },
      { slug: "rudrapur", name: "Rudrapur", summary: "Share Rudrapur as your pickup or destination for a North India journey. The team checks the requested corridor and suitable local partner options." },
      { slug: "kashipur", name: "Kashipur", summary: "Create a journey enquiry from Kashipur for nearby regional travel or longer intercity routes, with the final route confirmed before booking." },
      { slug: "joshimath", name: "Joshimath", summary: "For a journey involving Joshimath, provide all stops and dates so mountain-road feasibility, timing and partner availability can be reviewed." },
      { slug: "auli", name: "Auli", summary: "Auli enquiries may involve mountain access and seasonal road conditions. Share your full itinerary and the operations team will review feasible arrangements." }
    ]
  },
  {
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    kind: "State",
    description: "A large intercity region connecting major urban centres, heritage destinations and transport corridors. Journey enquiries are assessed by route, date, vehicle category and partner supply.",
    cities: [
      { slug: "lucknow", name: "Lucknow", summary: "Plan intercity or outstation travel with Lucknow as your starting point or destination. Add any intermediate stops to help the team review the complete route." },
      { slug: "agra", name: "Agra", summary: "Use Agra for a pickup, drop or multi-stop itinerary enquiry connecting heritage visits with other North Indian cities." },
      { slug: "kanpur", name: "Kanpur", summary: "Share your Kanpur pickup or drop details for an intercity journey enquiry. Vehicle and route options are confirmed after an operations review." },
      { slug: "varanasi", name: "Varanasi", summary: "Plan an enquiry involving Varanasi with travel dates, reporting time and any additional stops included from the outset." },
      { slug: "prayagraj", name: "Prayagraj", summary: "Use Prayagraj as the start or end point for an outstation or intercity enquiry, subject to partner availability on the selected dates." },
      { slug: "meerut", name: "Meerut", summary: "Request a journey from Meerut to a North Indian destination by sharing the exact pickup point, date and passenger requirements." },
      { slug: "mathura", name: "Mathura", summary: "Plan a Mathura pickup or drop, including a multi-stop itinerary where needed. The route and operating details are checked before a quote is issued." },
      { slug: "bareilly", name: "Bareilly", summary: "Start a cab enquiry in Bareilly for regional or longer-distance travel with the requested destination and travel schedule clearly specified." }
    ]
  },
  {
    slug: "haryana",
    name: "Haryana",
    kind: "State",
    description: "A key North Indian road region linking industrial cities, business centres and interstate corridors. Pickup details and the requested destination help determine the right operating partner.",
    cities: [
      { slug: "karnal", name: "Karnal", summary: "Use Karnal as a pickup or drop point for journeys across Haryana and neighbouring states. Share the complete route for review." },
      { slug: "panipat", name: "Panipat", summary: "Create a Panipat journey enquiry for one-way, return or outstation travel, with timing and vehicle requirements checked by the team." },
      { slug: "ambala", name: "Ambala", summary: "Plan an intercity journey from Ambala by sharing your pickup location, destination and travel date." },
      { slug: "hisar", name: "Hisar", summary: "Request a cab journey involving Hisar for regional or interstate travel, subject to route feasibility and partner confirmation." },
      { slug: "rohtak", name: "Rohtak", summary: "Use Rohtak as your starting point or destination for a North India travel enquiry. Final arrangements are confirmed after review." },
      { slug: "sonipat", name: "Sonipat", summary: "Share your Sonipat pickup or drop point and onward destination to begin an intercity or outstation journey enquiry." },
      { slug: "kurukshetra", name: "Kurukshetra", summary: "Plan a journey to or from Kurukshetra, including onward travel across state borders, with the full itinerary provided for assessment." }
    ]
  },
  {
    slug: "punjab",
    name: "Punjab",
    kind: "State",
    description: "A regional road network connecting major cities and interstate destinations. Enquiries are coordinated against the actual route and date rather than assumed city-wide availability.",
    cities: [
      { slug: "amritsar", name: "Amritsar", summary: "Plan an intercity or outstation enquiry with Amritsar as your pickup or destination, including any onward stops in your itinerary." },
      { slug: "ludhiana", name: "Ludhiana", summary: "Use Ludhiana as a start or end point for journeys across Punjab and neighbouring regions. Share your full travel requirements for review." },
      { slug: "jalandhar", name: "Jalandhar", summary: "Request a one-way, return or multi-stop journey involving Jalandhar, with vehicle suitability confirmed after checking the route." },
      { slug: "patiala", name: "Patiala", summary: "Plan travel from or to Patiala by providing the exact pickup point, destination, date and passenger count." },
      { slug: "bathinda", name: "Bathinda", summary: "Create a journey enquiry involving Bathinda for regional or longer-distance travel, subject to local partner availability." }
    ]
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    kind: "Union Territory",
    description: "A major regional starting point for journeys towards Punjab, Haryana, Himachal Pradesh and other North Indian destinations. Route-specific availability is confirmed enquiry by enquiry.",
    cities: [
      { slug: "chandigarh", name: "Chandigarh", summary: "Plan an intercity, airport or outstation journey with Chandigarh as your pickup or drop point. Include the sector, destination and travel date for review." }
    ]
  },
  {
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    kind: "State",
    description: "A mountain travel region where season, weather, road access and vehicle suitability can affect an itinerary. Share all planned stops so the operating team can assess feasibility.",
    cities: [
      { slug: "shimla", name: "Shimla", summary: "Plan a journey involving Shimla with the complete route and dates provided, allowing hill-road access and onward travel to be reviewed." },
      { slug: "manali", name: "Manali", summary: "Use Manali as a pickup, drop or itinerary stop. The requested dates, route and vehicle requirements are checked before any trip is confirmed." },
      { slug: "dharamshala", name: "Dharamshala", summary: "Create an enquiry for travel to or from Dharamshala, including nearby stops and the preferred reporting time." },
      { slug: "dalhousie", name: "Dalhousie", summary: "Plan a journey involving Dalhousie by sharing the full itinerary so access, timing and suitable local arrangements can be reviewed." },
      { slug: "kullu", name: "Kullu", summary: "Use Kullu as a starting point, destination or stop within a Himachal itinerary. Final routing depends on the requested dates and road conditions." },
      { slug: "solan", name: "Solan", summary: "Request an intercity or hill-region journey involving Solan, with the pickup location and onward destination specified." },
      { slug: "mandi", name: "Mandi", summary: "Plan a journey to or from Mandi with all intermediate stops included for route and partner availability checks." }
    ]
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    kind: "State",
    description: "A broad intercity region with urban, heritage and leisure destinations. Multi-city journeys can be submitted as one itinerary for operational review.",
    cities: [
      { slug: "jaipur", name: "Jaipur", summary: "Plan a one-way, return or multi-city journey with Jaipur as the pickup or drop point. Share the full route for a reviewed quotation." },
      { slug: "udaipur", name: "Udaipur", summary: "Use Udaipur as a destination or starting point for an intercity enquiry, including any planned stops and return requirements." },
      { slug: "jodhpur", name: "Jodhpur", summary: "Create a journey enquiry involving Jodhpur with dates, passenger count and route details supplied for assessment." },
      { slug: "ajmer", name: "Ajmer", summary: "Plan a cab enquiry from or to Ajmer for regional and interstate travel, subject to a confirmed operating partner." },
      { slug: "kota", name: "Kota", summary: "Request a journey involving Kota by sharing your exact pickup point, destination and reporting schedule." },
      { slug: "pushkar", name: "Pushkar", summary: "Use Pushkar as a stop or destination in a Rajasthan itinerary. Include all travel dates and stops for a route review." }
    ]
  },
  {
    slug: "jammu-kashmir",
    name: "Jammu & Kashmir",
    kind: "Union Territory",
    description: "A region with varied terrain and route conditions. Enquiries involving mountain roads or seasonal destinations require itinerary-level feasibility checks before acceptance.",
    cities: [
      { slug: "jammu", name: "Jammu", summary: "Plan a journey involving Jammu as a pickup or drop location, with the onward route and dates shared for partner coordination." },
      { slug: "srinagar", name: "Srinagar", summary: "Use Srinagar as a starting point, destination or itinerary stop. Route access and local operating availability are reviewed for the selected dates." },
      { slug: "katra", name: "Katra", summary: "Create an enquiry to or from Katra with your schedule and any onward stops included for operational review." },
      { slug: "pahalgam", name: "Pahalgam", summary: "Plan travel involving Pahalgam by providing the complete itinerary so seasonal access and local arrangements can be assessed." }
    ]
  },
  {
    slug: "ladakh",
    name: "Ladakh",
    kind: "Union Territory",
    description: "A high-altitude travel region where seasonality, road conditions and local operating rules are especially important. Every proposed itinerary needs route-specific review.",
    cities: [
      { slug: "leh", name: "Leh", summary: "Plan an enquiry involving Leh with travel dates, route and all planned stops. High-altitude road feasibility and local arrangements must be confirmed." },
      { slug: "kargil", name: "Kargil", summary: "Use Kargil as a pickup, destination or stop in a Ladakh itinerary, subject to seasonal route and partner availability checks." }
    ]
  }
];

export function getLocationState(stateSlug: string) {
  return LOCATION_STATES.find((state) => state.slug === stateSlug);
}

export function getLocationCity(stateSlug: string, citySlug: string) {
  const state = getLocationState(stateSlug);
  const city = state?.cities.find((item) => item.slug === citySlug);
  return state && city ? { state, city } : undefined;
}
