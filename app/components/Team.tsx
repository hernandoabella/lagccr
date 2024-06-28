// components/TeamSection.tsx
"use client";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const TeamSection = () => {
  // Datos del equipo
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      image: "/team1.jpg", // Reemplazar con la ruta real de la imagen
    },
    {
      name: "Jane Smith",
      position: "COO",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      image: "/team2.jpg", // Reemplazar con la ruta real de la imagen
    },
    {
      name: "Emily Johnson",
      position: "CFO",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
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
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={member.image}
                alt={`${member.name} - ${member.position}`}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6 bg-gradient-to-t from-teal-600 via-teal-500 to-teal-600 text-white">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-200 mb-4 text-lg">{member.position}</p>
                <p className="text-gray-100">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
