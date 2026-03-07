import React, { useRef } from 'react'
import Underline from '../../../components/Underline'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'



const Hero = () => {
  const sectionRef = useRef(null)
  useGSAP(() => {
    //Inital load
      gsap.fromTo(
      '.reveal-underline',
      {
        scaleX: 0,
        transformOrigin: 'center center',
      },
      {
        scaleX: 1,
        duration: 1,
        ease: 'power2.out',
      }
    )

    gsap.from(
      '.hero-content',
      {
        opacity: 0,
        y: -50,
        delay: 0.5
      }
    )

    gsap.from(
      '.mobile-btn', {opacity: 0, y: -50, delay: 0.75}
    )

     gsap.from(
      '#hero-img-container img', {opacity: 0, scale: 1.3, delay: 1}
    )


    //ScrollTrigger
    const imageTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-img-container",
        start: 'top 15%',
        end: '+=200%', // 👈 long pin duration
        scrub: true,
        pin: true,
      },
    })

    
    imageTimeline.to('#hero-img-container', {
      scale: 1.2,
      ease: 'none',
      duration: 0.3
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
    <section ref={sectionRef} className="pt-[120px] md:pt-[180px] pb-[120px]">
       
      <div className="container">
        {/* Hero Content */}
        <Underline width={'200'} mobileWidth={'200'} />
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-8">
          <div className="hero-content basis-[50%]">
            <h1 className="title-lg">
              South Salem Winery & vineyard est. 1928
            </h1>
            <Link to={'/shop'} className="hidden md:block btn primary-btn w-fit mt-12">
              Our Products
            </Link>
          </div>

          <div className="hero-content basis-[50%]">
            <p className="leading-[2rem] text-lg">
              South Salem Winery is a small-batch, family-run micro winery dedicated to crafting
              expressive wines that reflect our land and seasons. By producing in limited quantities,
              we focus on quality, character, and hands-on winemaking from vine to bottle.
            </p>
             <img className='heart-img w-[40px] md:w-[80px] z-10 ml-auto mr-6 md:mr-24 md:mt-8' src="/images/heart.png" alt="" />
          </div>

          <Link to={'/shop'} className="mobile-btn block md:hidden btn primary-btn w-full text-center mt-6">
            Our Products
          </Link>
        </div>

        {/* Hero Image */}
        <div id='hero-img-container' className="w-full h-[500px] md:h-[600px] relative mt-24 overflow-hidden">
          <div id="overlay" className='absolute top-0 left-0 bg-black/80 md:bg-black/70 w-full h-full flex-center opacity-0  z-20 p-10'>
            <p className='max-w-[900px] leading-[1.75rem] text-md md:leading-[3rem] md:text-xl font-heading text-center'>“Thoughtfully crafted, one bottle at a time — since 2014. Rooted in tradition, refined through patience, and shared in every pour.”</p>
          </div>
          <img
            src="/images/gossetts.jpeg"
            alt="Exterior of Gossetts Nursery"
            className="img-fill hero-img"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero