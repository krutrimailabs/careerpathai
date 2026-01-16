'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, CheckCircle, Coins } from "lucide-react";

export function StatsSection() {
  return (
      <section className="-mt-16 container mx-auto px-4 md:px-6 relative z-20 mb-20">
         <div className="grid md:grid-cols-4 gap-4">
            <StatsBox count="40,00,000" label="Students Counselled" icon={UserCheck} />
            <StatsBox count="1,00,000+" label="Admissions taken" icon={CheckCircle} />
            <StatsBox count="500 Cr+" label="Scholarships Unlocked" icon={Coins} />
            <StatsBox count="1500+" label="Expert Mentors" icon={UserCheck} />
         </div>
      </section>
  );
}

function StatsBox({ count, label, icon: Icon }: { count: string, label: string, icon: React.ElementType }) {
    return (
        <Card className="text-center py-6 hover:-translate-y-1 transition-transform border-0 shadow-lg">
            <CardContent className="flex flex-col items-center p-0">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold">{count}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{label}</div>
            </CardContent>
        </Card>
    )
}
