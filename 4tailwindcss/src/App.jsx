import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-400"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 bg-red-700  rounded-full text-white py-2 w-20 hover:bg-red-900"
          >
            Red
          </button>
          <button onClick={()=>setColor("green")} className="outline-none px-4 bg-green-700  rounded-full text-white py-2 hover:bg-green-900 ">
            Green
          </button>
          <button onClick={()=>setColor("black")} className="outline-none px-4 bg-black rounded-full text-white py-2 hover:bg-gray-700 ">
            Black
          </button>
          <button  onClick={()=>setColor("blue")} className="outline-none px-4 bg-blue-700  rounded-full text-white py-2  hover:bg-blue-900 ">
            Blue
          </button>
          <button  onClick={()=>setColor("white")} className="outline-none px-4 bg-white-700 rounded-full py-2 border-1 border-black text-black hover:bg-gray-400 ">
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
