import { Award, Heart, Target, Users, Book, Briefcase, GraduationCap, BookOpen } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      title: "Empowerment",
      description: "Helping you gain the confidence to take decisive action."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Growth",
      description: "Encouraging transformation through challenges and new opportunities."
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Community",
      description: "Creating a supportive network where growth and success is shared."
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: "Authenticity",
      description: "Championing genuineness as the cornerstone of achievement."
    },
  ];

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "1,000+", label: "Books Read" },
    { number: "2+", label: "Books Authored" },
    { number: "500+", label: "Lives Changed" },
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
    <section id="about" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="text-gradient">Caroline</span></h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm Caroline Kitumbui, a Career and Personal Development Advocate who believes in the power of authenticity. I'm ardent about career and personal development for young minds and this stems from a deep belief that everyone has the potential to grow and thrive.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I choose to share not from a pedestal of perfection but from the trenches of my own experiences—filled with mistakes, lessons learned, and deliberate corrections. Every misstep has been a stepping stone on my journey, shaping the advocate I am today.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Imagine a world where every person wakes up feeling confident, capable, and ready to conquer their dreams! That's the vision I strive to bring to life—not just for myself, but for everyone in my network. I believe that when we lift each other up, we create a ripple effect of success and resilience.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I find immense joy in helping individuals unlock their strengths, set meaningful goals, and navigate their personal and professional journeys. Witnessing someone transform, gain confidence, and achieve their aspirations is incredibly fulfilling.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-brand-darker rounded-lg hover:shadow-lg hover:shadow-brand-purple/10 transition-all duration-300">
                  <div className="text-3xl font-bold text-brand-purple mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">My <span className="text-gradient">Vision & Mission</span></h3>
              <div className="space-y-4">
                <div className="bg-brand-darker p-6 rounded-lg border-l-4 border-brand-purple">
                  <h4 className="text-xl font-medium mb-2">Vision</h4>
                  <p className="text-gray-400 italic">
                    "To inspire a world where everyone is confident, capable, and unstoppable in achieving their dreams and lifting others along the way."
                  </p>
                </div>
                
                <div className="bg-brand-darker p-6 rounded-lg border-l-4 border-purple-400">
                  <h4 className="text-xl font-medium mb-2">Mission</h4>
                  <p className="text-gray-400 italic">
                    "To empower individuals to exceed their limits by offering the tools, mentorship, and community support for unmatched career and personal development."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h3 className="text-2xl font-bold mb-6">Core <span className="text-gradient">Values</span></h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="bg-brand-darker p-6 rounded-lg hover:shadow-lg hover:shadow-brand-purple/10 transition-all duration-300">
                    <div className="mb-4">{value.icon}</div>
                    <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-bold mb-6">My <span className="text-gradient">Education & Certifications</span></h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-brand-darker p-5 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-brand-purple mt-1" />
                  <div>
                    <h4 className="font-semibold">Bachelor's Degree in Business Management-Accounts</h4>
                    <p className="text-gray-400 text-sm">Moi University, CPA 4</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-brand-darker p-5 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-brand-purple mt-1" />
                  <div>
                    <h4 className="font-semibold">MBA in Strategic Management</h4>
                    <p className="text-gray-400 text-sm">Currently pursuing with special interest in entrepreneurship</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-brand-darker p-5 rounded-lg">
                  <Briefcase className="w-6 h-6 text-brand-purple mt-1" />
                  <div>
                    <h4 className="font-semibold">Certified Trainer</h4>
                    <p className="text-gray-400 text-sm">Germany Chambers of Commerce, with special interest in Entrepreneurship and Communication Skills</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-brand-darker p-5 rounded-lg">
                  <BookOpen className="w-6 h-6 text-brand-purple mt-1" />
                  <div>
                    <h4 className="font-semibold">Book club officer</h4>
                    <p className="text-gray-400 text-sm">SAV Skills Leaders Book Club</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
