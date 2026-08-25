# CLAUDE.md — strona kursów i szkoleń DAG

Strona ofertowa kursów i szkoleń DAG, optymalizowana pod widoczność w silnikach
AI (Perplexity, ChatGPT/SearchGPT, Claude) i architekturę RAG (AEO).

Pełne wytyczne: [docs/wytyczne-ai-seo.md](docs/wytyczne-ai-seo.md). Skrót zasad,
których trzymaj się przy pisaniu kodu:

1. **Next.js zamiast czystego Reacta** — renderuj po stronie serwera. SSG dla
   treści statycznych (oferta, blog, wizytówka), SSR dla danych zmiennych. Bot
   ma dostać gotowy HTML, nie pusty div do zhydrowania.
2. **JSON-LD (Schema.org)** — w `<head>` skrypt `application/ld+json` opisujący
   stronę dla maszyn (typ: Course/Organization/Article, autor, kluczowe cechy
   usługi). Nie każ AI zgadywać z wyglądu.
3. **Semantyczny HTML, nie „div-zupa"** — `<h1>`/`<nav>`/`<article>`/`<footer>`
   zamiast `<div>` z klasami Tailwind. Tagi niosą hierarchię ważności.
4. **Treści RAG-friendly** — nagłówki H2/H3 w formie pytań, listy i tabele,
   bezpośrednia odpowiedź od razu pod nagłówkiem, rozwinięcie w dalszych
   akapitach.
5. **Nie blokuj botów AI w `robots.txt`** — przepuść GPTBot, ChatGPT-User,
   anthropic-ai, PerplexityBot.

## Materiały źródłowe (Google Drive)

Treści merytoryczne strony (opisy kursów, oferta, dokumenty formalne) pochodzą
z Dysku Google, folder **`Marketing/Kursy/na-www`** (konektor MCP „Google Drive").

- Przy pracy nad treścią strony **sprawdzaj zawartość tego folderu** jako źródło
  prawdy — zamiast wymyślać opisy kursów, wczytuj je stąd.
- ID folderu na Dysku: `1zuXYreo9gh_9MIlDjXVm_9RHCFIhHY7F`
  (`Kursy` → `1WEa7qTNdw5biyQsMVEqq11-Cx1GUhlim`, `Marketing` →
  `1WnaHCRqAhbG_nvOfqbY0gFm6U3vgql4v`).
- Pliki w folderze to skróty (shortcuts) do dokumentów `.docx`/Google Docs
  — m.in. karty produktów, opisy kursów (podstawowy / średniozaawansowany /
  Incident Response), tematy wg stanowisk, regulamin, procedury.
- Dostęp: narzędzia `mcp__claude_ai_Google_Drive__*` (`search_files` po
  `parentId`, `read_file_content`). Konektor jest user-scoped — nie zapisuje się
  w repo i ładuje się dopiero po starcie sesji z aktywnym połączeniem.
- **Uwaga:** pliki w `na-www` to skróty, a `read_file_content` NIE podąża za
  skrótem (zwraca pusto) i metadane nie zawierają `targetId`. Dlatego poniżej są
  ID **plików docelowych** — czytaj je wprost przez `read_file_content`, bez
  szukania po tytule.

### Mapa plików (ID docelowe do `read_file_content`)

| Dokument | fileId docelowy |
| --- | --- |
| kurs podstawowy | `1fxRv0hlhB5aq-MP1TX_1-SNZSdME0PSi` |
| Program: szkolenie dla pracowników + kurs średniozaawansowany | `1CpyMNJEnbG-Bhr3M59gUtesWGJp-IfSN` |
| Kurs zaawansowany: Incident Response (SentinelOne, BUR) | `1Y2wgHXOi8bsYlc7A4O0oTQRCUVjqaT--` |
| Karty produktów (Google Doc) | `15KLY3S_UxAh-NqbDU2kPPyVISVHodnwdzYmZgseJUxo` |
| tematy dla stanowisk z cyberbezpieczeństwa | `1MhURDLmRs1lL3cXj0cmsR1Ta2E5O8I5d` |
| tematy dla stanowisk spoza cyberbezpieczeństwa | `1dqj5mTZ83KDehyHHBh72Qkb8_OUrEaA7` |
| na jakie kursy powinni się zapisać (matryca) | `1f6AIh3a_yLeUiAtVQhwXTDD7DD2RrCfm` |
| Procedura dostępności (WCAG 2.1 AA) | `1ePD1yAqOyZjOwjIRSJaCz0cIWbFdVwRU` |
| Procedura obsługi reklamacji | `12GsyZcxY9ekgCRB0hO6Pkau3OMznZcjp` |
| regulamin dag (DAG s.c., Warszawa) | `1gQb1AfX-A7HAPbAhxsrGuy94vWhvy8gM` |

ID mogą się zdezaktualizować, jeśli pliki zostaną zastąpione nowymi — przy
pustym/nieaktualnym odczycie wróć do `search_files` po tytule i zaktualizuj tabelę.

## Deploy

- CI: [.github/workflows/deploy.yml](.github/workflows/deploy.yml) — na `push`
  do `main` (lub ręcznie przez `workflow_dispatch`).
- Mechanizm: FTP sync plików z repo na serwer ISPConfig (`server-dir: /web/`)
  akcją `SamKirkland/FTP-Deploy-Action`. Sekrety: `PROD_HOST`, `ISP_USER`,
  `ISP_PASSWORD`.
- Workflow: `checkout` → `setup-node` → `npm ci` → `npm run build` → FTP sync
  katalogu `out/` (`local-dir: ./out/`) na serwer. Deploy wysyła **statyczny
  build, nie źródła**.
- Cel to serwer współdzielony (`web17`), stąd nacisk na statyczny hosting (SSG)
  zamiast Node runtime.

## Stack i komendy

- **Next.js 15** (App Router) + **TypeScript** + **Tailwind CSS 3**.
- **Statyczny eksport**: [next.config.mjs](next.config.mjs) ma `output: 'export'`
  (build → katalog `out/`), `images.unoptimized` i `trailingSlash: true`
  (URL-e w stylu `kursy/index.html`, działają na Apache/FTP bez rewrite).
- Skrypty ([package.json](package.json)):
  - `npm run dev` — serwer deweloperski.
  - `npm run build` — build + statyczny eksport do `out/`.
  - `npm run preview` — podgląd statycznego `out/` (`npx serve`).
  - Lint nie jest jeszcze skonfigurowany.

## Struktura

- `src/app/` — App Router: `layout.tsx` (metadata, `lang="pl"`), `page.tsx`
  (strona główna — semantyczny HTML + JSON-LD), `globals.css` (Tailwind).
- `public/` — pliki statyczne, m.in. `robots.txt` (przepuszcza boty AI).
- `docs/` — dokumentacja (wytyczne AEO).
- `out/`, `.next/`, `node_modules/` — artefakty builda, w `.gitignore`.
