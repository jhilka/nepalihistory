"use client";

import { useEffect, useState } from "react";

import { NepalMoon, NepalSun } from "./NepalFlag";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="size-12 flex items-center justify-center p-2 hover:scale-115 cursor-pointer drop-shadow-national-blue drop-shadow-2xl  transition-all duration-200"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <NepalMoon className="size-10" />
      ) : (
        <NepalSun className="size-8" />
      )}
    </button>
  );
}
