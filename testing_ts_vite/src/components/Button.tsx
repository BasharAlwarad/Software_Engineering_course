import { useState } from 'react';

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button className="btn" onClick={() => setCount((pre) => pre + 1)}>
        Increment
      </button>
      <br />
      <p data-testid="counter">{count}</p>
    </>
  );
};

export default Button;
