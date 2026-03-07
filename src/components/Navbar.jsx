import React from 'react'
import { links } from '../../constants'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='font-ui text-md py-4 fixed top-0 left-0 min-w-full z-30 bg-primary drop-shadow-2xl'>
      <div className="container flex justify-between items-center">
        <Link to={'/'}><img className='w-[50px] md:w-[60px] h-auto' src="/images/logo.jpg" alt="South Salem Winery logo" /></Link>

        <ul className="hidden md:flex items-center gap-4">
            {links.map((link) => (
                <li key={link.id}>
                    <a href={link.path}>{link.label}</a>
                </li>
            ))}
        </ul>

        <button className='relative mb-2'> 
            <span className='text-2xl'><HiOutlineShoppingBag/></span>
            <span className='absolute top-[-15px] right-[-12px] bg-accent rounded-full h-[20px] w-[20px] flex-center p-3'>0</span>
        </button>

      </div>
    </nav>
  )
}

export default Navbar
