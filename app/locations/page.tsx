import type { Metadata } from "next";
import Link from "next/link";
import { LOCATION_STATES } from "@/lib/locations";

export const metadata: Metadata = {
  title: "North India States & Cities | Ale-gator",
  description: "Browse Ale-gator's North India location directory by state and city. Submit a cab enquiry and let the operations team verify route and local partner availability.",
  alternates: { canonical: "/locations" }
};

export default function LocationsPage() {
  return (
    <main className="locationPage">
      <div className="locationWrap">
        <nav className="locationBreadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>/</span><span>States & cities</span>
        </nav>
        <header className="locationHero">
          <p className="locationEyebrow">ALE-GATOR LOCATION DIRECTORY</p>
          <h1>Explore North India,<br /><em>city by city.</em></h1>
          <p>Browse the regions in our North India rollout roadmap and explore the cities we are building route coverage around.</p>
          <p className="locationNotice">This directory is a network roadmap, not a live-availability list. Every enquiry is checked for route feasibility and local partner availability before a fare or booking is confirmed.</p>
        </header>

        <section className="locationDirectory" aria-labelledby="region-directory-heading">
          <div className="locationSectionHeading">
            <div><p className="locationEyebrow">REGIONAL DIRECTORY</p><h2 id="region-directory-heading">States, territories & cities</h2></div>
            <span>{LOCATION_STATES.length} regions</span>
          </div>
          <div className="locationStateGrid">
            {LOCATION_STATES.map((state) => (
              <article className="locationStateCard" key={state.slug}>
                <div className="locationCardTop"><span>{state.kind}</span><span>{state.cities.length} {state.cities.length === 1 ? "city" : "cities"}</span></div>
                <h3><Link href={"/locations/" + state.slug}>{state.name}</Link></h3>
                <p>{state.description}</p>
                <div className="locationCityLinks">
                  {state.cities.map((city) => (
                    <Link href={"/locations/" + state.slug + "/" + city.slug} key={city.slug}>{city.name}</Link>
                  ))}
                </div>
                <Link className="locationExplore" href={"/locations/" + state.slug}>Explore region <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
        </section>

        <section className="locationBottomCta">
          <div><p className="locationEyebrow">HAVE A ROUTE IN MIND?</p><h2>Tell us where you need to go.</h2><p>Share your travel details. The operations team will review the route before confirming availability and fare.</p></div>
          <Link href="/#plan">Plan a journey <span aria-hidden="true">↗</span></Link>
        </section>
        <footer className="locationFooter"><Link href="/">Ale-gator home</Link><span>Travel, connected.</span></footer>
      </div>
    </main>
  );
}
