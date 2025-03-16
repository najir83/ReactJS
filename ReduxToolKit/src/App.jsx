import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement,devide } from "./counter/counterSlice";
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-1</button>
         {count} 
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(devide(5))}>/5</button>
      </div>
    </>
  );
}

export default App;
