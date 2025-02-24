import { useState } from "react"; // we use hooks from here
import "./App.css";
function min(a, b) {
  return a < b ? a : b;
}
function max(a, b) {
  return a > b ? a : b;
}

function App() {
  let [counter, setCounter] = useState(0); // useState is a hook
  // let counter = 5;
  function ADD() {
    // counter = counter + 1;
    // console.log("Counter Value: ", counter);
    setCounter(prevCounter=> prevCounter + 1); //..
    setCounter(prevCounter=> prevCounter + 1); //..
    setCounter(prevCounter=> prevCounter + 1); // remenber the interview question :)
  }
  function Subs() {
    // counter = counter - 1;
    // console.log("Counter Value: ", counter); // will not work
    setCounter(max(0, counter - 1));
  }
  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={ADD}>Add Value </button>
      <br />
      <button onClick={Subs}>Remove Value</button>
    </>
  );
}

export default App;
