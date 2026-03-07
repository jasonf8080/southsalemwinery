import { BrowserRouter, Routes, Route } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { Home, About, Products } from './pages'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/shop" element={<Products/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App