import React, { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Formal Business Icons
const Icons = {
  Send: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),

  ShieldCheck: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),

  Star: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),

  Users: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.707-6.307-1.92m0 0a9.859 9.859 0 013.214-2.141 9.864 9.864 0 005.213-2.141M15 19.128v-.003" />
    </svg>
  ),

  Clock: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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

// **Enterprise Lead Magnet Options** (Day 1 startup focus)
const leadMagnets = [
  {
    id: 1,
    title: "🚀 Early Access",
    description: "Join our first 100 customers - exclusive pricing + priority support",
    benefit: "Save 25% + Founder Access",
    subscribers: "47/100",
    color: "from-emerald-600 to-blue-600"
  },
  {
    id: 2,
    title: "💼 Corporate Demo",
    description: "Schedule 1:1 demo for your team - see enterprise features live",
    benefit: "Custom Pricing + API Access",
    subscribers: "12 demos this week",
    color: "from-purple-600 to-indigo-600"
  },
  {
    id: 3,
    title: "📊 Travel Intelligence",
    description: "Monthly reports: pricing trends, policy compliance, destination insights",
    benefit: "Data-Driven Decisions",
    subscribers: "89 subscribers",
    color: "from-blue-600 to-cyan-600"
  }
];

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [selectedMagnet, setSelectedMagnet] = useState(leadMagnets[0].id);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate success (in production, replace with actual API call)
    setStatus("success");
    setEmail("");
    setIsSubmitting(false);

    // Reset status after 3 seconds
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03]"></div>
      </div>

      {/* Floating Geometric Elements */}
      <motion.div
        className="absolute top-32 left-20 w-72 h-72 bg-white/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 right-32 w-96 h-96 bg-emerald-500/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.03, 1],
          rotate: [0, -1, 1, 0]
        }}
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
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-sm font-semibold mb-8">
            <Icons.Star className="w-4 h-4 mr-2" />
            Launch Week Exclusive
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Join Our
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}Launch Cohort
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-2"
          >
            Be among the first 100 companies to experience next-generation corporate travel.
            Priority access, exclusive pricing, and direct founder support.
          </motion.p>

          {/* Day 1 Social Proof Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-12 mt-12 mb-16 text-sm font-medium text-slate-300 bg-white/5 backdrop-blur-xl rounded-3xl px-8 py-6 border border-white/10"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                <Icons.Users className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">47</div>
                <div>Companies Joined</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                <Icons.Clock className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">53</div>
                <div>Spots Remaining</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                <Icons.Star className="w-6 h-6 text-purple-400 fill-current" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div>Early Rating</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Newsletter Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
            {/* Form Header */}
            <div className="p-8 lg:p-12 text-center border-b border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Choose Your Access Level</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Select the option that best fits your team's travel needs
              </p>
            </div>

            {/* Lead Magnet Selection */}
            <div className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-white/10">
                {leadMagnets.map((magnet) => (
                  <motion.div
                    key={magnet.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative group cursor-pointer p-6 lg:p-8 border-r border-white/10 last:border-r-0 ${
                      selectedMagnet === magnet.id
                        ? 'bg-white/20 backdrop-blur-xl'
                        : 'hover:bg-white/5 transition-colors'
                    }`}
                    onClick={() => setSelectedMagnet(magnet.id)}
                  >
                    {/* Selection Indicator */}
                    {selectedMagnet === magnet.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20"
                        layoutId="selectedMagnet"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold text-white mb-4 ${
                        selectedMagnet === magnet.id 
                          ? 'bg-emerald-600' 
                          : 'bg-white/20 backdrop-blur-sm'
                      }`}>
                        {magnet.title}
                      </div>
                      <h4 className="text-white font-semibold mb-2">{magnet.description}</h4>
                      <p className="text-slate-300 text-sm mb-4">{magnet.benefit}</p>
                      <div className="text-xs text-slate-400">
                        {magnet.subscribers}
                      </div>
                      
                      {/* Selection Arrow */}
                      {selectedMagnet === magnet.id && (
                        <motion.div
                          className="absolute bottom-2 right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                          layoutId="arrow"
                          initial={false}
                        >
                          ✓
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="p-8 lg:p-12">
                <div className="max-w-2xl mx-auto">
                  {/* Email Input */}
                  <div className="relative mb-8">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Icons.Send className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email (e.g., name@company.com)"
                      className="block w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 text-lg"
                      disabled={isSubmitting}
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                      {status === "success" ? (
                        <Icons.CheckCircle className="h-5 w-5 text-emerald-400" />
                      ) : (
                        <div className="flex items-center space-x-2 text-slate-400">
                          <span className="text-xs">Work email only</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !email || status === "success"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 hover:from-emerald-700 hover:via-blue-700 hover:to-purple-700 text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:from-slate-700 disabled:via-slate-800 disabled:to-slate-900"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : status === "success" ? (
                      <Icons.CheckCircle className="mr-3 h-5 w-5" />
                    ) : (
                      <Icons.Send className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    )}
                    
                    <span>
                      {isSubmitting 
                        ? "Securing Your Spot..." 
                        : status === "success" 
                          ? "Welcome to the Cohort!" 
                          : `Join ${leadMagnets.find(m => m.id === selectedMagnet).subscribers}`
                      }
                    </span>
                  </motion.button>

                  {/* Success Message */}
                  <AnimatePresence mode="wait">
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className="mt-6 p-4 bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 rounded-2xl text-center"
                      >
                        <div className="flex items-center justify-center space-x-3 mb-2">
                          <Icons.CheckCircle className="h-6 w-6 text-emerald-400" />
                          <span className="text-emerald-200 font-semibold">Success!</span>
                        </div>
                        <p className="text-sm text-emerald-100">
                          Check your email for instant access to{" "}
                          <span className="font-semibold">
                            {leadMagnets.find(m => m.id === selectedMagnet).title}
                          </span>
                          . Reply "START" to activate.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>

              {/* Trust Indicators */}
              <div className="px-8 pb-8 pt-6 border-t border-white/10">
                <div className="flex flex-wrap justify-center gap-8 text-xs text-slate-400">
                  <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-xl">
                    <Icons.ShieldCheck className="h-4 w-4" />
                    <span>GDPR Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-xl">
                    <Icons.Clock className="h-4 w-4" />
                    <span>No spam, ever</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-xl">
                    <span>Powered by</span>
                    <div className="h-4 w-16 bg-white/10 rounded"></div>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-xl">
                    <Icons.Users className="h-4 w-4" />
                    <span>23 companies joined today</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Alternative CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 text-sm mb-8 max-w-2xl mx-auto">
            Prefer to talk? Schedule a quick call with our founder team or request enterprise pricing
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/demo"
              className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white font-semibold text-lg rounded-2xl border border-white/20 hover:border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span className="mr-3">Book Demo Call</span>
              <Icons.ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              to="/enterprise"
              className="inline-flex items-center px-8 py-4 text-white/80 font-semibold text-lg border-2 border-white/30 rounded-2xl hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              Enterprise Pricing
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Custom Animations CSS */}
      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(10px, -10px) scale(1.1); }
          66% { transform: translate(-10px, 10px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .bg-grid-white {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 80px 80px;
        }
      `}</style>
    </section>
  );
};

export default Newsletter;