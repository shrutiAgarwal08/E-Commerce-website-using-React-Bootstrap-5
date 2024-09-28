import React, { useContext } from 'react'
import Item from './Item'
import { ShopContext } from '../Context/ShopContext'

const RelatedProducts = ({category}) => {
  const {ProductData}=useContext(ShopContext);
  const relatedProducts=ProductData.filter((item)=>item.category=== category);
  return (
    <div className='overflow-hidden mx-5'>
      <p className='fs-3 text-center '> Related Products</p>
      <div className="relatedProductsItem gx-5 my-4 gy-2 row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
        {relatedProducts.map((item) => {
          // console.log('Current item category:', item.img);
          return <Item key={item.id} id={item.id} img={item.img} category={item.category} title={item.title} price={item.price} />
        })}
      </div>
    </div>
  )
}

export default RelatedProducts;
