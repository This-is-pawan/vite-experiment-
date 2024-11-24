import React from 'react'

export const Nav = ({Color}) => {
  return (
    <div>
     <div className={`nav ${Color} `} style={{background:Color}}>
    <h1> background: {Color}</h1>
  
  </div>
  
  </div>
  )
}
