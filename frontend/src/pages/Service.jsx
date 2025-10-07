import { useState, useEffect, useRef } from "react";
import { 
  FaBriefcase, FaUserTie, FaMapMarkerAlt, FaMicrophoneAlt, 
  FaShieldAlt, FaBell, FaChartLine, FaHandshake, FaCheckCircle,
  FaStar, FaRocket, FaClock, FaUsers, FaMobile, FaLanguage
} from "react-icons/fa";

const Service = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeService, setActiveService] = useState(0);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = {};
    
    Object.keys(sectionRefs.current).forEach(key => {
      if (sectionRefs.current[key]) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.2 }
        );
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  const mainServices = [
    {
      icon: <FaBriefcase className="text-5xl text-blue-600" />,
      title: "Job Posting",
      subtitle: "For Employers",
      description: "Post job requirements in minutes and reach thousands of verified local workers instantly.",
      features: [
        "Quick job posting in under 2 minutes",
        "Reach verified workers in your area",
        "Receive applications instantly",
        "Filter candidates by skills & location"
      ],
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100"
    },
    {
      icon: <FaUserTie className="text-5xl text-orange-600" />,
      title: "Job Search",
      subtitle: "For Workers",
      description: "Find local jobs that match your skills. Apply easily and get hired faster.",
      features: [
        "Browse jobs near your location",
        "One-tap application process",
        "Track application status in real-time",
        "Get notifications for matching jobs"
      ],
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100"
    },
    {
      icon: <FaShieldAlt className="text-5xl text-green-600" />,
      title: "Verified Profiles",
      subtitle: "Trust & Safety",
      description: "All users go through verification to ensure a safe and trustworthy platform.",
      features: [
        "ID and document verification",
        "Background checks for safety",
        "Verified badges on profiles",
        "Rating and review system"
      ],
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-100"
    }
  ];

  const additionalFeatures = [
    {
      icon: <FaMicrophoneAlt />,
      title: "Voice Search",
      description: "Search for jobs using your voice in any language. No typing needed.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location-Based",
      description: "Find jobs within your preferred radius. Work close to home.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <FaBell />,
      title: "Smart Notifications",
      description: "Get instant alerts when jobs matching your profile are posted.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaLanguage />,
      title: "Multi-Language",
      description: "Use the platform in your preferred language. 9 languages supported.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <FaChartLine />,
      title: "Analytics Dashboard",
      description: "Track your job posts performance and application status.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FaMobile />,
      title: "Mobile Friendly",
      description: "Access LocalSathi on any device, anywhere, anytime.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Sign Up",
      description: "Create your account in less than a minute. Choose worker or employer profile.",
      icon: <FaUsers />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Complete Profile",
      description: "Add your skills, experience, or job requirements. Get verified for trust.",
      icon: <FaCheckCircle />,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Connect",
      description: "Workers apply to jobs, employers review applications. Chat directly.",
      icon: <FaHandshake />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      step: "04",
      title: "Get Hired",
      description: "Finalize details, start work, and build your reputation with reviews.",
      icon: <FaStar />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "₹0",
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "Post up to 3 jobs/month",
        "Basic job search",
        "Profile verification",
        "Email support"
      ],
      highlighted: false,
      buttonText: "Get Started",
      color: "from-gray-500 to-gray-700"
    },
    {
      name: "Pro",
      price: "₹499",
      period: "/month",
      description: "For active employers",
      features: [
        "Unlimited job posts",
        "Priority in search results",
        "Advanced analytics",
        "24/7 priority support",
        "Featured profile badge",
        "Direct messaging"
      ],
      highlighted: true,
      buttonText: "Start Free Trial",
      color: "from-indigo-500 to-purple-600"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "Custom integrations",
        "Bulk hiring tools",
        "API access",
        "Custom contracts"
      ],
      highlighted: false,
      buttonText: "Contact Sales",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Workers", icon: <FaUsers /> },
    { number: "5K+", label: "Employers", icon: <FaBriefcase /> },
    { number: "25K+", label: "Jobs Completed", icon: <FaCheckCircle /> },
    { number: "4.8/5", label: "Average Rating", icon: <FaStar /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/30 to-white">
      {/* Hero Section */}
      <section className="relative pt-26 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Connect & Succeed
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Powerful tools and features designed to make local hiring simple, fast, and reliable.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl text-indigo-600 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section 
        ref={el => sectionRefs.current['services'] = el}
        className={`pt-15 transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Core <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-gray-600 text-lg">Everything you need in one powerful platform</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveService(index)}
                className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 ${
                  activeService === index ? 'ring-2 ring-indigo-500' : ''
                }`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl -z-10 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${service.iconBg} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <div className={`bg-gradient-to-r ${service.color} bg-clip-text `}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Badge */}
                  <div className={`inline-block px-3 py-1 ${service.bgColor} rounded-full text-xs font-semibold mb-4`}>
                    <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      {service.subtitle}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FaCheckCircle className={`text-lg mt-0.5 flex-shrink-0 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section 
        ref={el => sectionRefs.current['features'] = el}
        className={`py-20 bg-gradient-to-br from-gray-50 to-indigo-50/50 transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerful <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-gray-600 text-lg">Built to make your experience seamless</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl mb-4 text-white text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section 
        ref={el => sectionRefs.current['howItWorks'] = el}
        className={`py-15 transition-all duration-1000 ${isVisible.howItWorks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-gray-600 text-lg">Get started in 4 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Connecting line */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300 -translate-x-1/2 z-0"></div>
                )}

                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 z-10">
                  {/* Step number */}
                  <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg`}>
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl text-white text-2xl mb-4 mt-4`}>
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section 
        ref={el => sectionRefs.current['pricing'] = el}
        className={`py-20 bg-gradient-to-br from-indigo-50 to-purple-50 transition-all duration-1000 ${isVisible.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-gray-600 text-lg">Choose the plan that fits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 hover:scale-105 border ${
                  plan.highlighted 
                    ? 'border-indigo-500 ring-2 ring-indigo-500 shadow-2xl shadow-indigo-300/50' 
                    : 'border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-end justify-center gap-1">
                    <span className={`text-5xl font-black bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-600 text-lg mb-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className={`text-lg mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? 'text-indigo-500' : 'text-emerald-500'
                      }`} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105 ${
                  plan.highlighted
                    ? `bg-gradient-to-r ${plan.color} text-white shadow-lg hover:shadow-xl`
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 shadow-2xl shadow-indigo-300/50 overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <FaRocket className="text-3xl" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Join thousands of workers and employers who trust LocalSathi for their employment needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Sign Up Free
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:scale-105">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;