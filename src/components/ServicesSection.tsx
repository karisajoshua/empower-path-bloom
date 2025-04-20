import { ArrowRight, BarChart, FileText, Briefcase, Users, Sparkles, Lightbulb, BookOpen, Rocket, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: <Briefcase className="w-12 h-12 text-brand-purple" />,
      title: "Career Essentials Toolkit",
      description: "Get noticed. Get hired. Get moving. This toolkit is designed to help you show up confidently and professionally in today's job market.",
      details: "✅ CV Revamping – Turn your CV into a powerful, professional brand statement\n✅ Cover Letter Writing – Tailored letters that speak directly to employers\n✅ Job Application Guide – Step-by-step tips to apply smart, not just hard\n✅ LinkedIn & Job Platform Optimization – Position your profile to attract the right opportunities"
    },
    {
      icon: <FileText className="w-12 h-12 text-indigo-400" />,
      title: "Strategic Communication Essentials",
      description: "Say the right thing, the right way—every time. Whether you're speaking for yourself or your brand, how you communicate matters.",
      details: "✅ Personal Profile – A sharp, professional bio that highlights your value\n✅ Company Profile – A well-crafted business story that opens doors\n✅ Elevator Pitch – A clear and compelling intro for any room or opportunity\n\n✔️Strategic ✔️Clear ✔️Unforgettable"
    },
    {
      icon: <PenTool className="w-12 h-12 text-pink-400" />,
      title: "Writer's Craft Workshop",
      description: "Your self-help, motivational, or inspirational book—written for you. You bring the story or idea. I bring the words.",
      details: "✅ Content development & chapter outline\n✅ Full manuscript writing\n✅ Revisions & polish for publishing\n\nYour message. My pen. One powerful book.🔥"
    }
  ];

  const experience = [
    "Bachelor's Degree in Business Management-Accounts from Moi University, CPA 4 and pursuing MBA in Strategic Management with special interest in entrepreneurship.",
    "Diploma in Food and Beverage Management with 2 years of industry experience.",
    "Administrator at Tewa Training Centre, a hospitality training institution for girls and women.",
    "Certified trainer by the Germany chambers of commerce, with special interest in Entrepreneurship and Communication Skills.",
    "Completed courses in principles of leadership, effective communication, and strategic management with Great Learning",
    "Finance literate with certification in Debt Escape and Mastery Money Mastery",
    "Author of 'The Path to Personal Excellence' & The Path to reinvention and the book club officer-SAV Skills Leaders Book Club."
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-brand-darker to-brand-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My <span className="text-gradient">Services</span></h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Unlock your potential with expert guidance in career growth, personal development, and strategic communication. Let's build the future you deserve, one step at a time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-brand-dark border border-gray-800 rounded-lg p-8 transition-all duration-300 hover:shadow-xl hover:shadow-brand-purple/10 hover:-translate-y-1 group"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="bg-brand-darker p-4 rounded-lg mb-6 whitespace-pre-line">
                <p className="text-sm text-gray-400">{service.details}</p>
              </div>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-white bg-brand-purple/10 hover:bg-brand-purple px-4 py-2 rounded-full transition-colors duration-300 group"
              >
                Book Now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">My <span className="text-gradient">Experience</span></h3>
          <div className="bg-brand-darker p-8 rounded-lg max-w-4xl mx-auto">
            <ul className="space-y-4 text-left">
              {experience.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="text-brand-purple mr-3">•</div>
                  <p className="text-gray-300">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 bg-brand-dark/50 p-8 rounded-lg max-w-4xl mx-auto border border-gray-800">
          <h3 className="text-2xl font-bold mb-6 text-center">Why Choose <span className="text-gradient">My Services</span></h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-darker p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Lightbulb className="w-8 h-8 text-yellow-400 mr-3" />
                <h4 className="text-xl font-semibold">Personalized Approach</h4>
              </div>
              <p className="text-gray-400">
                Every coaching session is tailored to your specific goals, challenges, and learning style to ensure maximum effectiveness.
              </p>
            </div>
            
            <div className="bg-brand-darker p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-blue-400 mr-3" />
                <h4 className="text-xl font-semibold">Research-Based Methods</h4>
              </div>
              <p className="text-gray-400">
                My coaching methodology is grounded in proven principles of personal development and career advancement.
              </p>
            </div>
            
            <div className="bg-brand-darker p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-green-400 mr-3" />
                <h4 className="text-xl font-semibold">Supportive Community</h4>
              </div>
              <p className="text-gray-400">
                Join a network of like-minded individuals who share your commitment to growth and excellence.
              </p>
            </div>
            
            <div className="bg-brand-darker p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Sparkles className="w-8 h-8 text-purple-400 mr-3" />
                <h4 className="text-xl font-semibold">Practical Results</h4>
              </div>
              <p className="text-gray-400">
                Focus on actionable strategies and measurable outcomes that lead to tangible improvements in your life and career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
