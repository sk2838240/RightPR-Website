import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from './SectionReveal';
import GoldDivider from './GoldDivider';
import AwardModal from './AwardModal';
import { Trophy } from 'lucide-react';

const awards = [
  { title: 'Cannes Lions Grand Prix', subtitle: 'Best Integrated Campaign', image: '/images/award-cannes.jpg', year: '2024', location: 'Cannes, France', campaign: 'Maison Élégance Rebirth', description: 'The pinnacle of creative excellence, awarded for our groundbreaking integrated campaign that redefined luxury brand storytelling across 14 markets.' },
  { title: 'PRCA Excellence Award', subtitle: 'Public Relations Consultancy of the Year', image: '/images/award-prca.jpg', year: '2024', location: 'London, UK', campaign: 'Vertex Holdings Transformation', description: 'Recognized as the foremost public relations consultancy, this award celebrates our unwavering commitment to strategic brilliance and measurable impact.' },
  { title: 'Global SABRE Award', subtitle: 'Superior Achievement in Research & Planning', image: '/images/award-sabre.jpg', year: '2023', location: 'New York, USA', campaign: 'Serenity Wellness Launch', description: 'The SABRE Awards recognize superior achievement in public relations. Our data-driven approach demonstrated how rigorous research achieves extraordinary results.' },
  { title: 'PRWeek Global Award', subtitle: 'Global Agency of the Year', image: '/images/award-prweek.jpg', year: '2023', location: 'Singapore', campaign: 'The Royal Collection Heritage', description: "PRWeek's most prestigious honor, awarded to the agency that demonstrates exceptional global reach, creative innovation, and client impact." },
  { title: 'Clio Gold Award', subtitle: 'Excellence in Creative Communications', image: '/images/award-clio.jpg', year: '2022', location: 'Los Angeles, USA', campaign: 'NovaTech AI Thought Leadership', description: 'The Clio Awards celebrate the most creative and innovative work in communications. Our campaign transformed a complex narrative into a compelling human story.' },
  { title: 'AMEC Grand Prix', subtitle: 'Best Measurement & Evaluation', image: '/images/award-amec.jpg', year: '2022', location: 'Barcelona, Spain', campaign: 'Apex Capital Visibility Program', description: 'The AMEC Grand Prix honors excellence in communication measurement and evaluation. Our proprietary framework proved strategic PR delivers 12x ROI.' },
];

const stats = [
  { number: '47', label: 'Awards Won' },
  { number: '12', label: 'Grand Prix' },
  { number: '6', label: 'Consecutive Years' },
];

export default function Awards() {
  const [selectedAward, setSelectedAward] = useState<typeof awards[0] | null>(null);

  return (
    <>
      <section id="awards" className="relative bg-royal-black py-28 lg:py-36">
        <div className="absolute inset-0 bg-royal-black pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/3 rounded-full blur-[300px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-[2px] w-14 bg-gold/50" />
                <span className="font-cinzel text-gold/80 text-sm font-bold tracking-[0.25em] uppercase">Awards & Recognition</span>
                <div className="h-[2px] w-14 bg-gold/50" />
              </div>
              <h2 className="font-cinzel text-4xl md:text-5xl lg:text-[3.5rem] font-black">
                Hall of <span className="gold-gradient-text">Honour</span>
              </h2>
               <p className="font-lora text-cream-muted text-base md:text-lg font-medium mt-6 max-w-4xl mx-auto leading-relaxed">
                The Right PR has been admired by the whole industry and it is a source of pride for us to have 20 prestigious awards recognizing our excellence in SME IPOs, crisis communication, and digital creativity. The bolstering of accolades from BW Comms 40 Under 40, Exchange4Media, Adgully Young Guns and others denotes our acceptance and commitment to both the innovation and the client success.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="grid grid-cols-3 gap-[2px] mb-16 bg-gold/15">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-royal-black py-8 px-6 text-center group hover:bg-espresso/50 transition-colors duration-500">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Trophy size={24} strokeWidth={2.5} className="text-gold/60" />
                    <span className="font-cinzel text-4xl md:text-5xl font-black gold-gradient-text">{stat.number}</span>
                  </div>
                  <p className="font-cinzel text-cream-muted text-xs md:text-sm font-bold tracking-[0.15em] uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <SectionReveal key={award.title} delay={index * 0.1}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.4, ease: 'easeOut' }} onClick={() => setSelectedAward(award)} className="group cursor-pointer relative overflow-hidden border-2 border-gold/15 bg-espresso hover:border-gold/50 transition-all duration-700">
                  <div className="relative h-[280px] lg:h-[300px] overflow-hidden">
                    <img src={award.image} alt={award.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/15 to-transparent animate-shimmer" />
                    </div>
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right" />
                    <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gold/60 scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />
                    <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-gold/60 scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-bottom" />
                    <div className="absolute top-4 right-4 bg-royal-black/80 backdrop-blur-sm border-2 border-gold/30 px-4 py-2">
                      <span className="font-cinzel text-gold text-sm font-bold tracking-[0.1em]">{award.year}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                      <span className="font-cinzel text-gold text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2">
                        <Trophy size={14} strokeWidth={2.5} />View Details
                      </span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3 className="font-cinzel text-xl font-bold text-cream mb-2 group-hover:text-gold-light transition-colors duration-500">{award.title}</h3>
                    <p className="font-cinzel text-gold/50 text-[11px] font-bold tracking-[0.15em] uppercase">{award.subtitle}</p>
                    <div className="mt-5 h-[2px] w-0 bg-gold/40 group-hover:w-full transition-all duration-700" />
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>

          <GoldDivider className="mt-28" />
        </div>
      </section>

      <AnimatePresence>
        {selectedAward && <AwardModal award={selectedAward} onClose={() => setSelectedAward(null)} />}
      </AnimatePresence>
    </>
  );
}
