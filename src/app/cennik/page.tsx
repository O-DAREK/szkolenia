import type { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/data/courses";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Cennik",
  description:
    "Cennik kursów i szkoleń z cyberbezpieczeństwa SOC.DAG. Kurs podstawowy i średniozaawansowany — bezpłatne. Kurs Incident Response w BUR z dofinansowaniem 50–80%. Szkolenia zamknięte — wycena indywidualna.",
  alternates: { canonical: "/cennik/" },
};

export default function CennikPage() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-6 py-12 md:px-10">
        <header className="mb-10">
          <h1 className="text-3xl font-bold md:text-4xl">Cennik</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Część kursów jest w pełni bezpłatna, a szkolenia płatne wyceniamy
            indywidualnie lub udostępniamy z dofinansowaniem. Wszystkie ceny są
            podane w złotych i zwolnione z VAT.
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

        {/* Szkolenia zamknięte */}
        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold">
            Szkolenia zamknięte dla firm
          </h2>
          <p className="text-muted">
            Szkolenia dedykowane dla jednego zespołu wyceniamy indywidualnie — w
            zależności od zakresu, liczby uczestników i formy (online lub
            stacjonarnie). Przy zgłoszeniu kilku uczestników z jednej firmy
            udzielamy rabatów.{" "}
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
