
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const sections = [
    {
      title: "About Me",
      description: "Discover my journey as a Career and Personal Development Advocate and how I can help you achieve your goals.",
      link: "/about"
    },
    {
      title: "Services",
      description: "Explore my range of coaching services designed to unlock your potential and accelerate your growth.",
      link: "/services"
    },
    {
      title: "Blog",
      description: "Read insights and strategies about career development, personal growth, and professional success.",
      link: "/blog"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        <section className="py-20 bg-brand-dark">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-brand-darker p-8 rounded-lg shadow-lg hover:shadow-brand-purple/20 transition-all group">
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  <p className="text-gray-300 mb-6">{section.description}</p>
                  <Link 
                    to={section.link}
                    className="inline-flex items-center text-brand-purple hover:text-purple-400 font-medium group-hover:underline"
                  >
                    Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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
