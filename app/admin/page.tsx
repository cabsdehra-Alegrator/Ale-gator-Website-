"use client";

import { useMemo, useState } from "react";

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

  async function copyDuty() {
    try {
      await navigator.clipboard.writeText(duty);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return <main className="adminShell">
    <aside className="adminSide">
      <a className="brand adminBrand" href="/"><span className="mark">A</span><span>ALE-GATOR<small>OPERATIONS</small></span></a>
      <p className="sideLabel">WORKSPACE</p>
      <a className="sideActive" href="/admin">▦ &nbsp; Overview</a>
      <a href="#duty">▤ &nbsp; WhatsApp Duty Desk</a>
      <a href="#workflow">↗ &nbsp; Booking workflow</a>
      <div className="sideNote"><b>Phase 1 operations</b><span>Vendor coordination remains manual through your existing WhatsApp groups.</span></div>
      <a className="backHome" href="/">← Back to website</a>
    </aside>
    <section className="adminMain">
      <header className="adminHeader"><div><span className="adminEyebrow">ALE-GATOR / OPERATIONS</span><h1>Operations workspace</h1><p>Prepare route duties and coordinate partner fulfilment.</p></div><span className="demoTag">UI PREVIEW · NO LIVE DATA</span></header>
      <div className="adminStats"><article><small>NEW ENQUIRIES</small><b>—</b><span>Awaiting backend connection</span></article><article><small>AWAITING VENDOR</small><b>—</b><span>Manual group coordination</span></article><article><small>CONFIRMED TRIPS</small><b>—</b><span>Live records not connected</span></article><article><small>PARTNER GROUPS</small><b>Existing</b><span>Managed by your operations team</span></article></div>
      <div className="adminColumns">
        <section className="adminPanel" id="duty">
          <div className="panelHeading"><div><span className="adminEyebrow">MANUAL DISPATCH</span><h2>WhatsApp Duty Desk</h2><p>Fill the duty details, generate the message and share it with the relevant group manually.</p></div><span className="stepBadge">01 / 02</span></div>
          <div className="adminForm">
            <label>BOOKING / DUTY REFERENCE<input value={reference} onChange={e=>setReference(e.target.value)} placeholder="e.g. AG-1024"/></label>
            <div className="adminTwo"><label>PICKUP LOCATION<input value={pickup} onChange={e=>setPickup(e.target.value)} placeholder="City / pickup point"/></label><label>DROP LOCATION<input value={drop} onChange={e=>setDrop(e.target.value)} placeholder="Destination"/></label></div>
            <div className="adminTwo"><label>TRAVEL DATE<input type="date" value={date} onChange={e=>setDate(e.target.value)}/></label><label>REPORTING TIME<input type="time" value={time} onChange={e=>setTime(e.target.value)}/></label></div>
            <div className="adminTwo"><label>TRIP TYPE<select value={trip} onChange={e=>setTrip(e.target.value)}><option>One-way</option><option>Round trip</option><option>Airport transfer</option><option>Multi-day</option></select></label><label>VEHICLE CATEGORY<select value={vehicle} onChange={e=>setVehicle(e.target.value)}><option>Sedan</option><option>Ertiga / SUV</option><option>Innova Crysta</option><option>Tempo Traveller</option><option>Any suitable vehicle</option></select></label></div>
            <div className="adminTwo"><label>PASSENGERS<select value={passengers} onChange={e=>setPassengers(e.target.value)}><option>1-4</option><option>5-6</option><option>7</option><option>8-12</option><option>13-17</option><option>18+</option></select></label><label>WHATSAPP GROUP / REGION<select value={group} onChange={e=>setGroup(e.target.value)}><option>Delhi NCR / Uttarakhand</option><option>Uttarakhand local</option><option>Himachal / Chandigarh</option><option>Punjab</option><option>Uttar Pradesh</option><option>Rajasthan</option><option>Jammu & Kashmir</option><option>Other / select manually</option></select></label></div>
            <label>ROUTE / DUTY NOTES<textarea value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Luggage, hill route, return details or other operational requirements"/></label>
          </div>
          <div className="adminActions"><button className="adminPrimary" onClick={copyDuty}> {copied ? "Copied duty message ✓" : "Copy duty message"} </button><span>Then open the selected WhatsApp group and paste manually.</span></div>
          <div className="privacyHint">Privacy reminder: do not include the guest's phone number or personal details in the group duty post. Share those only with the selected operator when needed.</div>
        </section>
        <aside className="adminPanel previewPanel">
          <div className="panelHeading"><div><span className="adminEyebrow">MESSAGE PREVIEW</span><h2>Vendor duty post</h2><p>Review before sharing.</p></div></div>
          <pre className="dutyPreview">{duty}</pre>
          <div className="groupTarget"><small>SELECTED GROUP</small><b>{group}</b><span>Manual WhatsApp posting · no automatic group access</span></div>
        </aside>
      </div>
      <section className="adminPanel workflowPanel" id="workflow"><div className="panelHeading"><div><span className="adminEyebrow">BOOKING CONTROL</span><h2>Operations workflow</h2><p>Suggested stages for the central team to track each booking.</p></div></div><div className="workflowSteps">{["New enquiry","Details verified","Quote shared","Awaiting vendor","Vendor selected","Customer confirmed","Driver details shared","Trip completed"].map((s,i)=><div key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></div>)}</div></section>
      <p className="adminFoot">Prototype only. Login, database storage, staff permissions, booking records and WhatsApp integration are not connected yet.</p>
    </section>
  </main>;
}
