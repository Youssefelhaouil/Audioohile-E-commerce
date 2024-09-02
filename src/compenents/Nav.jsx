import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <ul className='flex gap-6 text-sm font-medium font-sans lg:hidden  '>
        <Link to='/'><li className='text-white hover:text-orange'>HOME</li></Link>
        <Link to='/headphones'><li className='text-white hover:text-orange'>HEADPHONES</li></Link>
        <Link to='/speakers'><li className='text-white hover:text-orange'>SPEAKERS</li></Link>
        <Link to='/earphones'><li className='text-white hover:text-orange'>EARPHONES</li></Link>

      </ul>
    </>
  )
}

export default Nav
