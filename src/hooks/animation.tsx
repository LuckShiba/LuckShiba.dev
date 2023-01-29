import { useEffect, useRef, useState } from "react";

export const useSequentialAnimation = (
  size: number,
  timeout: number,
  delay = 0
) => {
  const [current, setCurrent] = useState(0);
  const timeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    const timeouts = Array(size + 1)
      .fill(undefined)
      .map((_, i) => {
        return setTimeout(() => {
          setCurrent(i);
        }, delay + timeout * i);
      });

    timeouts.push(
      setTimeout(() => {
        setCurrent(-1);
      }, delay + timeout * (size + 2))
    );

    timeoutsRef.current = timeouts;

    return () => {
      timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
    };
  }, [size, timeout, timeoutsRef, delay]);

  return current;
};
