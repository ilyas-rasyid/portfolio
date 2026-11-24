import type { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
  label?: string;
  title: string;
  detail?: ReactNode;
}

export function SectionHeading({ id, title, detail }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2 id={id}>{title}</h2>
      {detail && <div className="section-detail">{detail}</div>}
    </div>
  );
}
