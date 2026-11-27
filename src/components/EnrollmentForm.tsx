"use client";

import { useState } from "react";
import { courses } from "@/data/courses";
import { FormConsents } from "@/components/FormConsents";
import { sendTo4D } from "@/lib/send4d";


// Terminy do wyboru — placeholdery, do uzupełnienia realnymi datami.
const TERMS = [
  "6–8 października 2026",
  "3–5 listopada 2026",
  "1–3 grudnia 2026",
  "Inny termin — do uzgodnienia",
];

// Kursy, na które można się zapisać (bez szkolenia dla firm — tam formularz kontaktowy).
const ENROLLABLE = courses.filter((c) => c.slug !== "szkolenie-dla-firm");

type Status = "idle" | "submitting" | "success" | "error";

export function EnrollmentForm({ defaultCourse }: { defaultCourse?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const inputClass =
    "w-full rounded border border-white/10 bg-card px-4 py-2.5 text-main outline-none focus:border-accent";

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
      setError("Nie udało się wysłać zgłoszenia. Spróbuj ponownie albo zadzwoń: 22 100 77 77.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-accent/30 bg-card p-6 text-center"
      >
        <p className="text-lg font-semibold text-accent">Dziękujemy za zgłoszenie!</p>
        <p className="mt-2 text-sm text-muted">
          Potwierdzimy zapis i szczegóły terminu e-mailem najszybciej, jak to
          możliwe.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <input type="hidden" name="_form" value="Zapis na kurs" />
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm text-muted">
            Imię i nazwisko
          </label>
          <input id="name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-muted">
            Adres e-mail
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="course" className="mb-1 block text-sm text-muted">
            Kurs
          </label>
          <select
            id="course"
            name="course"
            required
            defaultValue={defaultCourse}
            className={inputClass}
          >
            {ENROLLABLE.map((c) => (
              <option key={c.slug} value={c.title}>
                {c.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="term" className="mb-1 block text-sm text-muted">
            Termin
          </label>
          <select id="term" name="term" required className={inputClass}>
            {TERMS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-muted">
          Wiadomość (opcjonalnie)
        </label>
        <textarea id="message" name="message" rows={4} className={inputClass} />
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
        {status === "submitting" ? "WYSYŁANIE…" : "ZAPISZ SIĘ NA KURS"}
      </button>
    </form>
  );
}
