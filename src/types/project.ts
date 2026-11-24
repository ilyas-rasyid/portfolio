export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
  fullSrc?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Full Stack" | "Frontend";
  technologies: readonly string[];
  screenshots: readonly ProjectScreenshot[];
  repositoryUrl: string;
  status?: "In development" | "Completed";
  year?: number;
  draft?: boolean;
}
