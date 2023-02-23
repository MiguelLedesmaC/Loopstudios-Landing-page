import React from "react";
import imgInteractiveMobile from '../assets/images/mobile/image-interactive.jpg'
import imgInteractiveDesktop from '../assets/images/desktop/image-interactive.jpg'

const AboutUs = () => {
  return (
      <article className="mt-[100px]  px-6 md:px-14 lg:flex items-center justify-center mb-28 ">
      <div className="relative lg:w-[70rem] xl:flex  lg:justify-start justify-center items-center">
        <picture >
            <source srcSet={imgInteractiveMobile}  media="(max-width: 800px)" />
            <source srcSet={imgInteractiveDesktop} media="(min-width: 800px)" />
            <img src={imgInteractiveMobile} alt="logo" className="" />
        </picture>
        <div className="lg:absolute lg:top-36 lg:left-[55%] lg:w-[43rem] lg:pr-[20%] lg:p-12  xl:p-20 lg:h-[20rem]  text-center lg:text-left mt-12 flex flex-col gap-5 bg-white">
          <h2 className="text-[3rem] leading-none font-thin uppercase"> The leader in interactive VR</h2>
          <p className="text-[1.35rem] text-gray-500 font-semibold font-texts">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand. </p>
        </div>
      </div>
      
      </article> 
  )
};

export default AboutUs;
