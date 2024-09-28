import React, { createContext, useState } from 'react';
import { ProductData } from '../Assets/ProductData';

export const ShopContext = createContext(null);
const getDefaultCart =()=>{
    let cart = {};
    for (let index=0; index< ProductData.length+1 ; index++) {
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider =(props)=>{
    const [cartItems, setCartItems] = useState(getDefaultCart());
//  console.log(ProductData);
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({ ...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev) => ({ ...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount=()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = ProductData.find((product)=>product.id === Number(item));
                totalAmount += itemInfo.price*cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems=()=>{
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {ProductData , cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;