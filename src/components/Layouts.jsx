import React, { useState, useEffect, createContext, useContext } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  Instagram, 
  Menu, 
  X, 
  CheckCircle2, 
  MessageCircle, 
  HeartHandshake, 
  ArrowRight,
  CalendarCheck
} from 'lucide-react';

// 1. Create a Toast Context so any page can call showToast()
const ToastContext = createContext();
export const useToast = () => useContext(ToastContext);

// 2. The Custom Logo Component
export const CustomLogo = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#0f172a" />
    <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="33" fill="none" stroke="#334155" strokeWidth="1" />
    <circle cx="15" cy="50" r="2" fill="#e2e8f0" />
    <circle cx="85" cy="50" r="2" fill="#e2e8f0" />
    <defs>
      <path id="topArc" d="M 18 50 A 32 32 0 0 1 82 50" />
      <path id="botArc" d="M 85 50 A 35 35 0 0 1 15 50" />
    </defs>
    <text fill="#ffffff" fontSize="13" fontWeight="800" letterSpacing="2" fontFamily="system-ui, sans-serif">
      <textPath href="#topArc" startOffset="50%" textAnchor="middle" dominantBaseline="auto">
        LIFE CARE
      </textPath>
    </text>
    <text fill="#93c5fd" fontSize="9" fontWeight="700" letterSpacing="1.5" fontFamily="system-ui, sans-serif">
      <textPath href="#botArc" startOffset="50%" textAnchor="middle" dominantBaseline="auto">
        DENTAL CLINIC
      </textPath>
    </text>
    <path d="M 35 36 C 35 24, 46 24, 50 30 C 54 24, 65 24, 65 36 C 65 50, 57 52, 57 66 C 57 70, 52 70, 50 60 C 48 70, 43 70, 43 66 C 43 52, 35 50, 35 36 Z" fill="#ffffff" />
    <path d="M 39 37 Q 50 44 61 37" fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const location = useLocation();

  // Expose toast function
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  // Scroll to top and close menu on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleCallClick = (e, customNumber = "+917478851252") => {
    if (e) e.preventDefault();
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.location.href = `tel:${customNumber.replace(/\s+/g, '')}`;
    } else {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = customNumber.replace(/\s+/g, '');
        textArea.style.position = "fixed";
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast(`Phone number copied: ${customNumber}`);
      } catch (err) {
        console.error('Copy failed', err);
      }
    }
  };

  return (
    <ToastContext.Provider value={{ showToast, handleCallClick }}>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden flex flex-col w-full">
        
        {/* Top Bar - Contact Info (Hidden on Mobile) */}
        <div className="bg-slate-900 text-slate-300 text-xs md:text-sm py-2.5 px-4 md:px-8 hidden md:flex justify-between items-center z-50 relative">
          <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
            <div className="flex space-x-8">
              <button onClick={(e) => handleCallClick(e)} className="flex items-center hover:text-white transition-colors cursor-pointer group min-h-[24px]">
                <Phone size={14} className="mr-2 text-blue-400 group-hover:text-blue-300" />
                <span className="font-medium tracking-wide">+91 74788 51252 / +91 62972 58968</span>
              </button>
              <div className="flex items-center">
                <Clock size={14} className="mr-2 text-blue-400" />
                <span>8:00 AM – 6:00 PM (Closed Wed)</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">
                <Star size={12} className="text-yellow-400 fill-current mr-1.5" />
                <span className="font-semibold text-white text-xs">4.5/5 Rating</span>
              </div>
              <a href="https://www.instagram.com/lifecaresingtam?igsh=MXd4dDZnYW9wMXNhdw==" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-400 transition-colors p-1" aria-label="Instagram">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-20 flex justify-between items-center">
            
            <Link to="/" className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer group">
              <div className="rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                <CustomLogo className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14" />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-base sm:text-xl md:text-2xl font-extrabold text-slate-900 leading-none tracking-tight">Life Care</h1>
                <span className="text-[8px] sm:text-[10px] md:text-xs font-bold text-blue-600 tracking-widest uppercase mt-0.5">Dental Clinic</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className={`text-sm font-bold transition-colors p-2 ${location.pathname === '/' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>Home</Link>
              <Link to="/about" className={`text-sm font-bold transition-colors p-2 ${location.pathname === '/about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>About Us</Link>
              <Link to="/services" className={`text-sm font-bold transition-colors p-2 ${location.pathname === '/services' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>Services</Link>
              <Link to="/contact" className={`text-sm font-bold transition-colors p-2 ${location.pathname === '/contact' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>Contact</Link>
              <Link 
                to="/contact"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 min-h-[44px] flex items-center"
              >
                Book Appointment
              </Link>
            </div>

            <button 
              className="lg:hidden text-slate-800 p-2 bg-slate-50 hover:bg-slate-100 active:bg-slate-200 transition-colors rounded-xl flex items-center justify-center min-w-[44px] min-h-[44px]" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

          {/* Mobile Nav */}
          <div className={`lg:hidden fixed top-14 sm:top-20 left-0 w-full h-[calc(100vh-56px)] sm:h-[calc(100vh-80px)] bg-white/95 backdrop-blur-xl shadow-2xl overflow-y-auto transition-all duration-300 origin-top ${isMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}>
            <div className="flex flex-col px-5 sm:px-6 py-6 sm:py-8 space-y-1 sm:space-y-2 pb-32">
              <Link to="/" className="w-full text-left py-3 sm:py-4 text-slate-800 font-extrabold text-lg sm:text-xl border-b border-slate-100 active:bg-slate-50 rounded-lg px-2">Home</Link>
              <Link to="/about" className="w-full text-left py-3 sm:py-4 text-slate-800 font-extrabold text-lg sm:text-xl border-b border-slate-100 active:bg-slate-50 rounded-lg px-2 block">About Us</Link>
              <Link to="/services" className="w-full text-left py-3 sm:py-4 text-slate-800 font-extrabold text-lg sm:text-xl border-b border-slate-100 active:bg-slate-50 rounded-lg px-2 block">Services & Pricing</Link>
              <Link to="/contact" className="w-full text-left py-3 sm:py-4 text-blue-600 font-extrabold text-lg sm:text-xl border-b border-slate-100 active:bg-slate-50 rounded-lg px-2">Contact Us</Link>
              
              <button onClick={(e) => { handleCallClick(e, '+917478851252'); setIsMenuOpen(false); }} className="w-full bg-blue-600 text-white px-4 py-3 sm:py-4 rounded-xl font-bold flex justify-center items-center shadow-lg shadow-blue-600/20 mt-4 sm:mt-6 active:scale-95 transition-transform min-h-[48px] sm:min-h-[56px] text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-2.5" />
                Call +91 74788 51252
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content Rendered via Outlet */}
        <main className="flex-grow w-full relative">
          <Outlet />
        </main>

        {/* Global Toast Notification */}
        <div className={`fixed top-16 sm:top-24 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-md text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-2xl z-[100] flex items-center transition-all duration-500 ease-in-out border border-slate-700 w-11/12 max-w-sm sm:max-w-md ${toastMessage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mr-2 sm:mr-2.5 flex-shrink-0" />
          <span className="font-semibold tracking-wide text-xs sm:text-sm truncate">{toastMessage}</span>
        </div>

        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/917478851252" 
          target="_blank" 
          rel="noreferrer"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 z-[100] bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 group-hover:animate-pulse" />
          <span className="absolute right-full mr-4 bg-white text-slate-800 text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block border border-slate-100">
            Chat with us
          </span>
        </a>

        {/* Unified Footer */}
        <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
              
              {/* Column 1: Brand & Intro */}
              <div className="flex flex-col">
                <Link to="/" className="flex items-center space-x-3 mb-6 group cursor-pointer inline-block w-fit">
                  <div className="bg-slate-900 rounded-full p-1 border border-slate-800 shadow-sm group-hover:border-slate-700 transition-colors">
                    <CustomLogo className="w-10 h-10 sm:w-12 sm:h-12" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h1 className="text-xl sm:text-2xl font-extrabold text-white leading-none tracking-tight group-hover:text-blue-400 transition-colors">Life Care</h1>
                    <span className="text-[10px] font-bold text-blue-500 tracking-widest uppercase mt-1">Dental Clinic</span>
                  </div>
                </Link>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                  Setting a new standard for painless, modern, and compassionate dental care in East Sikkim. Your smile is our priority.
                </p>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/lifecaresingtam?igsh=MXd4dDZnYW9wMXNhdw==" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all text-slate-400 border border-slate-800 shadow-sm">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://wa.me/917478851252" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:border-transparent transition-all text-slate-400 border border-slate-800 shadow-sm">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6 flex items-center">
                  <span className="w-8 h-1 bg-blue-600 rounded-full mr-3"></span> Quick Links
                </h3>
                <ul className="grid grid-cols-2 gap-y-4 gap-x-2 md:block md:space-y-4">
                  <li>
                    <Link to="/" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all flex items-center text-sm font-medium">
                      <ArrowRight className="w-3.5 h-3.5 mr-2 text-blue-500" /> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all flex items-center text-sm font-medium">
                      <ArrowRight className="w-3.5 h-3.5 mr-2 text-blue-500" /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all flex items-center text-sm font-medium">
                      <ArrowRight className="w-3.5 h-3.5 mr-2 text-blue-500" /> All Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all flex items-center text-sm font-medium">
                      <ArrowRight className="w-3.5 h-3.5 mr-2 text-blue-500" /> Meet The Dentist
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all flex items-center text-sm font-medium">
                      <ArrowRight className="w-3.5 h-3.5 mr-2 text-blue-500" /> Contact & Map
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Contact Info */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6 flex items-center">
                  <span className="w-8 h-1 bg-emerald-500 rounded-full mr-3"></span> Get in Touch
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start group">
                    <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-colors mr-4 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-white font-bold text-sm mb-1">Clinic Location</span>
                      <a href="https://maps.google.com/?q=Dhamala+Colony,+Singtam,+Sikkim" target="_blank" rel="noreferrer" className="text-slate-400 text-sm leading-relaxed hover:text-blue-400 transition-colors inline-block">
                        Dhamala Colony, Below Euphoria<br/>Singtam, East Sikkim - 737134
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-colors mr-4 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-white font-bold text-sm mb-1">Phone & WhatsApp</span>
                      <button onClick={(e) => handleCallClick(e, "+917478851252")} className="text-slate-400 text-sm hover:text-blue-400 transition-colors block mb-0.5">+91 74788 51252</button>
                      <button onClick={(e) => handleCallClick(e, "+916297258968")} className="text-slate-400 text-sm hover:text-blue-400 transition-colors block">+91 62972 58968</button>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Column 4: Hours & Action */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6 flex items-center">
                  <span className="w-8 h-1 bg-purple-500 rounded-full mr-3"></span> Working Hours
                </h3>
                <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-5 mb-6">
                  <div className="flex justify-between items-center mb-3 pb-3 border-b border-slate-800">
                    <span className="text-slate-300 text-sm font-medium">Thursday - Tuesday</span>
                    <span className="text-white font-bold text-sm bg-slate-800 px-2 py-1 rounded">8 AM - 6 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 text-sm font-medium">Wednesday</span>
                    <span className="text-red-400 font-bold text-sm bg-red-400/10 px-2 py-1 rounded">Closed</span>
                  </div>
                </div>
                <Link to="/contact" className="w-full bg-white text-slate-900 font-bold py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors shadow-lg flex items-center justify-center text-sm group">
                  <CalendarCheck className="w-4 h-4 mr-2 text-blue-600 group-hover:text-white transition-colors" /> Book Appointment
                </Link>
              </div>

            </div>
            
            {/* Bottom Bar */}
            <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <p className="text-slate-500 text-xs font-medium">
                © {new Date().getFullYear()} Life Care Dental Clinic. All rights reserved.
              </p>
              <p className="text-slate-600 text-xs font-medium flex items-center justify-center md:justify-end">
                Designed with <HeartHandshake className="w-3.5 h-3.5 mx-1.5 text-rose-500" /> for Singtam
              </p>
            </div>

          </div>
        </footer>
      </div>
    </ToastContext.Provider>
  );
}