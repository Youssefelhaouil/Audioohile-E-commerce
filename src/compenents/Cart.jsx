import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
    return (
        <>
            <div className='flex flex-col gap-3 bg-white w-[377px] h-auto p-6 float-end  mt-[128px] mr-[12%] rounded-md' >
                <div className='flex justify-between font-sans '>
                    <h1 className='text-lg font-semibold text-black'>Cart(6)</h1>
                    <h2 className='text-sm font-light hover:text-gray-700 text-gray-400 cursor-pointer '>Remove All</h2>
                </div>
                <div className='flex justify-between'>
                    <h1>Total :</h1>
                    <h2>$ 5.465</h2>
                </div>
                <Link to="/checkout">
                    <button className='bg-orange hover:bg-accent-orange w-full h-[48px] text-white text-h6 font-sans'>Checkout</button>
                </Link>


            </div>
        </>
    )
}

export default Cart
