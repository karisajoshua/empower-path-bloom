
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import { Award, Book, BookOpen, GraduationCap, Heart, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const achievements = [
    { value: "5+", label: "Years Experience" },
    { value: "1,000+", label: "Books Read" },
    { value: "2+", label: "Books Authored" },
    { value: "500+", label: "Lives Changed" }
  ];

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
                    I've authored "The Path to Personal Excellence-Steps to a Better You" out of the desire to fulfill my mission and vision. I'm also the Chair Person of SAV Skills Leaders Book Club, creating opportunities for growth and development.
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
              
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-8">My <span className="text-gradient">Achievements</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {achievements.map((item, index) => (
                    <div key={index} className="bg-brand-darker p-6 rounded-lg shadow-lg hover:shadow-brand-purple/20 transition-all">
                      <div className="text-3xl font-bold text-brand-purple mb-2">{item.value}</div>
                      <div className="text-gray-400">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-brand-darker p-8 rounded-lg shadow-lg mb-10">
                <div className="flex items-center mb-6">
                  <Heart className="w-10 h-10 text-pink-400 mr-4" />
                  <h2 className="text-3xl font-bold">My <span className="text-gradient">Core Values</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-brand-dark p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Empowerment</h3>
                    <p className="text-gray-400">Helping you gain the confidence to take decisive action in your life and career.</p>
                  </div>
                  <div className="bg-brand-dark p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Growth</h3>
                    <p className="text-gray-400">Encouraging transformation through challenges and new opportunities.</p>
                  </div>
                  <div className="bg-brand-dark p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Community</h3>
                    <p className="text-gray-400">Creating a supportive network where growth and success is shared with others.</p>
                  </div>
                  <div className="bg-brand-dark p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Authenticity</h3>
                    <p className="text-gray-400">Championing genuineness as the cornerstone of achievement and personal fulfillment.</p>
                  </div>
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
