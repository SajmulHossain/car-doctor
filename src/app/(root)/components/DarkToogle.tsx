"use client";

import { Lightbulb, MoonIcon } from "lucide-react";
import { useEffect, useState } from "react";

const DarkToggle = () => {
  const [isDark, setIsDark] = useState(false); // Safe initial state

  // Detect preferred theme on client after mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const darkMode = storedTheme === "dark" || (!storedTheme && prefersDark);
    setIsDark(darkMode);
  }, []);

  // Update DOM & localStorage on theme change
  useEffect(() => {
    const mode = isDark ? "dark" : "light";
    document.querySelector("html")?.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
  }, [isDark]);

  return (
    <button className="cursor-pointer" onClick={() => setIsDark(!isDark)}>
      {isDark ? <Lightbulb /> : <MoonIcon />}
    </button>
  );
};

export default DarkToggle;
