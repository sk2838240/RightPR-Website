import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Crown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Awards', href: '#awards' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-royal-black/95 backdrop-blur-xl border-b-2 border-gold/15 shadow-2xl shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <a href="#home" className="flex items-center gap-4 group">
            <div className="w-12 h-12 border-2 border-gold/50 flex items-center justify-center bg-gold/5 group-hover:bg-gold/10 transition-all duration-300">
              <Crown size={22} className="text-gold" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-gold text-xl font-bold tracking-[0.15em] leading-none">
                THE RIGHT PR
              </span>
              <span className="font-lora text-cream-muted text-[11px] tracking-[0.3em] uppercase font-medium mt-0.5">
                Public Relations
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-5 py-2.5 font-cinzel text-[13px] font-semibold tracking-[0.12em] uppercase text-cream-muted hover:text-gold transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-6 px-8 py-3 border-2 border-velvet/60 text-cream font-cinzel text-[13px] font-bold tracking-[0.12em] uppercase hover:bg-velvet hover:text-cream transition-all duration-500"
            >
              Get Started
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-gold p-2">
            {mobileOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden bg-royal-black/95 backdrop-blur-xl border-t-2 border-gold/15 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 font-cinzel text-lg font-semibold tracking-[0.12em] uppercase text-cream-muted hover:text-gold transition-colors border-b border-gold/10"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-6 px-8 py-4 border-2 border-velvet/60 text-cream font-cinzel text-sm font-bold tracking-[0.12em] uppercase text-center hover:bg-velvet hover:text-cream transition-all duration-500"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
