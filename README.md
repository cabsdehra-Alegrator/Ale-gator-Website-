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
The repository currently contains a responsive customer-facing landing page, trip enquiry preview, North India region roadmap and example route shortcuts. The enquiry form is not connected to a backend and does not submit or store bookings yet.

## Next milestones
1. Supabase database, authentication and role-based access.
2. Approved route and vehicle fare engine.
3. Central admin booking dashboard and operations workflow.
4. Partner onboarding, verification and location-wise allocation.
5. Payment gateway and WhatsApp notifications.
6. SEO landing pages for validated North India corridors.
7. Analytics, monitoring, quality assurance and production deployment.

## Operating principles
- Partner vehicles must not be represented as an owned fleet.
- Customer-facing fares and availability must be supported by approved operational data.
- Do not promise service in a city until partner availability and fulfilment capability have been verified.
