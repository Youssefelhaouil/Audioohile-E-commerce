import React from 'react'

function Gallery({ProductData}) {
  return (
    <>
    <div className='px-[165px] md:px-[24px] mt-[80px]'>
        <div className='h-[590px] md:h-auto flex items-center gap-8 md:flex-col'>
            <div className='w-[40%] h-[590px] lg:h-[360px] md:w-full flex flex-col gap-4  '>
                <img className='h-1/2' src={ProductData.gallery.first} alt="image gallery 1" />
                <img className='h-1/2' src={ProductData.gallery.second} alt="image gallery 2" />
            </div>
            <img className='w-[60%] h-[590px] lg:h-[360px] md:w-full' src={ProductData.gallery.third} alt="image galery 3" />
        </div>

    </div>
    </>
  )
}

export default Gallery
