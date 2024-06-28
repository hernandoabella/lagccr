// components/TeamSection.tsx

const TeamSection = () => {
  // Datos del equipo
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO",
      description:
        "John Doe is the co-founder and CEO of LAGIR. He has over 15 years of experience in international trade facilitation.",
      image: "/team1.jpg", // Reemplazar con la ruta real de la imagen
    },
    {
      name: "Jane Smith",
      position: "COO",
      description:
        "Jane Smith is the Chief Operating Officer at LAGIR. She oversees daily operations and strategic initiatives.",
      image: "/team2.jpg", // Reemplazar con la ruta real de la imagen
    },
    {
      name: "Emily Johnson",
      position: "CFO",
      description:
        "Emily Johnson is the Chief Financial Officer at LAGIR. She is responsible for managing the financial actions of the company.",
      image: "/team3.jpg", // Reemplazar con la ruta real de la imagen
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-teal-500">
          Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={member.image}
                alt={`${member.name} - ${member.position}`}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-700 mb-4">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
