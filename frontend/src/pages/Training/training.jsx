import Navbar from '../../components/navbar'
import TrainingHero from '../../components/Training/Hero'
import Programs from '../../components/training/Programs';
import HowTrainingWorks from '../../components/Training/HowTrainingWorks';
import TrainingCTA from '../../components/Training/TrainingCTA';
import Footer from '../../components/Footer'
function Training() {
  return (
    <>
      <Navbar />
      <TrainingHero />
      <Programs/>
      <HowTrainingWorks />
      <TrainingCTA />
       <Footer />
    </>
  )
}

export default Training