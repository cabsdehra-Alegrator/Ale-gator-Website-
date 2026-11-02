"use client";

import Link from "next/link";
import { useState } from "react";

const routes = [
  ["Delhi NCR", "Dehradun", "Uttarakhand corridor"],
  ["Delhi", "Jaipur", "Rajasthan corridor"],
  ["Chandigarh", "Shimla", "Himachal corridor"],
  ["Delhi", "Amritsar", "Punjab corridor"],
  ["Lucknow", "Agra", "Uttar Pradesh corridor"],
  ["Delhi", "Srinagar", "Jammu & Kashmir corridor"],
];

export default function Home() {
  const [trip, setTrip] = useState("One way");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState("1-4");
  const [vehicle, setVehicle] = useState("Any suitable vehicle");
  const [luggage, setLuggage] = useState("Standard luggage");
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!pickup.trim() || !drop.trim() || !date) {
      setMessage("Please enter your pickup, destination and travel date.");
      return;
    }
    setMessage(`Enquiry preview: ${trip} · ${pickup} to ${drop} · ${date}${time ? ` at ${time}` : ""} · ${passengers} passengers · ${vehicle}. This is not submitted or saved yet; the operations enquiry system will be enabled with the new backend.`);
  }

  return <main>
    <div className="topline"><span>✦ &nbsp; A simpler way to book road travel</span><span>For travellers and mobility partners ↗</span></div>
    <header className="nav wrap">
      <a className="brand" href="#"><span className="mark">A</span><span>ALE-GATOR<small>YOUR JOURNEY NETWORK</small></span></a>
      <nav className={mobileOpen ? "navLinks navLinksOpen" : "navLinks"} onClick={()=>setMobileOpen(false)}><Link href="/locations">Explore destinations</Link><Link href="/plan-your-tour">Build your tour</Link><a href="#routes">Popular routes</a><a href="#process">How it works</a><a href="#partners">Partner network</a></nav>
      <div className="navActions"><a className="partnerLink" href="#partners">For partners ↗</a><a className="navbutton" href="#plan">Get a quote <span>→</span></a><button className="menuToggle" type="button" aria-label="Toggle navigation" aria-expanded={mobileOpen} onClick={()=>setMobileOpen(!mobileOpen)}>{mobileOpen ? "×" : "☰"}</button></div>
    </header>

    <section className="hero">
      <div className="wrap heroGrid">
        <div className="intro">
          <div className="eyebrow"><i/> THE ROAD, MADE SIMPLE</div>
          <h1>Go further.<br/><em>Worry less.</em></h1>
          <p>Your next road journey, coordinated end to end. One booking experience backed by a network of local travel partners.</p>
          <div className="promises"><span>One point of coordination</span><span>From the first quote to trip completion</span><span>Built around clear quotes, partner checks and responsive support</span></div>
          <small className="disclaimer">Designed for the way India travels — intercity, airport, hourly and outstation journeys.</small>
        </div>

        <div className="bookingStage"><div className="routeIllustration" aria-hidden="true"><div className="mapLabel mapLabelOne">✦ &nbsp; One booking. One team.</div><div className="mapPin mapPinStart">●</div><div className="mapPin mapPinEnd">●</div><div className="mapCar">↗</div><div className="mapLabel mapLabelTwo">↗ &nbsp; Road trips, coordinated.</div><svg viewBox="0 0 560 210" preserveAspectRatio="none"><path d="M-10 150 C70 90 105 170 180 118 S310 52 365 95 S455 148 575 55" /><path d="M-10 185 C90 145 140 200 230 152 S390 88 570 140" /></svg></div><form className="booking" id="plan" onSubmit={submit}>
          <div className="formTop"><div><label>01 / YOUR JOURNEY</label><h2>Where are we going?</h2></div><b className="formIcon">↗</b></div>
          <div className="tabs">{["One way","Round trip","Airport"].map(x=><button type="button" className={trip===x?"selected":""} onClick={()=>setTrip(x)} key={x}>{x}</button>)}</div>
          <label className="inputLabel">PICKUP LOCATION<input value={pickup} onChange={e=>setPickup(e.target.value)} placeholder="Enter city or pickup address"/></label>
          <label className="inputLabel">DROP LOCATION<input value={drop} onChange={e=>setDrop(e.target.value)} placeholder="Where would you like to go?"/></label>
          <div className="two">
            <label className="inputLabel">TRAVEL DATE<input type="date" value={date} onChange={e=>setDate(e.target.value)} required/></label>
            <label className="inputLabel">REPORTING TIME<input type="time" value={time} onChange={e=>setTime(e.target.value)}/></label>
          </div>
          <div className="two">
            <label className="inputLabel">PASSENGERS<select value={passengers} onChange={e=>setPassengers(e.target.value)}><option>1-4</option><option>5-6</option><option>7</option><option>8-12</option><option>13-17</option><option>18+</option></select></label>
            <label className="inputLabel">VEHICLE<select value={vehicle} onChange={e=>setVehicle(e.target.value)}><option>Any suitable vehicle</option><option>Sedan</option><option>Ertiga / SUV</option><option>Innova Crysta / similar</option><option>Tempo Traveller</option></select></label>
          </div>
          <label className="inputLabel">LUGGAGE<select value={luggage} onChange={e=>setLuggage(e.target.value)}><option>Standard luggage</option><option>Light luggage</option><option>Extra / bulky luggage</option></select></label>
          <label className="inputLabel">ADDITIONAL REQUIREMENTS <input value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Flight / train details, return date, child seat, etc. (optional)"/></label>
          <button className="submit" type="submit">Get my trip quote <span>→</span></button>
          {message&&<p className="message" role="status">{message}</p>}
          <small className="fineprint">Enquiry preview only. No fare is estimated and no booking is confirmed at this stage.</small>
        </form></div>
      </div>
      <div className="wrap heroFoot"><span>DESIGNED FOR THE WAY INDIA TRAVELS</span><i/><span>OUTSTATION · AIRPORT · HOURLY · TOURS</span></div>
    </section>

    <section className="assurance"><div className="wrap assuranceGrid"><div><b>Travel, without the guesswork.</b><small>A clear process from enquiry to drop-off.</small></div><div><strong>01</strong><span>Thoughtful vehicle matching</span></div><div><strong>02</strong><span>Local operator network</span></div><div><strong>03</strong><span>Coordinated trip support</span></div></div></section>

    <section className="coverage"><div className="wrap coverageInner"><div><label>NORTH INDIA NETWORK</label><h2>One region. Many routes.</h2><p>Our rollout is designed to connect major cities, hill destinations and intercity corridors across the North.</p></div><div className="regionList"><Link href="/locations/delhi-ncr">Delhi NCR</Link><Link href="/locations/uttarakhand">Uttarakhand</Link><Link href="/locations/uttar-pradesh">Uttar Pradesh</Link><Link href="/locations/haryana">Haryana</Link><Link href="/locations/punjab">Punjab</Link><Link href="/locations/chandigarh">Chandigarh</Link><Link href="/locations/himachal-pradesh">Himachal Pradesh</Link><Link href="/locations/rajasthan">Rajasthan</Link><Link href="/locations/jammu-kashmir">Jammu & Kashmir</Link><Link href="/locations/ladakh">Ladakh</Link></div><small className="coverageNote">Coverage is being built corridor by corridor. A trip is accepted only after local partner availability and route feasibility are confirmed.</small><Link className="coverageExplore" href="/locations">Browse all states & cities ↗</Link><Link className="coverageExplore" href="/plan-your-tour">Build your North India tour ↗</Link></div></section>

    <section className="section wrap" id="routes"><div className="sectionHead"><div><label>NORTH INDIA ROUTES</label><h2>Journeys across the North.</h2><p>Explore example corridors and share your travel details for confirmation.</p></div><a href="#plan">Plan another route ↗</a></div><div className="routeGrid">{routes.map(([a,b,c])=><button key={a+b} onClick={()=>{setPickup(a);setDrop(b);window.scrollTo({top:0,behavior:"smooth"});}}><small>{c}</small><b>{a} <i>→</i> {b}</b><span>Check journey details ↗</span></button>)}</div><p className="note">Routes and distances are indicative. Final routing, availability and fare are subject to confirmation.</p></section>

    <section className="process" id="process"><div className="wrap processGrid"><div><label>HOW IT WORKS</label><h2>Three steps.<br/>One smoother journey.</h2><p>Every enquiry is reviewed by our operations team before a trip is confirmed.</p></div><div className="steps"><article><b>01</b><div><h3>Share your journey</h3><p>Enter your pickup, destination, date, timing and vehicle requirements.</p></div></article><article><b>02</b><div><h3>We coordinate local availability</h3><p>Our operations team checks suitable vehicles with trusted local travel partners for your route.</p></div></article><article><b>03</b><div><h3>Confirm and travel</h3><p>Your trip is confirmed after a suitable operator and vehicle have been allocated and the fare is agreed.</p></div></article></div></div></section>

    <section className="partner" id="partners"><div className="wrap partnerInner"><div><label>LOCAL PARTNER NETWORK</label><h2>Local operators. Central coordination.</h2><p>Our operations team coordinates each booking with route-relevant local partners and confirms the assigned vehicle before the trip.</p></div><a href="#plan">Plan a journey ↗</a></div></section>
    <footer><div className="wrap footer"><a className="brand" href="#"><span className="mark">A</span><span>ALE-GATOR<small>YOUR JOURNEY NETWORK</small></span></a><p>Connecting customers with local cab operators for intercity, airport and outstation journeys across North India.</p><small>© {new Date().getFullYear()} Ale-gator. Availability and fares are subject to confirmation.</small></div></footer>
  </main>;
}
