import type { Resume } from "../types";
import avatarImg from "../assets/avatar2.jpg"; // проверьте точное имя и расширение (.jpg / .png / .webp)

interface HeroProps {
  resume: Resume;
}

export default function Hero({ resume }: HeroProps) {
  return (
    <section className="text-center py-12">
      <div className="relative inline-block mb-6">
        <img
          src={avatarImg}
          alt={resume.name}
          className="w-48 h-48 rounded-full border-4 border-indigo-500 shadow-xl object-cover"
        />
        <div className="absolute inset-0 rounded-full border-2 border-indigo-300 opacity-0 hover:opacity-100 transition-opacity" />
      </div>
      <h1 className="text-5xl font-extrabold text-indigo-200">{resume.name}</h1>
      <p className="text-2xl text-indigo-300 mt-2">{resume.title}</p>
      {resume.tagline && (
        <p className="text-xl text-indigo-400 mt-4">{resume.tagline}</p>
      )}
    </section>
  );
}
