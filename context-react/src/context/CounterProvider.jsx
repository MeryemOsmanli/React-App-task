import React, { createContext, useState } from "react";

export const CounterContext = createContext();
function CounterProvider({ children }) {
  const [count, setcount] = useState(0);
  function inc() {
    setcount(count + 1);
  }
  function dec() {
    setcount(count - 1);
  }
  return (
    <CounterContext.Provider value={{ count, inc, dec }}>
      {children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;
