import React from 'react'


function Button({color,children,handleClick}) {
  return (

    <>
    <button id='mybtn' onClick={handleClick} style={{backgroundColor:color}}>{children}</button>
    </>
  )
}

export default Button