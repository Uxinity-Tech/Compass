import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    passengers: 1
  });

  // Professional Formal Color Palette
  const colors = {
    primary: 'bg-blue-600',      // #2563eb
    primaryHover: 'hover:bg-blue-700',
    secondary: 'bg-slate-800',   // #1e293b
    accent: 'bg-blue-100',       // #dbeafe
    accentHover: 'hover:bg-blue-200',
    textPrimary: 'text-white',
    textSecondary: 'text-slate-300',
    textMuted: 'text-slate-400',
    border: 'border-slate-700',
    borderLight: 'border-slate-600',
    shadow: 'shadow-lg',
    shadowHover: 'hover:shadow-xl'
  };

  // Custom Icons - Professional Style
  const Icons = {
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

    ChevronDown: ({ className = "w-5 h-5" }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
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
    )
  };

  const services = [
    { icon: Icons.Plane, label: "Flights", color: "bg-blue-600" },
    { icon: Icons.Bus, label: "Buses", color: "bg-slate-700" },
    { icon: Icons.Train, label: "Trains", color: "bg-slate-700" },
    { icon: Icons.MapPin, label: "Tours", color: "bg-slate-700" }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted:", formData);
  };

  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Professional Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>
        
        {/* Subtle Geometric Background */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/3 rounded-full mix-blend-multiply filter blur-xl opacity-50"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-slate-500/3 rounded-full mix-blend-multiply filter blur-xl opacity-50"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Content */}
          <motion.section
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-8 lg:space-y-12 lg:max-w-lg"
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 text-blue-100"
            >
              <Icons.Star className="w-4 h-4 mr-2 text-blue-300 fill-current" />
              Trusted by 100K+ Travelers
            </motion.div>

            {/* Professional Headline */}
            <motion.div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
              >
                <span className="text-white">Professional</span>
                <br />
                <span className={`${colors.primary} bg-clip-text text-transparent`}>
                  Travel Solutions
                </span>
                <br />
                <span className="text-slate-300">Worldwide</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-md"
              >
                Enterprise-grade booking platform for flights, rail, coach services, 
                and corporate travel management.
              </motion.p>
            </motion.div>

            {/* Service Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -1 }}
                  className="group flex items-center space-x-4 p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-800/70 hover:border-slate-600 transition-all duration-300 cursor-pointer"
                >
                  <div className={`${service.color} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300 ${colors.shadow}`}>
                    <service.icon className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {service.label}
                    </p>
                    <p className="text-xs text-slate-400">24/7 Availability</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Primary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <Link
                to="/booking"
                className={`group relative flex-1 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold ${colors.primary} ${colors.primaryHover} text-white rounded-xl ${colors.shadow} ${colors.shadowHover} hover:-translate-y-0.5 transition-all duration-300 overflow-hidden`}
              >
                <Icons.Search className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span>Book Travel</span>
              </Link>
              
              <Link
                to="/corporate"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-slate-600 rounded-xl backdrop-blur-sm hover:bg-slate-800/50 hover:border-blue-500 transition-all duration-300 flex-1"
              >
                <Icons.Clock className="w-5 h-5 mr-3" />
                Corporate Portal
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-8 text-sm font-medium text-slate-400 pt-8 border-t border-slate-700 pt-6"
            >
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
            </motion.div>
          </motion.section>

          {/* Right Column - Search & Visual */}
          <motion.aside
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative lg:min-h-[700px]"
          >
            {/* Professional Search Panel */}
            <motion.div
              initial={false}
              className="relative z-10 mb-8"
            >
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
                {/* Search Toggle */}
                <button
                  type="button"
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="w-full flex items-center justify-between p-6 bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 group border-b border-slate-700"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`${colors.primary} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 ${colors.shadow}`}>
                      <Icons.Search className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">
                        {searchOpen ? "Advanced Search Options" : "Quick Business Travel Search"}
                      </p>
                      <p className="text-slate-400 text-sm">
                        Find flights, trains, and corporate accommodations
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: searchOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-slate-400 group-hover:text-slate-300 transition-colors"
                  >
                    <Icons.ChevronDown />
                  </motion.div>
                </button>

                {/* Expandable Search Form */}
                <AnimatePresence>
                  {searchOpen && (
                    <motion.form
                      initial={{ 
                        opacity: 0, 
                        height: 0, 
                        paddingTop: 0,
                        paddingBottom: 0
                      }}
                      animate={{ 
                        opacity: 1, 
                        height: "auto", 
                        paddingTop: 8,
                        paddingBottom: 8
                      }}
                      exit={{ 
                        opacity: 0, 
                        height: 0, 
                        paddingTop: 0,
                        paddingBottom: 0
                      }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      onSubmit={handleSubmit}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-6">
                        {/* Origin/Destination */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="from" className="text-sm font-semibold text-slate-300">
                              Departure
                            </label>
                            <div className="relative">
                              <Icons.Plane className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
                              <input
                                id="from"
                                type="text"
                                name="from"
                                placeholder="Origin Airport (e.g., JFK)"
                                value={formData.from}
                                onChange={handleInputChange}
                                className="w-full pl-12 pr-4 py-3.5 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-800/70 transition-all duration-300 text-base"
                                required
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <label htmlFor="to" className="text-sm font-semibold text-slate-300">
                              Destination
                            </label>
                            <div className="relative">
                              <Icons.MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                              <input
                                id="to"
                                type="text"
                                name="to"
                                placeholder="Destination (e.g., LHR)"
                                value={formData.to}
                                onChange={handleInputChange}
                                className="w-full pl-12 pr-4 py-3.5 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-800/70 transition-all duration-300 text-base"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        {/* Date & Passengers */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="date" className="text-sm font-semibold text-slate-300">
                              Travel Date
                            </label>
                            <div className="relative">
                              <Icons.Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                              <input
                                id="date"
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange}
                                className="w-full pl-12 pr-4 py-3.5 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-800/70 transition-all duration-300 text-base"
                                required
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <label htmlFor="passengers" className="text-sm font-semibold text-slate-300">
                              Travelers
                            </label>
                            <div className="relative">
                              <select
                                id="passengers"
                                name="passengers"
                                value={formData.passengers}
                                onChange={handleInputChange}
                                className="w-full pl-12 pr-12 py-3.5 bg-slate-800/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-800/70 transition-all duration-300 text-base appearance-none"
                              >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                  <option key={num} value={num}>
                                    {num} Traveler{num > 1 ? 's' : ''}
                                  </option>
                                ))}
                              </select>
                              <Icons.ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
                            </div>
                          </div>
                        </div>

                        {/* Search Button */}
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`${colors.primary} ${colors.primaryHover} w-full text-white font-semibold py-4 px-6 rounded-xl ${colors.shadow} ${colors.shadowHover} transition-all duration-300 text-base flex items-center justify-center`}
                        >
                          <Icons.Search className="w-5 h-5 mr-2" />
                          Search Business Travel
                        </motion.button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Professional Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800/50 to-transparent backdrop-blur-sm border border-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1469362102473-8622cfb973cd?auto=format&fit=crop&w=1200&q=85"
                  alt="Professional business travelers in modern airport terminal"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                
                {/* Corporate Trust Banner */}
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-slate-800/80 backdrop-blur-xl rounded-xl p-6 border border-slate-700 shadow-xl"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex -space-x-2">
                          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">CEO</span>
                          </div>
                          <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">VP</span>
                          </div>
                          <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">MD</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-white font-semibold">Enterprise Clients</p>
                          <p className="text-slate-400 text-sm">Global corporations trust us</p>
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
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;