import React from 'react'
import Speaker2 from "/assets/Speaker2.png"
import { Link } from 'react-router-dom'

function ZxSpeaker() {
    return (
        <>
            <div className=' mt-[100px] px-[165px] lg:px-[24px]    '>
                <div className='speaker1 bg-orange w-full h-[560px]  lg:h-auto px-[80px] flex justify-center gap-[60px] items-center lg:flex-col lg:py-[30px] rounded-md '>
                    <img src={Speaker2} alt="Speaker ZX9" className='h-[453px] w-[410px] lg:h-[237px] lg:w-[177px] mt-[106px] lg:mt-0  ' />
                    <div className='mt-[-80px] lg:mt-0 flex flex-col justify-start lg:justify-center lg:items-center gap-4 font-sans'>
                        <h1 className='text-white  font-bold text-h1 lg:text-center'>ZX9 <br />SPEAKER</h1>
                        <p className='text-white text-opacity-80 font-medium text-[15px] lg:text-center'>
                            Upgrade to premium speakers that are <br />
                            phenomenally built to deliver truly remarkable
                            <br />sound.
                        </p>
                        <Link to="/product/zx9">
                            <button className='w-[160px] h-[48px] bg-black hover:bg-[#4C4C4C] text-white  text-[13px]'>SEE PRODUCT</button>
                        </Link>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ZxSpeaker
