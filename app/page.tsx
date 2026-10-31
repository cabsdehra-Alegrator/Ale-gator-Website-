"use client";

import { useState } from "react";

const routes = [
  ["Delhi", "Dehradun", "Popular intercity route"],
  ["Delhi", "Rishikesh", "Outstation journey"],
  ["Dehradun", "Mussoorie", "Hill transfer"],
  ["Delhi", "Nainital", "Weekend getaway"],
  ["Haridwar", "Chopta", "Uttarakhand journey"],
  ["Chandigarh", "Dehradun", "Intercity transfer"],
];

export default function Home() {
  const [trip, setTrip] = useState("One way");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [vehicle, setVehicle] = useState("Any suitable vehicle");
  const [message, setMessage] = useState("");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!pickup.trim() || !drop.trim() || !date) {
      setMessage("Please enter your pickup, destination and travel date.");
      return;
    }
    setMessage("Preview only: live fare checks and booking requests will be enabled after the operations backend is connected.");
  }

  return <main>
    <div className="topline">INTERCITY · AIRPORT · OUTSTATION <span>Travel, connected.</span></div>
    <header className="nav wrap">
      <a className="brand" href="#"><span className="mark">A</span><span>ALE-GATOR<small>YOUR JOURNEY NETWORK</small></span></a>
      <nav><a href="#routes">Popular routes</a><a href="#process">How it works</a><a href="#partners">For partners</a></nav>
      <a className="navbutton" href="#plan">Plan a journey ↗</a>
    </header>

    <section className="hero">
      <div className="wrap heroGrid">
        <div className="intro">
          <div className="eyebrow"><i/> A BETTER WAY TO GET THERE</div>
          <h1>Every journey<br/><em>starts with a connection.</em></h1>
          <p>From airport pickups to long-distance road trips, plan your next ride through one connected travel network.</p>
          <div className="promises"><span>✓ Clear trip details</span><span>✓ Local travel partners</span><span>✓ Fare confirmed before booking</span></div>
          <small className="disclaimer">Vehicle availability and final fare are confirmed by the operations team before a booking is accepted.</small>
        </div>

        <form className="booking" id="plan" onSubmit={submit}>
          <div className="formTop"><div><label>LET'S PLAN YOUR RIDE</label><h2>Where are you headed?</h2></div><b>01 <small>/ 02</small></b></div>
          <div className="tabs">{["One way","Round trip","Airport"].map(x=><button type="button" className={trip===x?"selected":""} onClick={()=>setTrip(x)} key={x}>{x}</button>)}</div>
          <label className="inputLabel">PICKUP LOCATION<input value={pickup} onChange={e=>setPickup(e.target.value)} placeholder="Enter city or pickup address"/></label>
          <label className="inputLabel">DROP LOCATION<input value={drop} onChange={e=>setDrop(e.target.value)} placeholder="Where would you like to go?"/></label>
          <div className="two">
            <label className="inputLabel">TRAVEL DATE<input type="date" value={date} onChange={e=>setDate(e.target.value)}/></label>
            <label className="inputLabel">VEHICLE<select value={vehicle} onChange={e=>setVehicle(e.target.value)}><option>Any suitable vehicle</option><option>Sedan</option><option>Ertiga / SUV</option><option>Innova class</option><option>Tempo Traveller</option></select></label>
          </div>
          <button className="submit" type="submit">Explore your ride <span>↗</span></button>
          {message&&<p className="message" role="status">{message}</p>}
          <small className="fineprint">No booking is confirmed until the fare and vehicle are agreed.</small>
        </form>
      </div>
      <div className="wrap heroFoot"><span>DISCOVER</span><i/><span>CONFIRM</span><i/><span>TRAVEL</span></div>
    </section>

    <section className="assurance"><div className="wrap assuranceGrid"><div><b>Travel, without the guesswork.</b><small>A clear process from enquiry to drop-off.</small></div><div><strong>01</strong><span>Thoughtful vehicle matching</span></div><div><strong>02</strong><span>Local operator network</span></div><div><strong>03</strong><span>Coordinated trip support</span></div></div></section>

    <section className="section wrap" id="routes"><div className="sectionHead"><div><label>FIND YOUR ROUTE</label><h2>Popular journeys.</h2><p>Choose a starting point and tell us when you want to travel.</p></div><a href="#plan">Plan another route ↗</a></div><div className="routeGrid">{routes.map(([a,b,c])=><button key={a+b} onClick={()=>{setPickup(a);setDrop(b);window.scrollTo({top:0,behavior:"smooth"});}}><small>{c}</small><b>{a} <i>→</i> {b}</b><span>Check journey details ↗</span></button>)}</div><p className="note">Routes and distances are indicative. Final routing, availability and fare are subject to confirmation.</p></section>

    <section className="process" id="process"><div className="wrap processGrid"><div><label>HOW IT WORKS</label><h2>Three steps.<br/>One smoother journey.</h2><p>We keep the process straightforward, with trip details agreed before confirmation.</p></div><div className="steps"><article><b>01</b><div><h3>Share your journey</h3><p>Enter your pickup, destination, date and vehicle preference.</p></div></article><article><b>02</b><div><h3>Review your proposal</h3><p>Our team checks the route, vehicle suitability and partner availability.</p></div></article><article><b>03</b><div><h3>Confirm and travel</h3><p>Once the details are agreed, the trip is coordinated with the assigned operator.</p></div></article></div></div></section>

    <section className="partner" id="partners"><div className="wrap partnerInner"><div><label>FOR LOCAL CAB OPERATORS</label><h2>Grow with the network.</h2><p>We're building a connected network of verified local travel partners across India.</p></div><a href="mailto:partners@ale-gator.com">Partner enquiries ↗</a></div></section>
    <footer><div className="wrap footer"><a className="brand" href="#"><span className="mark">A</span><span>ALE-GATOR<small>YOUR JOURNEY NETWORK</small></span></a><p>Connecting customers with local cab operators for intercity, airport and outstation travel.</p><small>© {new Date().getFullYear()} Ale-gator. Availability and fares are subject to confirmation.</small></div></footer>
  </main>;
}
