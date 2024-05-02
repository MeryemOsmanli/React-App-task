import React, { useContext } from "react";
import { CounterContext } from "../context/CounterProvider";

function Detail() {
  const { count, inc, dec } = useContext(CounterContext);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => inc()}>+</button>
      <button onClick={() => dec()}>-</button>
    </div>
  );
}

export default Detail;
