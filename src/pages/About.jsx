import React from 'react'
import { aboutSections } from '../../constants'
import AboutSection from './About/AboutSection'

const About = () => {
  return (
    <>
      {aboutSections.map((item, index) => (
        <AboutSection key={item.title} {...item} heartPosition={index % 2 ? 'left' : 'right'}/>
      ))}
     
    </>
  )
}

export default About
