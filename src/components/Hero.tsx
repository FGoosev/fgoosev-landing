import type { Resume } from "../types";
import avatarImg from "../assets/avatar2.jpg";

interface HeroProps {
  resume: Resume;
}

export default function Hero({ resume }: HeroProps) {
  return (
    <section className="relative overflow-hidden text-center py-12 rounded-3xl bg-white/5 backdrop-blur-md shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-3xl">
      {/* 3D‑фон */}
      <div className="hero-bg-layer absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-200/20 transform -translate-y-2 scale-105 opacity-75 pointer-events-none" />

      {/* Контент */}
      <div className="hero-content relative z-10 flex flex-col items-center">
        <div className="relative inline-block mb-6">
          <img
            src={avatarImg}
            alt={resume.name}
            className="w-48 h-48 rounded-full border-4 border-amber-500 shadow-2xl object-cover relative z-20"
          />
          <div className="absolute inset-0 rounded-full border-2 border-amber-300 opacity-0 hover:opacity-100 transition-opacity" />
        </div>
        <h1 className="text-5xl font-extrabold text-amber-200">{resume.name}</h1>
        <p className="text-2xl text-amber-300 mt-2">{resume.title}</p>
        {resume.tagline && (
          <p className="text-xl text-amber-400 mt-4">{resume.tagline}</p>
        )}
      </div>
    </section>
  );
}
