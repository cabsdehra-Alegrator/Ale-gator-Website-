# Ale-gator — North India Cab Network

Ale-gator is an independent cab aggregation platform designed to connect customers with local travel partners for intercity, airport and outstation journeys across North India.

## Regional rollout focus
The initial network roadmap covers:
- Delhi NCR
- Uttarakhand
- Uttar Pradesh
- Haryana
- Punjab and Chandigarh
- Himachal Pradesh
- Rajasthan
- Jammu & Kashmir
- Ladakh

Coverage is planned corridor by corridor. A location must not be presented as live service coverage until verified partner capacity, operating rules and customer support are in place.

## Technology
- Next.js App Router
- React and TypeScript
- Responsive CSS
- Planned: Supabase database, authentication and role-based access

## Local development
- Node.js 20.9+
- `npm install`
- `npm run dev`

## Current implementation
The repository contains a responsive customer-facing landing page, trip enquiry preview, North India region roadmap and example route shortcuts. The enquiry form is not connected to a backend and does not submit or store bookings yet.

## Booking fulfilment model — WhatsApp partner groups
The initial operating model uses the existing route-based vendor WhatsApp groups. A separate vendor app, vendor login or vendor dashboard is not part of the first release.

1. Customer submits a trip enquiry on the website.
2. Operations team reviews the route, date, timing, passenger and vehicle requirements.
3. Team prepares a structured duty post and shares it manually in the relevant route/region WhatsApp vendor group.
4. Vendors respond in the group; the team checks the offer, vehicle and operator suitability.
5. Team records the selected vendor against the booking, confirms availability and then confirms the trip with the customer.
6. Driver and vehicle details are shared with the customer through the approved communication channel.

The admin dashboard should include a **WhatsApp Duty Desk** to generate a consistent duty post, copy/share it for manual posting, record vendor replies, select the allocated vendor and track booking status. Do not build automatic group posting into the first version.

### Suggested duty post fields
- Duty reference ID
- Pickup and drop
- Travel date and reporting time
- Trip type (one-way, round trip, airport, multi-day)
- Vehicle category and passenger/luggage requirements
- Operational amount or vendor quote, where approved
- Route-specific notes

Do not broadcast customer phone numbers, personal contact details or unnecessary sensitive information to the whole vendor group. Share guest contact details only with the selected operator when required for fulfilment.

## Next milestones
1. Supabase database for enquiries, bookings, vendors, routes and dispatch activity, with role-based admin access.
2. Approved route and vehicle fare engine.
3. Central admin dashboard with booking stages and a WhatsApp Duty Desk.
4. Manual route-group dispatch, vendor response capture and allocation tracking.
5. Customer notifications and payment collection.
6. SEO landing pages for validated North India corridors.
7. Analytics, monitoring, quality assurance and production deployment.

## Operating principles
- Partner vehicles must not be represented as an owned fleet.
- Customer-facing fares and availability must be supported by approved operational data.
- Do not promise service in a city until partner availability and fulfilment capability have been verified.
- Vendor fulfilment remains human-coordinated through the existing WhatsApp groups in the initial phase.
