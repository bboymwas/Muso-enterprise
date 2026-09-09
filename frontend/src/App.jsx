import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Homepage/home'
import Training from './pages/Training/training'
import ProductPage from './pages/products/ProductPage'
import ContactPage from './pages/Contacts/ContactPage'
import AboutPage from './pages/About/about'
import Services from './pages/service/services'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
