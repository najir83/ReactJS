import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Navbar = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return <div>I am a NavBar and count is {count}</div>;
};

export default Navbar;
