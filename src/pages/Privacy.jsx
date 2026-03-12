import React, { useState, useEffect } from 'react';
import { Shield, ArrowLeft, User, Database, MessageCircle, Lock, Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; 
      for (let i = privacySections.length - 1; i >= 0; i--) {
        const section = document.getElementById(privacySections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(privacySections[i].id);
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
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link to="/" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors mb-8 group bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 shadow-sm">
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-14 shadow-xl shadow-blue-900/5 border border-white mb-10 md:mb-16 relative overflow-hidden">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 text-white rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-slate-500 font-medium text-sm sm:text-lg max-w-2xl">
            Transparency is the foundation of trust. Here is a clear, jargon-free breakdown of how we handle and protect your data at Life Care Dental Clinic.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-1/3 hidden lg:block">
            <div className="sticky top-28 bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 shadow-lg shadow-slate-200/50 border border-white">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 px-4">Contents</h3>
              <nav className="space-y-2">
                {privacySections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <a 
                      key={section.id}
                      href={`#${section.id}`}
                      className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl font-bold transition-all duration-300 ${isActive ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 translate-x-2' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
                    >
                      <div className="flex items-center">
                        <section.icon className={`w-4 h-4 mr-3 ${isActive ? 'text-blue-200' : 'text-slate-400'}`} />
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
            {privacySections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-32 group">
                <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-sm border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 relative overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-400 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center mr-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-500">
                      <section.icon className="w-5 h-5" />
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}