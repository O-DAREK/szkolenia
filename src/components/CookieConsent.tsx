"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Zgoda na cookies analityczne (Google Tag / Google Analytics).
// Zbieramy WYŁĄCZNIE cookies potrzebne Google Tag — bez zgody nic nie zapisujemy
// (Consent Mode startuje z analytics_storage: 'denied', patrz layout.tsx).
const KEY = "cookie-consent"; // "granted" | "denied"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function updateConsent(state: "granted" | "denied") {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("consent", "update", { analytics_storage: state });
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (stored === "granted") updateConsent("granted");
      if (stored !== "granted" && stored !== "denied") setVisible(true);
    } catch {
      // Brak dostępu do localStorage (tryb prywatny) — pokaż baner.
      setVisible(true);
    }
  }, []);

  function choose(state: "granted" | "denied") {
    try {
      localStorage.setItem(KEY, state);
    } catch {
      /* ignorujemy brak localStorage */
    }
    updateConsent(state);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Zgoda na pliki cookie"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-white/10 bg-footer/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="max-w-3xl text-sm text-muted">
          Używamy plików cookie Google Analytics (Google Tag), aby analizować ruch
          na stronie. To jedyne cookies, jakie zbieramy — nie stosujemy
          reklamowych ani śledzących. Bez Twojej zgody nie zapisujemy żadnych
          plików cookie. Szczegóły w{" "}
          <Link href="/polityka-cookies/" className="text-accent hover:underline">
            polityce cookies
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="rounded border border-muted px-5 py-2.5 text-sm font-semibold text-main transition-colors hover:border-accent hover:text-accent"
          >
            Odrzucam
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="rounded border border-accent bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  );
}
