import SectionReveal from './SectionReveal';
import GoldDivider from './GoldDivider';

const stats = [
  { number: '25+', label: 'Years of Excellence' },
  { number: '500+', label: 'Brands Elevated' },
  { number: '40+', label: 'Global Markets' },
  { number: '98%', label: 'Client Retention' },
];

export default function About() {
  return (
    <section id="about" className="relative bg-espresso py-28 lg:py-36">
      <div className="absolute inset-0 bg-espresso pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-burnished/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-14 bg-burnished/50" />
            <span className="font-cinzel text-burnished/80 text-sm font-bold tracking-[0.25em] uppercase">About The Right PR</span>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <SectionReveal delay={0.1}>
              <h2 className="font-cinzel text-[51px] md:text-5xl lg:text-[3.5rem] font-black leading-tight mb-8">
                Crafting Stories. <span className="gold-gradient-text">Building Legacies.</span>
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="font-lora text-cream-muted text-lg md:text-xl leading-relaxed font-medium mb-6">
                At The Right PR, we are convinced that every brand needs to have a voice that is both strategic and appealing. The committed team of ours has been turning around difficult IPO narratives, crisis communication challenges, and the needs of brand positioning into motivating success stories since 2021. We provide PR solutions that are crystal clear and free of jargon with measurable outcomes, having bases in both the major metro areas and the newly developing cities.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <a href="#services" className="inline-flex items-center gap-4 text-gold font-cinzel text-sm font-bold tracking-[0.15em] uppercase group hover:gap-6 transition-all duration-500">
                Explore Our Services
                <span className="w-10 h-[2px] bg-gold group-hover:w-16 transition-all duration-500" />
              </a>
            </SectionReveal>
          </div>

          <div>
            <SectionReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-24 h-24 border-t-2 border-l-2 border-burnished/40" />
                <div className="absolute -bottom-5 -right-5 w-24 h-24 border-b-2 border-r-2 border-burnished/40" />
                <div className="relative overflow-hidden">
                  <img src="/images/about-bg.jpg" alt="About The Right PR" className="w-full h-[360px] lg:h-[420px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="grid grid-cols-4 gap-[2px] mt-8 bg-burnished/15">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-espresso py-6 px-4 text-center group hover:bg-espresso-light transition-colors duration-500">
                    <div className="font-cinzel text-2xl md:text-3xl font-black gold-gradient-text mb-2">{stat.number}</div>
                    <div className="font-lora text-cream-muted text-[11px] md:text-xs font-semibold tracking-[0.1em] uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>

        <GoldDivider className="mt-28" />
      </div>
    </section>
  );
}
