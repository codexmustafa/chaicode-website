import React from 'react'
import CalendarCheck from '../../assets/icons/calendarCheck';
import Clock from '../../assets/icons/clock';
import HelpCircle from '../../assets/icons/helpCircle';
import SecondaryBtn from './secondaryBtn';
import { ArrowRight } from 'lucide-react';
import DummyProfile from '../../assets/image/dummyProfile.png'

const CourseCard = ({ data }) => {

    return (
        <div className='max-w-[500px] mb-10 h-full bg-white/10 rounded-lg flex flex-col overflow-hidden'>
            <div className='picture min-h-[30%] max-h-[40%] w-full'>
                <img src={DummyProfile} className='h-full w-full object-cover' alt="" />
            </div>
            <div className="content">
                <div className='p-3'>
                    <div className="headings flex flex-col gap-2 py-2">
                        <div className="head text-3xl font-semibold">{data.heading}</div>
                        <div className="description font-normal max-w-[100%]">{data.description}</div>
                    </div>
                    <div className="pills flex items-center gap-2">
                        {data.pills.map((pill, index) => (
                            <div key={index} className='border border-[#EFEFEF]/60 rounded-full flex items-center justify-center w-fit px-3'>
                                {pill}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="stripDetails w-full min-h-[60px] flex items-center justify-between bg-white/10 px-4">
                    <div className='flex items-center gap-4'><CalendarCheck /> {data.startDate}</div>
                    <div className='flex items-center gap-4'><Clock /> {data.duration}</div>
                    <div className='flex items-center gap-4'><HelpCircle /> {data.typeOf}</div>
                </div>
                <div className="pricing flex flex-col gap-2 p-4 py-6">
                    <div className='px-4 py-2 bg-[#EF6820]/10 text-[#EF6820] rounded-lg w-fit'>{data.discount}</div>
                    <div className='flex gap-4 items-center '>
                        <div className='text-2xl font-semibold '>{data.rate}</div>
                        <div className='line-through text-white/50'>{data.offerPrice}</div>
                    </div>
                </div>
                <div className='btns'>
                    <div className='px-4 pb-4 '><SecondaryBtn text={"View Details"} logoRight={<ArrowRight />} /></div>
                </div>
            </div>
        </div>
    )
}
export default CourseCard