'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CAREERS, CATEGORIES } from '@/data/careers';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Search, MapPin, TrendingUp, Bookmark } from 'lucide-react';

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState([0]);

  const filteredCareers = CAREERS.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(career.category);
    // Simple salary filter logic for demo: checks if max salary is above the slider value
    const matchesSalary = career.financials.starting_salary.max >= salaryRange[0] * 100000;
     
    return matchesSearch && matchesCategory && matchesSalary;
  });

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 font-sans">
      
      {/* Header removed for global layout */}

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 shrink-0 space-y-8">
            <div>
               <h3 className="font-semibold mb-4 text-lg">Categories</h3>
               <div className="space-y-2">
                 {CATEGORIES.map(cat => (
                   <label key={cat} className="flex items-center gap-2 text-sm cursor-pointer hover:text-blue-600">
                      <input 
                        type="checkbox" 
                        className="rounded border-zinc-300"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                      />
                      {cat}
                   </label>
                 ))}
               </div>
            </div>

            <div>
               <h3 className="font-semibold mb-4 text-lg">Min Salary (LPA)</h3>
               <div className="px-2">
                 <Slider 
                   className="py-4"
                   defaultValue={[0]} 
                   max={50} 
                   step={1} 
                   onValueChange={setSalaryRange}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>0L</span>
                    <span>{salaryRange[0]}L+</span>
                    <span>50L</span>
                  </div>
               </div>
            </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
           {/* Search Bar */}
           <div className="relative mb-8">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
             <Input 
               placeholder="Search for careers (e.g. 'Software', 'Doctor')..." 
               className="pl-10 h-12 text-lg bg-white dark:bg-zinc-900"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
           </div>

           {/* Results Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCareers.map(career => (
                <Link href={`/careers/${career.slug}`} key={career.id}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1 border-zinc-200 dark:border-zinc-800">
                    <CardHeader>
                       <div className="flex justify-between items-start">
                         <Badge variant="outline" className="mb-2">{career.category}</Badge>
                         <button className="text-zinc-400 hover:text-blue-600">
                           <Bookmark className="h-5 w-5" />
                         </button>
                       </div>
                       <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{career.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {career.short_description}
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs">
                         <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-200">
                           <TrendingUp className="w-3 h-3 mr-1" /> {career.job_market.demand_trend} Demand
                         </Badge>
                         <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200">
                            ₹{(career.financials.starting_salary.min / 100000).toFixed(1)}L - {(career.financials.starting_salary.max / 100000).toFixed(1)}L
                         </Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="text-xs text-muted-foreground border-t bg-zinc-50 dark:bg-zinc-900/50 p-3 flex justify-between">
                       <span className="flex items-center gap-1">
                         <MapPin className="w-3 h-3" /> {career.job_market.top_hiring_cities[0]}
                       </span>
                       <span className="font-medium text-indigo-600">View Path →</span>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
           </div>
           
           {filteredCareers.length === 0 && (
             <div className="text-center py-20 text-muted-foreground">
               <p className="text-lg">No careers found matching your criteria.</p>
               <Button variant="link" onClick={() => {setSearchTerm(''); setSelectedCategories([]); setSalaryRange([0])}}>Clear filters</Button>
             </div>
           )}
        </main>
      </div>
    </div>
  );
}
