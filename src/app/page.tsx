'use client';

import AnimatedShaderHero from '@/components/ui/AnimatedShaderHero';
import { ServiceAccordion } from '@/components/ui/ServiceAccordion';
import ProcessSection from '@/components/ui/ProcessSection';
import DifferenceSection from '@/components/ui/DifferenceSection';
import ComparisonSection from '@/components/ui/ComparisonSection';
import FAQSection from '@/components/ui/FAQSection';
import Footer from '@/components/ui/Footer';
import { Header } from '@/components/ui/Header';
import TestimonialsSection from '@/components/ui/TestimonialsSection';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Layer */}
      <Header />

      <motion.div {...fadeInUp}>
        <AnimatedShaderHero
          headline={{
            line1: "Custom AI Solutions",
            line2: "Built for Your Business"
          }}
          subtitle="We build ground-up AI agents and custom workflows tailored to your unique needs. No templates, no generic offerings, just pure engineering excellence."
          buttons={{
            primary: { text: "Book Your Free Discovery Call", onClick: () => { window.location.href = '#contact' } },
            secondary: { text: "See How It Works", onClick: () => { window.location.href = '#process' } }
          }}
        />
      </motion.div>

      <motion.section id="about" className="py-24 px-6 bg-slate-950" {...fadeInUp}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-bold tracking-widest text-xs uppercase">Boutique Partnership</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tighter mt-4 mb-6">
                Your Strategic <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">AI Consultant.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Syncra Labs isn't just another agency. We are a boutique consulting partner dedicated to building ground-up solutions that fit your business, not the other way around.
              </p>
              <ul className="space-y-4 text-slate-300 font-medium">
                <li className="flex items-center gap-3"><span className="text-primary">✓</span> Custom-built tools and dashboards</li>
                <li className="flex items-center gap-3"><span className="text-primary">✓</span> Deep-dive business analysis</li>
                <li className="flex items-center gap-3"><span className="text-primary">✓</span> Seamless integration with existing stacks</li>
              </ul>
            </div>
            <div className="relative aspect-square lg:aspect-video w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white group">
               <video
                 autoPlay
                 loop
                 muted
                 playsInline
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               >
                 <source src="/syncra-labs-background.mp4" type="video/mp4" />
               </video>

               <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />

               <div className="absolute bottom-0 right-0 bg-black/80 backdrop-blur-md px-5 py-2.5 rounded-tl-2xl flex items-center shadow-2xl pointer-events-none z-10 border-t border-l border-white/10">
                 <img src="/syncra-labs-logo-transparent.png" alt="Syncra Labs" className="h-5 md:h-6 w-auto object-contain brightness-0 invert opacity-80" />
               </div>

            </div>
          </div>
        </div>
      </motion.section>

      <motion.div {...fadeInUp}><ServiceAccordion /></motion.div>
      <motion.div {...fadeInUp}><ProcessSection /></motion.div>
      <motion.div {...fadeInUp}><DifferenceSection /></motion.div>
      <motion.div {...fadeInUp}><ComparisonSection /></motion.div>
      <motion.div {...fadeInUp}><FAQSection /></motion.div>

      <motion.section id="case-studies" className="py-24 px-6 bg-slate-950" {...fadeInUp}>
        <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase">Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tighter mt-4 mb-6">
            Straight answers, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">before you book.</span>
          </h2>
        </div>

        <TestimonialsSection />
        </div>
      </motion.section>

      <motion.section id="contact" className="py-24 md:py-32 bg-slate-50 flex justify-center px-4" {...fadeInUp}>
        <div className="w-full max-w-3xl bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 tracking-tight">Book a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">free discovery call.</span></h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1">First Name <span className="text-primary">*</span></label>
                <input required type="text" placeholder="First name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-foreground focus:border-primary/50 focus:bg-white outline-none transition-all placeholder:text-slate-400" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1">Last Name <span className="text-primary">*</span></label>
                <input required type="text" placeholder="Last name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-foreground focus:border-primary/50 focus:bg-white outline-none transition-all placeholder:text-slate-400" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1">Email <span className="text-primary">*</span></label>
                <input required type="email" placeholder="your@email.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-foreground focus:border-primary/50 focus:bg-white outline-none transition-all placeholder:text-slate-400" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1">Phone Number <span className="text-primary">*</span></label>
                <input required type="tel" placeholder="(555) 000-0000" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-foreground focus:border-primary/50 focus:bg-white outline-none transition-all placeholder:text-slate-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1">Company <span className="text-primary">*</span></label>
              <input required type="text" placeholder="Your company name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-foreground focus:border-primary/50 focus:bg-white outline-none transition-all placeholder:text-slate-400" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1">Message / Biggest Challenge</label>
              <textarea placeholder="Tell us about your business and the challenges you're facing..." rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-foreground focus:border-primary/50 focus:bg-white outline-none transition-all placeholder:text-slate-400 resize-none"></textarea>
            </div>

            <button type="submit" className="w-full py-4 mt-6 bg-gradient-to-r from-primary to-indigo-600 text-white font-bold text-lg rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Send Message <span>→</span>
            </button>
            <p className="text-center text-muted-foreground text-sm mt-6">We'll respond within 24 hours. No spam, ever.</p>
          </form>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
