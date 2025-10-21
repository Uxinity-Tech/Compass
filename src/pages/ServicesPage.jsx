import React ,{useEffect}from "react";
import Services from "../components/Services";

const ServicesPage = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }, []);
  return (
    <div className="font-inter bg-gray-50 text-gray-900">
      <section className="max-w-6xl mx-auto px-6 py-0 mb-0">
        <Services />
      </section>
    </div>
  );
};

export default ServicesPage;
