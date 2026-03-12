import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, AlertCircle } from 'lucide-react';

// Custom SVG Stickman Animation Component
const StickmanJourney = () => (
  <div className="w-full max-w-md mx-auto my-6 overflow-hidden relative h-32 opacity-80">
    <svg viewBox="0 0 500 150" className="w-full h-full">
      {/* The Ground */}
      <line x1="0" y1="130" x2="500" y2="130" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="10 5" />
      
      {/* The Clinic (Destination) */}
      <g transform="translate(420, 0)">
        {/* Clinic Building */}
        <path d="M0,130 L0,70 L30,40 L60,70 L60,130 Z" fill="#f8fafc" stroke="#334155" strokeWidth="3" strokeLinejoin="round"/>
        {/* Door */}
        <rect x="20" y="95" width="20" height="35" fill="#e2e8f0" stroke="#334155" strokeWidth="2" />
        {/* Medical Cross */}
        <path d="M30,55 L30,70 M22.5,62.5 L37.5,62.5" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
        {/* Roof line */}
        <path d="M-5,70 L30,35 L65,70" stroke="#334155" strokeWidth="3" strokeLinecap="round" fill="none" />
      </g>

      {/* The Walking Stickman */}
      <g>
        {/* Moves the stickman from left to right endlessly */}
        <animateTransform 
          attributeName="transform" 
          type="translate" 
          from="-50 0" 
          to="420 0" 
          dur="5s" 
          repeatCount="indefinite" 
        />
        
        {/* Adds a slight up-and-down bounce to the walk */}
        <g>
          <animateTransform 
            attributeName="transform" 
            type="translate" 
            values="0,0; 0,-4; 0,0; 0,-4; 0,0" 
            dur="1s" 
            repeatCount="indefinite" 
          />
          
          {/* Head */}
          <circle cx="20" cy="60" r="10" fill="none" stroke="#0f172a" strokeWidth="3.5" />
          
          {/* Body */}
          <line x1="20" y1="70" x2="20" y2="100" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
          
          {/* Right Arm (Swings backward when left arm is forward) */}
          <line x1="20" y1="75" x2="20" y2="95" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" values="30 20 75; -30 20 75; 30 20 75" dur="1s" repeatCount="indefinite" />
          </line>
          
          {/* Right Leg (Swings forward) */}
          <line x1="20" y1="100" x2="20" y2="130" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" values="-35 20 100; 35 20 100; -35 20 100" dur="1s" repeatCount="indefinite" />
          </line>
          
          {/* Left Leg (Swings backward) */}
          <line x1="20" y1="100" x2="20" y2="130" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" values="35 20 100; -35 20 100; 35 20 100" dur="1s" repeatCount="indefinite" />
          </line>

          {/* Left Arm (Swings forward) */}
          <line x1="20" y1="75" x2="20" y2="95" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" values="-30 20 75; 30 20 75; -30 20 75" dur="1s" repeatCount="indefinite" />
          </line>
        </g>
      </g>
    </svg>
  </div>
);

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 text-center relative overflow-hidden bg-slate-50">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-blue-400/20 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-400/20 rounded-full blur-[80px] animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 w-full max-w-lg mx-auto">
        {/* Animated 404 Graphic */}
        <div className="relative mb-4 sm:mb-6 inline-block">
          <h1 className="text-7xl sm:text-[8rem] font-black text-slate-900 tracking-tighter drop-shadow-sm">
            4<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">0</span>4
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2.5 sm:p-3 rounded-full shadow-xl border border-slate-100 animate-bounce">
            <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-rose-500" />
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 leading-tight">
          Oops! You look a little lost.
        </h2>
        <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed px-4">
          It seems this link is broken, but don't worry—let's get you walking back in the right direction!
        </p>

        {/* The Animated SVG Component */}
        <StickmanJourney />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0">
          <Link 
            to="/" 
            className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center text-sm sm:text-base group"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> 
            Take me to the Clinic
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center text-sm sm:text-base group"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" /> 
            Go back a page
          </button>
        </div>
        
        {/* Optional Search Prompt */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-center text-slate-500 text-xs sm:text-sm font-medium">
          <Search className="w-4 h-4 mr-2" /> Looking for a specific treatment? Check our <Link to="/services" className="text-blue-600 hover:underline ml-1">Services page</Link>.
        </div>

      </div>
    </div>
  );
}