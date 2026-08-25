# Wytyczne AI-SEO (AEO) — strona kursów i szkoleń DAG

Notatki dotyczące optymalizacji strony pod kątem widoczności w silnikach AI
(Perplexity, ChatGPT/SearchGPT, Claude) oraz architektury RAG.

## 1. Zamiast czystego Reacta używaj Next.js

To absolutna podstawa. Zamiast renderować stronę w przeglądarce (Client-Side
Rendering), trzeba wygenerować gotowy HTML jeszcze przed wysłaniem go do bota.

Next.js to framework oparty na Reakcie, który obsługuje to natywnie:

- **SSG (Static Site Generation):** strona jest budowana do czystych plików
  HTML w momencie wrzucania na serwer. Idealne dla blogów, ofert, wizytówek.
- **SSR (Server-Side Rendering):** serwer generuje HTML w locie dla każdego
  zapytania. Dobre dla danych, które często się zmieniają.

Dzięki temu, gdy bot Perplexity lub ChatGPT odwiedzi stronę, natychmiast
otrzyma pełen tekst, strukturę i linki w surowym HTML-u.

## 2. Zaserwuj sztucznej inteligencji dane w JSON-LD (Schema.org)

Modele językowe „myślą" strukturami danych. Zamiast kazać AI domyślać się,
o czym jest tekst na podstawie wyglądu strony (Tailwind nie ma tu żadnego
znaczenia dla bota), podaj mu dane na tacy.

W sekcji `<head>` strony umieszcza się niewidoczny dla użytkownika skrypt typu
`application/ld+json`. Opisuje on stronę w sposób perfekcyjnie zrozumiały dla
maszyn.

Przykład, czego szuka AI:

- Czy to jest artykuł, produkt, czy firma lokalna?
- Kto jest autorem?
- Jakie są kluczowe funkcje usługi?

## 3. Pisz semantycznym HTML-em, a nie „div-zupą"

Ponieważ w środowisku React + Tailwind bardzo łatwo jest ostylować wszystko za
pomocą tagów `<div>`, programiści często zapominają o semantyce. AI używa tagów
HTML, aby zrozumieć hierarchię ważności informacji.

| Zły nawyk (trudne dla AI)               | Dobry nawyk (ułatwia zrozumienie AI)     |
| --------------------------------------- | ---------------------------------------- |
| `<div className="text-2xl font-bold">`  | `<h1 className="text-2xl font-bold">`    |
| `<div className="menu">`                | `<nav className="menu">`                 |
| `<div className="content">`             | `<article className="content">`          |
| `<div className="footer">`              | `<footer className="footer">`            |

## 4. Formatuj treści pod „Odpowiedzi" (RAG-friendly)

Systemy AI takie jak Perplexity czy SearchGPT działają w architekturze RAG
(Retrieval-Augmented Generation) — wyciągają fragmenty stron i kleją z nich
odpowiedź.

Aby strona była chętnie cytowana:

- Używaj jasnych nagłówków (H2, H3) w formie pytań (np. „Jakie są zalety
  rozwiązania X?").
- Stosuj listy punktowane i tabele — modele językowe uwielbiają wyciągać z nich
  informacje.
- Podawaj bezpośrednie odpowiedzi od razu pod nagłówkiem, a dopiero w kolejnych
  akapitach rozwijaj temat.

## 5. Zadbaj o dostępność (robots.txt)

Upewnij się, że nie blokujesz niechcący botów zbierających dane dla AI. Czasami
popularne szablony blokują wszystko poza Googlebotem.

Sprawdź, czy plik `robots.txt` nie blokuje agentów takich jak:

- **GPTBot** (OpenAI)
- **ChatGPT-User** (wtyczki ChatGPT)
- **anthropic-ai** (Claude)
- **PerplexityBot** (Perplexity)
