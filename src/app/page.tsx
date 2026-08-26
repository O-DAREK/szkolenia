import Link from "next/link";
import { courses } from "@/data/courses";
import { CourseIcon } from "@/components/CourseIcon";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SOC.DAG",
  alternateName: "DAG s.c.",
  description:
    "Centrum Bezpieczeństwa — kursy i szkolenia z cyberbezpieczeństwa dla firm i specjalistów IT.",
  url: "https://soc.dag.pl",
  email: "kontakt@soc.dag.pl",
  telephone: "+48221007777",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Dobra 22/24 lok. 12",
    postalCode: "00-388",
    addressLocality: "Warszawa",
    addressCountry: "PL",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Kursy cyberbezpieczeństwa",
    itemListElement: courses.map((c) => ({
      "@type": "Course",
      name: c.title,
      description: c.ldDesc,
      url: `https://soc.dag.pl/kursy/${c.slug}/`,
      provider: { "@type": "Organization", name: "SOC.DAG" },
    })),
  },
};

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20a7 7 0 0 1 14 0" strokeLinecap="round" />
  </svg>
);
const AimIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <main>
        {/* SEKCJA HERO */}
        <section className="hero-grid px-5 py-20 text-center md:py-28">
          <h1 className="mx-auto max-w-4xl text-3xl font-bold uppercase leading-snug tracking-wide text-accent md:text-4xl">
            Wzmacniaj cyfrową obronę swojej
            <br />
            firmy z kursami DAG
          </h1>
        </section>

        {/* SEKCJA KART KURSÓW */}
        <section id="kursy" className="mx-auto max-w-[1400px] px-6 pb-20 pt-5 md:px-10">
          <h2 className="sr-only">Nasze kursy cyberbezpieczeństwa</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {courses.map((c) => (
              <article
                key={c.slug}
                className="flex flex-col rounded-lg border border-white/5 bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent"
              >
                <div className="mb-5 flex justify-center text-accent">
                  <CourseIcon name={c.icon} className="h-11 w-11" />
                </div>
                <h3 className="mb-4 text-center text-lg font-semibold">
                  {c.title}{" "}
                  <span className="whitespace-nowrap text-muted">({c.hours})</span>
                </h3>
                <p className="mb-5 flex-grow text-sm text-muted">{c.desc}</p>
                <ul className="mb-6 space-y-3 text-sm text-muted">
                  <li className="flex items-start gap-2.5">
                    <span className="text-accent">
                      <UserIcon />
                    </span>
                    <span>{c.audienceShort}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-accent">
                      <AimIcon />
                    </span>
                    <span>{c.outcomeShort}</span>
                  </li>
                </ul>
                <Link
                  href={`/kursy/${c.slug}/`}
                  className="mt-auto block rounded border border-accent/30 py-3 text-center text-sm text-accent transition-colors hover:border-accent hover:bg-accent/10"
                >
                  ZOBACZ SZCZEGÓŁY &rarr;
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
