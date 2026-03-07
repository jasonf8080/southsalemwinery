import React, { useEffect, useState, useRef } from 'react'
import Underline from '../components/Underline'
import { wines } from '../../constants'
import WineCard from '../components/WineCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const Products = () => {
  const sectionRef = useRef();
  const [activeCategory, setActiveCategory] = useState('All Wines')
  const wineCategories = [
  {
    category: 'All Wines',
    count: wines.length
  },
  ...Object.entries(
    wines.reduce((acc, wine) => {
      acc[wine.variant] = (acc[wine.variant] || 0) + 1;
      return acc;
    }, {})
  ).map(([category, count]) => ({
    category,
    count
  }))
];

const [filteredWines, setFilteredWines] = useState([])

useEffect(() => {
    const newWines = wines.filter((wine) => {
        if(activeCategory === 'All Wines'){
            return {...wine}
        }
        if(wine.variant === activeCategory){
            return {...wine}
        } else {

        }
    })

    setFilteredWines(newWines)
}, [activeCategory])

//  useGSAP(() => {
//       const timeline = gsap.timeline({
//         scrollTrigger: {
//         trigger: sectionRef.current,
//         start: 'top center',
//         toggleActions: 'play none none reverse'
//       }
//     })

//      timeline.fromTo(
//       '.reveal-underline',
//       {
//         scaleX: 0,
//         transformOrigin: 'center center-=100',
//       },
//       {
//         scaleX: 1,
//         duration: 1,
//         ease: 'power2.out',
//       }
//     )

//     timeline.from(
//       '.title-md', {opacity: 0, yPercent: -100}
//     )

//      timeline.from(
//       '.animate-p', {opacity: 0, yPercent: -100}
//     )

   

   

//   }, {scope: sectionRef})

  return (
    <section ref={sectionRef} id='products' className='py-[180px]'>
      <div className="container flex-center flex-col">
        <Underline width={'100'} mobileWidth={'100'}/>
        <h1 className='my-6 title-md'>Our wine collection</h1>
        <p className='mb-12 text-lg text-center animate-p'>Explore our collection of small-batch wines crafted with care and character.</p>

        <div className="products-grid grid grid-cols-1 md:grid-cols-[1.25fr_3fr] gap-8 border-t-2 border-t-[#333] pt-10 ">
            {/* Wine Categories */}
            <div className="hidden md:block bg-[#222] h-fit font-ui p-10">
                {wineCategories.map((item) => (
                    <article 
                    key={item.category}
                    className={`${activeCategory === item.category ? 'text-accent' : 'text-white'} mb-4 cursor-pointer flex items-center`}
                    onClick={() => setActiveCategory(item.category)}
                    >
                     <p>{item.category}</p> <span className='ml-3'>{`(${item.count})`}</span>
                    </article>
                ))}
            </div>

            


            <div className=" min-w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredWines.map((wine) => (
                    <WineCard {...wine}/>
                ))}
            </div>
        </div>

       
        

      </div>
    </section>
  )
}

export default Products
