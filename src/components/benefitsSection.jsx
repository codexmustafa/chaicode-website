import React from 'react'
import BenefitsCards from './ui/benefitsCards'
import Image0 from '../assets/image/Image.png'
import Image1 from '../assets/image/Image-1.png'
import Image3 from '../assets/image/Image-3.png'
import Image2 from '../assets/image/Image-2.png'
import Image4 from '../assets/image/Image-4.png'

const BenefitsSection = () => {
  const data = [
    {
      icon: "professional",
      heading: "Taught by Professionals",
      description: "Our cohorts are being taught by top industry experts and educators",
      code: "class teacher extend Professional { }"
    },
    {
      icon: "bounties",
      heading: "Bounties",
      description: "Earn rewards, from Cash to MacBook. Keeps you motivated to work hard",
      code: "class teacher extend Professional { }"
    },
    {
      icon: "coding_hostels",
      heading: "Coding hostels",
      description: "There is nothing like late night discussion with fellow learners and solving bugs",
      code: "class teacher extend Professional { }"
    },
    {
      icon: "peer_review",
      heading: "Peer Code Reviews",
      description: "With Our internal tools like Masterji, every code assignment gets feedback to improve your code",
      code: "class teacher extend Professional { }"
    },
    {
      icon: "leet_lab",
      heading: "Leet Lab",
      description: "Our in-house built LeetCode style platform that helps you to understand foundation of programming language",
      code: "class teacher extend Professional { }"
    },
    {
      icon: "revision",
      heading: "Revision classes",
      description: "We have so many peer classes by fellow learners that you get so many chances to learn that topic",
      code: "class teacher extend Professional { }"
    }
  ];

  return (
    <div className='w-full overflow-visible h-full lg:gap-10 py-10 bg-[#182230] flex flex-col pt-20 items-center justify-center text-white'>
      <div className="headings flex items-center justify-center gap-4 flex-col">
        <div className="text text-4xl font-semibold ">
          Key <span className='text-[#EF6820]'>Benefits</span> of Cohort
        </div>
        <div className='sidehead text-center py-4'>Orrupti aut temporibus assumenda atque ab, accusamus sit, molestiae veniam laboriosam pariatur.</div>
      </div>
      <div className="flex h-full w-full flex-wrap gap-4 px-10 items-center justify-center">
        {data.map((item, index) => (
          <BenefitsCards key={index} data={item} />
        ))}
      </div>
      <div className="alumni w-full lg:px-20 px-2 flex items-center py-20  justify-between overflow-hidden flex-col lg:flex-row">
        <div className="left h-full w-[50%]">
          <div className="flex flex-col gap-6">
            <div className="flex justify-center items-end gap-6">
              <img src={Image0} alt="img1" className="w-[160px] h-[180px] object-cover rounded-sm" />
              <img src={Image1} alt="img2" className="w-[200px] h-[320px] object-cover rounded-sm" />
            </div>
            <div className="flex justify-center gap-6">
              <img src={Image3} alt="img3" className="w-[140px] h-[180px] object-cover rounded-sm" />
              <img src={Image4} alt="img4" className="w-[200px] h-[300px] object-cover rounded-sm" />
              <img src={Image2} alt="img5" className="w-[140px] h-[180px] object-cover rounded-sm" />
            </div>
          </div>
        </div>
        <div className="right w-[50%]">
          <div className="left text-4xl lg:text-6xl xl:text-8xl tracking-wide leading-[50px] lg:leading-[100px] w-full  lg:max-w-[700px] xl:max-w-[800px] text-white/90 font-semibold">
            Alumni <span className='text-[#EF6820]'>Network</span> and job listings
          </div>
          <div className="description py-10 max-w-[600px]">
            The alumni Network that you always wished for in your college. We have a dedicated platform where students get to know each other, do projects, make agencies and join Hackathons.
            Our HR team also post regular job updates that you can apply directly whenever you are ready
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitsSection