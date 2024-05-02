import { useState } from "react";

function useCount() {
  const [count, setCount] = useState(0);
  function incCount() {
    setCount(count + 1);
  }
  return [count, incCount];
}

export default useCount;
