import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
function Myapp() {
  return (
    <div>
      <h1>My App</h1>
    </div>
  );
}

//my create element syntax
// const ReactEle = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     targe: "_blank",
//   },
//   children: "Click me to visit google",
// };

//actual react syntax
const anotherUser=" sk Najir "
const reactElement=React.createElement("a",{href:"https://www.google.com",target:"_blank"},"Click me to visit Ji google",anotherUser); // tag - attribute - children 
const AnotherElement=(
  <a href="https://www.google.com" target="_blank">
    Click me to visit google
  </a>
)
createRoot(document.getElementById("root")).render(
reactElement

);

