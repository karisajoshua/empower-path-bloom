
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-brand-dark to-brand-darker flex items-center pt-20 md:pt-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build Your <span className="text-gradient">Clarity</span> & <span className="text-gradient">Confidence</span>
            </h1>
            <p className="text-xl text-gray-300 md:max-w-xl leading-relaxed">
              Transform your career and personal growth with expert guidance. Let's create the future you deserve.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="bg-brand-purple hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group">
                Book a Session
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="bg-transparent hover:bg-white/10 text-white border border-white/20 font-medium px-8 py-3 rounded-full transition-all duration-300">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <img 
              src="https://carolinekitumbui.com/wp-content/uploads/2025/01/carol.png" 
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
