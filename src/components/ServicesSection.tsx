
import { ArrowRight, BarChart, FileText, Briefcase, Users, Sparkles, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: <Briefcase className="w-12 h-12 text-brand-purple" />,
      title: "Career Coaching",
      description: "Strategic guidance to help you navigate your career path, overcome obstacles, and achieve your professional goals.",
      price: "$150 / session"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-purple-400" />,
      title: "Personal Branding",
      description: "Discover and articulate your unique value proposition to stand out in your industry and attract opportunities.",
      price: "$200 / session"
    },
    {
      icon: <FileText className="w-12 h-12 text-indigo-400" />,
      title: "Resume Help",
      description: "Expert review and enhancement of your resume to highlight your achievements and secure more interviews.",
      price: "$120 / resume"
    },
    {
      icon: <BarChart className="w-12 h-12 text-blue-400" />,
      title: "Career Transition",
      description: "Structured support to help you successfully pivot to a new role, industry, or career path with confidence.",
      price: "$180 / session"
    },
    {
      icon: <Users className="w-12 h-12 text-pink-400" />,
      title: "Interview Preparation",
      description: "Comprehensive preparation including mock interviews, feedback, and strategies to help you present your best self.",
      price: "$140 / session"
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-yellow-400" />,
      title: "Leadership Development",
      description: "Specialized coaching to enhance your leadership skills and prepare you for advancement opportunities.",
      price: "$220 / session"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-brand-darker to-brand-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My <span className="text-gradient">Services</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive coaching and development services designed to help you overcome challenges and achieve your career and personal goals.
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
              <p className="text-gray-400 mb-6 min-h-[6rem]">{service.description}</p>
              <p className="text-brand-purple font-semibold mb-4">{service.price}</p>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-white bg-brand-purple/10 hover:bg-brand-purple px-4 py-2 rounded-full transition-colors duration-300 group"
              >
                Book Now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
