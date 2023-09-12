import React from 'react'
import { useState, useEffect, useMemo } from 'react'
import './styles/UserCount.css'

const UserCountHook = () => {
  const [count, setCount] = useState(0)
  const [state, setState] = useState(false)

  useEffect(() => {
    document.title = `Contador: ${count}`
  },[count])

  const handleAdd =()=>{
    setCount(count + 1)
  }
  const handleSubstract =()=>{
    setCount(count - 1)
  }
  const handleReset =()=>{
    setCount(0)
  }
  const bigProccess = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
      console.log('Aqui vamos');
    }
    return `${iteraciones} iteraciones realizadas`
  }
  const bigProccessMemo = useMemo(() => bigProccess(count), [count])
    return (
      <div className='count'>
        <h2>Bienvenido a User Random</h2>
        <br/>
        <br/>
        <h4>Contador de usuarios</h4>
        <h3>{count}</h3>
        <h4>{bigProccessMemo}</h4>
        {/* <h4>{useMemo(() => bigProccess(count), [count])}</h4> */}
        <h4>{state ? 'Verdadero' : 'Falso'}</h4>
        <button onClick={handleAdd}>Aumentar</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubstract}>Disminuir</button>
        <button onClick={()=>setState(!state)}>Cambiar estado</button>
      </div>
    )
  
}

export default UserCountHook