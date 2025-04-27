import React from 'react'
import img4 from '../../../public/image/Image-4.png'
const Card = ({props}) => {
  return (
    <div className='border-b-fuchsia-500 p-4 m-2 max-w-md bg-gray-700 text-white rounded-xl'> 
      <div className="flex">
      <img src="/image/Image-4.png" height={100} width={100} alt="" className='rounded-full w-14 mr-5'/>
<div className="flex flex-col">

        <h3 className='font-semibold'>Lorem, ipsum dolor.</h3>
        <h5 className='font-light'>@Loremipsum</h5>
</div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vitae incidunt soluta reiciendis molestiae tenetur!</p>
    </div>
  )
}

export default Card
