import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheckIcon, ClockIcon, UsersIcon, CheckCircleIcon } from "@heroicons/react/outline";
import gggg from "../assets/images/gggg.png";
import Ccc from "../assets/images/Ccc.jpg";
import Mmm from "../assets/images/Mmm.png";
import red from "../assets/images/red.png";
// Formal Business Icons (No external dependencies)
const Icons = {
  Search: ({ className = "w-12 h-12" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),

  Calendar: ({ className = "w-12 h-12" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3V5.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),

  CreditCard: ({ className = "w-12 h-12" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m16.5-7.5V21a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 21V10.5" />
    </svg>
  ),

  Plane: ({ className = "w-12 h-12" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),

  ShieldCheck: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),

  Clock: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),

  Users: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.707-6.307-1.92m0 0a9.859 9.859 0 013.214-2.141 9.864 9.864 0 005.213-2.141M15 19.128v-.003" />
    </svg>
  ),

  CheckCircle: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),

  ChevronRight: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  )
};

// Comprehensive Enterprise Booking Process
const steps = [
  {
    number: 1,
    icon: Icons.Search,
    title: "Select Your Journey",
    description: "Choose from flights, hotels, rail, or complete packages with real-time availability",
    details: [
      "150+ airlines",
      "500K+ hotels", 
      "Live pricing",
      "Policy check"
    ],
    time: "1 min",
    color: "bg-blue-600"
  },
  {
    number: 2,
    icon: Icons.Calendar,
    title: "Configure Itinerary",
    description: "Enter dates, preferences, and corporate requirements with smart autofill",
    details: [
      "Calendar integration",
      "Multi-city support",
      "Guest profiles",
      "Expense codes"
    ],
    time: "2 min",
    color: "bg-emerald-600"
  },
  {
    number: 3,
    icon: Icons.CreditCard,
    title: "Secure Payment",
    description: "PCI-DSS compliant checkout with corporate cards, virtual cards, and invoice options",
    details: [
      "3D Secure",
      "Virtual Cards",
      "Invoice Net 30",
      "Split payments"
    ],
    time: "30 sec",
    color: "bg-purple-600"
  },
  {
    number: 4,
    icon: Icons.Plane,
    title: "Travel with Confidence",
    description: "Instant confirmation, mobile itinerary, 24/7 support, and automated expense reporting",
    details: [
      "Digital boarding pass",
      "Real-time tracking",
      "24/7 concierge",
      "Auto-expense"
    ],
    time: "Instant",
    color: "bg-indigo-600"
  }
];
const partnerLogos = [
  {
    name: "MakeMyTrip",
    logoUrl: Mmm,
    bgColor: "bg-white",
  },
  {
    name: "IRCTC",
    logoUrl: Ccc,
    bgColor: "bg-white",
  },
  {
    name: "RedBus",
    logoUrl: red,
    bgColor: "bg-white",
  },
  {
    name: "Goibibo",
    logoUrl: gggg,
    bgColor: "bg-white",
  },
];


const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-slate-100/[0.1]"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-32 left-20 w-72 h-72 bg-blue-500/3 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 right-24 w-96 h-96 bg-indigo-500/3 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border-2 border-blue-200/50 text-blue-700 text-sm font-semibold mb-8 backdrop-blur-sm">
            <Icons.CheckCircle className="w-4 h-4 mr-2" />
            Enterprise Booking Process
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            How Our
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Platform Works
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-2"
          >
            End-to-end corporate travel booking in under 4 minutes with policy compliance,
            real-time availability, and seamless integration with your expense management system.
          </motion.p>

          {/* Process Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-12 mt-12 text-sm font-medium text-slate-600 bg-white/60 backdrop-blur-sm rounded-3xl px-8 py-6 border border-slate-200/50"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Icons.Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">3.5 min</div>
                <div>Avg Booking Time</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                <Icons.ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div>Policy Compliance</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Icons.Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">99.9%</div>
                <div>Success Rate</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Horizontal Process Timeline */}
        <div className="relative overflow-hidden">
          {/* Timeline Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-white/80 to-indigo-50/50 rounded-3xl"></div>
          
          {/* Process Steps */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ 
                  opacity: 0, 
                  y: 40, 
                  scale: 0.9 
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1 
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  scale: 1.02,
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className={`relative flex-1 max-w-sm lg:max-w-md mx-auto lg:mx-0 group ${
                  index < steps.length - 1 ? 'lg:pr-12' : 'lg:pl-12'
                }`}
              >
                {/* Step Connector Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute top-32 right-0 hidden lg:block w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                    whileHover={{ scaleX: 1.1 }}
                  />
                )}

                {/* Step Card */}
                <div className={`relative overflow-hidden bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl border border-white/20 hover:border-blue-200/50 transition-all duration-700 h-full p-8 lg:p-10 group-hover:bg-white/95`}>
                  
                  {/* Step Number Badge */}
                  <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r ${step.color} text-white flex items-center justify-center text-2xl font-bold rounded-3xl shadow-lg border-4 border-white z-20`}>
                    {step.number}
                  </div>

                  {/* Step Icon */}
                  <motion.div
                    className={`relative z-10 mx-auto mb-6 p-4 bg-gradient-to-br ${step.color}/10 rounded-2xl border border-${step.color.slice(3)}/20 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotateY: 10 }}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatDelay: index * 0.5 
                      }}
                      className={`p-3 rounded-xl ${step.color} shadow-lg`}
                    >
                      <step.icon className="text-white drop-shadow-md" />
                    </motion.div>
                  </motion.div>

                  {/* Step Content */}
                  <div className="text-center">
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm lg:text-base leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Step Details Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-center space-x-2 p-2 bg-slate-50/50 rounded-xl group-hover:bg-blue-50/50 transition-colors">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></div>
                          <span className="text-xs font-medium text-slate-700">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Step Timing */}
                    <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-xs font-semibold rounded-full shadow-lg mb-6">
                      <Icons.Clock className="w-3 h-3 mr-2" />
                      <span>{step.time} avg</span>
                    </div>

                    {/* Policy Compliance Badge */}
                    <div className="flex items-center justify-center space-x-2 mb-6 pt-4 border-t border-slate-200/40">
                      <Icons.ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-semibold text-slate-700">Policy Compliant</span>
                    </div>
                  </div>

                  {/* Bottom Gradient Bar */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                    initial={false}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Step Connectors */}
          <div className="flex justify-between items-center mt-8 lg:hidden">
            {steps.slice(0, -1).map((_, index) => (
              <div
                key={index}
                className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-4 rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Interactive Demo CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-24"
        >
           <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
        >
          Trusted by Leading Travel Partners
        </motion.h2>
            {/* Integration Partners */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {partnerLogos.map((partner, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-5 bg-white rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center"
            >
              <img
                src={partner.logoUrl}
                alt={partner.name}
                className="h-12 object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center space-x-3 bg-blue-50 px-4 py-2 rounded-xl">
            <ShieldCheckIcon className="w-5 h-5 text-blue-600" />
            <span>Secure Payment Gateway</span>
          </div>
          <div className="flex items-center space-x-3 bg-emerald-50 px-4 py-2 rounded-xl">
            <ClockIcon className="w-5 h-5 text-emerald-600" />
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center space-x-3 bg-purple-50 px-4 py-2 rounded-xl">
            <UsersIcon className="w-5 h-5 text-purple-600" />
            <span>1000+ Happy Travellers</span>
          </div>
          <div className="flex items-center space-x-3 bg-indigo-50 px-4 py-2 rounded-xl">
            <CheckCircleIcon className="w-5 h-5 text-indigo-600" />
            <span>Zero Failed Bookings</span>
          </div>
        </div>

        {/* Startup Info */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 text-gray-500 text-sm"
        >
          🚀 We are a newly launched travel agency, committed to providing seamless 
          flight, train, bus, and tour bookings.
        </motion.p>
      </div>
        </motion.div>
      </div>

      {/* Grid Pattern CSS */}
      <style jsx>{`
        .bg-grid-slate-100 {
          background-image: 
            linear-gradient(rgba(226, 232, 240, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(226, 232, 240, 0.1) 1px, transparent 1px);
          background-size: 80px 80px;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;