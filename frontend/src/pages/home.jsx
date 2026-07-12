import Hero from '../components/Hero'
import Navbar from '../components/navbar'
import FtProducts from '../components/ftProducts'
import Services from '../components/services'
import Founder from '../components/Founder'
import Training from '../components/training'
import Testimonial from '../components/testimonial'
import WhyUs from '../components/whyUs'
import CallToAction from '../components/callToAction'
import Footer from '../components/Footer'

function Home() {
  return (
    // A page component groups sections together.
    // As the site grows, this is where you can add Navbar, Services, Footer, and more.
    <>
      <Navbar />

      <Hero />
      <FtProducts />
      <Services />
      <Founder />
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
