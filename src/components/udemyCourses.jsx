import React from 'react';
import { motion } from 'motion/react';
import CtaButton from './ui/ctaButton';
import Rating from '../assets/icons/ratings';
import PercentageOff from '../assets/icons/offer';
import Offer from '../assets/icons/offer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
    className: "center",
    infinite: true,
    dots: true,
    arrows: true,   
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    } 
  };
const UdemyCourses = () => {

    return (
        <div className='bg-[#101828]'>
             {/* <Slider {...settings}>              */}
            <h2 className='text-5xl font-semibold text-[#EF6820] text-center pt-6'>Our Course On Udemy.</h2>
            <p className='text-center text-white text-[20px] mt-4'>Join thousands of students who have transformed their careers with our comprehensive courses</p>
            <div className='w-full gap-10 lg:px-10 px-4 flex items-center py-20  justify-around overflow-hidden flex-col lg:flex-row'>
            <div className="right">
                    <div className='w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] flex items-center justify-center bg-white/10 rounded-lg'>
                        <iframe width="500" height="500" src="https://www.youtube.com/embed/yKTEC1Y5bEQ?si=X5p1Ke4Ts0WKlDWC" className='rounded-lg'></iframe>
                    </div>
                </div>
                <div className='flex flex-col py-10 lg:py-10 gap-10 lg:mx-2 border border-white/10 px-4 rounded-lg'>
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="left  text-[28px] lg:text-6xl xl:text-46l leading-[50px] lg:leading-[70px] w-full  lg:max-w-[700px] xl:max-w-[800px] text-white/90 font-semibold">
                        Complete web development course
                    </motion.div>
                    <p className='text-white'>Only web development course that you will need. <br /> Covers HTML, CSS, Tailwind, Node, React, MongoDB,  Prisma, Deployment etc</p>
                    <div>
                        <Rating />
                    </div>
                    <div className="numbers flex items-start justify-center flex-col gap-2 text-white">
                        <Offer />
                        <h4 className='text-2xl'>399 INR <span className='line-through align-middle text-gray-500 text-[16px] ml-7'>2000 INR</span></h4>
                    </div>
                    <div className='w-fit'>
                        <a href="https://discord.com/invite/WDrH3zuWFb" target="_blank" rel="noopener noreferrer"><CtaButton text={"Check Udemy Courses"} /></a>
                    </div>
                </div>
            </div>
            {/* </Slider> */}
        </div>
    )
}

export default UdemyCourses