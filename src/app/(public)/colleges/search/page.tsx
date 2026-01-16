import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center mb-12">
         <h1 className="text-3xl font-bold mb-4">Find Your Dream College</h1>
         <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
             <Input className="pl-10 h-12 text-lg" placeholder="Search by name, city, or course..." />
         </div>
      </div>
    </div>
  );
}
