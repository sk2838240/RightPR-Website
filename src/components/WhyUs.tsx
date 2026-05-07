import SectionReveal from './SectionReveal';
import { Target, Award, Users, Radio, BarChart3, ShieldCheck } from 'lucide-react';

const highlights = [
  { icon: BarChart3, text: "India's leading PR agency for SME IPOs with measurable impact" },
  { icon: Award, text: "More than 20 industry awards as proof of creativity and quality" },
  { icon: Users, text: "More than 75 top brands use our campaigns that are sharp and can scale" },
  { icon: Radio, text: "Ample media connections covering everything from the national level down to Tier 3 cities" },
  { icon: ShieldCheck, text: "Long-term brand equity is created by merging strategic clarity with creative storytelling" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative bg-espresso py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-espresso pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-burnished/8 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.03),transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal delay={0.1}>
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-[2px] w-20 bg-gold/40" />
            <span className="font-cinzel text-gold/90 text-sm font-bold tracking-[0.3em] uppercase">Why The Right PR</span>
            <div className="h-[2px] w-20 bg-gold/40" />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-[3.5rem] font-black text-center mb-20 leading-tight">
            Why Choose <span className="gold-gradient-text">The Right PR</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {highlights.map((item, index) => (
            <SectionReveal key={index} delay={0.3 + index * 0.1}>
              <div className="group relative h-full bg-gradient-to-b from-espresso-light/40 to-espresso/60 border border-burnished/20 p-8 lg:p-10 hover:border-gold/40 transition-all duration-700 hover:shadow-[0_0_40px_-12px_rgba(212,175,55,0.15)]">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                <div className="flex items-center gap-5 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-velvet/30 to-velvet/10 border border-velvet/20 flex items-center justify-center group-hover:border-gold/50 transition-colors duration-500">
                    <item.icon size={26} strokeWidth={2.5} className="text-gold" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-gold/30 flex items-center justify-center">
                    <span className="font-cinzel text-gold text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                <p className="font-lora text-cream-muted text-lg md:text-xl leading-relaxed font-medium group-hover:text-cream/90 transition-colors duration-500">
                  {item.text}
                </p>

                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gold/5 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.8}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            <div className="bg-gradient-to-r from-transparent via-burnished/10 to-transparent p-8 lg:p-10 rounded-lg border-y border-burnished/20">
              <p className="font-lora text-cream-muted text-xl md:text-2xl leading-relaxed font-medium text-center italic">
                "Our strategic PR will be along your growth journey with accuracy and enthusiasm, whether you are going for an IPO or marketing your brand better."
              </p>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
