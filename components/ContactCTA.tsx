import { site } from "@/lib/site";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6"
      data-reveal
    >
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 text-center sm:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_20rem_at_50%_-20%,rgba(225,29,52,0.22),transparent_70%)]"
        />

        <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-crimson">
            Let's Build Something Amazing
          </p>

          <h2
            id="contact-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Have an AI idea or opportunity?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted">
            I'm always excited to collaborate on Artificial Intelligence,
            Machine Learning, Large Language Models, Agentic AI, Computer
            Vision, Full-Stack AI applications, and research-driven software
            engineering. Whether you're building a product, exploring an idea,
            or hiring for an AI role, I'd love to connect.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex w-full items-center justify-center rounded-xl bg-crimson px-6 py-3 font-semibold text-background transition-colors hover:bg-crimson-bright sm:w-auto"
            >
              Contact Me
            </a>

            {site.socials.github && (
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl border border-border-strong px-6 py-3 font-semibold transition-colors hover:bg-surface-2 sm:w-auto"
              >
                View GitHub
              </a>
            )}
          </div>

          <p className="mt-8 font-medium text-foreground">
            {site.availability}
          </p>

          <p className="mt-1 text-sm text-muted">
            {site.location}
          </p>
        </div>
      </div>
    </section>
  );
}