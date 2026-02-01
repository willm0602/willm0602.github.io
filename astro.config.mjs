// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';

// https://astro.build/config
export default defineConfig({
  site: 'willm0602.github.io',
  markdown: {
    remarkPlugins: [
      remarkSlug,
      [
        remarkAutolinkHeadings,
        {
          behavior: 'wrap',willm0602.github.io
          linkProperties: {
            className: ['heading-anchor']
          }
        }
      ]
    ]
  },
  integrations: [
    react(),
  ],

  vite: {
  },
});
