// Dane kursów — źródło prawdy dla strony głównej i podstron /kursy/<slug>/.
// Treść merytoryczna pochodzi z materiałów na Dysku Google
// (Marketing/Kursy/na-www). Układ kart wg projektu graficznego.

export type Course = {
  slug: string;
  icon: "shield" | "key" | "link" | "target";
  title: string;
  hours: string; // etykieta w nawiasie na karcie
  cost: "Bezpłatny" | "Płatny";
  price: string; // etykieta ceny na cenniku
  format: string;
  audienceShort: string; // wiersz „Dla:” na karcie
  outcomeShort: string; // wiersz efektu na karcie
  desc: string; // opis na karcie
  ldDesc: string; // opis do JSON-LD
  compliance?: string;
  forWhom: string[]; // „Dla kogo” na podstronie
  program: string[]; // moduły / agenda
  outcomes: string[]; // „Czego się nauczysz”
};

export const courses: Course[] = [
  {
    slug: "szkolenie-dla-firm",
    icon: "shield",
    title: "Szkolenie dla firm",
    hours: "2h",
    cost: "Płatny",
    price: "250 zł netto / os. (grupa do 15 osób)",
    format: "Online (Zoom) lub zajęcia na żywo",
    audienceShort: "Dla: wszystkich pracowników, bez wiedzy technicznej.",
    outcomeShort: "Rozpoznawanie ataków i bezpieczne nawyki w codziennej pracy.",
    desc: "Świadomość zagrożeń dla pracowników MŚP: phishing, vishing, deepfake i ransomware, silne hasła oraz obowiązki wynikające z RODO. Bez technicznego żargonu.",
    ldDesc:
      "Szkolenie świadomościowe z cyberbezpieczeństwa dla pracowników firm: phishing, vishing, deepfake, ransomware, hasła i MFA, RODO. ~2 godziny, online (Zoom).",
    forWhom: [
      "Pracownicy biurowi obsługujący e-mail, chmurę i aplikacje firmowe.",
      "Menedżerowie i kierownicy podejmujący decyzje o przelewach, dostępach i danych.",
      "Pracownicy HR, finansów i obsługi klienta pracujący z danymi osobowymi.",
      "Każda osoba bez technicznego tła, która chce nie dać się oszukać.",
    ],
    program: [
      "Jak wyglądają ataki — i dlaczego akurat Ciebie mogą dotyczyć",
      "Hasła i logowanie — pierwsza linia obrony",
      "Bezpieczna praca na co dzień — e-mail, chmura, praca zdalna",
      "Co zrobić gdy coś pójdzie źle — nie kasuj, nie płać, zgłoś",
      "Twoje prawa i obowiązki — RODO i odpowiedzialność pracownika",
    ],
    outcomes: [
      "Rozpoznajesz phishing, vishing i deepfake, zanim klikniesz lub przelejesz pieniądze.",
      "Używasz menedżera haseł i weryfikacji dwuetapowej — i wiesz dlaczego to ważne.",
      "Bezpiecznie pracujesz z e-mailem, chmurą i na pracy zdalnej.",
      "Wiesz, co zrobić, gdy coś pójdzie źle: nie kasujesz, nie płacisz, zgłaszasz.",
      "Rozumiesz swoje obowiązki wynikające z RODO.",
    ],
  },
  {
    slug: "kurs-podstawowy",
    icon: "key",
    title: "Kurs podstawowy",
    hours: "4h",
    cost: "Bezpłatny",
    price: "Bezpłatny",
    format: "Online (teoria + case studies)",
    audienceShort: "Dla: osób budujących fundament, bez wymagań wstępnych.",
    outcomeShort: "Fundament wiedzy i certyfikat po teście końcowym.",
    desc: "Wprowadzenie do cyberbezpieczeństwa: mechanika ataków na człowieka, higiena (hasła, MFA), samodzielna weryfikacja zagrożeń oraz ścieżki kariery w branży.",
    ldDesc:
      "Bezpłatny kurs podstawowy — wprowadzenie do cyberbezpieczeństwa: mechanika ataków, hasła i MFA, weryfikacja zagrożeń, zawód w cyberbezpieczeństwie. ~4 godziny.",
    forWhom: [
      "Osoby rozważające pracę w cyberbezpieczeństwie.",
      "Wszyscy, którzy chcą zbudować rzetelny fundament przed dalszą nauką.",
      "Bez wymagań wstępnych.",
    ],
    program: [
      "Pretest „Czy dasz się złapać?” — 5 prawdziwych przykładów",
      "Jak wyglądają ataki na ludzi (phishing, vishing, deepfake)",
      "Hasła i MFA — trzy nawyki zamiast teorii",
      "Bezpieczna codzienność — ekran, mail, chmura, biuro, AI",
      "Zajrzyj pod maskę — jak to działa i czym to sprawdzisz",
      "Zawód: cyberbezpieczeństwo — ścieżki, realia, pierwsze kroki",
      "Test końcowy — certyfikat i pomiar postępu (próg 70%)",
    ],
    outcomes: [
      "Rozpoznawania mechaniki typowych ataków na człowieka i tego, dlaczego działają.",
      "Stosowania podstawowej higieny pracy: menedżera haseł, MFA, weryfikacji innym kanałem.",
      "Tego, co dzieje się „pod maską”: DNS, HTTPS, skróty, logi, CVE/CVSS.",
      "Samodzielnej weryfikacji podejrzanej wiadomości, domeny i pliku z darmowymi narzędziami.",
      "Rodzajów ścieżek kariery, reali pracy oraz granic prawnych i etycznych zawodu.",
    ],
  },
  {
    slug: "kurs-sredniozaawansowany",
    icon: "link",
    title: "Kurs średniozaawansowany",
    hours: "9h",
    cost: "Płatny",
    price: "1 800 zł netto / os.",
    format: "Online (teoria + case studies)",
    compliance: "Zgodny z CompTIA Security+ SY0-701 (refresh 2026)",
    audienceShort: "Dla: specjalistów IT — administratorów, DevOps, helpdesku.",
    outcomeShort: "Hardening i architektura obrony; zgodność z CompTIA Security+.",
    desc: "Fundamenty techniczne obrony: hardening Linux i Windows (CIS Benchmarks), segmentacja sieci i Zero Trust, kryptografia i PKI, zarządzanie tożsamością (MFA, RBAC).",
    ldDesc:
      "Kurs średniozaawansowany (IT Track): hardening systemów, bezpieczeństwo sieci, kryptografia i PKI, zarządzanie tożsamością. ~9 godzin, zgodny z CompTIA Security+ SY0-701.",
    forWhom: [
      "Administratorzy systemów Linux lub Windows.",
      "Administratorzy sieci chcący rozumieć zagrożenia od strony obrońcy.",
      "Programiści i DevOps/SRE piszący i wdrażający bezpieczniejszy kod oraz infrastrukturę.",
      "Pracownicy helpdesku reagujący na pierwsze sygnały incydentu.",
    ],
    program: [
      "Zagrożenia i wektory ataku — jak myśli napastnik",
      "Hardening systemów operacyjnych — Linux i Windows (CIS Benchmarks)",
      "Bezpieczeństwo sieci i architektura — segmentacja, firewalle, VPN, Zero Trust",
      "Kryptografia i PKI — szyfrowanie, certyfikaty X.509, TLS",
      "Zarządzanie tożsamością i dostępem — MFA, SSO, RBAC/ABAC, PAM",
    ],
    outcomes: [
      "Rozpoznawania typów malware i ataków phishingowych i opisywania ich zespołowi.",
      "Hardeningu Linux i Windows wg CIS Benchmarks i tego, które ustawienia domyślne są groźne.",
      "Projektowania segmentacji sieci, czym są firewalle, VPN i Zero Trust w praktyce.",
      "Dobierania właściwego szyfrowania i tego, jak działa TLS oraz co może pójść nie tak.",
      "Wdrażania MFA, czym są OAuth i RBAC, zarządzania bezpiecznie kontami uprzywilejowanymi.",
    ],
  },
  {
    slug: "kurs-zaawansowany",
    icon: "target",
    title: "Kurs zaawansowany",
    hours: "24h",
    cost: "Płatny",
    price: "od 4 200 zł netto / os.",
    format: "Online (teoria + case studies + ćwiczenia praktyczne)",
    audienceShort:
      "Dla: analityków SOC i specjalistów IT po poziomie podstawowym/średnim.",
    outcomeShort: "Samodzielne wyszukiwanie ukrytych napastników w telemetrii.",
    desc: "Proaktywne „polowanie na zagrożenia” na platformie SentinelOne: język KQL, hipotezy oparte na MITRE ATT&CK, tworzenie reguł detekcji i eskalacja znalezisk.",
    ldDesc:
      "Zaawansowany kurs threat huntingu na platformie SentinelOne: KQL, hipotezy MITRE ATT&CK, reguły analityczne, eskalacja do L2/IR. 24 godziny.",
    forWhom: [
      "Analitycy SOC odpowiedzialni za monitorowanie bezpieczeństwa.",
      "Administratorzy bezpieczeństwa i specjaliści IT po poziomie podstawowym/średnim.",
      "Osoby mające wstępną styczność z logami oraz podstawami sieci.",
    ],
    program: [
      "Filozofia i metodyka proaktywnego threat huntingu",
      "Architektura SentinelOne i źródła danych",
      "KQL — od podstaw do poziomu huntingowego",
      "Polowanie na konkretne techniki ataku (MITRE ATT&CK)",
      "Narzędzia huntingowe w SentinelOne",
      "Od polowania do detekcji i eskalacji",
    ],
    outcomes: [
      "Pisania zapytań KQL łączących filtrowanie, agregację, join/union i operacje czasowe.",
      "Formułowania hipotez huntingowych opartych na technikach MITRE ATT&CK i przekładania ich na zapytania.",
      "Wykrywania symulowanego śladu ataku (LotL, persystencja, ruch boczny) w środowisku laboratoryjnym.",
      "Przekształcania skutecznych zapytań w regułę analityczną generującą incydent.",
      "Dokumentowania znaleziska i przygotowywania zwięzłej eskalacji do L2/IR.",
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
