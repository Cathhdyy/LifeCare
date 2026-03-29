import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Search, 
  ChevronRight,
  BookOpen,
  Sparkles,
  Heart,
  ShieldCheck,
  Stethoscope,
  Smile
} from 'lucide-react';

// Mock Blog Data
export const blogPosts = [
  {
    id: 1,
    title: "5 Essential Tips for a Brighter, Healthier Smile",
    excerpt: "Maintaining a perfect smile goes beyond just brushing. Discover the daily habits that can transform your oral health and boost your confidence.",
    content: "Maintaining a perfect smile goes beyond just brushing. Discover the daily habits that can transform your oral health and boost your confidence. \n\n### 1. Brush Twice a Day, but Done Right\nMost people brush their teeth, but not everyone does it correctly. Use a soft-bristled brush and fluoride toothpaste. Hold your brush at a 45-degree angle toward the gums and use gentle, circular motions.\n\n### 2. Don't Skip the Floss\nFlossing removes plaque and food particles from places your toothbrush can't reach. If you don't floss, you're missing about 35% of your tooth surfaces.\n\n### 3. Watch Your Sugar Intake\nSugar is the primary fuel for cavity-causing bacteria. Try to limit sugary snacks and drinks, and if you do indulge, rinse your mouth with water afterward.\n\n### 4. Stay Hydrated\nWater is the best drink for your teeth. It helps wash away food particles and keeps your saliva levels high. Saliva is your mouth's natural defense against tooth decay.\n\n### 5. Regular Dental Check-ups\nEven with perfect home care, professional cleanings are essential. A dentist can spot potential issues before they become painful and expensive problems.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    date: "March 25, 2026",
    category: "Oral Health",
    author: "Dr. Sheema Sapkota",
    readTime: "5 min read",
    featured: true
  },
  {
    id: 2,
    title: "Understanding Root Canal: Why It's Not as Scary as You Think",
    excerpt: "The words 'root canal' often cause anxiety, but modern technology has made it a painless, tooth-saving procedure. Learn what to expect.",
    content: "The words 'root canal' often cause anxiety, but modern technology has made it a painless, tooth-saving procedure. Learn what to expect. \n\nRoot canal treatment is designed to eliminate bacteria from the infected root canal, prevent reinfection of the tooth and save the natural tooth. When one undergoes a root canal, the inflamed or infected pulp is removed and the inside of the tooth is carefully cleaned and disinfected, then filled and sealed.\n\n### Why You Might Need One\n- Severe toothache while chewing or providing pressure\n- Prolonged sensitivity (pain) to hot or cold temperatures\n- Discoloration (darkening) of the tooth\n- Swelling and tenderness in nearby gums\n\n### The Modern Experience\nAt Life Care Dental Clinic, we use state-of-the-art diagnostic tools and advanced anesthesia. Most patients report that the procedure feels no different than getting a standard filling.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    date: "March 20, 2026",
    category: "Treatments",
    author: "Dr. Shekar Chettri",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 3,
    title: "Pediatric Dentistry: Making Your Child's First Visit Fun",
    excerpt: "Starting dental visits early is key to a lifetime of healthy smiles. Here's how we create a fear-free environment for our youngest patients.",
    content: "Starting dental visits early is key to a lifetime of healthy smiles. Here's how we create a fear-free environment for our youngest patients. \n\nWe believe that a child's first visit to the dentist sets the tone for their future oral health. That's why we focus on 'painless' and 'fear-free' experiences.\n\n### Tips for Parents\n1. **Start Early**: The American Academy of Pediatric Dentistry recommends the first visit by age one.\n2. **Keep it Positive**: Avoid using scary words like 'needle' or 'drill'.\n3. **Read Books**: There are many great children's books about visiting the dentist.\n4. **Role Play**: Practice 'counting teeth' at home with your child.",
    image: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&w=800&q=80",
    date: "March 15, 2026",
    category: "Pediatric",
    author: "Dr. Sarasati Sharma",
    readTime: "4 min read",
    featured: false
  },
  {
    id: 4,
    title: "Smile Designing: The Art and Science of Cosmetic Dentistry",
    excerpt: "Curious about how celebrities get those perfect smiles? Explore the world of veneers, whitening, and architectural smile planning.",
    content: "Curious about how celebrities get those perfect smiles? Explore the world of veneers, whitening, and architectural smile planning. \n\nSmile designing is a cosmetic dental procedure that corrects teeth imperfections and restores your dental health and appearance. It involves a customized treatment plan to give you the smile you've always dreamed of.\n\n### Key Components\n- **Teeth Whitening**: Brightening stained or discolored teeth.\n- **Veneers**: Thin, custom-made shells that cover the front surface of teeth.\n- **Bonding**: Repairing chipped or cracked teeth.\n- **Alignment**: Correcting minor spacing issues.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    date: "March 10, 2026",
    category: "Cosmetic",
    author: "Dr. Sheema Sapkota",
    readTime: "6 min read",
    featured: false
  }
];

const categories = ["All", "Oral Health", "Treatments", "Pediatric", "Cosmetic", "Clinic News"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  // Intersection Observer for scroll animations
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.IntersectionObserver === 'function') {
        const observer = new window.IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in-up');
              entry.target.classList.remove('opacity-0');
              observer.unobserve(entry.target);
            }
          });
        }, { root: null, rootMargin: '0px', threshold: 0.1 });

        const elements = document.querySelectorAll('.reveal');
        elements.forEach(el => observer.observe(el));

        return () => elements.forEach(el => observer.unobserve(el));
    }
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Dental Blog & Oral Health Tips" 
        description="Expert dental advice, treatment guides, and clinic news from Life Care Dental Clinic, Singtam. Learn how to maintain your perfect smile."
      />

      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }

        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}} />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -mr-48 -mt-24"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] -ml-24 -mb-24"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="reveal opacity-0">
            <span className="inline-flex items-center justify-center bg-blue-500/10 backdrop-blur-md text-blue-400 font-extrabold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4 sm:mb-6 border border-blue-500/20">
              <BookOpen className="w-3.5 h-3.5 mr-2" /> The Dental Resource
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 tracking-tight leading-tight">
              Insights for a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Perfect Smile</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium px-4 sm:px-0">
              Expert advice, treatment guides, and the latest news from your trusted dental care partners in Singtam.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="sticky top-14 sm:top-20 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Categories Scrollable Container */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    activeCategory === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Featured Post */}
        {activeCategory === "All" && !searchQuery && featuredPost && (
          <div className="mb-20 reveal opacity-0">
            <Link to={`/blog/${featuredPost.id}`} className="group block relative rounded-[2.5rem] overflow-hidden bg-white shadow-2xl border border-slate-100">
               <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-3/5 relative aspect-[16/9] lg:aspect-auto overflow-hidden">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">Featured Article</span>
                    </div>
                  </div>
                  <div className="lg:w-2/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm font-bold text-blue-600 mb-6 font-mono">
                      <span>{featuredPost.category}</span>
                      <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                      <span className="text-slate-400">{featuredPost.date}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-10 line-clamp-3 font-medium">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-blue-600 border border-slate-200 shadow-sm">
                            {featuredPost.author.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 text-sm leading-none mb-1">{featuredPost.author}</p>
                            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">{featuredPost.readTime}</p>
                          </div>
                       </div>
                       <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shadow-sm">
                          <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                       </div>
                    </div>
                  </div>
               </div>
            </Link>
          </div>
        )}

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredPosts.map((post, index) => (
            <div key={post.id} className={`reveal opacity-0`} style={{ animationDelay: `${(index % 3) * 100}ms` }}>
               <Link to={`/blog/${post.id}`} className="group block bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-md text-blue-600 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-widest shadow-sm border border-blue-50">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-xs font-bold text-slate-400 mb-4 font-mono">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                       {post.title}
                    </h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed line-clamp-3 mb-8">
                       {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                       <span className="text-blue-600 font-extrabold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                          Read Full Post <ArrowRight className="w-4 h-4 ml-1.5" />
                       </span>
                    </div>
                  </div>
               </Link>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
             <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
               <Search className="w-8 h-8" />
             </div>
             <h3 className="text-2xl font-black text-slate-900 mb-2">No articles found</h3>
             <p className="text-slate-500 font-medium">Try adjusting your search or category filters.</p>
             <button 
                onClick={() => {setActiveCategory("All"); setSearchQuery("");}}
                className="mt-8 text-blue-600 font-bold hover:underline"
             >
               Clear all filters
             </button>
          </div>
        )}

      </main>

      {/* Newsletter Section */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-125"></div>
               <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner border border-white/30">
                     <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Stay Updated on Your <br/> Dental Health</h2>
                  <p className="text-blue-100 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
                    Subscribe to our dental health digest and get the latest oral care tips delivered directly to your inbox.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                     <input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="flex-grow px-6 py-4 rounded-2xl bg-white/10 border border-white/30 backdrop-blur-md text-white placeholder:text-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-medium"
                     />
                     <button className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-black hover:bg-slate-100 transition-all shadow-xl hover:-translate-y-1 active:scale-95">
                        Subscribe Now
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Trust Quote */}
      <section className="py-16 md:py-24 bg-white text-center">
         <div className="max-w-3xl mx-auto px-4">
            <Heart className="w-10 h-10 text-rose-500 mx-auto mb-8 animate-pulse" />
            <p className="text-2xl md:text-3xl font-black text-slate-900 italic leading-tight mb-8">
              "Building lifelong relationships by providing modern, compassionate dental care one smile at a time."
            </p>
            <div className="flex items-center justify-center gap-4">
               <div className="bg-slate-50 border border-slate-100 px-4 py-2 rounded-full flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-black text-slate-800 uppercase tracking-widest">Life Care Promise</span>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
