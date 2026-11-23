import type { AboutInfo } from "../types";
import SectionHeader from "./SectionHeader";

interface AboutProps {
  about: AboutInfo;
}

export default function About({ about }: AboutProps) {
  return (
    <section id="about" className="space-y-6">
      <SectionHeader title="О себе" />

      <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-6 space-y-6">
        <div className="space-y-4 text-base text-gray-200/90 leading-relaxed">
          {about.paragraphs.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>

        {about.highlights.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-3 pt-2">
            {about.highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/15 rounded-lg p-4 transition-colors hover:bg-white/10 hover:border-white/30"
              >
                <h3 className="text-sm font-semibold text-amber-300">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
