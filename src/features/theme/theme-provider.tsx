import { useLayoutEffect, useState, type PropsWithChildren } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { readStorage, writeStorage } from "@/lib/storage";
import { ThemeContext } from "./theme-context";
import { parseTheme, THEME_KEY } from "./theme-preference";
import type { ThemePreference } from "./theme.types";

export function ThemeProvider({ children }: PropsWithChildren) {
  const [preference, setPreference] = useState<ThemePreference>(() =>
    parseTheme(readStorage(THEME_KEY)),
  );
  const systemDark = useMediaQuery("(prefers-color-scheme: dark)");
  const resolved = preference === "system" ? (systemDark ? "dark" : "light") : preference;

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = resolved;
    writeStorage(THEME_KEY, preference);
  }, [preference, resolved]);

  return (
    <ThemeContext.Provider value={{ preference, resolved, setPreference }}>
      {children}
    </ThemeContext.Provider>
  );
}
