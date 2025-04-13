
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      quote: "Working with Caroline transformed my approach to career development. Her guidance helped me secure a director-level position I never thought was within my reach. I now have the confidence to lead my team effectively.",
      stars: 5
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      quote: "After feeling stuck in my career for years, Caroline helped me identify my strengths and find a role that aligns with my values. Her personalized coaching style made all the difference in my professional journey.",
      stars: 5
    },
    {
      name: "Amara Okafor",
      role: "Healthcare Administrator",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      quote: "Caroline's resume help and interview preparation were game changers. I received multiple job offers after working with her for just one month. Her insights into personal branding completely changed how I present myself.",
      stars: 5
    },
    {
      name: "David Rodriguez",
      role: "Financial Analyst",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      quote: "The leadership development program with Caroline equipped me with the tools to advance in my career. Her coaching style is supportive yet challenging, pushing me to grow in ways I didn't expect.",
      stars: 5
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-brand-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Client <span className="text-gradient">Testimonials</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover how my coaching has helped professionals transform their careers and achieve their goals.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Controls */}
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-brand-purple/20 hover:bg-brand-purple/40 rounded-full p-2 text-white transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-brand-purple/20 hover:bg-brand-purple/40 rounded-full p-2 text-white transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="min-w-full p-4"
                >
                  <div className="bg-brand-dark border border-gray-800 rounded-xl p-8 shadow-xl">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-24 h-24 object-cover rounded-full border-2 border-brand-purple/30" 
                        />
                      </div>
                      <div>
                        <div className="flex mb-2">
                          {[...Array(testimonial.stars)].map((_, i) => (
                            <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                        <div>
                          <p className="font-semibold text-white">{testimonial.name}</p>
                          <p className="text-gray-400 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-brand-purple' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
