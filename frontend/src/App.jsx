
import Home from './pages/Landingpage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Service from './pages/Service';
import Contactus from './pages/Contactus';



function App() {
 

  return (
    <>
     <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Service/>}/>
        <Route path="/contact" element={<Contactus/>}/>
      </Routes>
       <Footer/>
    </>
  )
}

export default App
