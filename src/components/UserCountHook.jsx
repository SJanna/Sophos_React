import React from "react";
import "./styles/UserCount.css";
import { useCounter } from "../hooks/useCounter";
const UserCountHook = () => {
  console.log(useCounter(0));
  const [count, handleAdd, handleSubstract, handleReset] = useCounter(0);
  return (
    <div className="count">
      <h2>Bienvenido a User Random</h2>
      <br />
      <br />
      <h4>Contador de usuarios</h4>
      <h3>{count}</h3>
      <button onClick={()=>handleAdd(2)}>Aumentar</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={()=>handleSubstract()}>Disminuir</button>
    </div>
  );
};

export default UserCountHook;
