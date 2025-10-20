import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Formal Business Icons (No external dependencies)
const Icons = {
  Clock: ({ className = "w-16 h-16" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),

  ShieldCheck: ({ className = "w-16 h-16" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),

  TrendingUp: ({ className = "w-16 h-16" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),

  Users: ({ className = "w-16 h-16" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.707-6.307-1.92m0 0a9.859 9.859 0 013.214-2.141 9.864 9.864 0 005.213-2.141M15 19.128v-.003" />
    </svg>
  ),

  Award: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.5 0h-.871m-.842-1.446a3.75 3.75 0 00-3.741-1.446H9.574A3.75 3.75 0 005.83 16.5V18.75z" />
    </svg>
  ),

  Zap: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5l10.5 11.25-10.5-11.25L3.75 13.5zM12 3v7.5M12 16.5V21" />
    </svg>
  ),

  CheckCircle: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),

  ChevronRight: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  )
};

// Realistic Startup Features (Fresh company with strong foundation)
const features = [
  {
    icon: Icons.Clock,
    title: "Lightning-Fast Support",
    desc: "24/7 dedicated travel concierge with <3 minute response time guarantee",
    color: "bg-blue-600",
    stats: { response: "2.8 min", availability: "24/7" },
    proof: ["WhatsApp Business", "Live Chat", "Dedicated Hotline"],
    badge: "🚀 New"
  },
  {
    icon: Icons.ShieldCheck,
    title: "Bank-Grade Security",
    desc: "PCI-DSS Level 1 compliant with end-to-end encryption and fraud protection",
    color: "bg-emerald-600",
    stats: { compliance: "PCI-DSS L1", encryption: "AES-256" },
    proof: ["2FA Enabled", "SSL/TLS 1.3", "Fraud Detection AI"],
    badge: "🔒 Secure"
  },
  {
    icon: Icons.TrendingUp,
    title: "Guaranteed Savings",
    desc: "Exclusive negotiated rates with 150+ airlines and hotels - 15-25% below market",
    color: "bg-purple-600",
    stats: { savings: "22% avg", partners: "150+" },
    proof: ["Dynamic Pricing", "Wholesale Access", "Real-Time Comparison"],
    badge: "💰 Save"
  },
  {
    icon: Icons.Users,
    title: "Proven Track Record",
    desc: "Trusted by 5,000+ early customers including startups and growing enterprises",
    color: "bg-indigo-600",
    stats: { customers: "5K+", retention: "92%" },
    proof: ["Beta Users", "Referral Program", "Net Promoter Score 85"],
    badge: "⭐ Trusted"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-slate-100/[0.2]"></div>
      
      {/* Floating Geometric Elements */}
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
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-200/50 text-blue-700 text-sm font-semibold mb-8 backdrop-blur-sm">
            <Icons.Award className="w-4 h-4 mr-2" />
            Built for Modern Business Travel
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Why
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Choose Us
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-2"
          >
            We're a next-generation travel platform built by industry veterans with 
            cutting-edge technology and startup agility.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto mb-16"
          >
            <strong>Launched yesterday</strong> - already powering 500+ trips with 
            enterprise-grade infrastructure and 99.9% uptime.
          </motion.p>

          {/* Startup Credibility Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-4xl mx-auto"
          >
            {[
              { value: "500+", label: "Bookings", icon: Icons.Zap, color: "text-blue-600" },
              { value: "15%", label: "Avg Savings", icon: Icons.TrendingUp, color: "text-emerald-600" },
              { value: "99.9%", label: "Uptime", icon: Icons.ShieldCheck, color: "text-purple-600" },
              { value: "2.8 min", label: "Response Time", icon: Icons.Clock, color: "text-indigo-600" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-16 h-16 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all"
                >
                  <stat.icon className={`${stat.color} w-8 h-8`} />
                </motion.div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative overflow-hidden bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 cursor-pointer h-full"
            >
              {/* Feature Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* New Startup Badge */}
              <div className="absolute top-6 right-6 z-20">
                <div className="flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                  <span>{feature.badge}</span>
                </div>
              </div>

              {/* Main Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Animated Icon Container */}
                <motion.div
                  className="flex justify-center mb-6 p-5 bg-gradient-to-br from-white/50 to-white/20 rounded-2xl backdrop-blur-sm border border-white/30 shadow-lg w-fit mx-auto group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotateY: 5 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 3, -3, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      repeatDelay: index * 0.3 
                    }}
                    className={`p-4 rounded-xl ${feature.color} shadow-lg`}
                  >
                    <feature.icon className="text-white drop-shadow-md" />
                  </motion.div>
                </motion.div>

                {/* Title & Description */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 text-center flex-1">
                    {feature.desc}
                  </p>

                  {/* Performance Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(feature.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-slate-50/50 rounded-xl group-hover:bg-blue-50/50 transition-colors">
                        <div className="text-xl font-bold text-slate-800">{value}</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Proof Points */}
                  <div className="space-y-2 mb-8">
                    {feature.proof.map((proof, i) => (
                      <div key={i} className="flex items-center justify-center space-x-3 py-2 px-3 bg-white/60 rounded-lg backdrop-blur-sm border border-white/40 group-hover:bg-blue-50/50 transition-colors">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-slate-700 font-medium text-center">{proof}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center justify-between mb-6 pt-4 border-t border-slate-200/40">
                  <div className="flex -space-x-2">
                    {['A', 'B', 'C', 'D'].slice(0, 3).map((letter, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center text-sm font-bold text-slate-700 shadow-md"
                      >
                        {letter}
                      </div>
                    ))}
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-sm font-semibold text-slate-600 shadow-md border-2 border-slate-200">
                      +47
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">Early Customers</div>
                  </div>
                </div>

                {/* Enhanced CTA */}
                <Link
                  to="/about"
                  className="group/link flex items-center justify-center px-6 py-4 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mt-auto"
                >
                  <span className="mr-3">Learn More</span>
                  <motion.div
                    className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icons.ChevronRight className="w-4 h-4 text-white" />
                  </motion.div>
                </Link>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Startup Story CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-24"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Built by Travel Industry Veterans
            </h3>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Our founding team brings 75+ years of combined experience from Expedia, 
              Booking.com, and major airlines - now delivering startup speed and innovation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { title: "Ex-Exec Team", count: "12", desc: "C-Level leaders from top platforms" },
                { title: "Tech Stack", count: "8", desc: "Modern cloud-native architecture" },
                { title: "API Partners", count: "25+", desc: "Direct connections to GDS systems" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-lg"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {item.count}
                  </div>
                  <div className="font-semibold text-slate-900 mb-1">{item.title}</div>
                  <div className="text-sm text-slate-600">{item.desc}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/about"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className="mr-3">Meet Our Team</span>
                <Icons.ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/beta"
                className="inline-flex items-center px-8 py-4 text-slate-700 font-semibold text-lg border-2 border-slate-300 rounded-3xl hover:bg-slate-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300"
              >
                Join Beta Program
              </Link>
            </div>

            {/* Technology Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-slate-200 text-sm text-slate-600">
              <div className="flex items-center space-x-3 bg-blue-50 px-4 py-2 rounded-xl">
                <Icons.CheckCircle className="w-5 h-5 text-blue-600" />
                <span>AWS Hosted</span>
              </div>
              <div className="flex items-center space-x-3 bg-emerald-50 px-4 py-2 rounded-xl">
                <Icons.CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Stripe Payments</span>
              </div>
              <div className="flex items-center space-x-3 bg-purple-50 px-4 py-2 rounded-xl">
                <Icons.CheckCircle className="w-5 h-5 text-purple-600" />
                <span>Amadeus GDS</span>
              </div>
              <div className="flex items-center space-x-3 bg-indigo-50 px-4 py-2 rounded-xl">
                <Icons.CheckCircle className="w-5 h-5 text-indigo-600" />
                <span>React Native App</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Grid Pattern CSS */}
      <style jsx>{`
        .bg-grid-slate-100 {
          background-image: 
            linear-gradient(rgba(226, 232, 240, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(226, 232, 240, 0.2) 1px, transparent 1px);
          background-size: 60px 60px;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;