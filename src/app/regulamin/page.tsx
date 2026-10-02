import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Regulamin szkoleń i kursów",
  description:
    "Regulamin szkoleń i kursów z cyberbezpieczeństwa DAG s.c. — zasady zgłaszania i uczestnictwa, płatności, rezygnacji, odstąpienia, reklamacji oraz przetwarzania danych osobowych.",
  alternates: { canonical: "/regulamin/" },
};

// Treść regulaminu — z dokumentu „regulamin dag" (Dysk Google). Obowiązuje od 14.08.2026.
const sections: { title: string; items: string[] }[] = [
  {
    title: "§ 1. Postanowienia ogólne",
    items: [
      "Regulamin określa zasady zgłaszania i uczestnictwa w szkoleniach i kursach z zakresu cyberbezpieczeństwa, zawierania umów, płatności, rezygnacji, odstąpienia od umowy, reklamacji oraz przetwarzania danych osobowych.",
      "Organizatorem jest DAG s.c., ul. Dobra 22/24, 00-388 Warszawa, e-mail: biuro@dag.pl, tel. 22 100 7777, NIP: 5252262771, REGON 015453738.",
      "Przesłanie zgłoszenia jest równoznaczne z zapoznaniem się z Regulaminem i akceptacją jego treści. Regulamin jest udostępniany nieodpłatnie na stronie internetowej Organizatora.",
      "Regulamin nie wyłącza ani nie ogranicza bezwzględnie obowiązujących praw Konsumenta oraz Przedsiębiorcy na prawach konsumenta (PNPK). W razie sprzeczności stosuje się przepis prawa.",
    ],
  },
  {
    title: "§ 2. Definicje",
    items: [
      "Organizator – DAG s.c.; Uczestnik – osoba fizyczna biorąca udział w usłudze; Zamawiający – podmiot zgłaszający Uczestnika i zobowiązany do zapłaty; Konsument – osoba fizyczna zawierająca umowę niezwiązaną z działalnością gospodarczą; PNPK (przedsiębiorca na prawach konsumenta) – osoba fizyczna zawierająca umowę związaną z działalnością gospodarczą niemającą dla niej charakteru zawodowego.",
      "Usługa szkoleniowa – kurs otwarty (na poziomie podstawowym, średniozaawansowanym albo zaawansowanym) lub szkolenie zamknięte dla firm. Materiały szkoleniowe – wszelkie treści udostępniane Uczestnikowi (prezentacje, nagrania, pliki, ćwiczenia, testy).",
    ],
  },
  {
    title: "§ 3. Zgodne z prawem wykorzystanie wiedzy",
    items: [
      "Usługi i Materiały szkoleniowe mają charakter wyłącznie edukacyjny. Wiedza i narzędzia przekazywane w ich ramach przeznaczone są do nauki oraz działań obronnych, prowadzonych w środowiskach testowych lub na systemach, wobec których Uczestnik posiada zgodę uprawnionego podmiotu.",
      "Zabronione jest wykorzystywanie wiedzy i Materiałów do działań bezprawnych, w szczególności do nieuprawnionego dostępu do systemów, przełamywania zabezpieczeń, pozyskiwania danych bez podstawy prawnej lub testowania cudzej infrastruktury bez zgody. Uczestnik ponosi pełną odpowiedzialność za sposób wykorzystania wiedzy.",
    ],
  },
  {
    title: "§ 4. Zgłoszenie i zawarcie umowy",
    items: [
      "Zgłoszenie składa się przez formularz na stronie Organizatora albo pocztą elektroniczną. Zgłoszenie w imieniu podmiotu składa osoba uprawniona do zaciągania zobowiązań finansowych.",
      "Umowa zostaje zawarta z chwilą potwierdzenia przyjęcia zgłoszenia przez Organizatora pocztą elektroniczną, a przy sprzedaży z natychmiastowym dostępem do treści cyfrowych – po dokonaniu płatności.",
      "Organizator może odmówić przyjęcia zgłoszenia, w szczególności gdy podane dane są nieprawdziwe, brak jest wolnych miejsc, płatność nie została dokonana albo zachodzi podejrzenie wykorzystania sprzecznego z § 3. Wpłacone środki podlegają wówczas zwrotowi w terminie 14 dni.",
    ],
  },
  {
    title: "§ 5. Ceny i płatności",
    items: [
      "Ceny podawane są w złotych polskich. Ceny są zwolnione z VAT. Cena obejmuje udział w zajęciach, Materiały szkoleniowe oraz certyfikat lub zaświadczenie odbycia szkolenia lub kursu na warunkach z § 8; nie obejmuje kosztów dojazdu i zakwaterowania Uczestnika.",
      "Płatność następuje na podstawie faktury (pro forma) w terminie w niej wskazanym, nie dłuższym niż 24 godziny od zawarcia umowy. W przypadku kursów z natychmiastowym dostępem do treści cyfrowych warunkiem ich udostępnienia jest uprzednie dokonanie płatności. Brak zapłaty uprawnia Organizatora do wstrzymania świadczenia po uprzednim wezwaniu.",
      "Dla Zamawiających niebędących Konsumentem ani PNPK (klientów firmowych) rozliczających się przelewem na podstawie faktury termin płatności wynosi 7 dni od dnia wystawienia faktury, jednak nie później niż 3 dni przed rozpoczęciem kursu. Organizator może uzależnić udział w kursie od uprzedniego zaksięgowania wpłaty.",
      "Organizator może udzielać rabatów, w szczególności przy zgłoszeniu kilku Uczestników z jednego podmiotu. Warunki promocji określane są odrębnie.",
    ],
  },
  {
    title: "§ 6. Rezygnacja i zmiany organizacyjne",
    items: [
      "Rezygnację Zamawiający zgłasza pocztą elektroniczną; decyduje data wpływu. Dla Zamawiającego niebędącego Konsumentem ani PNPK: rezygnacja na więcej niż 14 dni przed rozpoczęciem – zwrot 100%; na 14 dni lub mniej – obciążenie 100% ceny. Zamiast osoby zgłoszonej Zamawiający może bez opłat wskazać inną osobę.",
      "Organizator może zmienić godziny, miejsce, trenera lub agendę, z zachowaniem zakresu i czasu trwania. W razie zmiany daty, miasta albo istotnej zmiany zakresu Uczestnik może przenieść udział na inny termin albo odstąpić od umowy i otrzymać zwrot całości wpłaty.",
      "Organizator może odwołać kurs z przyczyn od niego niezależnych (m.in. zbyt mała liczba Uczestników). Przysługuje wówczas zwrot 100% wpłaty w terminie 14 dni albo – za zgodą Uczestnika – udział w innym terminie.",
    ],
  },
  {
    title: "§ 7. Prawo odstąpienia – Konsument i PNPK",
    items: [
      "Konsument oraz PNPK, który zawarł umowę na odległość, może odstąpić od niej w terminie 14 dni od dnia jej zawarcia, bez podania przyczyny, składając oświadczenie pocztą elektroniczną lub pisemnie. Zwrot płatności następuje w terminie 14 dni.",
      "Prawo odstąpienia nie przysługuje co do treści cyfrowych dostarczanych bez nośnika materialnego, jeżeli Uczestnik wyraził wyraźną zgodę na rozpoczęcie ich dostarczania przed upływem terminu i przyjął do wiadomości utratę tego prawa. Jeżeli zgoda nie została udzielona, treści udostępniane są po upływie terminu do odstąpienia.",
      "Jeżeli Uczestnik zażądał rozpoczęcia świadczenia przed upływem terminu, a następnie odstąpił, zapłaci za świadczenie spełnione do chwili odstąpienia, proporcjonalnie do jego zakresu.",
    ],
  },
  {
    title: "§ 8. Materiały, prawa autorskie i certyfikaty",
    items: [
      "Materiały szkoleniowe podlegają ochronie prawnej i pozostają własnością Organizatora. Uczestnik otrzymuje niewyłączną, niezbywalną licencję na korzystanie z nich wyłącznie na własny użytek edukacyjny.",
      "Bez zgody Organizatora zabronione jest w szczególności nagrywanie zajęć, kopiowanie, rozpowszechnianie, odsprzedaż Materiałów, udostępnianie danych logowania osobom trzecim oraz wykorzystywanie Materiałów do prowadzenia konkurencyjnych szkoleń lub do trenowania modeli sztucznej inteligencji.",
      "Organizator wydaje certyfikat lub zaświadczenie uczestnictwa lub ukończenia, jeżeli przewiduje to opis usługi i Uczestnik spełnił jego warunki. Certyfikat i zaświadczenie nie są dokumentami urzędowym ani nie potwierdzają uprawnień zawodowych.",
    ],
  },
  {
    title: "§ 9. Reklamacje",
    items: [
      "Reklamacje składa się pocztą elektroniczną na adres reklamacje@dag.pl albo pisemnie na adres siedziby Organizatora. Reklamacja powinna zawierać dane zgłaszającego, nazwę i termin usługi oraz opis zastrzeżeń.",
      "Organizator rozpatruje reklamację w terminie 14 dni od jej otrzymania i przekazuje odpowiedź na adres zgłaszającego. Wobec Konsumenta i PNPK Organizator odpowiada za zgodność usługi z umową na zasadach określonych w przepisach prawa.",
    ],
  },
  {
    title: "§ 10. Dane osobowe",
    items: [
      "Administratorem danych osobowych Zamawiających i Uczestników jest Organizator. Dane przetwarzane są zgodnie z RODO w celu zawarcia i wykonania umowy, wystawienia dokumentów sprzedaży i certyfikatu lub zaświadczenia, obsługi reklamacji, zapewnienia bezpieczeństwa oraz – za zgodą – marketingu własnego.",
      "Podanie danych jest dobrowolne, lecz niezbędne do realizacji usługi. Osobie, której dane dotyczą, przysługuje prawo dostępu, sprostowania, usunięcia, ograniczenia i przenoszenia danych, sprzeciwu, cofnięcia zgody oraz skargi do Prezesa UODO.",
      "Odbiorcami danych mogą być podmioty świadczące Organizatorowi usługi hostingu, platformy szkoleniowej, płatności, księgowości i IT, na podstawie umów powierzenia. Kontakt w sprawach danych: iod@dag.pl.",
    ],
  },
  {
    title: "§ 11. Postanowienia końcowe",
    items: [
      "Prawem właściwym jest prawo polskie. W sprawach nieuregulowanych stosuje się przepisy Kodeksu cywilnego, ustawy o prawach konsumenta, ustawy o świadczeniu usług drogą elektroniczną, prawa autorskiego oraz RODO.",
      "Spory z Konsumentami i PNPK rozstrzyga sąd właściwy według przepisów ogólnych; z pozostałymi Zamawiającymi – sąd właściwy dla siedziby Organizatora. Konsument może skorzystać z pozasądowych sposobów rozwiązywania sporów.",
      "Organizator może zmienić Regulamin z ważnych przyczyn, informując o tym z co najmniej 14-dniowym wyprzedzeniem; do umów zawartych wcześniej stosuje się brzmienie z dnia ich zawarcia. Regulamin wchodzi w życie z dniem 14.08.2026.",
    ],
  },
];

export default function RegulaminPage() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-6 py-12 md:px-10">
        <header className="mb-10">
          <h1 className="text-3xl font-bold md:text-4xl">
            Regulamin szkoleń i kursów DAG s.c.
          </h1>
          <p className="mt-4 text-muted">Obowiązuje od dnia 14.08.2026.</p>
        </header>

        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="mb-3 text-xl font-semibold">{s.title}</h2>
              <ol className="list-decimal space-y-2.5 pl-5 text-sm text-muted marker:text-muted">
                {s.items.map((item, i) => (
                  <li key={i} className="pl-1">
                    {item}
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
