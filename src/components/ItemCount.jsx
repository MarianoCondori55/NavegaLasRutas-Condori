import React, { useState } from 'react';

const ItemCount = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <button onClick={() => setCount(count - 1)} disabled={count <= 1}>-</button>
      <span className="mx-2">{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default ItemCount;
