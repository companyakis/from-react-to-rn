import React from 'react'

function Something({proverb, iSay, year}) {
  
  return (
    <div>

        <h3>{proverb}...</h3>

        <h5>What I say is '{iSay}'</h5>

        <p>Current year is {year}</p>
      
    </div>
  )
}

export default Something
