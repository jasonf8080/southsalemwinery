import Underline from '../../../components/Underline'
import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Location = () => {
  const sectionRef = useRef();

   useGSAP(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        toggleActions: 'play none none reverse'
      }
    })

     timeline.fromTo(
      '.reveal-underline',
      {
        scaleX: 0,
        transformOrigin: 'center center-=100',
      },
      {
        scaleX: 1,
        duration: 1,
        ease: 'power2.out',
      }
    )

    timeline.from(
      '.title-md', {opacity: 0, yPercent: -100}
    )

    timeline.from(
      '.map', {opacity: 0, x: -100}
    )

    timeline.from(
      '.location-info p', {opacity: 0, yPercent: -100, stagger: 0.1}
    )



    
  }, {scope: sectionRef})

  return (
    <section ref={sectionRef} id='location' className='py-[60px] md:py-[120px] bg-secondary'>
      <div className="container">
        <div className="flex-center flex-col">
           <Underline width={'100'} mobileWidth={'100'}/>
              <h1 className="title-md mt-4 mb-6  md:mb-12">Our Location</h1>
        </div>
      
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div 
              className='hidden md:block basis-[45%] map'
              style={{ margin: "1em 0" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.5112726677485!2d-73.57065192375845!3d41.27597597131412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2aeae32de74f3%3A0x1d8d3dcb720d8b41!2s1202%20NY-35%2C%20South%20Salem%2C%20NY%2010590!5e0!3m2!1sen!2sus!4v1758912885495!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

              <div 
              className='block md:hidden basis-[45%] map'
              style={{ margin: "1em 0" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.5112726677485!2d-73.57065192375845!3d41.27597597131412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2aeae32de74f3%3A0x1d8d3dcb720d8b41!2s1202%20NY-35%2C%20South%20Salem%2C%20NY%2010590!5e0!3m2!1sen!2sus!4v1758912885495!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>


            <div className='location-info md:mt-16'>
              <p className='mb-5 md:mb-8 text-md md:text-xl'><span className='font-bold mr-3'>Address:</span>1202 Route 35, South Salem, NY</p>
              <p className='mb-5 md:mb-8 text-md md:text-xl'><span className='font-bold mr-3'>Location:</span>Located inside the greenhouse at Gossetts Nursery.</p>
              <p className='mb-5 md:mb-8 text-md md:text-xl'><span className='font-bold mr-3'>Hours:</span>Thursday - Saturday: 7:00 AM - 7:00 PM Sunday: 7:00 AM - 5:00 PM</p>
            </div>


          </div>
        </div>
    </section>
  )
}

export default Location
