// components/ServicesSection.tsx
"use client";
import { FaTruck, FaChartBar, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const ServicesSection = () => {
  // Datos de los servicios
  const services = [
    {
      title: "Trade Facilitation",
      description:
        "We simplify foreign trade operations, market research, and bilateral relations, fostering international trade and economic growth.",
      icon: FaTruck,
    },
    {
      title: "Market Research",
      description:
        "We provide in-depth market research and logistic solutions to stay ahead of economic changes and trade relations.",
      icon: FaChartBar,
    },
    {
      title: "Matchmaking",
      description:
        "We focus on creating synergy and identifying partners that align with your goals to promote international trade.",
      icon: FaHandshake,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-teal-500">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <service.icon className="text-6xl text-teal-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;