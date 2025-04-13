
import { useState } from 'react';
import { SendHorizontal } from 'lucide-react';
import { toast } from 'sonner';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you for subscribing to my newsletter!');
      setEmail('');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-brand-dark to-brand-darker">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Subscribe to My <span className="text-gradient">Newsletter</span></h2>
          <p className="text-gray-300 mb-8">
            Get weekly insights on career development, personal growth, and exclusive coaching offers delivered straight to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-full bg-white/5 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-brand-purple hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-full transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {isLoading ? 'Subscribing...' : (
                <>
                  Subscribe <SendHorizontal size={18} />
                </>
              )}
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-4">
            I respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
