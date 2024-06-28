// components/AboutUsSection.tsx

const AboutUsSection = () => {
  const counters = [
    {
      count: "1.5k+",
      label: "Trade Operations",
    },
    {
      count: "2.2k+",
      label: "Market Researches",
    },
    {
      count: "900+",
      label: "Bilateral Relations",
    },
  ];
  return (
    <section className="py-20 shapedividers_com-1700 bg-gradient-to-t from-teal-900 to-teal-500 text-white">
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
            <h3 className="text-3xl font-bold ">History</h3>
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
            <h3 className="text-3xl font-bold ">Vision</h3>
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

      <div className="container mx-auto px-6 text-center p-20">
        <h2 className="text-4xl font-bold mb-12">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {counters.map((counter, index) => (
            <div key={index} className="overflow-hidden p-6">
              <h3 className="text-4xl font-bold mb-2 ">{counter.count}</h3>
              <p className="text-lg ">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
