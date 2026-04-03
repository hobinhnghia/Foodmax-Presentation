import { motion, AnimatePresence } from "motion/react";
import { 
  Leaf, 
  ShieldCheck, 
  Truck, 
  Globe, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Users, 
  BarChart3,
  ChevronRight,
  ChevronLeft,
  LayoutGrid,
  Target,
  Award,
  Package
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";

// Slide Data
const SLIDES = [
  {
    id: "title",
    type: "title",
    title: "Business",
    subtitle: "Presentation",
    tagline: "Good Food Global Trust",
  },
  {
    id: "contents",
    type: "list",
    title: "List of Contents",
    items: [
      "Who We Are?",
      "What We Do?",
      "Services We Offer",
      "Why Choose Us?",
      "Our Team",
      "Our Portfolio",
      "Our Performance",
      "What's Next for Us?"
    ]
  },
  {
    id: "story",
    type: "text",
    title: "Our Story",
    content: [
      "Foodmax was built on a simple realization: Vietnam has strong agricultural production, but connecting that supply to international markets is not always straightforward.",
      "Buyers often face challenges in consistency, traceability, and reliable execution. At the same time, many farmers and processors lack direct access to global markets.",
      "We saw an opportunity to bridge this gap.",
      "From the beginning, Foodmax has focused on working closely with both state and private partners — from farms to processing facilities — to build a structured and dependable supply chain.",
      "Sustainability, traceability, and quality assurance are not just commitments — they are built into how we operate.",
      "Today, Foodmax continues to grow with the same mindset: to be a reliable sourcing partner for buyers who value stability, clarity, and long-term cooperation."
    ]
  },
  {
    id: "who",
    type: "split",
    title: "Who We Are?",
    content: [
      "Foodmax is a professional sourcing partner based in Vietnam, bridging the gap between local producers and global markets.",
      "We work with multiple qualified suppliers, allowing us to provide flexible sourcing solutions, adapt to different specifications, and maintain stable supply for international buyers."
    ],
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "vision-mission",
    type: "vision",
    title: "Vision & Mission",
    vision: "To become a trusted sourcing partner connecting Vietnam's agricultural products to global markets.",
    mission: [
      "Deliver consistent quality aligned with buyer requirements",
      "Support buyers with flexible sourcing and clear communication",
      "Build long-term cooperation based on trust and execution"
    ]
  },
  {
    id: "what-we-do",
    type: "grid",
    title: "What we do",
    items: [
      {
        title: "Sourcing",
        desc: "Working with qualified suppliers to ensure stable supply and flexible sourcing solutions.",
        icon: Leaf
      },
      {
        title: "Quality Control",
        desc: "Pre-shipment inspection to ensure product consistency and specification compliance.",
        icon: ShieldCheck
      },
      {
        title: "Logistics",
        desc: "Managing documentation and shipment for smooth and reliable delivery.",
        icon: Truck
      }
    ]
  },
  {
    id: "supply-chain",
    type: "process",
    title: "Supply Chain Management",
    steps: [
      { name: "Farm", icon: Leaf },
      { name: "Processing", icon: BarChart3 },
      { name: "QC", icon: ShieldCheck },
      { name: "Packing", icon: Package },
      { name: "Export", icon: Globe }
    ],
    quote: "Our supply chain is optimized for transparency and efficiency, ensuring that every shipment meets the exact specifications of our international clients."
  },
  {
    id: "quality",
    type: "quality",
    title: "Quality Control & Standards",
    points: [
      "Pre-shipment inspection by third-party (SGS, Vinacontrol)",
      "Specification compliance monitoring",
      "Moisture, grading, and foreign matter control",
      "Traceability from farm to port"
    ],
    standards: ["ISO 22000", "HACCP", "FDA", "4C / Rainforest"]
  },
  {
    id: "portfolio",
    type: "portfolio",
    title: "Product Portfolio",
    products: [
      { name: "Rice", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=600" },
      { name: "Coffee", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600" },
      { name: "Cashew Nuts", img: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: "team",
    type: "team",
    title: "Our Team",
    members: [
      { name: "Ngoc Dao", role: "Chairman", img: "https://i.pravatar.cc/300?u=1" },
      { name: "Brian Ho", role: "General Manager", img: "https://i.pravatar.cc/300?u=2" },
      { name: "Michael Dao", role: "Sourcing & Supply Chain Manager", img: "https://i.pravatar.cc/300?u=3" },
      { name: "Nam Nguyen", role: "B.O.D", img: "https://i.pravatar.cc/300?u=4" },
      { name: "Tu Phuong", role: "Operation Manager", img: "https://i.pravatar.cc/300?u=5" }
    ]
  },
  {
    id: "thanks",
    type: "thanks",
    title: "Thank You",
    subtitle: "Let's Create Something Amazing Together",
    contacts: [
      { icon: Phone, value: "+84 964 791 902" },
      { icon: Mail, value: "export@foodmax.vn" },
      { icon: Globe, value: "www.foodmax.vn" },
      { icon: MapPin, value: "15-17 Dinh Tien Hoang St, Tan Dinh Ward, HCM" }
    ]
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    if (currentSlide < SLIDES.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slide = SLIDES[currentSlide];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="fixed inset-0 bg-foodmax-bg overflow-hidden font-sans select-none">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-8 z-50 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-tighter flex items-center">
            <span className="text-foodmax-dark">Food</span>
            <span className="text-foodmax-light">max</span>
            <Leaf className="w-5 h-5 text-foodmax-light ml-1 fill-foodmax-light/20" />
          </span>
          <span className="text-[8px] uppercase tracking-[0.2em] font-medium text-slate-500">Good Food Global Trust</span>
        </div>
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          {currentSlide + 1} / {SLIDES.length}
        </div>
      </header>

      {/* Slide Container */}
      <main className="relative w-full h-full flex items-center justify-center p-12 md:p-24">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="w-full max-w-6xl h-full flex items-center justify-center"
          >
            {/* Slide Content Renderer */}
            <div className="w-full">
              {slide.type === "title" && (
                <div className="text-center md:text-left">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-7xl md:text-9xl font-bold text-foodmax-dark leading-none mb-4"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-light text-slate-400 mb-8"
                  >
                    {slide.subtitle}
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl font-bold text-foodmax-light uppercase tracking-[0.3em]"
                  >
                    {slide.tagline}
                  </motion.p>
                </div>
              )}

              {slide.type === "list" && (
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <h2 className="text-6xl md:text-8xl font-bold text-foodmax-dark leading-tight">
                    List of<br />Contents
                  </h2>
                  <div className="space-y-4">
                    {slide.items?.map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-4 group"
                      >
                        <span className="w-10 h-10 rounded-full bg-foodmax-dark text-white flex items-center justify-center font-bold text-sm">
                          {i + 1}
                        </span>
                        <span className="text-xl font-medium text-slate-600 group-hover:text-foodmax-dark transition-colors">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {slide.type === "text" && (
                <div className="max-w-4xl">
                  <h2 className="text-5xl font-bold text-foodmax-dark mb-12">{slide.title}</h2>
                  <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
                    {slide.content?.map((p, i) => (
                      <motion.p 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {p}
                      </motion.p>
                    ))}
                  </div>
                </div>
              )}

              {slide.type === "split" && (
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="text-5xl font-bold text-foodmax-dark mb-8">{slide.title}</h2>
                    <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
                      {slide.content?.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="rounded-[3rem] overflow-hidden shadow-2xl aspect-square"
                  >
                    <img src={slide.image} alt="Who we are" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </motion.div>
                </div>
              )}

              {slide.type === "vision" && (
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="p-12 rounded-[3rem] bg-foodmax-light text-white shadow-xl">
                    <Target className="w-12 h-12 mb-6" />
                    <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                    <p className="text-2xl leading-relaxed font-medium">{slide.vision}</p>
                  </div>
                  <div className="p-12 rounded-[3rem] bg-foodmax-dark text-white shadow-xl">
                    <Award className="w-12 h-12 mb-6" />
                    <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                    <ul className="space-y-4">
                      {slide.mission?.map((m, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-foodmax-light shrink-0 mt-1" />
                          <span className="text-lg opacity-90">{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {slide.type === "grid" && (
                <div>
                  <h2 className="text-5xl font-bold text-foodmax-dark mb-16 text-center">{slide.title}</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {slide.items?.map((item, i) => (
                      <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 text-center">
                        <div className="w-16 h-16 bg-foodmax-bg rounded-2xl flex items-center justify-center text-foodmax-dark mx-auto mb-6">
                          <item.icon className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-foodmax-dark mb-4">{item.title}</h4>
                        <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {slide.type === "process" && (
                <div className="w-full">
                  <h2 className="text-5xl font-bold text-foodmax-dark mb-16 text-center">{slide.title}</h2>
                  <div className="relative flex justify-between items-center mb-20 max-w-4xl mx-auto">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2" />
                    {slide.steps?.map((step, i) => (
                      <div key={i} className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-white border-4 border-foodmax-bg shadow-lg flex items-center justify-center text-foodmax-dark mb-4">
                          <step.icon className="w-7 h-7" />
                        </div>
                        <span className="text-sm font-bold text-slate-500">{step.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-foodmax-dark p-10 rounded-[2.5rem] text-white flex items-center gap-8 max-w-4xl mx-auto">
                    <ShieldCheck className="w-12 h-12 text-foodmax-light shrink-0" />
                    <p className="text-xl italic opacity-90">"{slide.quote}"</p>
                  </div>
                </div>
              )}

              {slide.type === "quality" && (
                <div className="grid md:grid-cols-2 gap-16">
                  <div>
                    <h2 className="text-5xl font-bold text-foodmax-dark mb-12">{slide.title}</h2>
                    <ul className="space-y-6">
                      {slide.points?.map((p, i) => (
                        <li key={i} className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-foodmax-light/20 flex items-center justify-center text-foodmax-dark">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <span className="text-xl text-slate-600 font-medium">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100">
                    <h3 className="text-2xl font-bold text-foodmax-dark mb-8 flex items-center gap-3">
                      <Globe className="w-6 h-6 text-foodmax-light" />
                      International Standards
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {slide.standards?.map((s, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-foodmax-bg border border-slate-100 text-center font-bold text-foodmax-dark">
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {slide.type === "portfolio" && (
                <div>
                  <h2 className="text-5xl font-bold text-foodmax-dark mb-16 text-center">{slide.title}</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {slide.products?.map((p, i) => (
                      <div key={i} className="relative rounded-[3rem] overflow-hidden shadow-xl aspect-[4/5] group">
                        <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-gradient-to-t from-foodmax-dark/80 to-transparent" />
                        <div className="absolute bottom-8 left-8">
                          <h4 className="text-3xl font-bold text-white">{p.name}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {slide.type === "team" && (
                <div>
                  <h2 className="text-5xl font-bold text-foodmax-dark mb-16 text-center">{slide.title}</h2>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {slide.members?.map((m, i) => (
                      <div key={i} className="text-center">
                        <img src={m.img} alt={m.name} className="w-full aspect-square object-cover rounded-[2.5rem] mb-6 shadow-lg border-4 border-white" referrerPolicy="no-referrer" />
                        <h4 className="text-lg font-bold text-foodmax-dark">{m.name}</h4>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{m.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {slide.type === "thanks" && (
                <div className="text-center">
                  <motion.h2 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-8xl md:text-[10rem] font-bold text-foodmax-dark leading-none mb-8"
                  >
                    Thank<br /><span className="text-foodmax-light">You</span>
                  </motion.h2>
                  <p className="text-2xl text-slate-400 font-medium mb-16">{slide.subtitle}</p>
                  <div className="flex flex-wrap justify-center gap-12">
                    {slide.contacts?.map((c, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-600">
                        <c.icon className="w-6 h-6 text-foodmax-light" />
                        <span className="font-bold">{c.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 left-0 w-full px-12 flex justify-between items-center z-50">
        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${currentSlide === 0 ? "bg-slate-100 text-slate-300" : "bg-white text-foodmax-dark shadow-lg hover:scale-110 active:scale-95"}`}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === SLIDES.length - 1}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${currentSlide === SLIDES.length - 1 ? "bg-slate-100 text-slate-300" : "bg-white text-foodmax-dark shadow-lg hover:scale-110 active:scale-95"}`}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex-1 max-w-md mx-12 h-1.5 bg-slate-200 rounded-full overflow-hidden hidden md:block">
          <motion.div 
            initial={false}
            animate={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
            className="h-full bg-foodmax-light"
          />
        </div>

        <div className="text-xs font-black text-foodmax-dark/20 uppercase tracking-[0.5em] hidden lg:block">
          Foodmax Presentation 2026
        </div>
      </div>

      {/* Background Leaves Decoration */}
      <div className="absolute -bottom-20 -right-20 opacity-5 pointer-events-none">
        <Leaf className="w-[40rem] h-[40rem] text-foodmax-dark rotate-45" />
      </div>
    </div>
  );
}
