import React from 'react'
import DummyProfile from '../assets/image/dummyProfile.png'

const thousandDevelopers = () => {
  const data = [
    {
      message: "Tailus has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences. Tailus is a game-changer for modern web development",
      name: "Shekinah Tshiokufila",
      designation: "Software Engineer",
      image: "../assets/image/dummyProfile.png"
    },
    {
      message: "Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.",
      name: "Jonathan Yombo",
      designation: "Software Engineer",
      image: "../assets/image/dummyProfile.png"

    },
    {
      message: "Great work on tailfolio template. This is one of the best personal website that I have seen so far!",
      name: "Yucel Faruksahan",
      designation: "Creator, Tailkits",
      image: "../assets/image/dummyProfile.png"

    },
    {
      message: "Great work on tailfolio template. This is one of the best personal website that I have seen so far!",
      name: "Rodrigo Aguilar",
      designation: "Creator, TailwindAwesome",
      image: "../assets/image/dummyProfile.png"

    },
    {
      message: "Great work on tailfolio template. This is one of the best personal website that I have seen so far!",
      name: "Rodrigo Aguilar",
      designation: "Creator, TailwindAwesome",
      image: "../assets/image/dummyProfile.png"

    },
    {
      message: "Great work on tailfolio template. This is one of the best personal website that I have seen so far!",
      name: "Rodrigo Aguilar",
      designation: "Creator, TailwindAwesome",
      image: "../assets/image/dummyProfile.png"

    },
  ]

  return (
    <div className='bg-[#101828]  text-center flex flex-col gap-10 p-10'>
      <div>
        <div className='text-white font-medium text-4xl py-4'>What Our <span className='text-[#EF6820]' >Student</span> Says</div>
        <div className='text-white '>Join thousands of students who have transformed their careers with our comprehensive courses</div>
      </div>
      <div className="flex flex-col lg:flex lg:flex-row lg:items-center lg:justify-between lg:flex-wrap gap-4 text-white py-2">
        {data.map((testimonial, index) => (
          <div key={index} className="leftblock bg-white/10 lg:flex lg:flex-col lg:flex-between w-fit border-1 rounded-2xl p-4">
            <p className='text-left max-w-[400px]'>
              {testimonial.message}
            </p>
            <div className='flex gap-3 items-center pt-4 pb-3'>
              <div className='w-10 h-10 rounded-full border border-white/10'>
                <img src={DummyProfile} className='object-cover h-full w-full rounded-full' alt="" />
              </div>
              <div>
                <h6 className='text-gray-400  italic'>{testimonial.name}</h6>
                <p className='text-gray-600 '>{testimonial.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default thousandDevelopers
