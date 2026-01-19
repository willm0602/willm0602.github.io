import type { Content } from "@globals";
import {Card} from "./Card";

interface ContentListProps{
  title:string,
  content:Content[],
  href?: string // link to view all entries of the content
}

function ContentCard({content}: {content:Content}){
  const {title, description, href, image} = content;
  return <Card
    title={title}
    buttons={[{
      children: 'View',
      href,
      className: 'btn-main'
    }]}
    subtitle={description}
    image={image}
  />
}

export function ContentList({title, content, href}: ContentListProps){
  return <section className="content-list">
    <div className="content-list-header">
      <h2 className="subtitle">{title}</h2>
      {href && <a href={href}>View All</a>}
    </div>
    <ul className="content-list-items">
      {content.map((c) => <li><ContentCard content={c}/></li>)}
    </ul>
  </section>
}