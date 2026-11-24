import { existsSync } from "node:fs";
import { resolve, sep } from "node:path";
import { projects } from "../src/content/projects/index";
import { profile } from "../src/content/profile";
import { siteConfig } from "../src/content/site-config";
import { socialLinks } from "../src/content/social-links";
import { hasUniqueIds, isRepositoryUrl } from "../src/lib/navigation";

const publish = process.argv.includes("--publish");
const errors: string[] = [];
const publicRoot = resolve("public");

function checkAsset(path: string, label: string) {
  const full = resolve(publicRoot, path);
  if (!full.startsWith(publicRoot + sep) || !existsSync(full))
    errors.push(`${label}: missing or invalid asset ${path}`);
}

if (!hasUniqueIds(projects)) errors.push("Duplicate project IDs");
if (projects.length < 5) errors.push("At least five projects are required");
for (const project of projects) {
  if (!project.title.trim() || !project.description.trim())
    errors.push(`${project.id}: title and description required`);
  if (!project.screenshots.length) errors.push(`${project.id}: add a screenshot`);
  for (const screenshot of project.screenshots) {
    checkAsset(screenshot.src, project.id);
    if (screenshot.fullSrc) checkAsset(screenshot.fullSrc, project.id);
    if (!screenshot.alt.trim()) errors.push(`${project.id}: missing alt text`);
    if (publish && /preview-\d+\.svg$/.test(screenshot.src))
      errors.push(`${project.id}: replace draft screenshot`);
  }
  if ((publish || project.repositoryUrl) && !isRepositoryUrl(project.repositoryUrl))
    errors.push(`${project.id}: valid GitHub repository URL required`);
  if (project.downloadUrl) checkAsset(project.downloadUrl, project.id);
  if (publish && (project.draft || !project.technologies.length))
    errors.push(`${project.id}: confirm project content and remove draft flag`);
}
if (profile.portrait) checkAsset(profile.portrait.src, "Portrait");
if (profile.resume) checkAsset(profile.resume, "Résumé");
if (siteConfig.socialImage) checkAsset(siteConfig.socialImage, "Social preview");
if (publish) {
  if (!siteConfig.publicationReady)
    errors.push("Set publicationReady only after reviewing all content");
  try {
    if (new URL(siteConfig.siteUrl).protocol !== "https:") throw new Error();
  } catch {
    errors.push("Set the real HTTPS publication URL");
  }
  if (
    !socialLinks.github ||
    !/^https:\/\/github\.com\/[\w.-]+\/?$/.test(socialLinks.github)
  )
    errors.push("Set the real GitHub profile URL");
}
if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    publish ? "Publication content checks passed" : "Development content checks passed",
  );
}
