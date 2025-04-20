
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import { Award, Book, BookOpen, GraduationCap, Heart, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-brand-darker">
        {/* Hero Section */}
        <section className="py-16 bg-brand-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-gradient">Caroline Kitumbui</span></h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                A Career and Personal Development Advocate passionate about empowering young minds through authenticity and shared experiences.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main About Content */}
        <AboutSection />
        
        {/* Additional About Content */}
        <section className="py-20 bg-brand-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-brand-darker p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl font-bold mb-6">My <span className="text-gradient">Journey</span></h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm ardent about career and personal development for young minds and this stems from a deep belief that everyone has the potential to grow and thrive. I choose to share not from a pedestal of perfection but from the trenches of my own experiences—filled with mistakes, lessons learned, and deliberate corrections.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Every misstep has been a stepping stone on my journey, shaping the advocate I am today. Imagine a world where every person wakes up feeling confident, capable, and ready to conquer their dreams! That's the vision I strive to bring to life—not just for myself, but for everyone in my network.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My immense experience and desire follows my role in the academia where on a daily basis, I interact with young professionals thereby understanding the various real dynamics, paradigms, areas of need and gaps. I believe in continuous learning and am committed to helping individuals reach their full potential.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                <div className="bg-brand-darker p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-8 h-8 text-brand-purple mr-3" />
                    <h3 className="text-2xl font-bold">Literary Journey</h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    As an avid reader of self-help literature, I'm constantly seeking new insights to enrich my journey and inspire others. Through the vibrant discussions at the SAV Skills Leaders Book Club, I've had the incredible opportunity to interact with diverse voices and perspectives.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    I've authored "The Path to Personal Excellence-Steps to a Better You" and "The Path to Reinvention" out of the desire to fulfill my mission and vision. I'm also the Book Club Officer at SAV Skills Leaders Book Club, creating opportunities for growth and development.
                  </p>
                </div>
                
                <div className="bg-brand-darker p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <Users className="w-8 h-8 text-brand-purple mr-3" />
                    <h3 className="text-2xl font-bold">Sky My Limit</h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    I birthed Sky My Limit - a holistic empowerment community for young minds where I voluntarily exercise my boundless enthusiasm daily. It creates room for personal consultation on various aspects of life.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    I believe that when we lift each other up, we create a ripple effect of success and resilience. I find immense joy in helping individuals unlock their strengths, set meaningful goals, and navigate their personal and professional journeys.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Link to="/contact" className="inline-block bg-brand-purple hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
