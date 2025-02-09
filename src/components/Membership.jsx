import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const Membership = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleButtonClick = () => {
    setIsFormVisible(true);
  };

  const handleFormClose = () => {
    setIsFormVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Membership Interest from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message: ${formData.message}`
    );
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=joy@craftwiseacademy.com&su=${subject}&body=${body}`;
    window.open(mailtoLink, "_blank");
    setIsFormVisible(false);
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

        {isFormVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-lg p-8 max-w-md w-full"
            >
              <h3 className="text-2xl font-bold mb-4 text-black">Express Interest</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-black">Name</label>
                  <input
                    type="text"
                    className="w-full border rounded-md px-3 py-2 text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-black">Email</label>
                  <input
                    type="email"
                    className="w-full border rounded-md px-3 py-2 text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-black">Phone</label>
                  <input
                    type="tel"
                    className="w-full border rounded-md px-3 py-2 text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-black">Message</label>
                  <textarea
                    className="w-full border rounded-md px-3 py-2 text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-4">
                  <motion.button
                    type="button"
                    onClick={handleFormClose}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Membership;
