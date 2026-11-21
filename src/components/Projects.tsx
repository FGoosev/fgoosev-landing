import type { ProjectItem } from "../types";
import SectionHeader from "./SectionHeader";

interface ProjectsProps {
  projects: ProjectItem[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="space-y-6">
      <SectionHeader title="Собственные проекты" />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, idx) => (
          <article
            key={idx}
            className="bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-5 transition-colors hover:bg-white/10 hover:border-white/30 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              {project.description && (
                <p className="mt-3 text-sm text-gray-200/90 leading-relaxed">
                  {project.description}
                </p>
              )}

              {project.tech && (
                <ul className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="px-2.5 py-1 bg-white/10 border border-white/15 rounded-full text-xs text-gray-200"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-medium text-indigo-300 hover:text-white transition-colors"
              >
                Открыть проект →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
