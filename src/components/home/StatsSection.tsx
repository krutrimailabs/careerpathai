'use client';

import React from 'react';
import { UserCheck, CheckCircle, Coins, Award } from "lucide-react";

export function StatsSection() {
  return (
      <section className="bg-white border-b border-zinc-200">
         <div className="container mx-auto px-4 md:px-6">
             <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-200 border-x border-zinc-200">
                <StatsBox count="40L+" label="Students Counselled" icon={UserCheck} />
                <StatsBox count="1L+" label="Admissions Secured" icon={CheckCircle} />
                <StatsBox count="₹500Cr+" label="Scholarships Unlocked" icon={Coins} />
                <StatsBox count="1500+" label="Expert Mentors" icon={Award} />
             </div>
         </div>
      </section>
  );
}

function StatsBox({ count, label, icon: Icon }: { count: string, label: string, icon: React.ElementType }) {
    return (
        <div className="flex items-center justify-center p-6 md:py-8 group hover:bg-zinc-50/50 transition-colors">
            <div className="flex flex-col items-center text-center gap-2">
                <div className="flex items-center gap-3 mb-1">
                    <Icon className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 transition-colors" />
                    <span className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">{count}</span>
                </div>
                <div className="text-sm font-medium text-zinc-500 uppercase tracking-wide">{label}</div>
            </div>
        </div>
    )
}
