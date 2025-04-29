import React from 'react'
import Youtube from '../../public/icons/youtube'
import Linkedin from '../../public/icons/linkedin'
import Facebook from '../../public/icons/facebook'

const WhyChaiCode = () => {
    const leftContent = [
        {
            "title": "Comprehensive Curriculum",
            "description": "Our cohorts are experience to have.\nWhen you learn from real world experienced folks, it's totally a game changer.\nThese small talks can happen only in live classes."
        },
        {
            "title": "You Finish IT",
            "description": "Our cohorts are experience to have.\nWhen you learn from real world experienced folks, it's totally a game changer.\nThese small talks can happen only in live classes."
        },
        {
            "title": "Industry Guests",
            "description": "Our cohorts are experience to have.\nWhen you learn from real world experienced folks, it's totally a game changer.\nThese small talks can happen only in live classes."
        }

    ]

    const rightContents = [
        {
            "title": "Code and Chill",
            "description": "Our cohorts are experience to have.\nWhen you learn from real world experienced folks, it's totally a game changer.\nThese small talks can happen only in live classes."
        },
        {
            "title": "Improve Communication",
            "description": "Our cohorts are experience to have.\nWhen you learn from real world experienced folks, it's totally a game changer.\nThese small talks can happen only in live classes."
        },
        {
            "title": "Bounties",
            "description": "Our cohorts are experience to have.\nWhen you learn from real world experienced folks, it's totally a game changer.\nThese small talks can happen only in live classes."
        }
    ]



    return (
        <div className='w-full text-white bg-[#182230]  lg:px-20 flex flex-col gap-20 items-center lg:py-20 py-10  justify-between overflow-hidden  lg:flex-col'>
            <div className="headings flex flex-col items-center justify-center gap-4">
                <div className='text-4xl font-semibold'>Why <span className='text-[#EF6820]'>Chai Code ?</span></div>
                <div className='subhead tracking-wide text-center text-lg'>Chai code exist because we love tech and teaching.</div>
            </div>
            {/* Content Cards */}
            <div className="content px-4 gap-20 flex flex-col lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:px-10 lg:h-full lg:w-full ">
                <div className='leftSide flex flex-col gap-6 '>
                    {
                        leftContent.map((text, index) => (
                            <div key={index} className="card px-4 py-2 flex min-h-[200px] justify-center flex-col gap-2 border border-white/20 bg-white/10 rounded-lg">
                                <div className='text-[#EF6820] font-semibold text-xl'>{text.title}</div>
                                <div className="desc max-w-[300px]">{text.description}</div>
                            </div>
                        ))
                    }
                </div>
                <div className="middle lg:min-h-[700px] lg:flex lg:justify-between lg:items-center lg:flex-col rounded-lg bg-white/10  overflow-hidden">
                    <div className="image w-full">
                        <img src="/image/hiteshSir.png" className='w-full h-full object-cover' alt="Hitesh Sir Picture" />
                    </div>
                    <div>
                        <div className=' flex gap-2 flex-col px-4 py-4'>
                            <div className="head text-[#EF6820] text-3xl font-medium">Hitesh Chaudry</div>
                            <div className='max-w-[500px]'>Retired from corporate and full time YouTuber, x founder of LCO (acquired), x CTO, Sr. Director at PW. 2 YT channels (950k & 470k), stepped into 43 countries.</div>
                        </div>
                        <div className=' flex gap-2 flex-col px-4 py-4'>
                            <div className="head text-[#EF6820] text-3xl font-medium">Approach</div>
                            <div className='max-w-[500px]'>Project based courses with peer learning and bouties with many activities</div>
                        </div>
                    </div>
                    <div className="socials w-full flex items-center justify-center gap-8 py-8 bg-white">
                        <a href='https://www.youtube.com/@chaiaurcode' target='_blank' alt="Youtube"><Youtube /></a>
                        {/* <a href='' alt="Facebook"><Facebook /></a> */}
                        <a href='https://www.linkedin.com/in/hiteshchoudhary/?originalSubdomain=in' alt="Linkedin"><Linkedin /></a>
                    </div>
                </div>
                <div className="right flex flex-col gap-6">
                    {
                        rightContents.map((text, index) => (
                            <div key={index} className="card px-4 py-2 min-h-[200px] justify-center  flex flex-col gap-4 border border-white/20 bg-white/10 rounded-lg">
                                <div className='text-[#EF6820] font-semibold text-xl'>{text.title}</div>
                                <div className="desc max-w-[300px]">{text.description}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default WhyChaiCode