import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, Zap, Shield, Clock, Star, Plane, MapPin, Calendar, 
  Award, TrendingUp, BarChart3, CheckCircle, ArrowRight, DollarSign, Globe, Bus
} from "lucide-react";

// Team Members
const team = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "15+ years in travel tech. Ex-Google, built 3x startups."
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    bio: "Built scalable booking systems at Expedia. MIT '18."
  },
  {
    name: "Mike Rivera",
    role: "Head of Growth",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Grew travel apps to 1M+ users. Ex-Airbnb."
  }
];

// Travel Images
const travelImages = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    alt: "Modern airport terminal",
    className: "object-cover w-full h-64 md:h-96"
  },
  {
    src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
    alt: "Business travelers in airport",
    className: "object-cover w-full h-64 md:h-96"
  },
  {
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    alt: "Corporate meeting space",
    className: "object-cover w-full h-64 md:h-96"
  }
];

// Milestones
const milestones = [
  { title: "Idea Conception", date: "Jan 2025", color: "bg-blue-500", icon: Globe },
  { title: "First Booking", date: "Mar 2025", color: "bg-green-500", icon: Plane },
  { title: "Team Expansion", date: "May 2025", color: "bg-purple-500", icon: Users },
  { title: "Official Launch", date: "Oct 2025", color: "bg-indigo-500", icon: Bus }
];

// Trust Signals
const trustSignals = [
  { icon: Shield, label: "SOC 2 Compliant", value: "Enterprise Grade", color: "bg-emerald-50 border-emerald-200" },
  { icon: Clock, label: "99.9% Uptime", value: "Guaranteed", color: "bg-blue-50 border-blue-200" },
  { icon: BarChart3, label: "API Ready", value: "Instant Integration", color: "bg-purple-50 border-purple-200" },
  { icon: CheckCircle, label: "24/7 Support", value: "Priority Access", color: "bg-indigo-50 border-indigo-200" }
];

const About = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }, []);
  const [activeMilestone, setActiveMilestone] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMilestone((prev) => (prev + 1) % milestones.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-inter bg-gray-50 min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 mt-10">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 border border-white/30"
            >
              <Zap className="w-4 h-4 mr-2" />
              🚀 Launch Week - Join Our First 100 Customers
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              TravelEase
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Building the world's most intelligent corporate travel platform with AI-powered booking, 
              instant policy compliance, and real-time expense tracking.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-900 font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-xl hover:bg-white/20 transition-all duration-200"
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>
        
        </div> 
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop"
          alt="Corporate travelers at airport"
          className="w-full h-[70vh] object-cover"
        />

      </section>

      {/* Stats Section */}
      <section className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Companies", value: "23", icon: Users },
              { label: "Bookings", value: "127", icon: Plane },
              { label: "Saved", value: "$14.7K", icon: DollarSign },
              { label: "Rating", value: "4.9/5", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6"
              >
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section with Image */}
      <section className="relative py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Built for Modern Enterprise
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                TravelEase solves corporate travel pain points: policy compliance, 
                expense reconciliation, and employee satisfaction. Our platform 
                saves companies 30%+ on travel spend.
              </p>
              <div className="space-y-4">
                {[
                  "AI Policy Enforcement",
                  "Real-time Expense Sync",
                  "Global Coverage",
                  "Mobile-First Design"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1558618047-3c8c6e8bd8f9?w=600&h=500&fit=crop"
                alt="Business travelers with laptops"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Founders</h2>
            <p className="text-xl text-gray-600">
              Built by operators who understand corporate travel challenges
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-blue-100 font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline Section with Image Background */}
      <section className="relative py-24 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop"
            alt="World map"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl md:text-2xl text-gray-600">From idea to reality</p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative flex flex-col md:flex-row items-center md:items-start justify-center"
                >
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 md:static w-20 h-20 ${milestone.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10 cursor-pointer`}
                    onMouseEnter={() => setActiveMilestone(index)}
                  >
                    <milestone.icon className="w-10 h-10 text-white" />
                  </div>

                  <motion.div
                    className={`mt-14 md:mt-0 md:max-w-md w-full p-6 rounded-xl shadow-lg border bg-white relative z-0 ${
                      index % 2 === 0 ? "md:ml-12 md:text-left" : "md:mr-12 md:text-right"
                    }`}
                  >
                    <h3 className="font-semibold text-xl mb-2">{milestone.title}</h3>
                    <p className="text-sm text-gray-500">{milestone.date}</p>
                    {activeMilestone === index && (
                      <p className="mt-2 text-gray-600 text-sm">
                        More details about this milestone can go here. Highlight your startup's journey and achievements.
                      </p>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section with Images */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-8">
              <Shield className="w-4 h-4 mr-2" />
              Enterprise Ready
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Built to Scale</h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              {trustSignals.map((signal, index) => (
                <motion.div
                  key={signal.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-xl border ${signal.color}`}
                >
                  <div className="flex items-start space-x-4">
                    <signal.icon className="w-12 h-12 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{signal.label}</h3>
                      <p className="text-blue-600 font-semibold">{signal.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=500&fit=crop"
                alt="Secure data center"
                className="w-full h-96 object-cover rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 bg-gray-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-slate-800"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Award className="w-16 h-16 mx-auto mb-8 opacity-80" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Travel Program?
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Join innovative companies saving time and money with TravelEase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                Book Demo
              </motion.button>
            </div>
            <p className="mt-8 text-slate-400 text-sm">
              No credit card required • 14-day free trial
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;