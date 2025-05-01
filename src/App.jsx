import { useState, useRef, useEffect } from 'react'
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
import { ArrowUp } from 'lucide-react'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const heroSectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsVisible(true)
      }
      else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  const handleOnclick = () => {
    if (heroSectionRef?.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <>
      <div className='flex w-full relative flex-col'>
        {isVisible && (

          <div ref={heroSectionRef} onClick={handleOnclick} className="fixed bottom-10 right-10 z-[999] h-fit w-fit p-4 flex items-center justify-center rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition-all duration-300 cursor-pointer">
            <ArrowUp color="white" />
          </div>
        )}
        <NavBar />
        <HeroSectionAnimate ref={heroSectionRef}  />
        <TweetCards />
        <Stripe/>
        <Marquee />
        <Stripe/>
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
      </div>
    </>
  )
}

export default App
