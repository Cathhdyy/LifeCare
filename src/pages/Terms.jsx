import React, { useState, useEffect } from 'react';
import { FileText, ArrowLeft, AlertTriangle, CalendarClock, ShieldAlert, Scale, RefreshCw, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; 
      for (let i = termsSections.length - 1; i >= 0; i--) {
        const section = document.getElementById(termsSections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(termsSections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-pink-400/10 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link to="/" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-purple-600 transition-colors mb-8 group bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 shadow-sm">
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-14 shadow-xl shadow-purple-900/5 border border-white mb-10 md:mb-16 relative overflow-hidden">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-400 text-white rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
            <FileText className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">Terms of Service</h1>
          <p className="text-slate-500 font-medium text-sm sm:text-lg max-w-2xl">
            These terms constitute a legally binding agreement made between you and Life Care Dental Clinic concerning your access to and use of our website and services.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-1/3 hidden lg:block">
            <div className="sticky top-28 bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 shadow-lg shadow-slate-200/50 border border-white">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 px-4">Contents</h3>
              <nav className="space-y-2">
                {termsSections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <a 
                      key={section.id}
                      href={`#${section.id}`}
                      className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl font-bold transition-all duration-300 ${isActive ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20 translate-x-2' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
                    >
                      <div className="flex items-center">
                        <section.icon className={`w-4 h-4 mr-3 ${isActive ? 'text-purple-200' : 'text-slate-400'}`} />
                        {section.title}
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'opacity-100 translate-x-1' : 'opacity-0 -translate-x-2'}`} />
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-6 sm:space-y-8 pb-32">
            {termsSections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-32 group">
                <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-sm border border-slate-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-500 relative overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-400 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center mr-4 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors duration-500">
                      <section.icon className="w-5 h-5" />
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}