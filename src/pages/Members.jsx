import { motion } from 'framer-motion';
import { useState } from 'react';

const members = [
  {
    name: 'Dr. John Doe',
    position: 'Chairperson',
    university: 'University of Nairobi',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3',
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
          KUDSA Members
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