import React from 'react'
import { motion } from 'motion/react'
import CtaButton from './ui/ctaButton'
const DiscordSection = () => {

    return (
        <div className='w-full bg-[#182230] px-20 flex items-center py-20  justify-between overflow-hidden flex-col lg:flex-row'>
            <div className='flex flex-col py-10 lg:py-0 gap-10 lg:mx-2'>
                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="left  text-4xl lg:text-6xl xl:text-8xl leading-[50px] lg:leading-[110px] w-full  lg:max-w-[700px] xl:max-w-[800px] text-white/90 font-semibold">
                    Join the community where <span className='text-[#EF6820] underline'>Creativity</span> thrives
                </motion.div>
                <div className="numbers flex items-start flex-col gap-2 text-white">
                    <motion.div className=' text-4xl font-semibold text-[#EF6820]'>80,000+</motion.div>
                    <div>Active coders in Discord</div>
                </div>
                <div className='w-fit'>
                    <a href="https://discord.com/invite/WDrH3zuWFb" target="_blank" rel="noopener noreferrer"><CtaButton text={"Join Discord Now"}/></a>
                    
                </div>
            </div>
            <div className="right">
                <div className='w-[600px] h-[500px] flex items-center justify-center bg-white/10 rounded-lg'>
                    <iframe width="600" height="500"  src="https://www.youtube.com/embed/yKTEC1Y5bEQ?si=X5p1Ke4Ts0WKlDWC" className='rounded-lg'></iframe>
                </div>
            </div>
        </div>
    )
}

export default DiscordSection