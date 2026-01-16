'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { College } from '@/types/college';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Trophy, Download, ArrowRight, Star, Heart } from 'lucide-react';

interface CollegeCardProps {
  college: College;
}

export function CollegeCard({ college }: CollegeCardProps) {
  return (
    <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 md:flex flex-row md:h-64 mb-6">
      
      {/* 1. Image Section (Left) */}
      <div className="relative md:w-72 h-48 md:h-full shrink-0 overflow-hidden">
        <Image 
           src={`https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} // Placeholder for now, real data should have images
           alt={college.name}
           fill
           className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
        
        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
           <Badge className="bg-white/90 text-zinc-900 backdrop-blur-sm shadow-sm pointer-events-none hover:bg-white">
              <Trophy className="w-3 h-3 mr-1 text-yellow-600" /> #{college.overview.nirf_rank} NIRF
           </Badge>
        </div>
        <button className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors">
            <Heart className="w-4 h-4" />
        </button>

        {/* Mobile Title Overlay */}
        <div className="absolute bottom-3 left-3 right-3 md:hidden">
            <h3 className="text-white font-bold text-lg line-clamp-1">{college.name}</h3>
            <p className="text-zinc-200 text-xs flex items-center gap-1"><MapPin className="w-3 h-3"/> {college.overview.location}</p>
        </div>
      </div>

      {/* 2. Content Section (Middle & Right) */}
      <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
        
        {/* Header */}
        <div className="hidden md:block">
            <div className="flex justify-between items-start">
                <div>
                   <h3 className="text-xl font-bold hover:text-blue-600 transition-colors cursor-pointer line-clamp-1">
                      <Link href={`/colleges/${college.slug}`}>{college.name}</Link>
                   </h3>
                   <div className="flex items-center gap-4 text-sm text-zinc-500 mt-1">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {college.overview.location}</span>
                      <span className="w-1 h-1 bg-zinc-300 rounded-full"></span>
                      <span>Est. {college.overview.established_year}</span>
                      <span className="w-1 h-1 bg-zinc-300 rounded-full"></span>
                      <span className="text-green-600 font-medium">Approved by UGC</span>
                   </div>
                </div>
                <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded text-sm font-bold">
                    <span>{college.reviews.average_rating}</span> <Star className="w-4 h-4 fill-current" />
                </div>
            </div>
            
            {/* Tags Strip */}
            <div className="flex gap-2 mt-3">
                 <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100">Most Popular</Badge>
                 <Badge variant="outline" className="text-zinc-500">Best ROI</Badge>
                 <Badge variant="outline" className="text-zinc-500">{college.overview.college_type}</Badge>
            </div>
        </div>

        {/* Data Grid */}
        <div className="grid grid-cols-3 gap-4 py-4 md:py-2 bg-zinc-50/50 dark:bg-zinc-800/30 rounded-xl md:bg-transparent md:dark:bg-transparent border md:border-0 border-zinc-100 dark:border-zinc-800 mt-4 md:mt-0">
             <div className="px-4 md:px-0 text-center md:text-left border-r md:border-r-0 border-zinc-200 last:border-0">
                 <p className="text-xs text-zinc-500 uppercase font-semibold">Avg Package</p>
                 <p className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white">₹{college.placement.avg_package_lpa} LPA</p>
             </div>
             <div className="px-4 md:px-0 text-center md:text-left border-r md:border-r-0 border-zinc-200 last:border-0">
                 <p className="text-xs text-zinc-500 uppercase font-semibold">Total Fees</p>
                 <p className="text-lg md:text-xl font-bold text-green-600">₹{(college.financials.fees_per_year/100000).toFixed(1)}L <span className="text-xs text-zinc-400 font-normal">/yr</span></p>
             </div>
             <div className="px-4 md:px-0 text-center md:text-left">
                 <p className="text-xs text-zinc-500 uppercase font-semibold">Exams</p>
                 <p className="text-sm md:text-base font-medium text-zinc-700 dark:text-zinc-300 truncate">
                     {college.admission.exams_accepted.slice(0,2).join(', ')}
                 </p>
             </div>
        </div>

        {/* Action Strip */}
        <div className="flex gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-auto">
             <Button variant="outline" className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50 font-semibold gap-2">
                 <Download className="w-4 h-4" /> Brochure
             </Button>
             <Link href={`/colleges/${college.slug}`} className="flex-1">
                <Button className="w-full bg-[#FF9900] hover:bg-orange-600 text-white font-bold gap-2">
                    Apply Now <ArrowRight className="w-4 h-4" />
                </Button>
             </Link>
        </div>

      </div>
    </div>
  );
}
