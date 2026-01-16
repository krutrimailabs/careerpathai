'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Search, MapPin, Filter, Trophy } from 'lucide-react';
import { COLLEGES } from '@/data/colleges';

export default function DeepSearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  // Get unique cities
  const cities = Array.from(new Set(COLLEGES.map(c => c.overview.location.split(',')[0].trim())));

  const handleCityChange = (city: string) => {
    setSelectedCities(prev => 
      prev.includes(city) ? prev.filter(c => c !== city) : [...prev, city]
    );
  };

  const filteredColleges = COLLEGES.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          college.academics.courses_offered.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCity = selectedCities.length === 0 || 
                        selectedCities.includes(college.overview.location.split(',')[0].trim());
    
    return matchesSearch && matchesCity;
  });

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
         <div className="container mx-auto px-4 py-4 flex gap-4 items-center">
            <div className="relative flex-1 max-w-2xl">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
               <Input 
                  placeholder="Search colleges, courses, or keywords..." 
                  className="pl-10 bg-zinc-50 border-zinc-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
               />
            </div>
            <Button variant="outline"><Filter className="w-4 h-4 mr-2" /> More Filters</Button>
         </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex items-start gap-8">
         {/* Sidebar Filters */}
         <div className="w-64 flex-shrink-0 hidden md:block space-y-6">
            <div>
               <h3 className="font-bold mb-4">Location</h3>
               <div className="space-y-2">
                  {cities.map(city => (
                     <div key={city} className="flex items-center space-x-2">
                        <Checkbox 
                           id={city} 
                           checked={selectedCities.includes(city)}
                           onCheckedChange={() => handleCityChange(city)}
                        />
                        <Label htmlFor={city} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                           {city}
                        </Label>
                     </div>
                  ))}
               </div>
            </div>

            <div>
               <h3 className="font-bold mb-4">Fees Range</h3>
               <div className="space-y-2 text-sm text-zinc-500">
                  <div className="flex items-center space-x-2"><Checkbox id="f1" /> <Label htmlFor="f1">&lt; 1 Lakh</Label></div>
                  <div className="flex items-center space-x-2"><Checkbox id="f2" /> <Label htmlFor="f2">1 - 5 Lakhs</Label></div>
                  <div className="flex items-center space-x-2"><Checkbox id="f3" /> <Label htmlFor="f3">&gt; 5 Lakhs</Label></div>
               </div>
            </div>
         </div>

         {/* Results */}
         <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
               <h2 className="text-xl font-bold">{filteredColleges.length} Colleges Found</h2>
               <div className="text-sm text-zinc-500">Sorted by: <span className="text-zinc-900 font-medium">Relevance</span></div>
            </div>

            <div className="space-y-4">
               {filteredColleges.map(college => (
                  <Card key={college.id} className="hover:shadow-md transition-shadow">
                     <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                           <div className="flex-1">
                               <Link href={`/colleges/${college.id}`}>
                                 <h3 className="text-xl font-bold text-blue-600 hover:underline mb-2">{college.name}</h3>
                               </Link>
                               <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                                 <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {college.overview.location}</span>
                                 <span className="flex items-center gap-1"><Trophy className="w-3 h-3" /> Rank {college.overview.nirf_rank}</span>
                               </div>
                               <div className="flex flex-wrap gap-2 mb-4">
                                 {college.academics.specializations.slice(0, 4).map(spec => (
                                    <Badge key={spec} variant="secondary" className="bg-zinc-100 text-zinc-600 font-normal">
                                       {spec}
                                    </Badge>
                                 ))}
                               </div>
                               <div className="grid grid-cols-3 gap-4 border-t pt-4">
                                 <div>
                                    <p className="text-xs text-zinc-500 uppercase font-bold">Avg Package</p>
                                    <p className="font-bold text-green-600">₹{college.placement.avg_package_lpa} LPA</p>
                                 </div>
                                 <div>
                                    <p className="text-xs text-zinc-500 uppercase font-bold">Fees</p>
                                    <p className="font-bold">₹{(college.financials.fees_per_year/1000).toFixed(0)}k/yr</p>
                                 </div>
                                 <div>
                                     <p className="text-xs text-zinc-500 uppercase font-bold">Rating</p>
                                     <p className="font-bold">★ {college.reviews.average_rating}/5</p>
                                 </div>
                               </div>
                           </div>
                           <div className="flex flex-col justify-between items-end gap-4 min-w-[140px]">
                              <Link href={`/colleges/${college.id}`} className="w-full">
                                 <Button className="w-full">View Details</Button>
                              </Link>
                              <Button variant="outline" className="w-full">Compare</Button>
                           </div>
                        </div>
                     </CardContent>
                  </Card>
               ))}
               
               {filteredColleges.length === 0 && (
                  <div className="text-center py-20 bg-white rounded-xl border">
                     <p className="text-zinc-500">No colleges match your criteria.</p>
                     <Button variant="link" onClick={() => { setSearchTerm(''); setSelectedCities([]); }}>Clear Filters</Button>
                  </div>
               )}
            </div>
         </div>
      </div>
    </div>
  );
}
