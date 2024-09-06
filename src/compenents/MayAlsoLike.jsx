import React from 'react'

function MayAlsoLike() {
    return (
        <>
            <div className='px-[165px] lg:px-[24px] mt-[60px] md:pb-10'>
                <div className='h-[571px] md:h-full w-full flex flex-col gap-8 font-sans'>
                    <h1 className='text-h3 font-bold text-center'>YOU MAY ALSO LIKE </h1>
                    <div className='flex items-center justify-center md:flex-col gap-8 '>
                        <div className='w-1/3 md:w-full flex flex-col justify-center items-center gap-4'>
                            <div className='h-[318px] w-full bg-light-gray-1 flex justify-center items-center rounded-md '>
                                <img className='h-[180px] w-[138px]' src="src/assets/Headphone.png" alt="" />
                            </div>
                            <h1 className='font-bold text-h5 '>XX99 MARK I</h1>
                            <button className='h-12 w-40 bg-orange hover:bg-accent-orange text-white text-sm'>SEE PRODUCT</button>
                        </div>
                        <div className='w-1/3 md:w-full flex flex-col justify-center items-center gap-4'>
                            <div className='h-[318px] w-full bg-light-gray-1 flex justify-center items-center rounded-md '>
                                <img className='h-[180px] w-[138px]' src="src/assets/HeadphoneXX59.png" alt="" />
                            </div>
                            <h1 className='font-bold text-h5 '>XX59</h1>
                            <button className='h-12 w-40 bg-orange hover:bg-accent-orange text-white text-sm'>SEE PRODUCT</button>
                        </div>
                        <div className='w-1/3 md:w-full flex flex-col justify-center items-center gap-4'>
                            <div className='h-[318px] w-full bg-light-gray-1 flex justify-center items-center rounded-md '>
                                <img className='h-[180px] w-[138px]' src="src/assets/Speaker.png" alt="" />
                            </div>
                            <h1 className='font-bold text-h5 '>ZX9 SPEAKER</h1>
                            <button className='h-12 w-40 bg-orange hover:bg-accent-orange text-white text-sm'>SEE PRODUCT</button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default MayAlsoLike
