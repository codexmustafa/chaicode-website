import React from 'react'
import MessageText from '../../assets/icons/messageText'

const BenefitsCards = ({ data }) => {
    console.log(data)
    return (
        <div className='min-h-[300px] hover:scale-106 transition-all flex items-center gap-4 justify-between flex-col max-w-[400px] bg-[#233041] border border-[#475467] rounded-lg p-4'>
            <div
                style={{
                    borderRadius: "10px",
                    border: "1px solid #475467",
                    background: "#344054",
                    boxShadow: `
                  0px 14px 16px -6px rgba(255, 255, 255, 0.28),
                  -2px -4px 8px 0px rgba(255, 255, 255, 0.25) inset,
                  2px -4px 12px 0px rgba(255, 255, 255, 0.25) inset
                `
                }}
                className="logo p-4 bg-white/10 rounded-lg">
                    <MessageText/>
            </div>
            <div className="heading text-center flex flex-col gap-4 items-center">
                <div className='text-2xl font-semibold text-[#EF6820]'>{data.heading}</div>
                <div className='text-lg max-w-[90%]'>{data.description}</div>
            </div>
            <div className='code text-center font-medium text-xl tracking-wider bg-white/10 px-8 py-4 rounded-lg text-[#EF6820] '>
                {data.code}
            </div>
        </div>
    )
}

export default BenefitsCards