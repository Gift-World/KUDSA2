import { motion } from 'framer-motion';
import { useState } from 'react';

const members = [
  {
    name: 'Lamech Angila',
    position: 'Secretary General',
    university: 'KCA University',
    image: 'data:image/jpeg;base64,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',
  },
  {
    name: 'Prof. Jane Smith',
    position: 'Vice Chairperson',
    university: 'Kenyatta University',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
  },
  {
    name: 'Dr. Michael Johnson',
    position: 'Secretary',
    university: 'Moi University',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3',
  },
  {
    name: 'Dr. Sarah Williams',
    position: 'Treasurer',
    university: 'Strathmore University',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3',
  },
];

const Members = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-primary text-center mb-12"
        >
          KUDSA Team
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-80 rounded-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent flex flex-col justify-end p-6 text-white"
                >
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-200 mb-1">{member.position}</p>
                  <p className="text-sm text-gray-300">{member.university}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members