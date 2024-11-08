import Hero from '../components/Hero'
import ImageSlider from '../components/ImageSlider'
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
      <Numbers /> 
      {/* <Features />
      <BoatList />
      <Activities />
      <Testimonials />
      <CallToAction />
      <Contact/> */}
    </>
  )
}

export default Home