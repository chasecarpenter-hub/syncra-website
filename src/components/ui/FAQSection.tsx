"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "What exactly does Syncra Labs build?",
    answer: "We build custom AI systems for small and mid-sized businesses. Voice agents that handle inbound and outbound calls, automated lead pipelines, appointment booking systems, CRM integrations, and workflow automation. If there's a repetitive process costing you time or money, we can likely automate it."
  },
  {
    question: "How is Syncra Labs different from a larger AI agency?",
    answer: "Large agencies charge enterprise rates, rotate you through account managers, and hand you a templated solution dressed up as custom work. We are a lean, specialized team which means lower overhead, faster builds, and a dedicated partner who knows your business inside and out. You get the same quality of work at a fraction of the cost, with someone who is actually invested in your results."
  },
  {
    question: "Do I need to be technical to work with you?",
    answer: "Not at all. You tell us what's broken or slow in your business. We handle everything from there. You'll never need to log into a developer dashboard or write a line of code. We translate the technical side into plain business outcomes."
  },
  {
    question: "What technical requirements are needed on our end?",
    answer: "Minimal. We work with your existing tools and systems. During the discovery call we'll assess your current tech stack and identify any integrations needed. Our solutions are designed to fit seamlessly into what you're already using. No major overhauls required."
  },
  {
    question: "How long does a typical project take?",
    answer: "Most systems see their first automated workflow live within two to four weeks, with full implementation completed over one to three months depending on complexity. After our discovery call we provide a detailed roadmap with clear milestones so you always know what's coming next."
  },
  {
    question: "What does the discovery call involve?",
    answer: "It's a zero-pressure 30-minute conversation where we map your current workflows, identify gaps and bottlenecks, and discuss where automation could have the biggest impact. You'll leave with a clear picture of your immediate wins. No strings attached, no pitch deck, just a real conversation."
  },
  {
    question: "Will this disrupt how my team currently works?",
    answer: "That's one of our core principles. We build around your existing processes, not on top of them. Your team won't need to learn new software or change how they operate day to day. The automation runs in the background."
  },
  {
    question: "What kinds of businesses do you work with?",
    answer: "We work with any business looking to save time, capture more leads, and operate more efficiently. That said, we have seen exceptional results in real estate, home services, healthcare, legal, and automotive. If your business handles leads, appointments, or repetitive communication, there is almost certainly an opportunity to automate."
  },
  {
    question: "What does it cost?",
    answer: "After the discovery call we provide a detailed roadmap with full transparency on timeline, deliverables, and cost. No hidden fees, no surprise invoices. You know exactly what you're getting before we build anything. What we can tell you upfront is that we're significantly more affordable than traditional AI agencies and far more effective than managing tools on your own."
  },
  {
    question: "What ongoing support do you provide?",
    answer: "We're in it for the long haul. After launch we provide ongoing monitoring, fast issue resolution, and continuous optimization. We regularly review performance and suggest improvements to make sure your systems keep delivering results. You're never left managing something you don't fully understand."
  },
  {
    question: "How do we get started?",
    answer: "Book a free discovery call. We'll spend 30 minutes learning about your business, identifying your biggest bottlenecks, and telling you exactly what we'd build and what it would cost. Then the decision is entirely yours."
  }
];

function AccordionItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-slate-100 last:border-0 group">
      <button
        onClick={onClick}
        className="w-full py-6 md:py-8 flex items-center justify-between text-left transition-all duration-300 gap-4"
      >
        <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-foreground group-hover:text-primary/80'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 ${isOpen ? 'border-primary bg-primary/10 text-primary' : 'border-slate-200 text-slate-400'}`}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-muted-foreground text-base md:text-lg leading-relaxed max-w-4xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-slate-950 overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tighter mb-6"
          >
            Got Questions? <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">We've Got Answers.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-slate-400 text-lg md:text-xl leading-relaxed"
          >
            Everything you need to know before we talk.
          </motion.p>
        </div>

        <div className="bg-white border border-slate-200 rounded-[40px] px-8 md:px-12 py-4 shadow-sm hover:shadow-lg transition-shadow">
          {FAQ_DATA.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
