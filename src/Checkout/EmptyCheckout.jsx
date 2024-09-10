import React from 'react'
import { MdError } from "react-icons/md";
import { Link } from 'react-router-dom';


function EmptyCheckout() {
    return (
        <>
            <div className='h-screen w-full grid place-items-center font-sans'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <div className='flex items-center gap-10'>
                        <MdError className='text-orange text-8xl' />
                        <h1 className="text-h1 lg:text-h4 font-bold text-black"> there is no product to checkout</h1>
                    </div>
                    <Link to='/'><button className='h-12 w-[300px] text-white bg-orange hover:bg-accent-orange '>Back to home</button></Link>
                </div>

            </div>
        </>
    )
}

export default EmptyCheckout
