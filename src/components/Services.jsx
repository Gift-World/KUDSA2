import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaUsers, FaHandshake, FaBrain, FaNetworkWired, FaBalanceScale, FaBook, FaBriefcase } from 'react-icons/fa';

const services = [
  {
    icon: FaGraduationCap,
    title: 'Professional Development',
    description: 'Training, workshops, and conferences for Deans of Students'
  },
  {
    icon: FaUsers,
    title: 'Student Leadership Development',
    description: 'Mentorship and leadership programs for university student leaders'
  },
  {
    icon: FaHandshake,
    title: 'Advocacy and Policy',
    description: 'Developing policies that address student needs and promote inclusivity'
  },
  {
    icon: FaBrain,
    title: 'Mental Health Programs',
    description: 'Supporting mental health awareness and counseling initiatives'
  },
  {
    icon: FaNetworkWired,
    title: 'Networking',
    description: 'Creating opportunities to share best practices and research'
  },
  {
    icon: FaBalanceScale,
    title: 'Conflict Resolution',
    description: 'Guidance and support for student-related conflicts'
  },
  {
    icon: FaBook,
    title: 'Resource Sharing',
    description: 'Access to tools and resources for student affairs management'
  },
  {
    icon: FaBriefcase,
    title: 'Career Support',
    description: 'Career guidance and internship opportunities for students'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Our Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <service.icon className="text-4xl text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;