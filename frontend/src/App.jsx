import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Homepage/home'
import Training from './pages/Training/training'
import ProductPage from './pages/products/ProductPage'
import ContactPage from './pages/Contacts/ContactPage'
import AboutPage from './pages/About/about'
import ServicePage from './pages/service/service'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />

        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:productId" element={<ProductPage />} />

        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App