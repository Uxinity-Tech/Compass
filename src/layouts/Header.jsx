import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Star, Shield, Clock, Zap, Phone, Mail } from "lucide-react";

// Custom Icons
const Icons = {
  Logo: ({ className = "w-8 h-8" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),

  Airplane: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),

  Users: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.707-6.307-1.92m0 0a9.859 9.859 0 013.214-2.141 9.864 9.864 0 005.213-2.141M15 19.128v-.003" />
    </svg>
  ),

  Zap: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),

  Shield: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3.36 1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),

  Clock: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),

  CheckCircle: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),

  Phone: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),

  Mail: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0V5.25A2.25 2.25 0 0019.5 3H5.25a2.25 2.25 0 00-2.25 2.25V6.75z" />
    </svg>
  )
};

// Navigation Items
const navItems = [
  { id: "home", label: "Home", href: "/", isActive: (path) => path === "/" },
  { 
    id: "About", 
    label: "About", 
    href: "/about", 
    isActive: (path) => path.startsWith("/platform"),
    // dropdown: [
    //   { label: "Booking Engine", href: "/platform/booking" },
    //   { label: "Expense Integration", href: "/platform/expenses" },
    //   { label: "API Documentation", href: "/platform/api" },
    //   { label: "Mobile App", href: "/platform/mobile" }
    // ]
  },
  { 
    id: "solutions", 
    label: "Destinations", 
    href: "/destinations", 
    isActive: (path) => path.startsWith("/solutions"),
    // dropdown: [
    //   { label: "Startups", href: "/solutions/startups" },
    //   { label: "SMB", href: "/solutions/smb" },
    //   { label: "Enterprise", href: "/solutions/enterprise" },
    //   { label: "Remote Teams", href: "/solutions/remote" }
    // ]
  },
  { id: "pricing", label: "Services", href: "/services", isActive: (path) => path === "/pricing" },
  { id: "resources", label: "Booking", href: "/booking", isActive: (path) => path.startsWith("/resources") },
  { id: "company", label: "Contact", href: "/contact", isActive: (path) => path.startsWith("/company") }
];

// Trust Metrics
const trustMetrics = {
  bookings: "127",
  companies: "47",
  uptime: "99.9%",
  response: "2.1 min"
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (item) => typeof item.isActive === "function" ? item.isActive(location.pathname) : false;

  return (
    <header className={`
      fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? 'bg-white/95 shadow-lg backdrop-blur-xl' : 'bg-white/80 shadow-sm backdrop-blur-md'}
      border-b border-slate-200/50
    `}>
      {/* Top Bar - Launch Status & Quick Actions */}
      <motion.div 
        className="hidden lg:flex items-center justify-between px-6 py-2 bg-gradient-to-r from-emerald-600/90 to-blue-600/90 text-white text-sm font-medium backdrop-blur-md"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: scrolled ? 0 : 32, opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Icons.Zap className="w-4 h-4" />
            <span>🚀 Launch Week: 25% OFF First Booking</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Icons.Clock className="w-3.5 h-3.5" />
              <span>2.1 min response</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icons.Shield className="w-3.5 h-3.5" />
              <span>99.9% uptime</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icons.Users className="w-3.5 h-3.5" />
              <span>47 companies</span>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center space-x-4">
          <Link to="/early-access" className="hover:underline">Early Access</Link>
          <Link to="/demo" className="hover:underline">Book Demo</Link>
        </div> */}
      </motion.div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div className="flex items-center space-x-3">
            <Link to="/">
              <motion.div 
                className="flex items-center space-x-2 p-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icons.Logo className="w-6 h-6 text-white" />
                <span className="text-white font-bold text-xl tracking-tight">TravelEase</span>
              </motion.div>
            </Link>
            {/* Launch Badge */}
            <motion.div 
              className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-bold rounded-full shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 400, damping: 15 }}
            >
              <Icons.Zap className="w-3 h-3 mr-1" />
              Launched Yesterday
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.id} className="relative group">
                  <Link
                    to={item.href}
                    className={`
                      flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200
                      ${isActive(item) 
                        ? 'bg-blue-50 text-blue-700 shadow-sm' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }
                    `}
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.label}</span>
                    {item.dropdown && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.id ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </Link>
                  
                  {/* Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === item.id && item.dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100/50 backdrop-blur-sm z-50 py-2"
                      >
                        {item.dropdown.map((subItem, index) => (
                          <Link
                            key={index}
                            to={subItem.href}
                            className="flex items-center px-4 py-3 text-sm text-slate-700 hover:bg-blue-50/50 hover:text-blue-700 transition-colors w-full"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="flex-1">{subItem.label}</span>
                            <ChevronRight className="w-4 h-4 opacity-50" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Trust Metrics */}
            <motion.div 
              className="hidden xl:flex items-center space-x-6 mr-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center space-x-4 text-xs text-slate-500 font-medium bg-white/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-slate-200/50">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <Icons.Zap className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{trustMetrics.bookings}</span>
                  </div>
                  <span className="h-4 w-px bg-slate-200"></span>
                  <div className="flex items-center space-x-1">
                    <Icons.Users className="w-3.5 h-3.5 text-blue-600" />
                    <span>{trustMetrics.companies}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
    <div className="flex justify-center md:justify-start mt-6">
  <Link
    to="/contact"
    className="inline-flex whitespace-nowrap items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-blue-600 
               text-white font-semibold text-sm rounded-xl shadow-lg
               hover:shadow-xl hover:from-emerald-700 hover:to-blue-700
               transition-all duration-200 transform hover:-translate-y-0.5"
  >
    Contact Us
  </Link>
              {/* <Link
                to="/early-access"
                className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold text-sm rounded-xl shadow-lg hover:shadow-xl hover:from-emerald-700 hover:to-blue-700 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Join Early
                <Icons.Zap className="w-4 h-4 ml-2" />
              </Link> */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/50"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="px-4 py-6 space-y-4"
            >
              {/* Mobile Navigation */}
              <div className="space-y-2">
                {navItems.map((item) => (
                  <div key={item.id}>
                    <Link
                      to={item.href}
                      className={`
                        flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-medium transition-all duration-200
                        ${isActive(item) 
                          ? 'bg-blue-50 text-blue-700 shadow-sm' 
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                        }
                      `}
                      onClick={() => {
                        setMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                    >
                      <span>{item.label}</span>
                      {item.dropdown && <ChevronDown className="w-5 h-5" />}
                    </Link>
                    
                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === item.id && item.dropdown && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="ml-6 mt-2 space-y-2"
                        >
                          {item.dropdown.map((subItem, index) => (
                            <Link
                              key={index}
                              to={subItem.href}
                              className="flex items-center px-4 py-2 text-sm text-slate-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                              onClick={() => {
                                setMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile Trust Metrics */}
              <div className="pt-6 border-t border-slate-200/50">
                <div className="flex items-center justify-center space-x-6 text-sm text-slate-600 mb-6">
                  <div className="flex items-center space-x-2">
                    <Icons.Zap className="w-4 h-4 text-emerald-600" />
                    <span>{trustMetrics.bookings} bookings</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icons.Users className="w-4 h-4 text-blue-600" />
                    <span>{trustMetrics.companies} companies</span>
                  </div>
                </div>

                {/* Mobile CTAs */}
                <div className="space-y-3">
                  <Link
                    to="/demo"
                    className="w-full flex items-center justify-center px-6 py-3 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Book Demo
                  </Link>
                  <Link
                    to="/early-access"
                    className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold text-base rounded-xl shadow-lg hover:shadow-xl hover:from-emerald-700 hover:to-blue-700 transition-all duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Icons.Zap className="w-4 h-4 mr-2" />
                    Join Early Access
                  </Link>
                </div>

                {/* Quick Contact */}
                <div className="pt-6 border-t border-slate-200/50">
                  <div className="text-center space-y-3">
                    <p className="text-sm text-slate-600">Need help immediately?</p>
                    <div className="flex items-center justify-center space-x-4 text-sm">
                      <button className="flex items-center space-x-2 px-3 py-2 text-emerald-600 hover:text-emerald-700 transition-colors">
                        <Icons.Phone className="w-4 h-4" />
                        <span>+1 (555) 123-4567</span>
                      </button>
                      <button className="flex items-center space-x-2 px-3 py-2 text-blue-600 hover:text-blue-700 transition-colors">
                        <Icons.Mail className="w-4 h-4" />
                        <span>hello@travelease.com</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;