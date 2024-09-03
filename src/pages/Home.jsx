import React from 'react'
import Header from '../compenents/Header'
import Hero from '../compenents/Hero'
import Article from '../compenents/Article'
import Footer from '../compenents/Footer'

function Home() {
    return (
        <>
            <div className='homeHero w-full h-[729px]'>
                <Header />
                <Hero />
            </div>
            <Article />
            <Footer />

        </>
    )
}

export default Home
