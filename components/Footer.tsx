import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center sm:px-6">
        {/* Left */}
        <div>
          <p className="text-lg font-bold">{site.name}</p>

          <p className="mt-1 text-sm text-muted">
            {site.role}
          </p>

          <p className="mt-2 max-w-sm text-xs text-muted">
            Building intelligent systems using Artificial Intelligence,
            Large Language Models, Computer Vision, Agentic AI, and
            Full-Stack Engineering.
          </p>
        </div>

        {/* Right */}
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-foreground"
            >
              Email
            </a>
          </li>

          {site.socials.github && (
            <li>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                GitHub
              </a>
            </li>
          )}

          {site.socials.linkedin && (
            <li>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
            </li>
          )}

          <li>
            <Link
              href="/projects"
              className="transition-colors hover:text-foreground"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="transition-colors hover:text-foreground"
            >
              About
            </Link>
          </li>
        </ul>
      </div>

      <div className="mx-auto max-w-6xl border-t border-border px-4 py-6 text-xs text-muted sm:px-6">
        © {year} {site.name}. Designed & Developed by {site.name}. Built with
        Next.js, TypeScript, Tailwind CSS, and AI.
      </div>
    </footer>
  );
}