import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { IoClose } from 'react-icons/io5';
import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const CartItems = () => {
    const { ProductData,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);
    return (
        <>
            <table className='container table cartItemsFormatMain m-5 mb-5 col-10 col-sm-10 col-md-10 '>
                <thead>
                <tr>
                    <th>Products</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                {ProductData.map((e)=>{
                            if(cartItems[e.id] && cartItems[e.id]>0){
                                return <tr className='cartItemsFormat' key={e.id}>
                                        <td><img src={e.img} alt='error' className='cartItemsProductIcon ' style={{"width":"100px","height":"100px"}}/></td>
                                        <td >{e.title}</td>
                                        <td><BiRupee className="align-bottom" />{e.price}</td>
                                        <td><button className='cartItemsQuantity btn btn-outline-secondary rounded-0'>{cartItems[e.id]}</button></td>
                                        <td><BiRupee className="align-bottom" />{e.price * cartItems[e.id]}</td>
                                        <td><IoClose onClick={() => { removeFromCart(e.id) }}  style={{"cursor":"pointer"}} /></td>
                                </tr>
                            }
                            return null;
                        })}   
                </tbody>
            </table>
            <div className='container cartItemsDown m-5'>
                <div className='row'>
                    <div className='col-md-5 col-sm-12 col-10 cartItemsTotal me-5'>
                        <h5 className='mb-5'>Cart's Total</h5>
                        <table className="table">
                            <tbody >
                                <tr className='cartItemsTotalItem'>
                                    <td className='text-start'>Subtotal</td>
                                    <td className='text-end'><BiRupee className="align-bottom" />{getTotalCartAmount()}</td>
                                </tr>
                                <tr className='cartItemsTotalItem'>
                                    <td className='text-start'>Shipping Fee</td>
                                    <td className='text-end'>Free</td>
                                </tr>
                                <tr className='cartItemsTotalItem'>
                                    <td className='text-start'>Total</td>
                                    <td className='text-end'><BiRupee className="align-middle" />{getTotalCartAmount()}</td>
                                </tr>
                            </tbody>
                        </table>
                        <Link to='/SignUpModal'><button className='border-0 p-3 mt-5' style={{ "backgroundColor": "darksalmon" }}>PROCEED TO CHECKOUT</button></Link>
                    </div>
                    <div className='col-md-5 col-sm-12 col-10 cartItemsPromoCode'>
                        <p className='text-muted'>If you have a promo code, Enter it here</p>
                        <div className='cartItemsPromoBox '>
                            <input type='text' placeholder='  promocode' className='py-2' />
                            <button className='btn btn-dark ms-0 px-5 py-2 rounded-0 align-baseline'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CartItems;