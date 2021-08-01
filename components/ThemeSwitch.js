import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [isDarkMode, setDarkMode] = useState(
    typeof window !== "undefined" ? localStorage.theme : false
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(isDarkMode === true ? "light" : "dark");
    root.classList.add(isDarkMode === true ? "dark" : "light");

    if (typeof window !== "undefined") {
      localStorage.setItem("isDarkmode", isDarkMode);
    }
  }, [isDarkMode]);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <div>
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={32}
      />
    </div>
  );
}
