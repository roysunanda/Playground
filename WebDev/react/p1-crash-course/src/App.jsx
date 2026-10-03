import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((current) => Math.max(current - 1, 0), 1000);
      return () => {
        clearInterval(timerId);
      };
    });
  }, []);
  return (
    <>
      <h1>{seconds}</h1>
    </>
  );
}

export default App;
