import type { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/data/courses";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Cennik",
  description:
    "Cennik kursów i szkoleń SOC.DAG (ceny netto). Kurs podstawowy bezpłatny, kurs średniozaawansowany 1 800 zł, szkolenie dla pracowników 250 zł za osobę, kurs Incident Response w BUR od 4 200 zł z dofinansowaniem 50–80%. Szkolenia z AI: e-learning 149 zł za osobę, szkolenia zamknięte od 2 200 zł.",
  alternates: { canonical: "/cennik/" },
};

const aiPrices = [
  { name: "Webinar „AI bez strachu”", form: "online, 1,5 h, otwarty", price: "bezpłatny" },
  { name: "E-learning „AI od zera”", form: "online, ok. 3 h, test i zaświadczenie", price: "149 zł / os.; od 25 osób 99 zł / os." },
  { name: "„AI bezpiecznie w pracy” — 2 h", form: "online, szkolenie zamknięte, do 20 osób", price: "2 200 zł" },
  { name: "„AI bezpiecznie w pracy” — 3 h", form: "online, szkolenie zamknięte, do 20 osób", price: "2 900 zł" },
  { name: "Warsztat dla zespołu", form: "6 h, do 15 osób", price: "4 500 zł online; 5 500 zł stacjonarnie" },
  { name: "Pakiet „AI w firmie”", form: "szkolenie 3 h, wzór polityki AI, rejestr narzędzi, test i zaświadczenia, do 25 osób", price: "4 900 zł" },
  { name: "Moduł AI dla zarządu", form: "1–2 h, do 8 osób", price: "2 500 zł" },
  { name: "Warsztat otwarty „AI w pracy biurowej — bezpiecznie”", form: "online, 6 h, do 15 osób", price: "790 zł / os.; 690 zł / os. przy zapisie 30 dni wcześniej" },
  { name: "Przegląd ustawień narzędzi AI w firmie", form: "Copilot, ChatGPT, Gemini", price: "wycena indywidualna" },
];

export default function CennikPage() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-6 py-12 md:px-10">
        <header className="mb-10">
          <h1 className="text-3xl font-bold md:text-4xl">Cennik</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Kurs podstawowy jest bezpłatny. Pozostałe kursy i szkolenia mają
            stałe ceny, a kurs zaawansowany można kupić z dofinansowaniem z BUR.
            Wszystkie ceny są cenami netto w złotych.
          </p>
        </header>

        {/* Tabela kursów */}
        <section className="mb-12 overflow-x-auto">
          <h2 className="mb-4 text-2xl font-semibold">Kursy otwarte</h2>
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-muted">
                <th scope="col" className="py-3 pr-4 font-medium">Kurs</th>
                <th scope="col" className="py-3 pr-4 font-medium">Czas</th>
                <th scope="col" className="py-3 pr-4 font-medium">Cena</th>
                <th scope="col" className="py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c) => (
                <tr key={c.slug} className="border-b border-white/5">
                  <th scope="row" className="py-4 pr-4 font-semibold text-main">
                    {c.title}
                  </th>
                  <td className="py-4 pr-4 text-muted">
                    {c.hours === "Threat Hunting" ? "—" : `~${c.hours}`}
                  </td>
                  <td className="py-4 pr-4">
                    <span
                      className={
                        c.cost === "Bezpłatny"
                          ? "font-semibold text-accent"
                          : "text-main"
                      }
                    >
                      {c.price}
                    </span>
                  </td>
                  <td className="py-4">
                    <Link
                      href={`/kursy/${c.slug}/`}
                      className="text-sm text-accent hover:underline"
                    >
                      Szczegóły &rarr;
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Kurs zaawansowany w BUR */}
        <section className="mb-12 rounded-lg border border-accent/30 bg-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold">
            Kurs zaawansowany: Incident Response (dofinansowanie BUR)
          </h2>
          <p className="mt-3 text-muted">
            24-godzinne szkolenie z reagowania na incydenty na platformie
            SentinelOne, dostępne w Bazie Usług Rozwojowych (BUR) z
            dofinansowaniem ze środków UE na poziomie{" "}
            <span className="text-main">50–80%</span> wartości netto.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 p-5">
              <p className="text-xs uppercase tracking-wide text-muted">
                Wersja online
              </p>
              <p className="mt-1 text-2xl font-bold">
                4 200 zł<span className="text-base font-normal text-muted"> netto / os.</span>
              </p>
            </div>
            <div className="rounded-lg border border-white/10 p-5">
              <p className="text-xs uppercase tracking-wide text-muted">
                Wersja stacjonarna
              </p>
              <p className="mt-1 text-2xl font-bold">
                5 200 zł<span className="text-base font-normal text-muted"> netto / os.</span>
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted">
            Cena wersji stacjonarnej obejmuje catering i salę. Poziom
            dofinansowania zależy od operatora regionalnego, wielkości firmy i
            statusu uczestnika.
          </p>
        </section>

        {/* Szkolenia z AI */}
        <section className="mb-12 overflow-x-auto">
          <h2 className="mb-2 text-2xl font-semibold">
            Ile kosztują szkolenia z AI dla firm?
          </h2>
          <p className="mb-4 text-muted">
            Bezpieczne korzystanie z narzędzi AI (ChatGPT, Copilot, Gemini) w
            pracy — dla osób bez wiedzy technicznej. Terminy ustalamy
            indywidualnie.
          </p>
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-muted">
                <th scope="col" className="py-3 pr-4 font-medium">Szkolenie</th>
                <th scope="col" className="py-3 pr-4 font-medium">Forma</th>
                <th scope="col" className="py-3 font-medium">Cena netto</th>
              </tr>
            </thead>
            <tbody>
              {aiPrices.map((r) => (
                <tr key={r.name} className="border-b border-white/5">
                  <th scope="row" className="py-4 pr-4 font-semibold text-main">
                    {r.name}
                  </th>
                  <td className="py-4 pr-4 text-muted">{r.form}</td>
                  <td className="py-4 text-main">{r.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-sm text-muted">
            Szkolenie zamknięte stacjonarnie: +700 zł w Warszawie, poza Warszawą
            doliczamy koszt dojazdu.
          </p>
        </section>

        {/* Szkolenia zamknięte */}
        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold">
            Szkolenia zamknięte dla firm
          </h2>
          <p className="mb-3 text-muted">
            <span className="text-main">Szkolenie z cyberbezpieczeństwa dla
            pracowników</span> (ok. 2 h, online lub u Was w firmie):{" "}
            <span className="font-semibold text-main">250 zł netto za osobę</span>,
            grupa do 15 osób.
          </p>
          <p className="text-muted">
            Szkolenia o innym zakresie, dla większych zespołów lub łączone z
            wdrożeniem wyceniamy indywidualnie — w zależności od zakresu, liczby
            uczestników i formy (online lub stacjonarnie).{" "}
            <Link href="/kontakt/" className="text-accent hover:underline">
              Zapytaj o wycenę
            </Link>
            .
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-lg border border-accent/30 bg-card p-8 text-center">
          <h2 className="text-xl font-semibold">Potrzebujesz wyceny?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
            Napisz do nas — przygotujemy ofertę dopasowaną do Twoich potrzeb i
            podpowiemy możliwości dofinansowania.
          </p>
          <div className="mt-6">
            <Link
              href="/kontakt/"
              className="inline-block rounded border border-accent bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              ZAPYTAJ O OFERTĘ
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
