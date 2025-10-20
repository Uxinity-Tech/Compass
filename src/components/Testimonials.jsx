import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Formal Business Icons
const Icons = {
  Star: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),

  MapPin: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),

  Clock: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),

  Users: ({ className = "w-4 h-4" }) => (
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
  ),

  Quote: ({ className = "w-16 h-16" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.852 12.05c.852.867 1.348 2.018 1.348 3.257 0 2.867-1.631 5.31-4.385 6.597L9.896 18c1.473-1.059 2.496-2.681 2.496-4.45 0-1.768-1.023-3.391-2.496-4.45l1.456-1.5zM7.974 12.05c.852.867 1.348 2.018 1.348 3.257 0 2.867-1.631 5.31-4.385 6.597L2.904 18c1.473-1.059 2.496-2.681 2.496-4.45 0-1.768-1.023-3.391-2.496-4.45l1.456-1.5z"/>
    </svg>
  )
};

// **Realistic Early Adopter Testimonials** (Day 1 startup)
const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "Co-Founder @ TechBit",
    avatar: "A",
    company: "TechBit Solutions",
    feedback: "Booked my Paris trip in 3 minutes! The real-time pricing and policy check are game-changers for startups.",
    rating: 5,
    date: "Today",
    destination: "Paris",
    service: "Flight + Hotel",
    tags: ["Lightning Fast", "Startup Friendly"],
    verified: true
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "Operations Lead @ FinFlow",
    avatar: "P",
    company: "FinFlow Analytics",
    feedback: "Support responded in 2 minutes via WhatsApp! Fixed my Mumbai booking instantly. This is enterprise-ready.",
    rating: 5,
    date: "Today",
    destination: "Mumbai",
    service: "Flight",
    tags: ["Amazing Support", "Reliable"],
    verified: true
  },
  {
    id: 3,
    name: "John Dsouza",
    role: "Marketing Director @ GreenLeaf",
    avatar: "J",
    company: "GreenLeaf Marketing",
    feedback: "Saved 18% on London train tickets vs. our usual vendor. The interface is clean and corporate-friendly.",
    rating: 5,
    date: "Today",
    destination: "London",
    service: "Train",
    tags: ["Great Savings", "Easy to Use"],
    verified: true
  },
  {
    id: 4,
    name: "Sarah Chen",
    role: "HR Manager @ ScaleUp",
    avatar: "S",
    company: "ScaleUp HR",
    feedback: "Perfect for our remote team! Booked 5 trips to Singapore with expense codes in under 10 minutes.",
    rating: 5,
    date: "Today",
    destination: "Singapore",
    service: "Multi-City",
    tags: ["Team Booking", "Expense Ready"],
    verified: true
  },
  {
    id: 5,
    name: "Rahul Patel",
    role: "CTO @ InnovateLabs",
    avatar: "R",
    company: "InnovateLabs",
    feedback: "API integration took 30 minutes. Already powering our employee self-service portal. Impressive Day 1 product!",
    rating: 5,
    date: "Today",
    destination: "N/A",
    service: "API Integration",
    tags: ["Developer Friendly", "Fast Setup"],
    verified: true
  }
];

// Early Stage Metrics (Realistic for Day 1)
const metrics = {
  totalBookings: "47",
  totalCompanies: "23",
  avgRating: "4.9",
  responseTime: "2.4 min"
};

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-indigo-50/10"></div>
        <div className="absolute inset-0 bg-grid-slate-100/[0.1]"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-40 left-16 w-64 h-64 bg-blue-500/3 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-48 right-24 w-80 h-80 bg-indigo-500/3 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        animate={{ y: [0, 15, 0] }}
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
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600/10 to-blue-600/10 border-2 border-emerald-200/50 text-emerald-700 text-sm font-semibold mb-8 backdrop-blur-sm">
            <Icons.CheckCircle className="w-4 h-4 mr-2" />
            Early Adopter Feedback
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Day 1
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Success Stories
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-2"
          >
            Launched yesterday and already trusted by 23 innovative companies for their 
            corporate travel needs. Here's what our first customers are saying:
          </motion.p>

          {/* Day 1 Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto mb-16"
          >
            {[
              { value: metrics.totalBookings, label: "Bookings Today", icon: Icons.Clock, color: "text-blue-600" },
              { value: metrics.totalCompanies, label: "Companies", icon: Icons.Users, color: "text-emerald-600" },
              { value: metrics.avgRating, label: "Avg Rating", icon: Icons.Star, color: "text-amber-600" },
              { value: metrics.responseTime, label: "Response Time", icon: Icons.Clock, color: "text-purple-600" }
            ].map((metric, i) => (
              <div key={i} className="text-center group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-16 h-16 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all"
                >
                  <metric.icon className={`${metric.color} w-8 h-8`} />
                </motion.div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">{metric.value}</div>
                <div className="text-sm text-slate-600 font-medium">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ 
                opacity: 0, 
                y: 40, 
                scale: 0.95 
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1 
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                scale: 1.02,
                y: -6,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 cursor-pointer h-full"
            >
              {/* Testimonial Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white/80 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Verified Badge */}
              {testimonial.verified && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="inline-flex items-center px-2.5 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full shadow-lg">
                    <Icons.CheckCircle className="w-3 h-3 mr-1 fill-current" />
                    Verified
                  </div>
                </div>
              )}

              {/* Quote Icon */}
              <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg opacity-10 group-hover:opacity-20 transition-opacity">
                <Icons.Quote className="w-8 h-8" />
              </div>

              <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col">
                {/* Rating Stars */}
                <div className="flex items-center justify-center mb-6">
                  <div className="flex space-x-1 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Icons.Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400 fill-current' : 'text-slate-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-slate-600">({testimonial.rating}/5)</span>
                </div>

                {/* Testimonial Quote */}
                <div className="flex items-start space-x-3 mb-6 flex-1">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
                  </div>
                  <p className="text-slate-700 text-base leading-relaxed italic font-medium">
                    "{testimonial.feedback}"
                  </p>
                </div>

                {/* Testimonial Metadata */}
                <div className="space-y-4 mb-8 pt-6 border-t border-slate-200/40">
                  {/* Customer Profile */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg">
                        {testimonial.avatar}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-600 border-2 border-white rounded-full flex items-center justify-center text-white text-xs font-bold">
                        ✓
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-900 text-base truncate">{testimonial.name}</div>
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <span className="truncate">{testimonial.role}</span>
                        <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                        <span className="truncate">{testimonial.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* Booking Details */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50/50 rounded-2xl group-hover:bg-blue-50/50 transition-colors">
                    <div className="flex items-center space-x-2 text-sm">
                      <Icons.MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="font-medium text-slate-700">{testimonial.destination}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Icons.Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="font-medium text-slate-700">{testimonial.date}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 text-xs">
                      {testimonial.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white/60 backdrop-blur-sm rounded-full text-slate-700 font-medium border border-slate-200/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="col-span-2 text-xs text-slate-500 text-center">
                      {testimonial.service} • {metrics.responseTime} response time
                    </div>
                  </div>
                </div>

                {/* Action CTA */}
                <Link
                  to={`/case-studies/${testimonial.company.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group/cta flex items-center justify-center px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mt-auto"
                >
                  <span className="mr-3 text-sm">Read Full Story</span>
                  <motion.div
                    className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full group-hover:bg-white/30"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icons.ChevronRight className="w-4 h-4 text-white" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Early Adopter Program CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Join Our First 100 Customers
            </h3>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Be part of our launch cohort with exclusive pricing, priority support, 
              and direct founder access. Limited spots available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/early-access"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold text-lg rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className="mr-3">Join Early Access</span>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full"
                >
                  <Icons.ChevronRight className="w-4 h-4 text-white" />
                </motion.div>
              </Link>
              <Link
                to="/waitlist"
                className="inline-flex items-center px-8 py-4 text-slate-700 font-semibold text-lg border-2 border-slate-300 rounded-3xl hover:bg-slate-50 hover:border-emerald-300 hover:text-emerald-700 transition-all duration-300"
              >
                Join Waitlist
              </Link>
            </div>

            {/* Launch Day Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-slate-200 text-sm text-slate-600">
              <div className="flex items-center space-x-3 bg-emerald-50 px-4 py-2 rounded-xl">
                <Icons.Star className="w-5 h-5 text-emerald-600 fill-current" />
                <span>4.9/5 from first 47 customers</span>
              </div>
              <div className="flex items-center space-x-3 bg-blue-50 px-4 py-2 rounded-xl">
                <Icons.Clock className="w-5 h-5 text-blue-600" />
                <span>2.4 min avg response</span>
              </div>
              <div className="flex items-center space-x-3 bg-purple-50 px-4 py-2 rounded-xl">
                <Icons.Users className="w-5 h-5 text-purple-600" />
                <span>23 companies live</span>
              </div>
              <div className="flex items-center space-x-3 bg-indigo-50 px-4 py-2 rounded-xl">
                <Icons.CheckCircle className="w-5 h-5 text-indigo-600" />
                <span>100% uptime Day 1</span>
              </div>
            </div>

            {/* Beta User Counter */}
            <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl border border-emerald-200/50">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    {metrics.totalBookings}
                  </div>
                  <div className="text-sm text-slate-600 uppercase tracking-wide font-semibold">
                    Trips Booked Today
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-emerald-300 to-blue-300 w-24 sm:w-32"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    {metrics.totalCompanies}
                  </div>
                  <div className="text-sm text-slate-600 uppercase tracking-wide font-semibold">
                    Companies Trust Us
                  </div>
                </div>
              </div>
            </div>
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

export default Testimonials;