import { useState, useCallback, useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [rangeValue, setRange] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";
    for (let i = 1; i <= rangeValue; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [rangeValue, numAllowed, charAllowed]);

  //useRef hook
  const passwordRef = useRef(null);




  // passwordGenerator();
  useEffect(() => {
    passwordGenerator();
  }, [rangeValue, numAllowed, charAllowed, length, passwordGenerator]);
  return (
    <div className="w-full h-screen flex flex-col items-center bg-black space-y-4">
      <div className=" fixed shadow-md top-20 bg-gray-800 p-4 rounded-md w-120">
        <h1 className="text-center p-4 text-sky-100 ">Password Generator</h1>
        <div className="bg-white rounded-md p-1 relative">
          <input
            readOnly
            type="text"
            value={password}
            placeholder=" Password"
            className="border-none outline-none  w-95 "
            ref={passwordRef}
          />
          <button 
            onClick={() => {
              // // navigator.clipboard.writeText(password);
              // let value = document.querySelector("input");
              // value.select();
              // document.execCommand("copy"); ---> Deprecated
              passwordRef.current?.select();
              passwordRef.current?.setSelectionRange(0, 100);
              window.navigator.clipboard.writeText(password);
            }}
            className="bg-blue-500 text-center absolute right-0 top-0 p-1 pr-6.5 rounded-r-md hover:bg-blue-700 cursor-pointer "
          >
            Copy
          </button>
        </div>
        <div className="flex gap-2 items-center mt-4 select-none">
          <input
            type="range"
            name="length"
            min={8}
            max={40}
            value={rangeValue}
            className=" cursor-pointer"
            onChange={(e) => {
              setRange(e.target.value);
            }}
          />
          <h2 className=" text-red-500">Length ( {rangeValue} )</h2>
          <input
            type="checkbox"
            id="num"
            defaultChecked={numAllowed}
            onClick={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label className=" text-red-500" htmlFor="num">
            Numbers
          </label>
          <input
            type="checkbox"
            id="char"
            defaultChecked={charAllowed}
            onClick={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label className=" text-red-500" htmlFor="char">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
