
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GraduationCap, Target, Shield, Heart, Sparkles, Award, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const coreValues = [
    { icon: <Target className="w-7 h-7 text-white" />, title: "Intentional Growth", description: "I believe growth must be deliberate and structured to produce measurable impact." },
    { icon: <Award className="w-7 h-7 text-white" />, title: "Excellence", description: "I am committed to high standards in thinking, performance, and conduct." },
    { icon: <Heart className="w-7 h-7 text-white" />, title: "Authenticity", description: "I strive to be genuine, honest, and true to myself in every engagement." },
    { icon: <Shield className="w-7 h-7 text-white" />, title: "Integrity", description: "I act with accountability and ethical leadership in all interactions." },
    { icon: <Sparkles className="w-7 h-7 text-white" />, title: "Empowerment Through Structure", description: "I know transformation happens when guidance is clear, practical, and actionable." },
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Caroline Kitumbui</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Career & Personal Development Advocate | Author | Founder | Growth & Entrepreneurship Enthusiast
              </p>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>I am a career and personal development advocate, author, and community builder with a special interest in entrepreneurship. My experience in academia and program coordination has shaped my ability to design structured guidance, support young professionals, and cultivate purposeful growth.</p>
              <p><strong className="text-white">Sky My Limit</strong> was born out of my passion to empower young people and professionals by providing structured mentorship, career guidance, personal branding support, mindset growth initiatives, and entrepreneurship insights. Since 2019, I have guided several cohorts in developing business plans and viable business ideas that meet professional and national standards (KNEC).</p>
              <p>I am skilled in developing schemes of work, lesson plans, and records of work, ensuring all my training and mentorship sessions are structured, resourceful, and impactful.</p>
              <p>As Book Club Officer at <strong className="text-white">SAV Skills Leaders Book Club</strong>, I promote reading, reflection, and intellectual engagement. I am also a published author, supporting aspiring writers in developing manuscripts, combining practical mentorship with thought leadership.</p>
              <p>I am also the Founder of <strong className="text-white">Carol's Book Bar</strong>, born out of my desire to cultivate a reading culture, bring resources closer to people, and help them understand the transformative benefits of reading. Through this initiative, I curate and sell self-help, leadership, and children's books, provide reading recommendations, and foster intentional engagement with literature as a tool for personal and professional growth.</p>
              <p className="italic text-gray-400">Everything I do is grounded in authenticity, intentional growth, and empowerment through structure.</p>
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
                  To empower individuals to grow intentionally by cultivating confidence, clarity of purpose, practical skills, and entrepreneurial insight, while helping young professionals and students navigate academic, career, and personal development challenges successfully.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">My Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be a transformative leader in youth development, career empowerment, and personal growth — helping individuals live boldly, think critically, and pursue excellence with purpose.
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
                  <p className="text-gray-400 text-sm">Ongoing</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Bachelor's Degree in Business Management</h4>
                  <p className="text-gray-400 text-sm">Moi University</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Background in Hospitality</h4>
                  <p className="text-gray-400 text-sm">Alumnus of Moi University</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sky My Limit & Book Bar */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <Users className="w-7 h-7 text-white mr-3" />
                  <h3 className="text-2xl font-bold text-white">Sky My Limit</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I founded Sky My Limit out of my passion to nurture potential from early development to professional growth. Through its pillars — Junior Minds Book Club, Career Opportunities & Guidance, Personal Branding Optimization, Mindset Growth, and entrepreneurship support including business planning guidance — I equip learners, students, and professionals with tools, mentorship, and clarity for intentional success.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-7 h-7 text-white mr-3" />
                  <h3 className="text-2xl font-bold text-white">Growth & Reading Advocacy</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Reading is a discipline, not a hobby. As Book Club Officer at SAV Skills Leaders Book Club, I promote critical reflection, structured discussion, and application of ideas. I also guide individuals exploring entrepreneurial opportunities, helping them turn skills into ventures and develop viable business ideas and plans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Interests & Fun Fact */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-white">Personal Interests</h2>
            <ul className="space-y-3 mb-12">
              {personalInterests.map((interest, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="text-white mr-3">•</span>
                  {interest}
                </li>
              ))}
            </ul>

            <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Fun Fact</h3>
              <p className="text-gray-300 leading-relaxed">
                I am an opportunistic entrepreneur 😄 — I love spotting opportunities and turning ideas into reality. I am lovey-dovey 😅 — a little tip to my future husband 😉. What I don't like doing… that's reserved for my future husband 😄
              </p>
            </div>
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
