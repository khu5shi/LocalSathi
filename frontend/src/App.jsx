
import Home from './pages/Landingpage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Service from './pages/Service';
import Contactus from './pages/Contactus';
import WorkerDashboard from './pages/WorkerDashboard/WorkerDashboard';
import Landingpage from './pages/Landingpage';
import EmployerDashboard from './pages/EmployerDashboard/EmployerDashboard';



function App() {
 

  return (
    <>
     
    
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Service/>}/>
        <Route path="/contact" element={<Contactus/>}/>
        <Route path="/workerdashboard" element={<WorkerDashboard/>}/>
        <Route path="/employerdashboard" element={<EmployerDashboard/>}/>
      </Routes>
       <Footer/>
    </>
  )
}

export default App
