"use client";

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

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!pickup.trim() || !drop.trim() || !date) {
      setMessage("Please enter your pickup, destination and travel date.");
      return;
    }
    setMessage(`Enquiry preview: ${trip} · ${pickup} to ${drop} · ${date}${time ? ` at ${time}` : ""} · ${passengers} passengers · ${vehicle}. This is not submitted or saved yet; the operations enquiry system will be enabled with the new backend.`);
  }

  return <main>
    <div className="topline">INTERCITY · AIRPORT · OUTSTATION <span>Travel, connected.</span></div>
    <header className="nav wrap">
      <a className="brand" href="#"><span className="mark">A</span><span>ALE-GATOR<small>YOUR JOURNEY NETWORK</small></span></a>
      <nav><a href="/locations">States & cities</a><a href="#routes">Popular routes</a><a href="#process">How it works</a><a href="#partners">For partners</a></nav>
      <a className="navbutton" href="#plan">Plan a journey ↗</a>
    </header>

    <section className="hero">
      <div className="wrap heroGrid">
        <div className="intro">
          <div className="eyebrow"><i/> A BETTER WAY TO GET THERE</div>
          <h1>North India,<br/><em>connected by road.</em></h1>
          <p>Plan intercity, airport and outstation journeys through a growing network of local cab partners across North India.</p>
          <div className="promises"><span>✓ Routes across key North Indian regions</span><span>✓ Local travel partner network</span><span>✓ Fare and vehicle confirmed before booking</span></div>
          <small className="disclaimer">Vehicle availability and final fare are confirmed by the operations team before a booking is accepted.</small>
        </div>

        <form className="booking" id="plan" onSubmit={submit}>
          <div className="formTop"><div><label>LET'S PLAN YOUR RIDE</label><h2>Where are you headed?</h2></div><b>01 <small>/ 02</small></b></div>
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
          <button className="submit" type="submit">Review journey details <span>↗</span></button>
          {message&&<p className="message" role="status">{message}</p>}
          <small className="fineprint">Enquiry preview only. No fare is estimated and no booking is confirmed at this stage.</small>
        </form>
      </div>
      <div className="wrap heroFoot"><span>DISCOVER</span><i/><span>CONFIRM</span><i/><span>TRAVEL</span></div>
    </section>

    <section className="assurance"><div className="wrap assuranceGrid"><div><b>Travel, without the guesswork.</b><small>A clear process from enquiry to drop-off.</small></div><div><strong>01</strong><span>Thoughtful vehicle matching</span></div><div><strong>02</strong><span>Local operator network</span></div><div><strong>03</strong><span>Coordinated trip support</span></div></div></section>

    <section className="coverage"><div className="wrap coverageInner"><div><label>NORTH INDIA NETWORK</label><h2>One region. Many routes.</h2><p>Our rollout is designed to connect major cities, hill destinations and intercity corridors across the North.</p></div><div className="regionList"><a href="/locations/delhi-ncr">Delhi NCR</a><a href="/locations/uttarakhand">Uttarakhand</a><a href="/locations/uttar-pradesh">Uttar Pradesh</a><a href="/locations/haryana">Haryana</a><a href="/locations/punjab">Punjab</a><a href="/locations/chandigarh">Chandigarh</a><a href="/locations/himachal-pradesh">Himachal Pradesh</a><a href="/locations/rajasthan">Rajasthan</a><a href="/locations/jammu-kashmir">Jammu & Kashmir</a><a href="/locations/ladakh">Ladakh</a></div><small className="coverageNote">Coverage is being built corridor by corridor. A trip is accepted only after local partner availability and route feasibility are confirmed.</small><a className="coverageExplore" href="/locations">Browse all states & cities ↗</a></div></section>

    <section className="section wrap" id="routes"><div className="sectionHead"><div><label>NORTH INDIA ROUTES</label><h2>Journeys across the North.</h2><p>Explore example corridors and share your travel details for confirmation.</p></div><a href="#plan">Plan another route ↗</a></div><div className="routeGrid">{routes.map(([a,b,c])=><button key={a+b} onClick={()=>{setPickup(a);setDrop(b);window.scrollTo({top:0,behavior:"smooth"});}}><small>{c}</small><b>{a} <i>→</i> {b}</b><span>Check journey details ↗</span></button>)}</div><p className="note">Routes and distances are indicative. Final routing, availability and fare are subject to confirmation.</p></section>

    <section className="process" id="process"><div className="wrap processGrid"><div><label>HOW IT WORKS</label><h2>Three steps.<br/>One smoother journey.</h2><p>Every enquiry is reviewed by our operations team before a trip is confirmed.</p></div><div className="steps"><article><b>01</b><div><h3>Share your journey</h3><p>Enter your pickup, destination, date, timing and vehicle requirements.</p></div></article><article><b>02</b><div><h3>We coordinate local availability</h3><p>Our operations team checks suitable vehicles with trusted local travel partners for your route.</p></div></article><article><b>03</b><div><h3>Confirm and travel</h3><p>Your trip is confirmed after a suitable operator and vehicle have been allocated and the fare is agreed.</p></div></article></div></div></section>

    <section className="partner" id="partners"><div className="wrap partnerInner"><div><label>LOCAL PARTNER NETWORK</label><h2>Local operators. Central coordination.</h2><p>Our operations team coordinates each booking with route-relevant local partners and confirms the assigned vehicle before the trip.</p></div><a href="#plan">Plan a journey ↗</a></div></section>
    <footer><div className="wrap footer"><a className="brand" href="#"><span className="mark">A</span><span>ALE-GATOR<small>YOUR JOURNEY NETWORK</small></span></a><p>Connecting customers with local cab operators for intercity, airport and outstation journeys across North India.</p><small>© {new Date().getFullYear()} Ale-gator. Availability and fares are subject to confirmation.</small></div></footer>
  </main>;
}
