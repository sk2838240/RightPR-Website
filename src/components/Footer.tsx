import { Crown } from 'lucide-react';

const footerLinks = [
  { title: 'Company', links: ['About Us', 'Our Team', 'Careers', 'Press Room'] },
  { title: 'Services', links: ['Brand Strategy', 'Media Relations', 'Crisis Management', 'Digital PR'] },
  { title: 'Insights', links: ['Blog', 'Case Studies', 'White Papers', 'Events'] },
];

export default function Footer() {
  return (
    <footer className="relative bg-espresso pt-24 pb-14">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-14 lg:gap-10 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 border-2 border-gold/50 flex items-center justify-center bg-gold/5">
                <Crown size={22} strokeWidth={2.5} className="text-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-gold text-xl font-bold tracking-[0.15em] leading-none">THE RIGHT PR</span>
                <span className="font-lora text-cream-muted text-[11px] font-semibold tracking-[0.3em] uppercase mt-0.5">Public Relations</span>
              </div>
            </div>
            <p className="font-lora text-cream-muted text-lg font-medium leading-relaxed max-w-sm mb-10">
              Where reputation meets royalty. Crafting extraordinary narratives for the world's most distinguished brands since 1998.
            </p>
            <div className="flex gap-4">
              {['X', 'In', 'Ig', 'Fb'].map((social) => (
                <div key={social} className="w-11 h-11 border-2 border-gold/20 flex items-center justify-center hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 cursor-pointer">
                  <span className="font-cinzel text-gold/50 text-xs font-bold tracking-wider hover:text-gold">{social}</span>
                </div>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-cinzel text-cream text-base font-bold mb-7 tracking-wide">{group.title}</h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link}><a href="#" className="font-lora text-cream-muted text-base font-medium hover:text-gold transition-colors duration-300">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t-2 border-gold/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-lora text-cream-muted/50 text-sm font-medium">© {new Date().getFullYear()} The Right PR. All rights reserved.</p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="font-lora text-cream-muted/40 text-sm font-medium hover:text-gold/60 transition-colors duration-300">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
