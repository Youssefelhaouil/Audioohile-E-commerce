import Nav from './Nav';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className="relative mt-10 h-[365px] lg:h-auto py-[60px] w-full bg-black px-[165px] lg:px-[24px] ">
        <div className='flex justify-between lg:flex-col lg:justify-start sm:items-center lg:gap-4  '>
          <img src="/src/assets/Logo.png" alt="Logo"
            className='h-6 w-[143px]' />
          <Nav />
        </div>
        <div className=' flex justify-between items-center lg:items-end  md:flex-col md:items-center md:justify-center font-sans pt-[80px]  '>
          <div className='flex flex-col md:items-center md:justify-center gap-10 text-white text-opacity-70 font-medium  text-base'>
            <h1 className='w-[540px] lg:w-full md:text-center'>
              Audiophile is an all in one stop to fulfill your audio needs. We're a small team
              of music lovers and sound specialists who are devoted to helping you get the
              most out of personal audio. Come and visit our demo facility - we’re open 7
              days a week.
            </h1>
            <p>Copyright 2024. All rights Reserved</p>
          </div>
          <div className='flex md:justify-center  gap-4  text-2xl pr-[50px] md:pr-[120px] text-center md:pt-4   '>
            <FaFacebookSquare className='text-white hover:text-accent-orange cursor-pointer' />
            <FaXTwitter className='text-white hover:text-accent-orange cursor-pointer'/>
            <AiFillInstagram className='text-white hover:text-accent-orange cursor-pointer'/>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer
