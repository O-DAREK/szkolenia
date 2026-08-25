// Dane kursów — treść merytoryczna z materiałów źródłowych (Google Drive:
// Marketing/Kursy/na-www), układ i kolejność wg projektu graficznego.
const courses = [
  {
    icon: "🛡️",
    title: "Szkolenie dla firm",
    hours: "2h",
    desc: "Świadomość zagrożeń dla pracowników MŚP: phishing, vishing, deepfake i ransomware, silne hasła oraz obowiązki wynikające z RODO. Bez technicznego żargonu.",
    audience: "Dla: wszystkich pracowników, bez wiedzy technicznej.",
    outcome: "Rozpoznawanie ataków i bezpieczne nawyki w codziennej pracy.",
    ldDesc:
      "Szkolenie świadomościowe z cyberbezpieczeństwa dla pracowników firm: phishing, vishing, deepfake, ransomware, hasła i MFA, RODO. ~2 godziny, online (Zoom).",
  },
  {
    icon: "🔑",
    title: "Kurs podstawowy",
    hours: "4h",
    desc: "Wprowadzenie do cyberbezpieczeństwa: mechanika ataków na człowieka, higiena (hasła, MFA), samodzielna weryfikacja zagrożeń oraz ścieżki kariery w branży.",
    audience: "Dla: osób budujących fundament, bez wymagań wstępnych.",
    outcome: "Fundament wiedzy i certyfikat po teście końcowym.",
    ldDesc:
      "Bezpłatny kurs podstawowy — wprowadzenie do cyberbezpieczeństwa: mechanika ataków, hasła i MFA, weryfikacja zagrożeń, zawód w cyberbezpieczeństwie. ~4 godziny.",
  },
  {
    icon: "🔗",
    title: "Kurs średniozaawansowany",
    hours: "9h",
    desc: "Fundamenty techniczne obrony: hardening Linux i Windows (CIS Benchmarks), segmentacja sieci i Zero Trust, kryptografia i PKI, zarządzanie tożsamością (MFA, RBAC).",
    audience: "Dla: specjalistów IT — administratorów, DevOps, helpdesku.",
    outcome: "Hardening i architektura obrony; zgodność z CompTIA Security+.",
    ldDesc:
      "Bezpłatny kurs średniozaawansowany (IT Track): hardening systemów, bezpieczeństwo sieci, kryptografia i PKI, zarządzanie tożsamością. ~9 godzin, zgodny z CompTIA Security+ SY0-701.",
  },
  {
    icon: "🎯",
    title: "Kurs zaawansowany",
    hours: "Threat Hunting",
    desc: "Proaktywne „polowanie na zagrożenia” w Microsoft Sentinel: język KQL, hipotezy oparte na MITRE ATT&CK, tworzenie reguł detekcji i eskalacja znalezisk.",
    audience: "Dla: analityków SOC i specjalistów IT po poziomie podstawowym/średnim.",
    outcome: "Samodzielne wyszukiwanie ukrytych napastników w telemetrii.",
    ldDesc:
      "Zaawansowany kurs threat huntingu w Microsoft Sentinel: KQL, hipotezy MITRE ATT&CK, reguły analityczne, eskalacja do L2/IR.",
  },
];

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
      provider: { "@type": "Organization", name: "SOC.DAG" },
    })),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* PASEK NAWIGACJI */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-bgdark/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-5 md:px-10">
          <div className="flex items-center gap-2">
            <strong className="text-2xl tracking-wide">SOC.DAG</strong>
            <span className="text-sm font-light text-muted">
              Centrum Bezpieczeństwa
            </span>
          </div>
          <nav aria-label="Główna nawigacja" className="flex items-center gap-2 text-sm">
            <a href="#kursy" className="mx-3 text-accent transition-colors">
              KURSY
            </a>
            <a href="#" className="mx-3 text-muted transition-colors hover:text-accent">
              BLOG
            </a>
            <a href="#kontakt" className="mx-3 text-muted transition-colors hover:text-accent">
              KONTAKT
            </a>
          </nav>
          <div className="flex gap-3">
            <a
              href="#"
              className="rounded border border-accent bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              BEZPŁATNA KONSULTACJA
            </a>
            <a
              href="#"
              className="rounded border border-muted px-5 py-2.5 text-sm font-semibold text-main transition-colors hover:border-accent hover:text-accent"
            >
              PANEL KLIENTA
            </a>
          </div>
        </div>
      </header>

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
                key={c.title}
                className="flex flex-col rounded-lg border border-white/5 bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent"
              >
                <div className="mb-5 text-center text-4xl" aria-hidden="true">
                  {c.icon}
                </div>
                <h3 className="mb-4 text-center text-lg font-semibold">
                  {c.title}{" "}
                  <span className="whitespace-nowrap text-muted">({c.hours})</span>
                </h3>
                <p className="mb-5 flex-grow text-sm text-muted">{c.desc}</p>
                <ul className="mb-6 space-y-3 text-sm text-muted">
                  <li className="flex items-start gap-2.5">
                    <span className="text-accent" aria-hidden="true">
                      👤
                    </span>
                    <span>{c.audience}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-accent" aria-hidden="true">
                      ⚙️
                    </span>
                    <span>{c.outcome}</span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="mt-auto block rounded border border-accent/30 py-3 text-center text-sm text-accent transition-colors hover:border-accent hover:bg-accent/10"
                >
                  ZOBACZ SZCZEGÓŁY &rarr;
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* STOPKA */}
      <footer id="kontakt" className="border-t border-white/5 bg-footer px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
          <div>
            <p className="mb-4 inline-block border border-main px-2.5 py-1.5 text-2xl font-bold tracking-widest">
              DAG
            </p>
            <p className="mb-5 text-sm text-muted">
              Ochrona na najwyższym poziomie dla małych i średnich firm.
              Całodobowe monitorowanie, wykrywanie zagrożeń i reagowanie na
              incydenty.
            </p>
            <div className="flex gap-2.5">
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs text-main"
              >
                in
              </a>
              <a
                href="#"
                aria-label="X"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs text-main"
              >
                X
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-base font-semibold">Szybkie linki</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              {["Strona główna", "Ceny", "Usługi", "Blog", "Więcej", "O nas", "FAQ"].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-accent">
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-base font-semibold">Nasze usługi</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              {[
                "Monitoring 24/7",
                "Reakcja na incydenty",
                "Threat Hunting",
                "Zgodność z przepisami",
                "System Hardening",
                "Business Email Protection",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-accent">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-base font-semibold">Kontakt</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <span aria-hidden="true">📍</span>
                <span>DAG s.c., ul. Dobra 22/24 lok. 12, 00-388 Warszawa</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span aria-hidden="true">📞</span>
                <a href="tel:+48221007777" className="hover:text-accent">
                  +48 22 100 77 77
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span aria-hidden="true">✉️</span>
                <a href="mailto:kontakt@soc.dag.pl" className="hover:text-accent">
                  kontakt@soc.dag.pl
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Formularz kontaktowy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
