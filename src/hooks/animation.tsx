import { useEffect, useState } from "react";

export const useSequentialAnimation = (size: number, timeout: number) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timeouts = Array(size)
      .fill(undefined)
      .map((_, i) => {
        return setTimeout(() => {
          setCurrent(i);
        }, timeout * i);
      });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [size]);

  return current;
};
