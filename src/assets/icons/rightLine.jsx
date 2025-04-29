import React from 'react'
import { motion } from 'motion/react'



const pathVarient = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible:{
        opacity: 1,
        pathLength: 1,
        transition:{
            duration: 2,
            ease: "easeInOut"
        }
    }

}

const RightLine = () => {
    return (
        <div>
            <svg
            xmlns="http://www.w3.org/2000/svg" width="524" height="10" viewBox="0 0 524 10" fill="none">
                <motion.path 
                variants={pathVarient}
                d="M524 5.84999C524.511 5.84999 524.925 5.43585 524.925 4.92499C524.925 4.41412 524.511 3.99999 524 3.99999V5.84999ZM9.93335 4.92499C9.93335 2.20038 7.72461 -0.0083456 5 -0.0083456C2.27539 -0.0083456 0.0666504 2.20038 0.0666504 4.92499C0.0666504 7.64959 2.27539 9.85832 5 9.85832C7.72461 9.85832 9.93335 7.64959 9.93335 4.92499ZM524 4.92499V3.99999L5 3.99999V4.92499V5.84999L524 5.84999V4.92499Z"  fill="url(#paint0_linear_16_29)" />
                <defs>
                    <linearGradient id="paint0_linear_16_29" x1="93.5" y1="4.84165" x2="93.6971" y2="13.8631" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FE9332" />
                        <stop offset="1" stopColor="#FF7D0C" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

export default RightLine