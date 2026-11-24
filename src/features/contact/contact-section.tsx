import { FileDown, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { profile } from "@/content/profile";
import { siteConfig } from "@/content/site-config";
import { socialLinks } from "@/content/social-links";
import { assetUrl } from "@/lib/asset-url";
import { ContactLink } from "./components/contact-link";
import { CopyEmailButton } from "./components/copy-email-button";

export function ContactSection() {
  if (
    !siteConfig.sections.contact ||
    !(
      socialLinks.email ||
      socialLinks.github ||
      socialLinks.linkedin ||
      socialLinks.instagram ||
      profile.resume
    )
  )
    return null;
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <Container className="contact-inner">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-heading">Let's get in touch.</h2>
          <p>
            {profile.available
              ? "Open to software development opportunities."
              : "Connect with me through the links below."}
          </p>
        </div>
        <div className="contact-links">
          {socialLinks.email && (
            <>
              <a className="contact-link" href={`mailto:${socialLinks.email}`}>
                <Mail size={18} />
                {socialLinks.email}
              </a>
              <CopyEmailButton email={socialLinks.email} />
            </>
          )}
          {socialLinks.linkedin && (
            <ContactLink
              href={socialLinks.linkedin}
              label="LinkedIn"
              icon={<Linkedin size={18} />}
            />
          )}
          {socialLinks.instagram && (
            <ContactLink
              href={socialLinks.instagram}
              label="Instagram"
              icon={<Instagram size={18} />}
            />
          )}
          {socialLinks.github && (
            <ContactLink
              href={socialLinks.github}
              label="GitHub"
              icon={<Github size={18} />}
            />
          )}
          {profile.resume && (
            <a className="contact-link" href={assetUrl(profile.resume)} download>
              <FileDown size={18} /> Download résumé
            </a>
          )}
        </div>
      </Container>
    </section>
  );
}
