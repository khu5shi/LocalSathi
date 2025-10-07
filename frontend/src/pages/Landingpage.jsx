import Features from "../components/Features"
import Herosection from "../components/Herosection"
import PopularJobs from "../components/Popularjobs"
import Searchjobs from "../components/Searchjobs"
import StatsSection from "../components/StatsSection" 
import {useTheme} from "../context/ThemeContext"


const Landingpage = () => {
  const { theme }= useTheme();
  return (
    <div className={`${theme ==="dark" 
                          ? "bg-black"
                        : "bg-white"
                        }`}>
      <Herosection/>
      <Searchjobs/>
      <Features/>
      <PopularJobs/>
      <StatsSection/>
    </div>
  )
}

export default Landingpage
