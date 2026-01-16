'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Briefcase, X, TrendingUp, DollarSign, GraduationCap } from 'lucide-react';
import { CAREERS } from '@/data/careers';

export default function CompareCareersPage() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  
  // Limit to 3 careers for comparison
  const handleSelect = (id: string) => {
    if (selectedIds.includes(id)) return;
    if (selectedIds.length >= 3) return;
    setSelectedIds([...selectedIds, id]);
  };

  const removeId = (id: string) => {
    setSelectedIds(selectedIds.filter(i => i !== id));
  };

  const selectedCareers = CAREERS.filter(c => selectedIds.includes(c.id));

  return (
    <div className="min-h-screen bg-zinc-50 py-12">
      <div className="container mx-auto px-4">
         <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Compare Careers</h1>
            <p className="text-zinc-500 max-w-2xl mx-auto">
               Select up to 3 careers to see a side-by-side comparison of salary, growth, and requirements.
            </p>
         </div>

         {/* Selector */}
         <div className="max-w-md mx-auto mb-16">
            <Select onValueChange={handleSelect} disabled={selectedIds.length >= 3}>
               <SelectTrigger className="w-full h-12 bg-white">
                  <SelectValue placeholder={selectedIds.length >= 3 ? "Max 3 careers selected" : "Add a career to compare..."} />
               </SelectTrigger>
               <SelectContent>
                  {CAREERS.map(career => (
                     <SelectItem key={career.id} value={career.id} disabled={selectedIds.includes(career.id)}>
                        {career.title}
                     </SelectItem>
                  ))}
               </SelectContent>
            </Select>
            <p className="text-xs text-center text-zinc-400 mt-2">
               {selectedIds.length}/3 selected
            </p>
         </div>

         {/* Comparison Grid */}
         {selectedCareers.length > 0 ? (
            <div className="overflow-x-auto pb-8">
               <div className="min-w-[800px] grid" style={{ gridTemplateColumns: `repeat(${selectedCareers.length}, 1fr)` }}>
                  {selectedCareers.map(career => (
                     <div key={career.id} className="px-4 border-r last:border-r-0 border-zinc-200">
                        {/* Header Card */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border mb-8 relative">
                           <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-6 w-6 text-zinc-400 hover:text-red-500" onClick={() => removeId(career.id)}>
                              <X className="w-4 h-4" />
                           </Button>
                           <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 mx-auto">
                              <Briefcase className="w-6 h-6" />
                           </div>
                           <h3 className="text-xl font-bold text-center mb-1">{career.title}</h3>
                           <div className="text-center text-zinc-500 text-sm">{career.category}</div>
                        </div>

                        {/* Metric: Salary */}
                        <div className="mb-8 text-center">
                           <div className="flex items-center justify-center gap-2 text-zinc-400 mb-2 uppercase text-xs font-bold tracking-wider">
                              <DollarSign className="w-4 h-4" /> Avg Salary (India)
                           </div>
                           <div className="text-xl font-bold text-zinc-800">
                              ₹{(career.financials.starting_salary.min / 100000).toFixed(1)}L - {(career.financials.starting_salary.max / 100000).toFixed(1)}L
                           </div>
                        </div>

                        {/* Metric: Growth */}
                        <div className="mb-8 text-center">
                           <div className="flex items-center justify-center gap-2 text-zinc-400 mb-2 uppercase text-xs font-bold tracking-wider">
                              <TrendingUp className="w-4 h-4" /> 5-Year Growth
                           </div>
                           <div className="text-xl font-bold text-green-600">
                              +{career.financials.five_year_growth_percentage}%
                           </div>
                        </div>

                         {/* Metric: Education */}
                         <div className="mb-8 text-center">
                           <div className="flex items-center justify-center gap-2 text-zinc-400 mb-2 uppercase text-xs font-bold tracking-wider">
                              <GraduationCap className="w-4 h-4" /> Degrees
                           </div>
                           <ul className="text-sm text-zinc-700 space-y-1">
                              {career.path_to_become.degree_requirements.slice(0, 3).map((deg, i) => (
                                 <li key={i}>{deg}</li>
                              ))}
                           </ul>
                        </div>

                        {/* Metric: Top Skills */}
                        <div className="mb-8 text-center">
                           <div className="text-zinc-400 mb-2 uppercase text-xs font-bold tracking-wider">
                              Top Skills
                           </div>
                           <div className="flex flex-wrap justify-center gap-2">
                              {career.skills.technical_skills.slice(0, 4).map((skill, i) => (
                                 <Badge key={i} variant="secondary" className="bg-zinc-100">
                                    {skill}
                                 </Badge>
                              ))}
                           </div>
                        </div>

                        {/* Metric: Outlook */}
                         <div className="mb-8 text-center">
                           <div className="text-zinc-400 mb-2 uppercase text-xs font-bold tracking-wider">
                              2030 Outlook
                           </div>
                           <p className="text-sm text-zinc-600 leading-relaxed px-4">
                              {career.overview.future_outlook_2030}
                           </p>
                        </div>

                     </div>
                  ))}
               </div>
            </div>
         ) : (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-zinc-300">
               <Briefcase className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
               <h3 className="text-xl font-bold text-zinc-400">No careers selected</h3>
               <p className="text-zinc-400">Select careers from the dropdown to compare.</p>
            </div>
         )}
      </div>
    </div>
  );
}
