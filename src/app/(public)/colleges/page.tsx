'use client';

'use client';

import React, { useState } from 'react';
import { COLLEGES } from '@/data/colleges';
import { CollegeCard } from '@/components/colleges/CollegeCard';
import { CollegeFilter } from '@/components/colleges/CollegeFilter';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function CollegesPage() {
  const [searchTerm, setSearchTerm] = useState('');


  const filteredColleges = COLLEGES.filter(college => 
    college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    college.overview.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-50/50 dark:bg-black text-zinc-900 dark:text-zinc-50 font-sans pb-20">
      
      {/* 1. Page Header (SEO & Breadcrumbs) */}
      <div className="bg-white border-b border-zinc-200 py-8">
          <div className="container mx-auto px-4 md:px-6">
              <div className="text-sm text-zinc-500 mb-4">Home  /  Colleges  /  <span className="text-zinc-900 font-semibold">Engineering</span></div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#002147] mb-3">Top Colleges in India 2024</h1>
              <p className="text-zinc-600 max-w-3xl">
                  List of Top 5000+ Colleges in India based on 2024 Ranking. Check Fees, Placement, Cutoff & Eligibility.
              </p>
          </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* 2. Sidebar Filters (Desktop) */}
            <div className="hidden lg:block">
                <CollegeFilter />
            </div>

            {/* 3. Main Content Area */}
            <div className="flex-1">
                {/* Search & Sort Toolbar */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6 bg-white p-4 rounded-xl border border-zinc-200 shadow-sm sticky top-20 z-10 lg:static">
                    <div className="relative w-full sm:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                        <Input 
                            placeholder="Search colleges, exams..." 
                            className="pl-10 h-10 border-zinc-200 bg-zinc-50"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-3 w-full sm:w-auto">
                        <Button variant="outline" className="lg:hidden flex-1 border-zinc-300 gap-2 text-zinc-700">
                             <SlidersHorizontal className="w-4 h-4" /> Filters
                        </Button>
                        <Select defaultValue="rank">
                            <SelectTrigger className="w-full sm:w-[180px] h-10 border-zinc-200 bg-zinc-50">
                                <SelectValue placeholder="Sort By" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="rank">Sort: Ranking</SelectItem>
                                <SelectItem value="popularity">Sort: Popularity</SelectItem>
                                <SelectItem value="fees_low">Fees: Low to High</SelectItem>
                                <SelectItem value="fees_high">Fees: High to Low</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* College List */}
                <div className="space-y-4">
                    {filteredColleges.length > 0 ? (
                        filteredColleges.map(college => (
                            <CollegeCard key={college.id} college={college} />
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-zinc-300">
                            <h3 className="text-lg font-bold text-zinc-900">No colleges found</h3>
                            <p className="text-zinc-500">Try adjusting your filters or search term.</p>
                            <Button variant="link" onClick={() => setSearchTerm('')} className="text-blue-600">Clear Search</Button>
                        </div>
                    )}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}
