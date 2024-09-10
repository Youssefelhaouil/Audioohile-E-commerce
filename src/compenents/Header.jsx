import React, { useContext, useState,useEffect } from 'react';
import logo from '../assets/logo.png';
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Nav from "./Nav"
import Cart from './Cart';
import ProductCategory from './ProductCategory';
import { ProductContext } from '../Context/ProductContext';
import { Link } from 'react-router-dom';




function Header() {
  const { totalQty, CartItems } = useContext(ProductContext)
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);

  const toggleCart = () => {
    setCart(!cart)
  }
  const toggleMenu = () => {
    setMenu(!menu)
    setCart(false)
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && menu) {
        setMenu(false); 
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menu]);

  return (
    <>
      <div className=' pt-8 px-[165px] lg:px-6  flex justify-between  pb-8 z-20  '>
        <div className='flex  gap-8 '>
          {menu ?
            <MdClose onClick={toggleMenu}
              className=' hidden lg:block lg:font-bold lg:text-h4 lg:text-white cursor-pointer' />
            :
            <GiHamburgerMenu onClick={toggleMenu}
              className=' hidden lg:block lg:font-bold lg:text-h4 lg:text-white cursor-pointer' />
          }
          <Link to="/"><img src={logo} alt="logo" height={25} width={143} /></Link>
        </div>
        <div className='block lg:hidden'>
          <Nav />
        </div>
        <div className='relative'>
          {CartItems.length > 0 && <p className='absolute h-4 w-4 bg-orange text-white font-bold text-sm flex justify-center items-center rounded-full right-[-6px] top-[-10px]'>{totalQty}</p>}          <IoCartOutline onClick={toggleCart} className='text-white text-h5 cursor-pointer font-bold ' />
        </div>
        {cart &&
          <div  className='fixed top-0 right-0 bottom-0 left-0 h-screen bg-black bg-opacity-20 z-20 '>
            <Cart toggleCart={toggleCart} />
          </div>
        }
      </div>
      {
        menu &&
        <div className='sticky top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20  z-10  '>

          <ProductCategory />


        </div>
      }
      <hr className='mx-[165px] bg-light-gray-1 lg:mx-0 ' />



    </>
  )
}

export default Header
