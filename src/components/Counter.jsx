import React from 'react'
import { useState } from 'react'
import Button from './Button'
function Counter() {
    const[count,setCount]=useState(0)
    
  return (
    <div>
        <br />
        <h1>{count}</h1>
        <Button color={"blue"} handleClick={()=>setCount(count+1)}>+</Button>
        <Button color={"pink"} handleClick={()=>setCount(count-1)}>-</Button>
    </div>
  )
}

export default Counter