"use client";

import { NepalMoon, NepalSun } from "../NepalFlag";

export function ThemeToggle() {
  const toggleTheme = () => {
    const isDark = localStorage.darkMode === "true";
    localStorage.darkMode = !isDark;

    if (isDark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    window.dispatchEvent(new StorageEvent("storage", { key: "darkMode" }));
  };

  return (
    <button
      onClick={toggleTheme}
      className="size-12 flex items-center justify-center p-2 hover:scale-115 origin-center active:rotate-15 cursor-pointer drop-shadow-national-blue drop-shadow-2xl transition-all duration-200"
      aria-label="Toggle theme"
    >
      <span className="dark:hidden">
        <NepalMoon className="size-10 fill-national-blue" />
      </span>
      <span className="hidden dark:block">
        <NepalSun className="size-8" />
      </span>
    </button>
  );
}
