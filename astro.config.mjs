// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';

// https://astro.build/config
export default defineConfig({
  site: 'https://willm0602.github.io',
  markdown: {
    remarkPlugins: [
      remarkSlug,
      [
        remarkAutolinkHeadings,
        {
          behavior: 'wrap',
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
