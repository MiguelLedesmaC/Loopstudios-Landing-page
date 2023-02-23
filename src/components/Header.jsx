import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import hamburguer from '../assets/images/icon-hamburger.svg'
import close from '../assets/images/icon-close.svg'
import heroMobile from '../assets/images/mobile/image-hero.jpg'
import heroDesktop from '../assets/images/desktop/image-hero.jpg'

const Header = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
       if(menu == false) {
        setMenu(true)
       }else {
        setMenu(false)
       }
    }
  return (
    <header className='relative'>
        <picture >
            <source srcSet={heroMobile}  media="(max-width: 800px)"  />
            <source srcSet={heroDesktop} media="(min-width: 800px)"  />
            <img src={heroMobile} alt="logo" className='w-full md:h-[80vh] lg:h-[90vh] object-cover' />
        </picture>
        {/* Nav mobile */}
        <nav className={`absolute top-0 h-[150vh] lg:hidden w-full bg-gray-800 ${menu == true ? 'block' : 'hidden'} text-white z-40`}>
            <ul className='flex flex-col px-6 md:px-16 py-48 gap-10 text-4xl uppercase font-light'>
                <li><a className='hover:font-semibold' href='#'>About</a></li>
                <li><a className='hover:font-semibold' href='#'>Careers</a></li>
                <li><a className='hover:font-semibold' href='#'>Events</a></li>
                <li><a className='hover:font-semibold' href='#'>Products</a></li>
                <li><a className='hover:font-semibold' href='#'>Support</a></li>
            </ul>
        </nav>
        
        
        {/* Logo nav */}
        <div className='absolute top-0 flex items-center justify-between w-full px-6 py-5 z-50 md:px-16'>
            <img src={logo} alt="logo" />
            <button> <img onClick={toggleMenu} src={menu == false ? hamburguer : close } alt="hamburguer" className='lg:hidden' /> </button>
            {/* Nav Desktop */}
        <nav className='hidden lg:flex '>
        <ul className='flex gap-10 lg:text-[1.2rem]  font-light lg:font-bold text-white h-[30px] '>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Careers</a></li>
                <li><a href='#'>Events</a></li>
                <li><a href='#'>Products</a></li>
                <li><a href='#'>Support</a></li>
            </ul>
        </nav>
        </div>
        {/* Nav */}
        
        {/* End nav */}
        <div className='absolute top-[12%] w-[83%] max-w-[490px] md:w-[36%] lg:w-[50%] ml-[8%] mt-[43%] md:mt-[7%]  py-3 px-4 text-[2.67rem] lg:text-7xl font-light text-white uppercase  ring-2 ring-white leading-[1.05] tracking-[0.2rem]'>
            immersive experiences that deliver 
        </div>


    </header>

  )
}

export default Header