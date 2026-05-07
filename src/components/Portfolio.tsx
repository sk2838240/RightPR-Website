import { useState } from 'react';
import SectionReveal from './SectionReveal';
import GoldDivider from './GoldDivider';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Luxury', 'Corporate', 'Lifestyle', 'Technology'];
const projects = [
  { title: 'Maison Élégance', category: 'Luxury', description: 'Global rebrand and launch campaign for a Parisian haute couture house, resulting in 340% increase in media placements.', year: '2024' },
  { title: 'Vertex Holdings', category: 'Corporate', description: 'Crisis management and reputation restoration for a Fortune 100 conglomerate during a high-profile transition.', year: '2024' },
  { title: 'Serenity Wellness', category: 'Lifestyle', description: 'Strategic launch of a luxury wellness brand across 12 international markets with exclusive media partnerships.', year: '2023' },
  { title: 'NovaTech AI', category: 'Technology', description: 'Positioned an emerging AI company as an industry thought leader through strategic media placements.', year: '2023' },
  { title: 'The Royal Collection', category: 'Luxury', description: "Curated PR campaign for a heritage jewelry brand, securing features in Vogue, Harper's Bazaar, and Tatler.", year: '2023' },
  { title: 'Apex Capital', category: 'Corporate', description: 'Executive visibility program and thought leadership strategy for a leading private equity firm.', year: '2022' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative bg-espresso py-28 lg:py-36">
      <div className="absolute inset-0 bg-espresso pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sapphire/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[2px] w-14 bg-sapphire/50" />
              <span className="font-cinzel text-sapphire/80 text-sm font-bold tracking-[0.25em] uppercase">Portfolio</span>
              <div className="h-[2px] w-14 bg-sapphire/50" />
            </div>
            <h2 className="font-cinzel text-4xl md:text-5xl lg:text-[3.5rem] font-black">
              Crown <span className="gold-gradient-text">Jewels</span>
            </h2>
            <p className="font-lora text-cream-muted text-lg md:text-xl font-medium mt-6 max-w-2xl mx-auto leading-relaxed">
              A selection of our most distinguished campaigns and brand transformations.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-7 py-3 font-cinzel text-sm font-bold tracking-[0.12em] uppercase transition-all duration-500 border-2 ${activeCategory === cat ? 'border-sapphire bg-sapphire/10 text-sapphire-light' : 'border-sapphire/20 text-cream-muted hover:border-sapphire/40 hover:text-sapphire-light/70'}`}>
                {cat}
              </button>
            ))}
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <SectionReveal key={project.title} delay={index * 0.08}>
              <div className="glass-card p-8 lg:p-10 group hover:border-sapphire/35 transition-all duration-700 relative overflow-hidden h-full flex flex-col">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-sapphire/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="flex items-center justify-between mb-6">
                  <span className="font-cinzel text-sapphire/60 text-[11px] font-bold tracking-[0.2em] uppercase border-2 border-sapphire/20 px-4 py-1.5">{project.category}</span>
                  <span className="font-lora text-cream-muted/40 text-sm font-semibold">{project.year}</span>
                </div>
                <h3 className="font-cinzel text-xl font-bold text-cream mb-4 group-hover:text-sapphire-light transition-colors duration-500">{project.title}</h3>
                <p className="font-lora text-cream-muted text-[15px] font-medium leading-relaxed flex-grow">{project.description}</p>
                <div className="mt-8 flex items-center gap-3 text-sapphire/50 group-hover:text-sapphire-light transition-colors duration-500">
                  <span className="font-cinzel text-sm font-bold tracking-[0.12em] uppercase">View Case</span>
                  <ExternalLink size={16} strokeWidth={2.5} />
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-sapphire/50 group-hover:w-full transition-all duration-700" />
              </div>
            </SectionReveal>
          ))}
        </div>

        <GoldDivider className="mt-28" />
      </div>
    </section>
  );
}
