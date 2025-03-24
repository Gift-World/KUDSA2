import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KUDSA</h3>
            <p className="text-gray-300">
              Empowering Student Affairs Professionals for Excellence in Higher Education
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">Email: kudsadeans@gmail.com</p>
            <p className="text-gray-300">Phone: +254 718 614 091</p>
          </div>
          
          {/* <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-gray-300 transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-gray-300 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-gray-300 transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div> */}
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} KUDSA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;