import React from 'react'
import { useState } from 'react'
import './styles/UserCount.css'

const UserCountHook = () => {
  const [count, setCount] = useState(0)

  const handleAdd =()=>{
    setCount(count + 1)
  }
  const handleSubstract =()=>{
    setCount(count - 1)
  }
  const handleReset =()=>{
    setCount(0)
  }
    return (
      <div className='count'>
        <h2>Bienvenido a User Random</h2>
        <br/>
        <br/>
        <h4>Contador de usuarios</h4>
        <h3>{count}</h3>
        <button onClick={handleAdd}>Aumentar</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubstract}>Disminuir</button>
      </div>
    )
  
}

export default UserCountHook