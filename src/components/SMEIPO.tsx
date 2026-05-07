import SectionReveal from './SectionReveal';
import { TrendingUp, Target, Megaphone, MapPin, BarChart3, Award, ExternalLink } from 'lucide-react';

const ipoServices = [
  { icon: Target, text: 'Investor interest generating through strategic pre-IPO media positioning.' },
  { icon: Megaphone, text: 'Listing day media blitz of high impact to take the market\'s attention.' },
  { icon: TrendingUp, text: 'Post-IPO campaigns that which reinforce your market narrative.' },
  { icon: MapPin, text: 'Use of regional and Tier 2-3 media to expand your reach.' },
  { icon: BarChart3, text: 'Financial storytelling that is designed to turn visibility into growth.' },
];

export default function SMEIPO() {
  return (
    <section id="sme-ipo" className="relative bg-royal-black py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-royal-black pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[300px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-burnished/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[2px] w-14 bg-gold/50" />
              <span className="font-cinzel text-gold/80 text-sm font-bold tracking-[0.3em] uppercase">Sector Focus</span>
              <div className="h-[2px] w-14 bg-gold/50" />
            </div>
            <h2 className="font-cinzel text-4xl md:text-5xl lg:text-[3.5rem] font-black mb-4">
              SME IPO <span className="gold-gradient-text">PR</span>
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h3 className="font-cinzel text-2xl md:text-3xl lg:text-[2.2rem] text-center leading-relaxed mb-16 max-w-4xl mx-auto px-4">
            Empower Your SME IPO with the PR Agency That India Trusts the Most
          </h3>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          <SectionReveal delay={0.2}>
            <div className="space-y-6">
              <p className="font-lora text-cream-muted text-lg md:text-xl leading-relaxed font-medium">
                Not only publicity but also financial communicating targeted to the investors and the market are the requirements of launching a stock of an SME. The Right PR is happy to have conducted more than 250 SME IPO campaigns where they collaborated with promoters, bankers, and investors to attain the highest visibility and valuation.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <div className="bg-gradient-to-br from-velvet/20 to-velvet/5 border border-gold/20 p-10 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <Award size={32} strokeWidth={2.5} className="text-gold" />
                <span className="font-cinzel text-gold text-lg font-bold">Illustrious IPOs</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Systango', 'Kaushalya Infra', 'Insolation Energy', 'EKI Services'].map((name, index) => (
                  <span key={name} className="font-cinzel text-sm font-bold tracking-wider px-5 py-2 bg-royal-black/50 border border-gold/30 text-cream hover:border-gold/60 transition-colors">
                    {name}
                  </span>
                ))}
              </div>
              <p className="font-lora text-cream-muted/70 text-sm italic mt-4">
                — each is a proof of our unparalleled expertise.
              </p>
            </div>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.4}>
          <div className="text-center mb-12">
            <h4 className="font-cinzel text-lg font-bold tracking-[0.2em] text-gold/80 uppercase mb-8">The IPO PR Package Comprises Of</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {ipoServices.map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-espresso/40 border border-burnished/20 hover:border-gold/40 transition-all duration-500 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <service.icon size={20} strokeWidth={2.5} className="text-gold" />
                  </div>
                  <p className="font-lora text-cream-muted text-base leading-relaxed font-medium">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
