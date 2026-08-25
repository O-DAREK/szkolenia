import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SOC.DAG — Kursy cyberbezpieczeństwa",
    template: "%s | SOC.DAG",
  },
  description:
    "SOC.DAG · Centrum Bezpieczeństwa. Kursy i szkolenia z cyberbezpieczeństwa — od świadomości dla pracowników MŚP po zaawansowany threat hunting w Microsoft Sentinel.",
  metadataBase: new URL("https://soc.dag.pl"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={inter.variable}>
      <body className="min-h-screen bg-bgdark font-sans text-main antialiased">
        {children}
      </body>
    </html>
  );
}
