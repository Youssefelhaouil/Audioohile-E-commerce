import React from 'react';
import YxEarphone from "/assets/Earphone2.png"
import { Link } from 'react-router-dom';

function ZxSpeakerIII() {
    return (
        <>
            <div className='px-[165px] lg:px-[24px] mt-[40px]'>
                <div className='h-[320px] lg:h-auto w-full grid grid-cols-2 gap-4 md:grid-cols-1 '>
                    <img src={YxEarphone} alt="Yx1 Earphone" className='h-[320px] w-full' />
                    <div className='px-14 bg-light-gray-1 h-[320px] w-full flex flex-col justify-center gap-8 rounded-md'>
                        <h1 className='text-black font-bold text-h4'>YX1 EARPHONES</h1>
                        <Link to="/product/yx1">
                            <button className='bg-transparent h-12 w-[160px] border-2 border-black hover:bg-black hover:text-white '>SEE PRODUCT</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ZxSpeakerIII
