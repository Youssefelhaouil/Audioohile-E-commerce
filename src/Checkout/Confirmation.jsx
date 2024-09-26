import React, { useContext, useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../Context/ProductContext';


function ChekoutConfirmation() {
    const { CartItems, setCartItems, GlobalTotal } = useContext(ProductContext)
    const [showMore, setShowMore] = useState(false)
    const navigate = useNavigate();

    const cartItemsSlice = CartItems.slice(1, CartItems.length)


    const GoHome = () => {
        if (CartItems.length > 0) {
            setCartItems([])
            navigate("/")
        }
    }
    return (
        <>
            <div className='flex justify-center items-center h-fit w-[540px] md:w-[327px] bg-white font-sans p-10 rounded-md'>
                <div className='flex flex-col gap-4'>
                    <span className='h-16 w-16 rounded-full bg-orange flex justify-center items-center text-h6 text-white'>
                        <FaCheck />
                    </span>
                    <h1 className='font-bold text-h3 md:text-h5'>THANK YOU <br />FOR YOUR ORDER</h1>
                    <p className='font-medium text-base text-gray-400'>You will receive an email confirmation shortly.</p>
                    <div className='w-full h-fit grid grid-cols-[60%_40%] md:grid-cols-1  '>
                        <div className='bg-gray-300 w-full p-2 flex flex-col gap-2 rounded-ss-md rounded-es-md' >
                            <div className=' flex justify-between items-center'>
                                <div className='flex items-center  gap-2'>
                                    <img src={CartItems[0].itemImg} alt={`${CartItems[0].itemName} image`} className='h-12 w-12' />
                                    <div className='flex flex-col'>
                                        <h1 className='font-bold text-base'>{CartItems[0].itemName}</h1>
                                        <p className='text-sm '>$  {CartItems[0].itemPrice} </p>
                                    </div>
                                </div>
                                <h1>x{CartItems[0].itemQty}</h1>
                            </div>
                            {(showMore && cartItemsSlice.length > 0) &&
                                cartItemsSlice.map((itemSlice, index) =>
                                    <div key={index} className=' flex justify-between items-center'>
                                        <div className='flex items-center  gap-2'>
                                            <img src={itemSlice.itemImg} alt={`${itemSlice.itemName} image`} className='h-12 w-12' />
                                            <div className='flex flex-col'>
                                                <h1 className='font-bold text-base'>{itemSlice.itemName}</h1>
                                                <p className='text-sm '>$  {itemSlice.itemPrice} </p>
                                            </div>
                                        </div>
                                        <h1>x{itemSlice.itemQty}</h1>
                                    </div>)}
                            <hr className='h-[1px] w-full bg-gray-400' />
                            {(!showMore && cartItemsSlice.length > 0) && 
                                <p onClick={() => setShowMore(!showMore)} className='text-center text-sm font-semibold text-gray-400 hover:underline cursor-pointer'>and {cartItemsSlice.length} other item(s)</p>}
                            {showMore && <p onClick={() => setShowMore(!showMore)} className='text-center text-sm font-semibold text-gray-400 hover:underline cursor-pointer'>Hide {cartItemsSlice.length}  item(s)</p>}    
                        </div>
                        <div className='w-full flex flex-col justify-center md:items-center px-2 bg-black rounded-ee-md rounded-se-md'>
                            <h1 className='text-base font-medium text-gray-500' >GRAND TOTAL</h1>
                            <p className='pointer-cursor text-h6 font-bold text-white  '>$ {GlobalTotal}</p>

                        </div>
                    </div>

                    <button onClick={GoHome} className='h-12 w-full bg-orange hover:bg-accent-orange text-white'>BACK TO HOME</button>

                </div>


            </div>
        </>
    )
}

export default ChekoutConfirmation
