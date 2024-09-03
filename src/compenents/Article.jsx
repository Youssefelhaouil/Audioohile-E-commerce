import React from 'react';
import ArticleImg from "../assets/articleImg.png"
import ArticleTb from "../assets/articleTb.png"
import ArticleMb from "../assets/articleMb.png"

function Article() {
    return (
        <>
            <div className='h-[588px] lg:h-auto w-full px-[165px] lg:px-[24px] grid grid-cols-2  lg:flex gap-[60px] lg:flex-col-reverse   mt-[160px] lg:mt-[40px]'>
                <div className=' flex flex-col justify-center w-[445px] lg:w-full  lg:items-center gap-6 lg:text-center'>
                    <h1 className='font-sans font-bold text-h1 lg:text-h3 '>
                        Bringing you the <span className='text-orange'>best</span> audio gear
                    </h1>
                    <p className='font-sans font-medium text-base  text-black text-opacity-50    '>
                        Located at the heart of New York City, Audiophile is the premier
                        store for high end headphones, earphones, speakers, and audio
                        accessories. We have a large showroom and luxury
                        demonstration rooms available for you to browse and
                        experience a wide range of our products. Stop by our store to
                        meet some of the fantastic people who make Audiophile the
                        best place to buy your portable audio equipment.
                    </p>
                </div>
                <picture >
                    <source  media='(min-width:1024px)'  srcSet={ArticleImg}/>
                    <source  media="(min-width:600px)" srcSet={ArticleTb} />
                    <img 
                        src={ArticleMb} alt="Article Image" />
                </picture>
            </div>
        </>
    )
}

export default Article
