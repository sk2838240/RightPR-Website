import { useState } from 'react';
import SectionReveal from './SectionReveal';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Offices', value: 'New Delhi (HQ), Mumbai, Dehradun' },
  { icon: Phone, label: 'Telephone', value: '+91 81031 01801' },
  { icon: Mail, label: 'Email', value: 'info@therightpr.com' },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="relative bg-espresso py-28 lg:py-36">
      <div className="absolute inset-0 bg-espresso pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald/4 rounded-full blur-[250px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[2px] w-14 bg-emerald/50" />
              <span className="font-cinzel text-emerald-light/80 text-sm font-bold tracking-[0.25em] uppercase">Contact</span>
              <div className="h-[2px] w-14 bg-emerald/50" />
            </div>
            <h2 className="font-cinzel text-4xl md:text-5xl lg:text-[3.5rem] font-black">
              Are You Prepared to <span className="gold-gradient-text">Elevate Your Brand?</span>
            </h2>
            <p className="font-lora text-cream-muted text-lg md:text-xl font-medium mt-6 max-w-2xl mx-auto leading-relaxed">
              Connect with us to unveil the potential of The Right PR in turning your PR dream into stunning outcomes. Contact us via:
            </p>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionReveal delay={0.1}>
              <div className="space-y-9">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex gap-6 group">
                    <div className="w-14 h-14 border-2 border-emerald/25 flex items-center justify-center shrink-0 group-hover:border-emerald/60 transition-colors duration-500">
                      <info.icon size={22} strokeWidth={2.5} className="text-emerald/60 group-hover:text-emerald-light transition-colors duration-500" />
                    </div>
                    <div>
                      <p className="font-cinzel text-emerald/50 text-[11px] font-bold tracking-[0.2em] uppercase mb-1.5">{info.label}</p>
                      <p className="font-lora text-cream text-lg font-medium whitespace-pre-line leading-relaxed">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="mt-12 p-8 border-2 border-emerald/15 bg-emerald/[0.02]">
                <p className="font-cinzel text-lg text-cream font-bold leading-relaxed">
                  "The best time to plant a tree was twenty years ago. The second best time is now."
                </p>
                <p className="font-lora text-emerald/40 text-sm font-semibold tracking-[0.1em] uppercase mt-5">
                  — Ancient Proverb
                </p>
              </div>
            </SectionReveal>
          </div>

          <div className="lg:col-span-3">
            <SectionReveal delay={0.2}>
              <form onSubmit={handleSubmit} className="glass-card p-10 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="font-cinzel text-emerald/50 text-[11px] font-bold tracking-[0.2em] uppercase block mb-4">Full Name</label>
                    <input type="text" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} required className="w-full bg-transparent gold-input py-4 font-lora text-cream text-lg font-medium outline-none transition-colors duration-500 placeholder:text-cream-muted/30" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="font-cinzel text-emerald/50 text-[11px] font-bold tracking-[0.2em] uppercase block mb-4">Email Address</label>
                    <input type="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} required className="w-full bg-transparent gold-input py-4 font-lora text-cream text-lg font-medium outline-none transition-colors duration-500 placeholder:text-cream-muted/30" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="mb-8">
                  <label className="font-cinzel text-emerald/50 text-[11px] font-bold tracking-[0.2em] uppercase block mb-4">Company</label>
                  <input type="text" value={formState.company} onChange={(e) => setFormState({ ...formState, company: e.target.value })} className="w-full bg-transparent gold-input py-4 font-lora text-cream text-lg font-medium outline-none transition-colors duration-500 placeholder:text-cream-muted/30" placeholder="Your Company" />
                </div>
                <div className="mb-10">
                  <label className="font-cinzel text-emerald/50 text-[11px] font-bold tracking-[0.2em] uppercase block mb-4">Your Message</label>
                  <textarea value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} required rows={4} className="w-full bg-transparent gold-input py-4 font-lora text-cream text-lg font-medium outline-none transition-colors duration-500 resize-none placeholder:text-cream-muted/30" placeholder="Tell us about your vision..." />
                </div>
                <button type="submit" className="w-full md:w-auto px-14 py-5 bg-velvet text-cream font-cinzel text-base font-bold tracking-[0.15em] uppercase hover:bg-velvet-light transition-all duration-500 hover:shadow-xl hover:shadow-velvet/25 flex items-center justify-center gap-3 group">
                  {submitted ? 'Message Sent' : 'Send Message'}
                  <Send size={18} strokeWidth={2.5} className={`transition-transform duration-300 ${submitted ? 'translate-x-1 -translate-y-1' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
                </button>
                {submitted && <p className="mt-5 font-lora text-emerald/70 text-sm font-semibold tracking-[0.05em]">Thank you. We shall be in touch shortly.</p>}
              </form>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
