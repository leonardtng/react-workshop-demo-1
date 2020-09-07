import React from 'react'
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <div>
        <h1>Count: {count}</h1>
      </div>
      <section>
        <button onClick={handleCount}><span>Increase</span></button>
      </section>
    </div>
  )
}

export default Counter