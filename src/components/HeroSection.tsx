
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center pt-20 md:pt-32">
      <div className="absolute inset-0 bg-[url('https://mcxyewupdzxikmzifqtr.supabase.co/storage/v1/object/public/ckc//carols-removebg-preview.png')] bg-cover bg-right opacity-5"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <p className="text-sm uppercase tracking-widest text-gray-400">Career &amp; Personal Development Advocate | Creator of the DDD Framework | Author | Speaker | MC</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Discover. Develop. Deploy.
            </h1>
            <p className="text-xl text-gray-300 md:max-w-xl leading-relaxed">
              Unlock Your Potential. Build Your Capacity. Create Meaningful Impact.
            </p>
            <div className="space-y-4 text-gray-400 md:max-w-xl leading-relaxed">
              <p>I believe every individual has potential. But potential does not automatically become growth, excellence, or impact. It must be discovered, intentionally developed, and confidently deployed.</p>
              <p>Through the DDD Framework — Discover. Develop. Deploy — I help growth-minded individuals gain clarity about who they are, develop the capabilities they need, and turn their potential into meaningful action and impact.</p>
              <p className="text-white font-medium">Discover your potential. Develop your abilities. Deploy your impact.</p>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/services" className="bg-white text-black font-medium px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gray-200">
                Explore DDD Masterclass & Mentorship
                <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/254716668668" target="_blank" rel="noopener noreferrer" className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
              <Link to="/contact" className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center">
                Book a Session
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <img 
              src="https://mcxyewupdzxikmzifqtr.supabase.co/storage/v1/object/public/ckc//carols-removebg-preview.png" 
              alt="Caroline Kitumbui" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
