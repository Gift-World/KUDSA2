import { useState } from "react";
import { motion } from "framer-motion";
// import { FaCheck } from "react-icons/fa";
import InterestForm from "./InterestForm";

const Membership = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleButtonClick = () => {
    setIsFormVisible(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8">KUDSA Membership</h2>
          <p className="text-xl mb-12">
            Join a passionate and diverse community of Student Affairs Professionals dedicated to
            fulfilling the promise of higher education for every student.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleButtonClick}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg 
                     hover:bg-blue-50 transition-colors duration-300 shadow-lg"
          >
            Join KUDSA Today
          </motion.button>
        </motion.div>

        <InterestForm showForm={isFormVisible} setShowForm={setIsFormVisible} />
      </div>
    </section>
  );
};

export default Membership;