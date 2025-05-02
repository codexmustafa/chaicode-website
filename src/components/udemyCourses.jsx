import React from 'react';
import { motion } from 'motion/react';
import CtaButton from './ui/ctaButton';
import Rating from '../assets/icons/ratings';
import PercentageOff from '../assets/icons/offer';
import Offer from '../assets/icons/offer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import UdemyCourseCards from './ui/udemyCourseCards';


const UdemyCourses = () => {
    const data = [
      {
        videoId: "yKTEC1Y5bEQ",
        title: "Complete Web Development Course",
        description: "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment, etc.",
        discountedPrice: "399 INR",
        originalPrice: "2000 INR",
        link: "https://www.udemy.com/course/complete-web-development-course/",
      },
      {
        videoId: "yKTEC1Y5bEQ",
        title: "Advanced React and Redux",
        description: "Master advanced React concepts and Redux. Build complex, dynamic applications.",
        discountedPrice: "499 INR",
        originalPrice: "2500 INR",
        link: "https://www.udemy.com/course/advanced-react-redux/",
      },
    ];
  
    const ArrowLeft = ({ onClick }) => (
      <button
        className="absolute bottom-0 lg:top-10 left-4 w-10 h-10 z-10 transform -translate-y-1/2 text-white bg-[#EF6820] rounded-full p-2"
        onClick={onClick}
      >
        ←
      </button>
    );
    
    const ArrowRight = ({ onClick }) => (
      <button
        className="absolute bottom-0 lg:top-10 right-4 w-10 h-10 z-10 transform -translate-y-1/2 text-white bg-[#EF6820] rounded-full p-2"
        onClick={onClick}
      >
        →
      </button>
    );
    
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      nextArrow: <ArrowRight />,
      prevArrow: <ArrowLeft />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            centerMode: true,
            centerPadding: '20px',
          },
        },
      ],
    };
  
    return (
      <div className="bg-[#101828]">
        <h2 className="text-5xl font-semibold text-[#EF6820] text-center pt-6">
          Our Course On Udemy.
        </h2>
        <p className="text-center text-white text-[20px] mt-4">
          Join thousands of students who have transformed their careers with our comprehensive courses
        </p>
        <div className="w-full relative px-4 slider_container overflow-hidden">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className="">
                <UdemyCourseCards data={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  };

export default UdemyCourses