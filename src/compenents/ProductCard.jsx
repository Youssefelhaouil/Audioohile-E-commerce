import React from 'react'

function ProductCard({ name, img, description, type, id, newProduct }) {
  return (
    <>
      <div className='h-[520px] lg:h-[350px] w-1/2 lg:w-full bg-light-gray-2 rounded-md flex justify-center items-center'>
        <img src={img} alt={{ name } + { type }} 
        className={`w-[300px] h-[350px] lg:h-[240px] lg:w-[210px] ${type === "EARPHONES" && "w-[280px] h-[280px] lg:h-[240px] lg:w-[240px]" } `} />
      </div>
      <div className='w-1/2 flex flex-col gap-4 justify-center items-start lg:items-center font-sans'>
        {id === 1 && <h3 className=' text-sm tracking-widest font-medium text-orange '>{newProduct}</h3>}
        <h1 className='font-bold text-h2'>{name} <br />{type}</h1>
        <p className='font-medium text-base text-black text-opacity-60 lg:text-pretty lg:text-center w-full'>{description}</p>
        <button className='mt-4 w-40 h-12 bg-orange hover:bg-accent-orange'>SEE PRODUCT</button>

      </div>

    </>
  )
}

export default ProductCard
