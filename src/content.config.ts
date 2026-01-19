import { defineCollection } from 'astro:content';

import { glob, file, type Loader } from 'astro/loaders';

import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/data/blogs',
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    isDraft: z.boolean().optional().default(true),
    onHomepage: z.boolean().optional().default(false),
    image: z.string().optional(),
		description: z.string().optional()
  })
});

const project = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './src/data/projects',
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    isDraft: z.boolean().optional().default(true),
    onHomepage: z.boolean().optional().default(false),
    image: z.string().optional(),
    description: z.string().optional(),
    href: z.string().optional()
  })
});

export const collections = { blog, project };
