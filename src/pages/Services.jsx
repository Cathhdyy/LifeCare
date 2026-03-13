import React, { useState } from 'react';
import SEO from '../components/SEO';
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
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedCard, setExpandedCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const handleBookService = (serviceName) => {
    const message = `Hi, I am interested in booking an appointment for *${serviceName}* at Life Care Dental Clinic. Could you please provide more details and available slots?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917478851252?text=${encodedMessage}`, '_blank');
  };

  const handleCallClick = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.nativeEvent) e.nativeEvent.stopImmediatePropagation();
    }
    
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
      blue: "bg-blue-50 text-blue-600 border-blue-200 group-hover/card:bg-blue-600",
      emerald: "bg-emerald-50 text-emerald-600 border-emerald-200 group-hover/card:bg-emerald-500",
      purple: "bg-purple-50 text-purple-600 border-purple-200 group-hover/card:bg-purple-500",
      pink: "bg-pink-50 text-pink-600 border-pink-200 group-hover/card:bg-pink-500",
      slate: "bg-slate-100 text-slate-700 border-slate-300 group-hover/card:bg-slate-700",
      cyan: "bg-cyan-50 text-cyan-600 border-cyan-200 group-hover/card:bg-cyan-500"
    };
    return map[color] || map.blue;
  };

  // Helper function to render a vertical column of cards (Inline JSX preserves animations)
  const renderColumn = (items) => (
    <div className="flex-1 flex flex-col gap-4 sm:gap-6 lg:gap-8">
      {items.map((service, index) => {
        const isExpanded = expandedCard === service.title;
        return (
          <div 
            key={service.id || index}
            className={`w-full bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col group/card ${isExpanded ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:border-blue-200'}`}
          >
            {/* Top Portion (Always Visible) */}
            <div 
              className="p-5 sm:p-6 cursor-pointer relative"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (e.nativeEvent) e.nativeEvent.stopImmediatePropagation();
                setExpandedCard(isExpanded ? null : service.title);
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 ${getColorClasses(service.color)}`}>
                  <service.icon className="w-6 h-6 group-hover/card:text-white" />
                </div>
                <span className="bg-slate-100 text-slate-600 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {service.category}
                </span>
              </div>
              
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 leading-tight group-hover/card:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-medium line-clamp-2 mb-4 h-10">
                {service.shortDesc}
              </p>

              <div className="flex items-center justify-end border-t border-slate-100 pt-4">
                <button type="button" className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isExpanded ? 'bg-blue-100 text-blue-600' : 'bg-slate-50 text-slate-400 group-hover/card:bg-blue-600 group-hover/card:text-white'}`}>
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
                  type="button"
                  onClick={(e) => { 
                    e.preventDefault();
                    e.stopPropagation(); 
                    if (e.nativeEvent) e.nativeEvent.stopImmediatePropagation();
                    handleBookService(service.title); 
                  }}
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
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden flex flex-col w-full">
      <SEO 
        title="Dental Services & Treatments" 
        description="From routine checkups and teeth whitening to root canals and kid's dentistry, discover the comprehensive painless dental treatments offered at Life Care Dental Clinic."
        keywords="Teeth Whitening Singtam, Root Canal Treatment, Dental Implants, Pediatric Dentistry, Dental Clinic Services"
      />
      
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
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 z-[100] bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group/fab"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 group-hover/fab:animate-pulse" />
        <span className="absolute right-full mr-4 bg-white text-slate-800 text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-lg opacity-0 group-hover/fab:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block border border-slate-100">
          Chat with us
        </span>
      </a>

      {/* Toast Notification */}
      <div className={`fixed top-16 sm:top-24 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-md text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-2xl z-[100] flex items-center transition-all duration-500 ease-in-out border border-slate-700 w-11/12 max-w-sm sm:max-w-md ${toastMessage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mr-2 sm:mr-2.5 flex-shrink-0" />
        <span className="font-semibold tracking-wide text-xs sm:text-sm truncate">{toastMessage}</span>
      </div>

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
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (e.nativeEvent) e.nativeEvent.stopImmediatePropagation();
                        setActiveCategory(cat)
                      }}
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
              <div className="w-full md:w-72 relative group/search">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-slate-400 group-focus-within/search:text-blue-600 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (e.nativeEvent) e.nativeEvent.stopImmediatePropagation();
                  }}
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                />
              </div>

            </div>
          </div>
        </section>

        {/* INDEPENDENT FLEX COLUMNS LAYOUT */}
        <section className="py-12 md:py-20 bg-slate-50 relative min-h-[50vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {filteredServices.length === 0 ? (
               <div className="text-center py-20">
                 <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-slate-200 text-slate-400 mb-4">
                   <Search className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-2">No services found</h3>
                 <p className="text-slate-500">We couldn't find any treatment matching "{searchQuery}". Try a different keyword.</p>
                 <button onClick={() => setSearchQuery("")} type="button" className="mt-4 text-blue-600 font-bold hover:underline">Clear Search</button>
               </div>
            ) : (
              <>
                {/* Mobile View: 1 Column */}
                <div className="flex sm:hidden flex-col gap-4">
                  {renderColumn(filteredServices)}
                </div>

                {/* Tablet View: 2 Columns */}
                <div className="hidden sm:flex lg:hidden gap-6">
                  {/* Left Column */}
                  {renderColumn(filteredServices.filter((_, i) => i % 2 === 0))}
                  {/* Right Column */}
                  {renderColumn(filteredServices.filter((_, i) => i % 2 === 1))}
                </div>

                {/* Desktop View: 3 Columns */}
                <div className="hidden lg:flex gap-8">
                  {/* Left Column */}
                  {renderColumn(filteredServices.filter((_, i) => i % 3 === 0))}
                  {/* Middle Column */}
                  {renderColumn(filteredServices.filter((_, i) => i % 3 === 1))}
                  {/* Right Column */}
                  {renderColumn(filteredServices.filter((_, i) => i % 3 === 2))}
                </div>
              </>
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
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (e.nativeEvent) e.nativeEvent.stopImmediatePropagation();
                  handleBookService("General Consultation");
                }}
                className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold shadow-xl hover:bg-slate-50 hover:-translate-y-1 transition-all flex items-center justify-center"
              >
                <CalendarCheck className="w-5 h-5 mr-2" /> Book a Consultation
              </button>
              <button 
                type="button"
                onClick={handleCallClick}
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> +91 74788 51252
              </button>
              <button 
                type="button"
                onClick={(e) => { 
                  e.preventDefault(); 
                  e.stopPropagation(); 
                  if (e.nativeEvent) e.nativeEvent.stopImmediatePropagation();
                  window.location.href='tel:+916297258968'; 
                }}
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> +91 62972 58968
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}