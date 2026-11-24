import { defineConfig, devices } from "@playwright/test";

const subpath = process.env.PORTFOLIO_BASE || "/";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: "list",
  use: { baseURL: `http://127.0.0.1:4173${subpath}`, trace: "retain-on-failure" },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
  webServer: {
    command: "bun run build && bun run preview --host 127.0.0.1 --port 4173 --strictPort",
    url: `http://127.0.0.1:4173${subpath}`,
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
