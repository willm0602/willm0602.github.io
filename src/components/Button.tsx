export interface ButtonData{
  children?:React.ReactNode,
  onClick?:()=>unknown,
  href?:string,
  className?:string
}

export function Button({children, onClick, href, className}: ButtonData){
  const fullClassName = `btn ${className}`
  if(href){
    return <a href={href} className={fullClassName} onClick={onClick}>{children}</a>
  }
  return <button className={fullClassName} onClick={onClick}>{children}</button>
}