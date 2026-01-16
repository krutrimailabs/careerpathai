'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function ROIComparison() {
  return (
      <section className="container mx-auto px-4 md:px-6 mb-24">
         <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-10">
               <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Decision Support</Badge>
               <h2 className="text-3xl font-bold mb-2">College ROI Battle</h2>
               <p className="text-zinc-500">Compare fees vs. placement to verify your investment.</p>
            </div>
            <div className="grid md:grid-cols-7 gap-4 items-center max-w-4xl mx-auto">
               <div className="md:col-span-3">
                  <Input placeholder="Enter College A (e.g. IIT Delhi)" className="h-14 text-center text-lg rounded-xl" />
               </div>
               <div className="md:col-span-1 flex justify-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg z-10">VS</div>
               </div>
               <div className="md:col-span-3">
                  <Input placeholder="Enter College B (e.g. BITS Pilani)" className="h-14 text-center text-lg rounded-xl" />
               </div>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-8 items-center bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800">
               <div className="text-left">
                  <h4 className="font-bold text-lg mb-1">ROI / Value Score Calculator</h4>
                  <p className="text-sm text-zinc-500 mb-4">See how much value a college delivers for your fees.</p>
                  <Button size="lg" className="w-full md:w-auto px-8 h-10 text-md font-bold bg-zinc-900 text-white hover:bg-zinc-800">Calculate Value Score</Button>
               </div>
               <div className="flex items-center justify-between bg-white dark:bg-black p-4 rounded-xl border border-zinc-200 dark:border-zinc-700">
                  <div className="text-left">
                     <div className="text-xs text-zinc-400 uppercase font-bold">Example: IIT Bombay</div>
                     <div className="text-2xl font-bold text-green-600">9.4/10</div>
                     <div className="text-xs text-green-600 font-medium">Excellent ROI</div>
                  </div>
                  <div className="text-right">
                     <div className="text-xs text-zinc-400">Avg Package</div>
                     <div className="font-bold">₹ 22 LPA</div>
                     <div className="text-xs text-zinc-400 mt-1">Fees</div>
                     <div className="font-medium">₹ 10 L</div>
                  </div>
               </div>
            </div>
         </div>
      </section>
  );
}
