import React, { useState, useEffect } from 'react';
import { FileText, ArrowLeft, AlertTriangle, CalendarClock, ShieldAlert, Scale, RefreshCw, ChevronRight, MessageCircle, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const termsSections = [
  { 
    id: 'medical-disclaimer', 
    title: 'Medical Disclaimer', 
    icon: AlertTriangle, 
    content: 'The content provided on this website is for informational purposes only and is strictly not a substitute for professional medical or dental advice, diagnosis, or treatment. Always seek the advice of your dentist or other qualified health provider with any questions you may have regarding a medical condition.' 
  },
  { 
    id: 'appointments', 
    title: 'Appointments & Scheduling', 
    icon: CalendarClock, 
    content: 'Appointment requests submitted via our website or WhatsApp are subject to availability. A request does not guarantee a confirmed time slot until you receive direct confirmation from our clinic staff. We reserve the right to reschedule or cancel appointments due to emergencies or unforeseen clinical circumstances.' 
  },
  { 
    id: 'intellectual-property', 
    title: 'Intellectual Property', 
    icon: ShieldAlert, 
    content: 'Unless otherwise indicated, the website and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site are owned or controlled by us and are protected by copyright and trademark laws. Unauthorized use is strictly prohibited.' 
  },
  { 
    id: 'governing-law', 
    title: 'Governing Law', 
    icon: Scale, 
    content: 'These Terms shall be governed by and defined following the laws of India. Life Care Dental Clinic and yourself irrevocably consent that the courts of Sikkim, India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.' 
  },
  { 
    id: 'modifications', 
    title: 'Modifications', 
    icon: RefreshCw, 
    content: 'We reserve the right to modify or replace these Terms at any time. Any changes will be updated on this page. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.' 
  },
];

export default function Terms() {
  const [activeSection, setActiveSection] = useState('medical-disclaimer');

  useEffect(() => {
    // Add smooth scrolling to html element when this component mounts
    document.documentElement.classList.add('scroll-smooth');
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300; // Adjusted offset for better trigger
      for (let i = termsSections.length - 1; i >= 0; i--) {
        const section = document.getElementById(termsSections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(termsSections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.classList.remove('scroll-smooth');
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-24 relative overflow-x-hidden font-sans text-slate-800 selection:bg-purple-200 selection:text-purple-900">
      
      <SEO 
        title="Terms of Service" 
        description="Read the terms and conditions for using Life Care Dental Clinic's website and services."
      />

      {/* Premium Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgwLCAwLCAwLCAwLjA1KSIvPjwvc3ZnPg==')] opacity-100 z-0 pointer-events-none"></div>

      {/* Animated Glowing Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-400/20 rounded-full blur-[80px] sm:blur-[120px] animate-pulse"></div>
        <div className="absolute top-[20%] left-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-pink-400/20 rounded-full blur-[100px] sm:blur-[150px] animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-8 sm:mb-12">
          <Link to="/" className="inline-flex items-center text-xs sm:text-sm font-extrabold text-slate-500 hover:text-purple-600 transition-colors group bg-white/60 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:bg-white">
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1.5 transition-transform duration-300" />
            Back to Home
          </Link>
          
          <Link to="/privacy" className="inline-flex items-center text-xs sm:text-sm font-extrabold text-slate-500 hover:text-purple-600 transition-colors group bg-white/60 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:bg-white">
            <Shield className="w-4 h-4 mr-2 text-purple-500" />
            View Privacy Policy
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-14 shadow-xl shadow-purple-900/5 border border-white mb-12 md:mb-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg shadow-purple-500/30 transform -rotate-6 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500">
                <FileText className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              
              <div className="inline-flex items-center space-x-2 bg-purple-50 text-purple-700 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-widest border border-purple-100 shadow-sm w-fit">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                <span>Last Updated: March 2026</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight text-slate-900">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Service</span>
            </h1>
            <p className="text-slate-500 font-medium text-sm sm:text-lg max-w-2xl leading-relaxed">
              These terms constitute a legally binding agreement made between you and Life Care Dental Clinic concerning your access to and use of our website and services.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative items-start">
          
          {/* Sticky Sidebar Navigation */}
          <div className="lg:w-1/3 hidden lg:block sticky top-28">
            <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 shadow-xl shadow-slate-200/50 border border-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 opacity-80"></div>
              <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-6 px-4 pt-2">Table of Contents</h3>
              <nav className="space-y-2">
                {termsSections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <a 
                      key={section.id}
                      href={`#${section.id}`}
                      className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl font-bold transition-all duration-300 ${isActive ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 translate-x-2' : 'text-slate-600 hover:bg-purple-50 hover:text-purple-700'}`}
                    >
                      <div className="flex items-center">
                        <section.icon className={`w-4 h-4 mr-3 transition-colors ${isActive ? 'text-purple-200' : 'text-slate-400'}`} />
                        <span className="text-sm">{section.title}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0 text-white' : 'opacity-0 -translate-x-4'}`} />
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Terms Content List */}
          <div className="lg:w-2/3 space-y-6 sm:space-y-8 pb-10 w-full">
            {termsSections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-32 group">
                <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-sm border border-slate-200 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-500 relative overflow-hidden h-full">
                  
                  {/* Subtle Animated Left Border */}
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-purple-500 to-pink-400 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
                  
                  {/* Large Faint Watermark Icon */}
                  <div className="absolute -right-8 -bottom-8 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-700 pointer-events-none transform group-hover:scale-110 group-hover:-rotate-12 z-0 text-purple-900">
                    <section.icon className="w-48 h-48 sm:w-64 sm:h-64" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-5 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center mr-4 group-hover:bg-purple-50 group-hover:text-purple-600 transition-all duration-500 shadow-sm group-hover:scale-110">
                        <section.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-purple-600 transition-colors duration-300">
                        {section.title}
                      </h2>
                    </div>
                    <p className="text-slate-600 font-medium leading-relaxed text-sm sm:text-base">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* "Still Have Questions" CTA Box */}
            <div className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-8 sm:p-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between relative overflow-hidden shadow-2xl shadow-slate-900/20 group">
               {/* Background effect */}
               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-50 z-0"></div>
               <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-[60px] pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>
               
               <div className="relative z-10 mb-6 sm:mb-0">
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">Still have questions?</h3>
                  <p className="text-slate-400 font-medium text-xs sm:text-sm">Our team is here to help clarify any of our policies.</p>
               </div>
               
               <a href="/contact" className="relative z-10 w-full sm:w-auto inline-flex items-center justify-center bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold hover:bg-purple-50 hover:text-purple-700 transition-all duration-300 shadow-lg active:scale-95 group/btn text-sm sm:text-base">
                  <MessageCircle className="w-4 h-4 mr-2 text-purple-600" />
                  Contact Support 
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
               </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}