import Underline from '../../components/Underline'
import React from 'react'

const Contact = () => {
  return (
    <section className='pt-16 pb-24 text-center flex-center flex-col text-md md:text-xl font-extrabold'>
        <Underline width={'100'}/>
        <h1 className="title-md font-medium mt-2 mb-8 md:mb-12">Contact</h1>
      <p  className='mb-4'>Email: <span className='ml-5'>jvino65@gmail.com</span></p>
      <p>Phone: <span className='ml-5'>917-837-1131</span></p>
    </section>
  )
}

export default Contact
