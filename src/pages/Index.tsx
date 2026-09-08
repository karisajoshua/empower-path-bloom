
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const sections = [
    {
      title: "About",
      description: "Who is Caroline Kitumbui? My journey, my belief, mission, vision, and core values.",
      link: "/about"
    },
    {
      title: "What I Offer",
      description: "The DDD Framework in action — the four-week DDD Growth Cycle, DDD Circle, coaching, training, speaking, and MC.",
      link: "/services"
    },
    {
      title: "Books",
      description: "Published works, thought leadership, and support for aspiring authors through manuscript development.",
      link: "/books"
    },
    {
      title: "Contact",
      description: "Ready to discover, develop, and deploy your potential? Let's connect and grow together.",
      link: "/contact"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Intro Section */}
        <section className="py-20 bg-black border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Every Person Has Potential</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Potential is universal — but it is only the beginning. My work sits at the intersection of personal growth, career development, human potential, and meaningful impact, and it comes to life through the DDD Framework.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-all group">
                  <h3 className="text-2xl font-bold mb-4 text-white">{section.title}</h3>
                  <p className="text-gray-400 mb-6">{section.description}</p>
                  <Link 
                    to={section.link}
                    className="inline-flex items-center text-white font-medium group-hover:underline"
                  >
                    Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
