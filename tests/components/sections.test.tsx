import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import { ThemeProvider } from "@/features/theme/theme-provider";
import { ThemeSwitcher } from "@/features/theme/components/theme-switcher";
import { ContactSection } from "@/features/contact/contact-section";
import { CopyEmailButton } from "@/features/contact/components/copy-email-button";
import { ExperienceSection } from "@/features/experience/experience-section";

vi.mock("@/content/social-links", () => ({ socialLinks: {} }));
vi.mock("@/content/experience", () => ({ experience: [] }));
vi.mock("@/content/profile", () => ({ profile: { name: "Test", available: true } }));

it("CT-006 changes theme", () => {
  render(
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>,
  );
  fireEvent.click(screen.getByRole("button", { name: "Dark theme" }));
  expect(document.documentElement.dataset.theme).toBe("dark");
});
it("CT-007 hides unavailable contact", () => {
  const { container } = render(<ContactSection />);
  expect(container).toBeEmptyDOMElement();
});
it("CT-008 hides empty experience", () => {
  const { container } = render(<ExperienceSection />);
  expect(container).toBeEmptyDOMElement();
});
it("CT-010 clipboard feedback", async () => {
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: { writeText: vi.fn().mockResolvedValue(undefined) },
  });
  render(<CopyEmailButton email="test@example.com" />);
  fireEvent.click(screen.getByRole("button", { name: "Copy email" }));
  await waitFor(() =>
    expect(screen.getByRole("status")).toHaveTextContent("Email copied"),
  );
});
