import { useState } from 'react'
import NavBar from './components/header/navBar'
import HeroSectionAnimate from './components/heroSectionAnimate'
import Marquee from './components/marqueeComponent'
import CohortsSection from './components/cohortsSection'
import BenefitsSection from './components/benefitsSection'
import Stripe from './components/ui/stripe'
import DiscordSection from './components/discordSection'
import TweetCards from './components/tweets/TweetCards'
import ThousandDevelopers from './components/thousandDevelopers'


function App() {

  return (
    <>
      <div className=''>
        <NavBar />
        <HeroSectionAnimate/>
        <TweetCards/>
        <Marquee/>
        <CohortsSection/>
        <ThousandDevelopers/>
        <BenefitsSection/>
        <Stripe/>
        <DiscordSection/>
      </div>
    </>
  )
}

export default App
