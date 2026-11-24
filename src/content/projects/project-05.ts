import type { Project } from "../../types/project";

export const project = {
  id: "komorebi-notes",
  title: "Komorebi Notes",
  description:
    "Offline-first personal notes application built with Flutter and BLoC/Cubit, featuring color-coded custom categories, rich note editing, filtering, lifecycle archiving, and local Hive storage.",
  category: "Mobile Application",
  technologies: ["Flutter", "Dart", "BLoC / Cubit", "Hive"],
  screenshots: [
    {
      src: "images/projects/komorebi/image1.png",
      alt: "Komorebi Notes home overview",
      caption: "Notes",
    },
    {
      src: "images/projects/komorebi/image2.png",
      alt: "Komorebi Notes custom categories view",
      caption: "Categories",
    },
    {
      src: "images/projects/komorebi/image3.png",
      alt: "Komorebi Notes editor screen",
      caption: "Note Editor",
    },
    {
      src: "images/projects/komorebi/image4.png",
      alt: "Komorebi Notes filtering and organization",
      caption: "Organization",
    },
    {
      src: "images/projects/komorebi/image5.png",
      alt: "Komorebi Notes archive and trash lifecycle",
      caption: "Archive",
    },
    {
      src: "images/projects/komorebi/image6.png",
      alt: "Komorebi Notes app preferences and settings",
      caption: "Settings",
    },
  ],
  repositoryUrl: "",
  downloadUrl: "apk/komorebi.apk",
  downloadLabel: "Download APK (Android)",
  downloadFilename: "komorebi.apk",
} satisfies Project;
