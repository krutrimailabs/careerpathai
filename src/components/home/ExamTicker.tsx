'use client';

import React from 'react';

export function ExamTicker() {
  const updates = [
    { label: "CUET 2024", text: "Registration Closes in 2 Days" },
    { label: "VITEEE", text: "New Exam Dates Announced" },
    { label: "JEE Main", text: "Phase 2 Admit Cards Released" },
    { label: "Scholarship", text: "CareerPath Test ends tonight" },
    { label: "NEET UG", text: "Correction Window Open" },
    { label: "BITSAT", text: "Application Form Live" }
  ];

  return (
    <div className="bg-black text-white text-xs py-2.5 overflow-hidden border-b border-zinc-800 relative z-50">
       <div className="flex overflow-hidden select-none">
          {/* We render the list twice to create a seamless loop */}
          <div className="flex shrink-0 animate-infinite-scroll gap-16 min-w-full justify-around items-center pr-16 group hover:[animation-play-state:paused]">
             {[...updates, ...updates].map((item, i) => (
                <span key={i} className="flex items-center gap-2 whitespace-nowrap">
                   <span className="font-bold text-orange-500">{item.label}:</span>
                   <span className="text-zinc-300 font-medium">{item.text}</span>
                </span>
             ))}
          </div>
       </div>

       <style jsx global>{`
          @keyframes infinite-scroll {
             from { transform: translateX(0); }
             to { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
             animation: infinite-scroll 40s linear infinite;
          }
       `}</style>
    </div>
  );
}
