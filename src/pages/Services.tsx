
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Compass, TrendingUp, Rocket, Users, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const stages = [
    {
      icon: <Compass className="w-9 h-9 text-white" />,
      label: "D1 — DISCOVER",
      question: "Who am I?",
      description: "D1 is about understanding yourself before attempting to grow yourself.",
      gain: "Greater clarity about who they are, what matters to them, their strengths and potential, and the direction they want to pursue.",
    },
    {
      icon: <TrendingUp className="w-9 h-9 text-white" />,
      label: "D2 — DEVELOP",
      question: "Who am I becoming?",
      description: "D2 is about intentionally building the capacity required to become the person you aspire to be.",
      gain: "A clearer understanding of what they need to learn, develop, strengthen, and practice to move toward their desired future.",
    },
    {
      icon: <Rocket className="w-9 h-9 text-white" />,
      label: "D3 — DEPLOY",
      question: "How will I create value?",
      description: "D3 is about moving from potential and development into purposeful action.",
      gain: "A practical understanding of how to apply their strengths, skills, knowledge, and experiences to create opportunities, solve problems, contribute value, and make meaningful impact.",
    },
    {
      icon: <Users className="w-9 h-9 text-white" />,
      label: "D4 — GROW TOGETHER",
      question: "What will I do with my potential?",
      description: "D4 brings the entire DDD journey together and helps participants translate their insights into continued action.",
      gain: "A clear and practical roadmap for continuing their growth, staying accountable, and turning their DDD journey into consistent action.",
    },
  ];

  const gains = [
    "Greater self-awareness and clarity",
    "A Personal Discovery Blueprint",
    "A Personal Development Plan",
    "A Personal Impact Strategy",
    "A 90-Day DDD Action Plan",
    "Greater confidence to take intentional action",
    "A clearer understanding of how their potential can create value",
    "A community of growth-minded individuals to learn and grow with",
  ];

  const audience = [
    "Students and young adults",
    "Graduates and professionals",
    "Entrepreneurs and aspiring entrepreneurs",
    "Leaders and emerging leaders",
    "Individuals navigating career transitions",
    "Anyone seeking greater clarity, growth, and meaningful impact",
  ];

  const otherWays = [
    "Coaching & mentorship",
    "Training & workshops",
    "Speaking engagements",
    "Keynote addresses",
    "Panel discussions",
    "MC & event facilitation",
    "Career development support",
    "Personal branding",
    "Entrepreneurship guidance",
    "Manuscript development & author mentorship",
    "Book club facilitation",
    "Reading culture initiatives",
    "School and institutional partnerships",
    "Corporate and organizational engagements",
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-black">
        {/* Hero */}
        <section className="py-16 border-b border-white/10">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">What I Offer</h1>
            <p className="text-gray-300 leading-relaxed mb-4">
              My work is anchored in the DDD Framework — Discover. Develop. Deploy.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The framework comes to life through the DDD Growth Cycle, alongside coaching, mentorship, training, speaking, facilitation, and other people-development engagements.
            </p>
          </div>
        </section>

        {/* DDD Growth Cycle */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl font-bold mb-3 text-white">DDD Growth Cycle</h2>
              <p className="text-white font-medium mb-2">Discover. Develop. Deploy. Grow Together.</p>
              <p className="text-gray-400 mb-4">A Four-Week Program for Growth-Minded Individuals</p>
              <p className="text-gray-300 leading-relaxed">
                The DDD Growth Cycle is a four-week program designed for people who are intentional about understanding themselves, developing their capacity, putting their potential into action, and continuing to grow. Each week takes participants through one stage of the DDD journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stages.map((stage, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-5">{stage.icon}</div>
                  <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">{stage.label}</p>
                  <h3 className="text-2xl font-bold mb-3 text-white">{stage.question}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{stage.description}</p>
                  <p className="text-sm font-semibold text-white mb-1">By the end, participants gain:</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{stage.gain}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What participants gain */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-4 text-white text-center">What Participants Gain</h2>
            <p className="text-gray-400 text-center mb-10">By completing the four-week DDD Growth Cycle, participants leave with:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {gains.map((item, index) => (
                <div key={index} className="flex items-start text-gray-300">
                  <Check className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-300 text-center mt-10 leading-relaxed">
              The goal is not simply to learn about potential. <span className="text-white font-medium">It is to discover it, develop it, and deploy it.</span>
            </p>
          </div>
        </section>

        {/* Why */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">Why the DDD Growth Cycle?</h2>
            <div className="space-y-5 text-gray-300 leading-relaxed">
              <p>Many people try to develop themselves without first understanding themselves.</p>
              <p>Others develop knowledge and skills but struggle to translate them into meaningful action.</p>
              <p>The DDD Growth Cycle provides a structured journey:</p>
              <p className="text-white font-semibold text-lg text-center py-4 border-y border-white/10">
                Discover → Develop → Deploy → Grow Together
              </p>
              <p>It transforms personal development from a collection of disconnected activities into a continuous growth process.</p>
            </div>
          </div>
        </section>

        {/* Who is it for */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-4 text-white text-center">Who Is It For?</h2>
            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
              The DDD Growth Cycle is open to growth-minded individuals who are intentional about discovering, developing, and deploying their potential. It is relevant for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {audience.map((item, index) => (
                <div key={index} className="flex items-start text-gray-300">
                  <span className="text-white mr-3">•</span>
                  {item}
                </div>
              ))}
            </div>
            <p className="text-white font-medium text-center mt-10">If you have potential, DDD is for you.</p>
          </div>
        </section>

        {/* DDD Circle */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white/5 border border-white/10 p-10 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-3 text-white">DDD Circle</h2>
              <p className="text-white font-medium mb-6">Grow Together.</p>
              <p className="text-gray-300 leading-relaxed mb-6">
                DDD Circle by Caroline Kitumbui is a community for growth-minded individuals who want to continue learning, reflecting, connecting, taking intentional action, and growing together beyond the four-week DDD Growth Cycle.
              </p>
              <p className="text-gray-400">Discover. Develop. Deploy. Grow Together.</p>
            </div>
          </div>
        </section>

        {/* Other ways */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-4 text-white text-center">Other Ways I Work With People</h2>
            <p className="text-gray-400 text-center mb-10">Beyond the DDD Growth Cycle, I work with individuals and organizations through:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {otherWays.map((item, index) => (
                <div key={index} className="flex items-start text-gray-300">
                  <Check className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-300 text-center mt-10 max-w-3xl mx-auto leading-relaxed">
              I work with individuals, professionals, corporations, organizations, educational institutions, businesses, and communities committed to developing people, unlocking potential, and creating meaningful impact.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to grow intentionally?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Discover your potential. Develop your abilities. Deploy your impact. Grow together.
            </p>
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
