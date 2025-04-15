import { motion } from 'framer-motion';
import { useState } from 'react';

const InterestForm = ({ showForm, setShowForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const subject = encodeURIComponent(`KUDSA Interest from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Institution: ${formData.institution}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message: ${formData.message}`
    );
  
    const gmailWebLink = `https://mail.google.com/mail/?view=cm&fs=1&to=kudsadeans@gmail.com&su=${subject}&body=${body}`;
    const mailtoLink = `mailto:kudsadeans@gmail.com?subject=${subject}&body=${body}`;
    const gmailIntent = `intent://compose?to=kudsadeans@gmail.com&subject=${subject}&body=${body}#Intent;scheme=mailto;package=com.google.android.gm;end;`;
  
    if (/Android/i.test(navigator.userAgent)) {
      window.location.href = gmailIntent;
    } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = mailtoLink;
    } else {
      const newTab = window.open(gmailWebLink, "_blank");
      setTimeout(() => {
        if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
          window.location.href = mailtoLink;
        }
      }, 1000);
    }
  
    setShowForm(false);
  };

  if (!showForm) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setShowForm(false);
        }
      }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-white rounded-lg p-8 max-w-md w-full relative"
      >
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Join KUDSA</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Name</label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Institution</label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              value={formData.institution}
              onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border rounded-md px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Phone</label>
            <input
              type="tel"
              className="w-full border rounded-md px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Message</label>
            <textarea
              className="w-full border rounded-md px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <motion.button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default InterestForm;