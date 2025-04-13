
import { Users, Book, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunitySection = () => {
  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sky My <span className="text-gradient">Limit</span></h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            A holistic empowerment community for young minds where I voluntarily exercise my boundless enthusiasm daily.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-brand-darker rounded-lg p-8 border border-brand-purple/20">
              <h3 className="text-2xl font-bold mb-6">SAV Skills Leaders Book Club</h3>
              <p className="text-gray-300 mb-6">
                As Chair Person of the SAV Skills Leaders Book Club, I've had the incredible opportunity to interact with diverse voices and perspectives across self-help, inspirational, and motivational genres. Each meeting deepens my understanding and sparks profound interest.
              </p>
              <p className="text-gray-300 mb-6">
                Through vibrant discussions, I've absorbed the wisdom of other authors and realized the transformative power of words. These insights fuel my passion for crafting compelling narratives that resonate with readers, encouraging them to break barriers and unlock their potential.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-brand-purple/20 text-white text-sm px-3 py-1 rounded-full">Self-Help</span>
                <span className="bg-brand-purple/20 text-white text-sm px-3 py-1 rounded-full">Leadership</span>
                <span className="bg-brand-purple/20 text-white text-sm px-3 py-1 rounded-full">Personal Growth</span>
                <span className="bg-brand-purple/20 text-white text-sm px-3 py-1 rounded-full">Career Development</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-brand-darker rounded-lg p-6 border border-gray-800 hover:border-brand-purple/20 transition-all duration-300">
                <Book className="w-10 h-10 text-brand-purple mb-4" />
                <h4 className="text-xl font-semibold mb-2">My Book</h4>
                <p className="text-gray-400 mb-4">
                  "The Path to Personal Excellence - Steps to a Better You" - born from my desire to fulfill my mission and vision.
                </p>
                <Link to="/blog" className="text-brand-purple hover:text-white transition-colors">Learn more →</Link>
              </div>
              
              <div className="bg-brand-darker rounded-lg p-6 border border-gray-800 hover:border-brand-purple/20 transition-all duration-300">
                <Users className="w-10 h-10 text-purple-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Community Support</h4>
                <p className="text-gray-400 mb-4">
                  Creating room for personal consultation on various aspects of life through our supportive community.
                </p>
                <Link to="/contact" className="text-brand-purple hover:text-white transition-colors">Join us →</Link>
              </div>
              
              <div className="bg-brand-darker rounded-lg p-6 border border-gray-800 hover:border-brand-purple/20 transition-all duration-300">
                <Star className="w-10 h-10 text-yellow-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Storytelling</h4>
                <p className="text-gray-400 mb-4">
                  Harnessing the power of storytelling to uplift and motivate individuals on their journey of self-discovery.
                </p>
                <Link to="/blog" className="text-brand-purple hover:text-white transition-colors">Read stories →</Link>
              </div>
              
              <div className="bg-brand-darker rounded-lg p-6 border border-gray-800 hover:border-brand-purple/20 transition-all duration-300">
                <Award className="w-10 h-10 text-blue-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Continuous Learning</h4>
                <p className="text-gray-400 mb-4">
                  Embracing challenges and diving into new experiences, knowing each one is an opportunity for growth.
                </p>
                <Link to="/contact" className="text-brand-purple hover:text-white transition-colors">Get recommendations →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
