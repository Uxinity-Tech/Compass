import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Formal Business Icon Set (No external dependencies)
const Icons = {
  Plane: ({ className = "w-12 h-12" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),

  Bus: ({ className = "w-12 h-12" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H9m12 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-7.5 15a3 3 0 01-3-3V6a3 3 0 013-3h9a3 3 0 013 3v12a3 3 0 01-3 3H6z" />
    </svg>
  ),

  Train: ({ className = "w-12 h-12" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5L21 18m-7.5-7.5L10.5 21M3.75 7.5L6 3m7.687 8.812l-1.776-1.776M21 18H18a3 3 0 01-3-3v-3a3 3 0 013-3h3m0 0H9a3 3 0 01-3-3V6a3 3 0 013-3h9" />
    </svg>
  ),

  Briefcase: ({ className = "w-12 h-12" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 1.936-1.77 1.936H5.52c-.983 0-1.77-.842-1.77-1.936v-4.25A2.835 2.835 0 013.19 12h17.62a2.835 2.835 0 01.71 2.15zM20.25 7.5V5.52c0-.983-.787-1.77-1.77-1.77H5.52C4.737 3.75 4 4.537 4 5.52v1.98A2.835 2.835 0 016.81 9h10.38a2.835 2.835 0 012.06-1.5z" />
    </svg>
  ),

  Globe: ({ className = "w-12 h-12" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5l10.5 11.25-10.5-11.25L3.75 13.5zM12 3v7.5M12 16.5V21" />
    </svg>
  ),

  Users: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.707-6.307-1.92m0 0a9.859 9.859 0 013.214-2.141 9.864 9.864 0 005.213-2.141M15 19.128v-.003" />
    </svg>
  ),

  ShieldCheck: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),

  Clock: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),

  Check: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),

  ChevronRight: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  )
};

// Enhanced Enterprise Services
const services = [
  {
    icon: Icons.Plane,
    title: "Global Air Travel",
    desc: "Executive class flights with preferred airline partnerships and real-time pricing.",
    route: "/flights",
    color: "bg-blue-600",
    stats: { travelers: "500K+", routes: "2,100+" },
    features: ["Priority Boarding", "Lounge Access", "Flexible Changes"]
  },
  {
    icon: Icons.Bus,
    title: "Premium Ground Transport",
    desc: "Luxury coach services with dedicated corporate routes and guaranteed seating.",
    route: "/ground",
    color: "bg-emerald-600",
    stats: { partners: "150+", cities: "300+" },
    features: ["WiFi Enabled", "Power Outlets", "Dedicated Support"]
  },
  {
    icon: Icons.Train,
    title: "High-Speed Rail",
    desc: "First-class rail connections across Europe and Asia with business lounges.",
    route: "/rail",
    color: "bg-purple-600",
    stats: { lines: "50+", countries: "25+" },
    features: ["Quiet Cars", "Business Lounges", "Meal Service"]
  },
  {
    icon: Icons.Briefcase,
    title: "Corporate Travel Management",
    desc: "Complete travel policy enforcement, expense tracking, and compliance reporting.",
    route: "/corporate",
    color: "bg-indigo-600",
    stats: { clients: "5K+", savings: "25% avg" },
    features: ["Policy Compliance", "Expense Integration", "Real-time Reporting"]
  }
];

const Services = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-slate-100/[0.2]"></div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-80 h-80 bg-indigo-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600/10 border border-blue-200 text-blue-700 text-sm font-semibold mb-8">
            <Icons.ShieldCheck className="w-4 h-4 mr-2" />
            Enterprise-Grade Travel Solutions
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Comprehensive
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}Travel Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            End-to-end corporate travel management with global coverage, policy compliance, 
            and 24/7 executive support.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-12 text-sm text-slate-600"
          >
            <div className="flex items-center space-x-3">
              <Icons.Users className="w-5 h-5 text-blue-600" />
              <span>250K+ Business Travelers</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icons.Clock className="w-5 h-5 text-emerald-600" />
              <span>24/7 Global Support</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icons.ShieldCheck className="w-5 h-5 text-purple-600" />
              <span>99.9% Uptime SLA</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RESPONSIVE GRID: 2 on mobile, 2 on tablet, 4 on xl */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                }
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative overflow-hidden bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 cursor-pointer"
            >
              {/* Card content remains the same */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="absolute top-6 right-6">
                <div className="flex items-center space-x-1 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/50 text-xs font-semibold text-slate-700">
                  <Icons.Check className="w-3 h-3 text-emerald-600" />
                  <span>Premium</span>
                </div>
              </div>

              <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                <motion.div
                  className="flex justify-center mb-6 p-3 bg-gradient-to-br from-white/50 to-white/20 rounded-2xl backdrop-blur-sm border border-white/30 shadow-lg w-fit mx-auto group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotateY: 5 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatDelay: index * 0.5 
                    }}
                    className={`p-3 rounded-xl ${service.color} shadow-lg`}
                  >
                    <service.icon className="text-white drop-shadow-md w-10 h-10" />
                  </motion.div>
                </motion.div>

                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 text-center group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 text-center flex-1">
                    {service.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                    {Object.entries(service.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-2 bg-slate-50/50 rounded-xl">
                        <div className="text-lg sm:text-2xl font-bold text-slate-800">{value}</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2 py-1 px-2 bg-white/60 rounded-lg backdrop-blur-sm border border-white/40 group-hover:bg-blue-50/50 transition-colors text-xs sm:text-sm">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={service.route}
                  className="group/link flex items-center justify-center px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mt-auto text-sm"
                >
                  <span className="mr-2">Explore</span>
                  <motion.div
                    className="flex items-center justify-center w-5 h-5 bg-white/20 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icons.ChevronRight className="w-3 h-3 text-white" />
                  </motion.div>
                </Link>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                >
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20 sm:mt-24"
        >
          <div className="inline-flex items-center px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-base sm:text-lg rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer max-w-max mx-auto group">
            <span className="mr-3">View All Enterprise Solutions</span>
            <motion.div
              whileHover={{ x: 4 }}
              className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-full"
            >
              <Icons.ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </motion.div>
          </div>
          
          <p className="text-slate-600 mt-4 sm:mt-6 text-xs sm:text-sm">
            Trusted by Fortune 500 companies • ISO 27001 Certified • SOC 2 Compliant
          </p>
        </motion.div>
      </div>

      {/* Grid Pattern */}
      <style jsx>{`
        .bg-grid-slate-100 {
          background-image: 
            linear-gradient(rgba(226, 232, 240, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(226, 232, 240, 0.3) 1px, transparent 1px);
          background-size: 60px 60px;
        }
      `}</style>
    </section>
  );
};

export default Services;