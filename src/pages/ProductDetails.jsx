import React, { useContext, useEffect } from 'react'
import Header from '../compenents/Header'
import ProductCardDetails from '../compenents/ProductCardDetails'
import ProductFeaturs from '../compenents/ProductFeaturs'
import Gallery from '../compenents/Gallery'
import ProductCategory from '../compenents/ProductCategory'
import Footer from '../compenents/Footer'
import Article from '../compenents/Article'
import MayAlsoLike from '../compenents/MayAlsoLike'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../Context/ProductContext';


function ProductDetails() {
    const { data } = useContext(ProductContext)

    const navigate = useNavigate();

    const { productId } = useParams()

    const ProductData = data.find(prodData => prodData.url === productId)

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    const goBack = () => {
        navigate(-1)
    }
    return (
        <>
            <div className='bg-black'>
                <Header />
            </div>
            <h1 onClick={goBack} className='cursor-pointer px-[165px] md:px-[24px] mt-[40px] font-sans font-medium text-base text-gray-500'>Go Back</h1>


            <ProductCardDetails ProductData={ProductData} />
            <ProductFeaturs ProductData={ProductData} />
            <Gallery ProductData={ProductData} />
            <MayAlsoLike ProductData={ProductData} />



            <ProductCategory />
            <Article />
            <Footer />
        </>
    )
}

export default ProductDetails
