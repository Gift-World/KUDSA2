import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [visionBgIndex, setVisionBgIndex] = useState(0);
  const [missionBgIndex, setMissionBgIndex] = useState(0);

  const backgrounds = [
    'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3',
  ];

  useEffect(() => {
    const visionInterval = setInterval(() => {
      setVisionBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    const missionInterval = setInterval(() => {
      setMissionBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 6000);

    return () => {
      clearInterval(visionInterval);
      clearInterval(missionInterval);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl group"
            >
              <div
                className="absolute inset-0 transition-transform duration-1000 ease-in-out"
                style={{
                  backgroundImage: `url(${backgrounds[visionBgIndex]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.2,
                }}
              />
              <div className="relative z-10 h-full bg-gradient-to-br from-primary/90 to-secondary/90 p-8 text-white">
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-3xl font-bold mb-6"
                >
                  Vision
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-lg leading-relaxed"
                >
                  To be the leading association championing excellence, inclusivity, and innovation in student affairs for the holistic development of students in Kenyan universities.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl group"
            >
              <div
                className="absolute inset-0 transition-transform duration-1000 ease-in-out"
                style={{
                  backgroundImage: `url(${backgrounds[missionBgIndex]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.2,
                }}
              />
              <div className="relative z-10 h-full bg-gradient-to-bl from-secondary/90 to-primary/90 p-8 text-white">
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-3xl font-bold mb-6"
                >
                  Mission
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-lg leading-relaxed"
                >
                  To promote the welfare and success of students in higher education by providing professional support to Deans of Students, fostering collaboration among universities, and advocating for policies that enhance the student experience.
                </motion.p>
              </div>
            </motion.div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-4">Core Values</h3>
            <ul className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Excellence', desc: 'A commitment to professional engagement in practice and scholarship' },
                { title: 'Integrity', desc: 'A commitment to professional ethics' },
                { title: 'Service', desc: 'A commitment to work that promotes justice' },
                { title: 'Inclusion', desc: 'A commitment to supporting diverse leadership and participation' },
                { title: 'Leadership', desc: 'A commitment to values-based leading and learning' },
                { title: 'Innovation', desc: 'A commitment to new ideas and technologies' },
              ].map((value, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <h4 className="font-semibold text-lg mb-2 text-primary">{value.title}</h4>
                  <p className="text-gray-600">{value.desc}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;