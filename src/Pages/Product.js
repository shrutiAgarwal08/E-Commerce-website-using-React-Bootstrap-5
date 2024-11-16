import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import ProductDisplay from '../components/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {productData} = useContext(ShopContext);
  const {productId} = useParams();
  const product = productData.find((e)=> e.id === Number(productId));

  if(product===undefined){
    return <p>Product not found.</p>;
  }
  return (
    <>
     <Breadcrumb product = {product} />
     <ProductDisplay product = {product} />
     <DescriptionBox/>
     <RelatedProducts category={product.category}/>
    </>
  )
}

export default Product