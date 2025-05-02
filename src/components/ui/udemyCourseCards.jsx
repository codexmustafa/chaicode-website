import React from 'react';
import Offer from '../../assets/icons/offer';
import Rating from '../../assets/icons/ratings';
import { motion } from "framer-motion"; // Corrected the import for framer-motion
import CtaButton from './ctaButton';

const UdemyCourseCards = ({ data }) => {

  return (
    <div className=" gap-10 lg:px-2 px-1 py-20">
      <div className="flex items-center justify-around overflow-hidden flex-col lg:flex-row">
        <div className="flex flex-col py-10 lg:py-10 gap-10 lg:mx-2 border border-white/10 lg:px-4 px-2 w-full  rounded-lg">
          <iframe
            src={`https://www.youtube.com/embed/${data.videoId}?si=X5p1Ke4Ts0WKlDWC`}
            className="rounded-lg h-[300px] lg:h-[400px]"
          ></iframe>
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[28px] lg:text-4xl xl:text-46l leading-[50px] lg:leading-[45px] w-full lg:max-w-[700px] xl:max-w-[800px] text-white/90 font-semibold"
          >
            {data.title}
          </motion.div>
          <p className="text-white">{data.description}</p>
          <div>
            <Rating />
          </div>
          <div className="numbers flex items-start justify-center flex-col gap-2 text-white">
            <Offer />
            <h4 className="text-2xl">
              {data.discountedPrice}{" "}
              <span className="line-through align-middle text-gray-500 text-[16px] ml-7">
                {data.originalPrice}
              </span>
            </h4>
          </div>

          <div className="w-fit">
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              <CtaButton text={"Check Udemy Courses"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UdemyCourseCards;
