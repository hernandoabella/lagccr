// components/AboutUsSection.tsx
"use client";

import { useState } from "react";
import { FaShippingFast, FaSearchDollar, FaHandshake } from "react-icons/fa";
import CountUp from "react-countup";
import Image from "next/image"; 

const AboutUsSection = () => {
  const counters = [
    {
      count: 1500,
      label: "Trade Operations",
      icon: FaShippingFast,
    },
    {
      count: 2200,
      label: "Market Researches",
      icon: FaSearchDollar,
    },
    {
      count: 900,
      label: "Bilateral Relations",
      icon: FaHandshake,
    },
  ];

  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <section className="py-20 shapedividers_com-1700 bg-gradient-to-t from-teal-900 to-teal-500 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="text-xl mt-4">
            We facilitate efficient trade to improve global trade and drive
            economic growth.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-between gap-20">
          {/* History */}
          <div className="md:w-1/2 mb-8 md:mb-0 bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image */}
            <div className="relative w-full h-80">
              <Image
                src="/history.jpg"
                alt="History Image"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Title */}
              <h3 className="text-3xl font-bold mb-4 text-teal-500">
                Our History
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed">
                In 2023, LAGIR was founded to streamline foreign trade
                operations between LATAM and GCC. It originated from extensive
                research conducted by our team of co-founders, aimed at
                enhancing bilateral cargo generation.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="md:w-1/2 mb-8 md:mb-0 bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image */}
            <div className="relative w-full h-80">
              <Image
                src="/vision.jpg"
                alt="Vision Image"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Title */}
              <h3 className="text-3xl font-bold mb-4 text-teal-500">
                Our Vision
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed">
                By 2027, we envision LAGIR as a leading institution in research
                and facilitation of foreign trade between the Arab world, Latin
                America & Caribbean, setting an example of synergy and
                professionalism.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center p-20">
        <h2 className="text-4xl font-bold mb-12">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {counters.map((counter, index) => (
            <div key={index} className="overflow-hidden p-6">
              <counter.icon className="text-6xl mb-4 text-teal-200 mx-auto" />
              <CountUp
                start={isAnimated ? 0 : undefined}
                end={counter.count}
                duration={5}
                redraw={true}
                suffix="+"
              >
                {({ countUpRef, start }) => (
                  <h3
                    className="text-4xl font-bold mb-2 cursor-pointer"
                    onClick={() => {
                      setIsAnimated(true);
                      start();
                    }}
                  >
                    <span ref={countUpRef}>{counter.count}</span>
                  </h3>
                )}
              </CountUp>
              <p className="text-lg">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
