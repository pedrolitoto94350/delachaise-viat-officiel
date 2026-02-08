import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://delachaise-viat.vercel.app',
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'directory'
  }
});