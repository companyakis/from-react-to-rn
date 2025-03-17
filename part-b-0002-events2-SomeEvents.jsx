import React from 'react'

function SomeEvents() {

    const handleClick = () => console.log("You clicked!")

  return (
    
    <div>

        <button onClick={handleClick}>Click me!</button>
      
    </div>
  )
}

export default SomeEvents
