import React, { useRef } from 'react'
import { aboutHighlights } from '../../../../constants'
import Underline from '../../../components/Underline'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

const About = () => {
  const sectionRef = useRef();

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center-=100',
        end: 'bottom top',
        toggleActions: "play none none reverse"
      }

    })

    timeline.from(
      '.title-md', {opacity: 0, yPercent: -100}
    )
    timeline
      .fromTo('#collection', { opacity: 0}, { opacity: 1,  ease: "power1.inOut" }, 0.25)
      .fromTo('#tastings', { opacity: 0}, { opacity: 1, ease: "power1.inOut"}, 0.35)
      .fromTo('#ny-made', { opacity: 0,}, { opacity: 1, ease: "power1.inOut"}, 0.45)

  }, {scope: sectionRef})

  return (
    <section ref={sectionRef} id='about' className='mt-[100px] pb-[120px] bg-primary'>
      <div className="container">
        <h1 className="title-md text-center">Explore one of our unprecedented experiences</h1>
        
        {/* About Highlights */}
        <div className="flex flex-col md:flex-row gap-32 md:gap-16 mt-16 md:mt-24">
            {aboutHighlights.map((highlight) => (
              <article id={highlight.id} className="flex flex-col items-center text-center">
                {/* Render icon from data */}
                <highlight.icon
                  strokeWidth={0.5}
                  className="h-[100px] w-[100px] text-accent"
                />

                <h3 className="mt-4 mb-4 title-sm font-heading font-bold">
                  {highlight.title}
                </h3>

                <p className="mb-12">
                  {highlight.synopsis}
                </p>

                <Underline width={'100'} mobileWidth={'100'} />
              </article>
            ))}
        </div>

        
      </div>
    </section>
  )
}

export default About
