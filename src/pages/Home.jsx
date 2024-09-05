import React, { useState } from 'react'
import Header from '../compenents/Header'
import Hero from '../compenents/Hero'
import Article from '../compenents/Article'
import Footer from '../compenents/Footer'
import ProductCategory from '../compenents/ProductCategory'
import ZxSpeaker from '../Home/ZxSpeaker'
import ZxSpeakerII from '../Home/ZxSpeakerII'
import ZxSpeakerIII from '../Home/ZxSpeakerIII'

function Home() {

    return (
        <>
            <div className='homeHero w-full h-[729px] '>
                <Header />
                <Hero />
            </div>
            <ProductCategory />
            <ZxSpeaker />
            <ZxSpeakerII />
            <ZxSpeakerIII />

            <Article />
            <Footer />

        </>
    )
}

export default Home
