import React, { useContext } from 'react'
import Item from './Item'
import { ShopContext } from '../Context/ShopContext'

export default function CardCaro() {
  const {featuredProducts} =useContext(ShopContext);
  
  return (
    <>
    <p className='fs-3 text-center py-3'>New Arrivals</p>
    <div className="row mx-4 g-5 mb-4 rows-cols-md-4 row-cols-2 row-cols-sm-4">
        {featuredProducts.map((item,i)=>{
          return<Item key={i} id={item.id} img={item.img} category={item.category} title={item.title} price={item.price} />
        })}
    </div>  
    </>
  )}

