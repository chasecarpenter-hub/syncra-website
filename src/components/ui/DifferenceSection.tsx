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
      <div className="relative h-32 w-full bg-white/5 rounded-2xl border border-white/10 overflow-hidden p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
          <div className="h-2 w-20 bg-white/10 rounded-full" />
        </div>
        <div className="space-y-2">
          <motion.div 
            initial={{ width: "30%" }}
            animate={{ width: "80%" }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="h-2 bg-white/10 rounded-full" 
          />
          <motion.div 
            initial={{ width: "50%" }}
            animate={{ width: "40%" }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="h-2 bg-cyan-500/20 rounded-full" 
          />
          <div className="h-2 w-full bg-white/5 rounded-full" />
        </div>
        {/* Connection Line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.path
            d="M 40 40 Q 100 20 160 60"
            fill="none"
            stroke="#06b6d4"
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
      <div className="relative h-32 w-full bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex flex-col items-center justify-center p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-[10px] font-bold text-white/20 uppercase tracking-tighter">Status</span>
          <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-tighter animate-pulse">Live & Optimized</span>
        </div>
        <div className="w-full flex items-end gap-1 h-12">
          {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-cyan-500/10 rounded-t-sm border-t-2 border-cyan-500/50"
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
      <div className="relative h-32 w-full bg-white/5 rounded-2xl border border-white/10 overflow-hidden p-4 flex flex-col justify-between">
        <div className="flex justify-between items-start">
           <div className="space-y-1">
             <div className="text-[10px] text-white/20 font-bold uppercase">Efficiency Gain</div>
             <motion.div 
               className="text-2xl font-black text-white"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
             >
                +<motion.span>{85}</motion.span>%
             </motion.div>
           </div>
           <BarChart3 className="text-cyan-500 w-6 h-6" />
        </div>
        <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden">
           <motion.div 
             className="h-full bg-cyan-500"
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
      <div className="relative h-32 w-full bg-white/5 rounded-2xl border border-white/10 overflow-hidden p-6 flex flex-col items-center justify-center">
        <div className="relative text-center">
            <div className="text-[10px] text-white/20 font-bold uppercase mb-1">Custom Solution</div>
            <div className="text-xl font-black text-white">$ Affordable</div>
            <motion.div 
               className="absolute -right-4 -top-2 w-8 h-8 bg-cyan-500 text-black rounded-full flex items-center justify-center text-[10px] font-bold"
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ type: "spring", repeat: Infinity, repeatDelay: 2 }}
            >
               ✓
            </motion.div>
        </div>
        <div className="mt-4 flex gap-1">
          {[1,2,3,4,5].map(i => (
             <div key={i} className="w-2 h-2 rounded-full bg-cyan-500/20" />
          ))}
        </div>
      </div>
    )
  }
];

export function DifferenceSection() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-cyan-500 font-bold uppercase tracking-[0.4em] text-xs block mb-4"
          >
            Why Syncra Labs
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tighter mb-6"
          >
            The Difference Between <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Software and a Partner</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
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
              className="group relative flex flex-col bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-[40px] p-8 transition-all hover:bg-white/[0.05] hover:border-white/20 duration-500 h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                  {diff.id}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/20 group-hover:text-cyan-500 group-hover:bg-cyan-500/10 transition-all">
                   {diff.icon}
                </div>
              </div>

              <div className="mb-8">
                {diff.mockup}
              </div>

              <div className="flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-400 transition-colors">
                  {diff.title}
                </h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  {diff.description}
                </p>

                <ul className="mt-auto space-y-3">
                  {diff.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-300">
                      <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-cyan-500/10 flex items-center justify-center">
                         <Check className="text-cyan-500 w-3 h-3" strokeWidth={3} />
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
