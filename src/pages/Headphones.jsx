import React, { useEffect } from 'react'
import Header from '../compenents/Header'
import Article from '../compenents/Article'
import Footer from '../compenents/Footer'
import ProductCategory from '../compenents/ProductCategory'
import ProductCard from '../compenents/ProductCard'

function Headphones() {
  const headphones = [
    {
      id: 1,
      img: 'src/assets/HeadphoneXX99.png',
      newProduct: "NEW PRODUCT",
      name: "XX99 Mark II",
      type: "HEADPHONES",
      description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      url: "xx99-II"
    },
    {
      id: 2,
      img: 'src/assets/Headphone.png',
      name: "XX99 Mark I ",
      type: "HEADPHONES",
      description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      url: "xx99-II"

    },
    {
      id: 3,
      img: 'src/assets/HeadphoneXX59.png',
      name: "XX59",
      type: "HEADPHONES",
      description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      url: "xx59"

    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <div className='w-full h-[336px] bg-black'>
        <Header />
        <h1 className='text-center mt-[100px] font-bold text-h2 text-white '>HEADPHONES</h1>
      </div>
      <div className='flex flex-col gap-16 px-[165px] lg:px-[24px] mt-[40px] pb-10'>
        {headphones.map((headphone, index) => <div key={index} className='h-[560px] lg:h-auto w-full flex flex-row  even:flex-row-reverse lg:even:flex-col lg:flex-col lg:items-center lg:justify-center   gap-16  '>
          <ProductCard name={headphone.name} img={headphone.img} newProduct={headphone.newProduct} id={headphone.id} type={headphone.type} description={headphone.description} url={headphone.url} />
        </div>)}
      </div>



      <ProductCategory />
      <Article />
      <Footer />

    </>
  )
}

export default Headphones
