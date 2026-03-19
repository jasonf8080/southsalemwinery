import { BrowserRouter, Routes, Route } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { Home, About, Products } from './pages'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useGlobalContext } from './context'
import Menu from './components/Menu'


gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const {showMenu} = useGlobalContext();
  return (
    <BrowserRouter>
      <Navbar />
      {showMenu && <Menu/>}
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