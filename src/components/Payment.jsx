import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaCopy, FaCheckCircle } from 'react-icons/fa';

const DonationInfo = () => {
  const [copiedBank, setCopiedBank] = useState({
    kcb: false,
    equity: false,
    national: false,
    mpesa: false
  });
  
  const bankDetails = {
    kcb: {
      bankName: "Kenya Commercial Bank",
      branchName: "Embu Branch",
    //   accountName: "Community Support Fund",
      accountNumber: "1272329089"
    }
  };
  

  
  const copyToClipboard = (text, bank) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedBank(prev => ({
        ...prev,
        [bank]: true
      }));
      setTimeout(() => {
        setCopiedBank(prev => ({
          ...prev,
          [bank]: false
        }));
      }, 2000);
    });
  };
  
  const BankCard = ({ details, bankKey }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="bg-blue-600 p-4 flex items-center">
        <FaUniversity className="text-white text-2xl mr-3" />
        <h3 className="text-white font-semibold text-xl">{details.bankName}</h3>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {/* <div>
            <p className="text-sm text-gray-500">Branch</p>
            <p className="font-medium text-gray-800">{details.branchName}</p>
          </div> */}
          
          {/* <div>
            <p className="text-sm text-gray-500">Account Name</p>
            <p className="font-medium text-gray-800">{details.accountName}</p>
          </div> */}
          
          <div>
            <p className="text-sm text-gray-500">Account Number</p>
            <div className="flex items-center mt-1">
              <p className="font-bold text-gray-800 tracking-wider">{details.accountNumber}</p>
              <button 
                onClick={() => copyToClipboard(details.accountNumber, bankKey)}
                className="ml-3 text-blue-600 hover:text-blue-800 transition-colors focus:outline-none"
                aria-label="Copy account number"
              >
                {copiedBank[bankKey] ? 
                  <FaCheckCircle className="text-green-500 text-lg" /> : 
                  <FaCopy className="text-lg" />
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 animate-fadeIn">
       <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
Account Number For Payment.     </h2> 
      
       <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
        {Object.entries(bankDetails).map(([key, details]) => (
          <BankCard key={key} details={details} bankKey={key} />
        ))}
      </div> 
     
      
      
      <section id="apply" className="py-20 px-4  md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.a
            href="https://forms.gle/gXvNJkyp9152fXXR9"
            className="inline-block font-poppins bg-blue-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:shadow-lg transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            target="_blank"
          >
            Click here to Submit Abstract Form 
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default DonationInfo;