import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <>
            <div className='px-[165px] py-[216px] flex flex-col gap-4 items-start justify-center lg:px-8 lg:items-center '>
                <h3 className='font-sans text-sm tracking-widest font-medium text-white text-opacity-60'>NEW PRODUCT</h3>
                <h1 className='font-sans text-h1 font-bold text-white '>XX99 MARK II <br />HEADPHONES</h1>
                <p className='font-sans text-[15px]  font-noraml text-white text-opacity-75 text-balance lg:text-center '>
                    Experience natural, lifelike audio and exceptional <br className='lg:hidden'/>
                     build quality made for the passionate music <br />
                     enthusiast.
                </p>
                <Link to="/product">
                    <button className='h-[48px] w-[160px] text-white font-medium font-sans text-sm bg-orange hover:bg-accent-orange  '>SEE PRODUCT</button>
                </Link>

            </div>
        </>
    )
}

export default Hero
