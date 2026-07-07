import Hero from './Hero'
import Navbar from './navbar'

function Home() {
  return (
    // A page component groups sections together.
    // As the site grows, this is where you can add Navbar, Services, Footer, and more.
    <>
      <Navbar />

      <Hero />
    </>
  )
}

// Home is exported so App.jsx can render the page.
export default Home
