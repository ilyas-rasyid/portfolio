import { Moon, Sun } from "lucide-react";
import { useTheme } from "../use-theme";

export function ThemeSwitcher() {
  const { resolved, setPreference } = useTheme();
  const isDark = resolved === "dark";

  const toggleTheme = () => {
    setPreference(isDark ? "light" : "dark");
  };

  return (
    <div className="theme-switcher">
      <button
        type="button"
        className="icon-button theme-toggle-btn"
        aria-label={isDark ? "Light theme" : "Dark theme"}
        title={isDark ? "Switch to light theme" : "Switch to dark theme"}
        onClick={toggleTheme}
      >
        <span className="theme-toggle-icon-wrap" aria-hidden="true">
          {isDark ? (
            <Sun size={19} className="theme-toggle-icon is-sun" />
          ) : (
            <Moon size={19} className="theme-toggle-icon is-moon" />
          )}
        </span>
      </button>
    </div>
  );
}
