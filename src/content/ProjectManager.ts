import { getCollection, type CollectionEntry } from "astro:content";

type Project = CollectionEntry<'project'>;

export function getAllProjects(): Promise<Project[]>{
  return getCollection('project');
}

export function getFrontPageProjects(): Promise<Project[]>{
  return getCollection('project', ({data}: {data: Project['data']}) => data.onHomepage && !data.isDraft )
}

export async function getProjectFromSlug(slug:string): Promise<Project|null>{
  const projects = await getAllProjects();
  return projects.find((p) => p.data.slug === slug) || null;
}