import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Compass, TrendingUp, Rocket, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const stages = [
    {
      icon: <Compass className="w-9 h-9 text-white" />,
      label: "1. DISCOVER",
      question: "Who am I, what do I carry, and what is possible for me?",
      description: "Understand yourself better, uncover your strengths, clarify your values, and identify the potential waiting to be unleashed.",
    },
    {
      icon: <TrendingUp className="w-9 h-9 text-white" />,
      label: "2. DEVELOP",
      question: "What do I need to grow into the person I aspire to become?",
      description: "Identify the skills, mindsets, habits, and areas of growth you need to develop to bridge the gap between where you are and where you want to be.",
    },
    {
      icon: <Rocket className="w-9 h-9 text-white" />,
      label: "3. DEPLOY",
      question: "How can I use what I have to create meaningful impact?",
      description: "Learn to put your strengths, skills, and knowledge into action, pursue opportunities, and make intentional moves towards your goals.",
    },
    {
      icon: <Users className="w-9 h-9 text-white" />,
      label: "4. MENTORSHIP",
      question: "How do I turn my discoveries and intentions into consistent action?",
      description: "Receive guided support, practical exercises, and accountability to help you apply the DDD Framework, overcome obstacles, track your progress, and keep moving forward.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-black">
        <section className="py-16 border-b border-white/10">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">What I Offer</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white">DDD Masterclass &amp; Mentorship</h1>
            <p className="text-xl font-semibold text-white mb-5">Discover. Develop. Deploy.</p>
            <p className="text-gray-300 leading-relaxed">
              Unlock your potential through the DDD Framework. Gain clarity, grow intentionally, and turn your potential into meaningful action through practical masterclasses and guided mentorship.
            </p>
          </div>
        </section>

        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stages.map((stage) => (
                <div key={stage.label} className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-5">{stage.icon}</div>
                  <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">{stage.label}</p>
                  <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">{stage.question}</h2>
                  <p className="text-gray-300 leading-relaxed">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Your potential is the starting point. Intentional action is the journey.</h2>
            <p className="text-gray-300 text-lg mb-9">Discover yourself. Develop what you carry. Deploy it with purpose.</p>
            <Link to="/contact" className="inline-flex items-center bg-white text-black font-medium px-8 py-3 rounded-full transition-all duration-300 hover:bg-gray-200 group">
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
