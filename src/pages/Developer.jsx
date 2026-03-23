import React, { useEffect, useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Heart, 
  Sparkles, 
  ArrowLeft, 
  Cpu,
  Globe,
  MonitorSmartphone,
  Layers,
  Github,
  Linkedin,
  Mail,
  Zap,
  Rocket,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Developer() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Add smooth scrolling and prevent body from keeping the white background of the main app
    document.body.style.backgroundColor = '#020617';
    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-hidden flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      
      <SEO 
        title="Developer | SANSKAR.GG" 
        description="Website architecture and development credits."
      />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20 pointer-events-none"></div>

      {/* Dynamic Animated Blobs utilizing custom keyframes from index.css */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-600/20 rounded-full blur-[100px] mix-blend-screen animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-cyan-500/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[45rem] h-[45rem] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl w-full relative z-10 mx-auto">
        
        {/* Navigation */}
        <div className="mb-10 flex items-center justify-between animate-fade-in-up">
          <Link 
            to="/" 
            className="group flex items-center space-x-2 text-sm font-bold text-slate-400 hover:text-white bg-slate-900/40 hover:bg-slate-800/60 backdrop-blur-xl px-5 py-2.5 rounded-full border border-slate-800/50 hover:border-slate-700 transition-all duration-300 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Return to Clinic</span>
          </Link>
          
          <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Work
          </div>
        </div>

        {/* Main Interface */}
        <div 
          className="relative bg-slate-900/60 backdrop-blur-3xl rounded-[2.5rem] p-8 sm:p-12 md:p-16 border border-slate-700/50 shadow-2xl overflow-hidden group/card animate-fade-in-up delay-100"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated gradient top border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 opacity-70 group-hover/card:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-gradient"></div>

          {/* Large Background Watermark Logo text */}
          <div className="absolute -right-10 -bottom-10 opacity-[0.02] pointer-events-none select-none transform -rotate-12 group-hover/card:scale-110 group-hover/card:opacity-[0.04] transition-all duration-1000">
            <span className="text-9xl font-black tracking-tighter">S.GG</span>
          </div>

          {/* Interactive Background Glow on Hover */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full blur-[130px] transition-opacity duration-1000 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Brand & Info */}
            <div className="col-span-1 lg:col-span-7 space-y-8">
              <div className="flex items-center space-x-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-slate-700 shadow-xl relative group/icon">
                  <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-20 group-hover/icon:opacity-40 transition-opacity duration-300 rounded-2xl"></div>
                  <Terminal className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 relative z-10 transform group-hover/icon:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-1.5 flex items-center">
                    <Sparkles className="w-3.5 h-3.5 mr-2 text-amber-400" />
                    Engineered By
                  </h2>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    SANSKAR<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">.GG</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 leading-tight tracking-tight">
                  Crafting Digital <br className="hidden sm:block"/> Experiences.
                </h1>
                <p className="text-slate-400 font-medium text-base sm:text-lg leading-relaxed max-w-xl">
                  This digital experience was architected from the ground up to provide a seamless, lightning-fast platform for Life Care Dental Clinic. Blending modern web technologies with intuitive UI/UX design.
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center space-x-2 shadow-sm hover:border-slate-600 transition-colors cursor-default hover:bg-slate-800">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-semibold text-slate-300">B.Tech AI & ML</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center space-x-2 shadow-sm hover:border-slate-600 transition-colors cursor-default hover:bg-slate-800">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-semibold text-slate-300">Full Stack Developer</span>
                </div>
              </div>
            </div>

            {/* Right Column: Links & Tech */}
            <div className="col-span-1 lg:col-span-5 flex flex-col justify-center space-y-6">
              
              {/* Tech Stack Cards */}
              <div className="bg-slate-900/40 rounded-3xl p-6 border border-slate-800/60 shadow-inner backdrop-blur-md">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center">
                  <Layers className="w-3.5 h-3.5 mr-2" />
                  Core Architecture
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Code2, label: 'React 18', color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
                    { icon: Zap, label: 'Vite', color: 'text-purple-400', bg: 'bg-purple-400/10' },
                    { icon: MonitorSmartphone, label: 'Tailwind CSS', color: 'text-sky-400', bg: 'bg-sky-400/10' },
                    { icon: Rocket, label: 'Modern UI', color: 'text-rose-400', bg: 'bg-rose-400/10' },
                  ].map((tech, idx) => (
                    <div key={idx} className="flex items-center space-x-3 bg-slate-800/40 p-3 rounded-2xl border border-slate-700/30 hover:border-slate-600 transition-colors group/tech cursor-default">
                      <div className={`p-2 rounded-xl ${tech.bg} flex-shrink-0 ${tech.color} group-hover/tech:scale-110 transition-transform`}>
                        <tech.icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-slate-300 truncate">{tech.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-3">
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center space-x-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white py-3 px-4 rounded-2xl transition-all duration-300 group/btn">
                  <Github className="w-5 h-5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  <span className="text-sm font-bold">GitHub</span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center space-x-2 bg-slate-800/50 hover:bg-[#0a66c2]/20 border border-slate-700 hover:border-[#0a66c2]/50 text-slate-300 hover:text-[#0a66c2] py-3 px-4 rounded-2xl transition-all duration-300 group/btn">
                  <Linkedin className="w-5 h-5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  <span className="text-sm font-bold">LinkedIn</span>
                </a>
                <a href="mailto:sanskar@example.com" className="p-3 bg-slate-800/50 hover:bg-rose-500/20 border border-slate-700 hover:border-rose-500/50 text-slate-300 hover:text-rose-400 rounded-2xl transition-all duration-300 group/btn">
                  <Mail className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                </a>
              </div>

            </div>
          </div>

          {/* Footer Signature */}
          <div className="mt-12 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-500">
              <span>Crafted with</span>
              <Heart className="w-4 h-4 text-rose-500 fill-current animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
              <span>in Sikkim, India</span>
            </div>
            
            <a href="https://sanscarr.tech" className="flex items-center text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors group/link">
              View Portfolio 
              <ChevronRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}