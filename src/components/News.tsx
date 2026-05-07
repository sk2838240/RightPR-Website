import SectionReveal from './SectionReveal';
import GoldDivider from './GoldDivider';
import { ExternalLink } from 'lucide-react';

const news = [
  {
    title: 'Counteracting Information Warfare With Communication Tactics',
    excerpt: 'Strategic communication emerges as the frontline defense against misinformation, deploying nuanced narrative frameworks that restore credibility and rebuild public trust in an era of digital conflict.',
    url: 'https://www.exchange4media.com/pr-and-corporate-communication-news/counteracting-information-warfare-with-communication-tactics-135904.html',
    source: 'Exchange4Media'
  },
  {
    title: 'Story-Living: How Digital Creativity Is Immersing Audiences in PR Campaigns',
    excerpt: 'Immersive storytelling transcends traditional boundaries, transforming passive viewers into active participants through innovative digital experiences that breathe life into brand narratives.',
    url: 'https://www.indiantelevision.com/mam/pr-communication/story-living%3A-how-digital-creativity-is-immersing-audiences-in-pr-campaigns-241112',
    source: 'Indian Television'
  },
  {
    title: 'Ad-Land\'s Young Guns: Harday Gupta, Founder of The Right PR',
    excerpt: 'A rising force in financial communications redefines industry standards with bold strategic vision, proving that innovation and authenticity remain the cornerstones of modern PR excellence.',
    url: 'https://archive.adgully.com/ad-land--s-young-guns-harday-gupta-founder-of-the-right-pr-130448.html',
    source: 'Adgully'
  },
  {
    title: 'Building An Effective Social Media Presence For PR Professionals',
    excerpt: 'Digital authority requires more than presence—it demands strategic consistency, authentic engagement, and platform-specific narratives that amplify brand voice across diverse channels.',
    url: 'https://archive.adgully.com/building-an-effective-social-media-presence-for-pr-professionals-and-organisations-132333.html',
    source: 'Adgully'
  },
  {
    title: 'BW Celebrates Excellence in PR & Corporate Communications',
    excerpt: 'Industry leaders converge to honor transformative communication strategies that have redefined stakeholder engagement and elevated corporate reputation across global markets.',
    url: 'https://www.exchange4media.com/photo/bw-celebrates-excellence-in-pr-corporate-communications-732.html',
    source: 'Exchange4Media'
  },
  {
    title: 'BW Comms 40Under40 Awards: Celebrating the Changemakers',
    excerpt: 'The next generation of communication visionaries emerges with disruptive strategies and fearless creativity, reshaping how brands connect with their audiences in a fragmented media landscape.',
    url: 'https://www.bwmarketingworld.com/article/bw-comms-40under40-awards-2025-celebrating-the-changemakers-of-pr-communications-550657',
    source: 'BW Marketing World'
  },
  {
    title: 'PR & Corporate Communications Top 40',
    excerpt: 'The definitive ranking of industry trailblazers whose innovative campaigns and strategic excellence continue to set new benchmarks for corporate communication worldwide.',
    url: 'https://www.agencyreporter.com/prcc40/',
    source: 'Agency Reporter'
  },
];

export default function News() {
  return (
    <section id="news" className="relative bg-espresso py-24 lg:py-36">
      <div className="absolute inset-0 bg-espresso pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-burnished/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[2px] w-14 bg-burnished/50" />
              <span className="font-cinzel text-burnished/80 text-sm font-bold tracking-[0.25em] uppercase">Media Spotlight</span>
              <div className="h-[2px] w-14 bg-burnished/50" />
            </div>
            <h2 className="font-cinzel text-4xl md:text-5xl lg:text-[3.5rem] font-black">
              In The <span className="gold-gradient-text">News</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <SectionReveal key={article.url} delay={0.1 + index * 0.08}>
              <article className="h-full bg-gradient-to-b from-royal-black/50 to-espresso/40 border border-burnished/20 hover:border-gold/40 transition-all duration-700 overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-velvet/30 to-royal-black/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(212,175,55,0.03)_50%,transparent_70%)] bg-[200%_200%] group-hover:bg-[100%_100%] transition-all duration-1000" />
                  <div className="absolute -top-4 -left-4 w-10 h-10 border-t-2 border-l-2 border-gold/20 group-hover:border-gold/50 transition-colors" />
                  <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-r-2 border-gold/20 group-hover:border-gold/50 transition-colors" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 bg-gold/10 rounded-full blur-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                  </div>
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-royal-black/80 backdrop-blur-sm">
                    <span className="font-cinzel text-xs font-bold text-gold/80 uppercase">{article.source}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col h-full">
                  <h3 className="font-cinzel text-lg font-bold text-cream mb-3 line-clamp-2 group-hover:text-gold-light transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="font-lora text-cream-muted text-sm leading-relaxed mb-4 min-h-[84px]">
                    {article.excerpt}
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-velvet/20 border border-gold/30 text-gold text-sm font-bold tracking-wider uppercase hover:bg-velvet/30 hover:border-gold/50 transition-all duration-500 mt-4"
                  >
                    <span>Read More</span>
                    <ExternalLink size={14} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>

        <GoldDivider className="mt-28" />
      </div>
    </section>
  );
}
