import Features from "../components/Features"
import Herosection from "../components/Herosection"
import Navbar from "../components/Navbar"
import PopularJobs from "../components/Popularjobs"
import Searchjobs from "../components/Searchjobs"
import StatsSection from "../components/StatsSection" 
import {useTheme} from "../context/ThemeContext"


const Landingpage = () => {
  const { theme }= useTheme();
  return (
    <div className={`pt-26 ${theme ==="dark" 
                          ? "bg-black"
                        : "bg-white"
                        }`}>
                          <Navbar/>
      <Herosection/>
      <Searchjobs/>
      <Features/>
      <PopularJobs/>
      <StatsSection/>
    </div>
  )
}

export default Landingpage
