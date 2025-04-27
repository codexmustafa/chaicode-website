import React from 'react'
import Card from '../card/Card'
const TweetCards = ({props}) => {
  return (
    <div>
      <div className="text-center">
      <h4 className='text-orange-500'>Tweet Love</h4>
      <h2 className=''>Love that we get from our community</h2>
      </div>
      <Card/>
    </div>
  )
}

export default TweetCards
