"use client";

import { useState } from "react";
import { FormConsents } from "@/components/FormConsents";
import { sendTo4D } from "@/lib/send4d";


type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setError("");
    try {
      // Zgłoszenie trafia prosto do iCRM (4D) — zob. src/lib/send4d.ts
      await sendTo4D(form);
      setStatus("success");
      form.reset();
    } catch {
      setError("Nie udało się wysłać wiadomości. Spróbuj ponownie albo zadzwoń: 22 100 77 77.");
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
      <input type="hidden" name="_form" value="Kontakt" />
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
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

      <FormConsents />

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
    </form>
  );
}
