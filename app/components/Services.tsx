// components/ServicesSection.tsx

const ServicesSection = () => {
  // Datos de los servicios
  const services = [
    {
      title: "Trade Facilitation",
      description:
        "We simplify foreign trade operations, market research, and bilateral relations, fostering international trade and economic growth.",
      icon: "/trade-research", // Reemplazar con la ruta real del icono
    },
    {
      title: "Market Research",
      description:
        "We provide in-depth market research and logistic solutions to stay ahead of economic changes and trade relations.",
      icon: "/market-research", // Reemplazar con la ruta real del icono
    },
    {
      title: "Matchmaking",
      description:
        "We focus on creating synergy and identifying partners that align with your goals to promote international trade.",
      icon: "/match-making.jpg", // Reemplazar con la ruta real del icono
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-12 text-teal-500">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100  overflow-hidden shadow-md p-6 text-center"
            >
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
