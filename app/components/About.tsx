// components/AboutUsSection.tsx

const AboutUsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="text-lg mt-4">
            We facilitate efficient trade to improve global trade and drive
            economic growth.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-between gap-10">
          {/* History */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold ">Our History</h3>
            <div>
              <img
                src="/history.jpg"
                alt="History Image"
                className="w-full h-full my-5"
              />
            </div>
            <div className="flex items-center ">
              <p className="text-lg">
                In 2023, LAGIR arose from the need to facilitate foreign trade
                between LATAM and GCC. It was the result of several studies that
                the team of co-founders researchers made in order to promote the
                bi-lateral generation of cargo.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold ">Our Vision</h3>
            <div>
              <img
                src="/vision.jpg"
                alt="Vision Image"
                className="w-full h-full my-5"
              />
            </div>
            <div className="flex items-center ">
              <p className="text-lg">
                By 2027, we envision LAGIR as a leading institution in research
                and facilitation of foreign trade between the Arab world, Latin
                America & Caribbean, setting an example of synergy and
                professionalism.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
