
import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you for your message! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12 bg-brand-darker min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in <span className="text-gradient">Touch</span></h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have questions or ready to start your journey? Reach out to schedule a consultation or book a coaching session.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-brand-dark border border-gray-800 rounded-xl p-8 h-full">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-brand-purple mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-gray-400">
                        123 Career Avenue<br />
                        Success City, CA 90210
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="text-brand-purple mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-400">
                        <a href="mailto:info@carolinekitumbui.com" className="hover:text-white transition-colors">
                          info@carolinekitumbui.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="text-brand-purple mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-gray-400">
                        <a href="tel:+15551234567" className="hover:text-white transition-colors">
                          (555) 123-4567
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-semibold mb-4">Office Hours</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-brand-dark border border-gray-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name <span className="text-brand-purple">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-brand-darker border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address <span className="text-brand-purple">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-brand-darker border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-brand-darker border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-brand-darker border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="Career Coaching">Career Coaching</option>
                        <option value="Personal Branding">Personal Branding</option>
                        <option value="Resume Help">Resume Help</option>
                        <option value="Interview Preparation">Interview Preparation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message <span className="text-brand-purple">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-brand-darker border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-brand-purple hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    {isLoading ? 'Sending...' : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Booking Calendar Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Book a <span className="text-gradient">Coaching Session</span></h2>
              <p className="text-gray-300">
                Select an available time slot to schedule your one-on-one coaching session.
              </p>
            </div>
            
            <div className="bg-brand-dark border border-gray-800 rounded-xl p-8 shadow-xl">
              <div className="text-center py-10">
                <h3 className="text-xl mb-4">Calendar Integration Coming Soon</h3>
                <p className="text-gray-400 mb-6">
                  In the meantime, please use the contact form above to request an appointment,
                  and I'll get back to you with available time slots.
                </p>
                <div className="border-t border-gray-800 pt-6 mt-6">
                  <p className="text-sm text-gray-500">
                    Coaching sessions are available Monday to Friday, 9:00 AM to 5:00 PM Pacific Time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
