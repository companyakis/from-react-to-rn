import React from 'react'

function AreaCard({title, pic, description}) {
  return (
    <div className='area-card'>

      <h2>{title}</h2>
      <img src={pic} alt="" />
      <p>{description}</p>
      
    </div>
  )
}

export default AreaCard
