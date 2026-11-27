// Wysyłka formularzy (zapis na kurs / kontakt) prosto do iCRM (4D).
// Ta sama metoda 4D przyjmuje formularze z soc.dag.pl: tworzy rekord w [Klienci]
// (Tag_importu = "WEB_SOC") i zapisuje cały obiekt w polu Obiekt_form_web.
// Pole `source` pozwala w iCRM odróżnić zgłoszenia z szkolenia.dag.pl.
export const ENDPOINT_4D = "https://serwus.dag.pl/4DACTION/soc_formularz";

export async function sendTo4D(form: HTMLFormElement): Promise<void> {
  const data = new FormData(form);

  // Honeypot — boty wypełniają ukryte pole; udajemy sukces i nic nie wysyłamy.
  if (data.get("_gotcha")) return;

  const fields: Record<string, string> = {};
  data.forEach((value, key) => {
    if (!key.startsWith("_")) fields[key] = String(value).trim();
  });

  const body = {
    ...fields,
    consent_processing: fields.consent_processing ? "tak" : "nie",
    consent_marketing: fields.consent_marketing ? "tak" : "nie",
    form: String(data.get("_form") ?? "Formularz"),
    source: "szkolenia.dag.pl",
    page: window.location.pathname,
    sentAt: new Date().toISOString(),
  };

  const res = await fetch(ENDPOINT_4D, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
}
