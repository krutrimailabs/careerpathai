'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export function ParentPeace() {
  return (
      <section className="container mx-auto px-4 md:px-6 mb-24">
         <div className="bg-indigo-900 rounded-3xl overflow-hidden flex flex-col md:flex-row p-12 text-white items-center gap-8">
             <div className="md:w-2/3">
                 <h2 className="text-3xl font-bold mb-4">Invest in your child&apos;s future.</h2>
                 <p className="text-indigo-200 mb-8">Stop guessing. Use our data-driven tools to ensure your investment yields the best ROI.</p>
                 <Link href="/parent">
                    <Button className="bg-white text-indigo-900 hover:bg-gray-100 font-bold px-8">Explore Parent Portal</Button>
                 </Link>
             </div>
             <div className="md:w-1/3 flex justify-center">
                 <Shield className="w-32 h-32 text-indigo-700" />
             </div>
         </div>
      </section>
  );
}
