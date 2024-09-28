import React from 'react'
import { CardData } from '../Assets/CardData'
import Item from './Item'
export default function CardCaro() {
  return (
    <>
    <p className='fs-3 text-center py-3'>New Arrivals</p>
    <div className="row mx-4 g-5 mb-4 rows-cols-md-4 row-cols-2 row-cols-sm-4">
        {CardData.map((item,i)=>{
          return<Item key={i} id={item.id} img={item.img} category={item.category} title={item.title} price={item.price} />
        })}
    </div>  
    </>
  )}

