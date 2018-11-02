import React from 'react'

const Link = ({active,children,onClick}) =>{
  if(active){
    return <span>{children}</span>
  }
  return(
    <button
    onClick={onClick}
    href=""
    >
    {children}
    </button>
  )
}
export default Link
