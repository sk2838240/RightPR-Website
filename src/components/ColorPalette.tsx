import SectionReveal from './SectionReveal';
import GoldDivider from './GoldDivider';

/* ── DATA ─────────────────────────────────────────── */

const coreColors = [
  { name: 'Royal Black', var: '--color-royal-black', hex: '#0a0a0f', role: 'Primary background · Body · Section bases · Dark overlays', usage: 'bg-royal-black' },
  { name: 'Royal Deep', var: '--color-royal-deep', hex: '#111118', role: 'Alternate section backgrounds · Modal backgrounds · Creates rhythm between sections', usage: 'bg-royal-deep' },
  { name: 'Royal Dark', var: '--color-royal-dark', hex: '#1a1a24', role: 'Card hover states · Stat box hover backgrounds · Subtle elevation', usage: 'bg-royal-dark / hover:bg-royal-dark' },
  { name: 'Royal Muted', var: '--color-royal-muted', hex: '#2a2a36', role: 'Unused currently · Available for secondary UI surfaces', usage: 'bg-royal-muted' },
];

const goldColors = [
  { name: 'Gold', var: '--color-gold', hex: '#c9a84c', role: 'Primary accent · Borders · Icons · Buttons · Headlines · Links · All interactive elements', usage: 'text-gold / border-gold / bg-gold' },
  { name: 'Gold Light', var: '--color-gold-light', hex: '#e8d5a3', role: 'Hover states for gold elements · Card title hover color · CTA button hover', usage: 'hover:bg-gold-light / group-hover:text-gold-light' },
  { name: 'Gold Dark', var: '--color-gold-dark', hex: '#a08530', role: 'Scrollbar thumb · Subdued gold when full gold is too bright', usage: 'bg-gold-dark' },
];

const textColors = [
  { name: 'Cream', var: '--color-cream', hex: '#f5f0e8', role: 'Primary text · Headings · Body copy · Input values', usage: 'text-cream' },
  { name: 'Cream Muted', var: '--color-cream-muted', hex: '#b8b0a4', role: 'Secondary text · Descriptions · Labels · Subtitles · Placeholder text', usage: 'text-cream-muted' },
];

const opacityMap = [
  { class: '/5', pct: '5%', where: 'Logo icon bg · Gold glow blurs · Shimmer overlays' },
  { class: '/10', pct: '10%', where: 'Logo icon hover bg · Grid gap lines · Navbar border · Mobile menu border' },
  { class: '/15', pct: '15%', where: 'Stat grid gaps · Card borders (default) · Category filter borders · Input underlines' },
  { class: '/20', pct: '20%', where: 'Card borders · Social icon borders · Service icon borders · Testimonial dots (inactive)' },
  { class: '/25', pct: '25%', where: 'Contact icon borders · Award card borders · Nav CTA border' },
  { class: '/30', pct: '30%', where: 'Decorative corners · Year badges · Modal borders · Gold dividers' },
  { class: '/40', pct: '40%', where: 'Gold divider lines · CTA button borders · Section label lines · Scroll indicator' },
  { class: '/50', pct: '50%', where: 'Logo border · Stat numbers · Section label lines · Category borders (active)' },
  { class: '/60', pct: '60%', where: 'Icon colors (default) · Award border reveals · Meta info labels' },
  { class: '/70', pct: '70%', where: 'Icon hover states · Subtitle text · Modal close button' },
  { class: '/80', pct: '80%', where: 'Section label text · Hero subtitle · Navbar bg on scroll' },
];

const gradients = [
  { name: 'Gold Gradient Text', css: 'linear-gradient(135deg, #c9a84c, #e8d5a3, #c9a84c)', where: 'Accent words in headings · Stat numbers · "Reputation" · "Royalty" · "Legacies" etc.' },
  { name: 'Section Fade Top', css: 'linear-gradient(to-b, royal-black/40, transparent, royal-black)', where: 'Hero overlay · Image overlays' },
  { name: 'Image Fade Up', css: 'linear-gradient(to-t, royal-black, transparent)', where: 'About image · Team photos · Award cards · All image-to-bg blends' },
  { name: 'Shimmer Sweep', css: 'linear-gradient(to-r, transparent, gold/15, transparent)', where: 'Award card hover · Award modal image · Animated gold light sweep' },
  { name: 'Divider Fade', css: 'linear-gradient(to-r, transparent, gold/50, transparent)', where: 'Gold dividers · Footer top border' },
];

const sectionRhythm = [
  { section: 'Hero', bg: 'bg-royal-black', note: 'Full black — image behind' },
  { section: 'About', bg: 'bg-royal-black', note: 'Black base' },
  { section: 'Services', bg: 'bg-royal-deep', note: 'Deep — alternates' },
  { section: 'Portfolio', bg: 'bg-royal-black', note: 'Black base' },
  { section: 'Awards', bg: 'bg-royal-black', note: 'Black base' },
  { section: 'Team', bg: 'bg-royal-deep', note: 'Deep — alternates' },
  { section: 'Testimonials', bg: 'bg-royal-black', note: 'Black base' },
  { section: 'Contact', bg: 'bg-royal-deep', note: 'Deep — alternates' },
  { section: 'Footer', bg: 'bg-royal-deep', note: 'Deep — matches last section' },
];

/* ── COMPONENT ────────────────────────────────────── */

function Swatch({ hex, size = 'w-16 h-16' }: { hex: string; size?: string }) {
  return (
    <div
      className={`${size} border-2 border-gold/20 shrink-0`}
      style={{ backgroundColor: hex }}
    />
  );
}

function ColorRow({ name, hex, role, usage }: { name: string; hex: string; role: string; usage: string }) {
  return (
    <div className="grid grid-cols-[80px_1fr] md:grid-cols-[80px_200px_1fr_1fr] gap-4 md:gap-8 items-center py-6 border-b-2 border-gold/10 group hover:bg-royal-dark/40 transition-colors duration-300 px-4">
      <Swatch hex={hex} size="w-14 h-14" />
      <div>
        <p className="font-cinzel text-cream text-sm font-bold">{name}</p>
        <p className="font-lora text-gold/60 text-xs font-semibold mt-1">{hex}</p>
      </div>
      <p className="font-lora text-cream-muted text-sm font-medium leading-relaxed">{role}</p>
      <p className="font-lora text-gold/50 text-xs font-semibold tracking-wider">{usage}</p>
    </div>
  );
}

export default function ColorPalette() {
  return (
    <section id="palette" className="relative bg-royal-deep py-28 lg:py-36">
      <div className="absolute inset-0 bg-royal-deep pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[2px] w-14 bg-gold/50" />
              <span className="font-cinzel text-gold/80 text-sm font-bold tracking-[0.25em] uppercase">Design System</span>
              <div className="h-[2px] w-14 bg-gold/50" />
            </div>
            <h2 className="font-cinzel text-4xl md:text-5xl lg:text-[3.5rem] font-black">
              Color <span className="gold-gradient-text">Palette</span>
            </h2>
            <p className="font-lora text-cream-muted text-lg md:text-xl font-medium mt-6 max-w-2xl mx-auto leading-relaxed">
              The complete color system powering The Right PR — dark royal foundations, gold accents, and cream typography.
            </p>
          </div>
        </SectionReveal>

        {/* ── 1. Core Dark Palette ── */}
        <SectionReveal delay={0.1}>
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-[2px] w-10 bg-gold/40" />
              <h3 className="font-cinzel text-2xl font-bold text-cream">Dark Foundations</h3>
            </div>
            <p className="font-lora text-cream-muted text-base font-medium mb-6 ml-[52px]">The deep, rich backgrounds that create the royal atmosphere.</p>
            <div className="border-2 border-gold/15 bg-royal-black">
              {/* Header row */}
              <div className="hidden md:grid grid-cols-[80px_200px_1fr_1fr] gap-8 items-center py-4 px-4 border-b-2 border-gold/10 bg-gold/[0.03]">
                <span className="font-cinzel text-gold/50 text-[10px] font-bold tracking-[0.2em] uppercase">Swatch</span>
                <span className="font-cinzel text-gold/50 text-[10px] font-bold tracking-[0.2em] uppercase">Name / Hex</span>
                <span className="font-cinzel text-gold/50 text-[10px] font-bold tracking-[0.2em] uppercase">Role</span>
                <span className="font-cinzel text-gold/50 text-[10px] font-bold tracking-[0.2em] uppercase">Tailwind Class</span>
              </div>
              {coreColors.map((c) => (
                <ColorRow key={c.hex} name={c.name} hex={c.hex} role={c.role} usage={c.usage} />
              ))}
            </div>
            {/* Visual strip */}
            <div className="flex mt-6 gap-1">
              {coreColors.map((c) => (
                <div key={c.hex} className="flex-1 h-20 border-2 border-gold/10 flex items-end p-3" style={{ backgroundColor: c.hex }}>
                  <span className="font-cinzel text-cream/40 text-[10px] font-bold">{c.hex}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* ── 2. Gold Accent Palette ── */}
        <SectionReveal delay={0.1}>
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-[2px] w-10 bg-gold/40" />
              <h3 className="font-cinzel text-2xl font-bold text-cream">Gold Accents</h3>
            </div>
            <p className="font-lora text-cream-muted text-base font-medium mb-6 ml-[52px]">The signature gold family — luxury, interaction, and emphasis.</p>
            <div className="border-2 border-gold/15 bg-royal-black">
              <div className="hidden md:grid grid-cols-[80px_200px_1fr_1fr] gap-8 items-center py-4 px-4 border-b-2 border-gold/10 bg-gold/[0.03]">
                <span className="font-cinzel text-gold/50 text-[10px] font-bold tracking-[0.2em] uppercase">Swatch</span>
                <span className="font-cinzel text-gold/50 text-[10px] font-bold tracking-[0.2em] uppercase">Name / Hex</span>
                <span className="font-cinzel text-gold/50 text-[10px] font-bold tracking-[0.2em] uppercase">Role</span>
                <span className="font-cinzel text-gold/50 text-[10px] font-bold tracking-[0.2em] uppercase">Tailwind Class</span>
              </div>
              {goldColors.map((c) => (
                <ColorRow key={c.hex} name={c.name} hex={c.hex} role={c.role} usage={c.usage} />
              ))}
            </div>
            <div className="flex mt-6 gap-1">
              {goldColors.map((c) => (
                <div key={c.hex} className="flex-1 h-20 border-2 border-gold/10 flex items-end p-3" style={{ backgroundColor: c.hex }}>
                  <span className="font-cinzel text-royal-black/60 text-[10px] font-bold">{c.hex}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* ── 3. Text / Cream Palette ── */}
        <SectionReveal delay={0.1}>
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-[2px] w-10 bg-gold/40" />
              <h3 className="font-cinzel text-2xl font-bold text-cream">Typography Colors</h3>
            </div>
            <p className="font-lora text-cream-muted text-base font-medium mb-6 ml-[52px]">Cream tones for readable, warm text on dark backgrounds.</p>
            <div className="border-2 border-gold/15 bg-royal-black">
              <div className="hidden md:grid grid-cols-[80px_200px_1fr_1fr] gap-8 items-center py-4 px-4 border-b-2 border-gold/10 bg-gold/[0.03]">
                <span className="font-cinzel text-gold/50 text-[10px] font-bold tracking-[0.2em] uppercase">Swatch</span>
                <span className="font-cinzel text-gold/50 text-[10px] font-bold tracking-[0.2em] uppercase">Name / Hex</span>
                <span className="font-cinzel text-gold/50 text-[10px] font-bold tracking-[0.2em] uppercase">Role</span>
                <span className="font-cinzel text-gold/50 text-[10px] font-bold tracking-[0.2em] uppercase">Tailwind Class</span>
              </div>
              {textColors.map((c) => (
                <ColorRow key={c.hex} name={c.name} hex={c.hex} role={c.role} usage={c.usage} />
              ))}
            </div>
            <div className="flex mt-6 gap-1">
              {textColors.map((c) => (
                <div key={c.hex} className="flex-1 h-20 border-2 border-gold/10 flex items-end p-3" style={{ backgroundColor: c.hex }}>
                  <span className="font-cinzel text-royal-black/60 text-[10px] font-bold">{c.hex}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* ── 4. Gold Opacity Scale ── */}
        <SectionReveal delay={0.1}>
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-[2px] w-10 bg-gold/40" />
              <h3 className="font-cinzel text-2xl font-bold text-cream">Gold Opacity Scale</h3>
            </div>
            <p className="font-lora text-cream-muted text-base font-medium mb-6 ml-[52px]">Gold is used at many opacities to create depth hierarchy. This is the most important scale in the system.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {opacityMap.map((o) => (
                <div key={o.class} className="border-2 border-gold/15 bg-royal-black p-5 group hover:border-gold/30 transition-all duration-300">
                  <div
                    className="w-full h-16 mb-4 border border-gold/10"
                    style={{ backgroundColor: `rgba(201, 168, 76, ${parseInt(o.pct) / 100})` }}
                  />
                  <p className="font-cinzel text-gold text-lg font-bold">{o.class}</p>
                  <p className="font-cinzel text-cream-muted text-[10px] font-bold tracking-[0.1em] uppercase mb-3">{o.pct} opacity</p>
                  <p className="font-lora text-cream-muted/60 text-xs font-medium leading-relaxed">{o.where}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* ── 5. Gradients ── */}
        <SectionReveal delay={0.1}>
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-[2px] w-10 bg-gold/40" />
              <h3 className="font-cinzel text-2xl font-bold text-cream">Gradients</h3>
            </div>
            <p className="font-lora text-cream-muted text-base font-medium mb-6 ml-[52px]">Key gradient patterns used throughout the site for overlays, text effects, and transitions.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gradients.map((g) => (
                <div key={g.name} className="border-2 border-gold/15 bg-royal-black overflow-hidden group hover:border-gold/30 transition-all duration-300">
                  <div
                    className="h-24 w-full"
                    style={{
                      background: g.name.includes('Shimmer')
                        ? 'linear-gradient(to right, transparent, rgba(201,168,76,0.15), transparent)'
                        : g.name.includes('Gold Gradient')
                        ? g.css
                        : g.name.includes('Top')
                        ? 'linear-gradient(to bottom, rgba(10,10,15,0.4), transparent, rgba(10,10,15,1))'
                        : g.name.includes('Up')
                        ? 'linear-gradient(to top, rgba(10,10,15,1), transparent)'
                        : 'linear-gradient(to right, transparent, rgba(201,168,76,0.5), transparent)',
                    }}
                  />
                  <div className="p-5">
                    <p className="font-cinzel text-cream text-sm font-bold mb-2">{g.name}</p>
                    <p className="font-lora text-cream-muted/60 text-xs font-medium leading-relaxed">{g.where}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* ── 6. Section Rhythm ── */}
        <SectionReveal delay={0.1}>
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-[2px] w-10 bg-gold/40" />
              <h3 className="font-cinzel text-2xl font-bold text-cream">Section Background Rhythm</h3>
            </div>
            <p className="font-lora text-cream-muted text-base font-medium mb-6 ml-[52px]">Sections alternate between royal-black and royal-deep to create visual separation without hard dividers.</p>
            <div className="border-2 border-gold/15 bg-royal-black">
              {sectionRhythm.map((s, i) => (
                <div
                  key={s.section}
                  className={`flex items-center gap-6 px-6 py-5 ${i < sectionRhythm.length - 1 ? 'border-b-2 border-gold/10' : ''}`}
                >
                  <div
                    className="w-10 h-10 border border-gold/20 shrink-0"
                    style={{ backgroundColor: s.bg.includes('deep') ? '#111118' : '#0a0a0f' }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-cinzel text-cream text-sm font-bold">{s.section}</span>
                      <span className="font-cinzel text-gold/40 text-[10px] font-bold tracking-wider">{s.bg.toUpperCase()}</span>
                    </div>
                    <p className="font-lora text-cream-muted/50 text-xs font-medium mt-1">{s.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* ── 7. Quick Reference ── */}
        <SectionReveal delay={0.1}>
          <div>
            <div className="flex items-center gap-4 mb-2">
              <div className="h-[2px] w-10 bg-gold/40" />
              <h3 className="font-cinzel text-2xl font-bold text-cream">Quick Reference</h3>
            </div>
            <p className="font-lora text-cream-muted text-base font-medium mb-6 ml-[52px]">Where each color is used at a glance.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-gold/15 bg-royal-black p-8">
                <h4 className="font-cinzel text-gold text-base font-bold mb-6 tracking-wide">Backgrounds</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3"><div className="w-5 h-5 shrink-0" style={{backgroundColor:'#0a0a0f'}} /><span className="font-lora text-cream-muted text-sm font-medium">#0a0a0f — Page body, Hero, About, Portfolio, Awards, Testimonials</span></li>
                  <li className="flex items-center gap-3"><div className="w-5 h-5 shrink-0" style={{backgroundColor:'#111118'}} /><span className="font-lora text-cream-muted text-sm font-medium">#111118 — Services, Team, Contact, Footer, Modals</span></li>
                  <li className="flex items-center gap-3"><div className="w-5 h-5 shrink-0" style={{backgroundColor:'#1a1a24'}} /><span className="font-lora text-cream-muted text-sm font-medium">#1a1a24 — Card hover fills, stat hover states</span></li>
                  <li className="flex items-center gap-3"><div className="w-5 h-5 shrink-0 border border-gold/10" style={{backgroundColor:'rgba(255,255,255,0.03)'}} /><span className="font-lora text-cream-muted text-sm font-medium">rgba(255,255,255,0.03) — Glass cards (backdrop-blur)</span></li>
                </ul>
              </div>
              <div className="border-2 border-gold/15 bg-royal-black p-8">
                <h4 className="font-cinzel text-gold text-base font-bold mb-6 tracking-wide">Borders</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3"><div className="w-5 h-5 shrink-0" style={{backgroundColor:'rgba(201,168,76,0.12)'}} /><span className="font-lora text-cream-muted text-sm font-medium">gold/12 — Glass card default borders</span></li>
                  <li className="flex items-center gap-3"><div className="w-5 h-5 shrink-0" style={{backgroundColor:'rgba(201,168,76,0.2)'}} /><span className="font-lora text-cream-muted text-sm font-medium">gold/20 — Service icons, social icons, input underlines</span></li>
                  <li className="flex items-center gap-3"><div className="w-5 h-5 shrink-0" style={{backgroundColor:'rgba(201,168,76,0.3)'}} /><span className="font-lora text-cream-muted text-sm font-medium">gold/30 — Modal borders, year badges, decorative corners</span></li>
                  <li className="flex items-center gap-3"><div className="w-5 h-5 shrink-0" style={{backgroundColor:'rgba(201,168,76,0.5)'}} /><span className="font-lora text-cream-muted text-sm font-medium">gold/50 — Logo border, nav CTA, section label lines</span></li>
                </ul>
              </div>
              <div className="border-2 border-gold/15 bg-royal-black p-8">
                <h4 className="font-cinzel text-gold text-base font-bold mb-6 tracking-wide">Text Hierarchy</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3"><div className="w-5 h-5 shrink-0" style={{backgroundColor:'#f5f0e8'}} /><span className="font-lora text-cream-muted text-sm font-medium">#f5f0e8 Cream — Headings, primary text, input values</span></li>
                  <li className="flex items-center gap-3"><div className="w-5 h-5 shrink-0" style={{backgroundColor:'#b8b0a4'}} /><span className="font-lora text-cream-muted text-sm font-medium">#b8b0a4 Cream Muted — Descriptions, body copy, labels</span></li>
                  <li className="flex items-center gap-3"><div className="w-5 h-5 shrink-0" style={{backgroundColor:'#c9a84c'}} /><span className="font-lora text-cream-muted text-sm font-medium">#c9a84c Gold — Section labels, icons, links, CTAs</span></li>
                  <li className="flex items-center gap-3"><div className="w-5 h-5 shrink-0" style={{backgroundColor:'#e8d5a3'}} /><span className="font-lora text-cream-muted text-sm font-medium">#e8d5a3 Gold Light — Hover states on card titles</span></li>
                </ul>
              </div>
              <div className="border-2 border-gold/15 bg-royal-black p-8">
                <h4 className="font-cinzel text-gold text-base font-bold mb-6 tracking-wide">Interactive States</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3"><div className="w-5 h-5 shrink-0" style={{backgroundColor:'#c9a84c'}} /><span className="font-lora text-cream-muted text-sm font-medium">Primary CTA — bg-gold text-royal-black → hover:bg-gold-light</span></li>
                  <li className="flex items-center gap-3"><div className="w-5 h-5 shrink-0 border border-gold/40" style={{backgroundColor:'transparent'}} /><span className="font-lora text-cream-muted text-sm font-medium">Secondary CTA — border-gold/40 text-gold → hover:border-gold/70</span></li>
                  <li className="flex items-center gap-3"><div className="w-5 h-5 shrink-0" style={{backgroundColor:'rgba(201,168,76,0.1)'}} /><span className="font-lora text-cream-muted text-sm font-medium">Active filter — border-gold bg-gold/10 text-gold</span></li>
                  <li className="flex items-center gap-3"><div className="w-5 h-5 shrink-0" style={{backgroundColor:'rgba(201,168,76,0.6)'}} /><span className="font-lora text-cream-muted text-sm font-medium">Input focus — border-bottom gold/60</span></li>
                </ul>
              </div>
            </div>
          </div>
        </SectionReveal>

        <GoldDivider className="mt-28" />
      </div>
    </section>
  );
}
