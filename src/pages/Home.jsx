import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  Instagram, 
  Menu, 
  X, 
  ShieldCheck, 
  Stethoscope, 
  CalendarCheck,
  Activity,
  CheckCircle2,
  ChevronDown,
  HeartHandshake,
  Sparkles,
  Navigation,
  ArrowRight,
  MessageCircle,
  Plus,
  Minus,
  User,
  Calendar,
  MessageSquare,
  Award
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

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');
  const [toastMessage, setToastMessage] = useState('');
  const [activeAccordion, setActiveAccordion] = useState(0); 
  const [activeFaq, setActiveFaq] = useState(null); 
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    reason: ''
  });

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
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

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitted');
    const message = `*New Appointment Request* 🦷\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Preferred Date:* ${formData.date}\n*Reason for Visit:* ${formData.reason || 'Not specified'}\n\nPlease let me know what times are available on this date!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917478851252?text=${encodedMessage}`;
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      setFormStatus('idle');
      setFormData({ name: '', phone: '', date: '', reason: '' });
    }, 4000);
  };

  const handleCallClick = (e) => {
    if (e) e.preventDefault();
    
    const phoneNumber = "+917478851252";
    const successMessage = 'Phone number copied: +91 74788 51252';
    
    // Check if the user is on a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      // Directly open the phone dialer on mobile
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Use fallback execCommand for desktop due to iframe clipboard API restrictions
      const textArea = document.createElement("textarea");
      textArea.value = phoneNumber;
      textArea.style.position = "fixed";
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setToastMessage(successMessage);
        setTimeout(() => setToastMessage(''), 3000);
      } catch (fallbackErr) {
        console.error('Fallback copy failed', fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  const accordionData = [
    {
      icon: Activity,
      title: "State-of-the-Art Technology",
      content: "We utilize modern, painless dental equipment to ensure your treatments are as quick, efficient, and comfortable as possible."
    },
    {
      icon: HeartHandshake,
      title: "Patient-First Approach",
      content: "From the moment you walk in, our friendly staff prioritizes your comfort. We explain every procedure clearly so you feel completely at ease."
    },
    {
      icon: ShieldCheck,
      title: "Certified Experts",
      content: "Our clinic is government registered and staffed by highly qualified, verified dental professionals you can trust."
    }
  ];

  const faqData = [
    { q: "Do I need to book an appointment beforehand?", a: "While walk-ins are definitely welcome, we highly recommend booking an appointment to guarantee zero waiting time so you can be seen right away." },
    { q: "Are your treatments painful?", a: "Not at all! We use the latest technology and local anesthesia to ensure that most procedures, including root canals and extractions, are virtually painless." },
    { q: "Do you offer treatments for children?", a: "Yes, we specialize in pediatric dentistry and create a gentle, fun environment so kids don't develop a fear of the dentist." },
    { q: "Where exactly are you located in Singtam?", a: "We are located near Singtam Bridge in Dhamala Colony, Singtam, East Sikkim. You can check the map at the bottom of this page for precise directions!" }
  ];

  const googleReviewsData = [
    {
      name: "jaya gurung",
      rating: 5,
      text: "Clinic is well set .....Staffs have a good customer services , easy access to blood test ,results are provided on time , Doctors are well versed with their speciality and have a patience to listen to their patients... Thank you life care for a good service 🙏1"
    },
    {
      name: "Sheema Limboo",
      rating: 5,
      text: "Best ever Doctor available with Excellent service. The environment is extremely clean and welcoming."
    },
    {
      name: "Orchid Chettri",
      rating: 5,
      text: "Very much pleased with the behaviour of the staff and the Doctor also examines the patient very well..Worth every penny✌️ Highly recommended in Singtam."
    }
  ];

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
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient { animation: gradient 4s ease infinite; background-size: 200% 200%; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float 3s ease-in-out 1.5s infinite; }
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

      {/* Top Bar - Contact Info (Hidden on Mobile) */}
      <div className="bg-slate-900 text-slate-300 text-xs md:text-sm py-2.5 px-4 md:px-8 hidden md:flex justify-between items-center z-50 relative">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex space-x-8">
            <button onClick={handleCallClick} className="flex items-center hover:text-white transition-colors cursor-pointer group min-h-[24px]">
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
          
          <div className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer group" onClick={(e) => scrollToSection(e, 'home')}>
            <div className="rounded-full shadow-sm group-hover:shadow-md transition-shadow">
              <CustomLogo className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-base sm:text-xl md:text-2xl font-extrabold text-slate-900 leading-none tracking-tight">Life Care</h1>
              <span className="text-[8px] sm:text-[10px] md:text-xs font-bold text-blue-600 tracking-widest uppercase mt-0.5">Dental Clinic</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={(e) => scrollToSection(e, 'home')} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors p-2">Home</button>
            <a href="/about" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors p-2">About Us</a>
            <button onClick={(e) => scrollToSection(e, 'dentist')} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors p-2">Dentist</button>
            <a href="/services" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors p-2">Services</a>
            <button onClick={(e) => scrollToSection(e, 'contact')} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors p-2">Contact</button>
            <button 
              onClick={(e) => scrollToSection(e, 'contact')} 
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 min-h-[44px]"
            >
              Book Appointment
            </button>
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
            <button onClick={(e) => {scrollToSection(e, 'home'); setIsMenuOpen(false);}} className="w-full text-left py-3 sm:py-4 text-slate-800 font-extrabold text-lg sm:text-xl border-b border-slate-100 active:bg-slate-50 rounded-lg px-2">Home</button>
            <a href="/about" className="w-full text-left py-3 sm:py-4 text-slate-800 font-extrabold text-lg sm:text-xl border-b border-slate-100 active:bg-slate-50 rounded-lg px-2 block">About Us</a>
            <button onClick={(e) => {scrollToSection(e, 'dentist'); setIsMenuOpen(false);}} className="w-full text-left py-3 sm:py-4 text-slate-800 font-extrabold text-lg sm:text-xl border-b border-slate-100 active:bg-slate-50 rounded-lg px-2">Our Dentist</button>
            <a href="/services" className="w-full text-left py-3 sm:py-4 text-slate-800 font-extrabold text-lg sm:text-xl border-b border-slate-100 active:bg-slate-50 rounded-lg px-2 block">Services & Pricing</a>
            <button onClick={(e) => {scrollToSection(e, 'contact'); setIsMenuOpen(false);}} className="w-full text-left py-3 sm:py-4 text-slate-800 font-extrabold text-lg sm:text-xl border-b border-slate-100 active:bg-slate-50 rounded-lg px-2">Book Appointment</button>
            
            <button onClick={(e) => { handleCallClick(e); setIsMenuOpen(false); }} className="w-full bg-blue-600 text-white px-4 py-3 sm:py-4 rounded-xl font-bold flex justify-center items-center shadow-lg shadow-blue-600/20 mt-4 sm:mt-6 active:scale-95 transition-transform min-h-[48px] sm:min-h-[56px] text-sm sm:text-base">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-2.5" />
              Call +91 74788 51252
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <main className="flex-grow w-full">
        
        {/* Cinematic Hero Section */}
        <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-40 overflow-hidden bg-white flex items-center min-h-[70vh] md:min-h-[80vh]">
          {/* Image Background spanning right side with Fade */}
          <div className="absolute top-0 right-0 w-full md:w-[65%] h-full z-0 animate-fade-in-up delay-300 opacity-0">
            <img
              src="https://i.postimg.cc/K8ZBmckq/Whats-App-Image-2026-03-11-at-8-23-58-PM.jpg"
              alt="Modern Dental Clinic"
              className="w-full h-full object-cover object-center"
            />
            {/* The precise fade where text starts (Left side of the image fading into transparency to the right) */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent sm:via-white/40 hidden md:block"></div>
            {/* Fade bottom to blend into the next section */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent"></div>
            {/* Mobile specific fade so text remains easily readable */}
            <div className="absolute inset-0 bg-white/85 md:hidden"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="max-w-2xl lg:max-w-3xl text-left">

              <div className="animate-fade-in-up opacity-0">
                <span className="inline-flex items-center justify-center bg-white/80 backdrop-blur-md text-blue-600 font-extrabold px-3 py-1.5 sm:px-4 rounded-full text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4 sm:mb-6 border border-blue-100 shadow-sm">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2 animate-pulse" /> Your Family Dental Care Partner
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight leading-[1.1] animate-fade-in-up delay-100 opacity-0">
                Modern Care for your <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Perfect Smile</span>
              </h2>

              <p className="text-slate-700 text-sm sm:text-lg lg:text-xl font-medium mb-8 sm:mb-10 animate-fade-in-up delay-200 opacity-0 leading-relaxed max-w-xl md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-lg">
                Expert dental treatments with advanced technology in a comfortable, friendly environment. Don't wait till pain starts—visit us today!
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 animate-fade-in-up delay-300 opacity-0 w-full sm:w-auto">
                <button 
                  onClick={(e) => scrollToSection(e, 'contact')} 
                  className="w-full sm:w-auto bg-blue-600 text-white px-5 sm:px-8 py-3.5 sm:py-4.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center text-sm sm:text-lg min-h-[48px] md:min-h-[52px]"
                >
                  <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-2.5" />
                  Book a Visit
                </button>
                <button 
                  onClick={handleCallClick} 
                  className="w-full sm:w-auto bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all flex items-center justify-center text-sm sm:text-lg shadow-sm min-h-[48px] md:min-h-[52px]"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-2.5" />
                  Call Us Now
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 mb-12 sm:mb-16 reveal opacity-0">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 border border-white p-3 sm:p-3 overflow-hidden flex flex-col md:flex-row gap-3">
            
            {/* Location Card */}
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="flex-1 flex items-center p-4 sm:p-5 md:p-6 bg-slate-50/80 hover:bg-white border border-transparent hover:border-blue-100 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 group rounded-xl sm:rounded-2xl md:justify-center text-left transform hover:-translate-y-1 cursor-pointer relative overflow-hidden min-h-[72px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="bg-white p-3 sm:p-3.5 rounded-xl shadow-sm border border-slate-100 mr-4 text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 relative z-10">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
              </div>
              <div className="relative z-10">
                <h4 className="font-extrabold text-sm sm:text-lg text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">Location</h4>
                <p className="text-slate-500 text-xs sm:text-sm font-medium mt-0.5 sm:mt-1">Near Singtam Bridge, Singtam</p>
              </div>
            </a>

            {/* Working Hours Card */}
            <div className="flex-1 flex items-center p-4 sm:p-5 md:p-6 bg-slate-50/80 hover:bg-white border border-transparent hover:border-emerald-100 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300 group rounded-xl sm:rounded-2xl md:justify-center text-left transform hover:-translate-y-1 cursor-default relative overflow-hidden min-h-[72px]">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="bg-white p-3 sm:p-3.5 rounded-xl shadow-sm border border-slate-100 mr-4 text-emerald-600 flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 group-hover:scale-110 relative z-10">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
              </div>
              <div className="relative z-10">
                <h4 className="font-extrabold text-sm sm:text-lg text-slate-900 leading-tight group-hover:text-emerald-700 transition-colors">Working Hours</h4>
                <p className="text-slate-500 text-xs sm:text-sm font-medium mt-0.5 sm:mt-1">8 AM - 6 PM (Closed Wed)</p>
              </div>
            </div>

            {/* Contact Card */}
            <button onClick={handleCallClick} className="flex-1 flex items-center p-4 sm:p-5 md:p-6 bg-blue-600 hover:bg-blue-700 border border-transparent transition-all duration-300 group rounded-xl sm:rounded-2xl md:justify-center text-left transform hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-blue-600/30 relative overflow-hidden min-h-[72px]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-3.5 rounded-xl border border-white/20 mr-4 text-white flex-shrink-0 group-hover:bg-white group-hover:text-blue-600 transition-all duration-300 group-hover:scale-110 relative z-10">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
              </div>
              <div className="relative z-10">
                <h4 className="font-extrabold text-sm sm:text-lg text-white leading-tight">Call Us Now</h4>
                <p className="text-blue-100 text-xs sm:text-sm font-medium mt-0.5 sm:mt-1 tracking-wide">+91 74788 51252</p>
              </div>
            </button>

          </div>
        </div>

        {/* BENTO GRID ABOUT SECTION */}
        <section id="about" className="py-12 md:py-32 bg-slate-50 relative overflow-hidden border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 md:mb-20 group cursor-default reveal opacity-0">
              <div className="inline-flex items-center bg-white border border-slate-200 text-blue-600 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[10px] sm:text-sm font-extrabold uppercase tracking-widest mb-4 sm:mb-6 shadow-sm hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-300">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 mr-2 sm:mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-blue-600"></span>
                </span>
                About Our Clinic
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight transition-transform duration-700 group-hover:scale-[1.02]">
                Setting a new standard for <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 animate-gradient pb-1">dental care in Singtam</span>
              </h2>
              <div className="h-1 sm:h-1.5 w-12 sm:w-16 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-5 sm:mt-8 rounded-full opacity-40 group-hover:w-20 sm:group-hover:w-40 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
            </div>

            {/* UPGRADED 2x2 Grid Layout */}
            <div className="grid grid-cols-2 gap-3 sm:gap-8 lg:gap-10 reveal opacity-0 delay-100">

              {/* Box 1: Main Intro */}
              <div className="col-span-2 bg-white p-5 sm:p-8 md:p-14 rounded-2xl sm:rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center text-center sm:text-left">
                 <div className="bg-slate-50 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm mb-5 sm:mb-8 border border-slate-100 mx-auto sm:mx-0">
                    <CustomLogo className="w-8 h-8 sm:w-10 sm:h-10" />
                 </div>
                 <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 sm:mb-6 tracking-tight">Life Care Dental Clinic</h3>
                 <p className="text-slate-600 font-medium text-sm sm:text-lg leading-relaxed mb-5 sm:mb-8 max-w-3xl mx-auto sm:mx-0">
                    Located conveniently Near Singtam Bridge in Dhamala Colony, Singtam, we are dedicated to providing the highest standard of dental care to the community of East Sikkim. We believe a trip to the dentist shouldn't be scary.
                 </p>
                 <p className="text-blue-700 font-bold italic border-l-4 border-blue-600 pl-4 sm:pl-5 py-2 sm:py-2 bg-blue-50/50 rounded-r-lg sm:rounded-r-xl text-sm sm:text-lg max-w-3xl text-left">
                    "Don't wait till pain starts. Preventive care is the key to a lasting smile."
                 </p>
                 <div className="mt-6 sm:mt-8 flex justify-center sm:justify-start">
                   <a href="/about" className="inline-flex items-center justify-center bg-slate-900 text-white px-6 py-3.5 sm:py-3 rounded-xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base group w-full sm:w-auto">
                     View More About Us
                     <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                   </a>
                 </div>
              </div>

              {/* Box 2: Interactive Accordion */}
              <div className="col-span-2 bg-white border border-slate-200 p-5 sm:p-8 md:p-14 rounded-2xl sm:rounded-[2.5rem] shadow-sm flex flex-col justify-center">
                 <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-5 sm:mb-8 flex items-center justify-center sm:justify-start">
                    <ShieldCheck className="text-blue-600 mr-2.5 sm:mr-4 w-6 h-6 sm:w-7 sm:h-7" /> Why Choose Us?
                 </h4>
                 <div className="space-y-3 sm:space-y-4">
                    {accordionData.map((item, index) => (
                      <div 
                        key={index} 
                        className={`border rounded-xl sm:rounded-2xl transition-all duration-300 overflow-hidden ${
                          activeAccordion === index 
                            ? 'border-blue-300 bg-blue-50/40 shadow-sm' 
                            : 'border-slate-100 bg-slate-50/50 hover:border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <button 
                          onClick={() => setActiveAccordion(activeAccordion === index ? null : index)} 
                          className="w-full flex justify-between items-center p-4 sm:p-5 md:p-6 text-left focus:outline-none min-h-[56px] sm:min-h-[60px]"
                        >
                          <div className="flex items-center space-x-3 sm:space-x-5 pr-2">
                            <div className={`p-2.5 sm:p-3 rounded-xl transition-colors flex-shrink-0 ${activeAccordion === index ? 'bg-blue-600 text-white shadow-md animate-pulse' : 'bg-white text-blue-600 shadow-sm border border-slate-100'}`}>
                              <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <span className={`font-bold text-sm sm:text-lg md:text-xl leading-tight ${activeAccordion === index ? 'text-blue-900' : 'text-slate-800'}`}>
                              {item.title}
                            </span>
                          </div>
                          <ChevronDown 
                            className={`w-5 h-5 sm:w-6 sm:h-6 text-slate-400 transition-transform duration-300 flex-shrink-0 ${activeAccordion === index ? 'rotate-180 text-blue-600' : ''}`} 
                          />
                        </button>
                        
                        <div 
                          className={`grid transition-all duration-300 ease-in-out ${
                            activeAccordion === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="pl-4 sm:pl-[4.5rem] pr-4 sm:pr-8 pb-4 sm:pb-6 text-slate-600 font-medium text-xs sm:text-lg leading-relaxed mt-1 sm:mt-0">
                              {item.content}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Bottom Relaxed Cards - 2x2 Grid on Mobile and Desktop */}
              
              {/* Box 3: Rating Stat */}
              <div className="col-span-1 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-4 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-blue-900/40 hover:-translate-y-1 transition-all duration-500 flex flex-col items-start text-left relative overflow-hidden group min-h-[160px] sm:min-h-[340px] w-full reveal opacity-0">
                 <div className="absolute -right-6 -top-6 sm:-right-12 sm:-top-12 text-blue-500/20 pointer-events-none transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-700">
                    <Star className="w-24 h-24 sm:w-64 sm:h-64 fill-current" />
                 </div>
                 <div className="relative z-10 flex flex-col h-full w-full justify-between">
                     <div>
                       <div className="flex gap-0.5 sm:gap-1.5 text-yellow-400 mb-2 sm:mb-6 drop-shadow-[0_0_12px_rgba(250,204,21,0.6)] transform group-hover:scale-105 origin-left transition-transform duration-500">
                          <Star className="w-3.5 h-3.5 sm:w-8 sm:h-8 fill-current" />
                          <Star className="w-3.5 h-3.5 sm:w-8 sm:h-8 fill-current" />
                          <Star className="w-3.5 h-3.5 sm:w-8 sm:h-8 fill-current" />
                          <Star className="w-3.5 h-3.5 sm:w-8 sm:h-8 fill-current" />
                          <div className="relative">
                            <Star className="w-3.5 h-3.5 sm:w-8 sm:h-8 text-yellow-400" />
                            <div className="absolute top-0 left-0 w-[50%] overflow-hidden">
                              <Star className="w-3.5 h-3.5 sm:w-8 sm:h-8 fill-current text-yellow-400" />
                            </div>
                          </div>
                       </div>
                       <div className="text-3xl sm:text-7xl lg:text-8xl font-black mb-0.5 sm:mb-2 tracking-tight text-white drop-shadow-sm group-hover:text-blue-50 transition-colors">4.5<span className="text-sm sm:text-4xl lg:text-5xl text-blue-300 font-bold ml-1 group-hover:text-blue-200">/5</span></div>
                     </div>
                     <div className="text-blue-100 font-semibold text-xs sm:text-2xl mt-1 sm:mt-4 tracking-wide group-hover:text-white transition-colors leading-tight">Patient Rating</div>
                 </div>
              </div>

              {/* Box 4: Open Days Stat */}
              <div className="col-span-1 bg-gradient-to-br from-slate-900 to-slate-800 p-4 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-slate-900/50 hover:-translate-y-1 transition-all duration-500 flex flex-col items-start text-left relative overflow-hidden group min-h-[160px] sm:min-h-[340px] border border-slate-700/50 w-full reveal opacity-0 delay-100">
                 <div className="absolute -right-6 -bottom-6 sm:-right-12 sm:-bottom-12 text-slate-700/30 pointer-events-none transform group-hover:-rotate-12 group-hover:scale-110 transition-all duration-700">
                    <Clock className="w-24 h-24 sm:w-64 sm:h-64" />
                 </div>
                 <div className="relative z-10 flex flex-col h-full w-full justify-between">
                     <div>
                       <div className="w-8 h-8 sm:w-20 sm:h-20 rounded-lg sm:rounded-2xl bg-slate-800/80 backdrop-blur-md flex items-center justify-center mb-3 sm:mb-8 text-emerald-400 border border-slate-600 shadow-lg group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-400 transition-all duration-500">
                          <Clock className="w-4 h-4 sm:w-10 sm:h-10 transform group-hover:rotate-180 transition-transform duration-[1.5s] ease-in-out group-hover:animate-pulse" />
                       </div>
                       <div className="text-xl sm:text-5xl lg:text-6xl font-black mb-0.5 sm:mb-3 leading-tight text-white drop-shadow-sm">Open <br/>6 Days</div>
                     </div>
                     <div className="text-slate-400 font-medium text-[9px] sm:text-xl group-hover:text-emerald-300 transition-colors mt-1 sm:mt-4">
                       8:00 AM – 6:00 PM <span className="block text-[7px] sm:text-sm text-red-400/80 group-hover:text-red-300 mt-0.5 sm:mt-1">Closed on Wed</span>
                     </div>
                 </div>
              </div>

              {/* Box 5: Vertical Image (Modern Equipment) */}
              <div className="col-span-1 relative rounded-2xl sm:rounded-3xl overflow-hidden group shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 p-4 sm:p-10 flex flex-col justify-end text-left min-h-[160px] sm:min-h-[340px] w-full reveal opacity-0">
                 <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80" alt="Modern Dental Clinic" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-slate-900/10 transition-opacity duration-500 group-hover:opacity-90"></div>
                 <div className="relative z-10 flex flex-col items-start w-full">
                    <div className="w-8 h-8 sm:w-20 sm:h-20 rounded-lg sm:rounded-2xl bg-emerald-500/20 backdrop-blur-md flex items-center justify-center mb-2 sm:mb-6 border border-emerald-400/30 shadow-lg group-hover:bg-emerald-500/40 group-hover:scale-110 transition-all duration-500">
                       <Activity className="w-4 h-4 sm:w-10 sm:h-10 text-emerald-400 group-hover:text-emerald-300 animate-pulse" />
                    </div>
                    <span className="text-white font-extrabold text-lg sm:text-4xl lg:text-5xl leading-tight drop-shadow-md transform group-hover:translate-x-2 transition-transform duration-500">Modern <br/>Equipment</span>
                 </div>
              </div>

              {/* Box 6: Instagram Banner */}
              <div className="col-span-1 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 animate-gradient bg-[length:200%_200%] p-4 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/40 hover:-translate-y-1 transition-all duration-500 flex flex-col items-start text-left relative overflow-hidden group min-h-[160px] sm:min-h-[340px] w-full reveal opacity-0 delay-100">
                 <div className="absolute top-0 right-0 w-24 h-24 sm:w-64 sm:h-64 bg-white/10 rounded-full blur-xl sm:blur-3xl transform translate-x-1/4 -translate-y-1/4 pointer-events-none group-hover:scale-125 transition-transform duration-1000"></div>
                 
                 <div className="relative z-10 flex flex-col h-full w-full justify-between">
                    <div>
                      <div className="w-8 h-8 sm:w-20 sm:h-20 rounded-lg sm:rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-2 sm:mb-8 border border-white/30 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-500 shadow-lg">
                         <Instagram className="w-4 h-4 sm:w-10 sm:h-10 text-white group-hover:animate-bounce" />
                      </div>
                      <h4 className="text-lg sm:text-4xl lg:text-5xl font-extrabold mb-1 sm:mb-3 leading-tight text-white drop-shadow-sm">Follow Our <br className="hidden sm:block"/>Journey</h4>
                      <p className="text-white/90 font-medium text-[9px] sm:text-lg mb-2 sm:mb-6 leading-tight">See real patient smiles & updates!</p>
                    </div>
                    
                    <a 
                       href="https://www.instagram.com/lifecaresingtam?igsh=MXd4dDZnYW9wMXNhdw==" 
                       target="_blank" 
                       rel="noreferrer" 
                       className="relative z-10 bg-white text-purple-600 font-bold py-1.5 sm:py-4 px-2 sm:px-6 rounded-lg sm:rounded-2xl flex items-center justify-center hover:bg-slate-50 transition-all duration-300 w-full shadow-lg hover:shadow-xl text-[9px] sm:text-lg mt-auto transform group-hover:-translate-y-1 group/btn min-h-[28px] sm:min-h-[44px]"
                    >
                       <span className="truncate">@lifecaresingtam</span>
                       <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5 ml-1 sm:ml-2 transform group-hover/btn:translate-x-2 transition-transform duration-300 flex-shrink-0" />
                    </a>
                 </div>
              </div>

            </div>
          </div>
        </section>

        {/* Meet Our Dentist Section */}
        <section id="dentist" className="py-12 md:py-32 bg-white relative overflow-hidden border-t border-slate-100">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] sm:w-[600px] sm:h-[600px] bg-blue-50/50 rounded-full blur-[40px] sm:blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal opacity-0">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 md:mb-20 group cursor-default">
              <div className="inline-flex items-center bg-blue-50 border border-blue-200 text-blue-700 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[10px] sm:text-sm font-extrabold uppercase tracking-widest mb-4 sm:mb-6 shadow-sm hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-300">
                <User className="w-3 h-3 sm:w-[18px] sm:h-[18px] mr-1.5 sm:mr-2.5" />
                Meet Our Dentist
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight transition-transform duration-700 group-hover:scale-[1.02]">
                Experienced, caring, and <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 animate-gradient pb-1">committed to your smile.</span>
              </h2>
              <div className="h-1 sm:h-1.5 w-12 sm:w-16 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-5 sm:mt-8 rounded-full opacity-40 group-hover:w-20 sm:group-hover:w-40 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
            </div>

            {/* Split Layout */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
              
              {/* Left Column: Image */}
              <div className="w-full lg:w-1/2 relative max-w-xs sm:max-w-lg lg:max-w-none mx-auto animate-float-delayed">
                <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-xl sm:shadow-2xl shadow-blue-900/10 border border-slate-100 group aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" 
                    alt="Dr. Sheema Sapkota" 
                    className="w-full h-full object-cover object-center transition-transform duration-[1.5s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent opacity-90"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto md:bottom-8 md:left-8 bg-white/95 backdrop-blur-md p-3 sm:p-4 md:p-5 rounded-2xl shadow-xl flex items-center space-x-3 sm:space-x-4 border border-white/50 transform group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="bg-blue-100 text-blue-600 p-2.5 sm:p-3 rounded-xl flex-shrink-0 shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-lg font-extrabold text-slate-900 leading-tight">Dental Surgeon</p>
                      <p className="text-[10px] sm:text-sm font-semibold text-blue-600">Smile Designing</p>
                    </div>
                  </div>
                </div>
                
                {/* Background decorative elements */}
                <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-24 h-24 sm:w-48 sm:h-48 bg-dots-pattern opacity-40 z-[-1] pointer-events-none"></div>
              </div>

              {/* Right Column: Info */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 sm:mb-4 tracking-tight text-center lg:text-left">Dr. Sheema Sapkota</h3>
                
                <div className="flex items-center justify-center lg:justify-start text-blue-600 font-bold text-sm sm:text-lg md:text-xl mb-5 sm:mb-8">
                  <span className="bg-blue-50 px-4 sm:px-4 py-1.5 sm:py-1.5 rounded-lg border border-blue-100 shadow-sm inline-flex items-center">
                    BDS, FAD <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-2.5 text-emerald-500" />
                  </span>
                </div>
                
                <p className="text-slate-600 font-medium text-sm sm:text-lg leading-relaxed mb-8 sm:mb-10 text-center lg:text-left px-2 sm:px-0">
                  "Life Care Dental Clinic is led by Dr. Sheema Sapkota, an experienced dental surgeon dedicated to providing modern, patient-focused care. Specializing in smile designing, she combines advanced techniques with a gentle approach to help patients achieve their perfect, confident smiles."
                </p>

                {/* Info Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10 px-2 sm:px-0">
                  
                  {/* Experience Card */}
                  <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-100 flex items-center hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1 group">
                    <div className="bg-blue-100 text-blue-600 p-3 sm:p-3.5 rounded-xl mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h5 className="font-extrabold text-slate-900 text-base sm:text-lg leading-tight">9+ Years</h5>
                      <p className="font-medium text-slate-500 text-xs sm:text-sm mt-0.5">Experience</p>
                    </div>
                  </div>
                  
                  {/* Patients Card */}
                  <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-100 flex items-center hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1 group">
                    <div className="bg-emerald-100 text-emerald-600 p-3 sm:p-3.5 rounded-xl mr-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                      <Star className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
                    </div>
                    <div>
                      <h5 className="font-extrabold text-slate-900 text-base sm:text-lg leading-tight">5000+</h5>
                      <p className="font-medium text-slate-500 text-xs sm:text-sm mt-0.5">Happy Patients</p>
                    </div>
                  </div>
                  
                  {/* Certified Card */}
                  <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-100 flex items-center hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1 group sm:col-span-2">
                    <div className="bg-purple-100 text-purple-600 p-3 sm:p-3.5 rounded-xl mr-4 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
                    </div>
                    <div>
                      <h5 className="font-extrabold text-slate-900 text-base sm:text-lg leading-tight">Certified Dental Specialist</h5>
                      <p className="font-medium text-slate-500 text-xs sm:text-sm mt-0.5">Government verified expert</p>
                    </div>
                  </div>

                </div>

                <div className="flex justify-center lg:justify-start px-2 sm:px-0">
                  <button 
                    onClick={(e) => scrollToSection(e, 'contact')} 
                    className="w-full sm:w-fit inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm sm:text-lg min-h-[48px] sm:min-h-[56px]"
                  >
                    <CalendarCheck className="w-5 h-5 sm:w-[22px] sm:h-[22px] mr-2 sm:mr-3" />
                    Book Appointment
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* RESTORED INTERACTIVE Services Section - Mobile 2x2 Grid */}
        <section id="services" className="py-12 md:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden border-t border-slate-100">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
            <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-blue-50 rounded-full blur-[50px] sm:blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-50 rounded-full blur-[50px] sm:blur-[100px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 reveal opacity-0">
              <div className="inline-flex items-center bg-white border border-slate-200 text-blue-600 px-3 sm:px-4 py-1.5 sm:py-1.5 rounded-full text-[10px] sm:text-sm font-extrabold uppercase tracking-widest mb-4 sm:mb-6 shadow-sm hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-300">
                <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Our Services
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 sm:mb-8 leading-tight transition-transform duration-700 group-hover:scale-[1.02]">
                Comprehensive <br className="sm:hidden"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 animate-gradient">Dental Care</span>
              </h2>
              <p className="text-sm sm:text-lg lg:text-xl text-slate-600 font-medium mb-8 sm:mb-12 px-2 sm:px-0">
                We offer a wide range of dental services using cutting-edge equipment to ensure you get the best, pain-free treatment possible.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 px-4 sm:px-0">
                <div className="w-full sm:w-auto bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-2xl sm:rounded-full py-3 sm:py-3 px-4 sm:px-6 flex items-center justify-center sm:justify-start gap-3 cursor-default">
                   <div className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-yellow-50 text-yellow-500 flex-shrink-0">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                   </div>
                   <div className="flex flex-col text-left">
                      <div className="flex items-center gap-0.5 sm:gap-1 text-yellow-400">
                        <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                        <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                        <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                        <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                        <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current text-yellow-400 opacity-50" />
                        <span className="ml-1.5 text-sm sm:text-base font-extrabold text-slate-900 leading-none">4.5</span>
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">Highly Rated</span>
                   </div>
                </div>

                <div className="w-full sm:w-auto bg-slate-900 border border-slate-800 shadow-md hover:shadow-lg hover:shadow-slate-900/30 hover:-translate-y-1 transition-all duration-300 rounded-2xl sm:rounded-full py-3 sm:py-3 px-4 sm:px-6 flex items-center justify-center sm:justify-start gap-3 cursor-default">
                   <div className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                   </div>
                   <div className="flex flex-col text-left">
                      <span className="text-sm sm:text-base font-extrabold text-white leading-none mb-1">Certified Clinic</span>
                      <span className="text-[10px] sm:text-xs font-medium text-slate-400 tracking-wider">Govt. Registered Experts</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Mobile 2x2 Grid for Services */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-8 mt-8 sm:mt-16 reveal opacity-0 delay-100">
              
              {/* Service Card 1 */}
              <div className="col-span-1 bg-white p-4 sm:p-8 md:p-10 rounded-[1.25rem] sm:rounded-[2rem] shadow-sm sm:shadow-md border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20"></div>
                
                {/* Animated Background Watermark */}
                <div className="absolute -bottom-8 -right-8 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000 pointer-events-none z-0">
                  <div className="animate-[spin_12s_linear_infinite] group-hover:scale-110 transition-transform duration-1000">
                    <CustomLogo className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] grayscale" />
                  </div>
                </div>

                <div className="flex-grow relative z-10">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-2xl flex items-center justify-center text-blue-600 bg-blue-50 mb-3 sm:mb-6 md:mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-blue-500/30">
                    <div className="transform transition-transform duration-1000 group-hover:[transform:rotateY(360deg)] w-full h-full flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 opacity-90 drop-shadow-sm group-hover:drop-shadow-md transition-all duration-500 group-hover:text-white" />
                    </div>
                  </div>
                  <h4 className="text-[13px] sm:text-xl md:text-2xl font-extrabold text-slate-900 mb-1 sm:mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">General & Preventive</h4>
                  <p className="text-slate-600 font-medium leading-tight sm:leading-relaxed text-[10px] sm:text-sm md:text-base line-clamp-3 sm:line-clamp-none">Comprehensive oral care focusing on preventing dental issues before they start.</p>
                </div>
                <a href="/services" className="mt-4 sm:mt-8 md:mt-10 pt-3 sm:pt-5 md:pt-6 border-t border-slate-100 flex items-center text-blue-600 font-bold group-hover:text-blue-700 transition-colors text-[11px] sm:text-sm md:text-base relative z-10 w-full text-left min-h-[32px] sm:min-h-[44px]">
                  Book <span className="hidden sm:inline">&nbsp;this service</span> <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1 sm:ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>
              </div>
              
              {/* Service Card 2 */}
              <div className="col-span-1 bg-white p-4 sm:p-8 md:p-10 rounded-[1.25rem] sm:rounded-[2rem] shadow-sm sm:shadow-md border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20"></div>
                
                {/* Animated Background Watermark */}
                <div className="absolute -bottom-6 -right-6 text-slate-50 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none transform group-hover:scale-110 group-hover:-rotate-12 z-0">
                  <Stethoscope className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]" strokeWidth={0.5} />
                </div>

                <div className="flex-grow relative z-10">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-2xl flex items-center justify-center text-purple-600 bg-purple-50 mb-3 sm:mb-6 md:mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-purple-500/30">
                    <div className="transform transition-transform duration-1000 group-hover:[transform:rotateY(360deg)] w-full h-full flex items-center justify-center">
                      <Stethoscope className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 opacity-90 drop-shadow-sm group-hover:drop-shadow-md transition-all duration-500 group-hover:text-white" />
                    </div>
                  </div>
                  <h4 className="text-[13px] sm:text-xl md:text-2xl font-extrabold text-slate-900 mb-1 sm:mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">Root Canal Treatment</h4>
                  <p className="text-slate-600 font-medium leading-tight sm:leading-relaxed text-[10px] sm:text-sm md:text-base line-clamp-3 sm:line-clamp-none">Save heavily infected or damaged teeth with advanced, painless root canal therapy.</p>
                </div>
                <a href="/services" className="mt-4 sm:mt-8 md:mt-10 pt-3 sm:pt-5 md:pt-6 border-t border-slate-100 flex items-center text-blue-600 font-bold group-hover:text-blue-700 transition-colors text-[11px] sm:text-sm md:text-base relative z-10 w-full text-left min-h-[32px] sm:min-h-[44px]">
                  Book <span className="hidden sm:inline">&nbsp;this service</span> <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1 sm:ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>
              </div>

              {/* Service Card 3 - Spans full width on mobile to maintain 2-column grid aesthetic on top */}
              <div className="col-span-2 lg:col-span-1 bg-white p-4 sm:p-8 md:p-10 rounded-[1.25rem] sm:rounded-[2rem] shadow-sm sm:shadow-md border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20"></div>
                
                {/* Animated Background Watermark */}
                <div className="absolute -bottom-6 -right-6 text-slate-50 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none transform group-hover:scale-110 group-hover:-rotate-12 z-0">
                  <HeartHandshake className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]" strokeWidth={0.5} />
                </div>

                <div className="flex-grow relative z-10">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-2xl flex items-center justify-center text-cyan-600 bg-cyan-50 mb-3 sm:mb-6 md:mb-8 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-cyan-500/30">
                    <div className="transform transition-transform duration-1000 group-hover:[transform:rotateY(360deg)] w-full h-full flex items-center justify-center">
                      <HeartHandshake className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 opacity-90 drop-shadow-sm group-hover:drop-shadow-md transition-all duration-500 group-hover:text-white" />
                    </div>
                  </div>
                  <h4 className="text-[13px] sm:text-xl md:text-2xl font-extrabold text-slate-900 mb-1 sm:mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">Pediatric (Child) Dentistry</h4>
                  <p className="text-slate-600 font-medium leading-tight sm:leading-relaxed text-[10px] sm:text-sm md:text-base line-clamp-3 sm:line-clamp-none">Gentle, fear-free dental treatments tailored specifically for growing children.</p>
                </div>
                <a href="/services" className="mt-4 sm:mt-8 md:mt-10 pt-3 sm:pt-5 md:pt-6 border-t border-slate-100 flex items-center text-blue-600 font-bold group-hover:text-blue-700 transition-colors text-[11px] sm:text-sm md:text-base relative z-10 w-full text-left min-h-[32px] sm:min-h-[44px]">
                  Book <span className="hidden sm:inline">&nbsp;this service</span> <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1 sm:ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>
              </div>

            </div>

            {/* View All Services CTA */}
            <div className="flex justify-center mt-10 sm:mt-14 px-4 sm:px-0 reveal opacity-0 delay-200">
              <a 
                href="/services" 
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white border-2 border-slate-200 text-slate-800 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 text-sm sm:text-lg group min-h-[48px] sm:min-h-[52px]"
              >
                View All Services
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Why Patients Trust Us Section - Mobile 2x2 Grid */}
        <section className="py-16 md:py-32 bg-slate-50 relative overflow-hidden border-t border-slate-200">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
            <div className="absolute top-1/2 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-blue-100/40 rounded-full blur-[60px] sm:blur-[100px] -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-100/40 rounded-full blur-[60px] sm:blur-[100px] -translate-y-1/2"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 group cursor-default reveal opacity-0">
              <div className="inline-flex items-center bg-white border border-slate-200 text-blue-600 px-4 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[10px] sm:text-sm font-extrabold uppercase tracking-widest mb-4 sm:mb-6 shadow-sm hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-300">
                <ShieldCheck className="w-3 h-3 sm:w-[18px] sm:h-[18px] mr-1.5 sm:mr-2.5" />
                Why Patients Trust Us
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-6 leading-tight transition-transform duration-700 group-hover:scale-[1.02]">
                We are committed to safe, modern, and <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">patient-focused dental care.</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8 reveal opacity-0 delay-100">
              
              {/* Badge 1 */}
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-[1.25rem] sm:rounded-[2rem] shadow-sm border border-slate-200 hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-500 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 w-full flex flex-col sm:flex-row items-center sm:items-start">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 mb-3 sm:mb-0 sm:mr-4 md:mr-6 rounded-xl sm:rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-sm group-hover:scale-110 transform">
                    <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-xl font-extrabold text-slate-900 mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors leading-tight">Government Registered</h4>
                    <p className="text-slate-600 font-medium leading-relaxed text-xs sm:text-sm">Our clinic follows official healthcare standards and regulations.</p>
                  </div>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-[1.25rem] sm:rounded-[2rem] shadow-sm border border-slate-200 hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-500 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 w-full flex flex-col sm:flex-row items-center sm:items-start">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 mb-3 sm:mb-0 sm:mr-4 md:mr-6 rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500 shadow-sm group-hover:scale-110 transform">
                    <Stethoscope className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-xl font-extrabold text-slate-900 mb-1.5 sm:mb-2 group-hover:text-emerald-700 transition-colors leading-tight">Certified Surgeon</h4>
                    <p className="text-slate-600 font-medium leading-relaxed text-xs sm:text-sm">Treatments are performed by a qualified dental professional.</p>
                  </div>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-[1.25rem] sm:rounded-[2rem] shadow-sm border border-slate-200 hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-500 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 w-full flex flex-col sm:flex-row items-center sm:items-start">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 mb-3 sm:mb-0 sm:mr-4 md:mr-6 rounded-xl sm:rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-colors duration-500 shadow-sm group-hover:scale-110 transform">
                    <Activity className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-xl font-extrabold text-slate-900 mb-1.5 sm:mb-2 group-hover:text-purple-700 transition-colors leading-tight">Modern Equipment</h4>
                    <p className="text-slate-600 font-medium leading-relaxed text-xs sm:text-sm">We use advanced tools for safer and more comfortable treatments.</p>
                  </div>
                </div>
              </div>

              {/* Badge 4 */}
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-[1.25rem] sm:rounded-[2rem] shadow-sm border border-slate-200 hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-500 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 w-full flex flex-col sm:flex-row items-center sm:items-start">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 mb-3 sm:mb-0 sm:mr-4 md:mr-6 rounded-xl sm:rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white transition-colors duration-500 shadow-sm group-hover:scale-110 transform">
                    <HeartHandshake className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-xl font-extrabold text-slate-900 mb-1.5 sm:mb-2 group-hover:text-pink-700 transition-colors leading-tight">Patient-First Care</h4>
                    <p className="text-slate-600 font-medium leading-relaxed text-xs sm:text-sm">Every treatment is focused on patient comfort and oral health.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-32 bg-white relative border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
              
              <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit text-center lg:text-left reveal opacity-0">
                <div className="inline-flex items-center bg-slate-50 border border-slate-200 text-blue-600 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-4 sm:mb-6 shadow-sm">
                  <MessageCircle className="w-3.5 h-3.5 mr-2" />
                  FAQs
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 sm:mb-6 leading-tight">
                  Got questions? <br className="hidden sm:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">We have answers.</span>
                </h2>
                <p className="text-slate-600 font-medium text-sm sm:text-lg mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
                  Everything you need to know before your visit to Life Care Dental Clinic. Can't find what you're looking for?
                </p>
                <a 
                  href="https://wa.me/917478851252" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center font-bold text-blue-600 hover:text-blue-800 transition-colors group text-sm sm:text-base"
                >
                  Chat with our team 
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="lg:w-2/3 space-y-3 sm:space-y-4 reveal opacity-0 delay-100">
                {faqData.map((faq, index) => (
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
                      className="w-full flex justify-between items-center p-4 sm:p-5 md:p-6 text-left focus:outline-none min-h-[56px] sm:min-h-[60px]"
                    >
                      <span className={`font-bold text-sm sm:text-lg pr-4 sm:pr-6 leading-tight ${activeFaq === index ? 'text-blue-700' : 'text-slate-800'}`}>
                        {faq.q}
                      </span>
                      <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${activeFaq === index ? 'bg-blue-600 text-white shadow-sm' : 'bg-white border border-slate-200 text-blue-600'}`}>
                        {activeFaq === index ? <Minus className="w-4 h-4 sm:w-5 sm:h-5" /> : <Plus className="w-4 h-4 sm:w-5 sm:h-5" />}
                      </div>
                    </button>
                    
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${
                        activeFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pl-4 sm:pl-5 pr-4 sm:pr-6 pb-5 sm:pb-6 text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-3 sm:pt-4 text-xs sm:text-base">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Contact & Appointment Section */}
        <section id="contact" className="py-16 md:py-32 bg-slate-50 relative border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-xl overflow-hidden border border-slate-200 mb-10 sm:mb-16 flex flex-col lg:flex-row reveal opacity-0">
              
              {/* Contact Info Sidebar */}
              <div className="lg:w-2/5 bg-slate-900 text-white p-6 sm:p-10 md:p-12 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-600 rounded-full blur-[60px] sm:blur-[80px] opacity-30 -mr-10 sm:-mr-20 -mt-10 sm:-mt-20 pointer-events-none"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 sm:mb-4 leading-tight">We'd love to hear from you</h3>
                  <p className="text-slate-400 mb-8 sm:mb-10 font-medium text-sm sm:text-base">Ready for your perfect smile? Visit our clinic or drop us a message today to schedule your appointment.</p>
                  
                  <div className="space-y-6 sm:space-y-8">
                    <div className="flex items-start group">
                      <div className="bg-slate-800/80 p-3 sm:p-3.5 rounded-xl mr-3 sm:mr-4 text-blue-400 border border-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-colors">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1 sm:mb-1.5 text-sm sm:text-base">Visit Us</h4>
                        <p className="text-slate-400 font-medium text-xs sm:text-sm leading-relaxed">Near Singtam Bridge, Dhamala Colony,<br/>Singtam, East Sikkim - 737134</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start group">
                      <div className="bg-slate-800/80 p-3 sm:p-3.5 rounded-xl mr-3 sm:mr-4 text-blue-400 border border-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-colors">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1 sm:mb-1.5 text-sm sm:text-base">Call Us</h4>
                        <a href="tel:+917478851252" className="text-slate-400 font-medium hover:text-white transition-colors text-xs sm:text-sm tracking-wide block p-1 -ml-1">+91 74788 51252</a>
                        <a href="tel:+916297258968" className="text-slate-400 font-medium hover:text-white transition-colors text-xs sm:text-sm tracking-wide block p-1 -ml-1">+91 62972 58968</a>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="bg-slate-800/80 p-3 sm:p-3.5 rounded-xl mr-3 sm:mr-4 text-blue-400 border border-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-colors">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1 sm:mb-1.5 text-sm sm:text-base">Working Hours</h4>
                        <p className="text-slate-400 font-medium text-xs sm:text-sm leading-relaxed">Everyday: 8:00 AM – 6:00 PM<br/>(Closed on Wednesdays)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Booking Form */}
              <div className="lg:w-3/5 p-6 sm:p-10 md:p-12 bg-white flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6 sm:mb-8">Request an Appointment</h3>
                
                {formStatus === 'submitted' ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 sm:p-8 rounded-2xl flex flex-col items-center justify-center text-center h-full min-h-[250px] sm:min-h-[300px]">
                    <CheckCircle2 className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-500 mb-3 sm:mb-4 animate-pulse" />
                    <h4 className="text-lg sm:text-xl font-bold mb-2">Redirecting to WhatsApp...</h4>
                    <p className="text-emerald-700 font-medium text-xs sm:text-sm max-w-sm mx-auto">Please send the pre-filled message in WhatsApp to confirm your request!</p>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="relative group">
                        <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5 sm:mb-2">Full Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600">
                            <User className="w-4 h-4 sm:w-5 sm:h-5 transition-colors" />
                          </div>
                          <input 
                            required type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" 
                            className="w-full h-12 sm:h-14 pl-11 pr-4 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-800 text-sm" 
                          />
                        </div>
                      </div>

                      <div className="relative group">
                        <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5 sm:mb-2">Phone Number</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600">
                            <Phone className="w-4 h-4 sm:w-5 sm:h-5 transition-colors" />
                          </div>
                          <input 
                            required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" 
                            className="w-full h-12 sm:h-14 pl-11 pr-4 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-800 text-sm" 
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5 sm:mb-2">Preferred Date</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 z-10">
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 transition-colors" />
                        </div>
                        <input 
                          required type="date" name="date" value={formData.date} onChange={handleInputChange}
                          className="w-full h-12 sm:h-14 pl-11 pr-4 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-800 text-sm block appearance-none" 
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5 sm:mb-2">Reason for Visit <span className="text-slate-400 font-normal">(Optional)</span></label>
                      <div className="relative">
                        <div className="absolute top-3.5 left-0 pl-4 flex items-start pointer-events-none text-slate-400 group-focus-within:text-blue-600">
                          <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 transition-colors" />
                        </div>
                        <textarea 
                          rows="3" name="reason" value={formData.reason} onChange={handleInputChange} placeholder="e.g. Toothache, Cleaning..." 
                          className="w-full pl-11 pr-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium resize-none text-slate-800 text-sm"
                        ></textarea>
                      </div>
                    </div>
                    
                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 sm:py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-xl shadow-blue-600/30 flex items-center justify-center mt-4 sm:mt-6 active:scale-[0.98] text-sm sm:text-base">
                      <CalendarCheck className="w-5 h-5 mr-2" />
                      Send Booking Request
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Interactive Map Section - Split Layout */}
            <div className="w-full rounded-[2rem] sm:rounded-[3rem] shadow-xl overflow-hidden border border-slate-200 bg-white flex flex-col lg:flex-row group mt-6 sm:mt-10 reveal opacity-0 delay-100">
              
              {/* Left Side: Text Info */}
              <div className="lg:w-2/5 p-6 sm:p-10 md:p-12 flex flex-col justify-center relative bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200">
                <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-100/50 rounded-full blur-[60px] sm:blur-[80px] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                
                <div className="relative z-10 text-center lg:text-left">
                  <div className="inline-flex items-center bg-white border border-slate-200 text-blue-600 px-3 sm:px-4 py-1.5 rounded-lg text-[10px] sm:text-xs font-extrabold uppercase tracking-widest mb-4 sm:mb-6 shadow-sm">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    Location
                  </div>
                  
                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 sm:mb-4 leading-tight tracking-tight">Find Our Clinic</h4>
                  <p className="text-slate-600 font-medium mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                    Conveniently located in Singtam. Drop by for a consultation, or use the map to get precise directions to our front door.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center sm:items-start lg:flex-row lg:items-start justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-10 text-left">
                    <div className="bg-white p-3 sm:p-3.5 rounded-xl shadow-sm border border-slate-100 text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 hidden sm:block">
                      <Navigation className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h5 className="font-bold text-slate-900 mb-1 text-sm sm:text-lg">Address</h5>
                      <p className="text-slate-500 font-medium leading-relaxed text-xs sm:text-base">Near Singtam Bridge, Dhamala Colony<br/>Singtam, East Sikkim - 737134</p>
                    </div>
                  </div>
                  
                  <a 
                    href="https://maps.google.com/?q=Dhamala+Colony,+Singtam,+Sikkim" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full bg-slate-900 text-white font-bold py-3.5 sm:py-4 rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center text-sm sm:text-base group/btn"
                  >
                    Get Directions on Maps
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Side: Map */}
              <div className="lg:w-3/5 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] relative bg-slate-200">
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] pointer-events-none z-10"></div>
                <iframe 
                  width="100%" height="100%" frameBorder="0" style={{ border: 0 }} 
                  src="https://maps.google.com/maps?q=Singtam,+Sikkim&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                  allowFullScreen title="Clinic Location Map"
                  className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 filter saturate-[1.1] transition-all duration-700"
                ></iframe>
              </div>
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
                <MapPin className="w-3.5 h-3.5 sm:w-3 sm:h-3 mr-1.5 sm:mr-1.5 text-blue-500" /> Near Singtam Bridge, Dhamala Colony
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}