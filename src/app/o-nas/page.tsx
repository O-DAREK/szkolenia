import type { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/data/courses";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "O nas",
  description:
    "SOC.DAG (DAG s.c.) to warszawskie centrum bezpieczeństwa: kursy i szkolenia z cyberbezpieczeństwa oraz usługi SOC dla małych i średnich firm — monitoring, reakcja na incydenty i threat hunting.",
  alternates: { canonical: "/o-nas/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SOC.DAG",
  alternateName: "DAG s.c.",
  url: "https://soc.dag.pl",
  email: "kontakt@soc.dag.pl",
  telephone: "+48221007777",
  description:
    "Centrum bezpieczeństwa dla MŚP: kursy i szkolenia z cyberbezpieczeństwa oraz usługi SOC — monitoring 24/7, reakcja na incydenty i threat hunting.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Dobra 22/24 lok. 12",
    postalCode: "00-388",
    addressLocality: "Warszawa",
    addressCountry: "PL",
  },
};

const values = [
  {
    title: "Praktyka zamiast teorii",
    text: "Każdy kurs opiera się na scenariuszach decyzyjnych i ćwiczeniach z realnymi narzędziami — kończysz z umiejętnością, nie z notatkami.",
  },
  {
    title: "Aktualne treści",
    text: "Programy oparte na aktualnych standardach (NIST, ENISA, CompTIA Security+, MITRE ATT&CK) i realnych incydentach, aktualizowane cyklicznie.",
  },
  {
    title: "Dostępność dla każdego",
    text: "Materiały i platformy spełniają WCAG 2.1 AA, a usprawnienia dobieramy indywidualnie — bez orzeczeń i bez dodatkowych opłat.",
  },
];

export default function ONasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <main className="mx-auto max-w-3xl px-6 py-12 md:px-10">
        <header className="mb-10">
          <h1 className="text-3xl font-bold md:text-4xl">O nas</h1>
          <p className="mt-4 text-lg text-muted">
            SOC.DAG (DAG s.c.) to warszawskie centrum bezpieczeństwa. Uczymy
            cyberbezpieczeństwa i chronimy małe oraz średnie firmy — od
            świadomości pracowników po całodobowy monitoring i reagowanie na
            incydenty.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Czym się zajmujemy?</h2>
          <p className="text-muted">
            Łączymy dwa światy: <span className="text-main">szkolenia</span>,
            które budują kompetencje zespołów, oraz{" "}
            <span className="text-main">usługi SOC</span> — monitoring 24/7,
            reakcję na incydenty, threat hunting, hardening i zgodność z
            przepisami. Dzięki temu wiedza z naszych kursów pochodzi wprost z
            codziennej praktyki obrony realnych środowisk.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">
            Ścieżka rozwoju — od podstaw do specjalisty
          </h2>
          <p className="mb-5 text-muted">
            Naszą ofertę szkoleniową układamy jako spójną ścieżkę: od
            świadomości bezpieczeństwa dla każdego pracownika po zaawansowane
            techniki dla analityków SOC.
          </p>
          <ol className="space-y-3">
            {courses.map((c, i) => (
              <li
                key={c.slug}
                className="flex items-start gap-4 rounded-lg border border-white/5 bg-card p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent">
                  {i + 1}
                </span>
                <span className="pt-0.5">
                  <Link href={`/kursy/${c.slug}/`} className="hover:text-accent">
                    {c.title}
                  </Link>{" "}
                  <span className="text-muted">— {c.cost.toLowerCase()}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">Nasze podejście</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-lg border border-white/5 bg-card p-5"
              >
                <h3 className="mb-2 font-semibold text-accent">{v.title}</h3>
                <p className="text-sm text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-white/10 bg-card p-6">
          <h2 className="mb-3 text-xl font-semibold">Dane firmy</h2>
          <ul className="space-y-1.5 text-sm text-muted">
            <li>DAG s.c., ul. Dobra 22/24 lok. 12, 00-388 Warszawa</li>
            <li>NIP 5252262771 · REGON 015453738</li>
            <li>
              <a href="mailto:kontakt@soc.dag.pl" className="hover:text-accent">
                kontakt@soc.dag.pl
              </a>{" "}
              ·{" "}
              <a href="tel:+48221007777" className="hover:text-accent">
                +48 22 100 77 77
              </a>
            </li>
          </ul>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
