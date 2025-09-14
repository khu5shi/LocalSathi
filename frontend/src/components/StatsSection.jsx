const StatsSection = () => {
  const stats = [
    { number: "10,000+", label: "Active Workers" },
    { number: "5,000+", label: "Employers" },
    { number: "25,000+", label: "Successful Jobs" },
  ];

  return (
    <section className="bg-gradient-to-r from-green-50 to-emerald-100 py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
          >
            <h2 className="text-4xl font-extrabold text-green-700">
              {item.number}
            </h2>
            <p className="text-lg text-gray-600 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
