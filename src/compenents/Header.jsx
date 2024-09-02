import React from 'react';
import logo from '../assets/logo.png';
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Nav from "./Nav"




function Header() {
  return (
    <>
    <div className='pt-8 px-[165px] lg:px-6 bg-black flex justify-between border-b-2 border-gray-200 pb-8 z-10  '>
      <div className='flex  gap-8 '>
        <GiHamburgerMenu className=' hidden lg:block lg:font-bold lg:text-h4 lg:text-white cursor-pointer' />
        <img src={logo} alt="logo" height={25} width={143} />
      </div>
      <Nav />
      <IoCartOutline className='text-white text-h5 cursor-pointer font-bold ' />
    </div>
    
    </>
  )
}

export default Header
