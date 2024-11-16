import React, { useContext } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa';
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
  const {product}=props;
  const {addToCart} = useContext(ShopContext);
  
  return (
    <div className='row overflow-hidden mx-5 '>
      <div className='col-md-6 col-sm-12 col-12 productDisplayLeft me-5 ' >
        <div className='row' style={{"width":"100%","objectFit":"cover"}}>
        <div className='col-3 col-sm-3 col-md-3 d-grid gap-4 productDisplayImageList' >
          <img src={`http://localhost:8080${product.img}`} alt='error loading' className='img-fluid'/>
          <img src={`http://localhost:8080${product.img}`} alt='error loading' className='img-fluid'/>
          <img src={`http://localhost:8080${product.img}`} alt='error loading' className='img-fluid'/>

        </div>
        <div className='col-9 col-sm-9 col-md-9 productDisplayImage'>
          <img src={`http://localhost:8080${product.img}`} alt='error loading' className='img-fluid' />
        </div>
        </div>
      </div>
      <div className='col-md-5 col-sm-12 col-12 productDisplayRight '>
        <h1>{product.description}</h1>
        <div className='productDisplayRightStar'>
          <FaStar style={{"color":"darksalmon"}}/> 
          <FaStar style={{"color":"darksalmon"}}/>
          <FaStar style={{"color":"darksalmon"}}/>
          <FaStar style={{"color":"darksalmon"}}/>
          <FaRegStar  className='me-2 ' style={{"color":"darksalmon"}}/>(121)
        </div>
        <div className='productDisplayRightPrice my-3 fw-bold'>${product.price}</div>
        <div className='productDisplayRightTitle my-3'>
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt 
        ut labore adipiscing elit sed do eiusmod ipsum dolor sit amet consectetur
        </div>
        <div className='productDisplayRightSize my-3'>
          <h6>Select Size</h6>
          <button className="btn btn-outline-secondary rounded-0 me-2">S</button>
          <button className="btn btn-outline-secondary rounded-0 me-2">M</button>
          <button className="btn btn-outline-secondary rounded-0 me-2">L</button>
          <button className="btn btn-outline-secondary rounded-0 me-2">XL</button>
          <button className="btn btn-outline-secondary rounded-0">XXL</button>
        </div>
        <button type='btn' className='border-0 my-3 px-5 py-2' onClick={()=>{addToCart(product.id)}} style={{ "backgroundColor": "darksalmon" }}>ADD TO CART</button>
        <p className='productDisplayRightCategory'><span className='fw-bold'>Category: </span> {product.category}, {product.subcategory}</p>
        <p className='productDisplayRightCategory'><span className='fw-bold'>Tags:</span> Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
