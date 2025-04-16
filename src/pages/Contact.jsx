import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
// import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { Send } from 'lucide-react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null); // Store hCaptcha response

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
        toast.error("Please complete the hCaptcha verification.");
        return;
    }

    setIsSubmitting(true);

    try {
        const response = await fetch('https://kudsa-backend.onrender.com/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.message
            }),
        });

        const result = await response.json();

        if (result.success) {
            toast.success('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
            setCaptchaToken(null); // Reset CAPTCHA
        } else {
            toast.error('Failed to send message. Please try again.');
        }
    } catch (error) {
        console.error(error);
        toast.error('Error sending message.');
    } finally {
        setIsSubmitting(false);
    }
};
 
  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-primary text-center mb-12">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-2xl text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">kudsadeans@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaPhone className="text-2xl text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+254 718 614 091</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-2xl text-primary" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="w-[400px]">
      <h3 className="font-poppins text-2xl font-semibold text-customOrange mb-4 text-center">
        Send us a Message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 bg-white border border-gray-700 rounded-lg text-black placeholder-gray-400"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 bg-white border border-gray-700 rounded-lg text-black placeholder-gray-400"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows="4"
          className="w-full px-4 py-2 bg-white border border-gray-700 rounded-lg text-black placeholder-gray-400 resize-none"
        />
        
        {/* hCaptcha Integration */}
        <HCaptcha
          sitekey="0dd82172-4c0c-4216-936a-6796ff3c8dfe" // Replace with your hCaptcha site key
          onVerify={(token) => setCaptchaToken(token)}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 border-gray-700 hover:bg-white text-black font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2"
        >
          {isSubmitting ? 'Sending...' : <>Send Message <Send size={18} /></>}
        </button>
      </form>
      <Toaster position="bottom-center" />
    </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;