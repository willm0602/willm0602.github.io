import {Button} from "./Button"

interface Link {
  text: string,
  className: string,
  href: string
}

interface HeroProps{
  title:string,
  subtitle:string,
  backgroundImg?:string,
  buttons?: Link[]
}

export function Hero({title, subtitle, buttons, backgroundImg}: HeroProps){
  return <section className="hero" style={{
    backgroundImage: backgroundImg ? `url(${backgroundImg})` : undefined,
  }}>
    <h1 className="hero-title">{title}</h1>
    <p className="hero-subtitle">{subtitle}</p>
    <div className="row">
      {(buttons || []).map(
        ({text, className, href}) => <Button className={className} href={href} key={`button-${title}-${href}-${text}`}>{text}</Button>
      )}
    </div>
  </section>
}