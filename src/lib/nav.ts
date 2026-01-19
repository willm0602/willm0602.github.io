export const NavLocations = [
  'home',
  'about',
  'blog',
  'projects'
] as const;

export type NavLocation = typeof NavLocations[number];