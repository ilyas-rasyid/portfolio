import { profile } from "@/content/profile";

export function IntroductionContent() {
  return (
    <div className="intro-copy">
      <h1 className="hero-title">
        <span className="hero-title-mask">
          <span className="hero-title-line">{profile.name}</span>
        </span>
      </h1>
      <p className="intro-role">{profile.role}</p>
      <p className="intro-description">{profile.introduction}</p>
    </div>
  );
}
