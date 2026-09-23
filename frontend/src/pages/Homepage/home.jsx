import Hero from '../../components/Home/Hero'
import Navbar from '../../components/navbar'
import FtProducts from '../../components/Home/ftProducts'
import Services from '../../components/Home/services'
import Training from '../../components/Home/training'
import Testimonial from '../../components/Home/testimonial'
import WhyUs from '../../components/Home/whyUs'
import CallToAction from '../../components/callToAction'
import Footer from '../../components/Footer'

function Home() {
  return (
    // A page component groups sections together.
    // As the site grows, this is where you can add Navbar, Services, Footer, and more.
    <>
      <Navbar />

      <Hero />
      <FtProducts />
      <Services />
      <Training />
      <Testimonial />
      <WhyUs />
      <CallToAction />
      <Footer />
    </>

  )
}

// Home is exported so App.jsx can render the page.
export default Home
