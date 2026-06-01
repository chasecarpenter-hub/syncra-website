'use client';

import React from 'react';

const TOOLS = [
  'HubSpot', 'Salesforce', 'Slack', 'Gmail', 'Google Calendar',
  'GoHighLevel', 'Calendly', 'Notion', 'Monday.com', 'Zapier',
  'Stripe', 'QuickBooks', 'Twilio', 'OpenAI', 'ActiveCampaign',
  'Airtable', 'ClickUp', 'Pipedrive', 'Zoho', 'Close CRM',
];

const MarqueeTrack = ({ reverse = false }: { reverse?: boolean }) => (
  <div
    className="flex items-center gap-8 whitespace-nowrap"
    style={{
      animation: `marquee${reverse ? '-reverse' : ''} 35s linear infinite`,
      willChange: 'transform',
    }}
  >
    {[...TOOLS, ...TOOLS].map((tool, i) => (
      <span
        key={i}
        className="flex items-center gap-2 text-slate-400 text-sm font-semibold tracking-wide shrink-0"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 inline-block" />
        {tool}
      </span>
    ))}
  </div>
);

export default function ToolsMarquee() {
  return (
    <div className="bg-slate-950 border-b border-white/5 py-4 overflow-hidden">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>

      <div className="flex items-center gap-6 max-w-full px-6 mb-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 shrink-0">
          Connects the tools you already run on
        </span>
        <div className="h-px flex-1 bg-white/5" />
      </div>

      <div className="flex items-center gap-8 overflow-hidden">
        <MarqueeTrack />
      </div>
    </div>
  );
}
