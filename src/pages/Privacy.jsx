import React, { useState, useEffect } from 'react';
import { Shield, ArrowLeft, User, Database, MessageCircle, Lock, Mail, ChevronRight, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const privacySections = [
  { 
    id: 'collection', 
    title: 'Information We Collect', 
    icon: User, 
    content: 'We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, or when you contact us to book an appointment. This may include your Name, Phone Number, and Reason for Visit.' 
  },
  { 
    id: 'usage', 
    title: 'How We Use It', 
    icon: Database, 
    content: 'We use personal information collected via our website to schedule and manage your dental appointments, respond to your inquiries, and send administrative information to you, such as appointment confirmations via WhatsApp or phone call.' 
  },
  { 
    id: 'whatsapp', 
    title: 'WhatsApp Communication', 
    icon: MessageCircle, 
    content: 'Our primary method of booking and communication is through WhatsApp. By clicking our "Book via WhatsApp" links, you consent to communicating with our clinic via the WhatsApp platform. Please note that WhatsApp has its own privacy policies regarding message encryption and data handling.' 
  },
  { 
    id: 'sharing', 
    title: 'Sharing & Security', 
    icon: Lock, 
    content: 'We respect your privacy. We strictly do not sell, rent, or trade your personal information to third parties. We only share information with your consent, to comply with laws, to provide you with medical services, or to fulfill business obligations.' 
  },
  { 
    id: 'contact', 
    title: 'Contact Us', 
    icon: Mail, 
    content: 'If you have questions or comments about this notice, you may contact us at Life Care Dental Clinic, Dhamala Colony, Below Euphoria, Singtam, East Sikkim - 737134. Phone: +91 74788 51252.' 
  },
];

export default function Privacy() {
  const [activeSection, setActiveSection] = useState('collection');

  useEffect(() => {
    // Add smooth scrolling to html element when this component mounts
    document.documentElement.classList.add('scroll-smooth');
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300; // Adjusted offset for better trigger
      for (let i = privacySections.length - 1; i >= 0; i--) {
        const section = document.getElementById(privacySections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(privacySections[i].id);
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
    <div className="min-h-screen bg-slate-50 py-12 md:py-24 relative overflow-x-hidden font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900">
      
      <SEO 
        title="Privacy Policy" 
        description="Learn how Life Care Dental Clinic collects, uses, and protects your personal data and information."
      />

      {/* Premium Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgwLCAwLCAwLCAwLjA1KSIvPjwvc3ZnPg==')] opacity-100 z-0 pointer-events-none"></div>

      {/* Animated Glowing Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-400/20 rounded-full blur-[80px] sm:blur-[120px] animate-pulse"></div>
        <div className="absolute top-[20%] left-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-cyan-400/20 rounded-full blur-[100px] sm:blur-[150px] animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-8 sm:mb-12">
          <Link to="/" className="inline-flex items-center text-xs sm:text-sm font-extrabold text-slate-500 hover:text-blue-600 transition-colors group bg-white/60 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:bg-white">
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1.5 transition-transform duration-300" />
            Back to Home
          </Link>
          
          <Link to="/terms" className="inline-flex items-center text-xs sm:text-sm font-extrabold text-slate-500 hover:text-blue-600 transition-colors group bg-white/60 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:bg-white">
            <FileText className="w-4 h-4 mr-2 text-blue-500" />
            View Terms of Service
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-14 shadow-xl shadow-blue-900/5 border border-white mb-12 md:mb-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 text-white rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg shadow-blue-500/30 transform -rotate-6 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-widest border border-blue-100 shadow-sm w-fit">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span>Last Updated: March 2026</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight text-slate-900">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Policy</span>
            </h1>
            <p className="text-slate-500 font-medium text-sm sm:text-lg max-w-2xl leading-relaxed">
              Transparency is the foundation of trust. Here is a clear, jargon-free breakdown of how we handle and protect your data at Life Care Dental Clinic.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative items-start">
          
          {/* Sticky Sidebar Navigation */}
          <div className="lg:w-1/3 hidden lg:block sticky top-28">
            <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 shadow-xl shadow-slate-200/50 border border-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-80"></div>
              <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-6 px-4 pt-2">Table of Contents</h3>
              <nav className="space-y-2">
                {privacySections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <a 
                      key={section.id}
                      href={`#${section.id}`}
                      className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl font-bold transition-all duration-300 ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 translate-x-2' : 'text-slate-600 hover:bg-blue-50 hover:text-blue-700'}`}
                    >
                      <div className="flex items-center">
                        <section.icon className={`w-4 h-4 mr-3 transition-colors ${isActive ? 'text-blue-200' : 'text-slate-400'}`} />
                        <span className="text-sm">{section.title}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0 text-white' : 'opacity-0 -translate-x-4'}`} />
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Privacy Content List */}
          <div className="lg:w-2/3 space-y-6 sm:space-y-8 pb-10 w-full">
            {privacySections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-32 group">
                <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-sm border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 relative overflow-hidden h-full">
                  
                  {/* Subtle Animated Left Border */}
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-cyan-400 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
                  
                  {/* Large Faint Watermark Icon */}
                  <div className="absolute -right-8 -bottom-8 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-700 pointer-events-none transform group-hover:scale-110 group-hover:-rotate-12 z-0 text-blue-900">
                    <section.icon className="w-48 h-48 sm:w-64 sm:h-64" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-5 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center mr-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-500 shadow-sm group-hover:scale-110">
                        <section.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
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
               <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>
               
               <div className="relative z-10 mb-6 sm:mb-0">
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">Still have questions?</h3>
                  <p className="text-slate-400 font-medium text-xs sm:text-sm">Our team is here to help clarify any of our policies.</p>
               </div>
               
               <a href="/contact" className="relative z-10 w-full sm:w-auto inline-flex items-center justify-center bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 shadow-lg active:scale-95 group/btn text-sm sm:text-base">
                  <MessageCircle className="w-4 h-4 mr-2 text-blue-600" />
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