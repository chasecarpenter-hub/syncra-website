import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "We were manually calling every new lead the next morning. Syncra built an outbound voice agent that calls within 60 seconds of a form submission, qualifies the lead, and books the appointment directly to our calendar. We doubled our show rate in the first month.",
    name: "Real Estate",
  },
  {
    text: "Our front desk was drowning in repetitive calls. Syncra set up an AI voice receptionist that handles appointment scheduling, answers common questions, and routes urgent calls to the right person. Our staff finally has time to focus on patients in the office.",
    name: "Medical Spa",
  },
  {
    text: "We used to lose leads over the weekend because nobody was available to respond. The AI receptionist Syncra built answers every call, captures the details, and sends a follow up text automatically. We have not missed a lead since.",
    name: "HVAC",
  },
  {
    text: "Syncra built us a custom proposal generator that takes a few inputs from our estimator and spits out a fully branded roofing proposal in under two minutes. What used to take an hour now takes two minutes.",
    name: "Roofing",
  },
  {
    text: "Our invoicing process was a mess of spreadsheets and manual emails. Syncra automated the entire thing. Jobs close, invoices go out, reminders follow up, and payments get logged without anyone touching it.",
    name: "Property Management",
  },
  {
    text: "We had an outbound lead qualifier running within three weeks. It works through our old lead list every night, identifies who is still in the market, and flags the hot ones for our agents to call. It has reopened deals we thought were dead.",
    name: "Mortgage",
  },
  {
    text: "Syncra built a full intake automation for our firm. New client inquiries get a response within seconds, the intake form goes out automatically, and everything routes into our CRM without anyone on our team doing a thing.",
    name: "Law Firm",
  },
  {
    text: "The AI receptionist handles every inbound call after hours. It books service appointments, answers questions about pricing, and sends confirmation texts. Our customers do not even know they are talking to an AI.",
    name: "Automotive",
  },
  {
    text: "We were chasing down unsigned contracts for days after sending estimates. Syncra built an automated follow up sequence that sends reminders, answers objections, and flags the ones that need a personal call. Our close rate went up immediately.",
    name: "Landscaping",
  },
  {
    text: "Syncra built us a patient reactivation system that goes through our inactive patient list and sends personalized outreach to bring them back in. We booked 40 appointments in the first two weeks without a single manual call.",
    name: "Dental",
  },
  {
    text: "Our technicians were spending 30 minutes after every job filling out paperwork. Syncra built a voice powered job completion flow where they just talk through what they did and the system generates the report, updates the job log, and triggers the invoice automatically.",
    name: "HVAC",
  },
  {
    text: "We used to spend Monday mornings pulling weekend leads and entering them into our system manually. Syncra automated the entire pipeline from lead capture to CRM entry to first outreach. Monday mornings are completely different now.",
    name: "Real Estate",
  }
];

const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 8);
const thirdColumn = testimonials.slice(8, 12);

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name }, i) => (
                <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_30px_rgba(6,182,212,0.03)] w-full hover:bg-white/10 transition-colors duration-300" key={i}>
                  <div className="text-gray-300 leading-relaxed font-medium">"{text}"</div>
                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-500 font-bold uppercase">
                       {name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <div className="font-bold tracking-tight leading-5 text-white">{name}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <div className="flex justify-center gap-6 overflow-hidden h-[600px] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] mt-12 w-full max-w-7xl mx-auto">
      <TestimonialsColumn testimonials={firstColumn} duration={25} className="w-full md:w-1/3 hidden md:block" />
      <TestimonialsColumn testimonials={secondColumn} duration={35} className="w-full md:w-1/3" />
      <TestimonialsColumn testimonials={thirdColumn} duration={30} className="w-full md:w-1/3 hidden lg:block" />
    </div>
  );
}
