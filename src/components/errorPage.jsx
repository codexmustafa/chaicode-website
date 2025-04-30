import React from 'react'
// import MascotError from '../assets/icons/mascotError'
import CtaButton from './ui/ctaButton'
import Error from '../assets/image/error.png'

const ErrorPage = () => {
    return (
        <div className='w-full h-screen flex gap-10 items-center justify-between px-20'>
            <div className='flex flex-col gap-10'>
           <div className='flex gap-4 flex-col'>
           <div className='text-6xl text-[#101828] font-semibold'>
                OOOps!
                Page Not Found
            </div>
            <div className='text-gray-600 font-medium text-lg'>
                This page doesn’t exist or was removed!
                We suggest you back to home
            </div>
           </div>
            <div className='w-fit'>
                <CtaButton text={"Go to home page"} />
            </div>
            </div>
            <div className="mascot">
                <img src={Error} alt="" />
            </div>
            
        </div>
    )
}

export default ErrorPage