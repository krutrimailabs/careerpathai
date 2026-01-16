'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Filter } from 'lucide-react';
import { UNIVERSITIES } from '@/data/study-abroad';

export default function UniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUniversities = UNIVERSITIES.filter(uni => 
    uni.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    uni.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
       <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
             <h1 className="text-3xl font-bold mb-2">Find Universities</h1>
             <p className="text-zinc-500">Search top global institutions by ranking, fees, or location.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
             <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <Input 
                   placeholder="Search by name or country..." 
                   className="pl-10"
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>
             <Button variant="outline"><Filter className="w-4 h-4 mr-2" /> Filters</Button>
          </div>
       </div>

       <div className="grid gap-6">
          {filteredUniversities.length > 0 ? (
             filteredUniversities.map((uni) => (
                <Card key={uni.id} className="hover:border-blue-300 transition-colors">
                   <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                         {/* Logo Placeholder */}
                         <div className="w-16 h-16 bg-zinc-100 rounded-lg flex items-center justify-center font-bold text-zinc-400 text-xl shrink-0">
                            {uni.logo}
                         </div>

                         <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                               <h3 className="text-xl font-bold text-zinc-900">{uni.name}</h3>
                               <Badge className={uni.rank <= 10 ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-600 hover:bg-blue-700'}>
                                  Global Rank #{uni.rank}
                               </Badge>
                            </div>
                            
                            <div className="flex items-center gap-2 text-zinc-500 mb-4">
                               <MapPin className="w-4 h-4" /> {uni.country}
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
                               <div>
                                  <div className="text-xs text-zinc-500 mb-1">Tuition Fees</div>
                                  <div className="font-semibold">{uni.fees}</div>
                               </div>
                               <div>
                                  <div className="text-xs text-zinc-500 mb-1">Acceptance Rate</div>
                                  <div className="font-semibold">{uni.acceptance}</div>
                               </div>
                            </div>
                         </div>

                         <div className="w-full md:w-auto flex flex-col gap-2 pt-2">
                            <Button>View Details</Button>
                            <Button variant="outline">Compare</Button>
                         </div>
                      </div>
                   </CardContent>
                </Card>
             ))
          ) : (
             <div className="text-center py-20 bg-zinc-50 rounded-xl">
                <h3 className="text-lg font-bold text-zinc-900">No universities found</h3>
                <p className="text-zinc-500">Try searching for USA or Oxford</p>
             </div>
          )}
       </div>
    </div>
  );
}
