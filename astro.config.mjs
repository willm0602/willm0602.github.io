// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';

// GitHub Pages serves public/labcana/index.html at /labcana/. The dev and
// preview servers do not, and a slash-less URL would break the build's
// relative asset paths, so normalize both to the directory URL.
function labcanaDirectoryIndex() {
  const attach = (middlewares) => {
    middlewares.use((req, res, next) => {
      if (!req.url) return next();
      const [pathname, search = ''] = req.url.split('?');
      const query = search ? `?${search}` : '';
      if (pathname === '/labcana') {
        res.statusCode = 302;
        res.setHeader('Location', `/labcana/${query}`);
        res.end();
        return;
      }
      if (pathname === '/labcana/') {
        req.url = `/labcana/index.html${query}`;
      }
      next();
    });
  };

  return {
    name: 'labcana-directory-index',
    configureServer(server) {
      attach(server.middlewares);
    },
    configurePreviewServer(server) {
      attach(server.middlewares);
    },
  };
}

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
    plugins: [labcanaDirectoryIndex()],
  },
});
