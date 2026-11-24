import type { Project } from "../../types/project";

export const project: Project = {
  id: "strawberry-ripeness-detection",
  title: "Strawberry Ripeness Detection",
  description:
    "AI web application for detecting ripe and unripe strawberries from images, combining YOLOv12 object detection with a MobileNetV2 CNN classifier and deployed on Hugging Face Spaces.",
  category: "AI / Computer Vision",
  technologies: ["Python", "YOLOv12", "MobileNetV2 (CNN)", "Hugging Face Spaces"],
  screenshots: [
    {
      src: "images/projects/ripe-detection/image.png",
      alt: "Strawberry ripeness detection result showing bounding boxes and ripe versus unripe counts on Hugging Face Spaces",
      caption: "Detection Output — Ripe & Unripe",
    },
  ],
  repositoryUrl: "",
  liveUrl: "https://huggingface.co/spaces/rasyid-ilyas/stroberi-web",
  liveLabel: "Try live demo",
  status: "Completed",
};
