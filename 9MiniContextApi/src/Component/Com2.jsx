import React, { useContext } from "react";
import Nav from "./Nav";
import { counterContext } from "../Context/context";

const Com2 = ({ count }) => {
  const { count2, setCount2 } = useContext(counterContext);
  return (
    <div>
      com2
      <pre>Count2 from com2 {count2}</pre>
      <Nav count={count} />
    </div>
  );
};

export default Com2;
