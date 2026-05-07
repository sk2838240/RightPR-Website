import SectionReveal from './SectionReveal';
import { Target, Award, TrendingUp, Users, Mic, BarChart3 } from 'lucide-react';

export default function Mission() {
  return (
    <section id="mission" className="relative bg-royal-black py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-royal-black pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-burnished/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal delay={0.1}>
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-[2.5rem] font-black leading-tight mb-12">
            Your Brand. <span className="gold-gradient-text">Our Mission. Results.</span>
          </h2>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <SectionReveal delay={0.1}>
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold/30" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-gold/30" />
                <div className="relative overflow-hidden rounded-sm group">
                  <img
                    src="/images/hero-bg.jpg"
                    alt="The Right PR Mission"
                    className="w-full h-96 object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-velvet/20 via-transparent to-transparent" />
                  {/* White shine overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-espresso/50 border border-burnished/20 p-4 text-center group hover:border-gold/40 transition-all duration-500">
                  <Target className="w-8 h-8 text-gold mx-auto mb-2 group-hover:scale-110 transition-transform duration-500" />
                  <span className="font-cinzel text-xl font-black gold-gradient-text block">250+</span>
                  <span className="font-lora text-cream-muted text-xs tracking-wider uppercase">IPOs</span>
                </div>
                <div className="bg-espresso/50 border border-burnished/20 p-4 text-center group hover:border-gold/40 transition-all duration-500">
                  <Award className="w-8 h-8 text-gold mx-auto mb-2 group-hover:scale-110 transition-transform duration-500" />
                  <span className="font-cinzel text-xl font-black gold-gradient-text block">20+</span>
                  <span className="font-lora text-cream-muted text-xs tracking-wider uppercase">Awards</span>
                </div>
                <div className="bg-espresso/50 border border-burnished/20 p-4 text-center group hover:border-gold/40 transition-all duration-500">
                  <Users className="w-8 h-8 text-gold mx-auto mb-2 group-hover:scale-110 transition-transform duration-500" />
                  <span className="font-cinzel text-xl font-black gold-gradient-text block">75+</span>
                  <span className="font-lora text-cream-muted text-xs tracking-wider uppercase">Brands</span>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="space-y-6">
              <p className="font-lora text-cream-muted text-xl md:text-2xl leading-relaxed font-medium">
                The Right PR considers public relations as their main commitment, not just a service they offer. It is about changing your image for the better, making your voice heard and getting success that can be measured.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-espresso/30 border-l-2 border-gold/40 hover:border-gold transition-all duration-500">
                  <BarChart3 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <p className="font-lora text-cream-muted/90 text-lg leading-relaxed">
                    A visionary strategist, Harday Gupta founded the company which has already accomplished over 250 successful IPOs in just four years in the communication of Small and Medium Enterprises IPOs.
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 bg-espresso/30 border-l-2 border-gold/40 hover:border-gold transition-all duration-500">
                  <TrendingUp className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <p className="font-lora text-cream-muted/90 text-lg leading-relaxed">
                    The company is already known for its excellence in story-telling in various industries such as real estate, fintech, D2C and others, creating stories that not only gain trust but also attract participation and become the main news both nationally and regionally.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <div className="inline-flex items-center gap-3 bg-velvet/20 px-6 py-3 border border-gold/30">
                  <Mic className="w-5 h-5 text-gold" />
                  <span className="font-cinzel text-cream text-sm tracking-wider uppercase">Let's build your story together</span>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
