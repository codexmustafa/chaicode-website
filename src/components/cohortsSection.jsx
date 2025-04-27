import React from 'react'
import CourseCard from './ui/courseCard'
import CtaButton from './ui/ctaButton'

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
            <div className="flex w-full flex-wrap gap-4 px-10 h-full justify-center">
                {data.map((item, index) => (
                    <CourseCard key={index} data={item} />
                ))}
            </div>
        </div>
    )
}

export default CohortsSection