import { FaCheckCircle, FaMicrophoneAlt, FaMapMarkerAlt, FaShieldAlt, FaBolt } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaCheckCircle className="text-green-600 text-4xl" />,
      title: "Verified Profiles",
      desc: "All workers and employers are verified for trust and safety.",
    },
    {
      icon: <FaMapMarkerAlt className="text-orange-600 text-4xl" />,
      title: "Local Jobs",
      desc: "Quickly find jobs available near your location.",
    },
    {
      icon: <FaMicrophoneAlt className="text-blue-600 text-4xl" />,
      title: "Voice Search",
      desc: "Easily search for jobs by speaking in any language.",
    },
    {
      icon: <FaShieldAlt className="text-green-800 text-4xl" />,
      title: "Trusted Platform",
      desc: "Safe and reliable system for workers and employers.",
    },
    {
      icon: <FaBolt className="text-yellow-600 text-4xl" />,
      title: "Instant Updates",
      desc: "Get real-time job notifications and updates instantly.",
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Why Choose <span className="text-indigo-600">Our Platform?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg border border-transparent hover:border-orange-400 hover:border-[1px] p-6 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
