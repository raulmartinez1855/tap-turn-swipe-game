import { useEffect, useRef, useState } from "react";

export default function useCountDown(time) {
  const [count, setCount] = useState(time);

  useInterval(() => {
    setCount(count - 1);
  }, 1000);

  return count;
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
