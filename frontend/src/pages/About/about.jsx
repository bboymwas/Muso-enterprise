import Navbar from '../../components/navbar'
import AboutHero from '../../components/About/AboutHero'
import OurStory from '../../components/About/OurStory'
import AboutCTA from '../../components/About/AboutCTA'
import WhyUs from '../../components/About/whyUs'
import Footer from '../../components/Footer';

function About() {
  return (
    <>
      <Navbar />
        <AboutHero />
        <OurStory />
        <WhyUs />
        <AboutCTA />
       <Footer />
    </>
  )
}
export default About;