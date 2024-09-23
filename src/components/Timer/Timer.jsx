import { useEffect } from "react";

export default function Timer() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log(Date.now());
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, []);
  return <div>Timer</div>;
}
