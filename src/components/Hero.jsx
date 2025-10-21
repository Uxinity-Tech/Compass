import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    passengers: 1,
  });
  const [activeTab, setActiveTab] = useState("flight");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Icons (same as before)
  const Icons = {
    // ... (keep all your icons here - unchanged)
    Search: ({ className = "w-6 h-6" }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    Plane: ({ className = "w-5 h-5" }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    Bus: ({ className = "w-5 h-5" }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H9m12 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-7.5 15a3 3 0 01-3-3V6a3 3 0 013-3h9a3 3 0 013 3v12a3 3 0 01-3 3H6z" />
      </svg>
    ),
    Train: ({ className = "w-5 h-5" }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5L21 18m-7.5-7.5L10.5 21M3.75 7.5L6 3m7.687 8.812l-1.776-1.776M21 18H18a3 3 0 01-3-3v-3a3 3 0 013-3h3m0 0H9a3 3 0 01-3-3V6a3 3 0 013-3h9" />
      </svg>
    ),
    MapPin: ({ className = "w-5 h-5" }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    Calendar: ({ className = "w-5 h-5" }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3V5.25M5.997 16.178l-.75.75M11.562 18.75h4.375m-2.687-4.5V8.25m0 0H8.25m2.562 5.5l-1.5 1.5M18.375 18.75l-3.75-3.75M15.75 18.75h3.75m-7.5 0h7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5v3.75c0 .621.504 1.125 1.125 1.125h13.75c.621 0 1.125-.504 1.125-1.125V13.5M3 13.5V6.75c0-.621.504-1.125 1.125-1.125h13.75c.621 0 1.125-.504 1.125-1.125V3m-9 9v3m0 0v3m0-3h3m-3 0H9" />
      </svg>
    ),
    Clock: ({ className = "w-4 h-4" }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    ShieldCheck: ({ className = "w-4 h-4" }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    Star: ({ className = "w-5 h-5" }) => (
      <svg className={className} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
  };

  const tabs = [
    { id: "flight", label: "Flights", icon: Icons.Plane, color: "bg-blue-600" },
    { id: "bus", label: "Buses", icon: Icons.Bus, color: "bg-emerald-600" },
    { id: "train", label: "Trains", icon: Icons.Train, color: "bg-purple-600" },
    { id: "tour", label: "Tours", icon: Icons.MapPin, color: "bg-indigo-600" },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search:", { ...formData, service: activeTab });
  };

  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/3 rounded-full blur-xl opacity-50 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate-500/3 rounded-full blur-xl opacity-50 animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 lg:pt-24 lg:pb-16">
        {/* Mobile Layout: Search → Content → Image */}
        <div className="block lg:hidden space-y-8">
          {/* Mobile Search */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SearchPanel
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              tabs={tabs}
              Icons={Icons}
            />
          </motion.div>

          {/* Mobile Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Content (same as before, slightly smaller on mobile) */}
            <div className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 text-blue-100">
              <Icons.Star className="w-4 h-4 mr-2 text-blue-300 fill-current" />
              Trusted by 100K+ Travelers
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-white">
                Professional
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Travel Solutions
                </span>
                <br />
                <span className="text-slate-300">Worldwide</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Enterprise-grade booking for flights, rail, coach, and corporate travel.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-2 gap-3">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className="group flex items-center space-x-3 p-3 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-800/70 transition-all cursor-pointer"
                >
                  <div className={`${tab.color} p-2.5 rounded-lg group-hover:scale-110 transition-transform shadow-lg`}>
                    <tab.icon className="text-white w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm group-hover:text-blue-300 transition-colors">
                      {tab.label}
                    </p>
                    <p className="text-xs text-slate-400">24/7</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <Link
                to="/booking"
                className="group flex items-center justify-center px-6 py-3.5 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <Icons.Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Book Travel
              </Link>
              <Link
                to="/corporate"
                className="flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white border-2 border-slate-600 rounded-xl hover:bg-slate-800/50 hover:border-blue-500 transition-all"
              >
                <Icons.Clock className="w-5 h-5 mr-2" />
                Corporate Portal
              </Link>
            </div>
          </motion.div>

          {/* Mobile Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1469362102473-8622cfb973cd?auto=format&fit=crop&w=1200&q=85"
              alt="Business travel"
              className="w-full h-64 sm:h-80 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>

            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-slate-800/80 backdrop-blur-xl rounded-xl p-4 border border-slate-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex -space-x-2">
                      {["CEO", "VP", "MD"].map((role) => (
                        <div key={role} className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                          {role}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Enterprise Clients</p>
                      <p className="text-slate-400 text-xs">Global corporations</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <Icons.Star className="w-4 h-4 text-blue-400 fill-current" />
                      <span className="text-lg font-bold text-white">4.9</span>
                    </div>
                    <p className="text-slate-400 text-xs">50K+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout: 2 Columns */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 xl:gap-20 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Same content as before */}
            <div className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 text-blue-100">
              <Icons.Star className="w-4 h-4 mr-2 text-blue-300 fill-current" />
              Trusted by 100K+ Travelers
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
                Professional
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Travel Solutions
                </span>
                <br />
                <span className="text-slate-300">Worldwide</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-md">
                Enterprise-grade booking for flights, rail, coach, and corporate travel.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className="group flex items-center space-x-4 p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-800/70 transition-all cursor-pointer"
                >
                  <div className={`${tab.color} p-3 rounded-lg group-hover:scale-110 transition-transform shadow-lg`}>
                    <tab.icon className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {tab.label}
                    </p>
                    <p className="text-xs text-slate-400">24/7 Availability</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/booking"
                className="group flex-1 flex items-center justify-center px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <Icons.Search className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Book Travel
              </Link>
              <Link
                to="/corporate"
                className="flex-1 flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-slate-600 rounded-xl hover:bg-slate-800/50 hover:border-blue-500 transition-all"
              >
                <Icons.Clock className="w-5 h-5 mr-3" />
                Corporate Portal
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 text-sm font-medium text-slate-400 pt-6 border-t border-slate-700">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>100K+ Business Trips</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icons.Clock className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icons.ShieldCheck className="w-4 h-4" />
                <span>PCI DSS Compliant</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Search + Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <SearchPanel
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              tabs={tabs}
              Icons={Icons}
            />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1469362102473-8622cfb973cd?auto=format&fit=crop&w=1200&q=85"
                alt="Business travel"
                className="w-full h-[500px] lg:h-[600px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-slate-800/80 backdrop-blur-xl rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex -space-x-2">
                        {["CEO", "VP", "MD"].map((role) => (
                          <div key={role} className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {role}
                          </div>
                        ))}
                      </div>
                      <div>
                        <p className="text-white font-semibold">Enterprise Clients</p>
                        <p className="text-slate-400 text-sm">Global corporations</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <Icons.Star className="w-5 h-5 text-blue-400 fill-current" />
                        <span className="text-2xl font-bold text-white">4.9</span>
                      </div>
                      <p className="text-slate-400 text-sm">50K+ Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// SearchPanel Component (unchanged)
const SearchPanel = ({ activeTab, setActiveTab, formData, handleInputChange, handleSubmit, tabs, Icons }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 shadow-2xl p-4 sm:p-6">
      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 p-1 bg-slate-900/50 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 min-w-fit flex items-center justify-center gap-1.5 py-2.5 px-3 sm:py-3 sm:px-4 rounded-lg font-medium text-xs sm:text-sm transition-all ${
              activeTab === tab.id
                ? `${tab.color} text-white shadow-md`
                : "text-slate-400 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
            {tab.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <Icons.Plane className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
            <input
              type="text"
              name="from"
              placeholder="From (e.g. DEL)"
              value={formData.from}
              onChange={handleInputChange}
              className="w-full pl-10 sm:pl-12 pr-3 py-3 sm:py-3.5 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              required
            />
          </div>
          <div className="relative">
            <Icons.MapPin className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              name="to"
              placeholder="To (e.g. BOM)"
              value={formData.to}
              onChange={handleInputChange}
              className="w-full pl-10 sm:pl-12 pr-3 py-3 sm:py-3.5 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <Icons.Calendar className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full pl-10 sm:pl-12 pr-3 py-3 sm:py-3.5 bg-slate-800/50 border border-slate-600 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              required
            />
          </div>
          <select
            name="passengers"
            value={formData.passengers}
            onChange={handleInputChange}
            className="w-full px-3 py-3 sm:py-3.5 bg-slate-800/50 border border-slate-600 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <option key={n} value={n} className="bg-slate-800">
                {n} Passenger{n > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          <Icons.Search className="w-5 h-5" />
          Search {tabs.find(t => t.id === activeTab)?.label}
        </button>
      </form>
    </div>
  );
};

export default Hero;