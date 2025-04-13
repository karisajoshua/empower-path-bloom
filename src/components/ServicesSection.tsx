
import { ArrowRight, BarChart, FileText, Briefcase, Users, Sparkles, Lightbulb, BookOpen, Rocket, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: <Briefcase className="w-12 h-12 text-brand-purple" />,
      title: "Career Essentials Toolkit",
      description: "Strategic guidance to help you navigate your career path, overcome obstacles, and achieve your professional goals with confidence.",
      price: "$150 / session"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-purple-400" />,
      title: "Personal Growth",
      description: "Discover your unique potential and develop strategies for continuous improvement in all areas of life, from mindset to practical skills.",
      price: "$180 / session"
    },
    {
      icon: <Rocket className="w-12 h-12 text-blue-400" />,
      title: "Entrepreneurship & Freelancing",
      description: "Learn essential skills to start and grow your own business or freelance career with confidence and strategic planning.",
      price: "$200 / session"
    },
    {
      icon: <PenTool className="w-12 h-12 text-pink-400" />,
      title: "Writer's Craft Workshop",
      description: "Develop your writing skills and learn how to create compelling content that resonates with your audience and achieves your goals.",
      price: "$150 / workshop"
    },
    {
      icon: <FileText className="w-12 h-12 text-indigo-400" />,
      title: "Resume Help",
      description: "Expert review and enhancement of your resume to highlight your achievements and secure more interviews in your desired field.",
      price: "$120 / resume"
    },
    {
      icon: <BarChart className="w-12 h-12 text-green-400" />,
      title: "Career Transition",
      description: "Structured support to help you successfully pivot to a new role, industry, or career path with confidence and strategic planning.",
      price: "$180 / session"
    }
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
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">My <span className="text-gradient">Experience</span></h3>
          <div className="bg-brand-darker p-8 rounded-lg max-w-4xl mx-auto">
            <ul className="space-y-4 text-left">
              <li className="flex items-start">
                <div className="text-brand-purple mr-3">•</div>
                <p className="text-gray-300">Bachelor's Degree in Business Management-Accounts from Moi University, CPA 4 and pursuing MBA in Strategic Management with special interest in entrepreneurship.</p>
              </li>
              <li className="flex items-start">
                <div className="text-brand-purple mr-3">•</div>
                <p className="text-gray-300">Diploma in Food and Beverage Management with 2 years of industry experience.</p>
              </li>
              <li className="flex items-start">
                <div className="text-brand-purple mr-3">•</div>
                <p className="text-gray-300">Administrator at Tewa Training Centre, a hospitality training institution for girls and women.</p>
              </li>
              <li className="flex items-start">
                <div className="text-brand-purple mr-3">•</div>
                <p className="text-gray-300">Certified trainer by the Germany chambers of commerce, specialized in Entrepreneurship and Communication Skills.</p>
              </li>
              <li className="flex items-start">
                <div className="text-brand-purple mr-3">•</div>
                <p className="text-gray-300">Completed courses in principles of leadership, effective communication, and strategic management.</p>
              </li>
              <li className="flex items-start">
                <div className="text-brand-purple mr-3">•</div>
                <p className="text-gray-300">Finance literate with certification in Debt Escape and Mastery.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
