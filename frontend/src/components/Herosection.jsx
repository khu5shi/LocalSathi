import hero from "../assets/hero.png"
const Herosection = () => {
  return (
    <div className="bg-indigo-500 flex items-center justify-between mt-4 mx-3 rounded-xl h-[70vh] py-0 px-0">
     
      <img src={hero} alt="hero" width={600} height={600} className="rounded-2xl ml-10"/>
  
     <div className="ml-25 mr-10">
        <h1 className="text-6xl mx-50 text-neutral-200 font-bold ">JOB BAZAR</h1>
        <p className="text-xl py-4 ml-55 font-semibold text-neutral-300 ">Your Trusted Local Job Platform</p>
        <p className="text-2xl py-2 font-light mx-5 text-neutral-300">JobBazar connects nearby workers and employers in a simple, fast, and reliable way. Whether you're looking for work or hiring for a task, everything happens easily, in your language, and close to home.</p>
        <p className="text-xl py-4 text-neutral-200 mx-6 font-serif">Bridging the gap between opportunity and talent locally, simply, and reliably.</p>
     </div>
    </div>
  )
}

export default Herosection
