import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      className="flex items-center rounded-full bg-gray-700 p-1 hover:bg-gray-600 transition-colors"
      aria-label="Toggle dark mode"
    >
      {dark ? (
        <svg
          className="h-5 w-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.22a1 1 0 011.42 0l1.42 1.42a1 1 0 11-1.42 1.42L14.22 5.64a1 1 0 010-1.42zM18 9a1 1 0 110 2h-2a1 1 0 110-2h2zM14.22 14.22a1 1 0 010 1.42l-1.42 1.42a1 1 0 11-1.42-1.42l1.42-1.42a1 1 0 011.42 0zM10 16a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm-4.22-1.78a1 1 0 00-1.42 0L2.94 15.64a1 1 0 101.42 1.42l1.42-1.42a1 1 0 000-1.42zM4 9a1 1 0 100 2H2a1 1 0 100-2h2zM5.64 5.64a1 1 0 00-1.42-1.42L2.8 5.64a1 1 0 101.42 1.42l1.42-1.42z" />
        </svg>
      ) : (
        <svg
          className="h-5 w-5 text-gray-200"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 2a8 8 0 000 16 8 8 0 000-16zM8 14.5V5.5a6 6 0 010 9z" />
        </svg>
      )}
    </button>
  );
}
