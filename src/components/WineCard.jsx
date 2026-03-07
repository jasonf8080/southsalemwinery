import React from 'react'

const WineCard = ({id, variant, name, image, price}) => {
  return (
        <article
              key={id}
              className="
                wine-card
                inline-block
                border border-white/10
              bg-white/[0.02]
               
                whitespace-normal
              "
            >
              <img
                src={image}
                alt={name}
                className="w-full h-auto"
                loading='lazy'
              />
              <div className='p-6'>
                <p className=' mb-2'>{variant}</p>
                <h3 className="title-sm mb-4 font-heading font-bold">{name}</h3>
                <p className="text-accent font-bold text-lg">
                  ${price}.00 USD
                </p>
              </div>
        </article>
  )
}

export default WineCard
