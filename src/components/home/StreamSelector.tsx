'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SectionWrapper } from "./HomeLayout";

export function StreamSelector() {
  return (
      <SectionWrapper 
        id="stream-selector" 
        background="white"
        title="Class 10 Stream Selector"
        subtitle="Scientific selection based on your aptitude."
        className="border-b border-zinc-100"
      >
         <div className="grid md:grid-cols-2 gap-8 items-center bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
            {/* Context / Narrative Side */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-zinc-900 leading-tight">
                   Science, Commerce, or Arts?
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                   85% of students choose streams based on peer pressure. Take our free psychometric test to find your true calling.
                </p>
                <div className="flex gap-4 text-xs font-semibold text-zinc-500">
                   <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-orange-500" /> Aptitude Mapping</div>
                   <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-orange-500" /> 500+ Careers</div>
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold">
                   Take Free Test <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
            </div>
            
            {/* The Tool/Card Side */}
            <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200">
               <h4 className="font-bold text-base mb-4">Quick Snapshot</h4>
               <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 rounded-lg border border-zinc-200 bg-white hover:border-blue-400 hover:text-blue-600 text-sm font-medium flex justify-between group transition-colors">
                     I love Math & Logic <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-lg border border-zinc-200 bg-white hover:border-blue-400 hover:text-blue-600 text-sm font-medium flex justify-between group transition-colors">
                     I love History & Stories <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-lg border border-zinc-200 bg-white hover:border-blue-400 hover:text-blue-600 text-sm font-medium flex justify-between group transition-colors">
                     I love Money & Business <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
               </div>
            </div>
         </div>
      </SectionWrapper>
  );
}
