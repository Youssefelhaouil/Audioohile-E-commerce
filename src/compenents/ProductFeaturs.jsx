import React from 'react'

function ProductFeaturs() {
    return (
        <>
            <div className=' lg:h-auto px-[165px] lg:px-[24px] mt-[40px]'>
                <div className=' h-[318px] lg:h-full flex lg:flex-col  gap-16 font-sans '>
                    <div className='w-2/3 lg:w-full flex flex-col gap-8'>
                        <h1 className='font-bold text-h3 text-black'>FEATURES</h1>
                        <p className=' gap-4 text-black text-opacity-60 font-medium text-base'> Featuring a genuine leather head strap and premium earcups,
                            these headphones deliver superior comfort for those who like to enjoy endless listening.
                            It includes intuitive controls designed for any situation. Whether you’re taking a
                            business call or just in your own personal space, the auto on/off and pause features
                            ensure that you’ll never miss a beat.
                        </p>
                        <p className=' gap-4 text-black text-opacity-60 font-medium text-base'>
                            The advanced Active Noise Cancellation with built-in equalizer
                            allow you to experience your audio world on your terms. It
                            lets you enjoy your audio in peace, but quickly interact with your s
                            urroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity 
                            and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge
                            technology, and a modern design aesthetic.
                        </p>
                    </div>
                    <div className=' w-1/3 lg:w-full flex flex-col lg:flex-row lg:justify-between gap-6  '>
                        <h1 className='flex lg:items-center font-bold text-h3 text-black'>IN THE BOX</h1>
                        <div className='flex flex-col gap-3'>
                            <h3 className='flex gap-4 text-black text-opacity-60 font-medium text-base'><span className='text-orange '>1x</span>Headphone Unit</h3>
                            <h3 className='flex gap-4 text-black text-opacity-60 font-medium text-base'><span className='text-orange '>2x</span>Remplacemnet Earcups</h3>
                            <h3 className='flex gap-4 text-black text-opacity-60 font-medium text-base'><span className='text-orange '>1x</span>User Manual</h3>
                            <h3 className='flex gap-4 text-black text-opacity-60 font-medium text-base'><span className='text-orange '>1x</span>3.5mm 5m Audio Cable </h3>
                            <h3 className='flex gap-4 text-black text-opacity-60 font-medium text-base'><span className='text-orange '>1x</span>Travel Bag</h3>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductFeaturs
