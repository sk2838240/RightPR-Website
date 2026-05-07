import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-royal-black min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
      <div className="absolute inset-0 bg-royal-black/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-royal-black/40 via-transparent to-royal-black" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-velvet/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-40 bg-gradient-to-b from-gold/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-40 bg-gradient-to-t from-gold/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} className="mb-10 flex justify-center">
          <svg width="64" height="64" viewBox="0 0 48 48" fill="none" className="opacity-70">
            <path d="M8 36L12 16L18 26L24 12L30 26L36 16L40 36H8Z" stroke="#C9A227" strokeWidth="2.5" strokeLinejoin="round" />
            <rect x="6" y="36" width="36" height="4" rx="1" stroke="#C9A227" strokeWidth="2" />
          </svg>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="font-cinzel text-gold/80 text-base md:text-lg tracking-[0.35em] uppercase font-bold mb-8">
          Luxury Public Relations & Brand Strategy
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }} className="font-cinzel text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.1] mb-10">
          <span className="text-cream">Where </span>
          <span className="gold-gradient-text">Reputation</span>
          <br />
          <span className="text-cream">Meets </span>
          <span className="gold-gradient-text">Royalty</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="font-lora text-cream-muted text-xl md:text-2xl max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
          We craft narratives that command attention and build legacies.
          For brands that refuse to be ordinary.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#contact" className="px-12 py-5 bg-velvet text-cream font-cinzel text-base font-bold tracking-[0.15em] uppercase hover:bg-velvet-light transition-all duration-500 hover:shadow-xl hover:shadow-velvet/25">
            Begin Your Legacy
          </a>
          <a href="#about" className="px-12 py-5 border-2 border-gold/40 text-gold font-cinzel text-base font-bold tracking-[0.15em] uppercase hover:border-gold/70 hover:bg-gold/5 transition-all duration-500">
            Discover More
          </a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="font-cinzel text-cream-muted/50 text-xs tracking-[0.3em] uppercase font-bold">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown size={20} className="text-gold/40" strokeWidth={3} />
        </motion.div>
      </motion.div>
    </section>
  );
}
