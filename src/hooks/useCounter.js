import { useState } from "react";

export const useCounter = (initialState = 0) => {
  const [count, setCount] = useState(initialState);

  const handleAdd = (factor=1) => {
    setCount(count + factor);
  };

  const handleSubstract = (factor=1) => {
    setCount(count - factor);
  };

  const handleReset = () => {
    setCount(0);
  };

  return [count, handleAdd, handleSubstract, handleReset];
};
