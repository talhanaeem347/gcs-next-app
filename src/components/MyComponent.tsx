"use client"
import React from 'react'

export const MyComponent = () => {
    const [num,setNum ] = React.useState(0);
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={()=>setNum(num+1)}>Add</button>
        </div>
  )
}
