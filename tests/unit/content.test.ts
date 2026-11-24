import { describe, expect, it } from "vitest";
import { resolveAssetUrl } from "@/lib/asset-url";
import { moveIndex } from "@/lib/gallery-index";
import { parseTheme } from "@/features/theme/theme-preference";
import { hasUniqueIds, visibleItems } from "@/lib/navigation";
import { projects } from "@/content/projects";

describe("Portfolio utilities", () => {
  it("UT-001 root asset URL", () =>
    expect(resolveAssetUrl("images/a.webp", "/")).toBe("/images/a.webp"));
  it("UT-002 repository asset URL", () =>
    expect(resolveAssetUrl("/images/a.webp", "/portfolio/")).toBe(
      "/portfolio/images/a.webp",
    ));
  it("UT-003 valid theme preference", () =>
    expect(["light", "dark", "system"].map(parseTheme)).toEqual([
      "light",
      "dark",
      "system",
    ]));
  it("UT-004 invalid storage value", () => expect(parseTheme("invalid")).toBe("system"));
  it("UT-005 gallery next wraps", () => expect(moveIndex(2, 1, 3)).toBe(0));
  it("UT-006 gallery previous wraps", () => expect(moveIndex(0, -1, 3)).toBe(2));
  it("UT-007 project IDs unique", () => expect(hasUniqueIds(projects)).toBe(true));
  it("UT-008 optional content filtered", () =>
    expect(visibleItems([true, false], Boolean)).toEqual([true]));
});
