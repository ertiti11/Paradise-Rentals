import Hero from '../components/Hero'
import ImageSlider from '../components/ImageSlider'
import ImageScroll from '../components/ImageScroll'
import Numbers from '../components/Numbers'
import Features from '../components/Features'
import BoatList from '../components/BoatList'
import Activities from '../components/Activities'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <ImageSlider />
      <ImageScroll />
      <Numbers /> 
      {/* <Features />
      <BoatList />
      <Activities />
      <Testimonials />
      { <CallToAction */ }
      <CallToAction />
      <Contact/> 

    </>
  )
}

export default Home