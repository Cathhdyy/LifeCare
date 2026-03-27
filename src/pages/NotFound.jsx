import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ArrowLeft, 
  MapPin, 
  Phone, 
  HeartPulse, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Activity
} from 'lucide-react';

// Refined 3D-effect Medical Heartbeat/Cross SVG
const MedicalEliteIcon = () => (
  <div className="relative w-56 h-56 sm:w-72 sm:h-72 mx-auto mb-10 group">
    {/* Outer Glow Ring */}
    <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
    
    {/* Specular 3D Layers */}
    <div className="absolute inset-0 flex items-center justify-center">
       {/* Layer 1: Rotating Orbit */}
       <div className="absolute inset-0 border-[0.5px] border-white/5 rounded-full animate-[spin_15s_linear_infinite]">
          <div className="absolute -top-1 left-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)]"></div>
       </div>
       
       {/* Layer 2: Medical Cross Glass Base */}
       <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center animate-bounce-slow">
          {/* Neon Pulse SVG */}
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_40px_rgba(59,130,246,0.4)]">
            <defs>
              <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            
            {/* Background Medical Cross Shape (Faint) */}
            <path d="M35,20 L65,20 L65,35 L80,35 L80,65 L65,65 L65,80 L35,80 L35,65 L20,65 L20,35 L35,35 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            
            {/* Active Heartbeat Path */}
            <path 
              d="M15,50 L35,50 L42,20 L50,80 L58,35 L65,60 L78,50 L90,50" 
              fill="none" 
              stroke="url(#neonGradient)" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="animate-pulse-draw"
              style={{ strokeDasharray: '400', strokeDashoffset: '400' }}
            >
              <animate attributeName="stroke-dashoffset" from="400" to="0" dur="2.5s" repeatCount="indefinite" />
            </path>
          </svg>
          
          {/* Center Floating Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
             <HeartPulse className="w-12 h-12 text-white/20 animate-pulse" />
          </div>
       </div>
    </div>
  </div>
);

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30 overflow-hidden flex flex-col items-center justify-center py-20 px-4 relative">
      
      {/* High-Contrast Grid & Glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        
        {/* Massive 404 Visual Header */}
        <div className="relative mb-14">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] select-none pointer-events-none w-full">
            <h1 className="text-[12rem] sm:text-[18rem] md:text-[22rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent leading-none">
              404
            </h1>
          </div>
          <MedicalEliteIcon />
        </div>

        {/* Text Content */}
        <div className="mb-16 relative">
          <div className="inline-flex items-center bg-blue-500/10 border border-blue-400/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-6 mx-auto shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <ShieldCheck className="w-3.5 h-3.5 mr-2" /> Error Code: Unavailable
          </div>
          <h2 className="text-5xl sm:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
            Diagnosis: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-[length:200%_auto] animate-gradient">Lost Page</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg sm:text-xl font-medium leading-relaxed px-4">
            Our surgical system couldn't find the page you were looking for. <br className="hidden sm:block"/> Let's map your way back to a healthy link.
          </p>
        </div>

        {/* Bento Grid: Navigation Paths */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 px-4 max-w-6xl mx-auto">
          
          {/* Card: Main Portal */}
          <Link to="/" className="group relative bg-[#0a1122]/80 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/40 hover:bg-[#0f172a] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col items-center">
            {/* Specular Highlight */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-16 h-16 bg-blue-600/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-500 transform group-hover:rotate-12">
              <Home className="w-7 h-7" />
            </div>
            <h3 className="text-white font-black text-2xl mb-2 tracking-tight">Home Portal</h3>
            <p className="text-slate-500 text-sm font-medium mb-8">Return to our digital lobby and explore services.</p>
            <div className="mt-auto flex items-center text-blue-400 font-black text-[10px] uppercase tracking-widest group-hover:text-cyan-400 transition-colors">
              Go Home <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          {/* Card: Treatment List */}
          <Link to="/services" className="group relative bg-[#0a1122]/80 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/5 hover:border-cyan-500/40 hover:bg-[#0f172a] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col items-center">
            {/* Specular Highlight */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-16 h-16 bg-cyan-600/10 text-cyan-400 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-500 transform group-hover:rotate-12">
              <Activity className="w-7 h-7" />
            </div>
            <h3 className="text-white font-black text-2xl mb-2 tracking-tight">Treatments</h3>
            <p className="text-slate-500 text-sm font-medium mb-8">Find the specific care or service you need.</p>
            <div className="mt-auto flex items-center text-cyan-400 font-black text-[10px] uppercase tracking-widest group-hover:text-blue-400 transition-colors">
              Our Services <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          {/* Card: Direct Contact */}
          <Link to="/contact" className="group relative bg-[#0a1122]/80 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/5 hover:border-emerald-500/40 hover:bg-[#0f172a] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col items-center sm:col-span-2 lg:col-span-1">
            {/* Specular Highlight */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-16 h-16 bg-emerald-600/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-[0_0_30_rgba(16,185,129,0.4)] transition-all duration-500 transform group-hover:rotate-12">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="text-white font-black text-2xl mb-2 tracking-tight">Emergency</h3>
            <p className="text-slate-500 text-sm font-medium mb-8">Still lost? Reach out to our front desk directly.</p>
            <div className="mt-auto flex items-center text-emerald-400 font-black text-[10px] uppercase tracking-widest group-hover:text-cyan-400 transition-colors">
              Contact Us <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

        </div>

        {/* Global Action Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
           <button onClick={() => window.history.back()} className="flex items-center hover:text-white hover:scale-105 transition-all group">
              <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-2 transition-transform" /> Back to Safety
           </button>
           <span className="hidden sm:block opacity-10">|</span>
           <div className="flex items-center">
              <Phone className="w-4 h-4 mr-3 text-blue-500" /> Support: <span className="text-white ml-2">+91 74788 51252</span>
           </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient { background-size: 200% auto; animation: gradient 6s linear infinite; }
        
        .animate-pulse-draw {
           filter: drop-shadow(0 0 10px rgba(96, 165, 250, 0.6));
        }
      `}} />
    </div>
  );
}