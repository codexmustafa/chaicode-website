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
import UdemyCourses from './components/udemyCourses'
import LearnOnGo from './components/learnOnGo'

import WhyChaiCode from './components/whyChaiCode'
import Footer from './components/footer/footer'
import ErrorPage from './components/errorPage'
import LogoClouds from './components/logoCloud' 


function App() {

  return (
    <>
      <div className=''>
        <NavBar />
        <HeroSectionAnimate />
        <TweetCards />
        <Marquee />
        <section id='cohorts'>
          <CohortsSection />
        </section>
        <ThousandDevelopers />
        <BenefitsSection />
        <Stripe />
        <section id="docs">
          <WhyChaiCode />
        </section>
        <section id="udemy">
          <UdemyCourses /> 
        </section>
        <LogoClouds />
        <section id="reviews">
          <DiscordSection /> 
        </section>
        <LearnOnGo />
        <Footer />
        {/* <ErrorPage/> */}
      </div>
    </>
  )
}

export default App
