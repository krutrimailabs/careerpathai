'use client';

import React from 'react';
import { BookOpen, GraduationCap, Zap, Briefcase } from "lucide-react";

export function JourneyRoadmap() {
  return (
      <section className="container mx-auto px-4 md:px-6 mb-24 text-center">
         <h2 className="text-3xl font-bold mb-4">Your Roadmap to Success</h2>
         <p className="text-zinc-500 max-w-2xl mx-auto mb-16">We stay with you for a decade.</p>
         <div className="relative flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto px-4">
             <div className="absolute top-1/2 left-0 w-full h-1 bg-zinc-100 hidden md:block -z-10 -translate-y-1/2"></div>
             <JourneyStep title="Step 1" desc="Psychometric Test" icon={BookOpen} color="bg-blue-600" />
             <JourneyStep title="Step 2" desc="Stream Choice" icon={Zap} color="bg-indigo-600" />
             <JourneyStep title="Step 3" desc="Skill Certification" icon={GraduationCap} color="bg-purple-600" />
             <JourneyStep title="Step 4" desc="Top College Match" icon={Briefcase} color="bg-orange-600" />
         </div>
      </section>
  );
}

function JourneyStep({ title, desc, icon: Icon, color }: { title: string, desc: string, icon: React.ElementType, color: string }) {
    return (
        <div className="relative flex flex-col items-center z-10 bg-white dark:bg-black p-4 md:p-0">
            <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center text-white shadow-lg mb-4 text-xl font-bold`}>
                <Icon className="w-8 h-8" />
            </div>
            <div className="font-bold text-lg mb-1">{title}</div>
            <div className="text-sm text-zinc-500">{desc}</div>
        </div>
    )
}
