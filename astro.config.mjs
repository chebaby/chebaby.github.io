// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://echebaby.com',
  output: 'static',
  // Fonts are downloaded at build time and served from this site: no requests to third-party font hosts.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Fraunces',
      cssVariable: '--font-serif',
      weights: [700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'Times New Roman', 'serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Inter Tight',
      cssVariable: '--font-sans',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
