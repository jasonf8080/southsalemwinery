import React from 'react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../../constants'

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

        {/* Wine Club Signup */}
        <div className='mt-4'>
             <h3 className='mb-3 font-ui font-bold text-xl'>Sign up for our Wine Club</h3>
             <p>Enter your email to get access to offers, sales, and events.</p>

             <div className='flex justify-between border-b-[1px] border-b-white py-5 mt-8'>
                <input type="text" placeholder='Enter your email' className='w-full outline-0 px-2' />
                <button className="btn primary-btn">Subscribe</button>
             </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
