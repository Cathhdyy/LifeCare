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
  CheckCircle2
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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden flex flex-col w-full">
      {/* Custom Styles for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient { animation: gradient 4s ease infinite; background-size: 200% 200%; }
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
        
        {/* Hero Section */}
        <section className="relative pt-12 pb-16 md:pt-24 md:pb-32 overflow-hidden bg-slate-50">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-blue-100/50 rounded-full blur-[80px] pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-cyan-100/40 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in-up">
                <div className="inline-flex items-center bg-white border border-slate-200 text-blue-600 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-6 shadow-sm">
                  <HeartHandshake className="w-3.5 h-3.5 mr-2" />
                  Your Family Dental Care Partner
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                  Redefining <br className="hidden lg:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 animate-gradient">Dental Care</span> in Singtam.
                </h1>
                <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                  Life Care Dental Clinic is your one-stop solution to all your dental problems. We believe that a trip to the dentist shouldn't be intimidating. Our mission is to provide world-class, painless treatments in a warm, welcoming environment.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <div className="bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm flex items-center">
                     <Users className="w-5 h-5 text-blue-500 mr-3" />
                     <span className="font-bold text-slate-800">5000+ Smiles Restored</span>
                  </div>
                  <div className="bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm flex items-center">
                     <Smile className="w-5 h-5 text-emerald-500 mr-3" />
                     <span className="font-bold text-slate-800">100% Painless Care</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 relative">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
                  <img 
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80" 
                    alt="Clinic Environment" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-xl flex-shrink-0">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-base font-extrabold text-slate-900 leading-tight">One Stop Solution</p>
                      <p className="text-sm font-medium text-slate-500">For all your dental problems</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Doctor Profile Section */}
        <section className="py-16 md:py-32 bg-white relative border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="bg-slate-900 rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
              
              <div className="w-full lg:w-2/5 relative min-h-[300px] sm:min-h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80" 
                  alt="Dr. Sheema Sapkota" 
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900"></div>
              </div>

              <div className="w-full lg:w-3/5 p-8 sm:p-12 md:p-16 flex flex-col justify-center relative z-10 text-white">
                <div className="inline-flex items-center bg-blue-500/20 border border-blue-400/30 text-blue-300 px-3 py-1.5 rounded-lg text-xs font-bold mb-6 w-fit backdrop-blur-sm">
                  <Award className="w-4 h-4 mr-2" />
                  Chief Dental Surgeon
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-2">Dr. Sheema Sapkota</h2>
                <p className="text-blue-400 font-bold text-lg mb-6 flex items-center">
                  BDS, FAD <span className="mx-3 text-slate-600">|</span> Smile Designing Specialist
                </p>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-medium">
                  "With over 9 years of dedicated clinical experience, my philosophy is simple: dentistry should be painless, personalized, and perfect. Whether you are coming in for a routine checkup or a complete smile makeover, our team ensures you leave with confidence."
                </p>

                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
                  <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-2xl backdrop-blur-sm">
                    <span className="block text-2xl sm:text-3xl font-black text-white mb-1">9+</span>
                    <span className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider">Years Experience</span>
                  </div>
                  <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-2xl backdrop-blur-sm">
                    <span className="block text-2xl sm:text-3xl font-black text-white mb-1">100%</span>
                    <span className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider">Patient Satisfaction</span>
                  </div>
                </div>

                <div className="flex items-center text-sm font-bold text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-2" />
                  Government Verified & Certified Expert
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Our Values / Bento Grid */}
        <section className="py-16 md:py-32 bg-slate-50 relative border-t border-slate-200 overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
              <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                  The Pillars of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Our Clinic</span>
                </h2>
                <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
                  We don't just treat teeth; we treat people. Here is what makes Life Care Dental Clinic the most trusted choice in East Sikkim.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                
                {/* Value 1 */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 relative z-10">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 relative z-10">Uncompromised Hygiene</h3>
                  <p className="text-slate-600 font-medium leading-relaxed relative z-10 text-sm">
                    Your safety is our top priority. We follow strict, international standards of sterilization and sanitization for every single instrument and procedure.
                  </p>
                </div>

                {/* Value 2 */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500 relative z-10">
                    <Activity className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 relative z-10">Advanced Technology</h3>
                  <p className="text-slate-600 font-medium leading-relaxed relative z-10 text-sm">
                    We use state-of-the-art diagnostic and treatment equipment, including digital X-rays and apex locators, to ensure precise, swift, and painless treatments.
                  </p>
                </div>

                {/* Value 3 */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-500 relative z-10">
                    <HeartHandshake className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 relative z-10">Patient-First Care</h3>
                  <p className="text-slate-600 font-medium leading-relaxed relative z-10 text-sm">
                    We take the time to listen to your concerns, explain all treatment options transparently, and ensure you are comfortable before we begin any procedure.
                  </p>
                </div>

              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-cyan-500 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">Join our dental family today.</h2>
            <p className="text-blue-50 text-sm sm:text-lg mb-8 font-medium max-w-2xl mx-auto">
              Take the first step towards a healthier, more beautiful smile. Our doors are open and our experts are ready to welcome you.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
              <button 
                onClick={handleBookService}
                className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold shadow-xl hover:bg-slate-50 hover:-translate-y-1 transition-all flex items-center justify-center"
              >
                <CalendarCheck className="w-5 h-5 mr-2" /> Book a Consultation
              </button>
              <button 
                onClick={() => window.open('tel:+917478851252')}
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> +91 74788 51252
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 sm:py-12 border-t border-slate-800">
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