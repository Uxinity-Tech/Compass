import React from "react";


const Contact = () => {
  return (
    <div className="font-inter bg-gray-50 text-gray-900">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-lg">
              <strong>Email:</strong> support@travelease.com
            </p>
            <p className="text-lg">
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p className="text-lg">
              <strong>Address:</strong> 23 MG Road, Kochi, Kerala, India
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
