import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCATION_STATES, getLocationState } from "@/lib/locations";

type PageProps = { params: Promise<{ state: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCATION_STATES.map((state) => ({ state: state.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state: slug } = await params;
  const state = getLocationState(slug);
  if (!state) return { title: "Region not found | Ale-gator" };
  return {
    title: "Cab Travel in " + state.name + " | Cities & Routes | Ale-gator",
    description: "Browse " + state.name + " city pages and submit intercity, airport or outstation cab enquiries. Route feasibility and local partner availability are confirmed before booking.",
    alternates: { canonical: "/locations/" + state.slug },
    keywords: [state.name + " cab enquiry", state.name + " intercity travel", state.name + " outstation cab"]
  };
}

export default async function StateLocationPage({ params }: PageProps) {
  const { state: slug } = await params;
  const state = getLocationState(slug);
  if (!state) notFound();

  return (
    <main className="locationPage">
      <div className="locationWrap">
        <nav className="locationBreadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>/</span><Link href="/locations">States & cities</Link><span>/</span><span>{state.name}</span>
        </nav>
        <header className="locationHero locationStateHero">
          <p className="locationEyebrow">{state.kind.toUpperCase()} · NORTH INDIA NETWORK ROADMAP</p>
          <h1>Cab travel in<br /><em>{state.name}.</em></h1>
          <p>{state.description}</p>
          <p className="locationNotice">A location page does not mean service is currently live in every city. Each enquiry is reviewed against actual partner supply, route feasibility and operating conditions.</p>
        </header>

        <section className="locationDirectory" aria-labelledby="city-directory-heading">
          <div className="locationSectionHeading">
            <div><p className="locationEyebrow">CITY DIRECTORY</p><h2 id="city-directory-heading">Explore cities in {state.name}</h2></div>
            <span>{state.cities.length} {state.cities.length === 1 ? "location" : "locations"}</span>
          </div>
          <div className="locationCityGrid">
            {state.cities.map((city) => (
              <Link className="locationCityCard" href={"/locations/" + state.slug + "/" + city.slug} key={city.slug}>
                <span className="locationCityMarker" aria-hidden="true">↗</span>
                <span><strong>{city.name}</strong><small>Explore city travel information</small></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="locationInfoStrip">
          <h2>How a journey enquiry works</h2>
          <ol>
            <li><strong>Share the route.</strong><span>Enter your pickup, destination, date, time and vehicle requirements.</span></li>
            <li><strong>Availability is checked.</strong><span>The operations team reviews route feasibility and suitable local partner options.</span></li>
            <li><strong>Confirm after approval.</strong><span>Fare, vehicle and operator details are agreed before the booking is accepted.</span></li>
          </ol>
        </section>

        <div className="locationPageActions"><Link href="/locations">Browse all regions</Link><Link href="/#plan">Submit a journey enquiry ↗</Link></div>
        <footer className="locationFooter"><Link href="/">Ale-gator home</Link><span>Travel, connected.</span></footer>
      </div>
    </main>
  );
}
