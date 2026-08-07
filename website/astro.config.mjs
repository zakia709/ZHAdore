// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://zhadore.com',
  // The actual deployment URL; update when custom domain is configured
  // For Vercel preview deployments, use: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://zhadore.com'
  
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date('2026-05-16'),
    }),
  ],

  // Static site — no SSR needed
  output: 'static',

  // Build options
  build: {
    format: 'directory',
    assets: '_astro',
    inlineStylesheets: 'auto',
  },

  // Compress HTML (default: true)
  compressHTML: true,

  // Vite configuration
  vite: {
    css: {
      devSourcemap: true,
    },
  },

  // Markdown settings (for legal pages)
  markdown: {
    gfm: true,
    smartypants: true,
  },

  // Redirects — keep deep links working without overriding dedicated pages
  redirects: {
    '/themes': '/#themes',
    '/about': '/#about',
    '/contact': '/#contact',
  },
});
