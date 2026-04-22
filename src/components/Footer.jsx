import React from 'react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../../constants'
import Underline from './Underline'

const Footer = () => {
  return (
    <footer className=' py-[60px]'>
      <div className="container flex flex-col-reverse md:flex-row justify-between">
        {/* Logo/Socials & Quick Links */}
        <div className="flex flex-col-reverse  md:flex-row gap-8 md:gap-24">
            <div>
                <img src="/images/logo.jpg" className='max-w-[180px] h-auto mb-6' alt="South Salem Winery Logo" />
                <div className="flex gap-4">
                    <Link className='text-4xl' to={'#'}><FaFacebook/></Link>
                    <Link className='text-4xl' to={'#'}><FaInstagram/></Link>
                </div>
            </div>

            <div className='font-ui mt-4'>
                <h3 className='mb-3 font-ui font-bold text-xl'>Quick Links</h3>
                <ul>
                    {links.map((link) => (
                        <li key={link.id} className='mb-3 text-lg'>
                            <a href={link.path}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Hours */}
         <div className='mt-4'>
            <div className='location-info'>
           
              <p className='mb-5 md:mb-8 text-md md:text-md'><span className='font-bold mr-3'>Address:</span>1202 Route 35, South Salem, NY</p>
              <p className='mb-5 md:mb-8 text-md md:text-md'><span className='font-bold mr-3'>Location:</span>Located inside the greenhouse at Gossetts Nursery.</p>
              <p className='mb-5 md:mb-8 text-md md:text-md'><span className='font-bold mr-3'>Hours:</span>Thursday - Saturday: 7:00 AM - 7:00 PM Sunday: 7:00 AM - 5:00 PM</p>
            </div> 
        </div> 
      </div>
    </footer>
  )
}

export default Footer
