import { useState } from 'react'
import NavBar from './components/header/navBar'
import HeroSectionAnimate from './components/heroSectionAnimate'
import Marquee from './components/marqueeComponent'

function App() {

  return (
    <>
      <div className=''>
        <NavBar />
        <HeroSectionAnimate/> 
        <Marquee/>
       
      </div>
    </>
  )
}

export default App
