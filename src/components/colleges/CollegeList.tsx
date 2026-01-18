'use client';

import React, { useState } from 'react';
import { College } from '@/types/college';
import { CollegeCard } from '@/components/colleges/CollegeCard';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface CollegeListProps {
  initialColleges: College[];
}

export function CollegeList({ initialColleges }: CollegeListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rank');

  // Basic client-side search filtering
  // In a real app with pagination, this would trigger server actions or router.push
  const filteredColleges = initialColleges.filter(college => 
    college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    college.overview.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedColleges = [...filteredColleges].sort((a, b) => {
      if (sortBy === 'rank') return a.overview.nirf_rank - b.overview.nirf_rank;
      if (sortBy === 'fees_low') return a.financials.fees_per_year - b.financials.fees_per_year;
      if (sortBy === 'fees_high') return b.financials.fees_per_year - a.financials.fees_per_year;
      return 0;
  });

  return (
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
                <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full sm:w-[180px] h-10 border-zinc-200 bg-zinc-50">
                        <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="rank">Sort: Ranking</SelectItem>
                        <SelectItem value="fees_low">Fees: Low to High</SelectItem>
                        <SelectItem value="fees_high">Fees: High to Low</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>

        {/* College List */}
        <div className="space-y-4">
            {sortedColleges.length > 0 ? (
                sortedColleges.map(college => (
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
  );
}
