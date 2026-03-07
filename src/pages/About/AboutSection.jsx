import React, { useRef } from 'react'
import Underline from '../../components/Underline'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const AboutSection = ({title, content, image, imageAlt, heartPosition}) => {
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
        duration: 0.5,
        ease: 'power2.out',
      }
    )

    timeline.from(
      '.title-md', {opacity: 0, yPercent: -100, duration: 0.3}
    )

    timeline.from(
      '#about-img-container img', {opacity: 0, scale: 1.3}
    )
    
    const imageTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-img-container",
        start: 'top 17%',
        end: '+=200%',
        scrub: true,
        pin: true,
      },
    })

   
    imageTimeline.to('#about-img-container', {
      scale: 1.2,
      ease: 'none',
      duration: 0.3, 
    })

     imageTimeline.to(
      '#overlay',
      {
        opacity: 1,
        ease: 'power2.out'
      }, 0.75 
 )

  },
  { scope: sectionRef }
)
  return (
    <section ref={sectionRef} className='py-[180px] pb-[1575px] md:pb-[1675px] relative'>
      <div className="container flex flex-col items-center text-center relative">
        <Underline width={'100'} mobileWidth={'100'}/>
        <h1 className="my-6 mb-12 title-md">{title}</h1>


        <div id='about-img-container' className="w-full h-[500px] md:h-[600px] relative z-20">
            <img loading='lazy' className='img-fill' src={image} alt={imageAlt} />
           
            <div id="overlay" className='absolute top-0 left-0 bg-black/80 md:bg-black/70 w-full h-full flex-center opacity-0  z-20 p-10'>
                 <p className='max-w-[900px] leading-[1.75rem] text-md md:leading-[3rem] md:text-xl font-heading'>{content}</p>
            </div>
        </div>

       
      </div>
      
        {heartPosition === 'left' &&  <img className='absolute w-[50px] md:w-[100px]  top-[125px] md:top-[100px] left-[50px] md:left-[100px] z-10' src="/images/heart.png" alt="" /> }
        {heartPosition === 'right' && <img className='absolute w-[50px] md:w-[100px]  top-[125px] md:top-[100px] right-[50px] md:right-[100px] z-10' src="/images/heart.png" alt="" /> }
    
    </section>
  )
}

export default AboutSection
