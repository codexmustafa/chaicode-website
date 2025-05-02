import React from 'react'
import Marquee from "react-fast-marquee";
import Book from '../assets/icons/book';
import ChaiPic from '../assets/image/chai-gray.png'
import Accenture from '../assets/icons/Accenture';
import JPMorgan from '../assets/icons/JPMorgan';
import Deloitte from '../assets/icons/Deloitte';
import Malboro from '../assets/icons/Malboro';
import Netflix from '../assets/icons/Netflix';
import CocaCola from '../assets/icons/CocaCola';


const MarqueeComponent = () => {
    return (
        <div className='bg-[#111827] w-full h-[80vh] items-center justify-center lg:flex flex-col lg:h-[60vh] py-10 px-4 lg:px-20'>
        <div className=' flex flex-col gap-4 items-center text-white py-10 justify-center'>
            <div className='text-4xl pt-10 font-semibold tracking-wider items-center flex justify-center text-[#FF7D0C]'>Brands who trust us</div>
            <div className='text-lg tracking-wider'>Subheading</div>
        </div>
        <Marquee
            className="h-max justify-between flex cursor-pointer" >
            <div className='flex w-full items-center justify-between gap-10'>
                <Accenture color={"white"}/>
                <JPMorgan color={"white"}/>
                <Deloitte color={"white"} />
                <Malboro/>
                <Netflix/>
                <CocaCola/>
            </div>
        </Marquee>
    </div>
    )
}

export default MarqueeComponent