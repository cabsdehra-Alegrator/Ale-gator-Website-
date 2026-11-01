export type CityTravelContent = {
  heading: string;
  overview: string;
  pickupGuidance: string;
  tripPatterns: { title: string; detail: string; links?: { label: string; href: string }[] }[];
  planningNotes: string[];
  faqs: { question: string; answer: string }[];
  officialSource?: { label: string; href: string };
};

const CITY_CONTENT: Record<string, CityTravelContent> = {
  delhi: {
    heading: "Plan your Delhi pickup before the journey starts",
    overview: "Delhi works as both a major arrival point and a starting base for multi-city North India travel. A well-planned cab enquiry begins with the exact terminal, railway station, neighbourhood or interstate bus terminal—not just the city name.",
    pickupGuidance: "For airport, rail and bus-station pickups, specify the terminal or station, arrival details and a practical meeting point. Delhi's main rail and interstate bus hubs are spread across the city, so the exact pickup point matters.",
    tripPatterns: [
      { title: "Delhi · Agra · Jaipur", detail: "A classic multi-city heritage circuit. Share the number of nights, sightseeing stops and final drop city together so the complete movement plan can be reviewed.", links: [{ label: "Agra", href: "/locations/uttar-pradesh/agra" }, { label: "Jaipur", href: "/locations/rajasthan/jaipur" }] },
      { title: "Delhi to Uttarakhand", detail: "For a hill or pilgrimage itinerary, list every overnight halt and the final return point rather than submitting only the first destination.", links: [{ label: "Dehradun", href: "/locations/uttarakhand/dehradun" }, { label: "Nainital", href: "/locations/uttarakhand/nainital" }] },
      { title: "Delhi to Chandigarh and Himachal", detail: "Useful for journeys continuing beyond Chandigarh into hill destinations. Mention luggage, group size and any intermediate pickup.", links: [{ label: "Chandigarh", href: "/locations/chandigarh/chandigarh" }, { label: "Shimla", href: "/locations/himachal-pradesh/shimla" }] }
    ],
    planningNotes: [
      "Identify the exact pickup: IGI Airport terminal, New Delhi Railway Station, Old Delhi, Hazrat Nizamuddin, Kashmere Gate, Sarai Kale Khan or Anand Vihar.",
      "For a multi-stop trip, provide the overnight cities and sightseeing days in chronological order.",
      "For airport pickups, share the flight number and arrival time so the meeting plan can be agreed."
    ],
    faqs: [
      { question: "Can I book a cab from Delhi Airport to another state?", answer: "You can submit an intercity enquiry with the airport terminal, destination, travel date, passenger count and luggage details. The team checks route feasibility and partner availability before confirming the fare." },
      { question: "Can Delhi be the starting point for a multi-city tour?", answer: "Yes. Share all cities, overnight stops, sightseeing days and the final drop location in one enquiry so the complete itinerary can be reviewed." },
      { question: "Do you show an instant fare on the city page?", answer: "No. This directory does not publish unverified fares. A quote is shared only after the requested route, date and suitable partner option have been checked." }
    ],
    officialSource: { label: "Delhi Tourism – travel to and around Delhi", href: "https://www.delhitourism.gov.in/" }
  },
  gurugram: {
    heading: "Make the pickup point precise in Gurugram",
    overview: "Gurugram enquiries often start from a specific office, residential sector, hotel or agreed meeting point. Adding the exact location makes it easier for the operations team to assess the pickup and onward route.",
    pickupGuidance: "Mention the sector, building or hotel name, gate or tower where relevant, and whether the cab should report to a fixed time. For airport-related journeys, state the actual airport and terminal rather than using Gurugram as a broad pickup label.",
    tripPatterns: [
      { title: "Gurugram to Delhi Airport", detail: "Provide the airport terminal, flight schedule and preferred pickup buffer. The final meeting plan is confirmed with the assigned operator." },
      { title: "Gurugram to Uttarakhand", detail: "Share the destination town, any hill stops and the return plan. A hill itinerary may need a different operating plan from a city-to-city transfer.", links: [{ label: "Dehradun", href: "/locations/uttarakhand/dehradun" }, { label: "Rishikesh", href: "/locations/uttarakhand/rishikesh" }] },
      { title: "Gurugram to Jaipur", detail: "For a direct transfer or Rajasthan circuit, specify whether Jaipur is the final drop or one stop in a longer itinerary.", links: [{ label: "Jaipur", href: "/locations/rajasthan/jaipur" }] }
    ],
    planningNotes: [
      "Use the full sector and building or hotel name; a broad 'Gurugram' pickup is not enough for dispatch.",
      "Tell us about office security gates, visitor entry rules or restricted access before the reporting time.",
      "Include the return date if the vehicle is required for more than one leg."
    ],
    faqs: [
      { question: "Can the cab pick me up from my office or society in Gurugram?", answer: "Include the full address, sector and entry instructions in the enquiry. The pickup is confirmed after the assigned operator reviews the location." },
      { question: "Can I request an airport drop from Gurugram?", answer: "Yes. State the airport, terminal, flight time, passenger count and luggage so the team can review the reporting plan." },
      { question: "Can I book a multi-day outstation trip?", answer: "Share the complete itinerary and dates. The team will check a suitable partner for the full journey before confirming." }
    ]
  },
  noida: {
    heading: "Plan a sector-wise pickup in Noida",
    overview: "Noida is a large urban pickup area, so the sector and exact building or meeting point should be part of every enquiry. This is particularly important when a trip includes several passenger pickups or a fixed airport or train departure.",
    pickupGuidance: "Add the sector, society or office name, gate number where applicable, and the exact drop address. If there are multiple pickups, list them in the order passengers should be collected.",
    tripPatterns: [
      { title: "Noida to Delhi Airport", detail: "Mention the departure terminal, flight time, number of passengers and luggage volume to review the reporting plan." },
      { title: "Noida to Agra and Jaipur", detail: "For a heritage circuit, provide the full sequence of cities and nights instead of treating each leg as a separate trip.", links: [{ label: "Agra", href: "/locations/uttar-pradesh/agra" }, { label: "Jaipur", href: "/locations/rajasthan/jaipur" }] },
      { title: "Noida to Uttarakhand", detail: "List the hill destination, overnight halts and any sightseeing days. The team will assess the route and vehicle suitability.", links: [{ label: "Nainital", href: "/locations/uttarakhand/nainital" }, { label: "Mussoorie", href: "/locations/uttarakhand/mussoorie" }] }
    ],
    planningNotes: [
      "Share a complete sector and address, not only the city or a nearby metro station.",
      "For group pickups, provide every stop and the passenger count at each stop.",
      "If the destination is in the hills, include luggage size and any mobility or comfort requirements."
    ],
    faqs: [
      { question: "Can you arrange a pickup from any Noida sector?", answer: "Submit the full pickup address and destination. The operations team checks the location and partner availability for the requested date." },
      { question: "Can I add more than one pickup point?", answer: "Yes. List all pickup addresses in the correct sequence and include the passenger count at each location." },
      { question: "Will the fare be available instantly?", answer: "No instant fare is assumed. The team shares a quote after reviewing the full route and operating requirements." }
    ]
  },
  dehradun: {
    heading: "Use Dehradun as a base for the Doon Valley and Garhwal",
    overview: "Dehradun connects city stays and transport arrivals with the Mussoorie hills, Rishikesh, Haridwar and onward Garhwal journeys. A useful enquiry distinguishes a Dehradun city pickup from an airport, railway station or hotel pickup.",
    pickupGuidance: "State whether the pickup is at Jolly Grant Airport, Dehradun Railway Station, ISBT or a hotel/residential address. If Dehradun is only the first night of a longer tour, share the later stops and final drop too.",
    tripPatterns: [
      { title: "Dehradun to Mussoorie", detail: "A hill transfer or sightseeing plan can include Mussoorie town and nearby stops. Mention the hotel area and whether local movement is required.", links: [{ label: "Mussoorie", href: "/locations/uttarakhand/mussoorie" }] },
      { title: "Dehradun · Rishikesh · Haridwar", detail: "A regional itinerary that can combine city time, river-side experiences and pilgrimage stops. Specify whether each place is a visit or an overnight halt.", links: [{ label: "Rishikesh", href: "/locations/uttarakhand/rishikesh" }, { label: "Haridwar", href: "/locations/uttarakhand/haridwar" }] },
      { title: "Dehradun to Kumaon", detail: "For a cross-state-region journey, include the Kumaon stops and finish point so the complete route can be assessed.", links: [{ label: "Haldwani", href: "/locations/uttarakhand/haldwani" }, { label: "Nainital", href: "/locations/uttarakhand/nainital" }] }
    ],
    planningNotes: [
      "For Jolly Grant Airport pickups, share the flight number and scheduled arrival time.",
      "For railway pickups, mention the train name or number and the expected arrival time.",
      "For a hill route, confirm the overnight stop and avoid planning a late-night mountain arrival."
    ],
    faqs: [
      { question: "Can I start a Mussoorie trip from Dehradun Airport?", answer: "Submit the flight details, arrival time, hotel area and travel date. Airport pickup and onward hill travel are confirmed after checking the operator and route." },
      { question: "Can one cab cover Dehradun, Rishikesh and Haridwar?", answer: "A multi-stop itinerary can be reviewed. Share the sequence, sightseeing time and overnight plan so the team can confirm whether one vehicle and operator can cover it." },
      { question: "Can I get a local sightseeing cab in Dehradun?", answer: "You can submit a local travel enquiry with your sightseeing list and reporting time. The team will check the operating partner and vehicle availability." }
    ],
    officialSource: { label: "Uttarakhand Tourism – Dehradun", href: "https://www.uttarakhandtourism.gov.in/destination/dehradun" }
  },
  rishikesh: {
    heading: "Plan Rishikesh around your stay and activity timings",
    overview: "Rishikesh is known for its Ganga-side setting, yoga and meditation centres, ashrams and adventure activities. A pickup plan should identify the actual stay area and allow for the timing of the activity or onward journey.",
    pickupGuidance: "Give the hotel, ashram or meeting point name and share whether the trip starts near the main town, a river-side stay or an outlying activity location. For rafting or other scheduled activities, coordinate the reporting time directly with the activity provider before finalizing the cab plan.",
    tripPatterns: [
      { title: "Rishikesh to Haridwar", detail: "A short regional itinerary may combine a Rishikesh stay with Haridwar's ghats and temples. State whether you need a transfer or a stop-based visit.", links: [{ label: "Haridwar", href: "/locations/uttarakhand/haridwar" }] },
      { title: "Rishikesh to Dehradun Airport or city", detail: "Tell us the flight time or onward appointment and exact pickup point so the team can review the reporting schedule.", links: [{ label: "Dehradun", href: "/locations/uttarakhand/dehradun" }] },
      { title: "Rishikesh into the Garhwal hills", detail: "For a longer mountain itinerary, list every overnight halt and planned stop. Route feasibility and suitable local partners must be checked before confirmation.", links: [{ label: "Joshimath", href: "/locations/uttarakhand/joshimath" }, { label: "Auli", href: "/locations/uttarakhand/auli" }] }
    ],
    planningNotes: [
      "Share the exact property or ashram name; a broad Rishikesh pickup may not identify the correct access road.",
      "If your day includes rafting, yoga or a guided activity, give the confirmed activity schedule.",
      "For mountain journeys beyond Rishikesh, plan daytime hill driving and a realistic overnight halt."
    ],
    faqs: [
      { question: "Can I book a cab from Rishikesh to Haridwar?", answer: "Submit the pickup point, destination area, date, passenger count and whether you need a one-way transfer or sightseeing stops. Availability is confirmed by the team." },
      { question: "Can the cab wait while I attend an activity?", answer: "Mention the activity, its confirmed duration and waiting requirement in the enquiry. The team will check whether the requested duty can be arranged." },
      { question: "Can Rishikesh be the starting point for a hill tour?", answer: "Yes, you can submit a multi-day itinerary. Include all destinations and overnight halts for a route and partner review." }
    ],
    officialSource: { label: "Uttarakhand Tourism – Rishikesh", href: "https://www.uttarakhandtourism.gov.in/destination/rishikesh" }
  },
  haridwar: {
    heading: "Coordinate Haridwar pickups with your ghat and train plan",
    overview: "Haridwar is a major pilgrimage city on the Ganga and a gateway for journeys into Uttarakhand. Many visits revolve around aarti, temple timings and rail arrivals, so the pickup and meeting point should be agreed clearly.",
    pickupGuidance: "For a railway arrival, share the train and arrival time. For a hotel or ghat-area pickup, provide the property name and a suitable vehicle meeting point; access and traffic around busy religious areas can vary.",
    tripPatterns: [
      { title: "Haridwar to Rishikesh", detail: "Combine the two Ganga-side destinations in one enquiry if you need a transfer with time for visits at each location.", links: [{ label: "Rishikesh", href: "/locations/uttarakhand/rishikesh" }] },
      { title: "Haridwar to Dehradun and Mussoorie", detail: "A route can continue from the plains to Dehradun and the hill station. Specify whether you want a direct transfer or sightseeing en route.", links: [{ label: "Dehradun", href: "/locations/uttarakhand/dehradun" }, { label: "Mussoorie", href: "/locations/uttarakhand/mussoorie" }] },
      { title: "Haridwar to Garhwal pilgrimage routes", detail: "For a pilgrimage itinerary, provide registration status where relevant, the full destination sequence and planned night halts. Road and seasonal conditions require careful review.", links: [{ label: "Joshimath", href: "/locations/uttarakhand/joshimath" }] }
    ],
    planningNotes: [
      "If you plan to attend the evening Ganga Aarti at Har Ki Pauri, state the time and agree on a nearby meeting point in advance.",
      "For Mansa Devi or Chandi Devi visits, clarify whether the cab is needed for a drop, pickup after the visit or a full-day duty.",
      "Share the full pilgrimage route and night stops; do not assume a same-day hill transfer is feasible."
    ],
    faqs: [
      { question: "Can I arrange a Haridwar railway station pickup?", answer: "Yes. Share the train details, arrival time, passenger count and final drop address for an availability check." },
      { question: "Can the cab wait during Ganga Aarti?", answer: "Include the expected visit window and pickup point in the enquiry. A waiting arrangement is subject to operator agreement and local access conditions." },
      { question: "Can Haridwar be the pickup for a multi-day Uttarakhand tour?", answer: "Yes. Provide the complete route, travel dates and overnight stops so the team can review the full duty." }
    ],
    officialSource: { label: "Uttarakhand Tourism – Haridwar", href: "https://uttarakhandtourism.gov.in/destination/haridwar/" }
  },
  mussoorie: {
    heading: "Allow for hill access when planning Mussoorie travel",
    overview: "Mussoorie is a hill-station reached by a climbing road from the Dehradun side. The exact hotel or stay area, sightseeing plan and time of arrival can affect where a vehicle can report and how the day should be organized.",
    pickupGuidance: "Share the hotel or homestay name and the nearest practical vehicle access point. If your stay is in Landour or another narrow-road area, mention that clearly so the pickup and luggage handover can be planned.",
    tripPatterns: [
      { title: "Dehradun to Mussoorie and Landour", detail: "A transfer can be planned separately from a sightseeing day. List the places you want to visit and whether the vehicle is required for local movement.", links: [{ label: "Dehradun", href: "/locations/uttarakhand/dehradun" }] },
      { title: "Mussoorie to Rishikesh or Haridwar", detail: "For a descent from the hills to the plains, provide the final hotel or railway/airport connection and any planned stops.", links: [{ label: "Rishikesh", href: "/locations/uttarakhand/rishikesh" }, { label: "Haridwar", href: "/locations/uttarakhand/haridwar" }] },
      { title: "Mussoorie to Dhanaulti and onward", detail: "If the itinerary includes Dhanaulti or other hill locations, mention all stops and the final overnight destination so the right duty can be assessed." }
    ],
    planningNotes: [
      "Confirm the property name and vehicle access point before the reporting time.",
      "Separate a point-to-point transfer from a full-day sightseeing requirement in your enquiry.",
      "Keep hill driving in daylight where practical and allow the schedule to adapt to weather and road conditions."
    ],
    faqs: [
      { question: "Can a cab pick me up directly from my Mussoorie hotel?", answer: "Share the property name and exact location. The operator will confirm the accessible meeting point for the vehicle." },
      { question: "Can I include Landour and Kempty Falls in one sightseeing enquiry?", answer: "Yes. List all desired stops and your available time. The operations team can review the proposed schedule and route." },
      { question: "Can I travel from Mussoorie to Rishikesh on the same day?", answer: "You can submit the requested date and timing. The team will assess road conditions, daylight and partner availability before accepting the journey." }
    ],
    officialSource: { label: "Uttarakhand Tourism – Mussoorie", href: "https://www.uttarakhandtourism.gov.in/destination/mussoorie" }
  },
  nainital: {
    heading: "Plan Nainital around the lake, parking and your arrival station",
    overview: "Nainital is a lake-centred hill town with busy approach roads and local vehicle restrictions at certain times. The town visit, hotel access and onward Kumaon itinerary should be planned together rather than treated as an unrestricted point-to-point city transfer.",
    pickupGuidance: "Many rail arrivals for Nainital use Kathgodam, with Haldwani and Lal Kuan as other regional rail options. Share the station name and train arrival details. For a hotel inside Nainital, provide the property and ask the team to confirm the practical luggage drop and vehicle meeting point.",
    tripPatterns: [
      { title: "Kathgodam or Haldwani to Nainital", detail: "A station-to-hill transfer should include the exact train, arrival station, passenger count and hotel location.", links: [{ label: "Haldwani", href: "/locations/uttarakhand/haldwani" }] },
      { title: "Nainital · Bhimtal · Sattal · Naukuchiatal", detail: "A Kumaon lake circuit can be submitted as a single sightseeing enquiry. Specify the preferred stops and whether you need a return to Nainital.", links: [{ label: "Haldwani", href: "/locations/uttarakhand/haldwani" }] },
      { title: "Nainital to Kainchi Dham and Almora", detail: "Share the temple visit plan, any additional stops and the final drop. Visit schedules and local access should be checked close to the travel date." }
    ],
    planningNotes: [
      "The district administration publishes traffic and parking guidance for Mall Road; seasonal restrictions may apply, so confirm the current local rules before travel.",
      "If your hotel is near Mall Road, agree on a vehicle-accessible meeting point and how luggage will be handled.",
      "For Kainchi Dham or nearby lake visits, include the full stop sequence and expected visit time."
    ],
    faqs: [
      { question: "Can you pick me up from Kathgodam Railway Station for Nainital?", answer: "Submit the train arrival time, passenger and luggage count, and hotel address. The team checks the pickup and route with an available partner." },
      { question: "Can the cab enter the Nainital Mall Road area?", answer: "Access and parking restrictions can change by season and local order. Share your hotel location; the team will help agree on a practical meeting or drop point after checking current conditions." },
      { question: "Can I add Bhimtal and Kainchi Dham to my Nainital trip?", answer: "Yes. Provide all planned stops, dates and the final drop location so the route can be reviewed as one itinerary." }
    ],
    officialSource: { label: "Nainital District – tourist traffic and parking guidance", href: "https://nainital.nic.in/tips-for-tourists/" }
  },
  haldwani: {
    heading: "Use Haldwani and Kathgodam for Kumaon arrival planning",
    overview: "Haldwani is an important arrival and road-transfer point for visitors continuing towards Nainital and other Kumaon hill destinations. The station or bus stand you arrive at should be stated clearly because Haldwani, Kathgodam and Lal Kuan are separate pickup locations.",
    pickupGuidance: "Mention whether the pickup is Haldwani Railway Station, Kathgodam Railway Station, Lal Kuan or the Haldwani Roadways Bus Stand. Add the train or bus arrival time and the exact onward destination.",
    tripPatterns: [
      { title: "Haldwani to Nainital and lake towns", detail: "Share whether you plan to go directly to Nainital or include Bhimtal, Sattal and Naukuchiatal along the way.", links: [{ label: "Nainital", href: "/locations/uttarakhand/nainital" }] },
      { title: "Haldwani to Almora and Ranikhet", detail: "For a Kumaon tour, list all overnight stops and the final railway station or city drop so the entire itinerary can be checked." },
      { title: "Haldwani to Dehradun or the Garhwal side", detail: "This is a longer inter-region journey. Provide the date, exact drop and any overnight or sightseeing requirements.", links: [{ label: "Dehradun", href: "/locations/uttarakhand/dehradun" }] }
    ],
    planningNotes: [
      "Do not use 'Haldwani station' as a generic label if your train arrives at Kathgodam or Lal Kuan.",
      "For a hill transfer, specify your hotel or town rather than only writing 'Nainital side'.",
      "If you have a return train, share its departure station and time before the vehicle is allocated."
    ],
    faqs: [
      { question: "Can I be picked up from Kathgodam instead of Haldwani?", answer: "Yes. Select the actual railway station in your enquiry and provide the train details so the meeting point is clear." },
      { question: "Can I book a cab from Haldwani for a Kumaon tour?", answer: "Submit the full city sequence, dates and night halts. The team checks the route and local partner options for the complete itinerary." },
      { question: "Can I end the trip at Lal Kuan Railway Station?", answer: "Include Lal Kuan as the final drop and share your train departure time. The reporting plan is confirmed after checking the route and operator." }
    ],
    officialSource: { label: "Nainital District – how to reach Nainital by rail", href: "https://nainital.nic.in/how-to-reach-nainital-by-rail/" }
  },
  chandigarh: {
    heading: "Use Chandigarh as the road connection into the hills",
    overview: "Chandigarh is a practical interchange point for journeys continuing towards Punjab, Haryana and Himachal Pradesh. It has airport, railway and inter-state bus connections, so the correct arrival point and onward destination should be captured in the enquiry.",
    pickupGuidance: "State whether pickup is at Chandigarh Airport, Chandigarh Railway Station, Sector 17 ISBT or a specific sector address. For onward hill journeys, include the hotel or town and any planned stops before the final destination.",
    tripPatterns: [
      { title: "Chandigarh to Shimla", detail: "A common hill-bound enquiry. Share the hotel area, luggage and whether you need a direct transfer or sightseeing stops on the way.", links: [{ label: "Shimla", href: "/locations/himachal-pradesh/shimla" }] },
      { title: "Chandigarh to Manali and Kullu", detail: "This is a longer mountain journey. Share travel date, preferred reporting time, overnight plan and vehicle needs for route review.", links: [{ label: "Manali", href: "/locations/himachal-pradesh/manali" }, { label: "Kullu", href: "/locations/himachal-pradesh/kullu" }] },
      { title: "Chandigarh to Uttarakhand", detail: "For a cross-state tour, share the first overnight halt and full itinerary so the operations team can assess the complete duty.", links: [{ label: "Dehradun", href: "/locations/uttarakhand/dehradun" }, { label: "Mussoorie", href: "/locations/uttarakhand/mussoorie" }] }
    ],
    planningNotes: [
      "Use the exact terminal, station or ISBT name for the pickup.",
      "For Himachal journeys, provide the actual destination town and hotel area; a state name alone is not enough.",
      "For longer hill journeys, plan realistic daytime driving and overnight halts."
    ],
    faqs: [
      { question: "Can I get a cab from Chandigarh Airport to Shimla?", answer: "Submit the arrival time, passenger count, luggage and Shimla hotel area. Availability and the pickup plan are confirmed after the route is reviewed." },
      { question: "Can Chandigarh be the start of a Manali tour?", answer: "Yes. Share the complete dates and route, including any Kullu or other stops, so a suitable operator can be checked." },
      { question: "Can I be picked up from Sector 17 ISBT or the railway station?", answer: "Include the exact arrival point and time in your enquiry. The final meeting point is agreed with the assigned operator." }
    ],
    officialSource: { label: "Chandigarh District – how to reach", href: "https://chandigarhdistrict.nic.in/tourism/how-to-reach/" }
  },
  shimla: {
    heading: "Plan Shimla arrivals with the right station and vehicle access",
    overview: "Shimla's hill setting makes the last part of a journey different from a plain-city drop. The hotel location, luggage and vehicle access point should be shared before the trip is accepted.",
    pickupGuidance: "For arrivals, identify whether you need pickup at Shimla Railway Station, ISBT Tutikandi, the Old Bus Stand or a hotel. Some stays may require a short walk or a separate luggage handover point; confirm this with the property and operator.",
    tripPatterns: [
      { title: "Chandigarh to Shimla", detail: "Share the arrival or reporting point in Chandigarh and the exact Shimla stay location. Mention whether the vehicle is needed after the transfer.", links: [{ label: "Chandigarh", href: "/locations/chandigarh/chandigarh" }] },
      { title: "Shimla · Kufri · Mashobra · Naldehra", detail: "These nearby hill areas can be considered in a local sightseeing plan. Provide the stops and preferred duration for route review." },
      { title: "Shimla to Manali", detail: "For a longer Himachal itinerary, share the dates, intermediate stops and overnight plan rather than assuming a same-day schedule.", links: [{ label: "Manali", href: "/locations/himachal-pradesh/manali" }] }
    ],
    planningNotes: [
      "Share the exact hotel and its vehicle access instructions before the trip.",
      "If arriving by the Kalka–Shimla rail route, specify the station and train arrival time.",
      "Include sightseeing stops such as Mashobra, Naldehra or Fagu at enquiry stage rather than adding them after the fare is agreed."
    ],
    faqs: [
      { question: "Can a cab pick me up from Shimla Railway Station?", answer: "Yes, submit your train arrival time, passenger count, luggage and final hotel or drop address for an operating check." },
      { question: "Can I cover Shimla and Kufri in one day?", answer: "You can submit the sightseeing request with your planned stops. The team will review the schedule, road conditions and partner availability." },
      { question: "Can I continue from Shimla to Manali?", answer: "Yes, as a separately planned leg or part of a multi-day itinerary. Share the dates and overnight stops for review." }
    ],
    officialSource: { label: "Himachal Tourism – Shimla", href: "https://himachaltourism.gov.in/destination/shimla/" }
  },
  manali: {
    heading: "Build a Manali itinerary around local access and mountain conditions",
    overview: "Manali sits in the Beas valley and combines a town stay with excursions into surrounding mountain areas. A good enquiry separates the town transfer from sightseeing and identifies any permit-controlled or seasonal destination in advance.",
    pickupGuidance: "Share the hotel or homestay area and whether the vehicle is required for local visits. If your plan includes Rohtang Pass or another regulated high-altitude route, state it at enquiry stage; access rules and permits must be checked with the relevant authority.",
    tripPatterns: [
      { title: "Chandigarh to Manali via the Kullu valley", detail: "A longer hill journey. Provide the reporting time, hotel area, luggage and any planned overnight break.", links: [{ label: "Chandigarh", href: "/locations/chandigarh/chandigarh" }, { label: "Kullu", href: "/locations/himachal-pradesh/kullu" }] },
      { title: "Manali local sightseeing", detail: "A town-based day may include Hadimba Devi Temple, Old Manali, Vashisht and nearby viewpoints. List the exact stops you want to include." },
      { title: "Manali to Solang or Rohtang region", detail: "Seasonal road access and permit requirements may apply. Share the destination clearly and confirm current rules before travel." }
    ],
    planningNotes: [
      "Mention whether your stay is in Manali town, Old Manali or another nearby settlement.",
      "List every sightseeing stop and confirm which ones require separate local vehicles or permissions.",
      "Mountain weather and road conditions can change; keep the itinerary flexible and avoid late-night hill driving."
    ],
    faqs: [
      { question: "Can one cab handle Manali airport pickup and local sightseeing?", answer: "Submit the arrival details and sightseeing plan. The team will check whether the same partner and vehicle can cover both duties." },
      { question: "Can the cab go to Rohtang Pass?", answer: "This depends on current access rules, permits, vehicle permissions and road conditions. State the request clearly so the team can verify it before quoting." },
      { question: "Can I plan Manali, Solang and Kullu together?", answer: "Yes. Include the order of stops, dates and overnight locations so the entire route can be reviewed." }
    ],
    officialSource: { label: "Himachal Tourism – Manali", href: "https://himachaltourism.gov.in/destination/manali/" }
  },
  jaipur: {
    heading: "Arrange Jaipur sightseeing and multi-city travel in one plan",
    overview: "Jaipur's walled-city landmarks, forts and markets are spread across different parts of the city. If you want sightseeing as well as an onward transfer, include both in the same itinerary so the driving plan can be reviewed as a whole.",
    pickupGuidance: "Provide the airport, railway station, hotel or exact residential pickup point. For a local sightseeing day, list the monuments and market stops in your preferred order and mention whether you need a return to the hotel.",
    tripPatterns: [
      { title: "Jaipur heritage circuit", detail: "A sightseeing enquiry may include Amer Fort, City Palace, Jantar Mantar and Hawa Mahal. Confirm which sites you want to visit inside and which are photo stops.", links: [{ label: "Delhi", href: "/locations/delhi-ncr/delhi" }] },
      { title: "Delhi · Agra · Jaipur", detail: "The Golden Triangle can be requested as one multi-city itinerary. Include the number of nights in each city and the final drop.", links: [{ label: "Delhi", href: "/locations/delhi-ncr/delhi" }, { label: "Agra", href: "/locations/uttar-pradesh/agra" }] },
      { title: "Jaipur to other Rajasthan cities", detail: "For a longer Rajasthan tour, submit all cities and overnight stays in order so the team can review the full route." }
    ],
    planningNotes: [
      "List forts, monuments and markets separately; a sightseeing route may need more time than a simple transfer.",
      "State whether you need a drop-only service, a vehicle on disposal for the day or a multi-day tour.",
      "Share any fixed ticket or event time before the operating schedule is agreed."
    ],
    faqs: [
      { question: "Can I book a Jaipur full-day sightseeing cab?", answer: "Submit the places you want to cover, hotel pickup point, date and passenger count. The team will review the schedule and confirm a suitable operating option." },
      { question: "Can Jaipur be combined with Delhi and Agra?", answer: "Yes. Share the city order, nights and final drop in a single enquiry for a complete itinerary review." },
      { question: "Can I include Amer Fort and Hawa Mahal in the same trip?", answer: "You can list both, along with any other stops. The team will review the day's route and time requirements before confirming." }
    ],
    officialSource: { label: "Rajasthan Tourism – Jaipur", href: "https://www.tourism.rajasthan.gov.in/jaipur.html" }
  },
  lucknow: {
    heading: "Explore Lucknow's heritage quarter with a planned city route",
    overview: "Lucknow's Nawabi-era landmarks, old-city streets, markets and food culture make it well suited to a stop-based visit. Group nearby heritage stops together and allow time for the specific monuments or market areas you want to explore.",
    pickupGuidance: "Share whether your arrival is at Chaudhary Charan Singh Airport, Charbagh Railway Station or a hotel. For old-city sightseeing, agree on vehicle meeting points around the heritage area rather than assuming every narrow market lane is suitable for a car pickup.",
    tripPatterns: [
      { title: "Lucknow heritage circuit", detail: "A city day can be planned around Bara Imambara, Chhota Imambara, Rumi Darwaza and the Residency area. State which monuments you wish to enter and how much time you have." },
      { title: "Lucknow to Agra", detail: "For a direct intercity transfer or a wider Uttar Pradesh tour, provide your intended stops and final drop.", links: [{ label: "Agra", href: "/locations/uttar-pradesh/agra" }] },
      { title: "Lucknow to Uttarakhand", detail: "For a longer journey towards the hills, state your first overnight halt and full destination sequence.", links: [{ label: "Dehradun", href: "/locations/uttarakhand/dehradun" }, { label: "Nainital", href: "/locations/uttarakhand/nainital" }] }
    ],
    planningNotes: [
      "List the specific heritage sites you want to enter, not only 'Lucknow sightseeing'.",
      "For old-city markets, agree a clear drop and pickup point with the driver.",
      "If the trip continues to another city, include the departure date and preferred reporting time."
    ],
    faqs: [
      { question: "Can I book a cab for Lucknow sightseeing?", answer: "Yes. Share the monuments, markets, date and hotel pickup point. The team will review the proposed route and operator availability." },
      { question: "Can the vehicle enter the old-city market lanes?", answer: "Access varies by street and local conditions. Share the exact places you want to visit so a practical vehicle meeting point can be agreed." },
      { question: "Can I continue from Lucknow to Agra in the same booking?", answer: "Submit the sightseeing plan and onward travel date together. The team can review whether the full itinerary can be handled by one partner." }
    ],
    officialSource: { label: "Uttar Pradesh Tourism – Lucknow", href: "https://www.upstdc.co.in/website/lucknow_tourism.aspx" }
  },
  agra: {
    heading: "Plan Agra monument visits and onward travel with clear pickup points",
    overview: "Agra's major heritage sites include the Taj Mahal, Agra Fort and Fatehpur Sikri. Monument access rules can affect where a vehicle may wait or drop, so plan the sightseeing sequence and meeting point instead of expecting a cab to remain at every monument gate.",
    pickupGuidance: "Tell us whether you need pickup from Agra Cantt, a hotel or another city. For Taj Mahal visits, specify the gate or agreed parking/meeting location; official visitor guidance notes restrictions on petrol and diesel vehicles in the immediate monument zone.",
    tripPatterns: [
      { title: "Taj Mahal and Agra Fort", detail: "These are separate monument visits. Share your preferred order, entry plans and available time so the driver meeting points can be coordinated." },
      { title: "Agra · Fatehpur Sikri", detail: "If adding Fatehpur Sikri to the day, include the onward plan and final drop rather than treating it as an unplanned stop." },
      { title: "Delhi · Agra · Jaipur", detail: "Agra is part of the Delhi–Agra–Jaipur Golden Triangle travel circuit. Share all city nights and the final destination in one enquiry.", links: [{ label: "Delhi", href: "/locations/delhi-ncr/delhi" }, { label: "Jaipur", href: "/locations/rajasthan/jaipur" }] }
    ],
    planningNotes: [
      "Confirm current monument opening days, entry rules and ticket information with the official authority before travel.",
      "For the Taj Mahal, use the agreed vehicle parking or visitor meeting point; vehicle access is restricted close to the monument.",
      "If you have a train departure from Agra Cantt, share the train time and station drop requirement before sightseeing starts."
    ],
    faqs: [
      { question: "Can the cab drop me at the Taj Mahal entrance?", answer: "Vehicle access is restricted in the immediate monument zone. The team and driver will confirm a permitted drop or parking and meeting point based on current local rules." },
      { question: "Can I cover the Taj Mahal and Agra Fort in one day?", answer: "You can submit both sites in one sightseeing enquiry. Share the date, entry plans and available hours so the route can be assessed." },
      { question: "Can Agra be combined with Delhi and Jaipur?", answer: "Yes. Share the complete city sequence, overnight stays and final drop in one enquiry for review." }
    ],
    officialSource: { label: "Agra District – tourism and monument visitor information", href: "https://agra.nic.in/tourism/" }
  }
};

export function getCityTravelContent(citySlug: string) {
  return CITY_CONTENT[citySlug];
}
