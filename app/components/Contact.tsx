"use client";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  return (
    <section className="shapedividers_com-5711 py-20 bg-gradient-to-b from-teal-800 to-teal-500 text-white">
      <div className="text-center pb-10">
        <h2 className="pt-10 text-4xl font-bold text-gradient-to-b from-teal-800 to-teal-500">
          Contact Us
        </h2>
        <p className="text-lg mt-4">
          We&aposd love to hear from you! Fill out the form below to get in touch
          with us.
        </p>
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center ">
        {/* Sección de la Imagen */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0 md:mr-6">
          <div className="relative h-96 w-full">
            <Image
              src="/contact.jpg"
              alt="LAGCCR Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Sección del Formulario */}
        <div className="w-full md:w-1/2">
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-teal-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-teal-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block font-bold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-teal-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-teal-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button className="bg-teal-800">
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Send</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="pt-20">
        <div className="container mx-auto text-center">
          <p className="mb-4">© Copyright. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" "
            >
              <FaTwitter size={24} />
            </a>
            <a href="mailto:info@example.com" className="">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
