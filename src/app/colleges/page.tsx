'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COLLEGES } from '@/data/colleges';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Award, GraduationCap, Building2 } from 'lucide-react';

export default function CollegesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredColleges = COLLEGES.filter(college => 
    college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    college.overview.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 font-sans">
      
      {/* Header removed for global layout */}

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
           <div>
              <h1 className="text-3xl font-bold mb-2">Find Your Dream College</h1>
              <p className="text-muted-foreground">Explore 5000+ top institutes in India and abroad.</p>
           </div>
           
           <div className="relative w-full md:w-96">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
             <Input 
               placeholder="Search by name, city..." 
               className="pl-9 bg-white dark:bg-zinc-900"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {filteredColleges.map(college => (
             <Link href={`/colleges/${college.slug}`} key={college.id}>
               <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1 border-zinc-200 dark:border-zinc-800">
                 <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800">
                         NIRF Rank #{college.overview.nirf_rank}
                      </Badge>
                      <Badge variant="secondary">{college.overview.college_type}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors line-clamp-2">
                       {college.name}
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground gap-1">
                       <MapPin className="w-4 h-4" /> {college.overview.location}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                       <div className="bg-zinc-100 dark:bg-zinc-800/50 p-2 rounded">
                          <div className="text-muted-foreground text-xs flex items-center gap-1"><Award className="w-3 h-3" /> Avg Package</div>
                          <div className="font-semibold">₹{college.placement.avg_package_lpa} LPA</div>
                       </div>
                       <div className="bg-zinc-100 dark:bg-zinc-800/50 p-2 rounded">
                          <div className="text-muted-foreground text-xs flex items-center gap-1"><GraduationCap className="w-3 h-3" /> Fees/Year</div>
                          <div className="font-semibold">₹{(college.financials.fees_per_year/100000).toFixed(1)}L</div>
                       </div>
                    </div>
                 </CardContent>
                 <CardFooter className="border-t bg-zinc-50 dark:bg-zinc-900/50 p-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                       <Building2 className="w-3 h-3" /> 
                       <span>Est. {college.overview.established_year}</span>
                       <span className="mx-1">•</span>
                       <span>{college.overview.campus_size_acres} Acres</span>
                    </div>
                 </CardFooter>
               </Card>
             </Link>
           ))}
        </div>
      </div>
    </div>
  );
}
