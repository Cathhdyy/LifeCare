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
  Sparkles,
  MessageCircle,
  ChevronDown,
  Search,
  HeartHandshake,
  ArrowRight
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

// --- UPDATED SERVICES DATA FROM PAMPHLET ---
const servicesData = [
  {
    id: 1,
    category: "General",
    title: "General & Preventive Dentistry",
    shortDesc: "Comprehensive oral care focusing on preventing dental issues before they start.",
    icon: ShieldCheck,
    color: "blue",
    features: ["Routine checkups", "Digital X-Rays", "Oral cancer screening", "Patient education"],
    details: "Prevention is better than cure. Our preventive dentistry services focus on maintaining optimal oral hygiene to prevent decay, gum disease, and other dental complications."
  },
  {
    id: 2,
    category: "General",
    title: "Tooth Cleaning & Polishing",
    shortDesc: "Professional removal of plaque and tartar for a brighter, healthier smile.",
    icon: Sparkles,
    color: "emerald",
    features: ["Ultrasonic scaling", "Plaque & tartar removal", "Stain removal", "Teeth polishing"],
    details: "Regular cleaning prevents gum disease and bad breath. Our ultrasonic scalers ensure the process is quick, effective, and virtually painless."
  },
  {
    id: 3,
    category: "General",
    title: "Dental Fillings",
    shortDesc: "Restore decayed or damaged teeth with natural-looking composite fillings.",
    icon: Activity,
    color: "pink",
    features: ["Tooth-colored composite", "Painless cavity removal", "Durable restoration", "Prevents further decay"],
    details: "We use high-quality, tooth-colored composite materials to fill cavities seamlessly, ensuring your teeth remain strong and look completely natural."
  },
  {
    id: 4,
    category: "Endodontics",
    title: "Root Canal Treatment",
    shortDesc: "Save heavily infected or damaged teeth with advanced, painless root canal therapy.",
    icon: Stethoscope,
    color: "purple",
    features: ["Infection removal", "Latest rotary equipment", "Performed under local anesthesia", "High success rate"],
    details: "Don't extract a tooth that can be saved! Our RCTs use modern apex locators and rotary files, significantly reducing treatment time and discomfort."
  },
  {
    id: 5,
    category: "Prosthodontics",
    title: "Crowns & Bridges",
    shortDesc: "Custom-made caps and bridges to restore the shape, strength, and function of your teeth.",
    icon: ShieldCheck,
    color: "cyan",
    features: ["Zirconia & Ceramic options", "Missing tooth replacement", "Precise digital measurements", "Natural aesthetics"],
    details: "Whether you've just had a root canal or are missing a tooth, our custom-made crowns and bridges restore your chewing ability and smile perfectly."
  },
  {
    id: 6,
    category: "Surgery",
    title: "Dental Implants",
    shortDesc: "Permanent, strong, and natural-looking replacements for missing teeth.",
    icon: Activity,
    color: "slate",
    features: ["Titanium implants", "Permanent solution", "Preserves jawbone", "Functions like natural teeth"],
    details: "Implants are the gold standard for replacing missing teeth. They look, feel, and function just like your natural teeth, giving you complete confidence."
  },
  {
    id: 7,
    category: "Cosmetic",
    title: "Teeth Whitening",
    shortDesc: "Instantly brighten your smile by safely removing stubborn stains and discoloration.",
    icon: Sparkles,
    color: "blue",
    features: ["Professional clinical bleaching", "Safe for enamel", "Removes tea/coffee stains", "Instant visible results"],
    details: "Get ready for a special occasion! Our whitening treatments safely break down deep stains that regular brushing cannot remove."
  },
  {
    id: 8,
    category: "Cosmetic",
    title: "Smile Designing",
    shortDesc: "Customized aesthetic treatments to create your perfect, confident smile.",
    icon: HeartHandshake,
    color: "pink",
    features: ["Veneers & Laminates", "Gum contouring", "Gap closures", "Full mouth aesthetic planning"],
    details: "Our smile designing service combines various cosmetic procedures tailored to your facial structure, giving you the flawless smile you've always wanted."
  },
  {
    id: 9,
    category: "Prosthodontics",
    title: "Dentures",
    shortDesc: "Comfortable and natural-looking removable replacements for missing teeth.",
    icon: ShieldCheck,
    color: "emerald",
    features: ["Complete dentures", "Partial dentures", "Custom fit & comfortable", "Restores chewing function"],
    details: "We provide high-quality complete and partial dentures designed to fit comfortably and securely, helping you eat and speak with ease."
  },
  {
    id: 10,
    category: "Pediatric",
    title: "Pediatric (Child) Dentistry",
    shortDesc: "Gentle, fear-free dental treatments tailored specifically for growing children.",
    icon: HeartHandshake,
    color: "cyan",
    features: ["Fluoride applications", "Pit & fissure sealants", "Painless kids RCT", "Fun, friendly environment"],
    details: "We specialize in treating children, creating a positive and gentle environment to ensure they don't develop a fear of the dentist."
  },
  {
    id: 11,
    category: "Cosmetic",
    title: "Orthodontic Treatment",
    shortDesc: "Straighten misaligned teeth for a perfect bite using braces or clear aligners.",
    icon: Activity,
    color: "purple",
    features: ["Traditional metal braces", "Ceramic braces", "Clear invisible aligners", "Bite correction"],
    details: "Whether you prefer traditional braces or invisible clear aligners, we offer tailored orthodontic solutions to properly align your teeth."
  },
  {
    id: 12,
    category: "General",
    title: "Emergency Dental Care",
    shortDesc: "Immediate attention and relief for sudden dental pain, trauma, or accidents.",
    icon: Stethoscope,
    color: "slate",
    features: ["Severe toothache relief", "Dental trauma care", "Urgent extractions", "Prompt attention"],
    details: "Dental emergencies can happen anytime. We provide swift and effective care to relieve your pain and address urgent dental issues immediately."
  }
];

const categories = ["All", "General", "Cosmetic", "Endodontics", "Prosthodontics", "Surgery", "Pediatric"];

export default function Services() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedCard, setExpandedCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState("");

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

  const handleBookService = (serviceName) => {
    const message = `Hi, I am interested in booking an appointment for *${serviceName}* at Life Care Dental Clinic. Could you please provide more details and available slots?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917478851252?text=${encodedMessage}`, '_blank');
  };

  const handleCallClick = (e) => {
    if (e) e.preventDefault();
    
    const phoneNumber = "+917478851252";
    const successMessage = 'Phone number copied: +91 74788 51252';
    
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = phoneNumber;
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
      } catch (fallbackErr) {
        console.error('Fallback copy failed', fallbackErr);
      }
    }
  };

  // Filter Logic
  const filteredServices = servicesData.filter(service => {
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Dynamic Color Helper
  const getColorClasses = (color) => {
    const map = {
      blue: "bg-blue-50 text-blue-600 border-blue-200 group-hover:bg-blue-600",
      emerald: "bg-emerald-50 text-emerald-600 border-emerald-200 group-hover:bg-emerald-500",
      purple: "bg-purple-50 text-purple-600 border-purple-200 group-hover:bg-purple-500",
      pink: "bg-pink-50 text-pink-600 border-pink-200 group-hover:bg-pink-500",
      slate: "bg-slate-100 text-slate-700 border-slate-300 group-hover:bg-slate-700",
      cyan: "bg-cyan-50 text-cyan-600 border-cyan-200 group-hover:bg-cyan-500"
    };
    return map[color] || map.blue;
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
            <a href="/services" className="text-sm font-bold text-blue-600 border-b-2 border-blue-600 pb-1">Services</a>
            <a href="/contact" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors p-2">Contact</a>
            <a 
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 min-h-[44px] flex items-center"
            >
              Book Appointment
            </a>
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
            <a href="/services" className="w-full text-left py-3 sm:py-4 text-blue-600 font-extrabold text-lg sm:text-xl border-b border-slate-100 active:bg-slate-50 rounded-lg px-2 block">Services & Pricing</a>
            <a href="/contact" className="w-full text-left py-3 sm:py-4 text-slate-800 font-extrabold text-lg sm:text-xl border-b border-slate-100 active:bg-slate-50 rounded-lg px-2">Contact Us</a>
            
            <button onClick={(e) => { handleCallClick(e); setIsMenuOpen(false); }} className="w-full bg-blue-600 text-white px-4 py-3 sm:py-4 rounded-xl font-bold flex justify-center items-center shadow-lg shadow-blue-600/20 mt-4 sm:mt-6 active:scale-95 transition-transform min-h-[48px] sm:min-h-[56px] text-sm sm:text-base">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-2.5" />
              Call +91 74788 51252
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow w-full">
        
        {/* Services Hero Header */}
        <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-[100px] opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center bg-white/10 border border-white/20 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-bold mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              World-Class Dental Treatments
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Comprehensive Care.<br className="hidden sm:block"/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Exceptional Results.</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto font-medium">
              Explore our wide range of specialized dental services. From routine checkups to full smile designing, we offer everything you need under one roof with the latest technology.
            </p>
          </div>
        </section>

        {/* Filters & Search Section */}
        <section className="py-6 bg-white border-b border-slate-200 sticky top-14 sm:top-20 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Desktop Tabs / Mobile Scrollable Tabs */}
              <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
                <div className="flex space-x-2 w-max">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                        activeCategory === cat 
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' 
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Bar */}
              <div className="w-full md:w-72 relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Services Interactive Grid */}
        <section className="py-12 md:py-20 bg-slate-50 relative min-h-[50vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {filteredServices.length === 0 ? (
               <div className="text-center py-20">
                 <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-slate-200 text-slate-400 mb-4">
                   <Search className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-2">No services found</h3>
                 <p className="text-slate-500">We couldn't find any treatment matching "{searchQuery}". Try a different keyword.</p>
                 <button onClick={() => setSearchQuery("")} className="mt-4 text-blue-600 font-bold hover:underline">Clear Search</button>
               </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filteredServices.map((service, index) => {
                  const isExpanded = expandedCard === service.title;

                  return (
                  <div 
                    key={service.id || index} 
                    className={`bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col group ${isExpanded ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:border-blue-200'}`}
                  >
                    {/* Top Portion (Always Visible) */}
                    <div 
                      className="p-5 sm:p-6 cursor-pointer relative"
                      onClick={() => setExpandedCard(isExpanded ? null : service.title)}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 ${getColorClasses(service.color)}`}>
                          <service.icon className="w-6 h-6 group-hover:text-white" />
                        </div>
                        <span className="bg-slate-100 text-slate-600 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                          {service.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm font-medium line-clamp-2 mb-4 h-10">
                        {service.shortDesc}
                      </p>

                      <div className="flex items-center justify-end border-t border-slate-100 pt-4">
                        <button className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isExpanded ? 'bg-blue-100 text-blue-600' : 'bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white'}`}>
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Expandable Detail Portion */}
                    <div className={`bg-slate-50 overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] border-t border-slate-200 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="p-5 sm:p-6">
                        <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-4">
                          {service.details}
                        </p>
                        
                        <div className="mb-5">
                          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center">
                            <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-emerald-500" /> What's Included
                          </h4>
                          <ul className="space-y-1.5">
                            {service.features.map((feat, idx) => (
                              <li key={idx} className="text-xs sm:text-sm text-slate-600 flex items-start">
                                <span className="text-blue-500 mr-2 font-bold">•</span> {feat}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button 
                          onClick={(e) => { e.stopPropagation(); handleBookService(service.title); }}
                          className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl flex items-center justify-center text-sm hover:bg-blue-600 transition-colors shadow-md active:scale-[0.98]"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" /> Book via WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-cyan-500 text-white relative overflow-hidden border-t border-slate-200">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">Unsure what treatment you need?</h2>
            <p className="text-blue-50 text-sm sm:text-lg mb-8 font-medium max-w-2xl mx-auto">
              Don't worry, diagnosing yourself isn't your job—it's ours! Book a basic consultation, and we'll evaluate your oral health and recommend the perfect tailored treatment plan.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
              <button 
                onClick={() => handleBookService("General Consultation")}
                className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold shadow-xl hover:bg-slate-50 hover:-translate-y-1 transition-all flex items-center justify-center"
              >
                <CalendarCheck className="w-5 h-5 mr-2" /> Book a Consultation
              </button>
              <button 
                onClick={handleCallClick}
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> +91 74788 51252
              </button>
              <button 
                onClick={(e) => { e.preventDefault(); window.location.href='tel:+916297258968'; }}
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> +91 62972 58968
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Upgraded Multi-Column Footer */}
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
            
            {/* Column 1: Brand & Intro */}
            <div className="flex flex-col">
              <a href="/" className="flex items-center space-x-3 mb-6 group cursor-pointer inline-block w-fit">
                <div className="bg-slate-900 rounded-full p-1 border border-slate-800 shadow-sm group-hover:border-slate-700 transition-colors">
                  <CustomLogo className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-xl sm:text-2xl font-extrabold text-white leading-none tracking-tight group-hover:text-blue-400 transition-colors">Life Care</h1>
                  <span className="text-[10px] font-bold text-blue-500 tracking-widest uppercase mt-1">Dental Clinic</span>
                </div>
              </a>
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
                  <a href="/" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all flex items-center text-sm font-medium">
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-blue-500" /> Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all flex items-center text-sm font-medium">
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-blue-500" /> About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all flex items-center text-sm font-medium">
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-blue-500" /> All Services
                  </a>
                </li>
                <li>
                  <a href="/#dentist" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all flex items-center text-sm font-medium">
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-blue-500" /> Meet The Dentist
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all flex items-center text-sm font-medium">
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-blue-500" /> Contact & Map
                  </a>
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
                    <a href="tel:+917791287519" className="text-slate-400 text-sm hover:text-blue-400 transition-colors block mb-0.5">+91 77912 87519</a>
                    <a href="tel:+917478851252" className="text-slate-400 text-sm hover:text-blue-400 transition-colors block">+91 74788 51252</a>
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
              <a href="/contact" className="w-full bg-white text-slate-900 font-bold py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors shadow-lg flex items-center justify-center text-sm group">
                <CalendarCheck className="w-4 h-4 mr-2 text-blue-600 group-hover:text-white transition-colors" /> Book Appointment
              </a>
            </div>

          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-slate-500 text-xs font-medium">
              &copy; {new Date().getFullYear()} Life Care Dental Clinic. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs font-medium flex items-center justify-center md:justify-end">
              Designed with <HeartHandshake className="w-3.5 h-3.5 mx-1.5 text-rose-500" /> for Singtam
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}