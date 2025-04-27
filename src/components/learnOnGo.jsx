import React from 'react'
import { motion } from 'motion/react'
import CtaButton from './ui/ctaButton'
import Rating from '../../public/icons/ratings'
import PercentageOff from '../../public/icons/offer'
import Offer from '../../public/icons/offer'
import Iphone from '../../public/icons/iphone'

const LearnOnGo = () => {

    return (
        <div className='bg-[#101828]'>
            {/* <h2 className='text-3xl text-center text-white pt-6'>Learn on the go.</h2> */}
        <div className='w-full  px-20 flex items-center py-20 justify-between overflow-hidden flex-col lg:flex-row'>
            <div className='flex flex-col py-10 lg:py-0 gap-10 lg:mx-2'>
                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="left  text-[24px] lg:text-5xl xl:text-7xl leading-[50px] lg:leading-[110px] w-full  lg:max-w-[700px] xl:max-w-[800px] text-amber-700 font-semibold">
                    Learn on the go
                </motion.div>
                <p className='text-left text-white text-[20px] mt-4'>Take your coding journey anywhere with the ChaiCode mobile app. Access courses, join live sessions, and connect with the community - all from your pocket.</p>

                <div>
                    <Rating/>
                </div>
                <div className="numbers flex items-start justify-center flex-col gap-2 text-white">
                    <Offer/>
                    <h4 className='text-2xl'>399 INR <span className='line-through align-middle text-gray-500 text-[16px] ml-7'>2000 INR</span></h4>
                    
                </div>
                <div className='w-fit'>
                    <a href="https://discord.com/invite/WDrH3zuWFb" target="_blank" rel="noopener noreferrer"><CtaButton text={"Check Udemy Courses"}/></a>
                    
                </div>
            </div>
            <div className="right">
                <div className='w-[600px] h-[500px] flex items-center justify-center bg-white/10 rounded-lg'>
                   <Iphone/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default LearnOnGo