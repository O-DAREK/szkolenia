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
    price: "Wycena indywidualna",
    format: "Online (Zoom), zajęcia na żywo",
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
    format: "PDF + platforma e-learningowa (nagrane wideo)",
    audienceShort: "Dla: osób budujących fundament, bez wymagań wstępnych.",
    outcomeShort: "Fundament wiedzy i certyfikat po teście końcowym.",
    desc: "Wprowadzenie do cyberbezpieczeństwa: mechanika ataków na człowieka, higiena (hasła, MFA), samodzielna weryfikacja zagrożeń oraz ścieżki kariery w branży.",
    ldDesc:
      "Bezpłatny kurs podstawowy — wprowadzenie do cyberbezpieczeństwa: mechanika ataków, hasła i MFA, weryfikacja zagrożeń, zawód w cyberbezpieczeństwie. ~4 godziny.",
    forWhom: [
      "Osoby rozważające pracę w cyberbezpieczeństwie.",
      "Wszyscy, którzy chcą zbudować rzetelny fundament przed dalszą nauką.",
      "Bez wymagań wstępnych — wystarczy codzienne korzystanie z komputera.",
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
      "Rozpoznajesz mechanikę typowych ataków na człowieka i wiesz, dlaczego działają.",
      "Stosujesz podstawową higienę: menedżer haseł, MFA, weryfikacja innym kanałem.",
      "Rozumiesz, co dzieje się „pod maską”: DNS, HTTPS, skróty, logi, CVE/CVSS.",
      "Samodzielnie weryfikujesz podejrzaną wiadomość, domenę i plik darmowymi narzędziami.",
      "Znasz ścieżki kariery, realia pracy oraz granice prawne i etyczne zawodu.",
    ],
  },
  {
    slug: "kurs-sredniozaawansowany",
    icon: "link",
    title: "Kurs średniozaawansowany",
    hours: "9h",
    cost: "Bezpłatny",
    price: "Bezpłatny",
    format: "PDF + platforma e-learningowa (nagrane wideo)",
    compliance: "Zgodny z CompTIA Security+ SY0-701 (refresh 2026)",
    audienceShort: "Dla: specjalistów IT — administratorów, DevOps, helpdesku.",
    outcomeShort: "Hardening i architektura obrony; zgodność z CompTIA Security+.",
    desc: "Fundamenty techniczne obrony: hardening Linux i Windows (CIS Benchmarks), segmentacja sieci i Zero Trust, kryptografia i PKI, zarządzanie tożsamością (MFA, RBAC).",
    ldDesc:
      "Bezpłatny kurs średniozaawansowany (IT Track): hardening systemów, bezpieczeństwo sieci, kryptografia i PKI, zarządzanie tożsamością. ~9 godzin, zgodny z CompTIA Security+ SY0-701.",
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
      "Rozpoznajesz typy malware i ataki phishingowe — i potrafisz je opisać zespołowi.",
      "Hardenujesz Linux i Windows wg CIS Benchmarks i wiesz, które ustawienia domyślne są groźne.",
      "Projektujesz segmentację sieci, rozumiesz firewalle, VPN i Zero Trust w praktyce.",
      "Dobierasz właściwe szyfrowanie i rozumiesz, jak działa TLS oraz co może pójść nie tak.",
      "Wdrażasz MFA, rozumiesz OAuth i RBAC, zarządzasz bezpiecznie kontami uprzywilejowanymi.",
    ],
  },
  {
    slug: "kurs-zaawansowany",
    icon: "target",
    title: "Kurs zaawansowany",
    hours: "Threat Hunting",
    cost: "Płatny",
    price: "Wycena indywidualna",
    format: "Online (teoria + case studies + ćwiczenia praktyczne)",
    audienceShort:
      "Dla: analityków SOC i specjalistów IT po poziomie podstawowym/średnim.",
    outcomeShort: "Samodzielne wyszukiwanie ukrytych napastników w telemetrii.",
    desc: "Proaktywne „polowanie na zagrożenia” w Microsoft Sentinel: język KQL, hipotezy oparte na MITRE ATT&CK, tworzenie reguł detekcji i eskalacja znalezisk.",
    ldDesc:
      "Zaawansowany kurs threat huntingu w Microsoft Sentinel: KQL, hipotezy MITRE ATT&CK, reguły analityczne, eskalacja do L2/IR.",
    forWhom: [
      "Analitycy SOC odpowiedzialni za monitorowanie bezpieczeństwa.",
      "Administratorzy bezpieczeństwa i specjaliści IT po poziomie podstawowym/średnim.",
      "Osoby mające wstępną styczność z logami oraz podstawami sieci.",
    ],
    program: [
      "Filozofia i metodyka proaktywnego threat huntingu",
      "Architektura Microsoft Sentinel i źródła danych",
      "KQL — od podstaw do poziomu huntingowego",
      "Polowanie na konkretne techniki ataku (MITRE ATT&CK)",
      "Narzędzia huntingowe w Sentinel",
      "Od polowania do detekcji i eskalacji",
    ],
    outcomes: [
      "Piszesz zapytania KQL łączące filtrowanie, agregację, join/union i operacje czasowe.",
      "Formułujesz hipotezy huntingowe oparte na technikach MITRE ATT&CK i przekładasz je na zapytania.",
      "Wykrywasz symulowany ślad ataku (LotL, persystencja, ruch boczny) w środowisku laboratoryjnym.",
      "Przekształcasz skuteczne zapytanie w regułę analityczną generującą incydent.",
      "Dokumentujesz znalezisko i przygotowujesz zwięzłą eskalację do L2/IR.",
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
