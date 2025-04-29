import React from 'react'
import CourseCard from './ui/courseCard'
import CtaButton from './ui/ctaButton'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CohortsSection = () => {

  const data = [
    {
      heading: "Fullstack Data Science",
      description: "Master Python, statistics, and ML to become a certified data scientist.",
      pills: ["Python", "Pandas", "TensorFlow"],
      startDate: "April 22, 2024",
      duration: "2 Months",
      typeOf: "Beginner Friendly",
      rate: "9999 INR",
      offerPrice: "7999 INR",
      discount: "20% OFF"
    },
    {
      heading: "Cloud DevOps Bootcamp",
      description: "Deploy real-world apps on AWS using Docker, K8s, and CI/CD pipelines.",
      pills: ["AWS", "Docker", "Kubernetes"],
      startDate: "May 6, 2024",
      duration: "1.5 Months",
      typeOf: "Intermediate",
      rate: "10999 INR",
      offerPrice: "8999 INR",
      discount: "18% OFF"
    },
    {
      heading: "Frontend React Mastery",
      description: "Learn everything from HTML to React hooks and build modern abcc UIs.",
      pills: ["React", "Tailwind", "Next.js"],
      startDate: "May 20, 2024",
      duration: "1 Month",
      typeOf: "Beginner Friendly",
      rate: "6999 INR",
      offerPrice: "5999 INR",
      discount: "15% OFF"
    },
    {
      heading: "Backend API Engineering",
      description: "Design RESTful APIs with Node.js, Express, and MongoDB from scratch.",
      pills: ["Node.js", "MongoDB", "Express"],
      startDate: "June 1, 2024",
      duration: "1 Month",
      typeOf: "Intermediate",
      rate: "7999 INR",
      offerPrice: "6499 INR",
      discount: "19% OFF"
    },
  ];

  const ArrowLeft = ({ onClick }) => (
    <button
      className="absolute left-[-40px]  w-10 h-10 top-1/2 z-10 transform -translate-y-1/2 text-white bg-[#EF6820] rounded-full p-2"
      onClick={onClick}
    >
      ←
    </button>
  );

  const ArrowRight = ({ onClick }) => (
    <button
      className="absolute  right-[-40px] w-10 h-10 top-1/2 z-10 transform -translate-y-1/2 text-white bg-[#EF6820] rounded-full p-2"
      onClick={onClick}
    >
      →
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 1024, // Tablets and smaller
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          centerMode: true,
          centerPadding: '20px'
        },
      },
    ],
  };

  return (
    <div className='w-full overflow-visible h-full bg-[#111827] flex flex-col gap-10 pt-20 items-center justify-center text-white'>
      <div className="headings flex items-center justify-center gap-4 flex-col">
        <div className="text text-4xl font-semibold ">
          Cohorts for you by us.
        </div>
        <div className='w-fit'>
          <CtaButton text={"Explore All Cohorts"} />
        </div>
      </div>
     
      <div className="w-full  relative px-10 slider_container ">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="px-4 ">
              <CourseCard data={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default CohortsSection