'use client';

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

export function MarketPulse() {
  return (
      <section className="container mx-auto px-4 md:px-6 mb-24">
         <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Market Pulse</h2>
            <Badge variant="outline" className="border-green-500 text-green-600 px-3 py-1 animate-pulse flex gap-1">
               <span className="w-2 h-2 bg-green-500 rounded-full"></span> Live Data
            </Badge>
         </div>
         <div className="grid md:grid-cols-4 gap-6">
            <TrendCard title="AI Engineers" value="25% Growth" sub="Year over Year" trend="up" />
            <TrendCard title="Data Science" value="₹12 LPA" sub="Avg. Salary" trend="up" />
            <TrendCard title="Digital Marketing" value="1.5L Jobs" sub="Open Positions" trend="up" />
            <TrendCard title="Civil Engineering" value="Steady" sub="Market Demand" trend="flat" />
         </div>
      </section>
  );
}

function TrendCard({ title, value, sub, trend }: { title: string, value: string, sub: string, trend: 'up'|'down'|'flat' }) {
    return (
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="text-sm text-zinc-500 mb-2">{title}</div>
            <div className="text-2xl font-bold mb-1 flex items-center gap-2">
                {value}
                {trend === 'up' && <TrendingUp className="w-4 h-4 text-green-500" />}
                {trend === 'down' && <TrendingDown className="w-4 h-4 text-red-500" />}
            </div>
            <div className="text-xs text-zinc-400">{sub}</div>
        </div>
    )
}
