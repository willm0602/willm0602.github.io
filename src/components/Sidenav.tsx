import { NavLocations, type NavLocation } from "@lib/nav"
import { GithubIcon, HamburgerIcon, LinkedinIcon, MenuIcon, RssIcon } from "lucide-react"
import { useState } from "react"

interface SidenavProps{
  location: NavLocation
}

interface IconLink{
  content: React.ReactNode,
  altText: string,
  href: string
}

const SidenavNames: Record<NavLocation, string> = {
  home: "Home",
  about: "About",
  blog: "Blog",
  projects: "Projects"
}

const SidenavLinks: Record<NavLocation, string> = {
  home: '/',
  about: '/about',
  blog: '/blog',
  projects: '/projects'
}

const SidebarBottomLinks: IconLink[] = [
  {
    content: <LinkedinIcon/>,
    altText: "Linkedin",
    href: "https://linkedin.com/in/willmigdol"
  },
  {
    content: <GithubIcon/>,
    altText: "Personal Github Portfolio",
    href: "https://github.com/willm0602"
  },
  {
    content: <RssIcon/>,
    altText: "RSS Feed for Portfolio site",
    href: "/rss.xml"
  },
]

function SidebarNavigation({location}: {location: NavLocation}){
  return <nav className="sidebar-navigation">
    <ul>
      {NavLocations.map((nav) => {
        const href = SidenavLinks[nav];
        const text = SidenavNames[nav];
        const isActive = location === nav;

        return <li key={`sidenav-${nav}`} className={`sidenav-link ${isActive ? 'active' : ''}`}>
          <a href={href}>{text}</a>
        </li>
      })}
    </ul>
  </nav>
}

export function Sidebar({location}: SidenavProps){
  return <aside className="sidebar">
    <div className="sidebar-top">
      <img src="/avatar.svg" alt="" aria-hidden="true" className="sidebar-avatar" />
      <h2>William Migdol</h2>
      <SidebarNavigation location={location}/>
    </div>

    <div className="sidebar-bottom">
      {SidebarBottomLinks.map(({content, href, altText}) => <a
        href={href}
        aria-label={altText}
        className="sidebar-bottom-link"
        target="_blank"
      >
        {content}
      </a>)}
    </div>

  </aside>
}

export function MobileNav(){
  const [isOpened, setIsOpened] = useState(false);
  
  const toggleIsOpened = () => {setIsOpened(!isOpened)};

  return <div className="mobile-nav">
    {isOpened && <button className="opacity-mask" onClick={toggleIsOpened}></button>}
    <button className="transparent-btn" onClick={toggleIsOpened}>
      <MenuIcon width={32} height={32}/>
    </button>
    {isOpened && <ul>
      {NavLocations.map((nav) => {
      const href = SidenavLinks[nav];
      const text = SidenavNames[nav];

      return <li key={`sidenav-${nav}`} className="mobile-nav-link">
        <a href={href}>{text}</a>
      </li>
    })}
    </ul>}
  </div>
}