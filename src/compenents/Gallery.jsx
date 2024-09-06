import React from 'react'

function Gallery() {
  return (
    <>
    <div className='px-[165px] md:px-[24px] mt-[80px]'>
        <div className='h-[590px] md:h-auto flex items-center gap-8 md:flex-col'>
            <div className='w-[40%] h-[590px] lg:h-[360px] md:w-full flex flex-col gap-4  '>
                <img className='h-1/2' src="src/assets/articleMb.png" alt="image 1" />
                <img className='h-1/2' src="src/assets/ProdDetails/X99IIHeadphone2.png" alt="image 2" />
            </div>
            <img className='w-[60%] h-[590px] lg:h-[360px] md:w-full' src="src/assets/ProdDetails/X99IIHeadphone3.png" alt="image 3" />
        </div>

    </div>
    </>
  )
}

export default Gallery
