'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Layers } from "lucide-react";

export function StreamSelector() {
  return (
      <section className="container mx-auto px-4 md:px-6 mb-24">
         <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
               <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs font-bold mb-4">
                  <Layers className="w-4 h-4" /> For Class 10 Students
               </div>
               <h2 className="text-3xl font-bold mb-2">Science, Commerce, or Arts?</h2>
               <p className="text-purple-100 text-lg">Confused? Take our 2-minute aptitude snapshot to find your perfect stream match.</p>
            </div>
            <div className="flex gap-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 h-14 px-8 text-lg font-bold">
                   Take Stream Test
                </Button>
            </div>
         </div>
      </section>
  );
}
