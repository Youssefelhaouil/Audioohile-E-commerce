import React, { createContext ,useState} from 'react'
import {data} from "../data"

export const ProductContext = createContext();

export const ProductProvider=({ children })=> {
    const [Qty,setQty]=useState(1);
    const[cartItems,setCartItems]=useState([]);
    



    
    return (
        <ProductContext.Provider value={{data,Qty,setQty,cartItems,setCartItems}}>
            {children}
        </ProductContext.Provider>
    )
}


