import { useEffect, useState } from "react";

export const useSequentialAnimation = (size: number, timeout: number) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timeouts = Array(size + 1)
      .fill(undefined)
      .map((_, i) => {
        return setTimeout(() => {
          setCurrent(i);
        }, timeout * i);
      });

    timeouts.push(
      setTimeout(() => {
        setCurrent(-1);
      }, timeout * (size + 2))
    );

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [size, timeout]);

  return current;
};
