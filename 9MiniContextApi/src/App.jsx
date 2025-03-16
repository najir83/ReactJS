import React, { useState } from "react";
import Com1 from "./Component/Com1";
import { counterContext } from "./Context/context";
const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div>
      <counterContext.Provider value={{count2,setCount2}}>
        <Com1 count={count} />
        <button onClick={(e) => setCount(count + 1)}> Click for +1</button>
        <button onClick={(e) => setCount2(count2 + 1)}> Click for +1</button>
      </counterContext.Provider>
    </div>
  );
};

export default App;
