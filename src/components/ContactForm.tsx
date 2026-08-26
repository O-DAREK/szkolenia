"use client";

import { useState } from "react";

// Endpoint formularza. Ustaw w .env.local:
//   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/twoj-id
// Zmienne NEXT_PUBLIC_* są wstrzykiwane do buildu (działa ze statycznym eksportem).
const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Fallback, gdy endpoint nie jest skonfigurowany — otwórz klienta poczty.
    if (!ENDPOINT) {
      const subject = encodeURIComponent("Zapytanie ze strony SOC.DAG");
      const body = encodeURIComponent(
        `Imię i nazwisko: ${data.get("name")}\nE-mail: ${data.get("email")}\n\n${data.get("message")}`,
      );
      window.location.href = `mailto:kontakt@soc.dag.pl?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("submitting");
    setError("");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => null);
        setError(json?.errors?.[0]?.message ?? "Nie udało się wysłać wiadomości.");
        setStatus("error");
      }
    } catch {
      setError("Błąd połączenia. Spróbuj ponownie lub napisz na kontakt@soc.dag.pl.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-accent/30 bg-card p-6 text-center"
      >
        <p className="text-lg font-semibold text-accent">Dziękujemy!</p>
        <p className="mt-2 text-sm text-muted">
          Wiadomość została wysłana. Odezwiemy się najszybciej, jak to możliwe.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm text-muted">
          Imię i nazwisko
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded border border-white/10 bg-card px-4 py-2.5 text-main outline-none focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm text-muted">
          Adres e-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded border border-white/10 bg-card px-4 py-2.5 text-main outline-none focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-muted">
          Wiadomość
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded border border-white/10 bg-card px-4 py-2.5 text-main outline-none focus:border-accent"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded border border-accent bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark disabled:opacity-60"
      >
        {status === "submitting" ? "WYSYŁANIE…" : "WYŚLIJ WIADOMOŚĆ"}
      </button>
      <p className="text-xs text-muted">
        Wysyłając formularz akceptujesz przetwarzanie danych w celu obsługi
        zapytania (RODO). Administrator: DAG s.c.
      </p>
    </form>
  );
}
