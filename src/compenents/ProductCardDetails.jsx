import React from 'react';
import { LuPlus } from "react-icons/lu";
import { FiMinus } from "react-icons/fi";
import { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';


function ProductCardDetails({ ProductData }) {
    const { Qty, setQty ,setCartItems} = useContext(ProductContext);



    const addToCart = () => {
        const cartItem = {
            itemImg:ProductData.img,
            itemName: ProductData.name,
            itemCategory: ProductData.category,
            itemQty: Qty,
            itemPrice:ProductData.price,
            itemTotal: Qty * ProductData.price
        }

        setCartItems(
            prev => {
                const existingItemIndex = prev.findIndex(item => item.itemName === cartItem.itemName);

                if (existingItemIndex >= 0) {
                    const updatedCart = [...prev];
                    updatedCart[existingItemIndex].itemQty += Qty;
                    updatedCart[existingItemIndex].itemTotal = updatedCart[existingItemIndex].itemQty * ProductData.price;
                    return updatedCart;
                } else {
                    return [...prev, cartItem];
                }
            });
}



return (
    <>
        <div className='flex flex-col gap-16 px-[165px] lg:px-[24px] mt-[40px] pb-10 font-sans'>
            <div className='h-[560px] lg:h-auto w-full flex flex-row md:flex-col md:items-start md:justify-start gap-16  '>
                <div className='h-[520px] lg:h-[350px] w-1/2 lg:w-full bg-light-gray-2 rounded-md flex justify-center items-center'>
                    <img src={ProductData.img} alt={`${ProductData.url} image`}
                        className={`w-[300px] h-[350px] lg:h-[240px] lg:w-[210px]  `} />
                </div>
                <div className='w-1/2 md:w-full flex flex-col gap-4 justify-center md:justify-start items-start  font-sans'>
                    {ProductData.newProd && <h3 className=' text-sm tracking-widest font-medium text-orange '>NEW PRODUCT</h3>}
                    <h1 className='font-bold text-h2'>{ProductData.name} <br />{ProductData.category}</h1>
                    <p className='font-medium text-base text-black text-opacity-60 lg:text-pretty lg:text-center w-full'>{ProductData.description}</p>
                    <h1 className='text-h6 font-bold'>$ {ProductData.price.toLocaleString('en-US')}</h1>
                    <div className='mt-4 flex gap-4 md:w-full '>
                        <span className=' w-32 md:w-full h-12 bg-light-gray-1  px-4 gap-2 font-semibold relative text-center pt-3'>
                            {Qty > 1 && <FiMinus onClick={() => setQty(Q => Q - 1)} className='cursor-pointer absolute top-4  text-sm text-black hover:text-orange' />}                                {Qty}
                            <LuPlus onClick={() => setQty(Q => Q + 1)} className='cursor-pointer absolute right-4 top-4 text-sm text-black hover:text-orange' />
                        </span>
                        <button onClick={addToCart} className=' w-40 md:w-full h-12 bg-orange hover:bg-accent-orange text-white'>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>

    </>
)
}

export default ProductCardDetails
