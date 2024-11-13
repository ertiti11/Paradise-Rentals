import Hero from '../components/Hero'
import ImageSlider from '../components/ImageSlider'
import ImageScroll from '../components/ImageScroll'
import Numbers from '../components/Numbers'
import CallToAction from '../components/CallToAction'
import Contact from '../pages/Contact'
import Imagen3d from '../components/Imagen3d'

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
      <Imagen3d />
      <CallToAction />
      <Contact/> 

    </>
  )
}

export default Home