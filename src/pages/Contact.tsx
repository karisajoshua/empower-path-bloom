import { useState } from 'react';
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    setIsLoading(true);
    try {
      const { error } = await supabase.functions.invoke('send-contact-form', { body: formData });
      if (error) throw error;
      toast.success('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12 bg-black min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Connect</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              If you are ready to grow intentionally, build confidence, and pursue your purpose — reach out.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="https://wa.me/254716668668" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
            <a href="mailto:info@carolinekitumbui.com" className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/30 font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
              <Mail size={18} /> Email for Partnerships
            </a>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 h-full">
                <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-white mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Address</h3>
                      <p className="text-gray-400">Mombasa, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail size={24} className="text-white mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-400">
                        <a href="mailto:info@carolinekitumbui.com" className="hover:text-white transition-colors">info@carolinekitumbui.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone size={24} className="text-white mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Phone</h3>
                      <p className="text-gray-400">
                        <a href="tel:+254716668668" className="hover:text-white transition-colors">+254716668668</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="font-semibold text-white mb-4">Office Hours</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li className="flex justify-between"><span>Monday - Friday:</span><span>9:00 AM - 5:00 PM</span></li>
                    <li className="flex justify-between"><span>Saturday:</span><span>10:00 AM - 2:00 PM</span></li>
                    <li className="flex justify-between"><span>Sunday:</span><span>Closed</span></li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Your Name <span className="text-gray-400">*</span></label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-black border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Email Address <span className="text-gray-400">*</span></label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-black border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-black border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">Subject</label>
                      <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-black border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent">
                        <option value="">Select a subject</option>
                        <option value="Career Coaching">Career Coaching</option>
                        <option value="Mentorship">Mentorship</option>
                        <option value="Entrepreneurship Guidance">Entrepreneurship Guidance</option>
                        <option value="Manuscript Development">Manuscript Development</option>
                        <option value="Speaking Engagement">Speaking Engagement</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">Your Message <span className="text-gray-400">*</span></label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 rounded-lg bg-black border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent resize-none" required></textarea>
                  </div>
                  <button type="submit" disabled={isLoading} className="bg-white text-black font-medium px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 hover:bg-gray-200">
                    {isLoading ? 'Sending...' : (<>Send Message <Send size={18} /></>)}
                  </button>
                </form>
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
