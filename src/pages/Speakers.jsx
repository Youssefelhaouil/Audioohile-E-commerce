import React from 'react'
import Header from '../compenents/Header'
import Article from '../compenents/Article'
import Footer from '../compenents/Footer'

function Speakers() {
  return (
    <>
      <div className='w-full h-[336px] bg-black'>
        <Header />
        <h1 className='text-center mt-[100px] font-bold text-h2 text-white '>SPEAKERS</h1>
      </div>
      <Article /> 
      <Footer />


    </>
  )
}

export default Speakers
