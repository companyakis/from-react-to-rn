import { useState, useEffect } from "react";

function App() {

  const [age, setAge] = useState(35)

  const [name, setName] = useState("Aygün")

  function handleName() {
    setName("Merve Aygün")
  }

  function handleAge() {
    setAge(34)
  }

  //!
  useEffect(() => {
    console.log("First render | name | age")
  }, [age, name])

  useEffect(() => {
    console.log("Always work!")
  })

  useEffect(() => {
    console.log("First render!")
  }, [])

  useEffect(() => {
    console.log("First render!- Name updated!")
  }, [name])

  useEffect(() => {
    console.log("First render! - Age updated!")
  }, [age])

  return (
    <>

      <div>Name: {name} and age: {age}</div>

      <div>
        <button onClick={handleName}>Set Name</button>
        <button onClick={handleAge}>Set Age</button>
      </div>
  
    </>
  );
}

export default App;
