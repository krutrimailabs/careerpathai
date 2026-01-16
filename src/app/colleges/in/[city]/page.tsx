'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { COLLEGES } from '@/data/colleges';
import { CollegeCard } from '@/components/colleges/CollegeCard';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Train, Home, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CityCollegesPage() {
  const params = useParams();
  const citySlug = params?.city as string;
  console.log('CityCollegesPage City:', citySlug);
  
  // Normalize params for matching (e.g. 'pune' -> 'Pune')
  const city = citySlug ? citySlug.charAt(0).toUpperCase() + citySlug.slice(1) : '';

  // Filter Colleges (Simple fuzzy match for demo)
  const cityColleges = COLLEGES.filter(c => 
    c.overview.location.toLowerCase().includes(city.toLowerCase())
  );

  // Mock SEO Data for Cities (In real app, this would be a DB)
  const cityStats: Record<string, { rent: string; travel: string; vibe: string; hangouts: string[] }> = {
      'Pune': { rent: '8,000', travel: 'PMPML/Metro', vibe: 'Student Hub, Oxford of East', hangouts: ['FC Road', 'Koregaon Park', 'Vetal Tekdi'] },
      'Mumbai': { rent: '15,000', travel: 'Local Train', vibe: 'Fast Paced, Opportunity Central', hangouts: ['Marine Drive', 'Colaba', 'Juhu'] },
      'Bangalore': { rent: '12,000', travel: 'Metro/Bus', vibe: 'Tech Capital, Startups', hangouts: ['Koramangala', 'Indiranagar', 'Cubbon Park'] },
      'Chennai': { rent: '7,000', travel: 'Bus/Metro', vibe: 'Cultural, Academic Core', hangouts: ['Marina Beach', 'Besant Nagar', 'T Nagar'] },
      'Delhi': { rent: '10,000', travel: 'Metro', vibe: 'Political Power, History', hangouts: ['CP', 'Hauz Khas', 'India Gate'] }
  };

  const currentStats = cityStats[city] || { rent: '10,000', travel: 'Public Transport', vibe: 'Growing Education Hub', hangouts: ['City Center', 'Main Market'] };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans pb-20">
        
        {/* 1. SEO HERO HEADER */}
        <div className="bg-[#002147] text-white py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center gap-2 text-zinc-400 text-sm mb-4">
                    <span>Home</span> / <span>Colleges</span> / <span className="text-white font-bold">{city}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Top Colleges in {city} 2024</h1>
                <p className="text-xl text-zinc-300 max-w-3xl">
                    Discover {cityColleges.length > 0 ? cityColleges.length : 'best'} institutes in {city}. 
                    Compare Fees, Placements, and check Admission Criteria for {city}&apos;s top colleges.
                </p>
            </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col lg:flex-row gap-8">
            
            {/* 2. MAIN CONTENT (College List) */}
            <div className="flex-1">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                        Showing {cityColleges.length} Colleges in {city}
                    </h2>
                    {/* Tags for Sub-Localities SEO */}
                    <div className="hidden md:flex gap-2">
                        {['North', 'South', 'Central'].map(zone => (
                            <Badge key={zone} variant="outline" className="cursor-pointer hover:bg-zinc-100">{zone} {city}</Badge>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    {cityColleges.length > 0 ? (
                        cityColleges.map(college => (
                            <CollegeCard key={college.id} college={college} />
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-zinc-300">
                             <MapPin className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-zinc-900">No colleges listed in {city} yet</h3>
                            <p className="text-zinc-500 mb-6">We are adding more institutes daily.</p>
                            <Button variant="outline" onClick={() => window.history.back()}>Go Back</Button>
                        </div>
                    )}
                </div>
            </div>

            {/* 3. GEO-CONTEXT SIDEBAR (The "Outrank" Feature) */}
            <div className="w-full lg:w-[350px] shrink-0 space-y-6">
                 
                 {/* Local Life Card */}
                 <Card className="shadow-lg border-zinc-200">
                     <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                         <CardTitle className="flex items-center gap-2 text-[#002147]">
                             <MapPin className="w-5 h-5 text-blue-600" /> Living in {city}
                         </CardTitle>
                     </CardHeader>
                     <CardContent className="space-y-4 pt-6">
                         <div className="flex items-center gap-4">
                             <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                 <Home className="w-5 h-5" />
                             </div>
                             <div>
                                 <p className="text-xs text-zinc-500 uppercase font-bold">Avg Rent (Shared)</p>
                                 <p className="font-bold text-zinc-900">₹{currentStats.rent}/mo</p>
                             </div>
                         </div>
                         <div className="flex items-center gap-4">
                             <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                                 <Train className="w-5 h-5" />
                             </div>
                             <div>
                                 <p className="text-xs text-zinc-500 uppercase font-bold">Best Commute</p>
                                 <p className="font-bold text-zinc-900">{currentStats.travel}</p>
                             </div>
                         </div>
                         <div className="pt-2">
                             <p className="text-xs text-zinc-500 uppercase font-bold mb-2">Popular Student Hangouts</p>
                             <div className="flex flex-wrap gap-2">
                                 {currentStats.hangouts.map(h => (
                                     <Badge key={h} variant="secondary" className="bg-zinc-100/80 text-zinc-600">{h}</Badge>
                                 ))}
                             </div>
                         </div>
                     </CardContent>
                 </Card>

                 {/* "Why Study Here" SEO Block */}
                 <div className="bg-indigo-900 text-white rounded-xl p-6 relative overflow-hidden">
                     <div className="relative z-10">
                         <h3 className="font-bold text-xl mb-2">Why Study in {city}?</h3>
                         <p className="text-indigo-200 text-sm mb-4">
                             {city} is known as the &quot;{currentStats.vibe}&quot;. It offers a perfect blend of high-quality education and vibrant campus life.
                         </p>
                         <Button variant="secondary" className="w-full font-bold text-indigo-900 gap-2">
                             Get {city} Student Guide <ArrowRight className="w-4 h-4" />
                         </Button>
                     </div>
                     {/* Decoration */}
                     <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-700/50 rounded-full blur-2xl"></div>
                 </div>

            </div>

        </div>
    </div>
  );
}
