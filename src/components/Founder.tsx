import SectionReveal from './SectionReveal';
import GoldDivider from './GoldDivider';
import { Linkedin } from 'lucide-react';

export default function Founder() {
  return (
    <section id="founder" className="relative bg-royal-black py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-royal-black pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-burnished/5 rounded-full blur-[300px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[2px] w-14 bg-burnished/50" />
              <span className="font-cinzel text-burnished/80 text-sm font-bold tracking-[0.25em] uppercase">Founder's Vision</span>
              <div className="h-[2px] w-14 bg-burnished/50" />
            </div>
            <h2 className="font-cinzel text-4xl md:text-5xl lg:text-[3.5rem] font-black">
              Harday Gupta, <span className="gold-gradient-text">Founder & CEO</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <SectionReveal delay={0.1}>
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-24 h-24 border-t-2 border-l-2 border-burnished/40" />
              <div className="absolute -bottom-5 -right-5 w-24 h-24 border-b-2 border-r-2 border-burnished/40" />
              <div className="relative overflow-hidden rounded-sm group">
                <img
                  src="/images/the right pr ceo.jpeg"
                  alt="Harday Gupta - Founder & CEO"
                  className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <a
                    href="https://www.linkedin.com/in/hardaygupta/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border-2 border-burnished/40 flex items-center justify-center hover:bg-burnished/10 transition-colors"
                  >
                    <Linkedin size={22} strokeWidth={2.5} className="text-burnished-light" />
                  </a>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="space-y-6">
              <div className="mb-6">
                <a
                  href="https://www.linkedin.com/in/hardaygupta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-burnished hover:text-gold transition-colors duration-300"
                >
                  <Linkedin size={18} strokeWidth={2.5} />
                  <span className="font-cinzel text-sm tracking-wider underline">linkedin.com/in/hardaygupta</span>
                </a>
              </div>

              <p className="font-lora text-cream-muted text-lg md:text-xl leading-relaxed font-medium">
                Harday Gupta, founder and CEO of The Right PR has been a decade-long PR professional and even though she is still lesser-known in the industry, she is already regarded as one of the most innovative financial and brand communication strategists.
              </p>

              <p className="font-lora text-cream-muted text-lg md:text-xl leading-relaxed font-medium">
                Besides her appearance on TEDx, at award ceremonies, and in leading industry publications, she drives The Right PR with an open-mindedness, a talent for creativity, and a readiness to work hard for the result of the communication to be good.
              </p>

              <div className="pt-4 mt-6 border-t border-burnished/20">
                <p className="font-lora text-cream/90 text-base md:text-lg leading-relaxed font-medium italic">
                  "The Right PR is Harday's vision in crisis management and digital PR, and she is the one who always tells the world that a team is in the right direction by getting the client's goals transformed into headline-making reality."
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>

        <GoldDivider className="mt-28" />
      </div>
    </section>
  );
}
