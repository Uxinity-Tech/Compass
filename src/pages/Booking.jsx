import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock, Check, Star, ArrowRight, Shield, Zap } from "lucide-react";

const Booking = () => {
  useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
      }, []);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    fromLocation: "",
    toLocation: "",
    travelDate: "",
    serviceType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.fullName}! Check your email.`);
  };

  const services = [
    { name: "Flight", icon: "Plane", desc: "Executive class, lounge access", price: "₹8,999+", color: "blue" },
    { name: "Bus", icon: "Bus", desc: "Luxury AC, WiFi, recliners", price: "₹1,499+", color: "emerald" },
    { name: "Train", icon: "Train", desc: "1st AC, meals included", price: "₹2,799+", color: "purple" },
    { name: "Tour Package", icon: "Globe", desc: "Curated 3-day trips", price: "₹19,999+", color: "indigo" },
  ];

  const testimonials = [
    { name: "Priya Sharma", role: "CEO, TechFlow", text: "TravelEase saved us 18% on Q3 travel. Beta access was flawless.", rating: 5 },
    { name: "Arjun Mehta", role: "HR, Nexlify", text: "Onboarding 50+ employees was a breeze. Real-time tracking is a game-changer.", rating: 5 },
  ];

  return (
    <div className="font-inter bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900 min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-semibold mb-6">
              <Zap className="w-4 h-4 mr-2" />
              LAUNCHED TODAY
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Book Your Corporate Trip
            </h1>
            <p className="mt-3 text-lg sm:text-xl max-w-3xl mx-auto">
              <span className="block text-blue-100">October 21, 2025, 10:20 AM IST</span>
              <span className="block mt-2">Exclusive launch rates • 24/7 support • 100% secure</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="w-5 h-5" />
              <span className="text-sm">ISO 27001 Ready</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Instant Confirmation</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="w-5 h-5" />
              <span className="text-sm">100+ Beta Users</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Service Preview Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className={`w-12 h-12 rounded-lg bg-${service.color}-600 flex items-center justify-center text-white mb-4`}>
                {service.icon === "Plane" && <PlaneIcon />}
                {service.icon === "Bus" && <BusIcon />}
                {service.icon === "Train" && <TrainIcon />}
                {service.icon === "Globe" && <GlobeIcon />}
              </div>
              <h3 className="font-bold text-lg text-gray-900">{service.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{service.desc}</p>
              <p className="text-xl font-bold text-gray-900 mt-3">{service.price}</p>
              <p className="text-xs text-gray-500">starting price</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Start Your Booking</h2>
            <p className="mt-3 text-lg text-gray-600">Fill in your details — we’ll handle the rest.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Rajesh Kumar"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="rajesh@company.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="fromLocation" className="block text-sm font-semibold text-gray-700 mb-2">
                  From <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    id="fromLocation"
                    name="fromLocation"
                    type="text"
                    value={formData.fromLocation}
                    onChange={handleChange}
                    placeholder="Mumbai"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="toLocation" className="block text-sm font-semibold text-gray-700 mb-2">
                  To <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    id="toLocation"
                    name="toLocation"
                    type="text"
                    value={formData.toLocation}
                    onChange={handleChange}
                    placeholder="Delhi"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="travelDate" className="block text-sm font-semibold text-gray-700 mb-2">
                  Travel Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    id="travelDate"
                    name="travelDate"
                    type="date"
                    value={formData.travelDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                >
                  <option value="">Select service</option>
                  <option value="flight">Flight</option>
                  <option value="bus">Bus</option>
                  <option value="train">Train</option>
                  <option value="tour">Tour Package</option>
                </select>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3"
            >
              Confirm Booking
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </form>
        </div>
      </section>

      {/* Launch Offers */}
      <section className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold">Launch Week Offer</h3>
          <p className="mt-3 text-xl">Get <span className="font-bold text-yellow-300">15% OFF</span> on your first booking!</p>
          <p className="mt-2 text-sm">Use code: <span className="font-mono bg-white/20 px-3 py-1 rounded">LAUNCH15</span></p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Trusted by Early Adopters</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic">"{t.text}"</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Simple SVG Icons
const PlaneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0112 21c-2.21 0-4.16-.85-5.636-2.162" />
  </svg>
);

const BusIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1.5a1.5 1.5 0 01-1.5-1.5V6a1.5 1.5 0 011.5-1.5H19a1.5 1.5 0 011.5 1.5v8.5a1.5 1.5 0 01-1.5 1.5H13z" />
  </svg>
);

const TrainIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 19l4-12 4 12m-8 0h8" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 19h16" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} cx="12" cy="12" r="10" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

export default Booking;