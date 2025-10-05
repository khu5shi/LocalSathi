import Features from "../components/Features"
import Herosection from "../components/Herosection"
import PopularJobs from "../components/Popularjobs"
import Searchjobs from "../components/Searchjobs"
import StatsSection from "../components/StatsSection"


const Landingpage = () => {
  return (
    <div>
      <Herosection/>
      <Searchjobs/>
      <Features/>
      <PopularJobs/>
      <StatsSection/>
    </div>
  )
}

export default Landingpage
