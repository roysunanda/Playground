import { err, ok } from "neverthrow";

function divide(a: number, b: number) {
  if (b === 0) {
    return err("Cannot divide by zero");
  }

  return ok(a / b);
}

const result = divide(10, 1);

// ----------------------------------------------

function App() {
  if (result.isOk()) {
    console.log(result.value); // 5
  } else {
    console.error(result.error);
  }
  return (
    <>
      <h1>hello world.</h1>
    </>
  );
}

export default App;
