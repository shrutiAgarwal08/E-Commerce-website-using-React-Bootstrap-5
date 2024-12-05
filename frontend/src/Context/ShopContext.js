import React, { createContext, useState,useEffect } from 'react';
import axiosInstance from '../api/axiosConfig';
export const ShopContext = createContext(null);

const ShopContextProvider =(props)=>{
    const [productData,setProductData]=useState([]);
    const[featuredProducts,setFeaturedProducts]=useState([]);
    const [cartItems, setCartItems] = useState({});
//  console.log(ProductData);
//console.log('Fetched Product Data:',productData);
useEffect(()=>{
    axiosInstance.get('/api/products')
    .then(res=>{
        setProductData(res.data);

        const initialCart= res.data.reduce((cart,product)=>{
        cart[product.id]=0;
        return cart;
    },{});
    setCartItems(initialCart);
    })
    .catch(err=>console.error("Error fetching product data:",err));

    axiosInstance.get('/api/products/featured')
    .then(res=>setFeaturedProducts(res.data))
    .catch(err=>console.error("Error fetching featured products:",err));
},[]);

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({ ...prev,[itemId]:prev[itemId]+1}));
    };
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({ ...prev,[itemId]:prev[itemId]-1}));
    };

    const getTotalCartAmount=()=>{
        let totalAmount = 0;
        for(let product of productData){
            let quantity=0;
            if(cartItems[product.id]!==undefined){
                quantity=cartItems[product.id];
            }
            totalAmount += product.price*quantity;
        }
        return totalAmount;
    }

    const getTotalCartItems=()=>{
        let totalItem = 0;
        for (let itemId in cartItems) {
                totalItem += cartItems[itemId];
        }
        return totalItem;
    }

    const contextValue = {productData ,featuredProducts, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;