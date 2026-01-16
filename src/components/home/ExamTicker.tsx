'use client';

import React from 'react';
import { TriangleAlert } from "lucide-react";

export function ExamTicker() {
  return (
    <div className="bg-red-600 text-white text-sm py-2 overflow-hidden whitespace-nowrap relative z-50">
       <div className="animate-marquee inline-flex items-center gap-8 px-4">
          <span className="flex items-center gap-2 font-bold"><TriangleAlert className="w-4 h-4 fill-white text-red-600" /> ALERT: CUET Registration Closes in 2 Days!</span>
          <span className="opacity-80">|</span>
          <span>New Exam Dates for VITEEE Out</span>
          <span className="opacity-80">|</span>
          <span>JEE Main Phase 2 Admit Cards Released</span>
          <span className="opacity-80">|</span>
          <span className="font-bold text-yellow-300 cursor-pointer hover:underline">Register for Scholarship Test Ends Tonight</span>
       </div>
    </div>
  );
}
