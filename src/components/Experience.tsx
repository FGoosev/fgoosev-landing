import type { ExperienceItem } from "../types";
import SectionHeader from "./SectionHeader";

interface ExperienceProps {
  experience: ExperienceItem[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="experience space-y-6">
      <SectionHeader title="Опыт работы" />
      {experience.map((item, idx) => (
        <article
          key={idx}
          className="bg-white/5 backdrop-blur-md border border-white/20 rounded-lg p-4"
        >
          <h3 className="text-xl font-semibold">{item.position}</h3>
          <p className="text-sm text-gray-300">
            {item.company} • {item.startDate} – {item.endDate ?? "Present"}
          </p>
          {item.description && (
            <p className="mt-2 text-sm">{item.description}</p>
          )}
        </article>
      ))}
    </section>
  );
}
