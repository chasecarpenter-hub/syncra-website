"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

interface ComparisonRow {
  feature: string;
  syncra: string | boolean;
  agency: string | boolean;
  tools: string | boolean;
}

const COMPARISON_DATA: ComparisonRow[] = [
  { feature: "Pricing", syncra: "Transparent", agency: "Retainer heavy", tools: "Low cost upfront" },
  { feature: "Build approach", syncra: "Fully custom", agency: "Templated solutions", tools: "DIY with no guidance" },
  { feature: "Setup time", syncra: "Fast", agency: "Slow", tools: "Varies widely" },
  { feature: "Ongoing support", syncra: "Included", agency: "Billed separately", tools: "None" },
  { feature: "Learns your workflows", syncra: true, agency: false, tools: false },
  { feature: "Works with existing tools", syncra: true, agency: "Sometimes", tools: "Sometimes" },
  { feature: "No process disruption", syncra: true, agency: false, tools: false },
  { feature: "Dedicated point of contact", syncra: true, agency: "Rotates", tools: false },
  { feature: "Scales with your business", syncra: true, agency: true, tools: "Limited" },
  { feature: "Built for SMBs", syncra: true, agency: false, tools: true },
  { feature: "ROI timeline", syncra: "Weeks", agency: "Months", tools: "Unpredictable" },
];

function CellValue({ value, isSyncra = false }: { value: string | boolean; isSyncra?: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className={`w-5 h-5 ${isSyncra ? "text-primary" : "text-slate-400"}`} />
    ) : (
      <X className="w-5 h-5 text-slate-300" />
    );
  }
  
  if (value === "Sometimes") {
    return <span className="text-gray-500 font-medium">Sometimes</span>;
  }

  return (
    <span className={`font-medium ${isSyncra ? "text-foreground" : "text-muted-foreground"}`}>
      {value}
    </span>
  );
}

export default function ComparisonSection() {
  return (
    <section id="compare" className="py-24 md:py-32 bg-slate-950 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tighter mb-6"
          >
            The difference between <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">software and a partner.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Discover why businesses choose Syncra Labs over traditional agencies and generic self-managed tools.
          </motion.p>
        </div>

        <div className="relative overflow-x-auto scrollbar-hide rounded-[32px] border border-slate-200 bg-white shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-bottom border-slate-100">
                <th className="py-6 px-8 text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground w-[30%]">Feature</th>
                <th className="py-6 px-8 text-sm font-bold uppercase tracking-[0.2em] text-primary bg-primary/[0.03] w-[23%] text-center border-x border-slate-100">Syncra Labs</th>
                <th className="py-6 px-8 text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground w-[23%] text-center">Traditional AI Agency</th>
                <th className="py-6 px-8 text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground w-[23%] text-center">Self-Managed Tools</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row, index) => (
                <motion.tr 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group border-t border-slate-50 hover:bg-slate-50 transition-all duration-300"
                >
                  <td className="py-4 px-8 text-foreground font-semibold text-base">
                    {row.feature}
                  </td>
                  <td className="py-4 px-8 text-center bg-primary/[0.02] border-x border-slate-50 group-hover:bg-primary/[0.05]">
                    <div className="flex justify-center">
                      <CellValue value={row.syncra} isSyncra />
                    </div>
                  </td>
                  <td className="py-4 px-8 text-center">
                    <div className="flex justify-center">
                      <CellValue value={row.agency} />
                    </div>
                  </td>
                  <td className="py-4 px-8 text-center">
                    <div className="flex justify-center">
                      <CellValue value={row.tools} />
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-12 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 text-sm italic"
          >
            * Comparisons based on typical market offerings and client feedback.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
