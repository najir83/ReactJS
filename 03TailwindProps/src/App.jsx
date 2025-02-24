import { useState } from "react";
import "./App.css";

function App() {
  let [ color, setColor ] = useState("bg-white");
  function white() {
    setColor("bg-white");
  }
  function red() {
    setColor("bg-red-500");
  }
  return (
    <>
      <div >
        <div className="absolute bottom-4 flex gap-2 left-40">
          {/* <button onClick={white} >White</button>
          <button onClick={red}>Red</button>
          <button>Black</button>
          <button>Green</button> */}
          <button className="bg-blue">Blue</button>
          <button>Pink</button>
        </div>
      </div>
    </>
  );
}

export default App;
