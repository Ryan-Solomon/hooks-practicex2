import React, { useState } from 'react';

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <React.Fragment>
      <h3>{count}</h3>
      <button onClick={increment} className='btn'>
        Add Count
      </button>
      <button onClick={decrement} className='btn'>
        Delete Count
      </button>
      <button onClick={reset} className='btn'>
        Reset Count
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
