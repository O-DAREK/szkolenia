import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourse } from "@/data/courses";
import { CourseIcon } from "@/components/CourseIcon";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactForm } from "@/components/ContactForm";
import { EnrollmentForm } from "@/components/EnrollmentForm";

// Statyczny eksport: wygeneruj podstronę dla każdego kursu.
export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.ldDesc,
    alternates: { canonical: `/kursy/${course.slug}/` },
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.ldDesc,
    url: `https://soc.dag.pl/kursy/${course.slug}/`,
    provider: {
      "@type": "Organization",
      name: "SOC.DAG",
      url: "https://soc.dag.pl",
    },
    ...(course.compliance ? { educationalCredentialAwarded: course.compliance } : {}),
  };

  const meta = [
    { label: "Koszt", value: course.cost },
    { label: "Czas trwania", value: course.hours === "Threat Hunting" ? "Threat Hunting" : `~${course.hours}` },
    { label: "Format", value: course.format },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <main className="mx-auto max-w-4xl px-6 py-12 md:px-10">
        {/* Okruszki */}
        <nav aria-label="Ścieżka nawigacji" className="mb-8 text-sm text-muted">
          <Link href="/" className="hover:text-accent">
            Strona główna
          </Link>
          <span className="mx-2">/</span>
          <Link href="/#kursy" className="hover:text-accent">
            Kursy
          </Link>
          <span className="mx-2">/</span>
          <span className="text-main">{course.title}</span>
        </nav>

        {/* Nagłówek kursu */}
        <article>
          <header className="mb-10">
            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-lg border border-accent/30 bg-card text-accent">
                <CourseIcon name={course.icon} className="h-8 w-8" />
              </span>
              <span className="rounded-full border border-accent/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                {course.cost}
              </span>
            </div>
            <h1 className="text-3xl font-bold md:text-4xl">{course.title}</h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">{course.desc}</p>
          </header>

          {/* Karta kursu — parametry */}
          <dl className="mb-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-3">
            {meta.map((m) => (
              <div key={m.label} className="bg-card p-5">
                <dt className="text-xs uppercase tracking-wide text-muted">
                  {m.label}
                </dt>
                <dd className="mt-1 font-semibold">{m.value}</dd>
              </div>
            ))}
          </dl>
          {course.compliance && (
            <p className="-mt-8 mb-12 text-sm text-muted">✓ {course.compliance}</p>
          )}

          {/* Dla kogo */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Dla kogo jest ten kurs?</h2>
            <ul className="space-y-2.5">
              {course.forWhom.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Program */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Program kursu</h2>
            <ol className="space-y-3">
              {course.program.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-lg border border-white/5 bg-card p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{item}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Efekty */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Czego się nauczysz?</h2>
            <ul className="space-y-2.5">
              {course.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <span className="mt-1 shrink-0 text-accent">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA — formularz zapisu (kursy) lub kontaktowy (szkolenie dla firm) */}
          <section id="zapis" className="rounded-lg border border-accent/30 bg-card p-6 md:p-8">
            {course.slug === "szkolenie-dla-firm" ? (
              <>
                <h2 className="text-xl font-semibold">
                  Zainteresowany szkoleniem dla zespołu?
                </h2>
                <p className="mt-2 max-w-xl text-sm text-muted">
                  Napisz do nas — przygotujemy ofertę dopasowaną do Twojej firmy.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold">Zapisz się na ten kurs</h2>
                <p className="mt-2 max-w-xl text-sm text-muted">
                  Wypełnij formularz — potwierdzimy zapis i szczegóły terminu
                  e-mailem.
                </p>
                <div className="mt-6">
                  <EnrollmentForm defaultCourse={course.title} />
                </div>
              </>
            )}
            <div className="mt-6">
              <Link href="/#kursy" className="text-sm text-accent hover:underline">
                &larr; Wszystkie kursy
              </Link>
            </div>
          </section>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
