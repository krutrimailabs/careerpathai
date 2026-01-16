'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Search, Calendar, IndianRupee, Filter } from "lucide-react";
import { scholarships } from "@/data/scholarships";

export default function ScholarshipsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredScholarships = scholarships.filter(s => {
      const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.provider.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filter === "All" || s.category === filter;
      return matchesSearch && matchesFilter;
  });

  return (
    <div className="container mx-auto px-4 py-8">
       <div className="mb-8">
           <h1 className="text-3xl font-bold mb-2">Find Scholarships</h1>
           <p className="text-zinc-500">Discover financial aid opportunities tailored for you.</p>
       </div>

       {/* Search & Filter */}
       <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
             <Search className="absolute left-3 top-3 w-4 h-4 text-zinc-400" />
             <Input 
                placeholder="Search by name or provider..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
             />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
              {['All', 'Merit', 'Means', 'Sports'].map(cat => (
                  <Button 
                    key={cat} 
                    variant={filter === cat ? "default" : "outline"}
                    onClick={() => setFilter(cat)}
                    className="whitespace-nowrap"
                  >
                     {cat}
                  </Button>
              ))}
          </div>
       </div>

       {/* List Grid */}
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {filteredScholarships.map(s => (
               <Link href={`/scholarships/${s.slug}`} key={s.slug}>
                   <Card className="h-full hover:shadow-md transition-shadow cursor-pointer border-zinc-200 dark:border-zinc-800">
                       <CardHeader>
                           <div className="flex justify-between items-start mb-2">
                               <Badge variant="secondary" className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">{s.category}</Badge>
                               <span className="text-xs text-zinc-400 font-mono">{s.provider}</span>
                           </div>
                           <CardTitle className="text-lg leading-snug">{s.name}</CardTitle>
                       </CardHeader>
                       <CardContent>
                           <div className="space-y-2 text-sm">
                               <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                                   <IndianRupee className="w-4 h-4" /> <span>{s.amount}</span>
                               </div>
                               <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                                   <Calendar className="w-4 h-4" /> <span>Deadline: {s.deadline}</span>
                               </div>
                           </div>
                       </CardContent>
                       <CardFooter>
                           <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20">View Details</Button>
                       </CardFooter>
                   </Card>
               </Link>
           ))}
       </div>
    </div>
  );
}
