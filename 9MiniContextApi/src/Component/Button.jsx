import React, { useContext } from "react";
import { counterContext } from "../Context/context";

const Button = ({ count }) => {
  const value = useContext(counterContext);
  return (
    <div>
      Button
      <pre>Calling Count From Button {count}</pre>
      <button onClick={(e) => value.setCount2(value.count2 + 1)}>Count2</button>
    </div>
  );
};

export default Button;
