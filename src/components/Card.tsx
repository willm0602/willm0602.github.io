import { Button, type ButtonData } from "./Button";

interface CardProps{
  title:string,
  subtitle?:string,
  buttons?: ButtonData[],
  image?:string,
}

export function Card({title, subtitle, image, buttons}: CardProps){
  return <><div className="card">
    <div className="card-img">
      <img src={image} alt="" />
    </div>
    <h3 className="card-title">{title}</h3>
    <p className="card-subtitle">{subtitle}</p>
    <div className="card-buttons row">
      {(buttons || []).map((btn) => <Button {...btn}/>)}
    </div>
  </div><CardMobile title={title} subtitle={subtitle} image={image} buttons={buttons}/></>
}

export function CardMobile({title, subtitle, image, buttons}: CardProps){
  return <div className="mobile-card">
    <div className="mobile-card-left">
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      {buttons ? <div className="row">{buttons.map((btn) => <Button {...btn}/>
      )}</div> : undefined}
    </div>
    <img src={image} alt="" />
  </div>
}