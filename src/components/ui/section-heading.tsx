import type { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
  label: string;
  title: string;
  detail?: ReactNode;
}

export function SectionHeading({ id, label, title, detail }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{label}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {detail && <div className="section-detail">{detail}</div>}
    </div>
  );
}
