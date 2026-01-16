'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LeadForm() {
  return (
      <section className="bg-blue-600 text-white py-16 mb-24">
         <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
               <h2 className="text-3xl font-bold mb-4">Personalised Guidance. Trusted Experts.</h2>
               <p className="text-blue-100 text-lg mb-8">Get in touch with our expert counsellors today.</p>
               <div className="flex gap-4">
                  <div className="text-center"><div className="text-2xl font-bold mb-1">1000+</div><div className="text-sm opacity-80">Counselors</div></div>
                  <div className="w-px bg-blue-400 h-12"></div>
                  <div className="text-center"><div className="text-2xl font-bold mb-1">4.9/5</div><div className="text-sm opacity-80">Rating</div></div>
               </div>
            </div>
            <div className="bg-white text-zinc-900 p-8 rounded-2xl w-full max-w-md shadow-xl">
               <div className="space-y-4">
                   <Input placeholder="Name" />
                   <Input placeholder="Mobile Number" />
                   <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg">Request Callback</Button>
               </div>
            </div>
         </div>
      </section>
  );
}
