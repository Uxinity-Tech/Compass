import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-gray-900 text-gray-300 py-8 sm:py-10 md:py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 ml-0">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-xl sm:text-2xl tracking-tight">TravelEase</h3>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-prose line-clamp-3">
            Simplifying corporate travel with AI-powered booking, instant compliance, and real-time expense tracking.
          </p>
          <div className="flex space-x-3 sm:space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.307.974.974 1.245 2.242 1.307 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.307 3.608-.974.974-2.242 1.245-3.608 1.307-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.307-.974-.974-1.245-2.242-1.307-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.333-2.633 1.307-3.608.974-.974 2.242-1.245 3.608-1.307 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.013-4.947.072-1.314.059-2.554.325-3.512.884-.96.56-1.768 1.368-2.328 2.328-.559.958-.825 2.198-.884 3.512-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.059 1.314.325 2.554.884 3.512.56.96 1.368 1.768 2.328 2.328.958.559 2.198.825 3.512.884 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.314-.059 2.554-.325 3.512-.884.96-.56 1.768-1.368 2.328-2.328.559-.958.825-2.198.884-3.512.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.059-1.314-.325-2.554-.884-3.512-.56-.96-1.368-1.768-2.328-2.328-.958-.559-2.198-.825-3.512-.884-1.28-.059-1.688-.072-4.947-.072z"/>
                <path d="M12 7.378c-2.552 0-4.622 2.07-4.622 4.622s2.07 4.622 4.622 4.622 4.622-2.07 4.622-4.622-2.07-4.622-4.622-4.622zm0 7.378c-1.681 0-3.04-1.359-3.04-3.04s1.359-3.04 3.04-3.04 3.04 1.359 3.04 3.04-1.359 3.04-3.04 3.04zm0-7.378c-2.552 0-4.622 2.07-4.622 4.622s2.07 4.622 4.622 4.622 4.622-2.07 4.622-4.622-2.07-4.622-4.622-4.622z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.641c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.512c-1.489 0-1.954.925-1.954 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.72-2.165-10.15-5.144-.425.722-.668 1.562-.668 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.397 0-.79-.023-1.176-.068 2.187 1.405 4.778 2.221 7.565 2.221 9.055 0 14.01-7.496 14.01-13.986 0-.213-.005-.426-.014-.637.961-.695 1.8-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-base sm:text-lg">Quick Links</h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Destinations</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-base sm:text-lg">Contact Us</h4>
          <p className="text-xs sm:text-sm text-gray-400">Email: <a href="mailto:support@travelease.com" className="hover:text-white transition-colors">support@travelease.com</a></p>
          <p className="text-xs sm:text-sm text-gray-400">Phone: <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a></p>
          <p className="text-xs sm:text-sm text-gray-400 line-clamp-2">Address: 123 Travel Lane, Mumbai, India</p>
        </div>

        {/* Newsletter Signup */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-base sm:text-lg">Stay Updated</h4>
          <p className="text-xs sm:text-sm text-gray-400">Subscribe for the latest travel deals and updates.</p>
          <form className="flex flex-col gap-2 sm:flex-row sm:gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 sm:px-4 py-2 rounded-lg bg-gray-800 text-gray-300 text-xs sm:text-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800 text-center text-gray-500 text-xs sm:text-sm">
        <p>© {new Date().getFullYear()} TravelEase. All Rights Reserved.</p>
        <p className="mt-1 sm:mt-2">
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a> | 
          <a href="#" className="hover:text-gray-300 transition-colors ml-1 sm:ml-2">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;