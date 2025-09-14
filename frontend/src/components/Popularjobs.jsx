import { FaHardHat, FaTractor, FaHome, FaStore, FaTruck, FaUtensils, FaBroom, FaTools } from "react-icons/fa";

const Popularjobs = () => {
  const jobs = [
    { title: "Construction Work", icon: <FaHardHat className="text-gray-500" size={28} /> },
    { title: "Farming", icon: <FaTractor className="text-blue-800" size={28} /> },
    { title: "Household Work", icon: <FaHome className="text-yellow-600" size={28} /> },
    { title: "Shop Assistant", icon: <FaStore className="text-cyan-700" size={28} /> },
    { title: "Driver", icon: <FaTruck className="text-emerald-600" size={28} /> },
    { title: "Cook", icon: <FaUtensils className="text-rose-500" size={28} /> },
    { title: "Cleaning", icon: <FaBroom className="text-amber-900" size={28} /> },
    { title: "Masonry Work", icon: <FaTools className="text-indigo-900" size={28} /> },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 relative inline-block">
          Popular Job Categories
          <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-orange-400 rounded transform -translate-x-1/2"></span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center 
              border border-transparent hover:border-orange-400 transition-colors duration-300 
              hover:shadow-lg cursor-pointer"
            >
              <div className=" mb-3">{job.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700">{job.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popularjobs;
