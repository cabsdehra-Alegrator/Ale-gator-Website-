import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCATION_STATES, getLocationCity } from "@/lib/locations";

type PageProps = { params: Promise<{ state: string; city: string }> };

export const dynamicParams = false;

export function generateStaticParams({ params }: { params: { state: string } }) {
  const state = LOCATION_STATES.find((item) => item.slug === params.state);
  return state ? state.cities.map((city) => ({ city: city.slug })) : [];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state: stateSlug, city: citySlug } = await params;
  const result = getLocationCity(stateSlug, citySlug);
  if (!result) return { title: "City not found | Ale-gator" };
  const { state, city } = result;
  return {
    title: city.name + " Cab Enquiry & Outstation Travel | " + state.name + " | Ale-gator",
    description: city.summary + " Ale-gator checks route feasibility and local partner availability before confirming a fare or booking.",
    alternates: { canonical: "/locations/" + state.slug + "/" + city.slug },
    keywords: [city.name + " cab enquiry", city.name + " outstation travel", city.name + " intercity cab"]
  };
}

export default async function CityLocationPage({ params }: PageProps) {
  const { state: stateSlug, city: citySlug } = await params;
  const result = getLocationCity(stateSlug, citySlug);
  if (!result) notFound();
  const { state, city } = result;
  const otherCities = state.cities.filter((item) => item.slug !== city.slug).slice(0, 6);

  return (
    <main className="locationPage">
      <div className="locationWrap">
        <nav className="locationBreadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>/</span><Link href="/locations">States & cities</Link><span>/</span><Link href={"/locations/" + state.slug}>{state.name}</Link><span>/</span><span>{city.name}</span>
        </nav>

        <header className="locationHero locationCityHero">
          <p className="locationEyebrow">CITY TRAVEL PAGE · {state.name.toUpperCase()}</p>
          <h1>Cab travel in<br /><em>{city.name}.</em></h1>
          <p>{city.summary}</p>
          <div className="locationUseCases">
            <span>Intercity journeys</span><span>One-way & return</span><span>Airport & outstation enquiries</span>
          </div>
          <p className="locationNotice">Availability is not assumed from this page. The operations team checks the requested route, date and local partner supply before sharing a confirmed fare or accepting a booking.</p>
          <Link className="locationPrimaryCta" href="/#plan">Plan a journey from {city.name} <span aria-hidden="true">↗</span></Link>
        </header>

        <section className="locationTravelDetails">
          <div><p className="locationEyebrow">YOUR JOURNEY</p><h2>Start with your exact route.</h2><p>For a useful enquiry, include the pickup area, full destination, travel date, reporting time, passenger count, luggage and any intermediate stops.</p></div>
          <div className="locationChecklist"><p><span>01</span> Pickup and drop locations</p><p><span>02</span> Date, time and trip type</p><p><span>03</span> Passenger and vehicle requirements</p><p><span>04</span> Return date or extra stops, where applicable</p></div>
        </section>

        {otherCities.length > 0 && (
          <section className="locationDirectory" aria-labelledby="more-cities-heading">
            <div className="locationSectionHeading"><div><p className="locationEyebrow">EXPLORE THE REGION</p><h2 id="more-cities-heading">More locations in {state.name}</h2></div><Link href={"/locations/" + state.slug}>View all cities ↗</Link></div>
            <div className="locationCityGrid">
              {otherCities.map((item) => (
                <Link className="locationCityCard" href={"/locations/" + state.slug + "/" + item.slug} key={item.slug}>
                  <span className="locationCityMarker" aria-hidden="true">↗</span>
                  <span><strong>{item.name}</strong><small>Explore city travel information</small></span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="locationBottomCta">
          <div><p className="locationEyebrow">READY TO SHARE YOUR ROUTE?</p><h2>Get your journey reviewed.</h2><p>Share your requirements first. A fare and vehicle are confirmed only after route and partner checks.</p></div>
          <Link href="/#plan">Submit an enquiry <span aria-hidden="true">↗</span></Link>
        </section>
        <footer className="locationFooter"><Link href={"/locations/" + state.slug}>Back to {state.name}</Link><Link href="/locations">All regions</Link><span>Travel, connected.</span></footer>
      </div>
    </main>
  );
}
