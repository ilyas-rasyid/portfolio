import type { HtmlTagDescriptor, Plugin } from "vite";
import { profile } from "../src/content/profile";
import { siteConfig } from "../src/content/site-config";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function siteMetadata(): Plugin {
  const url = siteConfig.siteUrl.trim();
  const baseUrl = url ? new URL(url.endsWith("/") ? url : `${url}/`) : null;
  const title = `${profile.name} — ${profile.role}`;
  const image =
    baseUrl && siteConfig.socialImage.trim()
      ? new URL(siteConfig.socialImage, baseUrl).href
      : null;

  return {
    name: "portfolio-metadata",
    transformIndexHtml(html) {
      const tags: HtmlTagDescriptor[] = [
        { tag: "title", children: escapeHtml(title) },
        { tag: "meta", attrs: { name: "description", content: siteConfig.description } },
        { tag: "meta", attrs: { property: "og:title", content: title } },
        {
          tag: "meta",
          attrs: { property: "og:description", content: siteConfig.description },
        },
        { tag: "meta", attrs: { property: "og:type", content: "profile" } },
        { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },
        {
          tag: "meta",
          attrs: {
            name: "robots",
            content: siteConfig.publicationReady ? "index, follow" : "noindex, nofollow",
          },
        },
        ...(baseUrl
          ? [
              { tag: "link", attrs: { rel: "canonical", href: baseUrl.href } },
              { tag: "meta", attrs: { property: "og:url", content: baseUrl.href } },
              ...(image
                ? [{ tag: "meta", attrs: { property: "og:image", content: image } }]
                : []),
              {
                tag: "script",
                attrs: { type: "application/ld+json" },
                children: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "ProfilePage",
                  url: baseUrl.href,
                  mainEntity: {
                    "@type": "Person",
                    name: profile.name,
                    jobTitle: profile.role,
                  },
                }).replace(/</g, "\\u003c"),
              },
            ]
          : []),
      ];
      return {
        html: html
          .replace(/<title>.*?<\/title>/, "")
          .replace(/<meta name="description"[^>]*>/, ""),
        tags,
      };
    },
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source:
          siteConfig.publicationReady && baseUrl
            ? `User-agent: *\nAllow: /\nSitemap: ${new URL("sitemap.xml", baseUrl).href}\n`
            : "User-agent: *\nDisallow: /\n",
      });
      if (baseUrl && siteConfig.publicationReady) {
        const escaped = baseUrl.href.replace(/&/g, "&amp;").replace(/</g, "&lt;");
        this.emitFile({
          type: "asset",
          fileName: "sitemap.xml",
          source: `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escaped}</loc></url></urlset>`,
        });
      }
    },
  };
}
