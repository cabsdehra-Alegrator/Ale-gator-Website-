"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import {
  CITY_SEEDS,
  TOUR_INTERESTS,
  TOUR_STYLES,
  type AttractionSeed,
  type CitySeed,
  type TourInterest,
  type TourStyle,
} from "@/lib/tour-builder-data";
import styles from "./tour-builder.module.css";

type TourStop = { cityId: string; nights: number };

type ItineraryActivity = {
  attraction: AttractionSeed;
  city: CitySeed;
};

type ItineraryDay = {
  dayNumber: number;
  dateLabel: string | null;
  city: CitySeed | null;
  transferFrom: string;
  isTransfer: boolean;
  isFinalDay: boolean;
  activities: ItineraryActivity[];
  unscheduled: number;
};

const STEPS = [
  "Destinations",
  "Route & stays",
  "Sightseeing",
  "Preferences",
  "Itinerary",
  "Cab enquiry",
];

const INTEREST_LABELS: Record<TourInterest, string> = {
  Nature: "Nature",
  Heritage: "Heritage",
  Culture: "Culture",
  Adventure: "Adventure",
  Spiritual: "Spiritual",
  Family: "Family",
};

const CATEGORY_LABELS: Record<AttractionSeed["category"], string> = {
  nature: "Nature",
  heritage: "Heritage",
  culture: "Culture",
  adventure: "Adventure",
  spiritual: "Spiritual",
  family: "Family",
  viewpoint: "Viewpoint",
};

function buildItinerary(
  stops: TourStop[],
  selectedAttractions: Record<string, string[]>,
  style: TourStyle,
  startPoint: string,
  travelDate: string,
): ItineraryDay[] {
  const capacity = style === "Relaxed" ? 2 : style === "Balanced" ? 3 : 4;
  const days: ItineraryDay[] = [];
  const startDate = travelDate ? new Date(`${travelDate}T12:00:00`) : null;
  const makeDateLabel = (dayNumber: number) => {
    if (!startDate || Number.isNaN(startDate.getTime())) return null;
    const date = new Date(startDate);
    date.setDate(date.getDate() + dayNumber - 1);
    return date.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });
  };
  let dayNumber = 1;

  stops.forEach((stop, stopIndex) => {
    const city = CITY_SEEDS.find((item) => item.id === stop.cityId);
    if (!city) return;
    const previousCity = stopIndex > 0
      ? CITY_SEEDS.find((item) => item.id === stops[stopIndex - 1].cityId)
      : null;
    const transferFrom = previousCity?.name ?? (stopIndex === 0 ? startPoint.trim() : "");
    const selectedIds = selectedAttractions[city.id] ?? [];
    const selected = city.attractions.filter((item) => selectedIds.includes(item.id));

    for (let nightIndex = 0; nightIndex < stop.nights; nightIndex += 1) {
      const start = nightIndex * capacity;
      const activities = selected.slice(start, start + capacity);
      const unscheduled = nightIndex === stop.nights - 1
        ? Math.max(0, selected.length - (nightIndex + 1) * capacity)
        : 0;

      days.push({
        dayNumber,
        dateLabel: makeDateLabel(dayNumber),
        city,
        transferFrom: nightIndex === 0 ? transferFrom : "",
        isTransfer: nightIndex === 0 && Boolean(transferFrom)
          && transferFrom.toLowerCase() !== city.name.toLowerCase(),
        isFinalDay: false,
        activities: activities.map((attraction) => ({ attraction, city })),
        unscheduled,
      });
      dayNumber += 1;
    }
  });

  const lastCity = stops.length > 0
    ? CITY_SEEDS.find((item) => item.id === stops[stops.length - 1].cityId)
    : null;
  days.push({
    dayNumber,
    dateLabel: makeDateLabel(dayNumber),
    city: null,
    transferFrom: lastCity?.name ?? startPoint,
    isTransfer: true,
    isFinalDay: true,
    activities: [],
    unscheduled: 0,
  });

  return days;
}

export default function PlanYourTourPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All regions");
  const [stops, setStops] = useState<TourStop[]>([]);
  const [attractionSelections, setAttractionSelections] = useState<Record<string, string[]>>({});
  const [startPoint, setStartPoint] = useState("");
  const [finalDrop, setFinalDrop] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [passengers, setPassengers] = useState("2");
  const [style, setStyle] = useState<TourStyle>("Balanced");
  const [interests, setInterests] = useState<TourInterest[]>(["Nature", "Culture"]);
  const [tourTitle, setTourTitle] = useState("My North India Tour");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [vehiclePreference, setVehiclePreference] = useState("Not decided");
  const [enquiryPreview, setEnquiryPreview] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");

  const selectedCities = useMemo(
    () => stops.map((stop) => CITY_SEEDS.find((city) => city.id === stop.cityId)).filter(Boolean) as CitySeed[],
    [stops],
  );
  const totalNights = stops.reduce((sum, stop) => sum + stop.nights, 0);
  const totalDays = totalNights + 1;
  const itinerary = useMemo(
    () => buildItinerary(stops, attractionSelections, style, startPoint, travelDate),
    [stops, attractionSelections, style, startPoint, travelDate],
  );

  const regions = useMemo(
    () => ["All regions", ...Array.from(new Set(CITY_SEEDS.map((city) => city.stateName)))],
    [],
  );
  const filteredCities = CITY_SEEDS.filter((city) => {
    const matchesRegion = region === "All regions" || city.stateName === region;
    const query = search.trim().toLowerCase();
    const matchesQuery = !query
      || city.name.toLowerCase().includes(query)
      || city.stateName.toLowerCase().includes(query)
      || city.summary.toLowerCase().includes(query);
    return matchesRegion && matchesQuery;
  });

  function addCity(city: CitySeed) {
    if (stops.some((stop) => stop.cityId === city.id)) return;
    setStops((current) => [...current, { cityId: city.id, nights: city.suggestedNights }]);
    setAttractionSelections((current) => ({ ...current, [city.id]: current[city.id] ?? [] }));
    if (!startPoint) setStartPoint(city.name);
    setFinalDrop(city.name);
  }

  function removeCity(cityId: string) {
    setStops((current) => current.filter((stop) => stop.cityId !== cityId));
    setAttractionSelections((current) => {
      const next = { ...current };
      delete next[cityId];
      return next;
    });
  }

  function moveStop(index: number, direction: -1 | 1) {
    setStops((current) => {
      const next = [...current];
      const target = index + direction;
      if (target < 0 || target >= next.length) return current;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  function updateNights(cityId: string, delta: number) {
    setStops((current) => current.map((stop) => (
      stop.cityId === cityId
        ? { ...stop, nights: Math.max(1, Math.min(14, stop.nights + delta)) }
        : stop
    )));
  }

  function toggleAttraction(cityId: string, attractionId: string) {
    setAttractionSelections((current) => {
      const selected = current[cityId] ?? [];
      const next = selected.includes(attractionId)
        ? selected.filter((id) => id !== attractionId)
        : [...selected, attractionId];
      return { ...current, [cityId]: next };
    });
  }

  function toggleInterest(interest: TourInterest) {
    setInterests((current) => current.includes(interest)
      ? current.filter((item) => item !== interest)
      : [...current, interest]);
  }

  function goNext() {
    if (activeStep === 0 && stops.length === 0) return;
    if (activeStep === 1 && stops.length === 0) return;
    setActiveStep((current) => Math.min(STEPS.length - 1, current + 1));
    setEnquiryPreview(false);
  }

  function goBack() {
    setActiveStep((current) => Math.max(0, current - 1));
    setEnquiryPreview(false);
  }

  function planText() {
    const lines = [
      tourTitle,
      `${totalDays} days / ${totalNights} nights`,
      `Start: ${startPoint || "Not specified"}`,
      `Final drop: ${finalDrop || "Not specified"}`,
      ...stops.map((stop, index) => {
        const city = CITY_SEEDS.find((item) => item.id === stop.cityId);
        return `${index + 1}. ${city?.name ?? stop.cityId} — ${stop.nights} night(s)`;
      }),
      "",
      ...itinerary.map((day) => {
        const datePart = day.dateLabel ? ` · ${day.dateLabel}` : "";
        if (day.isFinalDay) return `Day ${day.dayNumber}${datePart}: Departure from ${day.transferFrom || "last destination"} → ${finalDrop || "final drop to be confirmed"}`;
        const heading = day.isTransfer ? `Transfer from ${day.transferFrom}` : "Explore";
        const attractions = day.activities.map((activity) => activity.attraction.name).join(", ");
        return `Day ${day.dayNumber}${datePart}: ${day.city?.name ?? "Destination"} — ${heading}${attractions ? `: ${attractions}` : ": Sightseeing not selected"}`;
      }),
      "",
      "Planning preview only. Route times, access, partner availability and fares require verification.",
    ];
    return lines.join("\n");
  }

  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(planText());
      setCopyMessage("Itinerary copied.");
    } catch {
      setCopyMessage("Copy is unavailable in this browser. You can still review the itinerary below.");
    }
  }

  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEnquiryPreview(true);
  }

  const selectedAttractionCount = Object.values(attractionSelections).reduce(
    (sum, ids) => sum + ids.length,
    0,
  );

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.brand} href="/">
            <span className={styles.brandMark}>A</span>
            <span>ALE-GATOR<small>YOUR JOURNEY NETWORK</small></span>
          </Link>
          <div className={styles.headerRight}>
            <span className={styles.prototypeLabel}>PLANNING PREVIEW</span>
            <Link className={styles.exitLink} href="/">Back to home <span>↗</span></Link>
          </div>
        </div>
      </header>

      <section className={styles.intro}>
        <div className={styles.introInner}>
          <div className={styles.eyebrow}><span /> BUILD A TRIP THAT FITS YOU</div>
          <h1>Your journey.<br /><em>Your way.</em></h1>
          <p>Choose your destinations, set the pace, add the places you want to see and shape them into one editable trip plan.</p>
          <div className={styles.introMeta}>
            <span>01 / Choose places</span><i />
            <span>02 / Shape your route</span><i />
            <span>03 / Review your plan</span>
          </div>
        </div>
        <div className={styles.introGraphic} aria-hidden="true">
          <div className={styles.mapRingOne} />
          <div className={styles.mapRingTwo} />
          <div className={styles.mapRoute} />
          <span className={styles.mapPointOne} />
          <span className={styles.mapPointTwo} />
          <span className={styles.mapPointThree} />
          <span className={styles.mapTagOne}>YOUR START</span>
          <span className={styles.mapTagTwo}>NEXT STOP</span>
          <span className={styles.mapTagThree}>THE WAY AHEAD</span>
        </div>
      </section>

      <div className={styles.builderWrap}>
        <nav className={styles.stepper} aria-label="Tour planning steps">
          {STEPS.map((step, index) => (
            <button
              className={index === activeStep ? styles.stepActive : index < activeStep ? styles.stepComplete : styles.step}
              key={step}
              type="button"
              onClick={() => {
                if (index <= activeStep || stops.length > 0) setActiveStep(index);
              }}
              aria-current={index === activeStep ? "step" : undefined}
            >
              <span>{index < activeStep ? "✓" : `0${index + 1}`}</span>
              <b>{step}</b>
            </button>
          ))}
        </nav>

        <div className={styles.workspace}>
          <section className={styles.mainPanel}>
            {activeStep === 0 && (
              <div className={styles.stepContent}>
                <div className={styles.sectionHeading}>
                  <div><span className={styles.kicker}>STEP 01</span><h2>Where would you like to go?</h2><p>Add the cities you want to include. You can arrange their order next.</p></div>
                  <span className={styles.countPill}>{stops.length} selected</span>
                </div>
                <div className={styles.searchRow}>
                  <label className={styles.searchBox}><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search cities or destinations" aria-label="Search destinations" /></label>
                  <select className={styles.filterSelect} value={region} onChange={(event) => setRegion(event.target.value)} aria-label="Filter by region">
                    {regions.map((item) => <option key={item}>{item}</option>)}
                  </select>
                </div>
                <div className={styles.destinationGrid}>
                  {filteredCities.map((city) => {
                    const added = stops.some((stop) => stop.cityId === city.id);
                    return (
                      <article className={styles.destinationCard} key={city.id}>
                        <div className={styles.destinationArt}><span>{city.regionName.toUpperCase()}</span><b>{city.name.slice(0, 1)}</b></div>
                        <div className={styles.destinationInfo}>
                          <div className={styles.destinationTitle}><h3>{city.name}</h3><span>{city.stateName}</span></div>
                          <p>{city.summary}</p>
                          <div className={styles.cardFoot}>
                            <small>Suggested stay · {city.suggestedNights} night{city.suggestedNights > 1 ? "s" : ""}</small>
                            <button type="button" className={added ? styles.addedButton : styles.addButton} onClick={() => added ? removeCity(city.id) : addCity(city)}>
                              {added ? "Added ✓" : "+ Add"}
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
                {filteredCities.length === 0 && <div className={styles.emptyState}>No destinations match that search. Try another city or region.</div>}
              </div>
            )}

            {activeStep === 1 && (
              <div className={styles.stepContent}>
                <div className={styles.sectionHeading}>
                  <div><span className={styles.kicker}>STEP 02</span><h2>Shape your route and stays.</h2><p>Arrange your destinations and choose how many nights you want at each stop.</p></div>
                  <span className={styles.countPill}>{totalDays} days / {totalNights} nights</span>
                </div>
                <div className={styles.routeInputs}>
                  <label>STARTING POINT<input value={startPoint} onChange={(event) => setStartPoint(event.target.value)} placeholder="City, airport or address" /></label>
                  <label>FINAL DROP<input value={finalDrop} onChange={(event) => setFinalDrop(event.target.value)} placeholder="Final city, airport or address" /></label>
                </div>
                <div className={styles.stopList}>
                  {stops.map((stop, index) => {
                    const city = CITY_SEEDS.find((item) => item.id === stop.cityId);
                    if (!city) return null;
                    return (
                      <article className={styles.stopCard} key={stop.cityId}>
                        <div className={styles.stopNumber}>{String(index + 1).padStart(2, "0")}</div>
                        <div className={styles.stopDetails}><h3>{city.name}</h3><p>{city.stateName} · {city.regionName}</p><span>Route timing: not yet verified</span></div>
                        <div className={styles.orderControls}>
                          <button type="button" aria-label={`Move ${city.name} up`} onClick={() => moveStop(index, -1)} disabled={index === 0}>↑</button>
                          <button type="button" aria-label={`Move ${city.name} down`} onClick={() => moveStop(index, 1)} disabled={index === stops.length - 1}>↓</button>
                        </div>
                        <div className={styles.nightControl}><small>OVERNIGHT STAYS</small><div><button type="button" aria-label={`Reduce nights in ${city.name}`} onClick={() => updateNights(city.id, -1)} disabled={stop.nights <= 1}>−</button><b>{stop.nights}</b><button type="button" aria-label={`Add night in ${city.name}`} onClick={() => updateNights(city.id, 1)}>+</button></div></div>
                        <button type="button" className={styles.removeButton} onClick={() => removeCity(city.id)} aria-label={`Remove ${city.name}`}>×</button>
                      </article>
                    );
                  })}
                </div>
                {stops.length === 0 && <div className={styles.emptyState}>Add at least one destination on the previous step to build your route.</div>}
                <div className={styles.routeNotice}><b>Route verification note</b><p>City order and stay duration are editable. Road distance, drive time, mountain access and current road conditions are not yet connected to a verified routing source in this prototype.</p></div>
              </div>
            )}

            {activeStep === 2 && (
              <div className={styles.stepContent}>
                <div className={styles.sectionHeading}>
                  <div><span className={styles.kicker}>STEP 03</span><h2>What would you like to see?</h2><p>Choose the attractions you want to include at each destination. Nothing is locked in.</p></div>
                  <span className={styles.countPill}>{selectedAttractionCount} places selected</span>
                </div>
                <div className={styles.attractionGroups}>
                  {stops.map((stop) => {
                    const city = CITY_SEEDS.find((item) => item.id === stop.cityId);
                    if (!city) return null;
                    const selectedIds = attractionSelections[city.id] ?? [];
                    return (
                      <section className={styles.attractionGroup} key={city.id}>
                        <div className={styles.attractionGroupHead}><div><span>{city.stateName}</span><h3>{city.name}</h3></div><b>{selectedIds.length} selected</b></div>
                        <div className={styles.attractionGrid}>
                          {city.attractions.map((attraction) => {
                            const checked = selectedIds.includes(attraction.id);
                            return (
                              <label className={checked ? styles.attractionSelected : styles.attractionCard} key={attraction.id}>
                                <input type="checkbox" checked={checked} onChange={() => toggleAttraction(city.id, attraction.id)} />
                                <span className={styles.checkMark}>{checked ? "✓" : "+"}</span>
                                <span className={styles.attractionText}><b>{attraction.name}</b><small>{CATEGORY_LABELS[attraction.category]} · about {attraction.suggestedVisitMinutes} min</small><em>{attraction.summary}</em></span>
                              </label>
                            );
                          })}
                        </div>
                        <p className={styles.dataReviewNote}>Starter attraction catalogue · editorial verification required before public launch.</p>
                      </section>
                    );
                  })}
                </div>
                {stops.length === 0 && <div className={styles.emptyState}>Add destinations first. Their sightseeing options will appear here.</div>}
              </div>
            )}

            {activeStep === 3 && (
              <div className={styles.stepContent}>
                <div className={styles.sectionHeading}><div><span className={styles.kicker}>STEP 04</span><h2>Set the pace of your trip.</h2><p>These preferences help shape the itinerary. You can still edit the result.</p></div></div>
                <div className={styles.preferencesBlock}>
                  <label className={styles.fieldLabel}>TRIP NAME<input value={tourTitle} onChange={(event) => setTourTitle(event.target.value)} placeholder="e.g. Family holiday in North India" /></label>
                  <div className={styles.preferenceGrid}>
                    <label className={styles.fieldLabel}>TRAVEL START DATE<input type="date" value={travelDate} onChange={(event) => setTravelDate(event.target.value)} /></label>
                    <label className={styles.fieldLabel}>TRAVELLERS<select value={passengers} onChange={(event) => setPassengers(event.target.value)}>{Array.from({ length: 18 }, (_, index) => String(index + 1)).map((number) => <option key={number} value={number}>{number} {number === "1" ? "traveller" : "travellers"}</option>)}</select></label>
                  </div>
                  <div className={styles.preferenceLabel}>HOW WOULD YOU LIKE TO TRAVEL?</div>
                  <div className={styles.styleGrid}>
                    {TOUR_STYLES.map((item) => <button key={item} type="button" onClick={() => setStyle(item)} className={style === item ? styles.styleSelected : styles.styleCard}><b>{item}</b><span>{item === "Relaxed" ? "More breathing room and fewer stops each day." : item === "Balanced" ? "A mix of sightseeing and unhurried time." : "A fuller day with more selected attractions."}</span></button>)}
                  </div>
                  <div className={styles.preferenceLabel}>WHAT ARE YOU INTERESTED IN?</div>
                  <div className={styles.interestGrid}>
                    {TOUR_INTERESTS.map((interest) => <button type="button" key={interest} onClick={() => toggleInterest(interest)} className={interests.includes(interest) ? styles.interestSelected : styles.interestButton}>{interests.includes(interest) ? "✓ " : "+ "}{INTEREST_LABELS[interest]}</button>)}
                  </div>
                </div>
                <div className={styles.routeNotice}><b>Planning preference, not a booking promise</b><p>Passenger count, travel style and interests will be included in the enquiry summary. They do not confirm a vehicle, partner or fare.</p></div>
              </div>
            )}

            {activeStep === 4 && (
              <div className={styles.stepContent}>
                <div className={styles.sectionHeading}>
                  <div><span className={styles.kicker}>STEP 05</span><h2>Your itinerary is taking shape.</h2><p>Review the generated day-wise draft. Use Back to adjust your route, stays or places.</p></div>
                  <span className={styles.countPill}>{totalDays} day plan</span>
                </div>
                <div className={styles.itineraryTop}>
                  <div><span>YOUR TOUR</span><h3>{tourTitle || "My North India Tour"}</h3><p>{selectedCities.map((city) => city.name).join(" → ")}</p></div>
                  <div className={styles.durationBadge}><b>{totalDays}</b><span>DAYS</span><small>{totalNights} NIGHTS</small></div>
                </div>
                <div className={styles.timeline}>
                  {itinerary.map((day) => (
                    <article className={styles.dayCard} key={day.dayNumber}>
                      <div className={styles.dayIndex}><span>DAY</span><b>{String(day.dayNumber).padStart(2, "0")}</b></div>
                      <div className={styles.dayBody}>
                        {day.isFinalDay ? <><span className={styles.dayType}>FINAL DEPARTURE</span><small className={styles.dayDate}>{day.dateLabel ?? "Date flexible"}</small><h3>Departure / final drop</h3><p>Travel from {day.transferFrom || "your last destination"} to {finalDrop || "your selected drop point"}. Route time requires verification.</p></> : <><span className={styles.dayType}>{day.isTransfer ? "TRANSFER / ARRIVAL" : "SIGHTSEEING DAY"}</span><small className={styles.dayDate}>{day.dateLabel ?? "Date flexible"}</small><h3>{day.city?.name}</h3>{day.isTransfer && <p>Travel from {day.transferFrom} into {day.city?.name}. The road route and journey time require verification.</p>}{day.activities.length > 0 ? <ul>{day.activities.map(({ attraction }) => <li key={attraction.id}><span>{attraction.name}</span><small>{attraction.suggestedVisitMinutes} min suggested</small></li>)}</ul> : <p className={styles.mutedActivity}>No sightseeing selected for this day. You can go back and add places.</p>}{day.unscheduled > 0 && <div className={styles.warningText}>{day.unscheduled} selected place(s) still need time. Add a night or reduce the selection.</div>}<div className={styles.overnightLabel}>OVERNIGHT · {day.city?.name}</div></>}
                      </div>
                    </article>
                  ))}
                </div>
                <div className={styles.routeNotice}><b>What is not calculated yet</b><p>Verified road distance and travel time, traffic, seasonal road access, opening hours, permits and partner availability. This is an editable planning draft, not a confirmed operational itinerary.</p></div>
                <div className={styles.itineraryActions}><button type="button" className={styles.secondaryAction} onClick={copyPlan}>Copy itinerary ↗</button><button type="button" className={styles.primaryAction} onClick={() => setActiveStep(5)}>Continue to cab enquiry <span>→</span></button></div>
                {copyMessage && <p className={styles.inlineStatus} role="status">{copyMessage}</p>}
              </div>
            )}

            {activeStep === 5 && (
              <div className={styles.stepContent}>
                <div className={styles.sectionHeading}><div><span className={styles.kicker}>STEP 06</span><h2>Take this plan to a cab enquiry.</h2><p>Your selected route and preferences will be carried into the enquiry summary.</p></div></div>
                <div className={styles.enquirySummary}>
                  <div><span>YOUR ROUTE</span><b>{selectedCities.map((city) => city.name).join(" → ")}</b></div>
                  <div><span>TRIP DURATION</span><b>{totalDays} days / {totalNights} nights</b></div>
                  <div><span>TRAVELLERS</span><b>{passengers}</b></div>
                  <div><span>VEHICLE PREFERENCE</span><b>{vehiclePreference}</b></div>
                </div>
                <form className={styles.enquiryForm} onSubmit={prepareEnquiry}>
                  <div className={styles.preferenceGrid}>
                    <label className={styles.fieldLabel}>YOUR NAME<input required value={contactName} onChange={(event) => setContactName(event.target.value)} placeholder="Full name" /></label>
                    <label className={styles.fieldLabel}>PHONE NUMBER<input required type="tel" value={contactPhone} onChange={(event) => setContactPhone(event.target.value)} placeholder="Contact number" /></label>
                  </div>
                  <label className={styles.fieldLabel}>EMAIL (OPTIONAL)<input type="email" value={contactEmail} onChange={(event) => setContactEmail(event.target.value)} placeholder="Email address" /></label>
                  <label className={styles.fieldLabel}>PREFERRED VEHICLE<select value={vehiclePreference} onChange={(event) => setVehiclePreference(event.target.value)}><option>Not decided</option><option>Sedan</option><option>Ertiga / SUV</option><option>Innova / Premium SUV</option><option>Tempo Traveller</option></select></label>
                  <button className={styles.primaryAction} type="submit">Prepare enquiry preview <span>→</span></button>
                </form>
                {enquiryPreview && <div className={styles.previewNotice} role="status"><b>Enquiry preview prepared</b><p>{contactName}, your {totalDays}-day tour summary is ready for review. No enquiry has been sent or saved. The operations team, quote and partner confirmation workflow will be connected in a later phase.</p><button type="button" onClick={copyPlan}>Copy tour details ↗</button></div>}
              </div>
            )}

            <div className={styles.stepFooter}>
              <button className={styles.backAction} type="button" onClick={goBack} disabled={activeStep === 0}>← Back</button>
              {activeStep < 4 ? <button className={styles.primaryAction} type="button" onClick={goNext} disabled={(activeStep === 0 || activeStep === 1) && stops.length === 0}>Continue <span>→</span></button> : activeStep === 4 ? <span className={styles.footerHint}>Review the itinerary, then continue to enquiry.</span> : <button className={styles.secondaryAction} type="button" onClick={() => setActiveStep(4)}>← Back to itinerary</button>}
            </div>
          </section>

          <aside className={styles.summaryPanel}>
            <div className={styles.summaryHeader}><div><span>YOUR TRIP</span><h2>My Tour</h2></div><span className={styles.summaryIcon}>A</span></div>
            <div className={styles.summaryStats}>
              <div><b>{stops.length}</b><span>DESTINATIONS</span></div>
              <div><b>{totalNights}</b><span>NIGHTS</span></div>
              <div><b>{totalDays}</b><span>DAYS</span></div>
            </div>
            <div className={styles.summaryRoute}>
              {stops.length === 0 ? <p className={styles.summaryEmpty}>Your selected destinations will appear here.</p> : stops.map((stop, index) => {
                const city = CITY_SEEDS.find((item) => item.id === stop.cityId);
                return <div className={styles.summaryStop} key={stop.cityId}><span>{String(index + 1).padStart(2, "0")}</span><div><b>{city?.name}</b><small>{stop.nights} night{stop.nights > 1 ? "s" : ""}</small></div></div>;
              })}
            </div>
            <div className={styles.summaryDivider} />
            <div className={styles.summaryDetail}><span>STARTING POINT</span><b>{startPoint || "Not set"}</b></div>
            <div className={styles.summaryDetail}><span>FINAL DROP</span><b>{finalDrop || "Not set"}</b></div>
            <div className={styles.summaryDetail}><span>TRAVELLERS</span><b>{passengers}</b></div>
            <div className={styles.summaryDetail}><span>TRAVEL STYLE</span><b>{style}</b></div>
            <div className={styles.summaryDetail}><span>SIGHTSEEING PLACES</span><b>{selectedAttractionCount} selected</b></div>
            <div className={styles.summaryDisclaimer}>Planning preview only. Routes, travel times, access, fares and partner availability are not confirmed here.</div>
            <button type="button" className={styles.summaryCopy} onClick={copyPlan} disabled={stops.length === 0}>Copy current plan ↗</button>
            {copyMessage && <p className={styles.summaryStatus} role="status">{copyMessage}</p>}
          </aside>
        </div>
        <div className={styles.mobileDisclaimer}>No fare estimate or booking confirmation is generated in this preview.</div>
      </div>

      <footer className={styles.footer}>
        <div><span className={styles.brandMark}>A</span><b>ALE-GATOR</b></div>
        <p>Explore North India. Build your route. Travel with clarity.</p>
        <small>Tour Builder prototype · No personal details or trip plans are stored or submitted.</small>
      </footer>
    </main>
  );
}
