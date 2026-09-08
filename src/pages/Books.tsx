import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, PenTool, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Books = () => {
  const books = [
    { title: "The Path to Personal Excellence", description: "A guide to pursuing high standards in thinking, performance, and conduct." },
    { title: "Steps to a Better You", description: "Practical steps for intentional, reflective personal growth." },
    { title: "The Path to Reinvention", description: "On reinventing yourself and pursuing new possibilities." },
    { title: "Transforming Your Career Narrative", description: "Reshaping the story of your career with clarity and purpose." },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-black">
        {/* Hero */}
        <section className="py-16 border-b border-white/10">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Books &amp; Thought Leadership</h1>
            <p className="text-gray-300 leading-relaxed">
              I believe books, ideas, reflection, and continuous learning play an important role in human development.
            </p>
          </div>
        </section>

        {/* Books */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-10 text-white text-center">Published Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {books.map((book, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-8">
                  <BookOpen className="w-8 h-8 text-white mb-5" />
                  <h3 className="text-xl font-semibold mb-3 text-white">{book.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{book.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Author mentorship */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
                <PenTool className="w-7 h-7 text-white mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-white">Author Mentorship</h3>
                <p className="text-gray-300 leading-relaxed">
                  I support aspiring authors through manuscript development and author mentorship — helping them shape ideas, structure their writing, and carry a manuscript through to completion.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
                <BookOpen className="w-7 h-7 text-white mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-white">Carol's Book Bar</h3>
                <p className="text-gray-300 leading-relaxed">
                  Through Carol's Book Bar I curate and share self-help, leadership, and children's books, offer reading recommendations, and promote reading culture as a tool for personal and professional growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <Link to="/contact" className="inline-flex items-center bg-white text-black font-medium px-8 py-3 rounded-full transition-all duration-300 hover:bg-gray-200 group">
              Work With Me
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Books;
