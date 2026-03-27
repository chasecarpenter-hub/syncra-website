import React, { useState } from 'react';
import { Bot, Zap, Target, MessageSquare, BarChart3, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Custom AI Agents',
    icon: Bot,
    color: '#06b6d4',
    description: 'We train AI agents on your real scripts, data, and workflows — so they respond and act exactly the way your business needs.',
  },
  {
    id: 2,
    title: 'Workflow Automation',
    icon: Zap,
    color: '#3b82f6',
    description: 'Eliminate manual bottlenecks by automating repetitive tasks across your CRM, email, calendar, and internal tools.',
  },
  {
    id: 3,
    title: 'Lead Flow Optimization',
    icon: Target,
    color: '#8b5cf6',
    description: 'Identify and close the gaps in your lead pipeline with automated follow-up sequences and intelligent routing.',
  },
  {
    id: 4,
    title: 'AI-Powered Communication',
    icon: MessageSquare,
    color: '#d946ef',
    description: 'Deploy intelligent chat and messaging systems that handle inquiries, qualify leads, and book appointments — 24/7.',
  },
  {
    id: 5,
    title: 'Operations Intelligence',
    icon: BarChart3,
    color: '#f43f5e',
    description: 'Surface real-time insights from your operational data so you can make faster, better-informed decisions.',
  },
  {
    id: 6,
    title: 'System Integration',
    icon: Layers,
    color: '#10b981',
    description: 'Seamlessly connect your existing tools and platforms into a unified, automated ecosystem without disrupting your team.',
  },
];

interface AccordionItemProps {
  item: typeof accordionItems[0];
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter }) => {
  const Icon = item.icon;
  
  return (
    <div
      className={`
        relative h-[500px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out border
        ${isActive 
          ? 'w-full md:w-[450px] bg-neutral-900 border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.15)]' 
          : 'w-full md:w-[80px] bg-black border-white/5 hover:border-white/20'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Sleek Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br from-neutral-800/20 to-black transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-40'}`}></div>

      {/* Active Glow Animation (Edge) */}
      {isActive && (
        <div className="absolute inset-0 rounded-2xl border-2 border-cyan-500/30 animate-pulse pointer-events-none shadow-[inset_0_0_30px_rgba(6,182,212,0.1)]"></div>
      )}

      {/* Content Container */}
      <div className={`absolute inset-0 p-10 flex flex-col transition-all duration-500 ${isActive ? 'justify-end' : 'justify-center items-center'}`}>
        
        {/* Animated Icon (Centered) */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${isActive ? 'opacity-20 scale-150' : 'opacity-10 scale-100 md:-rotate-90'}`}>
           <motion.div
             animate={isActive ? {
               scale: [1, 1.1, 1],
               rotate: [0, 5, -5, 0],
             } : {}}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
           >
             <Icon size={isActive ? 180 : 40} color={isActive ? item.color : '#ffffff'} strokeWidth={1} />
           </motion.div>
        </div>

        {/* Text Content (Overlays Icon) */}
        <div className="relative z-10">
          <h3
            className={`
              text-white font-bold
              transition-all duration-500 ease-in-out
              ${
                isActive
                  ? 'text-2xl lg:text-3xl mb-4 opacity-100'
                  : 'text-lg uppercase tracking-[0.2em] whitespace-nowrap md:-rotate-90 md:origin-center opacity-40 translate-y-2'
              }
            `}
          >
            {item.title}
          </h3>
          
          <AnimatePresence>
            {isActive && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 text-xl leading-relaxed max-w-sm"
              >
                {item.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export const ServiceAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Text Content */}
          <div className="lg:w-1/3 text-left">
            <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-4">
              Our Services
            </h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tighter mb-6">
              Bespoke AI <br/>Solutions for <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Growth</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-md">
              We don't believe in one-size-fits-all. Every workflow we build is custom-tailored to your unique business DNA.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Start Your Build
              </a>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="lg:w-2/3 w-full">
            <div className="flex flex-col md:flex-row items-center justify-start gap-3 w-full overflow-hidden p-2">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
