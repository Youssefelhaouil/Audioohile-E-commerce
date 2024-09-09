import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoIosClose } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import { FiMinus } from "react-icons/fi";
import { ProductContext } from '../Context/ProductContext';


function Cart({ toggleCart }) {
    const { setQty, Qty, CartItems, setCartItems, totalQty, GlobalTotal, DeleteItem } = useContext(ProductContext)


    return (
        <>
            <div className='md:grid md:place-items-center md:w-fit'>
                <div className='ml-8 relative flex flex-col  gap-6 bg-white w-[377px] h-auto p-6 float-end  mt-[128px] mr-[12%] rounded-md font-sans' >
                    <div className='flex justify-between pt-2'>
                        {CartItems.length > 0 ?
                            <h1 className='text-h6 font-semibold' >Cart({totalQty})</h1>
                            : <h1 className='text-h6 font-semibold' >Cart({0})</h1>
                        }
                        {CartItems.length > 0 ?
                            <>
                                <p onClick={() => setCartItems([])} className='cursor-pointer text-base font-light underline hover:font-normal '>Remove All</p>
                            </>
                            : <IoIosClose onClick={toggleCart} className='text-3xl  cursor-pointer' />

                        }                </div>
                    {CartItems.length > 0 ?
                        (CartItems.map((itemCart, index) =>
                            <div key={index} className='pt-4 h-16 w-full flex justify-between items-center '>
                                <div className='flex items-center  gap-4'>
                                    <div className='h-16 w-16 bg-light-gray-1 rounded-md flex justify-center items-center'>
                                        <img src={itemCart.itemImg} alt="" className='h-12 w-12' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <h1 className='font-bold text-base'>{itemCart.itemName}</h1>
                                        <p className='text-sm '>$ {itemCart.itemPrice}</p>
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <span className=' w-24  h-8 bg-light-gray-1  px-4 gap-2 font-semibold relative text-center pt-1'>
                                        {Qty > 1 &&
                                            <FiMinus onClick={() => setQty(Q => Q - 1)} className='cursor-pointer absolute top-2  text-sm text-black hover:text-orange' />}
                                        {itemCart.itemQty}
                                        <LuPlus onClick={() => setQty(Q => Q + 1)} className='cursor-pointer absolute right-4 top-2 text-sm text-black hover:text-orange' />
                                    </span>
                                    <IoIosClose onClick={() => DeleteItem(itemCart.itemName)} className=' text-2xl cursor-pointer text-black hover:text-orange' />

                                </div>

                            </div>)) :
                        <h1 className='font-sans fomt-medium text-h3 text-center p-[30px]'>Your Cart is Empty</h1>}

                    {CartItems.length > 0 &&
                        <>
                            <div className='flex justify-between pt-8'>
                                <h1 className='text-h6 font-semibold' >Total</h1>
                                <p className='pointer-cursor text-base font-semibold   '>$ {GlobalTotal}</p>
                            </div>
                            <Link to="/checkout">
                                <button className='w-full h-12 bg-orange hover:bg-accent-orange text-white font-medium'>CHECKOUT</button>
                            </Link>
                            <p onClick={toggleCart} className='font-light underline text-gray-400 text-center hover:text-gray-700 cursor-pointer'>Close</p>

                        </>
                    }


                </div>
            </div>
        </>
    )
}

export default Cart
