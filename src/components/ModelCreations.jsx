import React from 'react'



const ModelCreations = ({ imageMobile, imageDesktop, defaultImage, text }) => {
  return (
    <div className='relative'>
        <picture >
            <source srcSet={imageMobile} media="(max-width: 1024px)" />
            <source srcSet={imageDesktop} media="(min-width: 1024px)" />
            <img src={defaultImage}  alt='image of creations' className='md:h-[450px] md:w-[270px] md:object-cover' />  
        </picture>
        <p className='absolute top-[4rem] tracking-wider left-10 w-[9.3rem] text-3xl font-thin uppercase text-white'>{text}</p>
    </div>
  )
}

export default ModelCreations