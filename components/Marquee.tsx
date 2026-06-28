 const items = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "Agentic AI",
  "Large Language Models",
  "RAG Systems",
  "LangChain",
  "Computer Vision",
  "Natural Language Processing",
  "FastAPI",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "Docker",
  "GitHub",
];

function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden}
      className="font-code flex shrink-0 items-center gap-10 px-5 text-sm text-muted"
    >
      {items.map((t) => (
        <li key={t} className="flex items-center gap-2 whitespace-nowrap">
          <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <section
      aria-label="Core technologies"
      className="marquee-group overflow-hidden border-y border-border bg-surface/40 py-4"
    >
      <div className="animate-marquee flex w-max">
        <Group />
        <Group hidden />
      </div>
    </section>
  );
}