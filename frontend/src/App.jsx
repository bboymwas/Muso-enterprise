import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'

function App() {
  return (
    // App is the top-level component for the React app.
    // Keeping it focused on the page component makes the project easier to scale.
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/training" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
