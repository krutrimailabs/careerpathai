'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { COLLEGES } from '@/data/colleges';
import { CollegeCard } from '@/components/colleges/CollegeCard';
import { CollegeFilter } from '@/components/colleges/CollegeFilter';
import { ROIChart } from '@/components/colleges/ROIChart';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { MapPin, Home, Filter, ArrowUpRight } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function CityCollegesPage() {
  const params = useParams();
  const citySlug = params?.city as string;
  
  // Normalize params for matching (e.g. 'pune' -> 'Pune')
  const city = citySlug ? citySlug.charAt(0).toUpperCase() + citySlug.slice(1) : '';

  // Filter Colleges (Simple fuzzy match for demo)
  const cityColleges = COLLEGES.filter(c => 
    c.overview.location.toLowerCase().includes(city.toLowerCase())
  );

  // Quick stats for "Best For" collections
  const bestROI = [...cityColleges].sort((a,b) => (b.placement.avg_package_lpa/b.financials.fees_per_year) - (a.placement.avg_package_lpa/a.financials.fees_per_year)).slice(0, 3);

  // Mock SEO Data for Cities
  const cityStats: Record<string, { rent: string; travel: string; vibe: string; hangouts: string[] }> = {
      'Pune': { rent: '8,000', travel: 'PMPML/Metro', vibe: 'Student Hub, Oxford of East', hangouts: ['FC Road', 'Koregaon Park', 'Vetal Tekdi'] },
      'Mumbai': { rent: '15,000', travel: 'Local Train', vibe: 'Fast Paced, Opportunity Central', hangouts: ['Marine Drive', 'Colaba', 'Juhu'] },
      'Bangalore': { rent: '12,000', travel: 'Metro/Bus', vibe: 'Tech Capital, Startups', hangouts: ['Koramangala', 'Indiranagar', 'Cubbon Park'] },
      'Chennai': { rent: '7,000', travel: 'Bus/Metro', vibe: 'Cultural, Academic Core', hangouts: ['Marina Beach', 'Besant Nagar', 'T Nagar'] },
      'Delhi': { rent: '10,000', travel: 'Metro', vibe: 'Political Power, History', hangouts: ['CP', 'Hauz Khas', 'India Gate'] }
  };

  const currentStats = cityStats[city] || { rent: '10,000', travel: 'Public Transport', vibe: 'Growing Education Hub', hangouts: ['City Center', 'Main Market'] };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans pb-24">
        
        {/* 1. SEO HERO HEADER - Compact & Powerful */}
        <div className="bg-[#002147] text-white py-12 md:py-16 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex items-center gap-2 text-zinc-400 text-xs md:text-sm mb-4">
                    <span>Home</span> / <span>Colleges</span> / <span className="text-white font-bold">{city}</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-black mb-2 tracking-tight">Top Colleges in {city} 2024</h1>
                        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl">
                            Compare {cityColleges.length}+ Institutes on ROI, Placements & Fees.
                        </p>
                    </div>
                    
                    {/* Map Toggle (Mock) */}
                    <Button variant="secondary" className="hidden md:flex gap-2 font-bold">
                        <MapPin className="w-4 h-4" /> Map View
                    </Button>
                </div>
            </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                
                {/* 2. SIDEBAR FILTER (Hidden on Mobile, Sticky on Desktop) */}
                <aside className="hidden lg:block w-72 shrink-0">
                    <CollegeFilter />
                    
                    {/* City Context Card */}
                     <Card className="mt-6 shadow-md border-zinc-200 bg-white">
                         <CardHeader className="pb-3 border-b border-zinc-100 bg-blue-50/50">
                             <CardTitle className="flex items-center gap-2 text-[#002147] text-base">
                                 <Home className="w-4 h-4 text-blue-600" /> Living in {city}
                             </CardTitle>
                         </CardHeader>
                         <CardContent className="space-y-4 pt-4 text-sm">
                             <div className="flex justify-between items-center">
                                 <span className="text-zinc-500 font-medium">Avg Rent</span>
                                 <span className="font-bold text-zinc-900">₹{currentStats.rent}/mo</span>
                             </div>
                             <div className="flex justify-between items-center">
                                 <span className="text-zinc-500 font-medium">Commute</span>
                                 <span className="font-bold text-zinc-900">{currentStats.travel}</span>
                             </div>
                             <div>
                                 <p className="text-zinc-500 font-medium mb-2">Hangouts</p>
                                 <div className="flex flex-wrap gap-1">
                                     {currentStats.hangouts.map(h => (
                                         <Badge key={h} variant="secondary" className="bg-zinc-100 text-zinc-600 text-[10px]">{h}</Badge>
                                     ))}
                                 </div>
                             </div>
                         </CardContent>
                     </Card>
                </aside>

                {/* Mobile Filter Button */}
                <div className="lg:hidden mb-4">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="w-full gap-2 border-zinc-300 font-bold text-zinc-700">
                                <Filter className="w-4 h-4" /> Filters & Sort
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-0 w-[300px]">
                            <div className="p-4"><CollegeFilter /></div>
                        </SheetContent>
                    </Sheet>
                </div>
                
                {/* 3. MAIN CONTENT */}
                <main className="flex-1 min-w-0 space-y-8">
                    
                    {/* A. SCATTER CHART (ROI) */}
                    {cityColleges.length > 2 && (
                        <ROIChart colleges={cityColleges} />
                    )}

                    {/* B. COLLEGE LIST */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-[#002147]">
                                Based on your preferences ({cityColleges.length})
                            </h2>
                        </div>
                        <div className="space-y-4">
                             {cityColleges.length > 0 ? (
                                cityColleges.map(college => (
                                    <CollegeCard key={college.id} college={college} />
                                ))
                            ) : (
                                <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-zinc-200">
                                     <MapPin className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
                                    <h3 className="text-lg font-bold text-zinc-900">No colleges found</h3>
                                    <p className="text-zinc-500 mb-6">Try adjusting your filters.</p>
                                    <Button variant="outline" onClick={() => window.location.reload()}>Reset Filters</Button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* C. "BEST FOR" COLLECTIONS */}
                    {bestROI.length > 0 && (
                        <div className="pt-8 border-t border-zinc-200">
                            <h3 className="text-xl font-bold text-[#002147] mb-4 flex items-center gap-2">
                                <ArrowUpRight className="w-5 h-5 text-green-600" /> Best ROI Colleges in {city}
                            </h3>
                            <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
                                {bestROI.map(c => (
                                    <div key={c.id} className="min-w-[280px] bg-white border border-zinc-200 rounded-xl p-4 shadow-sm snap-start">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center font-bold text-[#002147]">{c.name[0]}</div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-bold text-sm truncate">{c.name}</h4>
                                                <p className="text-xs text-zinc-500">Avg Pkg: ₹{c.placement.avg_package_lpa} LPA</p>
                                            </div>
                                        </div>
                                        <Button size="sm" variant="secondary" className="w-full text-xs h-8">View Details</Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* D. CITY FAQ */}
                    <div className="pt-8 border-t border-zinc-200">
                        <h3 className="text-xl font-bold text-[#002147] mb-4">Frequently Asked Questions about {city}</h3>
                         <Accordion type="single" collapsible className="w-full space-y-3">
                             <AccordionItem value="item-1" className="border border-zinc-200 rounded-lg px-4 bg-white">
                                 <AccordionTrigger className="text-sm font-bold text-zinc-800 hover:no-underline">What is the average college fee in {city}?</AccordionTrigger>
                                 <AccordionContent className="text-sm text-zinc-600 pb-3">
                                     Engineering colleges in {city} typically range from ₹1.5L to ₹4L per year. Government aided institutes like COEP have lower fees compared to private universities.
                                 </AccordionContent>
                             </AccordionItem>
                             <AccordionItem value="item-2" className="border border-zinc-200 rounded-lg px-4 bg-white">
                                 <AccordionTrigger className="text-sm font-bold text-zinc-800 hover:no-underline">Is {city} safe for students?</AccordionTrigger>
                                 <AccordionContent className="text-sm text-zinc-600 pb-3">
                                     Yes, {city} is considered one of the safest cities for students in India. Areas like {currentStats.hangouts[0]} and {currentStats.hangouts[1]} are very student-friendly with active nightlife and police patrolling.
                                 </AccordionContent>
                             </AccordionItem>
                             <AccordionItem value="item-3" className="border border-zinc-200 rounded-lg px-4 bg-white">
                                 <AccordionTrigger className="text-sm font-bold text-zinc-800 hover:no-underline">Which are the top student areas?</AccordionTrigger>
                                 <AccordionContent className="text-sm text-zinc-600 pb-3">
                                     Most students prefer living near {currentStats.hangouts.join(', ')} due to proximity to coaching classes and colleges.
                                 </AccordionContent>
                             </AccordionItem>
                         </Accordion>
                    </div>

                </main>
            </div>
        </div>

        {/* 4. COMPARE FLOAT BAR (Sticky Bottom) */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-200 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] p-4 z-50 transform translate-y-0 transition-transform">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="font-bold text-[#002147] hidden md:inline">Compare Colleges</span>
                    <div className="flex -space-x-2">
                        {/* Placeholders for selected colleges */}
                        <div className="w-8 h-8 rounded-full bg-zinc-100 border-2 border-white flex items-center justify-center text-xs font-bold text-zinc-400">1</div>
                        <div className="w-8 h-8 rounded-full bg-zinc-100 border-2 border-white flex items-center justify-center text-xs font-bold text-zinc-400">2</div>
                        <div className="w-8 h-8 rounded-full bg-zinc-100 border-2 border-white flex items-center justify-center text-xs font-bold text-zinc-400">3</div>
                    </div>
                    <span className="text-sm text-zinc-500 ml-2">Select up to 3 to compare</span>
                </div>
                <Button className="bg-[#FF9900] hover:bg-orange-600 text-white font-bold px-6">
                    Compare Now
                </Button>
            </div>
        </div>

    </div>
  );
}
