import { FileDown, Github, Instagram, Linkedin, Play } from "lucide-react";
import { profile } from "@/content/profile";
import { socialLinks } from "@/content/social-links";
import { assetUrl } from "@/lib/asset-url";

export function IntroductionActions() {
  return (
    <div className="intro-actions-container">
      <div className="intro-socials" aria-label="Social profiles">
        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            title="LinkedIn profile"
            className="social-icon-btn"
          >
            <Linkedin size={19} />
          </a>
        )}
        {socialLinks.instagram && (
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
            title="Instagram profile"
            className="social-icon-btn"
          >
            <Instagram size={19} />
          </a>
        )}
        {socialLinks.github && (
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            title="GitHub profile"
            className="social-icon-btn"
          >
            <Github size={19} />
          </a>
        )}
      </div>

      <div className="intro-actions">
        <a className="split-cta" href="#work">
          <span className="split-cta-label">View My Portfolio</span>
          <span className="split-cta-circle" aria-hidden="true">
            <Play size={13} fill="currentColor" />
          </span>
        </a>
        <a className="outline-pill-btn" href="#about">
          About Me
        </a>
        {profile.resume && (
          <a className="outline-pill-btn" href={assetUrl(profile.resume)} download>
            <FileDown size={16} aria-hidden="true" /> Résumé
          </a>
        )}
      </div>
    </div>
  );
}
