import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Award } from 'lucide-react';

interface AwardData { title: string; subtitle: string; image: string; year: string; location: string; campaign: string; description: string; }

export default function AwardModal({ award, onClose }: { award: AwardData; onClose: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      <div className="absolute inset-0 bg-royal-black/90 backdrop-blur-md" />
      <motion.div initial={{ opacity: 0, scale: 0.92, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.92, y: 30 }} transition={{ duration: 0.4, ease: 'easeOut' }} className="relative bg-espresso border-2 border-gold/30 max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-5 right-5 z-20 w-11 h-11 border-2 border-gold/30 flex items-center justify-center hover:border-gold/60 hover:bg-gold/5 transition-all duration-300">
          <X size={20} strokeWidth={2.5} className="text-gold/70" />
        </button>
        <div className="relative h-[300px] md:h-[380px] overflow-hidden">
          <img src={award.image} alt={award.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent animate-shimmer" />
        </div>
        <div className="p-8 md:p-12 -mt-16 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 border-2 border-gold/40 flex items-center justify-center bg-gold/5">
              <Award size={20} strokeWidth={2.5} className="text-gold" />
            </div>
            <span className="font-cinzel text-gold/70 text-xs font-bold tracking-[0.25em] uppercase">Award Winner</span>
          </div>
          <h3 className="font-cinzel text-3xl md:text-4xl font-black text-cream mb-2">{award.title}</h3>
          <p className="font-cinzel text-gold/60 text-sm font-bold tracking-[0.15em] uppercase mb-8">{award.subtitle}</p>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-10 bg-gold/40" />
            <div className="w-2 h-2 rotate-45 border border-gold/40" />
            <div className="h-[2px] w-10 bg-gold/40" />
          </div>
          <p className="font-lora text-cream-muted text-lg font-medium leading-relaxed mb-10">{award.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-5 border-2 border-gold/15 bg-gold/[0.02]">
              <Calendar size={20} strokeWidth={2.5} className="text-gold/60 shrink-0" />
              <div>
                <p className="font-cinzel text-gold/50 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Year</p>
                <p className="font-cinzel text-cream text-lg font-bold">{award.year}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 border-2 border-gold/15 bg-gold/[0.02]">
              <MapPin size={20} strokeWidth={2.5} className="text-gold/60 shrink-0" />
              <div>
                <p className="font-cinzel text-gold/50 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Location</p>
                <p className="font-cinzel text-cream text-lg font-bold">{award.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 border-2 border-gold/15 bg-gold/[0.02]">
              <Award size={20} strokeWidth={2.5} className="text-gold/60 shrink-0" />
              <div>
                <p className="font-cinzel text-gold/50 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Campaign</p>
                <p className="font-cinzel text-cream text-lg font-bold">{award.campaign}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
