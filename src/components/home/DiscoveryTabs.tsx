'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function DiscoveryTabs() {
  return (
      <section className="container mx-auto px-4 md:px-6 mb-20">
         <h2 className="text-3xl font-bold mb-8">Find The Perfect College For You</h2>
         <Tabs defaultValue="featured">
             <TabsList className="mb-8 w-full justify-start overflow-x-auto h-auto p-1 bg-transparent border-b rounded-none">
                <TabsTrigger value="featured" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-6 py-3">Featured Colleges</TabsTrigger>
                <TabsTrigger value="exams" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-6 py-3">Important Exams</TabsTrigger>
                <TabsTrigger value="states" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-6 py-3">Top States</TabsTrigger>
             </TabsList>
             
             <TabsContent value="featured" className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                <CollegeListItem name="Parul University" location="Vadodara" roi="High" safety={9} />
                <CollegeListItem name="Chandigarh University" location="Chandigarh" roi="Med" safety={8} />
                <CollegeListItem name="Lovely Professional University" location="Jalandhar" roi="High" safety={9} />
                <CollegeListItem name="K.R. Mangalam University" location="Gurugram" roi="Med" safety={8} />
             </TabsContent>
         </Tabs>
      </section>
  );
}

function CollegeListItem({ name, location, roi, safety }: { name: string, location: string, roi?: 'High'|'Med', safety?: number }) {
    return (
        <div className="group cursor-pointer">
            <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-3 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                   {roi === 'High' && <div className="bg-green-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">High ROI</div>}
                   {safety && safety >= 9 && <div className="bg-blue-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow flex items-center gap-1">🛡️ {safety}/10 Safety</div>}
                </div>
            </div>
            <h4 className="font-bold group-hover:text-blue-600 transition-colors truncate">{name}</h4>
            <p className="text-sm text-zinc-500">{location}</p>
        </div>
    )
}
