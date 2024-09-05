import React, { useEffect } from 'react'
import Header from '../compenents/Header'
import Article from '../compenents/Article'
import Footer from '../compenents/Footer'
import ProductCategory from '../compenents/ProductCategory'
import ProductCard from '../compenents/ProductCard'


function Speakers() {
  const speakers = [
    {
      id: 1,
      img: 'src/assets/Speaker.png',
      newProduct: "NEW PRODUCT",
      name: "ZX9",
      type: "SPEAKER",
      description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",

    },
    {
      id: 2,
      img: 'src/assets/SpeakerIII.png',
      name: "ZX7",
      type: "SPEAKER",
      description: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='w-full h-[336px] bg-black'>
        <Header />
        <h1 className='text-center mt-[100px] font-bold text-h2 text-white '>SPEAKERS</h1>
      </div>

      <div className='flex flex-col gap-16 px-[165px] lg:px-[24px] mt-[40px] pb-10'>
        {speakers.map((speaker, index) => <div key={index} className='h-[560px] lg:h-auto w-full flex flex-row  even:flex-row-reverse lg:even:flex-col lg:flex-col lg:items-center lg:justify-center   gap-16  '>
          <ProductCard name={speaker.name} img={speaker.img} newProduct={speaker.newProduct} id={speaker.id} type={speaker.type} description={speaker.description} />
        </div>)}
      </div>

      <ProductCategory />
      <Article />
      <Footer />


    </>
  )
}

export default Speakers
