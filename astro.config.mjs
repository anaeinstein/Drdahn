import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://drdahn.ch',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  image: { responsiveStyles: false },
});
