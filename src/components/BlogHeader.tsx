import type { CollectionEntry } from "astro:content";

interface BlogHeaderProps{
	blog: CollectionEntry<'blog'>,
  lastModified: string
}

export function BlogHeader({blog, lastModified}: BlogHeaderProps){
  return <>
    <h1>{blog.data.title}</h1>
		<p>{blog.data.description}</p>
		<p>{lastModified}</p>
  </>
}