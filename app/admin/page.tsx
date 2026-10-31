"use client";

import { useMemo, useState } from "react";

type VendorOffer = {
  id: number;
  vendor: string;
  vehicle: string;
  registration: string;
  driver: string;
  driverPhone: string;
  quote: string;
  note: string;
  status: "Available" | "Unavailable";
};

const stages = [
  "New enquiry",
  "Details verified",
  "Quote shared",
  "Awaiting vendor",
  "Vendor selected",
  "Customer confirmed",
  "Driver details shared",
  "Trip completed",
];

export default function AdminPage() {
  const [pickup,setPickup]=useState("");
  const [drop,setDrop]=useState("");
  const [date,setDate]=useState("");
  const [time,setTime]=useState("");
  const [trip,setTrip]=useState("One-way");
  const [vehicle,setVehicle]=useState("Sedan");
  const [passengers,setPassengers]=useState("1-4");
  const [notes,setNotes]=useState("");
  const [group,setGroup]=useState("Delhi NCR / Uttarakhand");
  const [reference,setReference]=useState("AG-NEW");
  const [copied,setCopied]=useState(false);
  const [stage,setStage]=useState("New enquiry");
  const [customerFare,setCustomerFare]=useState("");
  const [vendorPayout,setVendorPayout]=useState("");
  const [offers,setOffers]=useState<VendorOffer[]>([]);
  const [vendor,setVendor]=useState("");
  const [offerVehicle,setOfferVehicle]=useState("Sedan");
  const [registration,setRegistration]=useState("");
  const [driver,setDriver]=useState("");
  const [driverPhone,setDriverPhone]=useState("");
  const [quote,setQuote]=useState("");
  const [offerNote,setOfferNote]=useState("");
  const [allocatedId,setAllocatedId]=useState<number | null>(null);
  const [notice,setNotice]=useState("");

  const duty=useMemo(()=>[
    "CAB REQUIRED",
    "",
    `Duty Ref: ${reference || "To be assigned"}`,
    `Route: ${pickup || "[Pickup]"} → ${drop || "[Drop]"}`,
    `Date: ${date || "[Travel date]"}`,
    `Reporting Time: ${time || "[Time]"}`,
    `Trip Type: ${trip}`,
    `Vehicle: ${vehicle}`,
    `Passengers: ${passengers}`,
    notes ? `Notes: ${notes}` : "",
    "",
    "Please share vehicle availability, vehicle number, driver details and your final operational quote.",
  ].filter(Boolean).join("\n"),[pickup,drop,date,time,trip,vehicle,passengers,notes,reference]);

  const allocated = offers.find(item => item.id === allocatedId) ?? null;

  async function copyDuty() {
    try {
      await navigator.clipboard.writeText(duty);
      setCopied(true);
    } catch {
      setCopied(false);
      setNotice("Clipboard access was blocked. Select and copy the preview text manually.");
    }
  }

  function addOffer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!vendor.trim() || !quote.trim()) {
      setNotice("Enter at least the vendor name and their operational quote.");
      return;
    }
    const item: VendorOffer = {
      id: Date.now(),
      vendor: vendor.trim(),
      vehicle: offerVehicle,
      registration: registration.trim(),
      driver: driver.trim(),
      driverPhone: driverPhone.trim(),
      quote: quote.trim(),
      note: offerNote.trim(),
      status: "Available",
    };
    setOffers(current => [...current, item]);
    setVendor("");
    setRegistration("");
    setDriver("");
    setDriverPhone("");
    setQuote("");
    setOfferNote("");
    setNotice("Vendor offer added to this temporary preview.");
  }

  function allocateOffer(id: number) {
    setAllocatedId(id);
    setStage("Vendor selected");
    setNotice("Vendor selected in this preview. This is not a confirmed allocation or a saved booking.");
  }

  return <main className="adminShell">
    <aside className="adminSide">
      <a className="brand adminBrand" href="/"><span className="mark">A</span><span>ALE-GATOR<small>OPERATIONS</small></span></a>
      <p className="sideLabel">WORKSPACE</p>
      <a className="sideActive" href="/admin">▦ &nbsp; Overview</a>
      <a href="#duty">▤ &nbsp; WhatsApp Duty Desk</a>
      <a href="#offers">▣ &nbsp; Vendor offers</a>
      <a href="#fare">₹ &nbsp; Fare & allocation</a>
      <a href="#workflow">↗ &nbsp; Booking workflow</a>
      <div className="sideNote"><b>Phase 1 operations</b><span>Vendor coordination remains manual through your existing WhatsApp groups.</span></div>
      <a className="backHome" href="/">← Back to website</a>
    </aside>
    <section className="adminMain">
      <header className="adminHeader"><div><span className="adminEyebrow">ALE-GATOR / OPERATIONS</span><h1>Operations workspace</h1><p>Prepare route duties, compare partner offers and manage a booking preview.</p></div><span className="demoTag">UI PREVIEW · NO LIVE DATA</span></header>
      <div className="adminStats"><article><small>NEW ENQUIRIES</small><b>—</b><span>Awaiting backend connection</span></article><article><small>VENDOR OFFERS</small><b>{offers.length}</b><span>Current preview only</span></article><article><small>ALLOCATED VENDOR</small><b>{allocated ? "1" : "—"}</b><span>{allocated ? "Selected in this session" : "Not selected"}</span></article><article><small>BOOKING STATUS</small><b>{stage}</b><span>Temporary interface state</span></article></div>

      <section className="adminPanel bookingControl">
        <div className="panelHeading"><div><span className="adminEyebrow">BOOKING WORKSPACE</span><h2>Trip and booking details</h2><p>Enter or review the trip before dispatching it to relevant local partners.</p></div><span className="stepBadge">01 / 03</span></div>
        <div className="adminForm">
          <label>BOOKING / DUTY REFERENCE<input value={reference} onChange={e=>setReference(e.target.value)} placeholder="e.g. AG-1024"/></label>
          <div className="adminTwo"><label>PICKUP LOCATION<input value={pickup} onChange={e=>setPickup(e.target.value)} placeholder="City / pickup point"/></label><label>DROP LOCATION<input value={drop} onChange={e=>setDrop(e.target.value)} placeholder="Destination"/></label></div>
          <div className="adminTwo"><label>TRAVEL DATE<input type="date" value={date} onChange={e=>setDate(e.target.value)}/></label><label>REPORTING TIME<input type="time" value={time} onChange={e=>setTime(e.target.value)}/></label></div>
          <div className="adminTwo"><label>TRIP TYPE<select value={trip} onChange={e=>setTrip(e.target.value)}><option>One-way</option><option>Round trip</option><option>Airport transfer</option><option>Multi-day</option></select></label><label>VEHICLE CATEGORY<select value={vehicle} onChange={e=>setVehicle(e.target.value)}><option>Sedan</option><option>Ertiga / SUV</option><option>Innova Crysta</option><option>Tempo Traveller</option><option>Any suitable vehicle</option></select></label></div>
          <div className="adminTwo"><label>PASSENGERS<select value={passengers} onChange={e=>setPassengers(e.target.value)}><option>1-4</option><option>5-6</option><option>7</option><option>8-12</option><option>13-17</option><option>18+</option></select></label><label>WHATSAPP GROUP / REGION<select value={group} onChange={e=>setGroup(e.target.value)}><option>Delhi NCR / Uttarakhand</option><option>Uttarakhand local</option><option>Himachal / Chandigarh</option><option>Punjab</option><option>Uttar Pradesh</option><option>Rajasthan</option><option>Jammu & Kashmir</option><option>Other / select manually</option></select></label></div>
          <label>ROUTE / DUTY NOTES<textarea value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Luggage, hill route, return details or other operational requirements"/></label>
        </div>
      </section>

      <div className="adminColumns adminDispatchGrid">
        <section className="adminPanel" id="duty">
          <div className="panelHeading"><div><span className="adminEyebrow">MANUAL DISPATCH</span><h2>WhatsApp Duty Desk</h2><p>Generate a vendor-facing duty post. Customer fare and vendor payout are deliberately excluded.</p></div><span className="stepBadge">02 / 03</span></div>
          <div className="adminActions"><button className="adminPrimary" onClick={copyDuty}>{copied ? "Copied duty message ✓" : "Copy duty message"}</button><span>Open the selected WhatsApp group and paste manually.</span></div>
          <div className="privacyHint">Privacy: never post the guest's phone number, customer fare or other personal details in a broad vendor group. Share necessary contact details only with the selected operator.</div>
        </section>
        <aside className="adminPanel previewPanel">
          <div className="panelHeading"><div><span className="adminEyebrow">MESSAGE PREVIEW</span><h2>Vendor duty post</h2><p>Review before sharing.</p></div></div>
          <pre className="dutyPreview">{duty}</pre>
          <div className="groupTarget"><small>SELECTED GROUP</small><b>{group}</b><span>Manual WhatsApp posting · no automatic group access</span></div>
        </aside>
      </div>

      <section className="adminPanel workflowPanel" id="offers">
        <div className="panelHeading"><div><span className="adminEyebrow">PARTNER RESPONSE TRACKER</span><h2>Vendor offers</h2><p>Manually record replies received in WhatsApp. Compare operational quotes and vehicle details.</p></div><span className="stepBadge">{offers.length} OFFERS</span></div>
        <form className="adminForm" onSubmit={addOffer}>
          <div className="adminTwo"><label>VENDOR / OPERATOR NAME<input value={vendor} onChange={e=>setVendor(e.target.value)} placeholder="Partner name" required/></label><label>VENDOR QUOTE (₹)<input value={quote} onChange={e=>setQuote(e.target.value)} placeholder="Amount quoted by partner" inputMode="decimal" required/></label></div>
          <div className="adminTwo"><label>OFFERED VEHICLE<select value={offerVehicle} onChange={e=>setOfferVehicle(e.target.value)}><option>Sedan</option><option>Ertiga / SUV</option><option>Innova Crysta</option><option>Tempo Traveller</option><option>Other</option></select></label><label>VEHICLE REGISTRATION<input value={registration} onChange={e=>setRegistration(e.target.value)} placeholder="Registration number (if shared)"/></label></div>
          <div className="adminTwo"><label>DRIVER NAME<input value={driver} onChange={e=>setDriver(e.target.value)} placeholder="Driver name (if shared)"/></label><label>DRIVER PHONE<input value={driverPhone} onChange={e=>setDriverPhone(e.target.value)} placeholder="Keep private; do not post in group" inputMode="tel"/></label></div>
          <label>OFFER NOTES<input value={offerNote} onChange={e=>setOfferNote(e.target.value)} placeholder="Availability, inclusions, conditions or notes"/></label>
          <div className="adminActions"><button className="adminPrimary" type="submit">Add vendor offer</button><span>Manual entry only. Replies are not fetched from WhatsApp.</span></div>
        </form>
        {offers.length === 0 ? <div className="emptyState">No vendor replies recorded yet. Add an offer after receiving a response from a partner.</div> : <div className="offerList">{offers.map(item=><article className={allocatedId===item.id?"offerCard offerSelected":"offerCard"} key={item.id}><div className="offerTop"><div><b>{item.vendor}</b><span>{item.vehicle} · {item.registration || "Registration pending"}</span></div><strong>₹{item.quote}</strong></div><div className="offerDetails"><span>Driver: {item.driver || "Not shared"}</span><span>Phone: {item.driverPhone || "Not shared"}</span><span>{item.note || "No additional notes"}</span></div><div className="offerActions">{allocatedId===item.id?<span className="allocatedTag">Selected vendor</span>:<button className="adminSecondary" type="button" onClick={()=>allocateOffer(item.id)}>Select this vendor</button>}<button className="textAction" type="button" onClick={()=>{setOffers(current=>current.filter(x=>x.id!==item.id));if(allocatedId===item.id){setAllocatedId(null);setStage("Awaiting vendor");}}}>Remove</button></div></article>)}</div>}
      </section>

      <section className="adminPanel workflowPanel" id="fare">
        <div className="panelHeading"><div><span className="adminEyebrow">COMMERCIAL CONTROL</span><h2>Fare and vendor allocation</h2><p>Keep the customer selling fare separate from the partner's operational payout.</p></div></div>
        <div className="adminTwo fareFields"><label>CUSTOMER FARE (₹)<input value={customerFare} onChange={e=>setCustomerFare(e.target.value)} inputMode="decimal" placeholder="Approved fare shared with customer"/></label><label>VENDOR PAYOUT (₹)<input value={vendorPayout} onChange={e=>setVendorPayout(e.target.value)} inputMode="decimal" placeholder="Agreed amount payable to selected vendor"/></label></div>
        <div className="fareSummary"><div><small>CUSTOMER FARE</small><b>{customerFare ? `₹${customerFare}` : "Not entered"}</b></div><div><small>VENDOR PAYOUT</small><b>{vendorPayout ? `₹${vendorPayout}` : "Not entered"}</b></div><div><small>ESTIMATED DIFFERENCE</small><b>{customerFare.trim() && vendorPayout.trim() && Number.isFinite(Number(customerFare)) && Number.isFinite(Number(vendorPayout)) ? `₹${(Number(customerFare)-Number(vendorPayout)).toLocaleString("en-IN")}` : "—"}</b><span>Before other costs / adjustments</span></div></div>
        <div className="allocationSummary"><span>SELECTED PARTNER</span><b>{allocated ? allocated.vendor : "No vendor selected"}</b><span>Partner quote: {allocated ? `₹${allocated.quote}` : "—"}</span><span>Vehicle: {allocated ? allocated.vehicle : "—"}</span></div>
        <div className="privacyHint">Do not share the customer fare with vendors by default. Confirm vendor payout separately with the selected partner. The difference shown is not a verified profit figure.</div>
      </section>

      <section className="adminPanel workflowPanel" id="workflow">
        <div className="panelHeading"><div><span className="adminEyebrow">BOOKING CONTROL</span><h2>Booking workflow</h2><p>Move the preview through the operational stages only when each step is completed.</p></div></div>
        <label className="stagePicker">CURRENT BOOKING STAGE<select value={stage} onChange={e=>setStage(e.target.value)}>{stages.map(item=><option key={item}>{item}</option>)}</select></label>
        <div className="workflowSteps">{stages.map((s,i)=><div className={stage===s?"workflowCurrent":""} key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></div>)}</div>
        <div className="confirmationRule">Confirmation rule: do not mark a trip as confirmed until the selected vendor has accepted the duty, the vehicle and payout are agreed, and the customer has accepted the fare.</div>
      </section>
      {notice && <p className="adminNotice" role="status">{notice}</p>}
      <p className="adminFoot">Prototype only. This page does not save records between visits. Login, database persistence, staff permissions, real booking records and WhatsApp integration are not connected. Keep driver contact details private.</p>
    </section>
  </main>;
}
