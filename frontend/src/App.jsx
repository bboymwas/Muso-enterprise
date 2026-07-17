import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import ProductPage from './pages/products/ProductPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/training" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
