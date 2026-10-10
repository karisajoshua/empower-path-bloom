
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GraduationCap, Target, Shield, Heart, Sparkles, Award, BookOpen, Users } from 'lucide-react';
import carolImage from '@/assets/carol-nobg.png';
import { Link } from 'react-router-dom';

const About = () => {
  const coreValues = [
    { icon: <Target className="w-7 h-7 text-white" />, title: "Intentional Growth", description: "Growth should be deliberate, reflective, and purposeful." },
    { icon: <Award className="w-7 h-7 text-white" />, title: "Excellence", description: "I believe in pursuing high standards in thinking, performance, and conduct." },
    { icon: <Heart className="w-7 h-7 text-white" />, title: "Authenticity", description: "Meaningful growth begins with being honest about who you are and where you are." },
    { icon: <Shield className="w-7 h-7 text-white" />, title: "Integrity", description: "I value accountability, responsibility, and ethical conduct." },
    { icon: <Sparkles className="w-7 h-7 text-white" />, title: "Empowerment Through Structure", description: "People are more likely to transform when guidance is clear, practical, and actionable." },
  ];

  const personalInterests = [
    "Spending quality time alone for reflection and personal growth",
    "Reading widely — books, articles, and thought leadership content",
    "Supporting and mentoring young professionals",
    "Writing and developing manuscripts",
    "Lifelong learning, exploring growth strategies, and entrepreneurship",
    "Promoting reading culture and literacy through book initiatives",
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-black">
        {/* Hero */}
        <section className="py-16 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Who is Caroline Kitumbui?</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Career &amp; Personal Development Advocate | Creator of the DDD Framework | Author | Speaker | MC
              </p>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section className="py-20 border-b border-white/10">
            <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold mb-8 text-white">My Story</h2>
            <div className="flex flex-col md:flex-row gap-10 items-stretch">
              {/* Image with dark blend */}
              <div className="relative w-full md:w-[420px] lg:w-[480px] flex-shrink-0 mx-auto md:mx-0">
                <div className="relative overflow-hidden rounded-lg h-full">
                  <img
                    src={carolImage}
                    alt="Caroline Kitumbui, Career and Personal Development Advocate"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlays for seamless dark blend */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60 hidden md:block" />
                  <div className="absolute inset-0 rounded-lg ring-1 ring-white/10" />
                </div>
              </div>
              {/* Text */}
              <div className="flex-1 space-y-5 text-gray-300 leading-relaxed">
                <p>I am a Career &amp; Personal Development Advocate, Creator of the DDD Framework, Author, Speaker, MC, and Community Builder passionate about helping people recognize their potential and grow intentionally.</p>

                <p>My work sits at the intersection of personal growth, career development, human potential, and meaningful impact.</p>

                <p>My journey into this work began with <a href="https://www.skymylimit.co.ke/" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline">Sky My Limit</a>, an initiative I founded to empower young people and professionals through career guidance, mentorship, personal branding, personal growth, and entrepreneurship support. Sky My Limit served that purpose from 2019 until July 2026.</p>

                <p>Over time, my work evolved. From the experiences, lessons, conversations, books, training, mentorship, and people I encountered, a clearer philosophy emerged: the work was ultimately about human potential.</p>

                <p>This led to the birth of the <strong className="text-white">DDD Framework</strong> in July 2026, which officially launched on 2 October 2026.</p>

                <p>Today, my work is focused on helping people discover who they are, develop their capacity, and deploy their fullest potential to create meaningful impact.</p>
              </div>
            </div>
          </div>
        </section>

        {/* My Belief */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">My Belief</p>
            <h2 className="text-3xl font-bold mb-8 text-white">Every Person Has Potential.</h2>
            <div className="space-y-5 text-gray-300 leading-relaxed">
              <p>Potential is universal. But potential is only the beginning.</p>
              <p>It must be discovered, intentionally developed, and deployed to create meaningful impact.</p>
              <p>I believe people can grow, reinvent themselves, pursue new possibilities, and make meaningful contributions throughout their lives.</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">My Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To advance the understanding and practice of human potential by helping individuals discover who they are, develop their capacity, and deploy their potential to create meaningful impact.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">My Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  A world where more people recognize their potential, intentionally develop their capacity, and use what they have to create value and meaningful impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-10 text-white text-center">My Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-lg">
                  <div className="mb-4">{value.icon}</div>
                  <h4 className="text-lg font-semibold mb-2 text-white">{value.title}</h4>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-white">Education</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white mt-1" />
                <div>
                  <h4 className="font-semibold text-white">MBA in Strategic Management</h4>
                  
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Bachelor's Degree in Business Management</h4>
                  
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Background in Hospitality</h4>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sky My Limit history & reading advocacy */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <Users className="w-7 h-7 text-white mr-3" />
                  <a href="https://www.skymylimit.co.ke/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-white hover:underline">Sky My Limit</a>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  From 2019 until July 2026, <a href="https://www.skymylimit.co.ke/" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline">Sky My Limit</a> empowered young people and professionals through career guidance, mentorship, personal branding, personal growth, and entrepreneurship support. Its lessons shaped the philosophy that became the DDD Framework.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-7 h-7 text-white mr-3" />
                  <h3 className="text-2xl font-bold text-white">Reading &amp; Book Advocacy</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Reading is a discipline, not a hobby. I promote critical reflection, structured discussion, and the application of ideas — and through <strong className="text-white">Carol's Book Bar</strong> I curate self-help, leadership, and children's books and share reading recommendations.
                </p>
                <Link to="/books" className="text-white font-medium hover:underline">See my books →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Interests */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-white">Personal Interests</h2>
            <ul className="space-y-3">
              {personalInterests.map((interest, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="text-white mr-3">•</span>
                  {interest}
                </li>
              ))}
            </ul>


          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <Link to="/contact" className="inline-block bg-white text-black font-medium px-8 py-3 rounded-full transition-all duration-300 hover:bg-gray-200">
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
