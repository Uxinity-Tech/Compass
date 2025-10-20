import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";

// Formal Business Icons
const Icons = {
  MapPin: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),

  Plane: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),

  Building: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m0 2.25h.75m9-11.25h-3v11.25h3V7.5z" />
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

  ChevronDown: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  ),

  Search: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),

  Filter: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h16.5M3 9h16.5M3 13.5h16.5M3 18h16.5" />
    </svg>
  ),

  Star: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
};

// Comprehensive Global Destinations Database
const allDestinations = [
  // Middle East
  {
    name: "Dubai", slug: "dubai", region: "Middle East", continent: "Asia",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Business Capital", flights: "127+", hotels: "450+", rating: 4.8, travelers: "45K+",
    timezone: "GMT+4", airports: ["DXB", "DWC"], keyClients: ["Emirates", "DP World"],
    featured: true, priority: 1
  },
  {
    name: "Riyadh", slug: "riyadh", region: "Middle East", continent: "Asia",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Vision 2030 Hub", flights: "89+", hotels: "210+", rating: 4.6, travelers: "28K+",
    timezone: "AST (GMT+3)", airports: ["RUH"], keyClients: ["Aramco", "NEOM"],
    featured: false, priority: 3
  },

  // Europe
  {
    name: "Paris", slug: "paris", region: "Western Europe", continent: "Europe",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
    subtitle: "European Hub", flights: "89+", hotels: "320+", rating: 4.9, travelers: "62K+",
    timezone: "CET (GMT+1)", airports: ["CDG", "ORY"], keyClients: ["Air France", "LVMH"],
    featured: true, priority: 2
  },
  {
    name: "London", slug: "london", region: "UK", continent: "Europe",
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Global Finance", flights: "198+", hotels: "540+", rating: 4.8, travelers: "95K+",
    timezone: "GMT", airports: ["LHR", "LGW", "STN"], keyClients: ["HSBC", "Barclays"],
    featured: true, priority: 1
  },
  {
    name: "Frankfurt", slug: "frankfurt", region: "Germany", continent: "Europe",
    img: "https://images.unsplash.com/photo-1559885338-fd6c23bc7c8f?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Financial Center", flights: "156+", hotels: "280+", rating: 4.7, travelers: "41K+",
    timezone: "CET (GMT+1)", airports: ["FRA"], keyClients: ["Deutsche Bank", "Commerzbank"],
    featured: false, priority: 2
  },

  // Asia Pacific
  {
    name: "Singapore", slug: "singapore", region: "Southeast Asia", continent: "Asia",
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Asia Gateway", flights: "156+", hotels: "280+", rating: 4.7, travelers: "78K+",
    timezone: "SGT (GMT+8)", airports: ["SIN"], keyClients: ["Singapore Airlines", "DBS Bank"],
    featured: true, priority: 1
  },
  {
    name: "Tokyo", slug: "tokyo", region: "Japan", continent: "Asia",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Tech Innovation", flights: "89+", hotels: "410+", rating: 4.9, travelers: "53K+",
    timezone: "JST (GMT+9)", airports: ["NRT", "HND"], keyClients: ["Sony", "Toyota"],
    featured: true, priority: 2
  },
  {
    name: "Hong Kong", slug: "hong-kong", region: "China", continent: "Asia",
    img: "https://images.unsplash.com/photo-1554217367-bd589f368dbb?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Financial Hub", flights: "123+", hotels: "380+", rating: 4.6, travelers: "67K+",
    timezone: "HKT (GMT+8)", airports: ["HKG"], keyClients: ["HSBC", "CK Hutchison"],
    featured: false, priority: 3
  },

  // North America
  {
    name: "New York", slug: "new-york", region: "USA East Coast", continent: "North America",
    img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Financial Center", flights: "234+", hotels: "680+", rating: 4.6, travelers: "120K+",
    timezone: "EST (GMT-5)", airports: ["JFK", "LGA", "EWR"], keyClients: ["JPMorgan", "Goldman Sachs"],
    featured: true, priority: 1
  },
  {
    name: "San Francisco", slug: "san-francisco", region: "USA West Coast", continent: "North America",
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Tech Capital", flights: "189+", hotels: "420+", rating: 4.8, travelers: "89K+",
    timezone: "PST (GMT-8)", airports: ["SFO"], keyClients: ["Salesforce", "Oracle"],
    featured: true, priority: 2
  },

  // Additional Major Hubs
  {
    name: "Sydney", slug: "sydney", region: "Australia", continent: "Oceania",
    img: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=1200&q=85",
    subtitle: "APAC Gateway", flights: "76+", hotels: "290+", rating: 4.7, travelers: "34K+",
    timezone: "AEST (GMT+10)", airports: ["SYD"], keyClients: ["Qantas", "Commonwealth Bank"],
    featured: false, priority: 3
  },
  {
    name: "Toronto", slug: "toronto", region: "Canada", continent: "North America",
    img: "https://images.unsplash.com/photo-1559809479-9cebcdeebfac?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Canadian Hub", flights: "98+", hotels: "250+", rating: 4.6, travelers: "29K+",
    timezone: "EST (GMT-5)", airports: ["YYZ"], keyClients: ["RBC", "TD Bank"],
    featured: false, priority: 4
  }
];

// Filter Categories
const regions = [...new Set(allDestinations.map(d => d.region))].sort();
const continents = [...new Set(allDestinations.map(d => d.continent))].sort();

const AllDestinations = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedRegion, setSelectedRegion] = useState(searchParams.get('region') || '');
  const [selectedContinent, setSelectedContinent] = useState(searchParams.get('continent') || '');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  // Filter destinations
  const filteredDestinations = allDestinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = !selectedRegion || destination.region === selectedRegion;
    const matchesContinent = !selectedContinent || destination.continent === selectedContinent;
    return matchesSearch && matchesRegion && matchesContinent;
  });

  // Update URL params
  const updateFilters = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    if (selectedRegion) params.set('region', selectedRegion);
    if (selectedContinent) params.set('continent', selectedContinent);
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedRegion('');
    setSelectedContinent('');
    setSearchParams({});
  };

  const DestinationCard = ({ destination, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-xl border border-slate-200/60 hover:border-blue-200/80 transition-all duration-500 cursor-pointer h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-blue-900/5"></div>
      
      {destination.featured && (
        <div className="absolute top-4 left-4 z-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold rounded-full shadow-lg">
            <Icons.Star className="w-3 h-3 mr-1 fill-current" />
            Priority Hub
          </div>
        </div>
      )}

      <div className="relative overflow-hidden rounded-t-3xl aspect-[4/3]">
        <img
          src={destination.img}
          alt={`${destination.name} Business Destination`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/20 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
              <p className="text-blue-100 font-medium">{destination.subtitle}</p>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Icons.Plane className="w-4 h-4" />
              <span className="text-sm font-semibold">{destination.flights}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-8">
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
            <div className="text-xs text-slate-500">Monthly Travelers</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-slate-50/50 rounded-xl group-hover:bg-blue-50/50 transition-colors">
            <div className="text-lg font-bold text-slate-800">{destination.hotels}</div>
            <div className="text-xs text-slate-600 uppercase tracking-wide">Hotels</div>
          </div>
          <div className="text-center p-3 bg-slate-50/50 rounded-xl group-hover:bg-blue-50/50 transition-colors">
            <Icons.Building className="w-5 h-5 text-blue-600 mx-auto mb-1" />
            <div className="text-xs text-slate-600 uppercase tracking-wide">Business Districts</div>
          </div>
          <div className="text-center p-3 bg-slate-50/50 rounded-xl group-hover:bg-blue-50/50 transition-colors">
            <div className="text-lg font-bold text-slate-800">{destination.airports.length}</div>
            <div className="text-xs text-slate-600 uppercase tracking-wide">Airports</div>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between py-2 px-3 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/40 hover:bg-blue-50/30 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm font-medium text-slate-700">Region</span>
            </div>
            <div className="text-sm font-medium text-slate-800">{destination.region}</div>
          </div>
          <div className="flex items-center justify-between py-2 px-3 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/40 hover:bg-blue-50/30 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
              <span className="text-sm font-medium text-slate-700">Time Zone</span>
            </div>
            <div className="text-sm font-medium text-slate-800">{destination.timezone}</div>
          </div>
        </div>

        <Link
          to={`/destinations/${destination.slug}`}
          className="group/btn flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
        >
          <span className="mr-3">View {destination.name} Details</span>
          <motion.div
            className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full group-hover:bg-white/30"
            whileHover={{ scale: 1.1, rotate: 90 }}
          >
            <Icons.ChevronRight className="w-4 h-4 text-white" />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Professional Header */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-r from-slate-900 via-blue-900/20 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-8">
            <Icons.MapPin className="w-4 h-4 mr-2" />
            Global Business Destinations Directory
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            Complete
            <span className="bg-gradient-to-r from-blue-400 via-white to-indigo-300 bg-clip-text text-transparent">
              {" "}Destination Directory
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Explore 100+ global business destinations with comprehensive travel intelligence,
            corporate infrastructure details, and policy-compliant booking options.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-12 text-sm font-medium mb-16"
          >
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
              <Icons.Building className="w-6 h-6 text-blue-300" />
              <div>
                <div className="text-2xl font-bold">75+</div>
                <div>Countries</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
              <Icons.Plane className="w-6 h-6 text-emerald-300" />
              <div>
                <div className="text-2xl font-bold">1,200+</div>
                <div>Airport Connections</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
              <Icons.Users className="w-6 h-6 text-purple-300" />
              <div>
                <div className="text-2xl font-bold">2M+</div>
                <div>Annual Bookings</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="relative py-16 lg:py-20">
        <div className="absolute inset-0 bg-grid-slate-100/[0.1]"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Search & Filters Bar */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-slate-200/50 p-6 lg:p-8 mb-12">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Icons.Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search destinations (e.g., New York, London...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && updateFilters()}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200/50 rounded-2xl text-lg placeholder-slate-500 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all duration-300"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                  className={`px-4 py-2 rounded-xl border-2 font-semibold transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-md'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {viewMode === 'grid' ? 'Grid View' : 'List View'}
                </button>
                <button
                  onClick={updateFilters}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Apply Filters
                </button>
                {(searchQuery || selectedRegion || selectedContinent) && (
                  <button
                    onClick={clearFilters}
                    className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-all duration-300"
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-slate-200/50">
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center">
                  <Icons.MapPin className="w-4 h-4 mr-2 text-blue-600" />
                  Region
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedRegion(selectedRegion ? '' : regions[0])}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedRegion
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {selectedRegion || 'All Regions'}
                  </button>
                  {selectedRegion && (
                    <div className="flex flex-wrap gap-2 max-w-xs overflow-x-auto pb-2">
                      {regions.slice(0, 6).map(region => (
                        <button
                          key={region}
                          onClick={() => setSelectedRegion(region)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                            selectedRegion === region
                              ? 'bg-blue-600 text-white shadow-sm'
                              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                          }`}
                        >
                          {region}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center">
                  <Icons.Building className="w-4 h-4 mr-2 text-emerald-600" />
                  Continent
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedContinent(selectedContinent ? '' : continents[0])}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedContinent
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {selectedContinent || 'All Continents'}
                  </button>
                  {selectedContinent && (
                    <div className="flex flex-wrap gap-2 max-w-xs overflow-x-auto pb-2">
                      {continents.slice(0, 6).map(continent => (
                        <button
                          key={continent}
                          onClick={() => setSelectedContinent(continent)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                            selectedContinent === continent
                              ? 'bg-emerald-600 text-white shadow-sm'
                              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                          }`}
                        >
                          {continent}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Results Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                {filteredDestinations.length} Business Destinations
              </h2>
              <p className="text-slate-600">
                {selectedRegion && `in ${selectedRegion} • `}
                {selectedContinent && `in ${selectedContinent} • `}
                Policy-compliant travel options available
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Icons.ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Travel Policy Compliant</span>
              <Icons.Clock className="w-4 h-4 ml-4 text-blue-600" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="relative pb-24 lg:pb-32">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {filteredDestinations.map((destination, index) => (
                <DestinationCard key={destination.slug} destination={destination} index={index} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.slug}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-slate-200/60 hover:border-blue-200/80 transition-all duration-500 overflow-hidden"
                >
                  {/* List view content would go here */}
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <img
                        src={destination.img}
                        alt={destination.name}
                        className="w-32 h-32 object-cover rounded-xl flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-4">
                          <h3 className="text-2xl font-bold text-slate-900">{destination.name}</h3>
                          <div className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full">
                            {destination.region}
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-6 mb-6 text-sm">
                          <div className="space-y-1">
                            <div className="text-slate-600 font-medium">Flights</div>
                            <div className="text-lg font-bold text-slate-900">{destination.flights}</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-slate-600 font-medium">Hotels</div>
                            <div className="text-lg font-bold text-slate-900">{destination.hotels}</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-slate-600 font-medium">Rating</div>
                            <div className="text-lg font-bold text-amber-600">{destination.rating}</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-slate-600 font-medium">Travelers</div>
                            <div className="text-lg font-bold text-slate-900">{destination.travelers}</div>
                          </div>
                        </div>
                        <Link
                          to={`/destinations/${destination.slug}`}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
                        >
                          View Destination
                          <Icons.ChevronRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredDestinations.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-24"
            >
              <Icons.Search className="w-24 h-24 text-slate-300 mx-auto mb-8" />
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">No destinations found</h3>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                Try adjusting your search terms or filters to find business travel destinations.
              </p>
              <button
                onClick={clearFilters}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Clear Filters & Search Again
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Grid Pattern CSS */}
      <style jsx>{`
        .bg-grid-slate-100 {
          background-image: 
            linear-gradient(rgba(226, 232, 240, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(226, 232, 240, 0.1) 1px, transparent 1px);
          background-size: 80px 80px;
        }
      `}</style>
    </div>
  );
};

export default AllDestinations;