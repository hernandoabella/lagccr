// components/CounterSection.tsx

const CounterSection = () => {
  // Datos de los contadores
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
    <section className="py-20 bg-teal-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md p-6"
            >
              <h3 className="text-4xl font-bold mb-2 text-gray-900">
                {counter.count}
              </h3>
              <p className="text-lg text-gray-700">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
