'use client';

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Target, CheckCircle } from "lucide-react";

export function SkillGapRoadmap() {
  return (
      <section className="container mx-auto px-4 md:px-6 mb-24">
         <h2 className="text-3xl font-bold mb-12 text-center">Don&apos;t just get a degree, get hired.</h2>
         <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-zinc-100 dark:border-zinc-800">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                     <Target className="w-6 h-6" />
                  </div>
                  <div>
                     <div className="font-bold text-lg">Digital Marketing Specialist</div>
                     <div className="text-xs text-zinc-500">Target Role</div>
                  </div>
               </div>
               <Badge className="bg-green-100 text-green-700">65% Match</Badge>
            </div>
            <div className="space-y-4">
               <RoadmapItem status="done" title="Bachelor's Degree" desc="BBA or B.Com" />
               <RoadmapItem status="current" title="Google Analytics Certification" desc="Essential for tracking" />
               <RoadmapItem status="locked" title="SEO Technical Audit" desc="Advanced Skill" />
               <RoadmapItem status="locked" title="Summer Internship" desc="Practical Experience" />
            </div>
         </div>
      </section>
  );
}

function RoadmapItem({ status, title, desc }: { status: 'done'|'current'|'locked', title: string, desc: string }) {
    const icon = status === 'done' ? <CheckCircle className="w-5 h-5 text-green-500" /> : status === 'current' ? <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" /> : <div className="w-3 h-3 bg-zinc-300 rounded-full" />;
    
    return (
        <div className={`flex items-center gap-4 p-4 rounded-lg border ${status === 'current' ? 'border-blue-200 bg-blue-50 dark:bg-blue-900/10' : 'border-zinc-100 dark:border-zinc-800'}`}>
           <div className="w-8 flex justify-center">{icon}</div>
           <div>
              <div className={`font-semibold ${status === 'locked' ? 'text-zinc-400' : ''}`}>{title}</div>
              <div className="text-xs text-zinc-500">{desc}</div>
           </div>
        </div>
    )
}
