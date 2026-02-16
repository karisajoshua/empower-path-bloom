
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Briefcase, Users, Rocket, BookOpen, PenTool, Mic, Settings, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { icon: <Briefcase className="w-10 h-10 text-white" />, title: "Career & Personal Development Advocacy", description: "Mentorship, CV & cover letter writing, LinkedIn and other platform optimization including Facebook and other professional online presence." },
    { icon: <Users className="w-10 h-10 text-white" />, title: "Youth Mentorship & Academic Guidance", description: "Developing and coordinating learning programs, mentoring students, developing schemes of work, lesson plans, and records of work, fostering purposeful growth." },
    { icon: <Rocket className="w-10 h-10 text-white" />, title: "Entrepreneurship Guidance & Business Planning", description: "Support for individuals to develop viable business ideas and plans, navigate freelancing, and explore entrepreneurial opportunities." },
    { icon: <PenTool className="w-10 h-10 text-white" />, title: "Author & Thought Leadership", description: "Writing, guiding manuscript development for aspiring authors, and promoting intellectual engagement." },
    { icon: <BookOpen className="w-10 h-10 text-white" />, title: "Carol's Book Bar", description: "Curating and providing access to self-help, leadership, and children's books, offering reading list recommendations, and helping individuals experience the benefits of intentional reading." },
    { icon: <Mic className="w-10 h-10 text-white" />, title: "Speaking & Facilitation", description: "Career masterclasses, personal development workshops, and reflective learning sessions using structured training tools and methodologies." },
    { icon: <Settings className="w-10 h-10 text-white" />, title: "Program Coordination & Operations", description: "Designing and managing structured programs, workshops, and community initiatives." },
  ];

  const skills = [
    "Operations & Program Coordination",
    "Youth Mentorship & Academic Guidance",
    "Career Development & Personal Branding",
    "CV & Cover Letter Writing",
    "LinkedIn and Other Platform Optimization",
    "Entrepreneurship Guidance & Business Planning",
    "Developing Schemes of Work, Lesson Plans & Records of Work",
    "Structured Training & Workshop Facilitation",
    "Manuscript Development & Author Mentorship",
    "Reading Culture Promotion & Book Curation",
    "Strategic Planning & Execution",
    "Stakeholder Engagement & Liaison",
    "Communication, Reporting & Documentation",
  ];

  const workWithMe = [
    "One-on-one mentorship",
    "CV & cover letter writing and optimization",
    "LinkedIn and other platform optimization",
    "Job application process and guidance",
    "Interview preparation and guidance",
    "Manuscript development & author mentorship",
    "Entrepreneurship guidance and business plan coaching",
    "School and institutional partnerships",
    "Speaking engagements",
    "Book club facilitation",
    "Career and personal growth workshops",
    "Reading culture promotion & book curation",
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-black">
        {/* Hero */}
        <section className="py-16 border-b border-white/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">What I Do</h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Empowering individuals through career development, personal growth, entrepreneurship guidance, and structured mentorship.
            </p>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-5">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-10 text-white text-center">My Skills & Core Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-white mr-3 flex-shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work With Me */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-4 text-white text-center">Work With Me</h2>
            <p className="text-gray-400 text-center mb-10">You can collaborate with me through:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {workWithMe.map((item, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <span className="text-white mr-3">•</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to grow intentionally?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              If you are ready to build confidence and pursue your purpose, let's connect.
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
