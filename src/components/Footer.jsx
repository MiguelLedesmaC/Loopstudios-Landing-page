import React from 'react'
import { RiFacebookBoxFill, RiTwitterFill, RiPinterestFill, RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer >
        <div className='bg-gray-800 w-full lg:h-[18vh] flex flex-col items-center lg:grid lg:grid-cols-2 lg:grid-rows-2 py-20 lg:px-[6%] lg:py-8 gap-16 lg:gap-12 text-center lg:text-left'>
            <div> 
                <img src="../../public/assets/images/logo.svg" alt="logo" className='row-span-1 col-start-1' />
            </div>
            <div>
                <ul className='text-white text-xl flex flex-col lg:flex-row gap-7 row-start-2 col-start-1 w-full lg:h-[40px]'>
                    <li> <a href="#">About</a> </li>
                    <li> <a href="#">Careers</a> </li>
                    <li> <a href="#">Events</a> </li>
                    <li> <a href="#">Products</a> </li>
                    <li> <a href="#">Support</a> </li>
                </ul>
            </div>
           
            <div className='flex gap-4 text-white text-5xl lg:col-start-2 lg:row-start-1 '>
                <RiFacebookBoxFill  className='cursor-pointer hover:border-b-[2px] '/>
                <RiTwitterFill  className='cursor-pointer hover:border-b-[2px] ' />
                <RiPinterestFill  className='cursor-pointer hover:border-b-[2px]' />
                <RiInstagramLine className='cursor-pointer hover:border-b-[2px]' />
            </div>
            <small className='text-gray-400 text-lg -mt-8 lg:-mt-3 font-bold '> ©️ 2021 Loopstudios. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer