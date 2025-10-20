import React from "react";
import Services from "../components/Services";

const ServicesPage = () => {
  return (
    <div className="font-inter bg-gray-50 text-gray-900">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Our Services</h1>
        <p className="text-gray-700 leading-relaxed mb-12">
          Explore our full range of travel booking services, designed to make your journey easy, 
          comfortable, and affordable.
        </p>
        <Services />
      </section>
    </div>
  );
};

export default ServicesPage;
