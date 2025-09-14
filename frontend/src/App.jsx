
import Home from './pages/Landingpage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
 

  return (
    <>
     <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
       <Footer/>
    </>
  )
}

export default App
