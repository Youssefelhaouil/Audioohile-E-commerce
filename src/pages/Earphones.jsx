import React, { useEffect } from 'react'
import Header from '../compenents/Header'
import Article from '../compenents/Article'
import Footer from '../compenents/Footer'
import ProductCategory from '../compenents/ProductCategory'
import ProductCard from '../compenents/ProductCard'

function Earphones() {
  const earphones = [
    {
      id: 1,
      img: 'src/assets/Earphone.png',
      newProduct: "NEW PRODUCT",
      name: "YX1 WIRELESS",
      type: "EARPHONES",
      description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",

    }
  ]

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <div className='w-full h-[336px] bg-black '>
        <Header />
        <h1 className='text-center mt-[100px] font-bold text-h2 text-white '>EARPHONES</h1>
      </div>
      <div className='flex flex-col gap-10 px-[165px] lg:px-[24px] mt-[40px] pb-10'>
        {earphones.map((earphone, index) => <div key={index} className='h-[560px] lg:h-auto w-full flex flex-row  even:flex-row-reverse lg:even:flex-col lg:flex-col lg:items-center lg:justify-center   gap-16  '>
          <ProductCard name={earphone.name} img={earphone.img} newProduct={earphone.newProduct} id={earphone.id} type={earphone.type} description={earphone.description} />
        </div>)}
      </div>


      <ProductCategory />
      <Article />
      <Footer />
    </>
  )
}

export default Earphones
