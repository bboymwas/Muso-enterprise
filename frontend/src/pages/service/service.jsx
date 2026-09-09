import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'
import ServiceHero from '../../components/service/serviceHero'
import Services from '../../components/service/services'
import WhyUs from '../../components/service/whyUs'
import ServiceCTA from '../../components/service/serviceCTA'

function ServicePage() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero />
        <Services />
        <WhyUs />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  )
}

export default ServicePage
