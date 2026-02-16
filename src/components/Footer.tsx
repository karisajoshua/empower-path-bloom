import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="https://mcxyewupdzxikmzifqtr.supabase.co/storage/v1/object/public/ckc//logo.png" 
                alt="Caroline Kitumbui Logo" 
                className="h-12"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Empowering individuals to grow intentionally through career development, personal growth, and structured mentorship.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Career Development</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Youth Mentorship</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Entrepreneurship Guidance</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Author Mentorship</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Carol's Book Bar</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-white mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Mombasa, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-white mr-3 flex-shrink-0" />
                <span className="text-gray-400">+254716668668</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-white mr-3 flex-shrink-0" />
                <a href="mailto:info@carolinekitumbui.com" className="text-gray-400 hover:text-white transition-colors">
                  info@carolinekitumbui.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; Copyright Caroline Kitumbui {currentYear} | Powered by Texcortech Systems
            </p>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
