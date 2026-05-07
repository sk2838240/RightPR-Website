import SectionReveal from './SectionReveal';
import GoldDivider from './GoldDivider';
import { TrendingUp, Shield, Radio, Crown, Building2, BarChart3 } from 'lucide-react';

const services = [
  { icon: TrendingUp, title: 'IPO Financial PR', description: 'Through pre-IPO whispering to post-listing activity.' },
  { icon: Shield, title: 'Crisis Communication', description: 'Fast and efficient repairing of the reputation through your reputation.' },
  { icon: Radio, title: 'Media Relations', description: 'Exact journalist connections for certain editorial presence.' },
  { icon: Crown, title: 'Brand Positioning & Thought Leadership', description: 'Influential interviews, bylines, and campaigns with industry guru.' },
  { icon: Building2, title: 'Sector Expertise', description: 'Property, finance technology, schooling, direct to consumer, healthcare, leisure, and money matters.' },
  { icon: BarChart3, title: 'Strategic PR', description: 'Results-driven campaigns that align with your growth journey, from IPO to brand elevation.' },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-royal-black py-28 lg:py-36">
      <div className="absolute inset-0 bg-royal-black pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald/3 rounded-full blur-[300px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[2px] w-14 bg-emerald/50" />
              <span className="font-cinzel text-emerald/80 text-sm font-bold tracking-[0.25em] uppercase">Our Services</span>
              <div className="h-[2px] w-14 bg-emerald/50" />
            </div>
            <h2 className="font-cinzel text-4xl md:text-5xl lg:text-[3.5rem] font-black">
              Royal <span className="gold-gradient-text">Expertise</span>
            </h2>
            <p className="font-lora text-cream-muted text-lg md:text-xl font-medium mt-6 max-w-2xl mx-auto leading-relaxed">
              Our client-first strategy translates into a total commitment to your brand story, carefully made for both impact and audience.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-emerald/15">
          {services.map((service, index) => (
            <SectionReveal key={service.title} delay={index * 0.08}>
              <div className="bg-royal-black p-10 lg:p-12 group hover:bg-espresso/50 transition-all duration-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="w-14 h-14 border-2 border-emerald/25 flex items-center justify-center mb-8 group-hover:border-emerald/60 transition-colors duration-500">
                  <service.icon size={28} strokeWidth={2.5} className="text-emerald/70 group-hover:text-emerald-light transition-colors duration-500" />
                </div>
                <span className="font-cinzel text-6xl font-black text-emerald/5 absolute top-4 right-6 group-hover:text-emerald/10 transition-colors duration-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-cinzel text-xl md:text-2xl font-bold text-cream mb-4 group-hover:text-emerald-light transition-colors duration-500">{service.title}</h3>
                <p className="font-lora text-cream-muted text-base font-medium leading-relaxed">{service.description}</p>
                <div className="mt-8 h-[2px] w-0 bg-emerald/50 group-hover:w-full transition-all duration-700" />
              </div>
            </SectionReveal>
          ))}
        </div>

        <GoldDivider className="mt-28" />
      </div>
    </section>
  );
}
