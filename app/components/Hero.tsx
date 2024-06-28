// components/HeroSection.js
"use client";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import TypingEffect from "./TypingEffect";
import Image from "next/image"; // Import Image component from Next.js
import { motion } from "framer-motion"; // Import motion from Framer Motion

const HeroSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col gap-20 md:flex-row items-center justify-center text-center md:text-left">
        <motion.div 
          className="md:w-1/2 mb-6 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <TypingEffect />
          <p className="mb-4 text-xl text-black">
            Our organization makes it easy for your foreign trade operations,
            market research, and bilateral relations.
          </p>
          <a
            href="https://calendly.com/lagccr/30min"
            className="mt-4 bg-teal-200 hover:bg-teal-400 text-black py-3 px-8 rounded-lg text-lg font-semibold transition duration-300 inline-flex items-center"
          >
            <FaCalendarAlt className="mr-2" />
            Book an Appointment
          </a>
        </motion.div>
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/hero.jpg" // Replace with your actual image path
            alt="Hero Image"
            width={800}
            height={400}
            className="rounded-md shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
