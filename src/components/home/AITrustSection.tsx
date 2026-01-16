'use client';

import React from 'react';
import { BrainCircuit } from "lucide-react";

export function AITrustSection() {
  return (
      <section className="container mx-auto px-4 md:px-6 mb-24">
         <div className="bg-white text-zinc-900 rounded-3xl p-8 md:p-12 border border-zinc-200 shadow-xl relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-0 pointer-events-none opacity-60"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="md:w-1/2">
                   <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full text-xs font-semibold text-blue-700 border border-blue-100 mb-6">
                      <BrainCircuit className="w-4 h-4" /> Powered by Advanced AI
                   </div>
                   <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#002147]">Trust the Science.</h2>
                   <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                      We use the globally recognized <span className="text-[#002147] font-bold">Holland RIASEC Model</span> to map your personality with 90% accuracy.
                   </p>
                   <button className="bg-[#002147] text-white hover:bg-blue-900 font-bold py-3 px-8 rounded-full transition-colors flex items-center gap-2 shadow-lg shadow-blue-900/20">
                       Start Psychometric Test
                       <span className="text-xl">→</span>
                   </button>
               </div>
               
               <div className="w-full md:w-1/2 flex justify-center">
                   {/* Visual Representation of RIASEC Model */}
                   <div className="relative w-64 h-64 md:w-80 md:h-80">
                       <div className="absolute inset-0 rounded-full border border-zinc-200 animate-[spin_60s_linear_infinite]"></div>
                       <div className="absolute inset-8 rounded-full border border-zinc-200 animate-[spin_40s_linear_infinite_reverse]"></div>
                       
                       {/* Hexagon Points (Simplified Visual) */}
                       <div className="absolute inset-0 flex items-center justify-center">
                           <div className="grid grid-cols-2 gap-4 text-center">
                               {['Realistic', 'Investigative', 'Artistic', 'Social', 'Enterprising', 'Conventional'].map((trait) => (
                                   <div key={trait} className="bg-white/80 backdrop-blur-sm border border-zinc-100 px-3 py-2 rounded-lg text-xs md:text-sm font-semibold text-zinc-600 shadow-sm">
                                       {trait}
                                   </div>
                               ))}
                           </div>
                       </div>
                       
                       {/* Center Core */}
                       <div className="absolute inset-0 flex items-center justify-center -z-10">
                           <div className="w-32 h-32 bg-blue-100 rounded-full blur-3xl"></div>
                       </div>
                   </div>
               </div>
            </div>
         </div>
      </section>
  );
}
