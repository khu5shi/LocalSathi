import hero from "../assets/hero.png"
const Herosection = () => {
  return (
    <div className="bg-indigo-500 flex items-center justify-between mt-5 w-full h-[70vh]">
     
      <img src={hero} alt="hero" width={600} height={600} className="rounded-2xl ml-10"/>
  
     <div className="py-4 ml-25 mr-10">
        <h1 className="text-6xl px-50 mt-15 text-neutral-200 font-bold">JOB BAZAR</h1>
        <p className="text-3xl py-4 ">Your Trusted Local Job Platform</p>
        <p className="text-2xl py-4">JobBazar connects nearby workers and employers in a simple, fast, and reliable way. Whether you're looking for work or hiring for a task, everything happens easily, in your language, and close to home.</p>
        <p className="text-2xl py-4">Bridging the gap between opportunity and talent locally, simply, and reliably.</p>
     </div>
    </div>
  )
}

export default Herosection
