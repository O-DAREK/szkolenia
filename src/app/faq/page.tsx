import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Najczęstsze pytania (FAQ)",
  description:
    "Odpowiedzi na najczęstsze pytania o kursy i szkolenia z cyberbezpieczeństwa SOC.DAG: koszty, certyfikaty, dofinansowanie BUR, forma zajęć, rezygnacja, reklamacje i RODO.",
  alternates: { canonical: "/faq/" },
};

// Treść odpowiedzi na podstawie materiałów źródłowych (Dysk: regulamin dag,
// procedura dostępności, procedura reklamacji, karty kursów).
const faq: { q: string; a: string }[] = [
  {
    q: "Czy szkolenia są płatne?",
    a: "Kurs podstawowy oraz kurs średniozaawansowany (IT Track) są bezpłatne. Szkolenie dla pracowników firm oraz kursy zaawansowane (Incident Response i Threat Hunting) są płatne. Szczegóły znajdziesz na stronie każdego kursu.",
  },
  {
    q: "Czy po kursie otrzymam certyfikat?",
    a: "Tak. Po zaliczeniu testu końcowego (próg 70%) wystawiamy certyfikat lub zaświadczenie, weryfikowalne online. Certyfikat nie jest dokumentem urzędowym ani nie potwierdza uprawnień zawodowych.",
  },
  {
    q: "Czy mogę uzyskać dofinansowanie do szkolenia?",
    a: "Tak. Kurs zaawansowany „Incident Response” jest dostępny w Bazie Usług Rozwojowych (BUR), z dofinansowaniem ze środków UE na poziomie 50–80% wartości netto, zależnie od operatora regionalnego i statusu uczestnika.",
  },
  {
    q: "W jakiej formie odbywają się szkolenia?",
    a: "Zajęcia prowadzimy online — na żywo przez Zoom lub w formie e-learningu (nagrania wideo + materiały PDF). Szkolenia stacjonarne realizujemy na życzenie klienta firmowego.",
  },
  {
    q: "Czy potrzebuję wiedzy technicznej, żeby wziąć udział?",
    a: "To zależy od kursu. Szkolenie dla firm i kurs podstawowy nie mają wymagań wstępnych — wystarczy codzienne korzystanie z komputera. Kurs średniozaawansowany i kursy zaawansowane zakładają doświadczenie w IT (administracja, sieci, systemy).",
  },
  {
    q: "Jak wygląda rezygnacja z udziału?",
    a: "Dla klienta firmowego: rezygnacja na więcej niż 14 dni przed rozpoczęciem — zwrot 100%; na 14 dni lub mniej — obciążenie pełną ceną. Zamiast zgłoszonej osoby można bez opłat wskazać inną. Konsument i przedsiębiorca na prawach konsumenta mają dodatkowo prawo odstąpienia od umowy w 14 dni od jej zawarcia.",
  },
  {
    q: "Jak złożyć reklamację?",
    a: "Reklamację składa się e-mailem na adres reklamacje@dag.pl lub pisemnie na adres siedziby. Rozpatrujemy ją w terminie 14 dni od otrzymania i przekazujemy odpowiedź na adres zgłaszającego.",
  },
  {
    q: "Czy szkolenia są dostępne dla osób ze szczególnymi potrzebami?",
    a: "Tak. Materiały i platformy spełniają standard WCAG 2.1 AA, a po zgłoszeniu potrzeby (rekomendowane min. 14 dni przed szkoleniem) dobieramy indywidualne usprawnienia. Nie wymagamy orzeczenia o niepełnosprawności ani nie pobieramy dodatkowej opłaty.",
  },
  {
    q: "Jak przetwarzacie moje dane osobowe?",
    a: "Administratorem danych jest DAG s.c. Dane przetwarzamy zgodnie z RODO w celu zawarcia i wykonania umowy, wystawienia dokumentów i certyfikatu oraz obsługi reklamacji. W sprawach danych: iod@dag.pl.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <main className="mx-auto max-w-3xl px-6 py-12 md:px-10">
        <header className="mb-10">
          <h1 className="text-3xl font-bold md:text-4xl">
            Najczęstsze pytania
          </h1>
          <p className="mt-4 text-lg text-muted">
            Koszty, certyfikaty, dofinansowanie, forma zajęć i formalności —
            zebrane w jednym miejscu.
          </p>
        </header>

        <div className="space-y-4">
          {faq.map((item) => (
            <details
              key={item.q}
              className="group rounded-lg border border-white/5 bg-card p-5 open:border-accent/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold marker:content-none">
                <h2 className="text-base font-semibold md:text-lg">{item.q}</h2>
                <span className="shrink-0 text-accent transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-muted">{item.a}</p>
            </details>
          ))}
        </div>

        <aside className="mt-10 rounded-lg border border-accent/30 bg-card p-6 text-center">
          <p className="text-muted">
            Nie znalazłeś odpowiedzi?{" "}
            <a href="/kontakt/" className="text-accent hover:underline">
              Napisz do nas
            </a>{" "}
            — odpowiemy najszybciej, jak to możliwe.
          </p>
        </aside>
      </main>

      <SiteFooter />
    </>
  );
}
