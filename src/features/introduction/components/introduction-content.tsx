import { profile } from "@/content/profile";

export function IntroductionContent() {
  return (
    <div className="intro-copy hero-enter">
      <p className="eyebrow intro-role">{profile.role}</p>
      <h1>
        {profile.name}
        <span className="name-period"></span>
      </h1>
      <p className="intro-description">{profile.introduction}</p>
    </div>
  );
}
