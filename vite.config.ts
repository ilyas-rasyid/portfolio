import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { siteMetadata } from "./config/site-metadata";

export default defineConfig({
  base: process.env.PORTFOLIO_BASE || "/",
  plugins: [react(), tailwindcss(), siteMetadata()],
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
});
