import SectionReveal from './SectionReveal';
import GoldDivider from './GoldDivider';

export default function CaseStudiesBanner() {
  return (
    <section id="case-studies" className="relative bg-royal-black py-20 lg:py-28 border-y border-gold/10">
      <div className="absolute inset-0 bg-royal-black pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <SectionReveal>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-16 bg-gold/40" />
            <span className="font-cinzel text-gold/80 text-sm font-bold tracking-[0.3em] uppercase">Our Work</span>
            <div className="h-[2px] w-16 bg-gold/40" />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-[2.8rem] font-black mb-6">
            Our <span className="gold-gradient-text">Case Studies</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <p className="font-lora text-cream-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Deep dives into the strategies that delivered extraordinary results for our partners across IPOs, crisis communications, and brand transformation.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <a
            href="https://drive.google.com/drive/u/3/folders/17ggiN0YW5RL7nYgz3OSk2nfz6mhe1u-v"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-velvet/30 to-velvet/10 border border-gold/30 hover:border-gold/60 hover:bg-velvet/20 transition-all duration-500 group"
          >
            <span className="font-cinzel text-gold text-base font-bold tracking-[0.15em] uppercase">View Case Study Library</span>
            <svg className="w-5 h-5 text-gold transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}
