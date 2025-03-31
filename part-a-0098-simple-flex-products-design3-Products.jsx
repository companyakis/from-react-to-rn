import React from 'react'
import ProductItem from './ProductItem'


function Products() {
  return (
    <div className='products-container'>

        <ProductItem  title={"Product 1"} img_url={"https://picsum.photos/id/247/150/100"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum sapiente, optio soluta iure suscipit?"}/>

        <ProductItem  title={"Product 2"} img_url={"https://picsum.photos/id/212/150/100"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum sapiente, optio soluta iure suscipit?"}/>

        <ProductItem  title={"Product 3"} img_url={"https://picsum.photos/id/321/150/100"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum sapiente, optio soluta iure suscipit?"}/>

        <ProductItem  title={"Product 4"} img_url={"https://picsum.photos/id/100/150/100"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum sapiente, optio soluta iure suscipit?"}/>

        <ProductItem  title={"Product 5"} img_url={"https://picsum.photos/id/146/150/100"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum sapiente, optio soluta iure suscipit?"}/>

        <ProductItem  title={"Product 6"} img_url={"https://picsum.photos/id/165/150/100"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum sapiente, optio soluta iure suscipit?"}/>

        <ProductItem  title={"Product 7"} img_url={"https://picsum.photos/id/321/150/100"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum sapiente, optio soluta iure suscipit?"}/>

        <ProductItem  title={"Product 8"} img_url={"https://picsum.photos/id/200/150/100"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum sapiente, optio soluta iure suscipit?"}/>

        <ProductItem  title={"Product 9"} img_url={"https://picsum.photos/id/55/150/100"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum sapiente, optio soluta iure suscipit?"}/>
     
    </div>
  )
}

export default Products
