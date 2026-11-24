import { profile } from "@/content/profile";

export function IntroductionContent() {
  return (
    <div className="intro-copy">
      <div className="hello-tag" aria-hidden="true">
        <span className="hello-corner tl" />
        <span className="hello-corner tr" />
        <span className="hello-corner bl" />
        <span className="hello-corner br" />
        Hello There!
      </div>
      <h1 className="hero-title">
        <span className="hero-title-mask">
          <span className="hero-title-line">
            I&apos;m <span className="hero-name-accent">{profile.name},</span>
          </span>
        </span>
        <span className="hero-title-mask">
          <span className="hero-title-line hero-title-line-2">{profile.role}</span>
        </span>
        {profile.location && (
          <span className="hero-title-mask">
            <span className="hero-title-line hero-title-line-3">
              Based in {profile.location}.
            </span>
          </span>
        )}
      </h1>
      <p className="intro-description">{profile.introduction}</p>
    </div>
  );
}
