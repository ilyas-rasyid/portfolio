import { ArrowDownRight, FileDown, Github, Instagram, Linkedin } from "lucide-react";
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
        <a className="primary-link" href="#work">
          View my work <ArrowDownRight size={17} aria-hidden="true" />
        </a>
        {profile.resume && (
          <a className="inline-link" href={assetUrl(profile.resume)} download>
            <FileDown size={17} aria-hidden="true" /> Résumé
          </a>
        )}
      </div>
    </div>
  );
}
