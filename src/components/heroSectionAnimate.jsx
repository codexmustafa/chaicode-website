import React, { useEffect } from 'react'
import { motion, useMotionTemplate, useMotionValue, animate, easeInOut } from "motion/react"
import CtaButton from './ui/ctaButton'
import LeftLine from '../../public/icons/leftLine'
import RightLine from '../../public/icons/rightLine'
import File from '../../public/icons/file'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import Users from '../../public/icons/users'
import GitPull from '../../public/icons/gitPull'
import VideoRecorder from '../../public/icons/videoRecorder'
import MessageText from '../../public/icons/messageText'
import CurrencyDollar from '../../public/icons/currencyDollar'
import ArrowLong from '../../public/icons/arrowLong'

const COLORS = ["#FF7D0C", "#FF8C27", "#D76400"]
const HeroSectionAnimate = () => {
  const color = useMotionValue(COLORS[0])
  const backgroundImage = useMotionTemplate`radial-gradient(126% 126% at 50% 0%, #111827 40%, ${color})`
  useEffect(() => {
    animate(color, COLORS, {
      ease: easeInOut,
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror"
    })
  }, [])

  const headline = "Consistency and Community";
  const words = headline.split(" ")

  


  return (
    <motion.div
      style={{
        backgroundImage
      }}
      className="h-[94vh] w-full bg-[#111827] relative overflow-hidden">
      <Tooltip
        className='z-50 !text-white !text-sm !px-4 !py-2 !rounded-lg shadow-lg'
        id="my-tooltip" />
      <div className='w-full h-screen flex gap-20 items-center justify-center flex-col'>
        <div className='flex items-center  justify-center gap-6 flex-col'>
          <div className="pill border  text-sm lg:text-[18px] border-[#98A2B3] px-4 py-1 flex items-center bg-[#344054] justify-center gap-4 rounded-full text-white w-fit">Trusted By 1.5M Code Learners <div className='h-2 w-2 rounded-full bg-[#FF7D0C]'></div> </div>
          <div className="">
            {words.map((text, index) => (
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: 14 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                key={index}
                className='text lg:text-[72px] relative text-[48px] text-center  tracking-tight font-semibold bg-[linear-gradient(90deg,_#FFF_0.12%,_rgba(255,255,255,0.6)_101.84%)] bg-clip-text text-transparent inline-block ml-4'>{text}</motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className='text-4xl px-2 font-medium text-center tracking-tight bg-[linear-gradient(180deg,_#FF7D0C_33.82%,_#FE9332_79.41%)] py-1 bg-clip-text text-transparent'>
            An unparalleled learning experience for coding courses.
          </motion.div>
          <motion.div
          initial={{opacity: 0, filter: "blur(2px)", y:10}}
          animate={{opacity: 1,  filter: "blur(0px)", y:0}}
          transition={{duration: 0.3, delay: 0.1 }}
          className='max-w-[800px] px-2 lg:px-0 text-[16px] tracking-wide text-white/90 lg:text-lg text-center'>
            Content is everywhere, but we provide a learning experience that is unmatched — bounties, peer learning, code reviews, virtual hostel, alumni network, doubt sessions, and group projects.
          </motion.div>
          <div className='cursor-pointer'><CtaButton text={"Explore Cohorts"} /></div>
          <div className='lg:absolute hidden lg:block lg:right-20 lg:top-80 xl:top-100 xl:right-40'><ArrowLong /></div>
        </div>

        <div className="bottomButtons w-full flex items-center justify-between gap-4">
          <div className='w-full hidden lg:block'><LeftLine /></div>
          <div className="explore flex items-center justify-center gap-4 w-full ">
            <div data-tooltip-id="my-tooltip" data-tooltip-content="Peer Learning" className="first p-1 bg-[#ff7d0c23] rounded-xl ">
              <div className='p-3 rounded-lg bg-[rgba(248,124,0,0.9)] transition-all cursor-pointer hover:shadow-[inset_0px_1px_4px_rgba(255,255,255,0.2),_inset_6px_-6px_12px_rgba(255,255,255,0.6),_inset_-6px_-6px_6px_rgba(255,255,255,0.4),_0px_12px_12px_rgba(0,0,0,0.25)]'>
                <Users width={"22"} height={"22"} />
              </div>
            </div>
            {/* Second Box */}
            <div data-tooltip-id="my-tooltip" data-tooltip-content="Code Reviews" className="first p-1 bg-[#ff7d0c23] rounded-xl">
              <div className='p-4 rounded-lg bg-[rgba(248,124,0,0.9)] transition-all cursor-pointer hover:shadow-[inset_0px_1px_4px_rgba(255,255,255,0.2),_inset_6px_-6px_12px_rgba(255,255,255,0.6),_inset_-6px_-6px_6px_rgba(255,255,255,0.4),_0px_12px_12px_rgba(0,0,0,0.25)]'>
                <GitPull width={"26"} height={"26"} />
              </div>
            </div>
            {/* Second Box */}
            <div data-tooltip-id="my-tooltip" data-tooltip-content="Virtual Hostel!" className="first p-2 bg-[#ff7d0c23] rounded-xl">
              <div className='p-5 rounded-[12px] bg-[rgba(248,124,0,0.97)] cursor-pointer shadow-[inset_0px_1px_4px_rgba(255,255,255,0.2),_inset_6px_-6px_12px_rgba(255,255,255,0.6),_inset_-6px_-6px_6px_rgba(255,255,255,0.4),_0px_12px_12px_rgba(0,0,0,0.25)]'>
                <VideoRecorder width={"26"} height={"26"} />
              </div>
            </div>
            {/* Second Box */}
            <div data-tooltip-id="my-tooltip" data-tooltip-content="Doubt Sessions!" className="first p-1 bg-[#ff7d0c23] rounded-xl">
              <div className='p-4 rounded-lg bg-[rgba(248,124,0,0.9)] transition-all cursor-pointer hover:shadow-[inset_0px_1px_4px_rgba(255,255,255,0.2),_inset_6px_-6px_12px_rgba(255,255,255,0.6),_inset_-6px_-6px_6px_rgba(255,255,255,0.4),_0px_12px_12px_rgba(0,0,0,0.25)]'>
                <MessageText width={"26"} height={"26"} />
              </div>
            </div>
            {/* Second Box */}
            <div data-tooltip-id="my-tooltip" data-tooltip-content="Bounties" className="first p-1 bg-[#ff7d0c23] rounded-xl ">
              <div className='p-3 rounded-lg bg-[rgba(248,124,0,0.9)] transition-all cursor-pointer hover:shadow-[inset_0px_1px_4px_rgba(255,255,255,0.2),_inset_6px_-6px_12px_rgba(255,255,255,0.6),_inset_-6px_-6px_6px_rgba(255,255,255,0.4),_0px_12px_12px_rgba(0,0,0,0.25)]'>
                <CurrencyDollar width={"22"} height={"22"} />
              </div>
            </div>
          </div>
          <div className='w-full hidden lg:block'><RightLine /></div>
        </div>

      </div>
    </motion.div>
  )

}

export default HeroSectionAnimate