import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div id='about' className=" bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
          <motion.h1 
              className="text-4xl font-montserrat font-bold text-gray-600 mb-7  "
              initial={{ opacity: 0.4, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              
            >
              About Kudsa
            </motion.h1>
            <motion.h1 
              className=" font-montserrat text-3xl font-medium text-gray-900 mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              THE KENYA UNIVERISTY DEANS OF STUDENTS ASS0CIATION:
              <span className="block font-montserrat font-bold text-orange-500">Empowering Student Affairs.</span>
            </motion.h1>
            <motion.p 
              className=" font-montserrat font-medium text-[18px] text-black mb-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              
            >
The Kenya Universities Deans of Students Association (KUDSA) is a professional body that brings together Deans of Students from universities across Kenya. Established to foster collaboration, mentorship, and innovation in student affairs. </motion.p>
            <motion.p 
              className="font-montserrat font-medium text-[18px] text-black mb-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
    
            >
 KUDSA serves as a platform for sharing best practices, addressing emerging challenges, and advocating for the holistic development of students in higher education institutions. Through strategic partnerships and impactful programs, KUDSA empowers student leaders, promotes mental health awareness, and supports initiatives aimed at enhancing the quality of student life.  </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <img 
              src="https://i.imgur.com/kpepVGn.jpeg"
              alt="Professional training session"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-20" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-orange-500 rounded-full opacity-10" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;