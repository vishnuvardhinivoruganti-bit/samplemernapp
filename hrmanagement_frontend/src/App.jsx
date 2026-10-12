import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import{Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}


export default App
