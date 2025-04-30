import React from 'react'
import Marquee from "react-fast-marquee";
import Book from '../assets/icons/book';
import ChaiPic from '../assets/image/chai-gray.png'

const MarqueeComponent = () => {
    return (
        <div className='bg-[#111827]  h-[120px] w-full items-center justify-center flex px-4 lg:px-20'>
        <div className='lg:flex hidden w-full lg:w-fit  lg:text-white lg:tracking-wide lg:flex-col lg:items-start lg:mr-4 lg:text-lg '>
            <div className='text-nowrap '>Powering the best</div>
            <div>teams</div>
        </div>
        <Marquee 
        pauseOnHover={true}
        className="h-full justify-between flex gap-2 cursor-pointer" >
            <div className='flex w-full items-center justify-between gap-4'>
               <img src={ChaiPic} height={100} width={100} alt="" />
               <img src={ChaiPic} height={100} width={100} alt="" />
               <img src={ChaiPic} height={100} width={100} alt="" />
               <img src={ChaiPic} height={100} width={100} alt="" />
               <img src={ChaiPic} height={100} width={100} alt="" />
               <img src={ChaiPic} height={100} width={100} alt="" />
               <img src={ChaiPic} height={100} width={100} alt="" />
               <img src={ChaiPic} height={100} width={100} alt="" />
               <img src={ChaiPic} height={100} width={100} alt="" />
               <img src={ChaiPic} height={100} width={100} alt="" />
               <img src={ChaiPic} height={100} width={100} alt="" />
               <img src={ChaiPic} height={100} width={100} alt="" />
               <img src={ChaiPic} height={100} width={100} alt="" />
               <img src={ChaiPic} height={100} width={100} alt="" />
            </div>
        </Marquee>
    </div>
    )
}

export default MarqueeComponent