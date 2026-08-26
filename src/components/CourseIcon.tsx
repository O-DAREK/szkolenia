import type { Course } from "@/data/courses";

// Liniowe ikony (stroke = currentColor) odwzorowujące projekt graficzny.
const paths: Record<Course["icon"], React.ReactNode> = {
  shield: <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />,
  key: (
    <>
      <circle cx="8" cy="8" r="4" />
      <path d="M11 11l7 7M15 15l2-2M17 17l2-2" />
    </>
  ),
  link: (
    <>
      <path d="M9 13a4 4 0 0 0 5.66 0l3-3A4 4 0 0 0 12 4.34l-1.5 1.5" />
      <path d="M15 11a4 4 0 0 0-5.66 0l-3 3A4 4 0 0 0 12 19.66l1.5-1.5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 1v4M12 19v4M1 12h4M19 12h4" />
    </>
  ),
};

export function CourseIcon({
  name,
  className,
}: {
  name: Course["icon"];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
