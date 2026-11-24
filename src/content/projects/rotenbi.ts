import type { Project } from "../../types/project";

export const project: Project = {
  id: "rotenbi",
  title: "Rotenbi — Sustainable Woven Craft",
  description:
    "Bilingual (ID/EN) MSME company profile and product catalog website for Rotenbi, showcasing sustainable woven bags, local artisan stories, weaving patterns, and direct WhatsApp ordering.",
  category: "Web Application",
  technologies: ["PHP", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  screenshots: [
    {
      src: "images/projects/rotenbi/image1.png",
      alt: "Rotenbi homepage hero highlighting sustainable woven bags and corporate gifts",
      caption: "Homepage Hero",
    },
    {
      src: "images/projects/rotenbi/image2.png",
      alt: "Rotenbi about page detailing brand vision and positive impact on local artisans",
      caption: "About & Artisan Impact",
    },
    {
      src: "images/projects/rotenbi/image3.png",
      alt: "Rotenbi weaving craft overview and traditional woven pattern showcase",
      caption: "Weaving Craft & Patterns",
    },
    {
      src: "images/projects/rotenbi/image4.png",
      alt: "Rotenbi product catalog showcasing handcrafted woven bags",
      caption: "Product Catalog",
    },
  ],
  repositoryUrl: "",
  liveUrl: "https://rotenbi.com/",
  liveLabel: "Visit live site",
  status: "Completed",
};
