import { expect, test } from "@playwright/test";
import { projects } from "../../src/content/projects/index";
import { profile } from "../../src/content/profile";
import { socialLinks } from "../../src/content/social-links";

test.beforeEach(async ({ page }) => {
  await page.goto("./");
});

test("E2E-001 homepage", async ({ page }) => {
  await expect(page.locator("h1")).toContainText(profile.name);
});
test("E2E-002 all projects", async ({ page }) => {
  await expect(page.locator(".project-item")).toHaveCount(projects.length);
});
test("E2E-003 navigation", async ({ page }) => {
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Work" })
    .click();
  await expect(page).toHaveURL(/#work$/);
});
test("E2E-004 mobile menu", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Open menu" }).click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Work" })
    .click();
  await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
});
test("E2E-005 gallery and lightbox", async ({ page }) => {
  const item = page.locator(".project-item").first();
  await item.getByRole("button", { name: /enlarge/i }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  if (projects[0].screenshots.length > 1) {
    await dialog.getByRole("button", { name: "Next screenshot" }).click();
    await expect(dialog.locator("img")).toHaveAttribute(
      "alt",
      projects[0].screenshots[1].alt,
    );
  }
  await dialog.getByRole("button", { name: "Close preview" }).click();
  await expect(dialog).toHaveCount(0);
});
test("E2E-006 keyboard lightbox", async ({ page }) => {
  const trigger = page
    .locator(".project-item")
    .first()
    .getByRole("button", { name: /enlarge/i });
  await trigger.click();
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
});
test("E2E-007 theme persistence", async ({ page }) => {
  await page.getByRole("button", { name: "Dark theme" }).click();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});
test("E2E-008 toggle theme back", async ({ page }) => {
  await page.getByRole("button", { name: "Dark theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("button", { name: "Light theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});
test("E2E-009 reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
});
test("E2E-010 no overflow at required widths", async ({ page }) => {
  for (const width of [320, 375, 390, 430, 768, 1024, 1280, 1440, 1920, 2560]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
    ).toBe(true);
  }
});
test("E2E-011 résumé availability", async ({ page }) => {
  if (profile.resume) {
    const link = page.locator("a[download]").first();
    await expect(link).toBeVisible();
    const download = page.waitForEvent("download");
    await link.click();
    expect((await download).suggestedFilename()).toMatch(/\.pdf$/);
  } else {
    await expect(page.locator("a[download]")).toHaveCount(0);
  }
});
test("E2E-012 repository destinations", async ({ page }) => {
  for (const project of projects) {
    const link = page.getByRole("link", {
      name: `View source code for ${project.title}`,
    });
    if (project.repositoryUrl)
      await expect(link).toHaveAttribute("href", project.repositoryUrl);
    else await expect(link).toHaveCount(0);
  }
  if (socialLinks.github)
    await expect(
      page.getByRole("link", { name: "GitHub profile" }).first(),
    ).toHaveAttribute("href", socialLinks.github);
});
test("E2E-013 no runtime error", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.reload();
  await expect(page.locator("h1")).toBeVisible();
  expect(errors).toEqual([]);
});
test("E2E-014 production asset paths", async ({ page }) => {
  const image = page.locator(".browser-image img").first();
  await expect(image).toBeVisible();
  await expect
    .poll(() =>
      image.evaluate(
        (element: HTMLImageElement) => element.complete && element.naturalWidth > 0,
      ),
    )
    .toBe(true);
});
test("E2E-015 back to top", async ({ page }) => {
  await page.getByRole("link", { name: "Back to top" }).click();
  await expect.poll(() => page.evaluate(() => scrollY)).toBeLessThanOrEqual(2);
});
