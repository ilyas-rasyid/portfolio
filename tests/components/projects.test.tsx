import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectItem } from "@/features/projects/components/project-item";
import { ProjectGallery } from "@/features/projects/components/project-gallery";
import { Image } from "@/components/ui/image";
import type { Project } from "@/types/project";

const project: Project = {
  id: "test",
  title: "Test project",
  description: "Test purpose",
  category: "Full Stack",
  technologies: ["React"],
  repositoryUrl: "https://github.com/example/test",
  screenshots: [
    { src: "a.svg", alt: "First screenshot" },
    { src: "b.svg", alt: "Second screenshot" },
  ],
};

describe("Projects", () => {
  it("CT-001 renders project data", () => {
    render(<ProjectItem project={project} number={1} />);
    expect(screen.getByText("Test purpose")).toBeVisible();
  });
  it("CT-002 repository URL", () => {
    render(<ProjectItem project={project} number={1} />);
    expect(screen.getByRole("link", { name: /view source code/i })).toHaveAttribute(
      "href",
      project.repositoryUrl,
    );
  });
  it("CT-003 hides controls for one screenshot", () => {
    render(
      <ProjectGallery
        project={{ ...project, screenshots: project.screenshots.slice(0, 1) }}
      />,
    );
    expect(screen.queryByRole("button", { name: "Next screenshot" })).toBeNull();
  });
  it("CT-004 moves gallery", () => {
    render(<ProjectGallery project={project} />);
    fireEvent.click(screen.getByRole("button", { name: "Next screenshot" }));
    expect(screen.getByAltText("Second screenshot")).toBeVisible();
  });
  it("CT-005 opens and closes dialog", () => {
    render(<ProjectGallery project={project} />);
    fireEvent.click(screen.getByRole("button", { name: /enlarge/i }));
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("open");
    fireEvent.click(within(dialog).getByRole("button", { name: "Close preview" }));
    expect(screen.queryByRole("dialog")).toBeNull();
  });
  it("CT-009 falls back for missing image", () => {
    render(<Image src="missing.svg" alt="Example" />);
    fireEvent.error(screen.getByAltText("Example"));
    expect(screen.getByText("Image unavailable")).toBeVisible();
  });
});
