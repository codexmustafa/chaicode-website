import React from 'react'

const CtaButton = ({text}) => {
    return (
        <div >
            <div className='p-1 rounded-lg bg-[rgba(255,230,213,0.3)] '>
                <button className='text-lg text-white font-medium min-w-[120px] cursor-pointer px-4 py-2 rounded-lg bg-[linear-gradient(276deg,_#FF7D0C_20.01%,_#FE9332_96.30%)]'>{text || "Login" }</button>
            </div>
        </div>
    )
}

export default CtaButton