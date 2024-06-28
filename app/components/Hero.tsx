// components/HeroSection.js
"use client";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import TypingEffect from "./TypingEffect";
import Image from "next/image"; // Import Image component from Next.js

const HeroSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto flex flex-col gap-10 md:flex-row items-center justify-center text-center md:text-left">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <TypingEffect />
          <p className="mb-4 text-xl">
            Our organization makes it easy for your foreign trade operations,
            market research, and bilateral relations.
          </p>
          <a
            href="https://calendly.com/lagccr/30min"
            className="mt-4 bg-teal-200 hover:bg-teal-400 py-3 px-8 rounded-lg text-lg font-semibold transition duration-300 inline-flex items-center"
          >
            <FaCalendarAlt className="mr-2" />
            Book an Appointment
          </a>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/hero.jpg" // Replace with your actual image path
            alt="Hero Image"
            width={800}
            height={400}
            className="rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
