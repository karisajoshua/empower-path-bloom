
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const sections = [
    {
      title: "About Me",
      description: "Discover my journey as a Career and Personal Development Advocate, Author, and Founder.",
      link: "/about"
    },
    {
      title: "Services",
      description: "Explore mentorship, career guidance, entrepreneurship support, and more.",
      link: "/services"
    },
    {
      title: "Contact",
      description: "Ready to grow intentionally? Let's connect and start your journey.",
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
              <p className="text-gray-300 text-lg leading-relaxed">
                I am the founder of <a href="https://www.skymylimit.co.ke/" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline">Sky My Limit</a>, <strong className="text-white">Carol's Book Bar</strong> and I serve as Book Club Officer at <strong className="text-white">SAV Skills Leaders Book Club</strong>. I support individuals in creating opportunities, building businesses, navigating freelancing, and developing viable business ideas and plans.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-all group">
                  <h2 className="text-2xl font-bold mb-4 text-white">{section.title}</h2>
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
