import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import SkillsSection from "@/components/SkillsSection";
import ContactCTA from "@/components/ContactCTA";
import { site, experience, certifications, education } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: site.shortBio,
};

const highlights = [
  "Building Agentic AI systems capable of reasoning, planning, and autonomous decision making.",
  "Developing intelligent applications using Large Language Models, RAG, Computer Vision, and Backend Engineering.",
  "Focused on solving real-world problems through scalable AI products rather than experimental prototypes.",
  "Interested in AI Research, Human-AI Interaction, Intelligent Infrastructure, and Sustainable Computing.",
];

export default function AboutPage() {
  return (
    <>
      <section
        aria-labelledby="about-heading"
        className="mx-auto max-w-3xl px-4 pt-28 sm:px-6 sm:pt-28"
      >
        <SectionHeading
          id="about-heading"
          eyebrow="About"
          title={`Hi, I'm ${site.name}`}
          description={site.role}
        />

        <div className="mt-8 space-y-5 text-muted">
          <p>
            I'm an AI Engineer passionate about building intelligent systems
            that solve real-world problems at scale. My interests span
            Artificial Intelligence, Large Language Models, Agentic AI,
            Retrieval-Augmented Generation (RAG), Computer Vision, Backend
            Engineering, and Intelligent Automation.
          </p>

          <p>
            I enjoy creating software that can understand information, reason
            over context, interact with external tools, and automate complex
            workflows instead of simply generating responses. I believe the next
            generation of software will be AI systems capable of planning,
            learning, and collaborating with humans.
          </p>

          <p>
            Over the past few years I've built multiple AI-powered applications,
            including personal AI operating systems, multilingual NLP models,
            offline synchronization platforms, computer vision projects, AI
            assistants, and intelligent productivity tools. Every project helps
            me explore how modern AI can become more useful, reliable, and
            practical for everyday users.
          </p>

          <p>
            My long-term goal is to contribute to cutting-edge AI research while
            building products that positively impact millions of people around
            the world.
          </p>
        </div>

        <ul className="mt-10 space-y-3">
          {highlights.map((h) => (
            <li key={h} className="flex gap-3 text-muted">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson"
              />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section
        aria-labelledby="experience-heading"
        className="mx-auto max-w-3xl px-4 py-16 sm:px-6"
      >
        <h2
          id="experience-heading"
          className="text-2xl font-bold tracking-tight"
        >
          Experience
        </h2>

        <ol className="mt-8 space-y-8">
          {experience.map((job) => (
            <li
              key={`${job.org}-${job.role}`}
              className="border-l border-border pl-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">
                  {job.role} ·{" "}
                  <span className="text-crimson">{job.org}</span>
                </h3>

                <span className="text-sm text-muted">
                  {job.period}
                </span>
              </div>

              <ul className="mt-3 space-y-2">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-crimson"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Certifications + Education */}
      <section
        aria-labelledby="creds-heading"
        className="mx-auto max-w-3xl px-4 pb-8 sm:px-6"
      >
        <h2
          id="creds-heading"
          className="text-2xl font-bold tracking-tight"
        >
          Certifications & Education
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-crimson">
              Certifications
            </h3>

            <ul className="mt-4 space-y-4">
              {certifications.map((c) => (
                <li
                  key={c.name}
                  className="rounded-xl border border-border bg-surface p-4"
                >
                  <p className="font-medium">{c.name}</p>

                  <p className="mt-1 text-sm text-muted">
                    {c.issuer} · {c.date}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-crimson">
              Education
            </h3>

            <ul className="mt-4 space-y-4">
              {education.map((e) => (
                <li
                  key={e.school}
                  className="rounded-xl border border-border bg-surface p-4"
                >
                  <p className="font-medium">{e.degree}</p>

                  <p className="mt-1 text-sm text-muted">
                    {e.school}
                  </p>

                  <p className="text-sm text-muted">
                    {e.location}
                  </p>

                  <p className="mt-2 text-sm text-crimson">
                    {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SkillsSection />
      <ContactCTA />
    </>
  );
}