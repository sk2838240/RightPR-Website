import { useState, useEffect } from 'react';
import SectionReveal from './SectionReveal';
import GoldDivider from './GoldDivider';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  { quote: "The Right PR, the right PR, positioned our IPO expertly, converted the story that investors trusted from the hard technical financial data, and the media relationships of the company delivered the best coverage.", name: 'CEO', title: 'Systango' },
  { quote: "Their quick response during a crisis not only saved our brand image but also won back the stakeholders' trust. The team is indeed a very strategic part of our business.", name: 'Managing Director', title: 'Motia Builders Group' },
  { quote: "Their strategies specifically tailored to the sectors boosted our D2C brand's visibility in the already crowded markets, getting it featured in the best outlets and producing actual results.", name: 'Marketing Head', title: 'Yellow Slice' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => { setCurrent((prev) => (prev + 1) % testimonials.length); }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="relative bg-royal-black py-28 lg:py-36">
      <div className="absolute inset-0 bg-royal-black pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-velvet/5 rounded-full blur-[250px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <SectionReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-[2px] w-14 bg-velvet/50" />
                <span className="font-cinzel text-velvet-light/80 text-sm font-bold tracking-[0.25em] uppercase">Client Voices</span>
                <div className="h-[2px] w-14 bg-velvet/50" />
              </div>
              <h2 className="font-cinzel text-4xl md:text-5xl lg:text-[3.5rem] font-black">
                What Our <span className="gold-gradient-text">Partners Say</span>
              </h2>
            </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="relative">
            <Quote size={90} className="absolute -top-4 left-0 text-velvet/15 fill-velvet/5" strokeWidth={2} />
            <div className="glass-card p-12 md:p-16 text-center relative border-velvet/15 hover:border-velvet/30">
              <blockquote className="font-lora text-cream text-xl md:text-2xl lg:text-[1.7rem] leading-relaxed font-medium mb-12 relative z-10">
                "{testimonials[current].quote}"
              </blockquote>
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="h-[2px] w-10 bg-velvet/40" />
                <div className="w-2 h-2 rotate-45 border-2 border-velvet/40" />
                <div className="h-[2px] w-10 bg-velvet/40" />
              </div>
              <div>
                <p className="font-cinzel text-xl md:text-2xl font-bold text-cream">{testimonials[current].name}</p>
                <p className="font-cinzel text-velvet-light/60 text-xs font-bold tracking-[0.15em] uppercase mt-2">{testimonials[current].title}</p>
              </div>
              <div className="flex items-center justify-center gap-5 mt-12">
                <button onClick={prev} className="w-12 h-12 border-2 border-velvet/25 flex items-center justify-center hover:border-velvet/50 hover:bg-velvet/5 transition-all duration-300">
                  <ChevronLeft size={20} strokeWidth={3} className="text-velvet-light/60" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => setCurrent(i)} className={`h-[6px] transition-all duration-500 ${i === current ? 'bg-velvet-light w-8' : 'bg-velvet/20 w-[6px] hover:bg-velvet/40'}`} />
                  ))}
                </div>
                <button onClick={next} className="w-12 h-12 border-2 border-velvet/25 flex items-center justify-center hover:border-velvet/50 hover:bg-velvet/5 transition-all duration-300">
                  <ChevronRight size={20} strokeWidth={3} className="text-velvet-light/60" />
                </button>
              </div>
            </div>
          </div>
        </SectionReveal>

        <GoldDivider className="mt-28" />
      </div>
    </section>
  );
}
