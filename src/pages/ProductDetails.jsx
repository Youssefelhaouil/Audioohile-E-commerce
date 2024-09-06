import React from 'react'
import Header from '../compenents/Header'
import ProductCardDetails from '../compenents/ProductCardDetails'
import ProductFeaturs from '../compenents/ProductFeaturs'
import Gallery from '../compenents/Gallery'
import ProductCategory from '../compenents/ProductCategory'
import Footer from '../compenents/Footer'
import Article from '../compenents/Article'
import MayAlsoLike from '../compenents/MayAlsoLike'

function ProductDetails() {
  return (
    <>
    <div className='bg-black'>
        <Header />
    </div>


    <ProductCardDetails />
    <ProductFeaturs />
    <Gallery />
    <MayAlsoLike />



    <ProductCategory />
    <Article />
    <Footer />
    </>
  )
}

export default ProductDetails
