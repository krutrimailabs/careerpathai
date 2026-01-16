'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function MentorSpotlight() {
  return (
      <section className="container mx-auto px-4 md:px-6 mb-24">
         <h2 className="text-3xl font-bold mb-12 text-center">Learn from experts</h2>
         <div className="grid md:grid-cols-3 gap-8">
             <MentorCard name="Dr. Anjali Gupta" role="Ex-AIIMS, Cardiologist" company="Apollo" specialty="Medical" />
             <MentorCard name="Rahul Sharma" role="Product Manager" company="Google" specialty="Tech" />
             <MentorCard name="Priya Desai" role="Corporate Lawyer" company="Khaitan & Co." specialty="Law" />
         </div>
      </section>
  );
}

function MentorCard({ name, role, company, specialty }: { name: string, role: string, company: string, specialty: string }) {
    return (
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center text-2xl">🎓</div>
                <div>
                   <h3 className="font-bold text-lg">{name}</h3>
                   <div className="text-sm text-blue-600 font-medium">{role}</div>
                   <div className="text-xs text-zinc-500">{company}</div>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <Badge variant="secondary">{specialty}</Badge>
                <Button size="sm" variant="outline" className="text-xs">Book 15-min Discovery Call</Button>
            </div>
        </div>
    )
}
