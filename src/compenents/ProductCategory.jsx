import React from 'react';
import { Link } from 'react-router-dom';
import Earphone from '/assets/Earphone.png'
import Headphone from '/assets/Headphone.png'
import Speaker from '/assets/Speaker.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function ProductCategory() {
    return (
        <>
            <div className='bg-white h-[284px] w-full lg:h-auto flex items-end gap-8 md:flex-col px-[165px] lg:px-[24px] mt-[80px] md:mt-[50px]'>
                <div className='h-[204px] w-full  bg-light-gray-1 flex flex-col items-center gap-8 md:gap-4 '>
                    <img src={Headphone} alt="HeadPhone image" className='w-[102px] h-[140px] lg:h-[130px] md:w-[92px] mt-[-90px] md:mt-[-30px] drop-shadow-[0_55px_30px_black]  ' />
                    <h1 className=' font-sans text-h6 font-bold lg:text-[15px] mt-6'>HEADPHONES</h1>
                    <Link to="/headphones">
                        <span className='flex gap-2 items-center text-gray-600 hover:text-orange font-semibold font-sans text-sm'>
                            SHOP <MdOutlineKeyboardArrowRight className='text-orange text-xl font-extrabold' />
                        </span>
                    </Link>



                </div>
                <div className='h-[204px] w-full  bg-light-gray-1 flex flex-col gap-8 md:gap-4 items-center'>
                    <img src={Speaker} alt="Speaker image" className='w-[100px] h-[140px] lg:h-[130px] md:w-[92px] mt-[-90px] md:mt-[-30px] drop-shadow-[0_45px_30px_black] ' />
                    <h1 className=' font-sans text-h6 font-bold lg:text-[15px] mt-6'>SPEAKERS</h1>
                    <Link to="/speakers">
                        <span className='flex gap-2 items-center text-gray-600 hover:text-orange font-semibold font-sans text-sm'>
                            SHOP <MdOutlineKeyboardArrowRight className='text-orange text-xl font-extrabold' />
                        </span>
                    </Link>

                </div>
                <div className='h-[204px] w-full  bg-light-gray-1 flex flex-col gap-8 md:gap-4 items-center'>
                    <img src={Earphone} alt="Earphone image" className='w-[148px] h-[140px] lg:h-[130px] md:w-[138px] mt-[-90px] md:mt-[-30px] drop-shadow-[0_45px_30px_black] ' />
                    <h1 className=' font-sans text-h6 font-bold lg:text-[15px] mt-6'>EARPHONES</h1>
                    <Link to="/earphones">
                        <span className='flex gap-2 items-center text-gray-600 hover:text-orange font-semibold font-sans text-sm'>
                            SHOP <MdOutlineKeyboardArrowRight className='text-orange text-xl font-extrabold' />
                        </span>
                    </Link>



                </div>

            </div>
        </>
    )
}

export default ProductCategory
