import type { EducationItem } from "../types";
import SectionHeader from "./SectionHeader";

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section id="education" className="space-y-6">
      <SectionHeader title="Образование" />
      <div className="space-y-4">
        {education.map((item, idx) => (
          <article
            key={idx}
            className="bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-5 transition-colors hover:bg-white/10 hover:border-white/30"
          >
            <h3 className="text-xl font-semibold text-white">
              {item.direction ?? item.degree}
            </h3>

            {item.direction && (
              <p className="mt-1 text-base font-medium text-yellow-400">
                {item.degree}
              </p>
            )}

            <p className="mt-2 text-sm text-gray-300">
              {item.institution} — {item.startDate} – {item.endDate ?? "н.в."}
            </p>

            {item.description && (
              <p className="mt-3 text-sm text-gray-200/90 leading-relaxed">
                {item.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
