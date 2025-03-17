import React from 'react'

function Something(props) {
  
  return (
    <div>

        <h3>{props.myProverb}...</h3>

        <h5>What I say is '{props.whatISay}'</h5>

        <p>Current year is {props.year}</p>
      
    </div>
  )
}

export default Something
