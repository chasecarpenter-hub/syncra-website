"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Clock, Map, Cpu, Rocket } from "lucide-react";

const STEPS = [
  {
    id: "01",
    title: "Discovery",
    description: "A zero-pressure, 30-minute deep dive to map your workflows, identify gaps, and pinpoint your biggest immediate wins.",
    icon: <Clock className="w-4 h-4" />,
    label: "30 Minutes",
    color: "bg-blue-600",
    shadow: "shadow-blue-600/50",
  },
  {
    id: "02",
    title: "Custom Roadmap",
    description: "Receive a clear, phased build plan with total transparency on timeline, deliverables, and exact costs.",
    icon: <Map className="w-4 h-4" />,
    label: "Full Clarity",
    color: "bg-purple-600",
    shadow: "shadow-purple-600/50",
  },
  {
    id: "03",
    title: "Build & Train",
    description: "We develop every workflow from scratch, training custom AI agents on your real scripts and data.",
    icon: <Cpu className="w-4 h-4" />,
    label: "Custom Built",
    color: "bg-green-600",
    shadow: "shadow-green-600/50",
  },
  {
    id: "04",
    title: "Launch & Optimize",
    description: "Go live together with ongoing monitoring, fast issue resolution, and continuous system improvement.",
    icon: <Rocket className="w-4 h-4" />,
    label: "Ongoing Support",
    color: "bg-orange-600",
    shadow: "shadow-orange-600/50",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            How It Works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tighter mb-6"
          >
            Custom systems, <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">not generic templates.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg md:text-xl leading-relaxed"
          >
            From first conversation to optimized systems, our transparent four-step process keeps you informed every step of the way.
          </motion.p>
        </div>

        {/* Process Grid */}
        <div className="relative">
          {/* Connecting Lines (Desktop) */}
          <div className="hidden lg:block absolute top-[15%] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 opacity-20" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="h-full bg-white border border-slate-200 hover:border-primary/20 rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-2 flex flex-col items-start text-left shadow-sm hover:shadow-xl">
                  {/* Step Number Circle */}
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-8 relative transition-transform duration-500 group-hover:scale-110",
                    step.color,
                    step.shadow,
                    "shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                  )}>
                    {step.id}
                    {/* Pulsing ring on hover */}
                    <div className={cn(
                      "absolute inset-0 rounded-full animate-ping opacity-0 group-hover:opacity-40",
                      step.color
                    )} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-grow">
                    {step.description}
                  </p>

                  {/* Footer Label */}
                  <div className="flex items-center gap-2.5 pt-6 border-t border-slate-100 w-full">
                    <div className={cn("p-2 rounded-lg bg-opacity-10", step.color)}>
                      <div className={cn("text-xs font-bold", step.color.replace('bg-', 'text-'))}>
                        {step.icon}
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                      {step.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
