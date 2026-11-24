import type { SkillGroup as SkillGroupData } from "@/types/skill";

export function SkillGroup({ group }: { group: SkillGroupData }) {
  return (
    <div className="skill-row">
      <dt>{group.label}</dt>
      <dd>{group.technologies.join(", ")}</dd>
    </div>
  );
}
