import React from 'react'

function SomeEvents() {

    const printName = (name) => console.log(`You are ${name}`)

    function returnARandomNumber() {
        const Rnumber = Math.floor(Math.random() * 100)
        console.log(Rnumber)
    }

  return (
    <div>

        <button onClick={printName("Burak")}>Print Name</button>

        <button onClick={returnARandomNumber}>Return a random number</button>
      
    </div>
  )
}

export default SomeEvents
