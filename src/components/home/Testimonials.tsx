'use client';

import React from 'react';
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
      <section className="bg-zinc-50 dark:bg-zinc-900/50 py-20">
         <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Students Love Us!</h2>
            <div className="grid md:grid-cols-3 gap-6">
               <TestimonialCard name="Sarthak Jain" college="JLU" text="I wanted to get into the best college... Collegedekho understood what I was really searching for." />
               <TestimonialCard name="Iliyas Shakir" college="Indus University" text="Usually the admission process scares me, but this was Step-by-step guidance at every stage." />
               <TestimonialCard name="Prateek Salecha" college="Indus University" text="Provided a knowledge temple where every desire of mine is fulfilled. The enrollment process was quite easy." />
            </div>
         </div>
      </section>
  );
}

function TestimonialCard({ name, college, text }: { name: string, college: string, text: string }) {
    return (
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 relative">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-blue-100 dark:text-blue-900" />
            <p className="text-zinc-600 dark:text-zinc-300 mb-6 mt-4 relative z-10 italic leading-relaxed">&quot;{text}&quot;</p>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-200 rounded-full"></div>
                <div>
                   <div className="font-bold text-sm">{name}</div>
                   <div className="text-xs text-zinc-500">{college}</div>
                </div>
            </div>
        </div>
    )
}
