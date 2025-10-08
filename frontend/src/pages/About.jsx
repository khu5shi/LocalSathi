import { useState, useEffect, useRef } from "react";
import { FaRocket, FaHeart, FaUsers, FaLightbulb, FaHandshake, FaShieldAlt, FaGlobe, FaStar, FaQuoteLeft } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const About = () => {
   const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState({});
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

  const values = [
    {
      icon: <FaHeart className="text-4xl text-red-500" />,
      title: "Empathy First",
      description: "We understand the challenges faced by workers and employers in local communities.",
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-rose-50"
    },
    {
      icon: <FaHandshake className="text-4xl text-blue-500" />,
      title: "Trust & Transparency",
      description: "Building reliable connections through verified profiles and honest interactions.",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <FaLightbulb className="text-4xl text-yellow-500" />,
      title: "Innovation",
      description: "Leveraging technology to solve real problems for everyday people.",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: <FaGlobe className="text-4xl text-green-500" />,
      title: "Inclusivity",
      description: "Breaking language barriers with multilingual support for all communities.",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50"
    }
  ];

  const team = [
    {
      name: "Khushi Agrawal",
      role: "Co-Founder & CEO",
      bio: "Former tech entrepreneur passionate about grassroots employment solutions.",
      image: "👩‍💼"
    },
    {
      name: "Anubhav Srivastava",
      role: "Co-Founder & CTO",
      bio: "Software architect dedicated to building accessible technology platforms.",
      image: "👨‍💻"
    },
    {
      name: "Anup Raj",
      role: "Head of Community",
      bio: "Community organizer with 10+ years empowering local workers.",
      image: "👨‍💻"
    },
    {
      name: "Anurag Singh",
      role: "Product Lead",
      bio: "UX expert focused on creating intuitive experiences for all users.",
      image: "👨‍🎨"
    }
  ];

  const milestones = [
    { year: "2025", event: "LocalSathi Founded", description: "Started with a vision to connect local communities" },
    { year: "2025 Q2", event: "10,000+ Users", description: "Reached our first major milestone" },
    { year: "2025 Q3", event: "Multi-Language Launch", description: "Expanded to 9 Indian languages" },
    { year: "2025 Q4", event: "25,000+ Jobs", description: "Successfully facilitated thousands of job connections" }
  ];

  const testimonials = [
    {
      name: "Ramesh Yadav",
      role: "Construction Worker",
      text: "LocalSathi helped me find consistent work near my home. I can now support my family better.",
      rating: 5
    },
    {
      name: "Meera Reddy",
      role: "Small Business Owner",
      text: "Finding reliable workers was always difficult. This platform made it so easy and fast!",
      rating: 5
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b pt-25
                    ${theme === 'dark' 
                    ? " from-black via-indigo-800/30 to-black"
                    :" from-white via-indigo-50/30 to-white "}`}>
      {/* Hero Section */}
      <section className="relative  overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className={`text-5xl md:text-7xl font-black  mb-6
                       ${theme === "dark"
                        ?"text-gray-100"
                        :"text-gray-900"}`}>
            Empowering{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Local Communities
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed
                           ${theme === "dark"
                           ?"text-gray-400 "
                          :"text-gray-600 "}`}>
            We're bridging the gap between opportunity and talent, one local connection at a time.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        ref={el => sectionRefs.current['mission'] = el}
        className={`py-20 transition-all duration-1000 ${isVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl shadow-indigo-300/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <FaRocket className="text-3xl text-yellow-300" />
                </div>
                <h2 className="text-4xl font-bold">Our Mission</h2>
              </div>
              
              <p className="text-xl md:text-2xl leading-relaxed mb-8 text-white/95">
                To create a trusted, accessible platform that connects local workers with employers, 
                breaking down barriers of language, location, and opportunity. We believe everyone 
                deserves dignified work and every business deserves reliable talent.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-black mb-2">10K+</div>
                  <div className="text-white/90">Active Workers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-black mb-2">5K+</div>
                  <div className="text-white/90">Employers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-black mb-2">10+</div>
                  <div className="text-white/90">Languages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={el => sectionRefs.current['values'] = el}
        className={`py-7 transition-all duration-1000 bg-gradient-to-b from-indigo-100 to-purple-100 ${isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${value.bgColor} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <div className={`bg-gradient-to-r ${value.color} bg-clip-text `}>
                    {value.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section 
        ref={el => sectionRefs.current['timeline'] = el}
        className={`py-20 bg-gradient-to-br from-gray-50 to-indigo-50/50 transition-all duration-1000 ${isVisible.timeline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto px-6">
  <div className="text-center mb-20">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
      Our{" "}
      <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Journey
      </span>
    </h2>
    <p className="text-gray-500 text-lg">
      Milestones that shaped LocalSathi
    </p>
  </div>

  <div className="relative">
    {/* Timeline line */}
    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 via-purple-500 to-pink-500 hidden md:block rounded-full"></div>

    {milestones.map((milestone, index) => (
      <div
        key={index}
        className={`relative mb-16 md:w-1/2 ${
          index % 2 === 0
            ? "md:pr-12 md:text-right"
            : "md:pl-12 md:ml-auto md:text-left"
        }`}
      >
        {/* Card */}
        <div className="relative bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] p-6">
          {/* Year badge */}
          <div className="inline-block mb-3 px-4 py-1 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md">
            {milestone.year}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {milestone.event}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {milestone.description}
          </p>
        </div>

        {/* Timeline dot */}
        <div className="absolute top-10 left-1/2 w-6 h-6 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full -translate-x-1/2 border-4 border-white shadow-md hidden md:flex">
          <span className="w-2 h-2 bg-white rounded-full"></span>
        </div>
      </div>
    ))}
  </div>
</div>

      </section>

      {/* Team Section */}
      <section 
        ref={el => sectionRefs.current['team'] = el}
        className={`py-20 transition-all duration-1000 ${isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-gray-600 text-lg">The people making it all possible</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 text-center"
              >
                <div className="text-7xl mb-4 group-hover:scale-110 transition-transform duration-500">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-sm font-semibold text-indigo-600 mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        ref={el => sectionRefs.current['testimonials'] = el}
        className={`py-20 bg-gradient-to-br from-indigo-50 to-purple-50 transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What People <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Say</span>
            </h2>
            <p className="text-gray-600 text-lg">Real stories from our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <FaQuoteLeft className="text-4xl text-indigo-300 mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-12 md:p-16 shadow-2xl shadow-indigo-300/50">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Whether you're looking for work or hiring talent, LocalSathi is here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Find Work
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:scale-105">
                Post a Job
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;