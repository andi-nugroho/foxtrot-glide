import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark" | "system";

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as ThemeMode) || "dark";
    setMode(saved);
    applyTheme(saved);

    if (saved === "system") {
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => applyTheme("system");
      mql.addEventListener?.("change", handler);
      return () => mql.removeEventListener?.("change", handler);
    }
  }, []);

  const applyTheme = (theme: ThemeMode) => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const isDark = theme === "dark" || (theme === "system" && prefersDark);
    root.classList.toggle("dark", isDark);
  };

  const changeTheme = (newMode: ThemeMode) => {
    setMode(newMode);
    localStorage.setItem("theme", newMode);
    applyTheme(newMode);
  };

  return { mode, setTheme: changeTheme };
}
