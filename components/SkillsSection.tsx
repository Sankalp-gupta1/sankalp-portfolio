import { skillGroups } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function SkillsSection() {
  return (
    <section
      aria-labelledby="skills-heading"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
      data-reveal
    >
      <SectionHeading
        id="skills-heading"
        eyebrow="Expertise"
        title="Technical Skills & Technologies"
        description="Technologies, frameworks, and tools I use to build intelligent systems, AI-powered applications, scalable backend services, and modern full-stack software."
      />

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:border-crimson hover:-translate-y-1"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-crimson">
              {group.title}
            </h3>

            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-sm text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}