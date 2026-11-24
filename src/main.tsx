import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/geist";
import "./styles/globals.css";
import { App } from "./app/app";
import { AppProviders } from "./app/app-providers";

// Normalize stray SPA paths (e.g. /login from another local app on the same port) to the portfolio root.
const baseUrl = import.meta.env.BASE_URL;
if (
  window.location.pathname !== baseUrl &&
  window.location.pathname !== `${baseUrl}index.html`
) {
  window.history.replaceState(null, "", `${baseUrl}${window.location.hash}`);
}

const root = document.getElementById("root");
if (!root) throw new Error("Application root is missing");

createRoot(root).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
);
