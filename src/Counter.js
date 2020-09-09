import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleCount}>Increase</button>
    </div>
  )
}

export default Counter