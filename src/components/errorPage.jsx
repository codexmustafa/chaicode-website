import React from 'react'
import MascotError from '../../public/icons/mascotError'

const ErrorPage = () => {
    return (
        <div className='w-full h-screen flex flex-col gap-10 items-center justify-center'>
            <div className="mascot">
                <MascotError />
            </div>
            <div className='text-6xl text-[#101828] font-semibold'>
                404 Page Not Found
            </div>
        </div>
    )
}

export default ErrorPage