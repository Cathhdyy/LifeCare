import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  User, 
  Sparkles,
  ArrowRight,
  MessageCircle,
  Stethoscope,
  Info
} from 'lucide-react';

const doctors = [
  { id: 1, name: "Dr. Sheema Sapkota", role: "Dental Surgeon", image: "/doctors/d1.webp" },
  { id: 2, name: "Dr. Prabir Dhamala", role: "Orthodontist", image: "/doctors/d2.webp" },
];

const timeSlots = [
  "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "01:00 PM", "01:30 PM", "02:00 PM",
  "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM"
];

export default function BookingMockup() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedSlots, setBookedSlots] = useState(["09:00 AM", "11:30 AM", "02:00 PM"]);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Simulated "Real-time" effect: randomly book a slot every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const freeSlots = timeSlots.filter(slot => !bookedSlots.includes(slot));
      if (freeSlots.length > 0) {
        const randomSlot = freeSlots[Math.floor(Math.random() * freeSlots.length)];
        // Show a brief toast or pulse effect could go here
        setBookedSlots(prev => [...prev, randomSlot]);
      }
    }, 12000);
    return () => clearInterval(interval);
  }, [bookedSlots]);

  const handleBookNow = () => {
    setIsConfirming(true);
    setTimeout(() => {
      setIsConfirming(false);
      setIsSuccess(true);
    }, 2000);
  };

  const nextDay = () => {
    const next = new Date(selectedDate);
    next.setDate(selectedDate.getDate() + 1);
    setSelectedDate(next);
    setSelectedSlot(null);
  };

  const prevDay = () => {
    const prev = new Date(selectedDate);
    prev.setDate(selectedDate.getDate() - 1);
    setSelectedDate(prev);
    setSelectedSlot(null);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden py-20 px-4">
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center bg-white/5 backdrop-blur-xl border border-white/10 text-cyan-400 font-bold px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 mr-2" /> Real-time Systems Demo
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-4 tracking-tight leading-tight">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Appointment Mockup</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-lg font-medium">
            This demo showcases how a real-time availability engine works. Watch as slots disappear when other users book them!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Selection Controls */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Doctor Selection */}
            <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-6 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                <Stethoscope className="w-5 h-5 mr-3 text-blue-400" /> Select Specialist
              </h3>
              <div className="space-y-4">
                {doctors.map(doc => (
                  <button 
                    key={doc.id}
                    onClick={() => setSelectedDoctor(doc)}
                    className={`w-full flex items-center p-4 rounded-2xl transition-all duration-300 border ${
                      selectedDoctor.id === doc.id 
                        ? 'bg-blue-600/20 border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.2)]' 
                        : 'bg-white/5 border-transparent hover:border-white/10'
                    }`}
                  >
                    <img src={doc.image} alt={doc.name} className="w-12 h-12 rounded-xl object-cover mr-4" />
                    <div className="text-left">
                      <p className="font-bold text-white text-sm">{doc.name}</p>
                      <p className="text-xs text-slate-400 font-medium">{doc.role}</p>
                    </div>
                    {selectedDoctor.id === doc.id && <CheckCircle2 className="w-5 h-5 ml-auto text-blue-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-6 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                <Calendar className="w-5 h-5 mr-3 text-cyan-400" /> Treatment Date
              </h3>
              <div className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/10">
                <button onClick={prevDay} className="p-2 hover:bg-white/10 rounded-lg transition-colors"><ChevronLeft /></button>
                <div className="text-center">
                  <p className="font-black text-white">{selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                  <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mt-1">Today</p>
                </div>
                <button onClick={nextDay} className="p-2 hover:bg-white/10 rounded-lg transition-colors"><ChevronRight /></button>
              </div>
              <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-start">
                <Info className="w-4 h-4 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-[10px] sm:text-xs text-yellow-200/80 font-medium leading-relaxed">
                  Note: Wednesdays are closed. Selecting a Wednesday will show zero availability in a real system.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Slot Grid */}
          <div className="lg:col-span-8 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 blur-[80px] pointer-events-none"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <h3 className="text-2xl font-black text-white tracking-tight flex items-center">
                  Available Slots <span className="ml-3 h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </h3>
                <p className="text-slate-400 font-medium text-sm">Real-time sync enabled</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <div className="w-3 h-3 bg-white/10 rounded-full mr-2"></div> Available
                </div>
                <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <div className="w-3 h-3 bg-red-500/40 rounded-full mr-2"></div> Booked
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {timeSlots.map(slot => {
                const isBooked = bookedSlots.includes(slot);
                const isSelected = selectedSlot === slot;
                
                return (
                  <button
                    key={slot}
                    disabled={isBooked}
                    onClick={() => setSelectedSlot(slot)}
                    className={`relative p-5 rounded-2xl border transition-all duration-300 group ${
                      isBooked 
                        ? 'bg-red-500/5 border-red-500/10 opacity-40 cursor-not-allowed' 
                        : isSelected
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 border-blue-400 shadow-[0_15px_30px_rgba(37,99,235,0.4)] scale-105 z-10'
                          : 'bg-white/5 border-white/10 hover:border-blue-400/50 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <Clock className={`w-4 h-4 mb-2 ${isSelected ? 'text-white' : 'text-slate-500 group-hover:text-blue-400'}`} />
                      <span className={`text-sm font-black ${isSelected ? 'text-white' : 'text-slate-300'}`}>{slot}</span>
                    </div>
                    {isBooked && <div className="absolute inset-0 flex items-center justify-center bg-transparent"><div className="w-full h-[1.5px] bg-red-500/20 rotate-12"></div></div>}
                  </button>
                );
              })}
            </div>

            {/* Selection Summary Banner */}
            {selectedSlot && (
              <div className="mt-12 p-8 bg-blue-600/10 border border-blue-500/30 rounded-3xl animate-fade-in-up flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center text-left">
                  <div className="bg-blue-600/20 p-4 rounded-2xl mr-5 border border-blue-500/30">
                    <CheckCircle2 className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-xl leading-tight">Great Choice!</h4>
                    <p className="text-slate-300 font-medium text-sm mt-1">
                      {selectedDoctor.name} • {selectedDate.toLocaleDateString('en-US', { weekday: 'long' })} • {selectedSlot}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={handleBookNow}
                  className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black px-10 py-4 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_15px_30px_rgba(37,99,235,0.3)] flex items-center justify-center group"
                >
                  Confirm Appointment 
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Info Legend Footer */}
        <div className="mt-16 text-center reveal opacity-100">
           <div className="inline-flex flex-col items-center">
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-4">Demo Integration</p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center text-slate-400 font-medium">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mr-3 border border-white/10 uppercase font-black text-[10px]">DB</div>
                  Supabase Backend
                </div>
                <div className="flex items-center text-slate-400 font-medium">
                   <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mr-3 border border-white/10 uppercase font-black text-[10px]">WS</div>
                   WebSocket Sync
                </div>
                <div className="flex items-center text-slate-400 font-medium">
                   <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mr-3 border border-white/10 uppercase font-black text-[10px]">WA</div>
                   WhatsApp Failover
                </div>
              </div>
           </div>
        </div>

      </div>

      {/* Confirmation Modal Overlay */}
      {isConfirming && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
           <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"></div>
           <div className="relative glass-panel rounded-[3rem] p-12 text-center max-w-sm w-full border-blue-500/50 shadow-[0_0_100px_rgba(37,99,235,0.2)] animate-scale-in">
              <div className="w-20 h-20 bg-blue-600 animate-spin rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-xl">
                 <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Syncing Data</h3>
              <p className="text-slate-400 font-medium">Updating the clinic records...</p>
           </div>
        </div>
      )}

      {/* Success View Overlay */}
      {isSuccess && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
           <div className="absolute inset-0 bg-[#0a0f1c] backdrop-blur-3xl animate-fade-in"></div>
           <div className="relative max-w-xl w-full text-center">
              <div className="w-32 h-32 bg-emerald-500 rounded-[2.5rem] mx-auto mb-10 flex items-center justify-center shadow-[0_20px_50px_rgba(16,185,129,0.4)] animate-bounce-slow">
                 <CheckCircle2 className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-5xl font-black text-white mb-6">Booking Confirmed!</h2>
              <p className="text-slate-400 text-lg mb-12 font-medium">
                You’ve booked {selectedSlot} on {selectedDate.toLocaleDateString()} with {selectedDoctor.name}. 
                <br className="hidden sm:block"/>A confirmation has been sent to your phone.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <button 
                  onClick={() => setIsSuccess(false)}
                  className="w-full sm:w-auto bg-white text-slate-900 font-black px-10 py-4 rounded-2xl hover:bg-blue-50 transition-all flex items-center justify-center"
                 >
                    Close Demo
                 </button>
                 <a 
                  href="https://wa.me/917478851252"
                  className="w-full sm:w-auto bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 font-black px-10 py-4 rounded-2xl hover:bg-emerald-600/30 transition-all flex items-center justify-center"
                 >
                    <MessageCircle className="w-5 h-5 mr-2" /> Talk on WhatsApp
                 </a>
              </div>
           </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes scale-in { 0% { opacity: 0; transform: scale(0.9) translateY(20px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      `}} />
    </div>
  );
}
