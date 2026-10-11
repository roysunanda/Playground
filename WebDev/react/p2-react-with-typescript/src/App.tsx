import CourseGoal from "./components/CourseGoal";

function App() {
  // console.log(`hello world`);
  return (
    <>
      <h1>React with Typescript</h1>
      <CourseGoal
        title="Learn React + TS"
        description="Learn it from ground up">
        <p>this is a text.</p>
      </CourseGoal>
    </>
  );
}

export default App;
