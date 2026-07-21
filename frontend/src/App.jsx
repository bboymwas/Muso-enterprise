import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Training from './pages/Training/training'
import ProductPage from './pages/products/ProductPage'
import ContactPage from './pages/Contacts/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
