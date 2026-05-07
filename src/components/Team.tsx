import SectionReveal from './SectionReveal';
import GoldDivider from './GoldDivider';
import { Linkedin } from 'lucide-react';

const team = [
  { name: 'Victoria Ashworth', role: 'Founder & Chief Executive', image: '/images/team1.jpg', bio: 'With 25 years at the pinnacle of luxury PR, Victoria founded The Right PR on the belief that every brand deserves a throne.' },
  { name: 'Alexander Sterling', role: 'Chief Strategy Officer', image: '/images/team2.jpg', bio: 'A master strategist who has orchestrated campaigns for royal households and Fortune 500 companies across 40+ markets.' },
  { name: 'Isabella Montague', role: 'Creative Director', image: '/images/team3.jpg', bio: 'Isabella transforms brand narratives into visual masterpieces, blending artistry with strategic precision.' },
];

export default function Team() {
  return (
    <section id="team" className="relative bg-espresso py-28 lg:py-36">
      <div className="absolute inset-0 bg-espresso pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-amethyst/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[2px] w-14 bg-amethyst/50" />
              <span className="font-cinzel text-amethyst-light/80 text-sm font-bold tracking-[0.25em] uppercase">The Court</span>
              <div className="h-[2px] w-14 bg-amethyst/50" />
            </div>
            <h2 className="font-cinzel text-4xl md:text-5xl lg:text-[3.5rem] font-black">
              Our <span className="gold-gradient-text">Luminaries</span>
            </h2>
            <p className="font-lora text-cream-muted text-lg md:text-xl font-medium mt-6 max-w-2xl mx-auto leading-relaxed">
              The distinguished minds behind The Right PR's sovereign approach.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {team.map((member, index) => (
            <SectionReveal key={member.name} delay={index * 0.12}>
              <div className="group relative">
                <div className="relative overflow-hidden mb-8">
                  <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-amethyst/40 z-10" />
                  <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-amethyst/40 z-10" />
                  <img src={member.image} alt={member.name} className="w-full h-[380px] lg:h-[420px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <div className="w-11 h-11 border-2 border-amethyst/40 flex items-center justify-center hover:bg-amethyst/10 transition-colors">
                      <Linkedin size={20} strokeWidth={2.5} className="text-amethyst-light" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-cinzel text-2xl font-bold text-cream group-hover:text-amethyst-light transition-colors duration-500">{member.name}</h3>
                  <p className="font-cinzel text-amethyst/60 text-xs font-bold tracking-[0.15em] uppercase mt-2 mb-4">{member.role}</p>
                  <p className="font-lora text-cream-muted text-base font-medium leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <GoldDivider className="mt-28" />
      </div>
    </section>
  );
}
