import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Instagram, 
  Menu, 
  X, 
  ShieldCheck, 
  Stethoscope, 
  CalendarCheck,
  Activity,
  HeartHandshake,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Award,
  Users,
  Target,
  Smile,
  CheckCircle2,
  Quote,
  Star,
  ClipboardList
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

export default function AboutUs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleBookService = () => {
    const message = `Hi, I would like to book an appointment for a consultation at Life Care Dental Clinic.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917478851252?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden flex flex-col w-full">
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
      `}} />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/917478851252" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 z-[100] bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 group-hover:animate-pulse" />
      </a>

      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-20 flex justify-between items-center">
          
          <div className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer group" onClick={() => window.location.href='/'}>
            <div className="rounded-full shadow-sm group-hover:shadow-md transition-shadow">
              <CustomLogo className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-base sm:text-xl md:text-2xl font-extrabold text-slate-900 leading-none tracking-tight">Life Care</h1>
              <span className="text-[8px] sm:text-[10px] md:text-xs font-bold text-blue-600 tracking-widest uppercase mt-0.5">Dental Clinic</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors p-2">Home</a>
            <a href="/about" className="text-sm font-bold text-blue-600 border-b-2 border-blue-600 pb-1">About Us</a>
            <a href="/services" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors p-2">Services</a>
            <button onClick={() => window.location.href='/#contact'} className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-0.5">
              Contact Us
            </button>
          </div>

          <button 
            className="lg:hidden text-slate-800 p-2 bg-slate-50 hover:bg-slate-100 rounded-xl" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`lg:hidden fixed top-14 sm:top-20 left-0 w-full h-[calc(100vh-56px)] sm:h-[calc(100vh-80px)] bg-white/95 backdrop-blur-xl shadow-2xl overflow-y-auto transition-all duration-300 origin-top ${isMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}>
          <div className="flex flex-col px-5 py-6 space-y-1">
            <a href="/" className="w-full text-left py-4 text-slate-800 font-extrabold text-xl border-b border-slate-100">Home</a>
            <a href="/about" className="w-full text-left py-4 text-blue-600 font-extrabold text-xl border-b border-slate-100">About Us</a>
            <a href="/services" className="w-full text-left py-4 text-slate-800 font-extrabold text-xl border-b border-slate-100">Services</a>
            <a href="/#contact" className="w-full text-left py-4 text-slate-800 font-extrabold text-xl border-b border-slate-100">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow w-full">
        
        {/* Cinematic Hero Section */}
        <section className="relative pt-16 pb-24 md:pt-32 md:pb-40 overflow-hidden bg-white flex items-center min-h-[70vh] md:min-h-[80vh]">
          {/* Image Background spanning right side with Fade */}
          <div className="absolute top-0 right-0 w-full md:w-[65%] h-full z-0 animate-fade-in-up delay-300 opacity-0">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=2000&q=80"
              alt="Clinic Environment"
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
                  <HeartHandshake className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2" /> Your Family Dental Care Partner
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight leading-[1.1] animate-fade-in-up delay-100 opacity-0">
                We are building a <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">pain-free future</span> <br className="hidden md:block" /> for dentistry.
              </h1>

              <p className="text-slate-700 text-sm sm:text-lg lg:text-xl font-medium mb-8 sm:mb-10 animate-fade-in-up delay-200 opacity-0 leading-relaxed max-w-xl md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-lg">
                Located perfectly near Singtam Bridge, we are your one-stop solution to all dental problems. We blend advanced technology with a deeply compassionate approach to redefine what a visit to the dentist feels like.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 animate-fade-in-up delay-300 opacity-0 w-full sm:w-auto">
                <div className="bg-white/90 backdrop-blur-md px-4 sm:px-5 py-3 rounded-xl border border-slate-200 shadow-sm flex items-center w-full sm:w-auto">
                   <Users className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                   <span className="font-bold text-slate-800 text-sm sm:text-base">5000+ Smiles Restored</span>
                </div>
                <div className="bg-white/90 backdrop-blur-md px-4 sm:px-5 py-3 rounded-xl border border-slate-200 shadow-sm flex items-center w-full sm:w-auto">
                   <Smile className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                   <span className="font-bold text-slate-800 text-sm sm:text-base">100% Painless Care</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Floating Stats Bar */}
        <section className="relative z-20 -mt-12 sm:-mt-16 mb-16 sm:mb-20 max-w-5xl mx-auto px-4 sm:px-6">
           <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-10 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-6 md:divide-x divide-slate-800">
              <div className="flex flex-col items-center text-center px-1 sm:px-2">
                 <h3 className="text-3xl sm:text-4xl font-black text-blue-400 mb-1">5k+</h3>
                 <p className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 leading-tight">Happy<br className="sm:hidden"/> Patients</p>
              </div>
              <div className="flex flex-col items-center text-center px-1 sm:px-2">
                 <h3 className="text-3xl sm:text-4xl font-black text-emerald-400 mb-1">100%</h3>
                 <p className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 leading-tight">Painless<br className="sm:hidden"/> Care</p>
              </div>
              <div className="flex flex-col items-center text-center px-1 sm:px-2 border-t border-slate-800 pt-6 md:border-t-0 md:pt-0">
                 <h3 className="text-3xl sm:text-4xl font-black text-cyan-400 mb-1">9+</h3>
                 <p className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 leading-tight">Years<br className="sm:hidden"/> Experience</p>
              </div>
              <div className="flex flex-col items-center text-center px-1 sm:px-2 border-t border-slate-800 pt-6 md:border-t-0 md:pt-0">
                 <h3 className="text-3xl sm:text-4xl font-black text-purple-400 mb-1">Top</h3>
                 <p className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 leading-tight">Rated<br className="sm:hidden"/> Clinic</p>
              </div>
           </div>
        </section>

        {/* Magazine-Style Doctor Profile */}
        <section className="py-12 md:py-24 bg-slate-50 relative border-t border-slate-200 overflow-hidden">
          {/* Background Decor */}
          <div className="absolute inset-y-0 right-0 w-1/3 bg-blue-50/50 hidden lg:block"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-10">
              
              {/* Right Column: Image (Rendered first on mobile, visual right on desktop) */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="rounded-t-[2.5rem] lg:rounded-[2.5rem] overflow-hidden shadow-xl aspect-[4/5] sm:aspect-square lg:aspect-[4/5] relative group max-w-md mx-auto lg:max-w-none">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80" 
                    alt="Dr. Sheema Sapkota" 
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-[1.5s]"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent mix-blend-multiply"></div>
                </div>
              </div>

              {/* Left Column: Details (Overlapping the image) */}
              <div className="w-full lg:w-1/2 order-2 lg:order-1 flex justify-center lg:justify-end lg:pr-10">
                <div className="bg-white p-6 sm:p-12 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] -mt-12 lg:mt-0 lg:-mr-20 z-20 relative w-full max-w-xl mx-auto border border-slate-100">
                   <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 sm:mb-6 border border-blue-100">
                     <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                   </div>
                   
                   <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-2">Dr. Sheema Sapkota</h2>
                   <p className="text-blue-600 font-extrabold text-[11px] sm:text-sm uppercase tracking-widest mb-6 flex flex-wrap items-center">
                     Dental Surgeon <span className="mx-2 text-slate-300">•</span> BDS, FAD
                   </p>

                   <div className="relative mb-6 sm:mb-8">
                     <Quote className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 text-slate-100 -z-10 transform -scale-x-100" />
                     <p className="text-slate-600 font-medium leading-relaxed text-sm sm:text-lg italic relative z-10">
                       "Dentistry should never be a source of anxiety. My passion lies in smile designing—combining art and medical science to craft perfect, confident smiles while ensuring every single procedure is as gentle and painless as possible."
                     </p>
                   </div>

                   <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                     <li className="flex items-start sm:items-center text-xs sm:text-base font-bold text-slate-700">
                       <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-0" /> Specializes in Smile Designing
                     </li>
                     <li className="flex items-start sm:items-center text-xs sm:text-base font-bold text-slate-700">
                       <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-0" /> Over 9 Years of Clinical Expertise
                     </li>
                     <li className="flex items-start sm:items-center text-xs sm:text-base font-bold text-slate-700">
                       <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-0" /> Certified & Govt. Registered
                     </li>
                   </ul>

                   <button 
                      onClick={handleBookService}
                      className="text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center group text-sm sm:text-base"
                   >
                     Book a consultation with Dr. Sheema
                     <ArrowRight className="w-4 h-4 ml-1.5 sm:ml-2 transform group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Sticky Core Values Section */}
        <section className="py-16 md:py-32 bg-white relative border-t border-slate-100">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
                 
                 {/* Left Sticky Sidebar */}
                 <div className="lg:w-1/3 relative text-center lg:text-left">
                    <div className="lg:sticky lg:top-32">
                       <div className="inline-flex items-center justify-center bg-emerald-50 text-emerald-600 font-extrabold px-3 py-1 rounded-md text-[10px] uppercase tracking-widest mb-4">
                         <ShieldCheck className="w-3 h-3 mr-1.5" /> Our Philosophy
                       </div>
                       <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight">
                         What Makes Us <br className="hidden lg:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Different?</span>
                       </h2>
                       <p className="text-slate-500 font-medium text-sm sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                         We don't just treat teeth; we build lifelong relationships with our patients. Here are the core pillars that uphold the quality of care at Life Care Dental Clinic.
                       </p>
                    </div>
                 </div>

                 {/* Right Scrolling Grid */}
                 <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    
                    {/* Card 1 */}
                    <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col h-full group">
                       <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white shadow-sm border border-slate-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                         <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                       </div>
                       <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3">One Stop Solution</h3>
                       <p className="text-slate-600 font-medium leading-relaxed text-xs sm:text-sm">
                         From a simple filling to a complex smile redesign or root canal, we have the expertise to handle all your family's dental needs under one roof.
                       </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-100 hover:border-emerald-200 hover:bg-white hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 flex flex-col h-full group md:translate-y-8">
                       <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white shadow-sm border border-slate-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                         <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                       </div>
                       <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3">Uncompromised Hygiene</h3>
                       <p className="text-slate-600 font-medium leading-relaxed text-xs sm:text-sm">
                         Your safety is non-negotiable. We follow strict, international sterilization protocols for every single instrument to ensure a 100% safe environment.
                       </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-100 hover:border-purple-200 hover:bg-white hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-500 flex flex-col h-full group">
                       <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white shadow-sm border border-slate-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-purple-600 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                         <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
                       </div>
                       <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3">Advanced Technology</h3>
                       <p className="text-slate-600 font-medium leading-relaxed text-xs sm:text-sm">
                         We utilize state-of-the-art diagnostic tools and modern equipment to ensure treatments are swift, incredibly precise, and virtually painless.
                       </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-100 hover:border-pink-200 hover:bg-white hover:shadow-xl hover:shadow-pink-900/5 transition-all duration-500 flex flex-col h-full group md:translate-y-8">
                       <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white shadow-sm border border-slate-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-pink-600 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                         <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
                       </div>
                       <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3">Patient-First Care</h3>
                       <p className="text-slate-600 font-medium leading-relaxed text-xs sm:text-sm">
                         We listen to your concerns, explain all options transparently, and make sure you are completely comfortable before we begin any procedure.
                       </p>
                    </div>

                 </div>
              </div>
           </div>
        </section>

        {/* Clinic Tour Gallery Section */}
        <section className="py-16 md:py-32 bg-slate-900 text-white relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
                <div className="inline-flex items-center bg-white/10 border border-white/20 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-bold mb-4 sm:mb-6 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 mr-2" /> Take a Look Inside
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
                  Tour <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Our Clinic</span>
                </h2>
                <p className="text-slate-400 text-sm sm:text-lg font-medium leading-relaxed px-2">
                  We have designed Life Care Dental Clinic to be a calming, hygienic, and welcoming space. Say goodbye to clinical, intimidating waiting rooms.
                </p>
              </div>

              {/* Bento Grid Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 h-auto md:h-[500px]">
                
                {/* Large Main Image */}
                <div className="md:col-span-2 rounded-2xl sm:rounded-[2rem] overflow-hidden relative group h-56 sm:h-64 md:h-full border border-slate-700">
                   <img 
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80" 
                    alt="Modern Operatory" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex items-end p-5 sm:p-8">
                     <div>
                       <span className="text-base sm:text-2xl font-bold block mb-1">State-of-the-Art Operatory</span>
                       <span className="text-[10px] sm:text-sm text-slate-300">Equipped with the latest painless technology.</span>
                     </div>
                   </div>
                </div>

                {/* Side Smaller Images */}
                <div className="flex flex-col gap-3 sm:gap-6 h-full">
                  <div className="rounded-2xl sm:rounded-[2rem] overflow-hidden relative group h-40 sm:h-48 md:h-1/2 border border-slate-700">
                     <img 
                      src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" 
                      alt="Waiting Area" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end p-4 sm:p-6">
                       <span className="text-xs sm:text-base font-bold">Comfortable Waiting Area</span>
                     </div>
                  </div>
                  <div className="rounded-2xl sm:rounded-[2rem] overflow-hidden relative group h-40 sm:h-48 md:h-1/2 border border-slate-700">
                     <img 
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" 
                      alt="Sterilization Area" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end p-4 sm:p-6">
                       <span className="text-xs sm:text-base font-bold">Strict Sterilization Protocol</span>
                     </div>
                  </div>
                </div>

              </div>
           </div>
        </section>

        {/* Patient Success Stories / Testimonials */}
        <section className="py-16 md:py-32 bg-slate-50 relative border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 sm:mb-6">
                Loved by patients in <span className="text-blue-600">Singtam.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-lg font-medium leading-relaxed">
                Don't just take our word for it. Here is what our patients have to say about their experience with Dr. Sheema and our clinic.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {googleReviewsData.map((review, idx) => (
                <div key={idx} className="bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 flex flex-col relative overflow-hidden group">
                  <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 text-slate-50 group-hover:text-blue-50 transition-colors duration-500 z-0" />
                  
                  <div className="flex text-yellow-400 mb-3 sm:mb-4 relative z-10">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-slate-600 font-medium leading-relaxed mb-6 sm:mb-8 relative z-10 flex-grow text-xs sm:text-sm md:text-base italic">
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center gap-3 sm:gap-4 relative z-10 border-t border-slate-100 pt-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-extrabold text-xs sm:text-sm shadow-inner flex-shrink-0">
                      {review.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-tight capitalize">{review.name}</h4>
                      <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5">Verified Patient</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 sm:mt-12 text-center">
              <a 
                href="https://www.google.com/search?q=Life+Care+Dental+Clinic+Singtam" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group text-sm sm:text-base"
              >
                Read more reviews on Google
                <ArrowRight className="w-4 h-4 ml-1.5 sm:ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* The Patient Journey Section */}
        <section className="py-16 md:py-32 bg-white relative border-t border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
              <div className="inline-flex items-center justify-center bg-blue-50 text-blue-600 font-extrabold px-3 py-1 rounded-md text-[10px] uppercase tracking-widest mb-4 border border-blue-100">
                <Target className="w-3 h-3 mr-1.5" /> Simple & Transparent
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 sm:mb-6">
                Your Journey to a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Better Smile</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-lg font-medium leading-relaxed">
                We've streamlined our process to ensure your visit is as comfortable, efficient, and transparent as possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 relative">
               {/* Connecting Line for Desktop */}
               <div className="hidden md:block absolute top-1/2 left-16 right-16 h-1.5 bg-slate-100 -z-10 -translate-y-1/2 rounded-full"></div>
               {/* Connecting Line for Mobile */}
               <div className="md:hidden absolute top-10 bottom-10 left-1/2 w-1.5 bg-slate-100 -z-10 -translate-x-1/2 rounded-full"></div>
               
               {/* Step 1 */}
               <div className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm relative z-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 border-4 border-white shadow-md group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <CalendarCheck className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">1. Easy Booking</h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium">Schedule your visit quickly via WhatsApp or a simple phone call.</p>
               </div>

               {/* Step 2 */}
               <div className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm relative z-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 border-4 border-white shadow-md group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                    <ClipboardList className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">2. Consultation</h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium">Thorough diagnosis, digital X-rays, and a transparent discussion of options.</p>
               </div>

               {/* Step 3 */}
               <div className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm relative z-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 border-4 border-white shadow-md group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                    <Activity className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">3. Treatment</h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium">Experience painless, precision care using our state-of-the-art equipment.</p>
               </div>

               {/* Step 4 */}
               <div className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm relative z-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 border-4 border-white shadow-md group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                    <Smile className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">4. Aftercare</h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium">We provide detailed post-treatment guidance and follow-ups to ensure lasting results.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Community Commitment Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-600/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500/20 text-blue-400 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 backdrop-blur-sm border border-blue-400/30">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">Proudly Serving <span className="text-blue-400">Singtam</span> & East Sikkim</h2>
            <p className="text-slate-300 text-sm sm:text-lg mb-8 sm:mb-10 font-medium max-w-3xl mx-auto leading-relaxed px-2">
              We are deeply rooted in the local community. Our mission is to make premium, modern dental care accessible to everyone in Singtam and the surrounding regions, completely removing the need to travel far for world-class treatments.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
              <a 
                href="/#contact"
                className="w-full sm:w-auto bg-white text-slate-900 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold shadow-xl hover:bg-blue-50 transition-all flex items-center justify-center text-sm sm:text-base"
              >
                Find Our Clinic
              </a>
              <button 
                onClick={handleBookService}
                className="w-full sm:w-auto bg-blue-600 border border-blue-500 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> Message Us
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-5 sm:gap-6">
            
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <CustomLogo className="w-10 h-10 sm:w-14 sm:h-14" />
              <div className="flex flex-col">
                <h1 className="text-base sm:text-xl font-extrabold text-white leading-tight tracking-tight">Life Care Dental Clinic</h1>
                <span className="text-[8px] sm:text-[10px] font-bold text-blue-400 tracking-widest uppercase mt-0.5">Singtam, East Sikkim</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/lifecaresingtam?igsh=MXd4dDZnYW9wMXNhdw==" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all text-slate-400 border border-slate-700">
                <Instagram className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-2.5 sm:gap-4 text-[10px] sm:text-xs font-medium text-slate-500">
            <p>&copy; {new Date().getFullYear()} Life Care Dental Clinic. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="flex items-center text-slate-400">
                <Phone className="w-3 h-3 sm:w-3 sm:h-3 mr-1 sm:mr-1.5 text-blue-500" /> +91 74788 51252 / +91 62972 58968
              </p>
              <p className="flex items-center text-slate-400">
                <MapPin className="w-3 h-3 sm:w-3 sm:h-3 mr-1 sm:mr-1.5 text-blue-500" /> Near Singtam Bridge, Dhamala Colony
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}