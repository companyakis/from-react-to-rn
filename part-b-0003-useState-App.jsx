import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0)

  function counterUp() {
    setCounter(counter + Math.floor(Math.random() * 10))
  }

  function counterDown() {
    setCounter(counter - Math.floor(Math.random() * 10))
  }


  return (
    <>

      <div>Current counter value: {counter}</div>

      <div>
        <button onClick={counterUp}>Counter Up</button>

        <button onClick={counterDown}>Counter Down</button>
      </div>
  
    </>
  );
}

export default App;
