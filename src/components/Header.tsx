import { useState } from "react";
import type { Resume } from "../types";

interface HeaderProps {
  resume: Resume;
}

const NAV_ITEMS = [
  { name: "Главная", href: "#hero" },
  { name: "О себе", href: "#about" },
  { name: "Навыки", href: "#skills" },
  { name: "Опыт", href: "#experience" },
  { name: "Проекты", href: "#projects" },
  { name: "Образование", href: "#education" },
];

export default function Header({ resume }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-900/80 backdrop-blur-lg border-b border-white/10">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <a
          href="#hero"
          onClick={() => setIsOpen(false)}
          className="text-xl md:text-2xl font-bold text-white hover:text-amber-300 transition-colors"
        >
          {resume.name}
        </a>

        {/* Десктопное меню */}
        <ul className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-white hover:text-amber-300 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Кнопка мобильного меню */}
        <button
          type="button"
          className="md:hidden text-white p-1"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Переключить меню"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Выпадающее мобильное меню */}
      {isOpen && (
        <ul className="md:hidden border-t border-white/10 bg-stone-900/95 px-4 py-2 space-y-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-white hover:text-amber-300 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
