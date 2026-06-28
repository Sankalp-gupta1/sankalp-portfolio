 import type { Project } from "@/content/projects";
import ProjectCard from "./ProjectCard";

/**
 * Responsive project grid.
 *
 * columns = 3
 *  Mobile: 1
 *  Tablet: 2
 *  Desktop: 3
 *
 * columns = 2
 *  Mobile: 1
 *  Desktop: 2 (featured layout)
 */
export default function ProjectGrid({
  projects,
  columns = 3,
}: {
  projects: Project[];
  columns?: 2 | 3;
}) {
  const cols =
    columns === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";

  const size = columns === 2 ? "large" : "default";

  return (
    <ul className={`grid grid-cols-1 gap-6 ${cols}`}>
      {projects.map((project, index) => (
        <li
          key={project.slug}
          className="h-full"
        >
          <ProjectCard
            project={project}
            priority={index < 3}
            size={size}
          />
        </li>
      ))}
    </ul>
  );
}