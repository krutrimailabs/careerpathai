'use client';

import React from 'react';
import { BrainCircuit } from "lucide-react";

export function AITrustSection() {
  return (
      <section className="container mx-auto px-4 md:px-6 mb-24">
         <div className="bg-zinc-900 text-white rounded-3xl p-8 md:p-12 border border-zinc-800 relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="md:w-1/2">
                   <div className="inline-flex items-center gap-2 bg-blue-900/50 px-3 py-1 rounded-full text-xs font-semibold text-blue-300 border border-blue-800 mb-6">
                      <BrainCircuit className="w-4 h-4" /> Powered by Advanced AI
                   </div>
                   <h2 className="text-3xl font-bold mb-4">Trust the Science.</h2>
                   <p className="text-zinc-400 text-lg leading-relaxed">
                      We use the globally recognized <span className="text-white font-semibold">Holland RIASEC Model</span> to map your personality with 90% accuracy.
                   </p>
               </div>
               <div className="grid grid-cols-2 gap-6 w-full md:w-auto">
                   <div className="bg-zinc-800 p-6 rounded-2xl text-center">
                       <div className="text-4xl font-bold text-green-400 mb-2">90%</div>
                       <div className="text-sm text-zinc-400">Match Accuracy</div>
                   </div>
                   <div className="bg-zinc-800 p-6 rounded-2xl text-center">
                       <div className="text-4xl font-bold text-yellow-400 mb-2">4.8/5</div>
                       <div className="text-sm text-zinc-400">Mentor Rating</div>
                   </div>
               </div>
            </div>
         </div>
      </section>
  );
}
