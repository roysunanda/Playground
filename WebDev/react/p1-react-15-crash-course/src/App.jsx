import { useState } from "react";

function App() {
  const [count, setCount] = useState(10);
  const [name, setName] = useState("");

  return (
    <>
      <div>
        <button
          onClick={() => {
            setCount((currentCount) => currentCount - 1);
          }}
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            setCount((currentCount) => currentCount + 1);
          }}
        >
          +
        </button>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <h1>{name}</h1>
    </>
  );
}

export default App;
