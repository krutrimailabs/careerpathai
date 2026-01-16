'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function ScholarshipTeaser() {
  return (
      <section className="bg-yellow-50 dark:bg-yellow-900/10 py-20 mb-24">
         <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-xs font-bold mb-4 border border-yellow-200">
                💰 Save Lakhs Ticker: ₹450 Crores active for 2024-25
            </div>
            <h2 className="text-3xl font-bold mb-4 text-yellow-900 dark:text-yellow-100">Find Your Funding</h2>
            <p className="text-yellow-700 dark:text-yellow-200/80 mb-8 max-w-2xl mx-auto">
               Don&apos;t let finances hold you back. Match your profile to 1,000+ opportunities worth ₹500Cr+.
            </p>
            <div className="max-w-xl mx-auto flex bg-white dark:bg-black p-2 rounded-full shadow-lg border border-yellow-200 dark:border-yellow-800">
               <Input placeholder="Enter your percentage (e.g., 85%)" className="border-0 shadow-none focus-visible:ring-0 bg-transparent text-lg pl-6" />
               <Link href="/scholarships">
                   <Button className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 h-12">
                      <Search className="w-4 h-4 mr-2" /> Find Scholarships
                   </Button>
               </Link>
            </div>
         </div>
      </section>
  );
}
