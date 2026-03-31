"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Mail, ExternalLink, Phone, User } from "lucide-react";

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="25%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#80eeb4" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-300 font-[helvetica] text-7xl font-bold dark:stroke-neutral-200"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-[#3ca2fa] font-[helvetica] text-7xl font-bold 
        dark:stroke-[#3ca2fa99]"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};


export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, hsl(var(--background)) 50%, hsl(var(--primary) / 0.05) 100%)",
      }}
    />
  );
};

export default function Footer() {
  return (
    <footer className="relative bg-slate-50 pt-24 pb-12 overflow-hidden border-t border-slate-200">
      <FooterBackgroundGradient />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {/* Brand Section */}
          <div className="space-y-6">
            <img src="/syncra-labs-logo-transparent.png" alt="Syncra Labs" className="h-28 md:h-36 w-auto object-contain" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Evolving businesses through custom AI intelligence and automated workflow mapping. We build the future of your operation, today.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-slate-100 rounded-full text-muted-foreground hover:text-primary hover:bg-slate-200 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-slate-100 rounded-full text-muted-foreground hover:text-primary hover:bg-slate-200 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-6">
            <h4 className="text-foreground font-bold uppercase tracking-widest text-xs">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-muted-foreground text-sm hover:text-primary transition-colors">Services</a></li>
              <li><a href="#process" className="text-muted-foreground text-sm hover:text-primary transition-colors">Our Process</a></li>
              <li><a href="#why-us" className="text-muted-foreground text-sm hover:text-primary transition-colors">Why Software Fails</a></li>
              <li><a href="#compare" className="text-muted-foreground text-sm hover:text-primary transition-colors">Comparison</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="text-foreground font-bold uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4">
              <li><a href="#faq" className="text-muted-foreground text-sm hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#case-studies" className="text-muted-foreground text-sm hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter/Contact */}
          <div className="space-y-6">
            <h4 className="text-foreground font-bold uppercase tracking-widest text-xs">Get Started</h4>
            <p className="text-muted-foreground text-sm">Ready to automate your operations? Book a 30-min discovery call.</p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-full hover:opacity-90 transition-all"
            >
              Book Strategy Call
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Text Hover Effect Section */}
        <div className="h-[150px] md:h-[300px] w-full flex items-center justify-center -mb-8 pointer-events-none md:pointer-events-auto">
          <TextHoverEffect text="SYNCRA LABS" />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-slate-400 text-[10px] md:text-xs text-center md:text-left">
            © 2026 SYNCRA LABS INC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-slate-400 text-[10px] md:text-xs">
            <span className="flex items-center gap-2">
              <User className="w-3 h-3" /> Chase Carpenter
            </span>
            <a href="tel:513-835-2051" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-3 h-3" /> 513-835-2051
            </a>
            <a href="mailto:chase@syncralabs.ai" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-3 h-3" /> chase@syncralabs.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
