import React from 'react'
import { Link } from 'react-router-dom'

function ZxSpeakerII() {
  return (
    <>
      <div className='px-[165px] lg:px-[24px] mt-[40px]'>
        <div className='speaker2 h-[320px] w-full  rounded-md px-[50px] font-sans flex flex-col justify-center items-start gap-4'>
          <h1 className='text-black font-bold text-h4'>ZX7 SPEAKER</h1>
          <Link to="/product/zx7">
            <button className='bg-transparent h-12 w-[160px] border-2 border-black hover:bg-black hover:text-white '>SEE PRODUCT</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ZxSpeakerII
