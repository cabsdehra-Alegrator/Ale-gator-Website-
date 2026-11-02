# Ale-gator Advanced Tour Builder

Status: frontend-first product specification  
Implementation branch: `feature/advanced-tour-builder`

## Product promise

Help a traveller turn a set of North India destinations into a practical, editable, day-wise trip plan, then pass the same plan into a cab enquiry. The builder is a planning product; it must never imply that vehicles, partners, fares, permits, opening hours or road conditions are confirmed.

## User journey

1. **Start** — enter from the homepage, destination pages or a suggested itinerary.
2. **Choose destinations** — search and filter a curated city catalogue; add multiple stops.
3. **Order and stay** — set start/end points, reorder stops, and choose nights at each stop.
4. **Choose sightseeing** — select attractions per city and review suggested visit durations.
5. **Set preferences** — travel style, interests, passenger count and optional dates.
6. **Generate** — generate a deterministic day-wise draft from user selections.
7. **Review and edit** — change stop order, nights and attractions; regenerate the itinerary.
8. **Share or enquire** — prepare a shareable plan or prefill a cab enquiry. Neither action confirms a booking.

## Screen specification

| Screen | Inputs | Primary action | Validation / behaviour |
|---|---|---|---|
| Start planning | Start from scratch or suggested route | Begin | No login required |
| Destination discovery | Search, region, selected city | Add destination | Prevent duplicate city stops in the initial builder |
| My Tour / route order | Start, final drop, sequence, nights | Continue | At least one stop; nights >= 1 |
| Sightseeing | Attraction selection per city | Continue | Empty attraction lists are allowed |
| Preferences | Travel style, interests, passengers, dates | Generate | Exact dates optional |
| Itinerary preview | Generated days, activity order | Review | Rebuild from current user state |
| Edit itinerary | Move/remove activities, change stops/nights | Update plan | Warn when selected load is likely too high; do not silently drop places |
| Share / cab enquiry | Contact details and summary | Prepare enquiry | Preview only until persistence/submission service exists |

## Desktop layout

- Header: Ale-gator mark, return-to-destinations link and clear prototype status.
- Left rail: numbered steps and completion state.
- Main workspace: one focused step at a time, with editable cards.
- Right rail: persistent tour summary (destinations, nights, generated days, passenger count).
- Bottom actions: Back and Continue; primary action remains visible on smaller screens.

## Mobile layout

- Single-column step flow.
- Compact progress indicator.
- Destination and attraction cards stack vertically.
- Sequence controls use explicit Move up / Move down buttons as an accessible alternative to drag-and-drop.
- Sticky bottom action bar.
- Summary collapses into a drawer/card to preserve screen space.

## Destination content model

### City
- `id`: stable machine identifier
- `slug`: URL-safe identifier
- `name`, `stateName`, `regionName`
- `summary`: factual editorial summary
- `suggestedNights`: planning suggestion, not a recommendation guarantee
- `themes[]`: matching interests
- `attractions[]`: related attraction seed records
- `verificationStatus`: `needs_review | editorially_reviewed | source_verified`

### Attraction
- `id`, `name`, `category`, `summary`
- `suggestedVisitMinutes`
- `verificationStatus`
- Future fields: coordinates, address, access notes, operating season, official hours, permit requirements, source references and last-verified date.

### Route connection
- `fromCityId`, `toCityId`, `connectionType`
- `distanceKm`, `driveMinutesMin`, `driveMinutesMax`
- `verificationStatus`, `planningNote`
- Future fields: road-routing source, source URL, checked-at timestamp, seasonal caveats, vehicle restrictions and route geometry.

**Data quality rule:** a null distance or time is unknown, not zero. Never derive road distance from straight-line coordinates. Never display an estimate as verified unless its source and verification date are stored.

## User-created tour model

### Tour
`id, title, startPoint, finalDrop, startDate, endDate, passengerCount, travelStyle, interests[], status, createdAt, updatedAt`

### TourDestination
`id, tourId, cityId, sequence, nights, arrivalNote, departureNote`

### TourAttraction
`id, tourDestinationId, attractionId, selected, priority, preferredDayOffset`

### ItineraryDay
`id, tourId, dayNumber, date, title, startCityId, endCityId, overnightCityId, transferStatus`

### ItineraryActivity
`id, itineraryDayId, attractionId, sequence, plannedDurationMinutes, activityType, notes`

### TourShare
`id, tourId, shareToken, expiresAt, visibility`

### CabEnquiry
`id, tourId, contactName, contactPhone, contactEmail, vehiclePreference, luggageNotes, status`

## Future persistence mapping

Recommended future tables:
- `regions`, `states`, `cities`
- `attractions`, `city_attractions`
- `routes`, `route_sources`, `nearby_places`
- `travel_guides`
- `tours`, `tour_destinations`, `tour_attractions`, `tour_preferences`
- `itinerary_days`, `itinerary_activities`
- `tour_shares`, `cab_enquiries`

Do not create these database tables as part of this frontend-only phase. Supabase is intentionally not connected yet.

## Itinerary generation rules

1. Total trip days are `sum(destination.nights) + 1`; the extra day is the final departure/drop day.
2. Each selected destination receives one itinerary day per allocated night.
3. The first day at a new destination is labelled as a transfer/arrival day.
4. Selected attractions are distributed across the destination's stay days in user priority order.
5. If no attractions are selected, show an invitation to select places rather than silently invent a sightseeing schedule.
6. If a city has more attractions than available time, flag the remaining places as unscheduled and preserve the selection.
7. The final day is a departure/drop day and does not automatically add sightseeing.
8. Transfer time and road distance remain “not verified” until route-source data is available.
9. No late-night hill driving recommendation.
10. Do not claim partner availability, fares or a booking confirmation.

## Release acceptance criteria

- Users can add/remove multiple cities without duplicate city entries.
- Users can reorder stops and adjust nights.
- Users can select and deselect city attractions.
- Users can set style, interests and passenger count.
- The itinerary regenerates from the current selections and remains editable.
- Duration, transfer and unverified-route warnings are visible.
- Desktop and mobile layouts are usable.
- Cab enquiry summary reuses trip details, but does not send or persist anything in this phase.
- No Supabase, authentication, admin changes, sitemap or robots configuration are introduced.
