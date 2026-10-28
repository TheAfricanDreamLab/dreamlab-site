// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// Astro does not put .env into process.env while it reads this file; load it so SITE_URL applies.
try {
  process.loadEnvFile('.env');
} catch {
  // No .env: use the environment (CI, Docker build args) or the default below.
}

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://learn.theafricandreamlab.com',
  integrations: [sitemap()],
  // Scripts stay in files (never inlined), so the content security policy can allow 'self' only.
  vite: { plugins: [tailwindcss()], build: { assetsInlineLimit: 0 } },
});
