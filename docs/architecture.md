# Architecture and design

## Baseline

Master Specification V1.0, approved and frozen. M0–M7 scope: single-page Full Stack Developer showcase, five initial projects, GitHub repository links, no mobile development branding and no backend. The source implements the approved design direction; runtime validation is pending where dependencies cannot be installed.

## Boundaries

Application composes features and shared layout. Feature modules use shared components, types, utilities and static content. Content is data-only. Shared layout consumes the public theme switcher and profile data as intentional composition exceptions. Feature internals are not imported by unrelated features. Shared browser hooks manage behavior without UI markup.

| Area                                        | Responsibility                                                       |
| ------------------------------------------- | -------------------------------------------------------------------- |
| app                                         | Compose page and providers                                           |
| components/ui                               | Accessible controls, links, image fallback                           |
| components/layout                           | Navigation, header, footer, container and skip link                  |
| components/motion                           | Progressive one-time reveal                                          |
| features/introduction                       | Editorial portrait, identity and actions                             |
| features/projects                           | Project list, browser frames, galleries, dialog and repository links |
| features/experience, about, skills, contact | Verified optional/supporting content                                 |
| features/theme                              | System and user theme preferences                                    |
| content                                     | Typed source of portfolio content                                    |
| styles                                      | Central tokens, layout, typography, animation and section styles     |
| config                                      | Build-time SEO metadata, robots and sitemap                          |
| scripts                                     | Content and publication checks                                       |

No router: semantic anchor navigation is sufficient. No Redux, Axios, TanStack Query, database or API. State belongs near its consuming components. LocalStorage holds only theme preference. Optional sections disappear if empty; draft project links are not faked.

## Visual identity

Warm off-white `#F8F8F5`, charcoal `#121212`, forest `#345B4C`, dark accent `#9DBBAA`, Geist and Geist Mono bundled from Fontsource, maximum content width 1120px. Editorial dividers, horizontal project rows on desktop, single columns on mobile. No gradient, glass, artificial stats, generic AI decoration, fake credentials or live demo buttons. Portrait is an optional genuine asset; the hero adapts when absent.

CSS handles reduced motion. Native `dialog` provides the modal focus boundary; the trigger is refocused on close. Each gallery supports keyboard, previous/next, direct selection and swipe without autoplay. The browser frame keeps screenshots contained and does not recolor them in dark mode.

## Formatting and file size

Named exports, kebab-case filenames, PascalCase components, camelCase logic, strict TypeScript. Prefer 50–150 lines for ordinary components. Review files beyond 250 lines; avoid meaningless splitting. The project CSS combines gallery and lightbox styling as a cohesive responsibility; no source component is a monster file. Prettier configuration is included; run `bun run format` after installation to apply the exact formatter version. No manually minified JSX.
