// Zgody RODO (wymagana) i marketingowa (opcjonalna) — wspólne dla formularzy
// zapisu i kontaktowego. Pola trafiają do FormData rodzica (consent_processing,
// consent_marketing) i dalej do e-maila / Formspree.
export function FormConsents() {
  const boxClass =
    "mt-0.5 h-4 w-4 shrink-0 accent-accent";

  return (
    <div className="space-y-3 text-xs text-muted">
      <label className="flex items-start gap-2.5">
        <input type="checkbox" name="consent_processing" value="tak" required className={boxClass} />
        <span>
          Wyrażam zgodę na przetwarzanie moich danych osobowych przez DAG s.c. w
          celu obsługi mojego zgłoszenia (RODO). Administrator: DAG s.c. *
        </span>
      </label>
      <label className="flex items-start gap-2.5">
        <input type="checkbox" name="consent_marketing" value="tak" className={boxClass} />
        <span>
          Wyrażam zgodę na przetwarzanie moich danych osobowych przez DAG s.c. w
          celach marketingowych obejmujących prezentowanie usług SOC.DAG
          (opcjonalnie).
        </span>
      </label>
    </div>
  );
}
