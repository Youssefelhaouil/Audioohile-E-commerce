import React, { createContext } from 'react'
import {data} from "../data"

export const ProductContext = createContext();

export const ProductProvider=({ children })=> {
    
    return (
        <ProductContext.Provider value={{data}}>
            {children}
        </ProductContext.Provider>
    )
}


