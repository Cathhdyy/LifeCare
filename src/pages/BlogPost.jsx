import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogPosts } from './Blog';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Twitter, 
  Facebook, 
  Linkedin,
  ArrowRight,
  Heart,
  ShieldCheck,
  Award,
  BookOpen,
  Sparkles,
  ChevronRight,
  Stethoscope
} from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  // Related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== parseInt(id))
    .slice(0, 2);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="text-center max-w-md">
           <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-100 text-slate-400">
             <BookOpen className="w-10 h-10" />
           </div>
           <h1 className="text-4xl font-black text-slate-900 mb-4">Post Not Found</h1>
           <p className="text-slate-500 font-medium mb-10">The article you're looking for doesn't exist or has been moved.</p>
           <Link to="/blog" className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-2xl font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95">
             <ArrowLeft className="w-5 h-5 mr-2.5" /> Back to Blog
           </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900">
      <SEO 
        title={post.title} 
        description={post.excerpt}
      />

      {/* Custom Styles for Typography */}
      <style dangerouslySetInnerHTML={{__html: `
        .prose-custom p { margin-bottom: 2rem; line-height: 1.8; color: #334155; font-size: 1.125rem; font-weight: 500; }
        .prose-custom h3 { font-weight: 900; font-size: 1.875rem; margin-top: 3.5rem; margin-bottom: 1.5rem; color: #0f172a; line-height: 1.2; letter-spacing: -0.025em; }
        .prose-custom ul { margin-bottom: 2rem; padding-left: 0; list-style: none; }
        .prose-custom li { position: relative; padding-left: 2rem; margin-bottom: 1rem; color: #334155; font-size: 1.125rem; font-weight: 500; line-height: 1.7; }
        .prose-custom li::before { content: "✓"; position: absolute; left: 0; top: 0; color: #3b82f6; font-weight: 900; }
        .prose-custom strong { font-weight: 900; color: #1e293b; }
        
        .drop-cap::first-letter {
          font-family: inherit;
          float: left;
          font-size: 2.75rem;
          line-height: 1;
          font-weight: 900;
          margin-right: 0.75rem;
          margin-top: 0.25rem;
          color: #3b82f6;
          text-shadow: 2px 2px 0px rgba(59, 130, 246, 0.1);
        }

        @media (min-width: 640px) {
          .drop-cap::first-letter {
            font-size: 3.5rem;
          }
        }

        .blockquote {
          position: relative;
          padding: 2rem;
          margin: 3rem 0;
          background: #f8fafc;
          border-left: 4px solid #3b82f6;
          border-radius: 0 1.5rem 1.5rem 0;
          font-style: italic;
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
        }
      `}} />

      {/* Article Header & Hero */}
      <header className="relative pt-16 md:pt-24 pb-12 md:pb-20 overflow-hidden bg-[#fafbfd] border-b border-slate-100">
         {/* Background Decor */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none"></div>
         
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
            <Link to="/blog" className="inline-flex items-center text-blue-600 font-extrabold text-xs sm:text-sm mb-6 sm:mb-8 hover:text-blue-700 transition-colors group bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Resource Library
            </Link>
            
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-600/10">
                {post.category}
              </span>
              <div className="flex items-center text-slate-400 font-bold text-[10px] sm:text-xs font-mono uppercase tracking-widest">
                 <Calendar className="w-3.5 h-3.5 mr-1.5 text-blue-400" /> {post.date}
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold sm:font-black text-slate-900 mb-8 sm:mb-10 tracking-tight leading-[1.1] sm:leading-[1.15] px-2 sm:px-0">
               {post.title}
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-8 border-t border-slate-200/60">
               <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center text-white font-black text-lg shadow-xl ring-4 ring-white">
                    {post.author.charAt(4)}
                  </div>
                  <div className="text-left">
                     <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] leading-none mb-1">Article By</p>
                     <p className="text-slate-900 font-black text-base">{post.author}</p>
                  </div>
               </div>
               <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
               <div className="flex items-center text-slate-500 font-bold text-sm bg-white sm:bg-slate-100/50 px-3 py-1 rounded-full border border-slate-200/50 shadow-sm sm:shadow-none">
                  <Clock className="w-4 h-4 mr-2 text-blue-500" /> {post.readTime}
               </div>
            </div>
         </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
         {/* Main Post Image */}
         <div className="mb-12 md:mb-16 -mt-24 md:-mt-32 relative z-20">
            <div className="aspect-[16/9] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-8 border-white bg-white group">
               <img 
                 src={post.image} 
                 alt={post.title} 
                 className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
               />
            </div>
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-6 sm:gap-4">
               <div className="flex items-center gap-2">
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all border border-slate-200 shadow-sm" aria-label="Share on Twitter">
                    <Twitter size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all border border-slate-200 shadow-sm" aria-label="Share on Facebook">
                    <Facebook size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all border border-slate-200 shadow-sm" aria-label="Share on LinkedIn">
                    <Linkedin size={18} />
                  </button>
               </div>
               <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-slate-500 hover:text-blue-600 font-black transition-all text-[10px] uppercase tracking-widest px-6 py-3 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md">
                  <Share2 size={16} className="text-blue-500" /> Copy Article Link
               </button>
            </div>
         </div>

         {/* Article Content - Surgical Magazine Styling */}
         <div className="prose-custom max-w-none mb-16 md:mb-24">
            {post.content.split('\n').filter(line => line.trim() !== '').map((line, index, array) => {
              const trimmedLine = line.trim();
              
              // 1. Header Handling
              if (trimmedLine.startsWith('### ')) {
                return (
                  <h3 key={index} className="flex flex-col mt-10 sm:mt-14 mb-5 sm:mb-6">
                    <span className="h-1 w-10 bg-blue-600 rounded-full mb-4 sm:mb-5"></span>
                    <span className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                      {trimmedLine.replace('### ', '')}
                    </span>
                  </h3>
                );
              }

              // 2. List Item Handling
              if (trimmedLine.startsWith('- ')) {
                return (
                  <div key={index} className="flex items-start gap-4 mb-5 pl-2">
                    <div className="mt-1.5 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100 shadow-sm">
                      <span className="text-blue-600 text-[10px] font-black">✓</span>
                    </div>
                    <span className="text-slate-600 font-medium text-lg leading-relaxed">
                      {trimmedLine.replace('- ', '').split('**').map((part, i) => 
                        i % 2 === 1 ? <strong key={i} className="text-slate-900 font-black">{part}</strong> : part
                      )}
                    </span>
                  </div>
                );
              }

              // 3. Blockquote Handling (if needed in future)
              if (trimmedLine.startsWith('> ')) {
                return (
                  <div key={index} className="blockquote my-10">
                    <Quote className="absolute -top-4 -left-4 w-10 h-10 text-blue-100 rotate-180" />
                    {trimmedLine.replace('> ', '')}
                  </div>
                );
              }

              // 4. Default Paragraph Handling
              // Find the first paragraph to apply drop-cap
              const isFirstParagraph = array.findIndex(l => !l.trim().startsWith('### ') && !l.trim().startsWith('- ') && !l.trim().startsWith('> ')) === index;
              
              return (
                <p key={index} className={`mb-8 text-slate-600 font-medium text-lg sm:text-xl leading-[1.8] ${isFirstParagraph ? 'drop-cap' : ''}`}>
                  {trimmedLine.split('**').map((part, i) => 
                    i % 2 === 1 ? <strong key={i} className="text-slate-900 font-black">{part}</strong> : part
                  )}
                </p>
              );
            })}
         </div>

         {/* Author Bio Card */}
         <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden mb-24 md:mb-32 group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-1000"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
               <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-4 border-slate-800 flex-shrink-0 shadow-2xl transform md:-rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-4xl font-black">
                    {post.author.charAt(4)}
                  </div>
               </div>
               <div className="text-center md:text-left flex-grow">
                  <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-black text-blue-400 mb-4 border border-white/10">
                    <Award className="w-3.5 h-3.5" /> Clinical Expert
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black mb-3">{post.author}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed text-sm sm:text-lg max-w-2xl mb-6">
                    Dr. {post.author.split(' ')[1]} is a leading dental specialist dedicated to providing painless, personalized care at Life Care Dental Clinic. With over a decade of experience, she combines clinical excellence with personal compassion.
                  </p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                     <span className="flex items-center gap-2 text-slate-300 font-bold text-xs uppercase tracking-wider">
                        <Stethoscope className="w-3.5 h-3.5 text-blue-500" /> Specialist
                     </span>
                     <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                     <span className="flex items-center gap-2 text-slate-300 font-bold text-xs uppercase tracking-wider">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-500" /> Govt. Registered
                     </span>
                  </div>
               </div>
            </div>
         </div>

         {/* Related Posts Section */}
         <div className="pt-16 border-t border-slate-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Keep Reading Insights</h2>
                <Link to="/blog" className="inline-flex items-center text-blue-600 font-black text-sm hover:underline group">
                   View Resource Library <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {relatedPosts.map((rPost) => (
                 <Link key={rPost.id} to={`/blog/${rPost.id}`} className="group block h-full">
                    <div className="aspect-[16/9] rounded-3xl overflow-hidden mb-6 shadow-sm border border-slate-100 group-hover:shadow-2xl transition-all duration-500">
                       <img 
                        src={rPost.image} 
                        alt={rPost.title} 
                        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                       />
                    </div>
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 font-mono">
                       <span className="text-blue-600 border border-blue-100 bg-blue-50/50 px-2 py-0.5 rounded-md">{rPost.category}</span>
                       <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                       <span>{rPost.date}</span>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                       {rPost.title}
                    </h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed line-clamp-2">
                       {rPost.excerpt}
                    </p>
                 </Link>
               ))}
            </div>
         </div>
      </main>

      {/* Persistent CTA Bar */}
      <section className="bg-slate-50 border-y border-slate-100 py-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-blue-50 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-2xl -mr-16 -mt-16"></div>
               <div className="text-center lg:text-left relative z-10 flex-grow">
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-[10px] uppercase tracking-widest font-black mb-4 border border-blue-100">
                    <Sparkles className="w-3.5 h-3.5" /> Book Your Appointment Today
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight">Ready to achieve your perfect smile?</h2>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Join over 5,000 happy patients. Schedule your professional consultation now.
                  </p>
               </div>
               <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
                  <Link to="/contact" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 px-10 rounded-2xl font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 hover:-translate-y-1 active:scale-95 flex items-center justify-center">
                    Check Appointments <ArrowRight className="w-5 h-5 ml-2.5" />
                  </Link>
                  <a href="https://wa.me/917478851252" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-800 px-8 py-4 px-10 rounded-2xl font-black hover:bg-slate-50 transition-all flex items-center justify-center">
                     Chat with Us
                  </a>
               </div>
            </div>
         </div>
      </section>

      {/* Footer is already included in Layout */}
    </div>
  );
}
