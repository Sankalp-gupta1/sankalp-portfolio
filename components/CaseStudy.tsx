import type { Project } from "@/content/projects";

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-muted">
          <span
            aria-hidden="true"
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Renders the detailed case study for a project.
 */
export default function CaseStudy({ project }: { project: Project }) {
  const { caseStudy } = project;

  return (
    <div className="space-y-12">
      {/* Problem Statement */}
      <section aria-labelledby="cs-problem">
        <h2
          id="cs-problem"
          className="text-2xl font-bold tracking-tight"
        >
          Problem Statement
        </h2>

        <p className="mt-4 text-muted">
          {caseStudy.problem}
        </p>
      </section>

      {/* Solution */}
      <section aria-labelledby="cs-approach">
        <h2
          id="cs-approach"
          className="text-2xl font-bold tracking-tight"
        >
          Solution & Implementation
        </h2>

        <p className="mt-4 text-muted">
          {caseStudy.approach}
        </p>
      </section>

      {/* Architecture */}
      <section aria-labelledby="cs-architecture">
        <h2
          id="cs-architecture"
          className="text-2xl font-bold tracking-tight"
        >
          System Architecture
        </h2>

        <CheckList items={caseStudy.architecture} />
      </section>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Challenges */}
        <section aria-labelledby="cs-challenges">
          <h2
            id="cs-challenges"
            className="text-2xl font-bold tracking-tight"
          >
            Technical Challenges
          </h2>

          <CheckList items={caseStudy.challenges} />
        </section>

        {/* Results */}
        <section aria-labelledby="cs-results">
          <h2
            id="cs-results"
            className="text-2xl font-bold tracking-tight"
          >
            Impact & Results
          </h2>

          <CheckList items={caseStudy.results} />
        </section>
      </div>
    </div>
  );
}