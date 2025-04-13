
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import { ArrowRight, ArrowRightCircle, Check, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceProcessSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We begin with a thorough assessment of your current situation, goals, and challenges to create a personalized plan."
    },
    {
      number: "02",
      title: "Custom Strategy",
      description: "Based on your unique needs, I develop a tailored approach that addresses your specific growth areas and aspirations."
    },
    {
      number: "03",
      title: "Implementation Support",
      description: "I provide ongoing guidance, resources, and accountability as you put your plan into action and overcome obstacles."
    },
    {
      number: "04",
      title: "Progress Evaluation",
      description: "Regular check-ins help us measure your advancement, celebrate wins, and adjust strategies as needed for optimal results."
    }
  ];

  const benefits = [
    "Personal attention and customized coaching to address your specific needs",
    "Practical, actionable strategies you can implement immediately",
    "Access to a supportive community of like-minded individuals",
    "Evidence-based approaches backed by research and real-world experience",
    "Ongoing support and accountability throughout your journey",
    "Skills and knowledge that transfer to multiple areas of your life"
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-brand-darker">
        {/* Hero Section */}
        <section className="py-16 bg-brand-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">My <span className="text-gradient">Services</span></h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Unlock your potential with expert guidance in career growth, personal development, and strategic communication. Let's build the future you deserve, one step at a time.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Services Content */}
        <ServicesSection />
        
        {/* Additional Services Content */}
        <section className="py-20 bg-brand-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6">How I <span className="text-gradient">Work With You</span></h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  My approach is collaborative, strategic, and focused on measurable results. Together, we'll create a roadmap for your success.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                {serviceProcessSteps.map((step, index) => (
                  <div key={index} className="bg-brand-darker p-8 rounded-lg shadow-lg relative group">
                    <div className="text-4xl font-bold text-brand-purple/20 absolute -top-5 left-4 group-hover:text-brand-purple/40 transition-colors">{step.number}</div>
                    <h3 className="text-xl font-bold mb-4 mt-6">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRightCircle className="text-brand-purple w-6 h-6" />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                <div className="bg-brand-darker p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Why Choose My <span className="text-gradient">Services?</span></h2>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-green-400 mr-3 flex-shrink-0 mt-1" />
                        <p className="text-gray-300">{benefit}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-brand-darker p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Frequently Asked <span className="text-gradient">Questions</span></h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">How long does a typical coaching engagement last?</h3>
                      <p className="text-gray-400">While each situation is unique, most clients see meaningful results within 3-6 months of consistent work together.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Do you offer group sessions or workshops?</h3>
                      <p className="text-gray-400">Yes! Group sessions are available for teams or individuals with similar goals, and I regularly conduct workshops on specialized topics.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">What is your coaching philosophy?</h3>
                      <p className="text-gray-400">I believe in empowering individuals through practical strategies, authentic guidance, and supportive accountability to create sustainable growth.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-brand-purple/20 to-purple-900/20 p-10 rounded-xl shadow-lg text-center">
                <div className="flex justify-center mb-6">
                  <Lightbulb className="w-16 h-16 text-yellow-400" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Future?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Take the first step toward unlocking your potential and achieving your goals with personalized coaching and strategic guidance.
                </p>
                <Link to="/contact" className="inline-flex items-center bg-brand-purple hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 group">
                  Schedule Your Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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

export default Services;
