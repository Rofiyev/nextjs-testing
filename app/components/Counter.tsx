"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev: number) => prev + 1);
  const decrement = () => setCount((prev: number) => prev - 1);

  return (
    <div className="container p-10">
      <h2 className="text-4xl mb-2">{count}</h2>
      <div className="flex gap-2">
        <button className="bg-blue-500 py-2 px-4 rounded" onClick={increment}>
          Increment
        </button>
        <button className="bg-blue-500 py-2 px-4 rounded" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}
