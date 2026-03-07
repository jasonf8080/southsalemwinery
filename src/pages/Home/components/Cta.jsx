import React, { useRef } from 'react'
import Underline from '../../../components/Underline'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Cta = () => {
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
      'p',  {opacity: 0, yPercent: -100}
    )



    const imageTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center+=400',
        scrub: true
      }
    })
    imageTimeline
      .from('.img-1', { x: -20 }, 0)
      .from('.img-2', { x: 20 }, 0)

  }, {scope: sectionRef})

  return (
    <section ref={sectionRef} id='cta' className='py-[120px] bg-secondary relative'>
      <img className='absolute w-[50px] md:w-[100px]  top-[50px] md:top-[50px] left-[25px] md:left-[50px] md:left-[100px] z-10' src="/images/heart.png" alt="" /> 
        <div className="container flex flex-col flex-center">
             <Underline width={'100'} mobileWidth={'100'}/>
             <h1 className='title-md my-6 text-center'>Come and live the best wine experience of your life</h1>
             <p className='text-lg text-center'>Enjoy curated tastings featuring our handcrafted wines, perfectly complemented by carefully selected food pairings.</p>
            <div className="flex flex-center max-w-[900px] mt-24">
                <img loading='lazy'  src="/images/cta1.png" className='img-full translate-y-[-20px] translate-x-[20px] img-1' alt="winery" />
                <img  loading='lazy' src="/images/cta2.png" className='img-full translate-y-[20px] translate-x-[-20px] img-2' alt="winery" />
            </div>
        </div>
    </section>
  )
}

export default Cta
