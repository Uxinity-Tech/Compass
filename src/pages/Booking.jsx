import React from "react";

const Booking = () => {
  return (
    <div className="font-inter bg-gray-50 text-gray-900">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Book Your Trip</h1>
        <p className="text-gray-700 mb-12">
          Choose your preferred mode of travel and start your adventure.
        </p>

        <form className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="p-3 border border-gray-300 rounded-lg" required />
            <input type="email" placeholder="Email Address" className="p-3 border border-gray-300 rounded-lg" required />
            <input type="text" placeholder="From Location" className="p-3 border border-gray-300 rounded-lg" required />
            <input type="text" placeholder="To Location" className="p-3 border border-gray-300 rounded-lg" required />
            <input type="date" className="p-3 border border-gray-300 rounded-lg" required />
            <select className="p-3 border border-gray-300 rounded-lg">
              <option>Choose Service</option>
              <option>Flight</option>
              <option>Bus</option>
              <option>Train</option>
              <option>Tour Package</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Confirm Booking
          </button>
        </form>
      </section>
    </div>
  );
};

export default Booking;
