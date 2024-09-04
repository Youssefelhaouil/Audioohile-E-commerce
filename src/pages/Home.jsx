import React from 'react'
import Header from '../compenents/Header'
import Hero from '../compenents/Hero'
import Article from '../compenents/Article'
import Footer from '../compenents/Footer'
import ProductCategory from '../compenents/ProductCategory'

function Home() {
    return (
        <>
            <div className='homeHero w-full h-[729px]'>
                <Header />
                <Hero />
            </div>
            <ProductCategory />
            <Article />
            <Footer />

        </>
    )
}

export default Home
