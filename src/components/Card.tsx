import { Button, type ButtonData } from "./Button";

interface CardProps{
  title:string,
  subtitle?:string,
  buttons?: ButtonData[],
  image?:string,
}

export function Card({title, subtitle, image, buttons}: CardProps){
  return <div className="card">
    <div className="card-img">
      <img src={image} alt="" />
    </div>
    <h3 className="card-title">{title}</h3>
    <p className="card-subtitle">{subtitle}</p>
    <div className="card-buttons row">
      {(buttons || []).map((btn) => <Button {...btn}/>)}
    </div>
  </div>
}