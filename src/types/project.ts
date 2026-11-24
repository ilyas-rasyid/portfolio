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
  category:
    | "Website"
    | "Web Application"
    | "Flutter App"
    | "AI / Computer Vision"
    | "Full Stack"
    | "Frontend";
  technologies: readonly string[];
  screenshots: readonly ProjectScreenshot[];
  repositoryUrl: string;
  liveUrl?: string;
  liveLabel?: string;
  downloadUrl?: string;
  downloadLabel?: string;
  downloadFilename?: string;
  status?: "In development" | "Completed";
  year?: number;
  draft?: boolean;
}
