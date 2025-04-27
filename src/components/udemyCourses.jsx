import React from 'react'
import { motion } from 'motion/react'
import CtaButton from './ui/ctaButton'
import Rating from '../../public/icons/ratings'
// import Rating from '../../public/icons/ratings'

const UdemyCourses = () => {

    return (
        <div className='bg-[#101828]'>
            <h2 className='text-5xl text-center text-white pt-6'>Our Course On Udemy.</h2>
            <p className='text-center text-white text-[20px] mt-4'>Orrupti aut temporibus assumenda atque ab, accusamus sit, molestiae veniam <br /> laboriosam pariatur.</p>
        <div className='w-full  px-20 flex items-center py-20  justify-between overflow-hidden flex-col lg:flex-row'>
            <div className='flex flex-col py-10 lg:py-0 gap-10 lg:mx-2'>
                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="left  text-[28px] lg:text-6xl xl:text-8xl leading-[50px] lg:leading-[110px] w-full  lg:max-w-[700px] xl:max-w-[800px] text-white/90 font-semibold">
                    Complete web development course
                </motion.div>
                <p className='text-white'>Only web development course that you will need. <br /> Covers HTML, CSS, Tailwind, Node, React, MongoDB,  Prisma, Deployment etc</p>
                <div>
                    <Rating/>
                </div>
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
        </div>
    )
}

export default UdemyCourses