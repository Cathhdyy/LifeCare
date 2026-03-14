import React, { useEffect } from 'react';
import { 
  Code2, 
  Terminal, 
  Heart, 
  Sparkles, 
  ArrowLeft, 
  Cpu,
  Globe,
  MonitorSmartphone,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Developer() {
  useEffect(() => {
    // Add smooth scrolling and prevent body from keeping the white background of the main app
    document.body.style.backgroundColor = '#020617'; // slate-950
    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-hidden flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      
      <SEO 
        title="Developer | SANSKAR.GG" 
        description="Website architecture and development credits."
      />

      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIvPjwvc3ZnPg==')] z-0 pointer-events-none"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/20 rounded-full blur-[80px] sm:blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/20 rounded-full blur-[80px] sm:blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-3xl w-full relative z-10">
        
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-xs sm:text-sm font-extrabold text-slate-400 hover:text-cyan-400 transition-colors mb-10 group bg-slate-900/50 backdrop-blur-md px-4 py-2.5 rounded-full border border-slate-800 shadow-xl">
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1.5 transition-transform duration-300" />
          Return to Clinic
        </Link>

        {/* Main Dev Card */}
        <div className="bg-slate-900/80 backdrop-blur-2xl rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 shadow-2xl border border-slate-800 relative overflow-hidden group">
          
          {/* Animated gradient top border */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 bg-[length:200%_auto] animate-gradient"></div>

          {/* Large Background Watermark Logo text */}
          <div className="absolute -right-10 -bottom-10 opacity-[0.03] pointer-events-none select-none transform -rotate-12 group-hover:scale-110 transition-transform duration-1000">
            <span className="text-9xl font-black tracking-tighter">S.GG</span>
          </div>

          <div className="relative z-10">
            
            {/* Header / Brand */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 sm:mb-12 gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-slate-700 shadow-inner group-hover:border-cyan-500/50 transition-colors duration-500">
                  <Terminal className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-slate-400 uppercase tracking-widest mb-1">Engineered By</h2>
                  <div className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                    SANSKAR<span className="text-cyan-400">.GG</span>
                  </div>
                </div>
              </div>
              
              <div className="inline-flex items-center bg-slate-800/50 border border-slate-700 text-cyan-400 px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-sm">
                <Sparkles className="w-3.5 h-3.5 mr-2" /> V 1.0.0
              </div>
            </div>

            {/* Developer Identity Details */}
            <div className="space-y-6 mb-12">
              <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                Sanskar Sharma
              </h1>
              
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold">
                  <Cpu className="w-4 h-4 mr-2" />
                  B.Tech CSE (AI & ML)
                </span>
                <span className="inline-flex items-center bg-purple-500/10 border border-purple-500/20 text-purple-400 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold">
                  <Globe className="w-4 h-4 mr-2" />
                  Medhavi Skills University
                </span>
              </div>

              <p className="text-slate-400 font-medium text-sm sm:text-lg leading-relaxed max-w-2xl">
                This digital experience was architected from the ground up to provide a seamless, lightning-fast, and highly secure platform for Life Care Dental Clinic. Blending modern web technologies with intuitive UI/UX design.
              </p>
            </div>

            {/* Tech Stack / Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800 pt-10">
              <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                <Code2 className="w-6 h-6 text-cyan-400 mb-3" />
                <h4 className="text-white font-bold text-sm mb-1">Modern Stack</h4>
                <p className="text-slate-500 text-xs font-medium">Built with React & Tailwind CSS for ultimate performance.</p>
              </div>
              <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                <MonitorSmartphone className="w-6 h-6 text-cyan-400 mb-3" />
                <h4 className="text-white font-bold text-sm mb-1">Responsive</h4>
                <p className="text-slate-500 text-xs font-medium">Fluid design adapting perfectly to any device screen.</p>
              </div>
              <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                <Layers className="w-6 h-6 text-cyan-400 mb-3" />
                <h4 className="text-white font-bold text-sm mb-1">Scalable UI</h4>
                <p className="text-slate-500 text-xs font-medium">Component-driven architecture for future-proofing.</p>
              </div>
            </div>

            {/* Footer Signature */}
            <div className="mt-12 flex items-center justify-center sm:justify-start space-x-2 text-xs sm:text-sm font-bold text-slate-500">
              <span>Crafted with</span>
              <Heart className="w-4 h-4 text-rose-500 fill-current animate-pulse mx-1" />
              <span>in Sikkim, India.</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}