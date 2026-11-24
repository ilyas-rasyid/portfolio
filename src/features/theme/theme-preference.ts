import type { ThemePreference } from "./theme.types";

export const THEME_KEY = "portfolio-theme";

export function parseTheme(value: string | null): ThemePreference {
  return value === "light" || value === "dark" || value === "system" ? value : "system";
}
