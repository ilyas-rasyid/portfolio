import { createContext } from "react";
import type { ResolvedTheme, ThemePreference } from "./theme.types";

export interface ThemeContextValue {
  preference: ThemePreference;
  resolved: ResolvedTheme;
  setPreference: (value: ThemePreference) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
