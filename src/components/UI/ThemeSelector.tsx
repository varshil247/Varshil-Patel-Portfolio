import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

// ! ----------------------------------------------------------------------------------------------

const ThemeToggleAnimated: React.FC<ThemeToggleAnimatedProps> = () => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  const handleThemeChange = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("light", newTheme === "light");
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setCurrentTheme(newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialThemeToApply = savedTheme || (prefersDark ? "dark" : "light"); 
    document.documentElement.classList.toggle("light", initialThemeToApply === "light");
    document.documentElement.classList.toggle("dark", initialThemeToApply === "dark");
    setCurrentTheme(initialThemeToApply);
  }, []);
  
  // ! ----------------------------------------------------------------------------------------------

  return (
    <button
      onClick={handleThemeChange}
      className={`flex items-center justify-center
      w-10 h-10 p-1 rounded-lg bg-grayed text-regular
      transition-all duration-500 ease-in-out
      ${currentTheme === "light" ? "hover:text-[#0EA5E9]" : "hover:text-[#F18F01]"}`}
    >
      {currentTheme === "light" ? (
        <Moon size={18} strokeWidth={2}/>
      ) : (
        <Sun size={18} strokeWidth={2}/>
      )}
    </button>
  );
};

export default ThemeToggleAnimated;

// ! ----------------------------------------------------------------------------------------------
