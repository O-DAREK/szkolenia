import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj się z SOC.DAG — kursy i szkolenia z cyberbezpieczeństwa. DAG s.c., ul. Dobra 22/24 lok. 12, 00-388 Warszawa. Tel. +48 22 100 77 77, kontakt@soc.dag.pl.",
  alternates: { canonical: "/kontakt/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SOC.DAG",
  alternateName: "DAG s.c.",
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
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+48221007777",
    email: "kontakt@soc.dag.pl",
    contactType: "customer service",
    availableLanguage: "pl",
  },
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <main className="mx-auto max-w-5xl px-6 py-12 md:px-10">
        <header className="mb-10">
          <h1 className="text-3xl font-bold md:text-4xl">Kontakt</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Masz pytania o kursy albo chcesz zorganizować szkolenie dla zespołu?
            Napisz lub zadzwoń — dobierzemy zakres i formę do Twoich potrzeb.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Dane kontaktowe */}
          <section aria-labelledby="dane-kontaktowe">
            <h2 id="dane-kontaktowe" className="mb-5 text-2xl font-semibold">
              Dane kontaktowe
            </h2>
            <ul className="space-y-4 text-muted">
              <li className="flex items-start gap-3">
                <span aria-hidden="true">📍</span>
                <span>
                  <span className="block text-main">DAG s.c.</span>
                  ul. Dobra 22/24 lok. 12, 00-388 Warszawa
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden="true">📞</span>
                <a href="tel:+48221007777" className="text-main hover:text-accent">
                  +48 22 100 77 77
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden="true">✉️</span>
                <a
                  href="mailto:kontakt@soc.dag.pl"
                  className="text-main hover:text-accent"
                >
                  kontakt@soc.dag.pl
                </a>
              </li>
            </ul>

            <dl className="mt-8 space-y-4 text-sm text-muted">
              <div>
                <dt className="text-main">Reklamacje</dt>
                <dd>
                  <a href="mailto:reklamacje@dag.pl" className="hover:text-accent">
                    reklamacje@dag.pl
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-main">Ochrona danych (IOD)</dt>
                <dd>
                  <a href="mailto:iod@dag.pl" className="hover:text-accent">
                    iod@dag.pl
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-main">Dane rejestrowe</dt>
                <dd>NIP 5252262771 · REGON 015453738</dd>
              </div>
            </dl>
          </section>

          {/* Formularz */}
          <section aria-labelledby="formularz">
            <h2 id="formularz" className="mb-5 text-2xl font-semibold">
              Formularz kontaktowy
            </h2>
            <ContactForm />
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
