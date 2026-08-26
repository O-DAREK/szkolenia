import Link from "next/link";

export function SiteFooter() {
  return (
    <footer id="kontakt" className="border-t border-white/5 bg-footer px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
        <div>
          <p className="mb-4 inline-block border border-main px-2.5 py-1.5 text-2xl font-bold tracking-widest">
            DAG
          </p>
          <p className="mb-5 text-sm text-muted">
            Ochrona na najwyższym poziomie dla małych i średnich firm. Całodobowe
            monitorowanie, wykrywanie zagrożeń i reagowanie na incydenty.
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
            {[
              { label: "Strona główna", href: "/" },
              { label: "Kursy", href: "/#kursy" },
              { label: "Cennik", href: "/cennik/" },
              { label: "O nas", href: "/o-nas/" },
              { label: "FAQ", href: "/faq/" },
              { label: "Kontakt", href: "/kontakt/" },
            ].map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
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
              <Link href="/kontakt/" className="transition-colors hover:text-accent">
                Formularz kontaktowy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
