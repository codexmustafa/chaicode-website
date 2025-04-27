import React from 'react'

const SecondaryBtn = ({ logoRight, logoLeft, text }) => {
    return (
        <div>
            <div>
                <div className='p-1  cursor-pointer transition-all hover:shadow-[inset_4px_4px_12px_0px_rgba(255,255,255,0.2)] rounded-lg bg-[rgba(255,230,213,0.18)]  border border-[#FF4405] text-[#FF4405] flex items-center justify-center gap-2'>
                    <div>{logoLeft}</div>
                    <button className='text-lg  cursor-pointer font-medium min-w-[120px] px-4 py-2 rounded-lg '>{text || "Login"}</button>
                    <div>{logoRight}</div>
                </div>
            </div>
        </div>
    )
}

export default SecondaryBtn