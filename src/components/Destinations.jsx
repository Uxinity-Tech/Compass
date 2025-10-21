import React,{useEffect,useState} from "react";
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
  ),
};

// Enhanced Corporate Destinations (Adjusted for startup phase)
const destinations = [
  {
    name: "Dubai",
    slug: "dubai",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Emerging Business Hub",
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
    subtitle: "European Gateway",
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
    img: "https://images.unsplash.com/photo-1571896349842-33c8c8e8bd8d?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Asia's Rising Star",
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
    name: "Dubai",
    slug: "dubai",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Emerging Business Hub",
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
    subtitle: "European Gateway",
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
    img: "https://images.unsplash.com/photo-1571896349842-33c8c8e8bd8d?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Asia's Rising Star",
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
    name: "Dubai",
    slug: "dubai",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Emerging Business Hub",
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
    subtitle: "European Gateway",
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
    img: "https://images.unsplash.com/photo-1571896349842-33c8c8e8bd8d?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Asia's Rising Star",
    flights: "156+ daily",
    hotels: "280+",
    rating: 4.7,
    travelers: "78K+ monthly",
    featured: true,
    timezone: "SGT (GMT+8)",
    airports: ["SIN"],
    keyClients: ["Singapore Airlines", "DBS Bank"]
  },
  // Removed other destinations to focus on a lean startup launch with 3 key hubs
];

const Destinations = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-slate-100/[0.05]"></div>
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-16 left-10 w-48 h-48 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 bg-indigo-500/5 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/10 border border-blue-200 text-blue-700 text-sm font-semibold mb-6 backdrop-blur-sm">
            <Icons.Plane className="w-4 h-4 mr-2" />
            Launched October 2025
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight"
          >
            Explore Our
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Launch Destinations
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            TravelEase is proud to debut with top business hubs, offering seamless AI-powered travel solutions for your corporate needs.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10 bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-slate-200/50"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Icons.Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">500+</div>
                <div className="text-xs text-slate-600">Early Signups</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Icons.Clock className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">99%</div>
                <div className="text-xs text-slate-600">Beta Satisfaction</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Icons.ShieldCheck className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">3</div>
                <div className="text-xs text-slate-600">Launch Hubs</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RESPONSIVE GRID: 2 on mobile, 3 on sm+, 4 on lg+ */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={`${destination.slug}-${index}`}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-200/60 hover:border-blue-200/80 transition-all duration-300 cursor-pointer"
            >
              {/* Featured Badge */}
              {destination.featured && (
                <div className="absolute top-3 left-3 z-10">
                  <div className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold rounded-full shadow">
                    <Icons.Star className="w-3 h-3 mr-1 fill-current" />
                    Launch Hub
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="relative overflow-hidden rounded-t-2xl aspect-[4/3]">
                <img
                  src={destination.img}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <h3 className="text-lg font-bold">{destination.name}</h3>
                  <p className="text-blue-100 text-xs">{destination.subtitle}</p>
                </div>
              </div>

              {/* Compact Content */}
              <div className="p-3 space-y-2">
                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Icons.Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(destination.rating) ? 'text-amber-400 fill-current' : 'text-slate-300'}`}
                      />
                    ))}
                    <span className="text-xs font-medium text-slate-700 ml-1">({destination.rating})</span>
                  </div>
                  <span className="text-xs text-slate-600">{destination.travelers}</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-2 bg-slate-50 rounded-lg">
                    <div className="font-bold text-slate-800">{destination.hotels}</div>
                    <div className="text-slate-600">Hotels</div>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg">
                    <div className="font-bold text-slate-800">{destination.airports.length}</div>
                    <div className="text-slate-600">Airports</div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={`/destinations/${destination.slug}`}
                  className="flex items-center justify-center w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
                >
                  Book Now
                  <Icons.ChevronRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Join Our Launch Journey
            </h3>
            <p className="text-base sm:text-lg text-slate-600 mb-6">
              Exclusive rates for first 100 companies. Sign up today!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/signup"
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm"
              >
                Sign Up Now
                <Icons.ChevronRight className="inline w-4 h-4 ml-1" />
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2.5 text-slate-700 font-semibold border-2 border-slate-300 rounded-xl hover:bg-slate-50 hover:border-blue-300 hover:text-blue-700 transition-all text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Grid Pattern */}
      <style jsx>{`
        .bg-grid-slate-100 {
          background-image: 
            linear-gradient(rgba(226, 232, 240, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(226, 232, 240, 0.1) 1px, transparent 1px);
          background-size: 100px 100px;
        }
      `}</style>
    </section>
  );
};

export default Destinations;