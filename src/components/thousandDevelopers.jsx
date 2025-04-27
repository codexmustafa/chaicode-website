import React from 'react'
// import Nike from '../../public/icons/nike.js'
import { SiNike } from "react-icons/si";
const thousandDevelopers = () => {
  return (
    <div className='bg-black text-center p-20'>
      <h2 className='text-white text-4xl py-4'>Build by makers, loved by <br/> thousand developers</h2>
      <p className='text-white'>Gemini is evolving to be more  than just  the models. It supports an entire to the <br /> API's and platforms  helping developers and business innovate.</p>
      <div className="grid grid-flow-col  grid-rows-2 gap-4 text-white py-2">
        <div className="leftblock row-span-3 col-span-5 border-1 rounded-2xl p-4 w-2xl">    
            {/* <img src={{<SiNike />}} alt="" /> */}
            <SiNike className='text-9xl'/>
            <p className='text-left'>Tailus has transformed the way I develop web applications. Their extensive collection of UI components, block, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences. Tailus is game changes for modren web development</p>
            <div className='flex gap-3 items-center pt-4 pb-3'>
                <div>
                <span className='bg-gray-500 rounded-full p-2 align-middle'>ST</span>
                </div>
                <div>
                    <h6 className='text-gray-400 italic'>Shekinah Tshiukoufa</h6>
                    <p className='text-gray-600'>Software Engineer</p>
                </div>
            </div>
        </div>
        <div className="ryt-top col-span-4 text-left border-1 rounded-2xl p-4"><p>I absolutely love Tailus! The component blocks are beautifully designed and easy to use, which makes creating a great-looking website a breeze</p>
        <div className='flex gap-3 items-center pt-4 pb-3'>
                <div>
                <span className='bg-gray-500 rounded-full p-2 align-middle'>ST</span>
                </div>
                <div>
                <h6 className='text-gray-400 italic'>Shekinah Tshiukoufa</h6>
                <p className='text-gray-600'>Software Engineer</p>
                </div>
            </div>
        </div>
        <div className="col-span-2 row-span-2 text-left border-1 rounded-2xl p-4"><p>Great work on tailfolio template. This is one of the best personal website that I have seen so far</p>
        <div className='flex gap-3 items-center pt-4 pb-3'>
                <div>
                <span className='bg-gray-500 rounded-full p-2 align-middle'>ST</span>
                </div>
                <div>
                <h6 className='text-gray-400 italic'>Shekinah Tshiukoufa</h6>
                <p className='text-gray-600'>Software Engineer</p>
                </div>
            </div>
        </div>
        <div className="col-span-2 row-span-2 text-left border-1 rounded-2xl p-4"><p>With no experience in webdesign I just redesigned my entire website in a few minutes with tailwindcss thanks to Tailus</p>
        <div className='flex gap-3 items-center pt-4 pb-3'>
                <div>
                <span className='bg-gray-500 rounded-full p-2 align-middle'>ST</span>
                </div>
                <div>
                <h6 className='text-gray-400 italic'>Shekinah Tshiukoufa</h6>
                <p className='text-gray-600'>Software Engineer</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default thousandDevelopers
