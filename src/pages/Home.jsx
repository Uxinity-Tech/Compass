import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Destinations from "../components/Destinations";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div className="font-inter bg-gray-50 text-gray-900">
      <Hero />
      <Services />
      <Destinations />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
