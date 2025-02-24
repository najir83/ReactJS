import Chai from "./chai";

function App() {
  //use variable
  const username="Sk Najir";
  return (
    <>
      <Chai />
      <h1>Hello World from {username}</h1>   {/* here username is an expresion means evaluated expression means this not js it is the final outcomes of js that is evaluated */}
      
    </>
  );
}

export default App;
