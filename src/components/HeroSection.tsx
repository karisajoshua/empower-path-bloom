
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center pt-20 md:pt-32">
      <div className="absolute inset-0 bg-[url('https://mcxyewupdzxikmzifqtr.supabase.co/storage/v1/object/public/ckc//carols-removebg-preview.png')] bg-cover bg-right opacity-5"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <p className="text-sm uppercase tracking-widest text-gray-400">Career & Personal Development Advocate | Author | Founder</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              I am <span className="text-white">Caroline Kitumbui</span>
            </h1>
            <p className="text-xl text-gray-300 md:max-w-xl leading-relaxed">
              I empower growth, cultivate potential, and help people build purpose.
            </p>
            <p className="text-gray-400 md:max-w-xl leading-relaxed">
              Passionate about nurturing potential and guiding individuals to grow intentionally through career development, personal growth, structured mentorship, and entrepreneurship.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://wa.me/254716668668" target="_blank" rel="noopener noreferrer" className="bg-white text-black font-medium px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gray-200">
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
              <Link to="/contact" className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2">
                Book a Session
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium px-8 py-3 rounded-full transition-all duration-300">
                Partner With Me
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
