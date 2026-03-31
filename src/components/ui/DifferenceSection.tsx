import React from 'react';
import { motion } from 'framer-motion';
import { Check, Settings, Activity, BarChart3, TrendingUp } from 'lucide-react';
import { cn } from '../../lib/utils';

const DIFFERENCES = [
  {
    id: "01",
    title: "Built Around How You Work",
    description: "We map your workflows first, then build. What gets built fits your operation, not the other way around.",
    benefits: [
      "Works with your existing tools",
      "No retraining your team",
      "Built on your logic, not a template"
    ],
    icon: <Settings className="w-5 h-5" />,
    mockup: (
      <div className="relative h-32 w-full bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          <div className="h-2 w-20 bg-slate-200 rounded-full" />
        </div>
        <div className="space-y-2">
          <motion.div 
            initial={{ width: "30%" }}
            animate={{ width: "80%" }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="h-2 bg-slate-200 rounded-full" 
          />
          <motion.div 
            initial={{ width: "50%" }}
            animate={{ width: "40%" }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="h-2 bg-primary/20 rounded-full" 
          />
          <div className="h-2 w-full bg-slate-100 rounded-full" />
        </div>
        {/* Connection Line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.path
            d="M 40 40 Q 100 20 160 60"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 20 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
    )
  },
  {
    id: "02",
    title: "We Stay In It With You",
    description: "Vendors hand you a login and move on. We monitor, improve, and stay accountable long after launch.",
    benefits: [
      "Proactive monitoring",
      "Fast fixes & updates",
      "Systems that improve over time"
    ],
    icon: <Activity className="w-5 h-5" />,
    mockup: (
      <div className="relative h-32 w-full bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col items-center justify-center p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter">Status</span>
          <span className="text-[10px] font-bold text-primary uppercase tracking-tighter animate-pulse">Live & Optimized</span>
        </div>
        <div className="w-full flex items-end gap-1 h-12">
          {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-primary/10 rounded-t-sm border-t-2 border-primary/50"
              initial={{ height: "20%" }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatType: "reverse" }}
            />
          ))}
        </div>
      </div>
    )
  },
  {
    id: "03",
    title: "ROI You Can Point To",
    description: "We start with what's costing you the most. Highest-impact bottlenecks addressed first.",
    benefits: [
      "Clear before-and-after metrics",
      "Real numbers, real impact",
      "No vague 'efficiency' claims"
    ],
    icon: <TrendingUp className="w-5 h-5" />,
    mockup: (
      <div className="relative h-32 w-full bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden p-4 flex flex-col justify-between">
        <div className="flex justify-between items-start">
           <div className="space-y-1">
             <div className="text-[10px] text-slate-400 font-bold uppercase">Efficiency Gain</div>
             <motion.div 
               className="text-2xl font-black text-foreground"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
             >
                +<motion.span>{85}</motion.span>%
             </motion.div>
           </div>
           <BarChart3 className="text-primary w-6 h-6" />
        </div>
        <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden">
           <motion.div 
             className="h-full bg-primary"
             initial={{ width: "0%" }}
             animate={{ width: "85%" }}
             transition={{ duration: 2, repeat: Infinity }}
           />
        </div>
      </div>
    )
  },
  {
    id: "04",
    title: "Agency Results, Lower Cost",
    description: "Lean team, lower overhead, faster builds. Priced for businesses that aren't Fortune 500.",
    benefits: [
      "No retainer traps",
      "Fully custom at a fraction of the cost",
      "Transparent outcome-based pricing"
    ],
    icon: <BarChart3 className="w-5 h-5" />,
    mockup: (
      <div className="relative h-32 w-full bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden p-6 flex flex-col items-center justify-center">
        <div className="relative text-center">
            <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Custom Solution</div>
            <div className="text-xl font-black text-foreground">$ Affordable</div>
            <motion.div 
               className="absolute -right-4 -top-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-[10px] font-bold"
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ type: "spring", repeat: Infinity, repeatDelay: 2 }}
            >
               ✓
            </motion.div>
        </div>
        <div className="mt-4 flex gap-1">
          {[1,2,3,4,5].map(i => (
             <div key={i} className="w-2 h-2 rounded-full bg-primary/20" />
          ))}
        </div>
      </div>
    )
  }
];

export function DifferenceSection() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-bold uppercase tracking-[0.4em] text-xs block mb-4"
          >
            Why Syncra Labs
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight tracking-tighter mb-6"
          >
            The Difference Between <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">Software and a Partner</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            We don't hand you a tool and walk away. We build around your business and stay invested in what comes next.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENCES.map((diff, index) => (
            <motion.div
              key={diff.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col bg-white border border-slate-200 rounded-[40px] p-8 transition-all hover:border-primary/20 shadow-sm hover:shadow-xl duration-500 h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-4xl font-black text-slate-100 group-hover:text-slate-200 transition-colors">
                  {diff.id}
                </span>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-primary group-hover:bg-primary/10 transition-all">
                   {diff.icon}
                </div>
              </div>

              <div className="mb-8">
                {diff.mockup}
              </div>

              <div className="flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                  {diff.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                  {diff.description}
                </p>

                <ul className="mt-auto space-y-3">
                  {diff.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                      <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                         <Check className="text-primary w-3 h-3" strokeWidth={3} />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DifferenceSection;
