import React from 'react'
import Marquee from "react-fast-marquee";
import Book from '../../public/icons/book';

const MarqueeComponent = () => {
    return (
        <div className='bg-[#111827]  h-[120px] items-center justify-center flex px-20'>
            <div className='flex text-white tracking-wide flex-col items-end mr-4 text-lg '>
                <div className='text-nowrap'>Powering the best</div>
                <div>teams</div>
            </div>
            <Marquee 
            pauseOnHover={true}
            className="h-full justify-between flex gap-2 cursor-pointer" >
                <div className='flex w-full items-center justify-between gap-4'>
                   <img src="/image/chai-gray.png" height={100} width={100} alt="" />
                   <img src="/image/chai-gray.png" height={100} width={100} alt="" />
                   <img src="/image/chai-gray.png" height={100} width={100} alt="" />
                   <img src="/image/chai-gray.png" height={100} width={100} alt="" />
                   <img src="/image/chai-gray.png" height={100} width={100} alt="" />
                   <img src="/image/chai-gray.png" height={100} width={100} alt="" />
                   <img src="/image/chai-gray.png" height={100} width={100} alt="" />
                   <img src="/image/chai-gray.png" height={100} width={100} alt="" />
                   <img src="/image/chai-gray.png" height={100} width={100} alt="" />
                   <img src="/image/chai-gray.png" height={100} width={100} alt="" />
                   <img src="/image/chai-gray.png" height={100} width={100} alt="" />
                   <img src="/image/chai-gray.png" height={100} width={100} alt="" />
                </div>
            </Marquee>
        </div>
    )
}

export default MarqueeComponent