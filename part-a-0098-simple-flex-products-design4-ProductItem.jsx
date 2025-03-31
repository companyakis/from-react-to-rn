import React from 'react'

function ProductItem({title, img_url, description}) {
  return (
    <div className='product-item'>

        <h3>{title}</h3>
        <img src={img_url} alt="" />
        <p>{description}</p>
      
    </div>
  )
}

export default ProductItem
