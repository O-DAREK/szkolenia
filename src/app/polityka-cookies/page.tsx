import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Polityka cookies",
  description:
    "Polityka plików cookie SOC.DAG. Zbieramy wyłącznie cookies Google Analytics (Google Tag), tylko po wyrażeniu zgody. Nie stosujemy cookies reklamowych ani śledzących.",
  alternates: { canonical: "/polityka-cookies/" },
};

const cookies = [
  {
    name: "_ga",
    provider: "Google Analytics",
    purpose: "Rozróżnia poszczególnych użytkowników.",
    expiry: "2 lata",
  },
  {
    name: "_ga_<ID>",
    provider: "Google Analytics",
    purpose: "Utrzymuje stan sesji na potrzeby statystyk (GA4).",
    expiry: "2 lata",
  },
  {
    name: "_gid",
    provider: "Google Analytics",
    purpose: "Rozróżnia użytkowników w krótkim okresie.",
    expiry: "24 godziny",
  },
];

export default function PolitykaCookiesPage() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-6 py-12 md:px-10">
        <header className="mb-10">
          <h1 className="text-3xl font-bold md:text-4xl">Polityka cookies</h1>
          <p className="mt-4 text-lg text-muted">
            Zbieramy wyłącznie pliki cookie potrzebne narzędziu Google Tag do
            analityki (Google Analytics) — i tylko wtedy, gdy wyrazisz na to
            zgodę.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Czym są pliki cookie?</h2>
          <p className="text-muted">
            Pliki cookie to niewielkie pliki tekstowe zapisywane w Twojej
            przeglądarce. Wykorzystujemy je wyłącznie do zliczania i analizy
            ruchu na stronie, aby wiedzieć, które treści są przydatne.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">
            Jakich plików cookie używamy?
          </h2>
          <p className="mb-5 text-muted">
            Korzystamy tylko z plików cookie Google Analytics, ładowanych przez
            Google Tag. Nie stosujemy plików reklamowych, marketingowych ani
            śledzących między witrynami.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-muted">
                  <th scope="col" className="py-3 pr-4 font-medium">Nazwa</th>
                  <th scope="col" className="py-3 pr-4 font-medium">Dostawca</th>
                  <th scope="col" className="py-3 pr-4 font-medium">Cel</th>
                  <th scope="col" className="py-3 font-medium">Wygasa po</th>
                </tr>
              </thead>
              <tbody>
                {cookies.map((c) => (
                  <tr key={c.name} className="border-b border-white/5">
                    <th scope="row" className="py-4 pr-4 font-semibold text-main">
                      {c.name}
                    </th>
                    <td className="py-4 pr-4 text-muted">{c.provider}</td>
                    <td className="py-4 pr-4 text-muted">{c.purpose}</td>
                    <td className="py-4 text-muted">{c.expiry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">
            Czy zbieramy pliki reklamowe lub śledzące?
          </h2>
          <p className="text-muted">
            Nie. Zgodę reklamową (Google Consent Mode: <code>ad_storage</code>,{" "}
            <code>ad_user_data</code>, <code>ad_personalization</code>) trzymamy
            trwale wyłączoną. Zgadzasz się wyłącznie na analitykę
            (<code>analytics_storage</code>).
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">
            Jak wyrazić lub cofnąć zgodę?
          </h2>
          <p className="text-muted">
            Przy pierwszej wizycie pokazujemy baner, na którym możesz zaakceptować
            lub odrzucić cookies analityczne. Dopóki nie klikniesz „Akceptuję",
            żadne pliki cookie Google Analytics nie są zapisywane. Zgodę możesz
            w każdej chwili cofnąć, usuwając pliki cookie i dane witryny w
            ustawieniach przeglądarki — przy kolejnej wizycie baner pojawi się
            ponownie.
          </p>
        </section>

        <section className="rounded-lg border border-white/10 bg-card p-6">
          <h2 className="mb-3 text-xl font-semibold">Administrator danych</h2>
          <p className="text-sm text-muted">
            Administratorem danych jest DAG s.c., ul. Dobra 22/24 lok. 12, 00-388
            Warszawa. W sprawach danych osobowych:{" "}
            <a href="mailto:iod@dag.pl" className="text-accent hover:underline">
              iod@dag.pl
            </a>
            . Więcej w{" "}
            <Link href="/faq/" className="text-accent hover:underline">
              najczęstszych pytaniach
            </Link>
            .
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
