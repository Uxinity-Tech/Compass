import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Formal Business Icons
const Icons = {
  Plane: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),

  MapPin: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
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

  ShieldCheck: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),

  ChevronRight: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  ),

  Star: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
};

// Enhanced Corporate Destinations
const destinations = [
  {
    name: "Dubai",
    slug: "dubai",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Business Capital",
    flights: "127+ daily",
    hotels: "450+",
    rating: 4.8,
    travelers: "45K+ monthly",
    featured: true,
    timezone: "GMT+4",
    airports: ["DXB", "DWC"],
    keyClients: ["Emirates", "DP World"]
  },
  {
    name: "Paris",
    slug: "paris",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
    subtitle: "European Hub",
    flights: "89+ daily",
    hotels: "320+",
    rating: 4.9,
    travelers: "62K+ monthly",
    featured: true,
    timezone: "CET (GMT+1)",
    airports: ["CDG", "ORY"],
    keyClients: ["Air France", "LVMH"]
  },
  {
    name: "Singapore",
    slug: "singapore",
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Asia Gateway",
    flights: "156+ daily",
    hotels: "280+",
    rating: 4.7,
    travelers: "78K+ monthly",
    featured: true,
    timezone: "SGT (GMT+8)",
    airports: ["SIN"],
    keyClients: ["Singapore Airlines", "DBS Bank"]
  },
  {
    name: "New York",
    slug: "new-york",
    img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Financial Center",
    flights: "234+ daily",
    hotels: "680+",
    rating: 4.6,
    travelers: "120K+ monthly",
    featured: true,
    timezone: "EST (GMT-5)",
    airports: ["JFK", "LGA", "EWR"],
    keyClients: ["JPMorgan", "Goldman Sachs"]
  },
  {
    name: "London",
    slug: "london",
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Global Finance",
    flights: "198+ daily",
    hotels: "540+",
    rating: 4.8,
    travelers: "95K+ monthly",
    featured: true,
    timezone: "GMT",
    airports: ["LHR", "LGW", "STN"],
    keyClients: ["HSBC", "Barclays"]
  },
  {
    name: "Tokyo",
    slug: "tokyo",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Tech Innovation",
    flights: "89+ daily",
    hotels: "410+",
    rating: 4.9,
    travelers: "53K+ monthly",
    featured: true,
    timezone: "JST (GMT+9)",
    airports: ["NRT", "HND"],
    keyClients: ["Sony", "Toyota"]
  }
];

const Destinations = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-slate-100/[0.1]"></div>
      </div>

      {/* Floating Corporate Elements */}
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
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600/10 border-2 border-blue-200 text-blue-700 text-sm font-semibold mb-8 backdrop-blur-sm">
            <Icons.Plane className="w-4 h-4 mr-2" />
            Global Business Destinations
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Strategic
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Business Hubs
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
          >
            World-class destinations optimized for corporate travel with direct flights, 
            premium accommodations, and established business infrastructure.
          </motion.p>

          {/* Corporate Trust Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-12 mt-12 text-sm font-medium text-slate-600 bg-white/60 backdrop-blur-sm rounded-3xl px-8 py-6 border border-slate-200/50"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Icons.Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">1.2M+</div>
                <div>Annual Business Trips</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                <Icons.Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">98.7%</div>
                <div>On-Time Performance</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Icons.ShieldCheck className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">100+</div>
                <div>Preferred Partners</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.slug}
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
                y: -4,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-xl border border-slate-200/60 hover:border-blue-200/80 transition-all duration-500 cursor-pointer h-full"
            >
              {/* Premium Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-transparent to-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Featured Badge */}
              {destination.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold rounded-full shadow-lg">
                    <Icons.Star className="w-3 h-3 mr-1 fill-current" />
                    Top Business Hub
                  </div>
                </div>
              )}

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-t-3xl aspect-[4/3]">
                <img
                  src={destination.img}
                  alt={`${destination.name} - Business Travel Destination`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
                
                {/* Image Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-1">{destination.name}</h3>
                      <p className="text-blue-100 font-medium opacity-90">{destination.subtitle}</p>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <Icons.Plane className="w-4 h-4 text-white" />
                      <span className="text-sm font-semibold">{destination.flights}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 lg:p-8 relative z-10">
                {/* Rating & Quick Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-50 to-blue-50 px-3 py-1.5 rounded-full border border-emerald-200/50">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Icons.Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(destination.rating) ? 'text-amber-400 fill-current' : 'text-slate-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-slate-700 ml-1">({destination.rating})</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-600 font-medium">{destination.travelers}</div>
                    <div className="text-xs text-slate-500">Business Travelers</div>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-slate-50/50 rounded-xl group-hover:bg-blue-50/50 transition-colors">
                    <div className="text-lg font-bold text-slate-800">{destination.hotels}</div>
                    <div className="text-xs text-slate-600 uppercase tracking-wide">Hotels</div>
                  </div>
                  <div className="text-center p-3 bg-slate-50/50 rounded-xl group-hover:bg-blue-50/50 transition-colors">
                    <Icons.MapPin className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <div className="text-xs text-slate-600 uppercase tracking-wide">Multiple Airports</div>
                  </div>
                  <div className="text-center p-3 bg-slate-50/50 rounded-xl group-hover:bg-blue-50/50 transition-colors">
                    <div className="text-lg font-bold text-slate-800">{destination.airports.length}</div>
                    <div className="text-xs text-slate-600 uppercase tracking-wide">Airports</div>
                  </div>
                </div>

                {/* Business Highlights */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between py-2 px-3 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/40 hover:bg-blue-50/30 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm font-medium text-slate-700">Key Clients</span>
                    </div>
                    <div className="flex -space-x-2">
                      {destination.keyClients.slice(0, 2).map((client, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg"
                        >
                          {client.split(' ')[0][0]}
                        </div>
                      ))}
                      {destination.keyClients.length > 2 && (
                        <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center text-xs font-semibold text-slate-700 shadow-lg">
                          +{destination.keyClients.length - 2}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 px-3 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/40 hover:bg-blue-50/30 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span className="text-sm font-medium text-slate-700">Time Zone</span>
                    </div>
                    <div className="text-sm font-medium text-slate-800">{destination.timezone}</div>
                  </div>
                </div>

                {/* Enhanced CTA */}
                <Link
                  to={`/destinations/${destination.slug}`}
                  className="group/btn flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm border border-blue-600/20"
                >
                  <span className="mr-3">Book Travel to {destination.name}</span>
                  <motion.div
                    className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full group-hover:bg-white/30"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 90,
                      x: 4 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icons.ChevronRight className="w-4 h-4 text-white" />
                  </motion.div>
                </Link>

                {/* Bottom Gradient Bar */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Plan Your Next Business Trip?
            </h3>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Access our corporate travel portal for real-time pricing, policy compliance, 
              and 24/7 executive support across all major business destinations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/corporate-portal"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className="mr-3">Corporate Portal</span>
                <Icons.ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/all-destinations"
                className="inline-flex items-center px-8 py-4 text-slate-700 font-semibold text-lg border-2 border-slate-300 rounded-3xl hover:bg-slate-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300"
              >
                View All Destinations
              </Link>
            </div>

            {/* Compliance Footer */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-slate-200 text-sm text-slate-600">
              <div className="flex items-center space-x-3">
                <Icons.ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icons.Clock className="w-5 h-5 text-blue-600" />
                <span>24/7 Global Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icons.Plane className="w-5 h-5 text-purple-600" />
                <span>200+ Airlines</span>
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
          background-size: 80px 80px;
        }
      `}</style>
    </section>
  );
};

export default Destinations;