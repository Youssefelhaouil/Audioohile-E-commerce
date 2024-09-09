import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { data } from "../data"

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [Qty, setQty] = useState(1);
    const [CartItems, setCartItems] = useState([]);
    const navigate = useNavigate();


    const totalQty = CartItems.reduce((acc, CartItem) => acc + CartItem.itemQty, 0);
    const GlobalTotal = CartItems.reduce((acc, CartItem) => acc + CartItem.itemTotal, 0);

    const DeleteItem = (itemName) => setCartItems((prevCartItem) => prevCartItem.filter(CartItem => CartItem.itemName !== itemName))

    const goBack = () => {
        navigate(-1)
    }






    return (
        <ProductContext.Provider value={{ data, Qty, setQty, CartItems, setCartItems, totalQty, GlobalTotal, DeleteItem ,goBack }}>
            {children}
        </ProductContext.Provider>
    )
}


