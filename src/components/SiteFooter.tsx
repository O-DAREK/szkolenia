import Link from "next/link";

export function SiteFooter() {
  return (
    <footer id="kontakt" className="border-t border-white/5 bg-footer px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-szkolenia-dag-jasne.png"
            alt="SZKOLENIA.DAG"
            width={920}
            height={120}
            className="mb-4 h-8 w-auto"
          />
          <p className="mb-5 text-sm text-muted">
            Ochrona na najwyższym poziomie dla małych i średnich firm. Całodobowe
            monitorowanie, wykrywanie zagrożeń i reagowanie na incydenty.
          </p>
          <div className="flex gap-2.5">
            <a
              href="https://www.linkedin.com/showcase/98615770/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs text-main transition-colors hover:bg-accent hover:text-white"
            >
              in
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
              { label: "Regulamin", href: "/regulamin/" },
              { label: "Polityka cookies", href: "/polityka-cookies/" },
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
              { label: "Monitoring 24/7", slug: "monitoring" },
              { label: "Reakcja na incydenty", slug: "incident-response" },
              { label: "Threat Hunting", slug: "threat-hunting" },
              { label: "Zgodność z przepisami", slug: "compliance" },
              { label: "System Hardening", slug: "hardening" },
              { label: "Business Email Protection", slug: "email-protection" },
            ].map((s) => (
              <li key={s.slug}>
                {/* Usługi SOC są opisane na soc.dag.pl */}
                <a
                  href={`https://soc.dag.pl/services/${s.slug}`}
                  className="transition-colors hover:text-accent"
                >
                  {s.label}
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
