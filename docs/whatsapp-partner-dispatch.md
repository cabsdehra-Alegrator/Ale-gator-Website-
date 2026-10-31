# WhatsApp Partner Dispatch — Operations Specification

## Purpose
Ale-gator will initially fulfil bookings through the existing route-based vendor WhatsApp groups. Staff remain in control of dispatch and allocation. There is no vendor login or vendor app in phase one.

## Workflow
1. Capture a customer enquiry in the admin inbox.
2. Verify route, dates, time, passengers, luggage, trip type and vehicle requirements.
3. Confirm the customer-facing quote using approved pricing and operating rules.
4. Generate a duty post from the booking record.
5. Staff manually shares the post to the appropriate regional/route WhatsApp group.
6. Staff reviews vendor replies and verifies the offered vehicle, operator, availability and commercial terms.
7. Staff assigns one vendor to the booking and records the allocation.
8. Confirm the booking with the customer only after a suitable vendor has accepted and the fare is agreed.
9. Send assigned driver and vehicle details to the customer through the approved channel.
10. Track trip completion, payment and vendor settlement.

## Suggested booking statuses
- New enquiry
- Details verified
- Quote shared
- Awaiting vendor
- Vendor selected
- Customer confirmation pending
- Booking confirmed
- Driver details shared
- Trip in progress
- Completed
- Cancelled

## WhatsApp Duty Desk (admin feature)
The admin dashboard should:
- Build a route- and vehicle-specific duty message from the booking.
- Let staff select the relevant existing WhatsApp group/region.
- Provide copy/share actions for manual posting.
- Record when and where the duty was posted.
- Capture vendor replies and quoted operational amounts.
- Store the selected vendor, driver, vehicle and confirmation time.
- Preserve an audit trail of edits and allocation changes.

The first release should not claim automatic posting into WhatsApp groups. Manual share/post by an authorized staff member is the intended workflow.

## Duty message template
CAB REQUIRED

Route: [Pickup] → [Drop]
Date: [Travel date]
Reporting Time: [Time]
Trip Type: [One-way / Round trip / Airport / Multi-day]
Vehicle: [Vehicle category]
Passengers: [Count]
Luggage: [Requirement, if relevant]
Duty Amount: [Approved vendor amount / quote request]
Special Notes: [Route or operational notes]

Please respond with vehicle availability, vehicle number, driver details and final operational quote.

## Privacy and control
- Do not post guest phone numbers or unnecessary personal details in a large vendor group.
- Share customer contact details only with the selected vendor when operationally necessary.
- Keep customer fare and vendor payout as separate fields.
- Do not confirm customer booking merely because a vendor has replied; staff must verify suitability and record allocation.
- Do not show live vehicle availability or guaranteed service coverage without verified partner confirmation.
