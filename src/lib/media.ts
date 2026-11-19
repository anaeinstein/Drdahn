import type { ImageMetadata } from 'astro';

// All original images from the old WordPress media library, keyed by their
// path below wp-content/uploads (e.g. "2016/08/schmerztherapie.jpg").
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/media/**/*.{jpg,jpeg,png,JPG,PNG}',
  { eager: true },
);

const map = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(files)) {
  map.set(path.replace('../assets/media/', ''), mod.default);
}

export function media(key: string | null | undefined): ImageMetadata | undefined {
  if (!key) return undefined;
  return map.get(key);
}
