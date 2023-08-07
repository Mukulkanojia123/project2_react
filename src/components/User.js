import React from 'react'
import { useState } from 'react'

export const User = (props) => {
    const [count, setCount] = useState(0);
  return (
    <div className='user-card'>
        <h1>count = {count}</h1>
        <h1>Name : {props.name}</h1>
        <h2>Location : Delhi</h2>
        <h4>Contact : @mukulKanojia</h4>
    </div>
  )
}
