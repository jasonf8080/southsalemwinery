import React, { useRef } from 'react'
import Underline from '../../../components/Underline'
import { wines } from '../../../../constants'
import WineCard from '../../../components/WineCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'

const Shop = () => {
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
      '.wine-card', {opacity: 0, stagger: 0.1, ease: "power1.inOut"}
    )
  }, {scope: sectionRef})

  return (
    <section ref={sectionRef} id='quick-shop' className="py-[80px] md:py-[120px]">
      <div className="container flex flex-col items-center">
        <Underline width={'100'} mobileWidth={'100'} />
        <h1 className="title-md my-6 text-center">
          Browse our handcrafted collection of premium wines
        </h1>

        {/* Wine Shop */}
        <div
          className="
            mt-12
            w-full
            flex gap-8
            overflow-x-auto overflow-y-hidden
            whitespace-nowrap
            scroll-smooth
            pb-4
            wine-track
             md:gap-x-8 md:gap-y-16
             md:whitespace-normal md:pb-0
          "
        >
          {wines.map((wine) => (
           <WineCard {...wine}/>
          ))}
        </div>

        <Link to={'/shop'} className="btn primary-btn mt-20 w-full md:w-fit text-center">Browse all wines</Link>
      </div>
    </section>
  )
}

export default Shop