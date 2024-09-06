import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Nav from "./Nav"
import Cart from './Cart';
import ProductCategory from './ProductCategory';




function Header() {
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);

  return (
    <>
      <div className=' pt-8 px-[165px] lg:px-6  flex justify-between  pb-8 z-20  '>
        <div className='flex  gap-8 '>
          {menu ?
            <MdClose onClick={() => setMenu(false)}
              className=' hidden lg:block lg:font-bold lg:text-h4 lg:text-white cursor-pointer' />
            :
            <GiHamburgerMenu onClick={() => setMenu(true)}
              className=' hidden lg:block lg:font-bold lg:text-h4 lg:text-white cursor-pointer' />
          }
          <img src={logo} alt="logo" height={25} width={143} />
        </div>
        <div className='block lg:hidden'>
          <Nav />
        </div>
        <IoCartOutline onClick={() => setCart(!cart)} className='text-white text-h5 cursor-pointer font-bold ' />
        {cart &&
          <div className='fixed top-0 right-0 bottom-0 left-0 h-screen bg-black bg-opacity-20'>
            <Cart />
          </div>
        }
      </div>
      {
        menu &&
        <div className='sticky top-0 left-0 right-0 bottom-0 bg-black z-10 '>

          <ProductCategory />


        </div>
      }
      <hr className='mx-[165px] bg-light-gray-1 lg:mx-0' />



    </>
  )
}

export default Header
