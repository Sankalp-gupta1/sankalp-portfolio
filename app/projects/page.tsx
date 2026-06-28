import type { Metadata } from "next";
import ProjectGrid from "@/components/ProjectGrid";
import SectionHeading from "@/components/SectionHeading";
import ContactCTA from "@/components/ContactCTA";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore AI, Machine Learning, Agentic AI, Large Language Models, Computer Vision, Full-Stack AI, and research-driven software engineering projects by Sankalp Gupta.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <section
        aria-labelledby="projects-heading"
        className="mx-auto max-w-6xl px-4 pb-10 pt-28 sm:px-6 sm:pt-28"
      >
        <SectionHeading
          id="projects-heading"
          eyebrow="Portfolio"
          title="Projects & Research"
          description="A collection of AI-powered applications, intelligent systems, computer vision solutions, large language model projects, full-stack products, and research-oriented engineering work. Every project focuses on solving real-world problems using modern Artificial Intelligence."
        />
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <ProjectGrid projects={projects} />
      </div>

      <ContactCTA />
    </>
  );
}