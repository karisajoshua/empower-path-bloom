
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterSection from '../components/NewsletterSection';

const Blog = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'How to Build Your Personal Brand in 2025',
      excerpt: 'Discover the essential strategies to create a powerful personal brand that opens doors to new opportunities.',
      image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      author: 'Caroline Kitumbui',
      date: 'April 5, 2025',
      readTime: '8 min read',
      category: 'Personal Branding'
    },
    {
      id: '2',
      title: 'The 5 Most Common Resume Mistakes to Avoid',
      excerpt: 'Learn which critical errors might be costing you interviews and how to fix them for a more effective resume.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      author: 'Caroline Kitumbui',
      date: 'March 22, 2025',
      readTime: '6 min read',
      category: 'Career Tips'
    },
    {
      id: '3',
      title: 'Navigating Career Transitions: A Step-by-Step Guide',
      excerpt: 'Changing careers can be daunting. Follow this comprehensive guide to make your transition successful.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      author: 'Caroline Kitumbui',
      date: 'March 10, 2025',
      readTime: '10 min read',
      category: 'Career Transition'
    },
    {
      id: '4',
      title: 'Building Confidence for Your Next Job Interview',
      excerpt: 'Practical strategies to overcome nervousness and present your best self during job interviews.',
      image: 'https://images.unsplash.com/photo-1573497491765-dccce02b6b0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      author: 'Caroline Kitumbui',
      date: 'February 28, 2025',
      readTime: '7 min read',
      category: 'Interview Tips'
    },
    {
      id: '5',
      title: 'The Power of Professional Networking in 2025',
      excerpt: 'How to build and leverage your professional network to create career opportunities in the digital age.',
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      author: 'Caroline Kitumbui',
      date: 'February 15, 2025',
      readTime: '9 min read',
      category: 'Networking'
    },
    {
      id: '6',
      title: 'Finding Purpose in Your Work: Beyond the Paycheck',
      excerpt: 'Discover how to align your career with your personal values for greater fulfillment and satisfaction.',
      image: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      author: 'Caroline Kitumbui',
      date: 'January 30, 2025',
      readTime: '11 min read',
      category: 'Personal Development'
    }
  ];

  const categories = [
    'All Posts',
    'Career Tips',
    'Personal Branding',
    'Leadership',
    'Interview Tips',
    'Career Transition',
    'Personal Development'
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12 bg-brand-darker min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">The <span className="text-gradient">EmpowerPath</span> Blog</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Insights, strategies, and expert advice to help you navigate your career path and personal development journey.
            </p>
          </div>
          
          {/* Categories */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-4 min-w-max pb-2">
              {categories.map((category, index) => (
                <button 
                  key={index}
                  className={`px-4 py-2 rounded-full transition-colors duration-300 whitespace-nowrap ${
                    index === 0 
                      ? 'bg-brand-purple text-white' 
                      : 'bg-transparent text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-brand-dark border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-brand-purple/10 hover:-translate-y-1 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 right-4 bg-brand-purple text-xs font-bold text-white py-1 px-3 rounded-full">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 group-hover:text-brand-purple transition-colors">
                    {post.title}
                  </h2>
                  
                  <div className="flex items-center text-xs text-gray-400 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User size={16} className="text-brand-purple mr-2" />
                      <span className="text-sm text-gray-300">{post.author}</span>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="text-brand-purple hover:text-purple-400 font-medium text-sm flex items-center transition-colors"
                    >
                      Read More <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              {[1, 2, 3].map((page) => (
                <button 
                  key={page}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-300 ${
                    page === 1 
                      ? 'bg-brand-purple text-white' 
                      : 'bg-transparent text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default Blog;
