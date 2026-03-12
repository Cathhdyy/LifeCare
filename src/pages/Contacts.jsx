import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Menu, 
  X, 
  CalendarCheck,
  CheckCircle2,
  MessageCircle,
  User,
  Calendar,
  MessageSquare,
  Navigation,
  ArrowRight,
  ChevronDown,
  AlertTriangle,
  Plus,
  Minus
} from 'lucide-react';

// Custom Scalable Vector Logo
const CustomLogo = ({ className = "w-12 h-12" }) => (
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

const contactFaqs = [
  { 
    q: "What should I do in a dental emergency?", 
    a: "Call us immediately at +91 74788 51252. We prioritize severe pain, broken teeth, and swelling. If it's outside working hours, drop a WhatsApp message with 'URGENT' and we will get back to you as soon as possible." 
  },
  { 
    q: "Do I need to book an appointment in advance?", 
    a: "We highly recommend booking an appointment to ensure zero waiting time. While walk-ins are welcome, they are subject to the doctor's availability." 
  },
  { 
    q: "What payment methods do you accept?", 
    a: "We accept all major payment methods including Cash, UPI (Google Pay, PhonePe, Paytm), and Credit/Debit cards for your convenience." 
  },
  { 
    q: "Is there parking available near the clinic?", 
    a: "Yes, there is roadside parking and designated spaces available near Dhamala Colony, right below Euphoria." 
  }
];

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');
  const [toastMessage, setToastMessage] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    reason: ''
  });

  // Simplified and completely robust scroll reveal logic
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        // If element is in viewport
        if (rect.top <= window.innerHeight * 0.9) {
          el.classList.add('animate-fade-in-up');
          el.classList.remove('opacity-0');
        }
      });
    };

    // Run once on load to reveal elements already in view
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitted');
    const message = `*New Appointment Request* 🦷\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Preferred Date:* ${formData.date}\n*Preferred Time:* ${formData.time || 'Any time'}\n*Reason for Visit:* ${formData.reason || 'Not specified'}\n\nPlease let me know if this slot is available!`;
    const encodedMessage = encodeURIComponent(message);
    
    // Automatically open WhatsApp after a tiny delay for visual feedback
    setTimeout(() => {
      window.open(`https://wa.me/917478851252?text=${encodedMessage}`, '_blank');
    }, 800);

    setTimeout(() => {
      setFormStatus('idle');
      setFormData({ name: '', phone: '', date: '', time: '', reason: '' });
    }, 4000);
  };

  const handleCallClick = (e, number) => {
    if (e) e.preventDefault();
    const successMessage = `Phone number copied: ${number}`;
    
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `tel:${number.replace(/\s+/g, '')}`;
    } else {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = number.replace(/\s+/g, '');
        textArea.style.position = "fixed";
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        setToastMessage(successMessage);
        setTimeout(() => setToastMessage(''), 3000);
      } catch (err) {
        console.error('Fallback copy failed', err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden flex flex-col w-full">
      {/* Custom Styles for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 10s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}} />

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

      {/* Toast Notification */}
      <div className={`fixed top-16 sm:top-24 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-md text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-2xl z-[100] flex items-center transition-all duration-500 ease-in-out border border-slate-700 w-11/12 max-w-sm sm:max-w-md ${toastMessage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mr-2 sm:mr-2.5 flex-shrink-0" />
        <span className="font-semibold tracking-wide text-xs sm:text-sm truncate">{toastMessage}</span>
      </div>

      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-20 flex justify-between items-center">
          
          <a href="/" className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer group">
            <div className="rounded-full shadow-sm group-hover:shadow-md transition-shadow">
              <CustomLogo className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-base sm:text-xl md:text-2xl font-extrabold text-slate-900 leading-none tracking-tight">Life Care</h1>
              <span className="text-[8px] sm:text-[10px] md:text-xs font-bold text-blue-600 tracking-widest uppercase mt-0.5">Dental Clinic</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors p-2">Home</a>
            <a href="/about" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors p-2">About Us</a>
            <a href="/services" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors p-2">Services</a>
            <a href="/contact" className="text-sm font-bold text-blue-600 border-b-2 border-blue-600 pb-1">Contact Us</a>
          </div>

          <button 
            className="lg:hidden text-slate-800 p-2 bg-slate-50 hover:bg-slate-100 active:bg-slate-200 transition-colors rounded-xl flex items-center justify-center min-w-[44px] min-h-[44px]" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`lg:hidden fixed top-14 sm:top-20 left-0 w-full h-[calc(100vh-56px)] sm:h-[calc(100vh-80px)] bg-white/95 backdrop-blur-xl shadow-2xl overflow-y-auto transition-all duration-300 origin-top ${isMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}>
          <div className="flex flex-col px-5 sm:px-6 py-6 sm:py-8 space-y-1 sm:space-y-2 pb-32">
            <a href="/" className="w-full text-left py-3 sm:py-4 text-slate-800 font-extrabold text-lg sm:text-xl border-b border-slate-100 active:bg-slate-50 rounded-lg px-2">Home</a>
            <a href="/about" className="w-full text-left py-3 sm:py-4 text-slate-800 font-extrabold text-lg sm:text-xl border-b border-slate-100 active:bg-slate-50 rounded-lg px-2">About Us</a>
            <a href="/services" className="w-full text-left py-3 sm:py-4 text-slate-800 font-extrabold text-lg sm:text-xl border-b border-slate-100 active:bg-slate-50 rounded-lg px-2 block">Services & Pricing</a>
            <a href="/contact" className="w-full text-left py-3 sm:py-4 text-blue-600 font-extrabold text-lg sm:text-xl border-b border-slate-100 active:bg-slate-50 rounded-lg px-2">Contact Us</a>
            
            <button onClick={(e) => { handleCallClick(e, '+917478851252'); setIsMenuOpen(false); }} className="w-full bg-blue-600 text-white px-4 py-3 sm:py-4 rounded-xl font-bold flex justify-center items-center shadow-lg shadow-blue-600/20 mt-4 sm:mt-6 active:scale-95 transition-transform min-h-[48px] sm:min-h-[56px] text-sm sm:text-base">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-2.5" />
              Call +91 74788 51252
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <main className="flex-grow w-full relative">
        
        {/* Contact Hero Section */}
        <section className="relative pt-16 pb-20 md:pt-28 md:pb-36 overflow-hidden bg-slate-900 text-white">
          {/* Animated Blob Backgrounds */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-blue-600/30 rounded-full blur-[100px] mix-blend-screen animate-blob pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-cyan-600/30 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000 pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
          <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-4000 pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-50 z-0"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center reveal opacity-0">
            <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6 shadow-sm">
              <MessageCircle className="w-3.5 h-3.5 mr-2 animate-pulse" /> Get in Touch
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
              We'd love to hear <br className="hidden sm:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-[length:200%_auto] animate-gradient">from you.</span>
            </h1>
            
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Whether you have a question about our treatments, need to book an appointment, or are experiencing a dental emergency, our team is here to help.
            </p>
          </div>
        </section>

        {/* Floating Emergency Banner */}
        <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 mb-8 sm:mb-12 reveal opacity-0">
          <button 
            onClick={(e) => handleCallClick(e, '+917478851252')}
            className="w-full bg-gradient-to-r from-rose-500 to-red-600 rounded-2xl shadow-xl shadow-rose-500/30 border border-rose-400/50 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 opacity-20 transform group-hover:scale-150 group-hover:rotate-12 transition-all duration-700 pointer-events-none">
              <AlertTriangle className="w-32 h-32 text-white" />
            </div>
            <div className="flex items-center text-left relative z-10 w-full sm:w-auto">
              <div className="bg-white/20 p-3 rounded-full mr-4 flex-shrink-0">
                <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-pulse" />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-base sm:text-lg leading-tight">Dental Emergency?</h3>
                <p className="text-rose-100 text-xs sm:text-sm font-medium mt-0.5">Don't wait. Call us immediately for priority care.</p>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 relative z-10 w-full sm:w-auto flex justify-center sm:justify-end">
              <div className="bg-white text-rose-600 px-5 py-2.5 rounded-xl font-bold text-sm flex items-center shadow-md group-hover:shadow-lg transition-shadow w-full sm:w-auto justify-center">
                <Phone className="w-4 h-4 mr-2" /> Tap to Call Now
              </div>
            </div>
          </button>
        </div>

        {/* Contact Info Cards */}
        <section className="relative z-20 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
              
              {/* Address Card */}
              <div className="col-span-1 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 border border-slate-200 flex flex-col items-center text-center group hover:-translate-y-1.5 transition-all duration-300 reveal opacity-0 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <div className="relative z-10 flex flex-col items-center">
                   <div className="w-10 h-10 sm:w-14 sm:h-14 bg-blue-50 text-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-sm group-hover:scale-110 transform">
                     <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                   </div>
                   <h3 className="text-[13px] sm:text-xl font-extrabold text-slate-900 mb-1.5 sm:mb-2 leading-tight">Visit Our Clinic</h3>
                   <p className="text-slate-600 font-medium text-[10px] sm:text-sm leading-relaxed">
                     Dhamala Colony, Below Euphoria<br className="hidden sm:block"/>Singtam, East Sikkim - 737134
                   </p>
                 </div>
              </div>

              {/* Phone Card */}
              <div className="col-span-1 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/10 border border-slate-200 flex flex-col items-center text-center group hover:-translate-y-1.5 transition-all duration-300 reveal opacity-0 delay-100 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <div className="relative z-10 flex flex-col items-center w-full">
                   <div className="w-10 h-10 sm:w-14 sm:h-14 bg-emerald-50 text-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500 shadow-sm group-hover:scale-110 transform">
                     <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                   </div>
                   <h3 className="text-[13px] sm:text-xl font-extrabold text-slate-900 mb-1.5 sm:mb-2 leading-tight">Call / WhatsApp</h3>
                   <div className="flex flex-col space-y-1.5 sm:space-y-2 mt-0.5 sm:mt-1 w-full">
                     <button onClick={(e) => handleCallClick(e, '+91 74788 51252')} className="text-slate-600 font-bold text-[10px] sm:text-sm hover:text-emerald-600 transition-colors inline-flex items-center justify-center bg-slate-50 hover:bg-emerald-50 py-1.5 sm:py-2 rounded-lg border border-slate-100 w-full px-1">
                       +91 74788 51252
                     </button>
                     <button onClick={(e) => handleCallClick(e, '+91 62972 58968')} className="text-slate-600 font-bold text-[10px] sm:text-sm hover:text-emerald-600 transition-colors inline-flex items-center justify-center bg-slate-50 hover:bg-emerald-50 py-1.5 sm:py-2 rounded-lg border border-slate-100 w-full px-1">
                       +91 62972 58968
                     </button>
                   </div>
                 </div>
              </div>

              {/* Hours Card */}
              <div className="col-span-2 md:col-span-1 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-sm hover:shadow-2xl hover:shadow-purple-900/10 border border-slate-200 flex flex-col items-center text-center group hover:-translate-y-1.5 transition-all duration-300 reveal opacity-0 delay-200 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <div className="relative z-10 flex flex-col items-center">
                   <div className="w-10 h-10 sm:w-14 sm:h-14 bg-purple-50 text-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-500 shadow-sm group-hover:scale-110 transform">
                     <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                   </div>
                   <h3 className="text-[13px] sm:text-xl font-extrabold text-slate-900 mb-2 sm:mb-2 leading-tight">Working Hours</h3>
                   <div className="flex flex-row md:flex-col gap-2 sm:gap-0 space-y-0 sm:space-y-1 mt-0.5 sm:mt-1 justify-center flex-wrap">
                     <span className="bg-slate-50 px-2.5 sm:px-3 py-1.5 sm:py-1 rounded-md border border-slate-100 text-[10px] sm:text-sm font-medium text-slate-600">Thurs - Tue: 8 AM - 6 PM</span>
                     <span className="bg-red-50 text-red-600 font-bold px-2.5 sm:px-3 py-1.5 sm:py-1 rounded-md border border-red-100 text-[10px] sm:text-sm">Wednesdays: Closed</span>
                   </div>
                 </div>
              </div>

           </div>
        </section>

        {/* Interactive Booking & Map Section */}
        <section className="py-12 md:py-20 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-xl overflow-hidden border border-slate-200 flex flex-col lg:flex-row reveal opacity-0">
              
              {/* Left Side: Booking Form */}
              <div className="w-full lg:w-1/2 p-6 sm:p-10 md:p-14 flex flex-col justify-center bg-white relative z-10 border-b lg:border-b-0 lg:border-r border-slate-100">
                <div className="mb-8 sm:mb-10">
                  <div className="inline-flex items-center bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
                    <CalendarCheck className="w-3.5 h-3.5 mr-1.5" /> Book Online
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 leading-tight">Request an Appointment</h3>
                  <p className="text-slate-500 font-medium text-sm sm:text-base">Fill out the form below and our team will get back to you immediately via WhatsApp to confirm your slot.</p>
                </div>
                
                {formStatus === 'submitted' ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 sm:p-10 rounded-2xl flex flex-col items-center justify-center text-center h-full min-h-[300px] animate-fade-in-up">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-12 h-12 text-emerald-500 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-extrabold mb-2">Redirecting to WhatsApp...</h4>
                    <p className="text-emerald-700 font-medium text-sm sm:text-base max-w-xs mx-auto">Please send the pre-filled message in your WhatsApp to finalize your booking request!</p>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="relative group">
                        <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">Full Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                            <User className="w-5 h-5" />
                          </div>
                          <input 
                            required type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" 
                            className="w-full h-12 sm:h-14 pl-12 pr-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-800 text-sm" 
                          />
                        </div>
                      </div>

                      <div className="relative group">
                        <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">Phone Number</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                            <Phone className="w-5 h-5" />
                          </div>
                          <input 
                            required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" 
                            className="w-full h-12 sm:h-14 pl-12 pr-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-800 text-sm" 
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="relative group">
                        <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">Preferred Date</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 z-10 transition-colors">
                            <Calendar className="w-5 h-5" />
                          </div>
                          <input 
                            required type="date" name="date" value={formData.date} onChange={handleInputChange}
                            className="w-full h-12 sm:h-14 pl-12 pr-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 relative text-sm block appearance-none" 
                          />
                        </div>
                      </div>

                      <div className="relative group">
                        <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">Preferred Time</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 z-10 transition-colors">
                            <Clock className="w-5 h-5" />
                          </div>
                          <select 
                            name="time" value={formData.time} onChange={handleInputChange}
                            className="w-full h-12 sm:h-14 pl-12 pr-10 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 relative text-sm appearance-none cursor-pointer" 
                          >
                            <option value="">Any available time</option>
                            <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                            <option value="Afternoon (12 PM - 3 PM)">Afternoon (12 PM - 3 PM)</option>
                            <option value="Evening (3 PM - 6 PM)">Evening (3 PM - 6 PM)</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative group">
                      <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">Reason for Visit <span className="text-slate-400 font-normal">(Optional)</span></label>
                      <div className="relative">
                        <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                          <MessageSquare className="w-5 h-5" />
                        </div>
                        <textarea 
                          rows="4" name="reason" value={formData.reason} onChange={handleInputChange} placeholder="e.g. Routine checkup, toothache, root canal..." 
                          className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium resize-none text-slate-800 text-sm"
                        ></textarea>
                      </div>
                    </div>
                    
                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 sm:py-4.5 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-1 flex items-center justify-center mt-2 sm:mt-4 text-sm sm:text-base group">
                      <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Request via WhatsApp
                    </button>
                  </form>
                )}

                {/* Mobile-only directions button (hidden on desktop since map is right there) */}
                <div className="mt-8 pt-8 border-t border-slate-100 lg:hidden">
                  <a 
                    href="https://share.google/73zZmhr0YAIi3NHIK" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full bg-slate-900 text-white font-bold py-3.5 sm:py-4 rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 flex items-center justify-center text-sm sm:text-base group/btn"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions on Maps
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Side: Large Map */}
              <div className="w-full lg:w-1/2 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] relative bg-slate-200 group/map">
                {/* Overlay shadow to give depth inside the card */}
                <div className="absolute inset-0 shadow-[inset_10px_0_20px_rgba(0,0,0,0.05)] pointer-events-none z-10 hidden lg:block"></div>
                <iframe 
                  width="100%" height="100%" frameBorder="0" style={{ border: 0 }} 
                  src="https://maps.google.com/maps?q=Life+Care+Clinics+%26+Pharmacy,+Dhamala+Colony,+Singtam,+Sikkim&t=&z=18&ie=UTF8&iwloc=&output=embed" 
                  allowFullScreen title="Clinic Location Map"
                  className="absolute inset-0 w-full h-full opacity-90 group-hover/map:opacity-100 filter saturate-[1.1] transition-all duration-700"
                ></iframe>
                
                {/* Floating Map Label on Desktop */}
                <a href="https://share.google/73zZmhr0YAIi3NHIK" target="_blank" rel="noreferrer" className="absolute bottom-6 right-6 hidden lg:flex bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl items-center space-x-3 border border-white/50 z-20 hover:scale-105 transition-transform cursor-pointer group">
                  <div className="bg-blue-100 text-blue-600 p-2.5 rounded-xl flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-slate-900 leading-tight">Get Directions</p>
                    <p className="text-[10px] font-medium text-slate-500">Dhamala Colony, Singtam</p>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Dedicated Visit FAQs */}
        <section className="py-16 md:py-24 bg-white relative border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10 sm:mb-16 reveal opacity-0">
              <div className="inline-flex items-center bg-blue-50 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
                <MessageSquare className="w-3.5 h-3.5 mr-2" />
                Visit FAQs
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                Preparing for your visit
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4 reveal opacity-0 delay-100">
              {contactFaqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`bg-slate-50 border rounded-2xl transition-all duration-300 overflow-hidden ${
                    activeFaq === index 
                      ? 'border-blue-400 shadow-md ring-1 ring-blue-400 bg-white' 
                      : 'border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)} 
                    className="w-full flex justify-between items-center p-5 sm:p-6 text-left focus:outline-none"
                  >
                    <span className={`font-bold text-sm sm:text-base md:text-lg pr-4 sm:pr-6 leading-tight ${activeFaq === index ? 'text-blue-700' : 'text-slate-800'}`}>
                      {faq.q}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${activeFaq === index ? 'bg-blue-600 text-white shadow-sm' : 'bg-white border border-slate-200 text-blue-600'}`}>
                      {activeFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      activeFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-5 sm:pl-6 pr-5 sm:pr-8 pb-5 sm:pb-6 text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-4 text-xs sm:text-sm md:text-base">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-10 sm:py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 sm:gap-6">
            
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <CustomLogo className="w-12 h-12 sm:w-14 sm:h-14" />
              <div className="flex flex-col">
                <h1 className="text-lg sm:text-xl font-extrabold text-white leading-tight tracking-tight">Life Care Dental Clinic</h1>
                <span className="text-[9px] sm:text-[10px] font-bold text-blue-400 tracking-widest uppercase mt-0.5">Singtam, East Sikkim</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/lifecaresingtam?igsh=MXd4dDZnYW9wMXNhdw==" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all text-slate-400 border border-slate-700" aria-label="Follow us on Instagram">
                <Instagram className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-8 pt-6 sm:pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-4 text-[11px] sm:text-xs font-medium text-slate-500">
            <p>&copy; {new Date().getFullYear()} Life Care Dental Clinic. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <p className="flex items-center text-slate-400">
                <Phone className="w-3.5 h-3.5 sm:w-3 sm:h-3 mr-1.5 sm:mr-1.5 text-blue-500" /> +91 74788 51252 / +91 62972 58968
              </p>
              <p className="flex items-center text-slate-400">
                <MapPin className="w-3.5 h-3.5 sm:w-3 sm:h-3 mr-1.5 sm:mr-1.5 text-blue-500" /> Dhamala Colony, Below Euphoria
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}