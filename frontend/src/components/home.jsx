import Hero from './Hero'
import Navbar from './navbar'
import FtProducts from './ftProducts'
import Services from './services'
import Founder from './Founder'
import Training from './training'
import Testimonial from './testimonial'
import WhyUs from './whyUs'
import CallToAction from './callToAction'
import Footer from './Footer'

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
