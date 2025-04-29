import React from 'react'
import { motion } from 'motion/react'
import CtaButton from './ui/ctaButton'
import Rating from '../assets/icons/ratings'
import PercentageOff from '../assets/icons/offer'
import Offer from '../assets/icons/offer'
import Iphone from '../assets/icons/iphone'
import Iconwithborder from '../assets/icons/iconwithborder'
import MessageText from '../assets/icons/messageText'
import AppStore from '../assets/icons/appStore'
import PlayStore from '../assets/icons/playStore'

const LearnOnGo = () => {

    return (
        <div className='bg-[#101828]'>
            {/* <h2 className='text-3xl text-center text-white pt-6'>Learn on the go.</h2> */}
            <div className='w-full text-white px-20 flex items-center py-20 lg:py-10 justify-between overflow-hidden flex-col lg:flex-row'>
                <div className='flex flex-col py-10 lg:py-0 gap-10 lg:mx-2'>
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="left  text-[36px] lg:text-5xl xl:text-7xl leading-[50px] lg:leading-[110px] w-full  lg:max-w-[700px] xl:max-w-[800px] text-[#EF6820] font-semibold">
                        Learn on the go
                    </motion.div>
                    <div className='max-w-[400px]'>
                        Take your coding journey anywhere with the ChaiCode mobile app. Access courses, join live sessions, and connect with the community - all from your pocket.
                    </div>
                    <div className="offers flex flex-col gap-2">
                        <div className='flex items-center gap-2 justify-start'>
                            <div className='flex items-center justify-center relative'><div className='absolute'><MessageText /></div><Iconwithborder /></div>
                            <div className='font-semibold text-lg'>Offline course access</div>
                        </div>
                        <div className='flex items-center gap-2 justify-start'>
                            <div className='flex items-center justify-center relative'><div className='absolute'><MessageText /></div><Iconwithborder /></div>
                            <div className='font-semibold text-lg'>Live session notifications</div>
                        </div>
                        <div className='flex items-center gap-2 justify-start'>
                            <div className='flex items-center justify-center relative'><div className='absolute'><MessageText /></div><Iconwithborder /></div>
                            <div className='font-semibold text-lg'>Revision while commuting</div>
                        </div>
                    </div>
                    <div className='stores flex items-center justify-start gap-4'>
                            <div><AppStore/></div>
                            <div><PlayStore/></div>
                    </div>
                </div>
                <div className="right flex items-center justify-center">
                    <div className='w-[600px] rounded-full  h-[600px] flex items-center justify-center bg-[#EF6820]/10 '>
                        <div className='w-[100px] px-4 lg:p-0 h-[100px] lg:flex items-center justify-center hidden'><Iphone/></div>
                        <div className='w-[200px] px-4 lg:p-0 h-[400px] flex items-start justify-center lg:hidden'><Iphone width={"500"} height={"760"} /></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearnOnGo