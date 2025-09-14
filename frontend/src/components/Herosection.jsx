import hero from "../assets/hero.png";

const Herosection = () => {
  return (
    <div
      className="relative bg-indigo-500 mt-4 mx-3 rounded-xl h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with blur/dark overlay */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="hero"
          className="w-full h-full object-cover rounded-xl filter blur-sm brightness-75"
        />
        <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center px-6">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg">LocalSathi</h1>
        <p className="text-xl py-4 font-semibold text-gray-200">
          Your Trusted Local Job Platform
        </p>
        <p className="text-2xl py-2 font-light text-gray-300">
          LocalSathi connects nearby workers and employers in a simple, fast, and reliable way. Whether you're looking for work or hiring for a task, everything happens easily, in your language, and close to home.
        </p>
        <p className="text-lg py-4 text-gray-200 italic">
          Bridging the gap between opportunity and talent locally, simply, and reliably.
        </p>
      </div>
    </div>
  );
};

export default Herosection;
