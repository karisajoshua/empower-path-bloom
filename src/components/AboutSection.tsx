
import { Award, Heart, Target } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      title: "Empathy",
      description: "Understanding your challenges and experiences with compassion and care."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Results",
      description: "Focused on delivering tangible outcomes and sustainable growth."
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: "Excellence",
      description: "Committed to the highest standards of coaching and professional support."
    },
  ];

  return (
    <section id="about" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="text-gradient">Caroline</span></h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 15 years of experience in career development and coaching, I'm passionate about helping individuals discover their purpose and reach their full potential. My approach combines strategic career planning with personal development to create lasting transformation.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              After working with hundreds of professionals across various industries, I've developed a unique methodology that addresses both the practical and emotional aspects of career growth. My clients don't just find better jobs—they build fulfilling careers aligned with their values and strengths.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe everyone deserves work that energizes rather than depletes, and I'm committed to helping you find that balance.
            </p>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">My <span className="text-gradient">Mission</span></h3>
              <p className="text-gray-300 leading-relaxed italic border-l-4 border-brand-purple pl-4 py-2">
                "To empower individuals to navigate their career paths with confidence, clarity, and purpose—transforming professional challenges into opportunities for growth and fulfillment."
              </p>
            </div>
            
            <div className="pt-6">
              <h3 className="text-2xl font-bold mb-6">Core <span className="text-gradient">Values</span></h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="bg-brand-darker p-6 rounded-lg hover:shadow-lg hover:shadow-brand-purple/10 transition-all duration-300">
                    <div className="mb-4">{value.icon}</div>
                    <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
