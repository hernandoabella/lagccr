// components/Header.js
"use client";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const Header = () => {
  return (
    <header className="bg-white py-4">
      <motion.div
        className="container mx-auto flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <div className="mb-2">
          <img src="/logo.png" alt="LAGCCR Logo" className="h-60" />
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4">
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a
                href="#"
                className="text-gray-800 hover:text-teal-500 transition-colors duration-300"
              >
                About Us
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a
                href="#"
                className="text-gray-800 hover:text-teal-500 transition-colors duration-300"
              >
                Services
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a
                href="#"
                className="text-gray-800 hover:text-teal-500 transition-colors duration-300"
              >
                Team
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a
                href="#"
                className="text-gray-800 hover:text-teal-500 transition-colors duration-300"
              >
                Contact
              </a>
            </motion.li>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
