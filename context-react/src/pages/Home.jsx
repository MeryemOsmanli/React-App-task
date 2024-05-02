import { useContext } from "react";
import { CounterContext } from "../context/CounterProvider";

function Home() {
  const { count, inc, dec } = useContext(CounterContext);
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={() => inc()}>+</button>
      <button onClick={() => dec()}>-</button>
    </div>
  );
}

export default Home;
