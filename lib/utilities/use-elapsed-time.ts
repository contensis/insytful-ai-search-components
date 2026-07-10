import { useEffect, useState } from "react";

export function useElapsedTime(isLoading: boolean) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    let interval: number | undefined;
    if (isLoading) {
      interval = setInterval(() => {
        setElapsed((prevTime: number) => prevTime + 100);
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isLoading]);

  return { elapsed, setElapsed };
}
