import React from 'react'

function ProductFeaturs({ ProductData }) {
    return (
        <>
            <div className=' lg:h-auto px-[165px] lg:px-[24px] mt-[40px]'>
                <div className=' h-[318px] lg:h-full flex lg:flex-col  gap-16 font-sans '>
                    <div className='w-2/3 lg:w-full flex flex-col gap-8'>
                        <h1 className='font-bold text-h3 text-black'>FEATURES</h1>
                        <p className=' gap-4 text-black text-opacity-60 font-medium text-base'>{ProductData.features.first}</p>
                        <p className=' gap-4 text-black text-opacity-60 font-medium text-base'>{ProductData.features.second}</p>

                    </div>
                    <div className=' w-1/3 lg:w-full flex flex-col lg:flex-row lg:justify-between gap-6  '>
                        <h1 className='flex lg:items-center font-bold text-h3 text-black'>IN THE BOX</h1>
                        <div className='flex flex-col gap-3'>
                            {ProductData.includes.map((include, index) =>
                                <h3 key={index} className='flex gap-4 text-black text-opacity-60 font-medium text-base'><span className='text-orange '>{include.quantity}</span>{include.item}</h3>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductFeaturs
