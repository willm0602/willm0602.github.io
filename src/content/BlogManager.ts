import { getCollection, type CollectionEntry } from "astro:content";

type Blog = CollectionEntry<'blog'>;

export function getAllBlogPosts(): Promise<CollectionEntry<'blog'>[]>{
  return getCollection('blog');
}

export function getFrontPageBlogPosts(): Promise<CollectionEntry<'blog'>[]>{
  return getCollection('blog', ({data}: {data: Blog['data']}) => data.onHomepage && !data.isDraft )
}

export async function getBlogFromSlug(slug:string): Promise<CollectionEntry<'blog'> | null>{
  const blogsWithSlug = await getCollection('blog', ({data}) => data.slug === slug);
  return blogsWithSlug[0];
}