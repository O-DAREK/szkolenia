import type { Metadata } from "next";
import { Inter, Exo_2 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// Font wyświetlany w nagłówku hero (propozycja — do zmiany, jeśli Łukasz woli inny).
const display = Exo_2({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Identyfikator Google Analytics (Google Tag). Ustaw w .env.local:
//   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
// Bez tej zmiennej GA się nie ładuje i żadne cookies nie są zapisywane.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: {
    default: "SOC.DAG — Kursy cyberbezpieczeństwa",
    template: "%s | SOC.DAG",
  },
  description:
    "SOC.DAG · Centrum Bezpieczeństwa. Kursy i szkolenia z cyberbezpieczeństwa — od świadomości dla pracowników MŚP po zaawansowany threat hunting na platformie SentinelOne.",
  metadataBase: new URL("https://soc.dag.pl"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-screen bg-bgdark font-sans text-main antialiased">
        {/* Google Tag (Consent Mode v2) — domyślnie wszystko 'denied',
            więc bez zgody użytkownika nie zapisujemy żadnych cookies. */}
        {GA_ID && (
          <>
            <Script id="gtag-consent-default" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  'ad_storage': 'denied',
                  'ad_user_data': 'denied',
                  'ad_personalization': 'denied',
                  'analytics_storage': 'denied'
                });
              `}
            </Script>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { 'anonymize_ip': true });
              `}
            </Script>
          </>
        )}

        {children}

        <CookieConsent />
      </body>
    </html>
  );
}
