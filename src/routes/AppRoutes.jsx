import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import ServicesPage from "../pages/ServicesPage";
import Contact from "../pages/Contact";
import Booking from "../pages/Booking";
import Destinations from "../components/Destinations";
import AllDestinations from "../components/AllDestinations";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* ✅ Shared Layout Route */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/all-destinations" element={<AllDestinations />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
