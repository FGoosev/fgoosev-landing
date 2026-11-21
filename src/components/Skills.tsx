import type { SkillCategory } from "../types";

interface SkillsProps {
  skills: SkillCategory[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className="skills space-y-8">
      {skills.map((category, idx) => (
        <div key={idx}>
          <h3 className="text-xl font-semibold mb-2">{category.category}</h3>
          <ul className="flex flex-wrap gap-2">
            {category.items.map((skill, sIdx) => (
              <li
                key={sIdx}
                className="px-3 py-1 bg-white/10 rounded-full text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
