import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bgdark/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-5 md:px-10">
        <Link href="/" className="flex items-center gap-2">
          <strong className="text-2xl tracking-wide">SOC.DAG</strong>
          <span className="text-sm font-light text-muted">
            Centrum Bezpieczeństwa
          </span>
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
  );
}
