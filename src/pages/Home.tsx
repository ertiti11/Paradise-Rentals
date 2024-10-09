import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import BoatList from '../components/BoatList'
import Activities from '../components/Activities'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'
import Contact from '../components/Contact'
import UnderHero from '../components/UnderHero'
const Home = () => {
  return (
    <>
      <Hero />
      <UnderHero />
      <Features />
      <BoatList />
      <Activities />
      <Testimonials />
      <CallToAction />
      <Contact />
    </>
  )
}

export default Home