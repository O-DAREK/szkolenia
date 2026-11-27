import Link from "next/link";

// Główny przycisk w nagłówku. Domyślnie: bezpłatna konsultacja na soc.dag.pl.
// Podstrony kursów podmieniają go na „Formularz zapisu” / „Formularz kontaktowy”.
type Cta = { label: string; href: string };
const DEFAULT_CTA: Cta = {
  label: "BEZPŁATNA KONSULTACJA",
  href: "https://soc.dag.pl/free-consultation",
};

export function SiteHeader({ cta = DEFAULT_CTA }: { cta?: Cta }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bgdark/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-5 md:px-10">
        <Link href="/" className="flex items-center" aria-label="szkolenia.dag.pl – strona główna">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-szkolenia-dag-jasne.png"
            alt="SZKOLENIA.DAG"
            width={920}
            height={120}
            className="h-7 w-auto md:h-9"
          />
        </Link>
        <nav aria-label="Główna nawigacja" className="flex items-center gap-2 text-sm">
          <Link href="/#kursy" className="mx-3 text-muted transition-colors hover:text-accent">
            KURSY
          </Link>
          <Link href="/cennik/" className="mx-3 text-muted transition-colors hover:text-accent">
            CENNIK
          </Link>
          <Link href="/o-nas/" className="mx-3 text-muted transition-colors hover:text-accent">
            O NAS
          </Link>
          <Link href="/faq/" className="mx-3 text-muted transition-colors hover:text-accent">
            FAQ
          </Link>
          <Link href="/kontakt/" className="mx-3 text-muted transition-colors hover:text-accent">
            KONTAKT
          </Link>
        </nav>
        <div className="flex gap-3">
          <a
            href={cta.href}
            className="rounded border border-accent bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            {cta.label}
          </a>
          <a
            href="https://soc.dag.pl/login#loginForm"
            className="rounded border border-muted px-5 py-2.5 text-sm font-semibold text-main transition-colors hover:border-accent hover:text-accent"
          >
            PANEL KLIENTA
          </a>
        </div>
      </div>
    </header>
  );
}
