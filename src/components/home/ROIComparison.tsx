'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, AlertCircle } from "lucide-react";
import { SectionWrapper } from "./HomeLayout";

export function ROIComparison() {
  return (
      <SectionWrapper 
        background="white" 
        title="Stop Guessing. Start Calculating."
        subtitle="Education is an investment. Ensure you get 10x returns."
      >
         <div className="grid lg:grid-cols-2 gap-12 items-start mt-12">
            
            {/* Context Side */}
            <div className="prose dark:prose-invert lg:pr-12">
               <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                     <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                     <h4 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">Did you know?</h4>
                     <p className="text-zinc-600 dark:text-zinc-400">
                        45% of students graduated with debt but starting salaries lower than ₹3 LPA in 2024.
                     </p>
                  </div>
               </div>

               <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                     <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                     <h4 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">The &quot;Value Score&quot; Index</h4>
                     <p className="text-zinc-600 dark:text-zinc-400">
                        Our AI analyzes tuition fees, placement records, and living costs to give every college a score out of 10.
                     </p>
                  </div>
               </div>

               <div className="bg-blue-50 dark:bg-zinc-800 p-6 rounded-xl border-l-4 border-blue-600">
                  <p className="italic text-zinc-700 dark:text-zinc-300 font-medium">
                     &quot;I almost joined a college with ₹20L fees and ₹4L avg package. CareerPath saved me.&quot;
                  </p>
                  <div className="mt-4 text-sm font-bold text-zinc-900 dark:text-white">- Rahul M., Student</div>
               </div>
            </div>

            {/* Tool Side */}
            <div className="bg-white dark:bg-black rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-zinc-200 dark:border-zinc-800 p-8">
               <div className="flex items-center justify-between mb-8">
                   <h3 className="font-bold text-xl">ROI Calculator</h3>
                   <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">Live Data 2024</Badge>
               </div>
               
               <div className="space-y-6">
                  <div>
                      <label className="text-xs font-bold uppercase text-zinc-400 mb-2 block">Compare College A</label>
                      <Input placeholder="e.g. Manipal Institute of Tech" className="h-12 text-lg" />
                  </div>
                  
                  <div className="relative">
                      <div className="absolute left-1/2 -top-3 -translate-x-1/2 bg-zinc-200 dark:bg-zinc-700 text-zinc-500 text-xs px-2 py-0.5 rounded-full font-bold z-10">VS</div>
                      <div className="h-px bg-zinc-100 dark:bg-zinc-800 w-full"></div>
                  </div>

                  <div>
                      <label className="text-xs font-bold uppercase text-zinc-400 mb-2 block">With College B</label>
                      <Input placeholder="e.g. VIT Vellore" className="h-12 text-lg" />
                  </div>

                  <div className="pt-4">
                     <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl mb-4 flex justify-between items-center opacity-70 blur-[2px] hover:blur-none transition-all cursor-pointer">
                        <span className="text-sm font-medium">Avg Salary Diff</span>
                        <span className="font-bold text-green-600">+ ₹2.5 LPA</span>
                     </div>
                     <Button size="lg" className="w-full bg-zinc-900 text-white hover:bg-zinc-800 h-14 font-bold text-lg">
                        <DollarSign className="w-5 h-5 mr-2" /> Unlock Report
                     </Button>
                  </div>
               </div>
            </div>

         </div>
      </SectionWrapper>
  );
}
