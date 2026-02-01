import { render, type CollectionEntry } from "astro:content";

interface BlogContentProps{
	blog: CollectionEntry<'blog'>
}

export function BlogHeader({ blog }: BlogContentProps) {
	const { title, image, lastModified } = blog.data;
  return <>
    <h1 id="blog-title">{title}</h1>
		<p className="last-modified">Last Modified {lastModified}</p>
		{image && <img className="blog-header-img" src={image} alt="" />}
  </>
}

