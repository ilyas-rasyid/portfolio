export function resolveAssetUrl(path: string, base: string): string {
  return `${base.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
}

export function assetUrl(path: string): string {
  return resolveAssetUrl(path, import.meta.env.BASE_URL);
}
