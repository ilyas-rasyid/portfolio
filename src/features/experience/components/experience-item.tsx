import type { Experience } from "@/types/experience";

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <article className="experience-item">
      <div>
        <h3>{item.role}</h3>
        <p>{item.organization}</p>
      </div>
      <p className="mono-label">{item.period}</p>
      <p className="experience-description">{item.description}</p>
    </article>
  );
}
