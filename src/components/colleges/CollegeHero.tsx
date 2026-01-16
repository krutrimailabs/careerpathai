'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Trophy, Star, Download } from 'lucide-react';
import { College } from '@/types/college';

export function CollegeHero({ college }: { college: College }) {
  return (
    <div className="relative bg-white border-b border-zinc-200 overflow-hidden py-12">
        {/* Modern Premium Background Pattern */}
        <div className="absolute inset-0 z-0 bg-zinc-50">
             {/* CSS Grid Pattern */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
             {/* Radial Gradient for depth/focus */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#FF99001A,transparent)]"></div>
             <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_300px,#0021470D,transparent)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-row gap-4 md:gap-8 items-start">
                 {/* Logo Box */}
                 <div className="w-16 h-16 md:w-32 md:h-32 bg-white rounded-xl shadow-md border border-zinc-100 p-2 relative z-20 shrink-0">
                    <div className="w-full h-full bg-zinc-50 rounded-lg flex items-center justify-center border border-zinc-100">
                        <span className="text-2xl md:text-4xl font-black text-[#002147]">{college.name[0]}</span>
                    </div>
                 </div>

                 {/* Content */}
                 <div className="flex-1 w-full min-w-0">
                     {/* Badges - Left aligned */}
                     <div className="flex flex-wrap items-center justify-start gap-2 md:gap-3 mb-2 md:mb-3">
                         <Badge className="bg-[#002147] text-white hover:bg-blue-900 border-0 text-[10px] md:text-xs">
                             <Trophy className="w-3 h-3 mr-1" /> #{college.overview.nirf_rank}
                         </Badge>
                         <Badge variant="outline" className="text-zinc-700 border-zinc-300 bg-white shadow-sm text-[10px] md:text-xs">
                             {college.overview.college_type}
                         </Badge>
                         <div className="flex items-center gap-1 text-[10px] md:text-sm text-zinc-600 font-medium bg-white/50 px-2 py-1 rounded-md border border-zinc-200/50">
                             <MapPin className="w-3 h-3 text-zinc-400" /> {college.overview.location}
                         </div>
                     </div>

                     <h1 className="text-lg md:text-3xl lg:text-4xl font-bold mb-4 text-[#002147] leading-tight tracking-tight">
                         {college.name}
                     </h1>
                 </div>
            </div>
            {/* Stats Row - Flexbox Layout */}
            <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-0 my-6 bg-white border border-zinc-200 shadow-sm rounded-xl p-4 md:p-6">
                 
                 {/* Item 1 */}
                 <div className="w-[45%] md:w-auto md:flex-1 flex flex-col items-start px-2 md:px-6 md:border-r md:border-zinc-100">
                     <span className="text-zinc-500 text-[10px] md:text-xs uppercase font-bold mb-1 tracking-wider">Avg Package</span>
                     <span className="text-[#002147] font-black text-sm md:text-2xl">₹{college.placement.avg_package_lpa} LPA</span>
                 </div>

                 {/* Item 2 */}
                 <div className="w-[45%] md:w-auto md:flex-1 flex flex-col items-start px-2 md:px-6 md:border-r md:border-zinc-100 relative">
                     <div className="absolute left-0 top-1 bottom-1 w-px bg-zinc-100 md:hidden"></div>
                     <span className="text-zinc-500 text-[10px] md:text-xs uppercase font-bold mb-1 tracking-wider">Highest Pkg</span>
                     <span className="text-[#002147] font-black text-sm md:text-2xl">₹{college.placement.highest_package_lpa} LPA</span>
                 </div>

                 {/* Item 3 */}
                 <div className="w-[45%] md:w-auto md:flex-1 flex flex-col items-start px-2 md:px-6 md:border-r md:border-zinc-100 border-t border-zinc-100 md:border-t-0 mt-2 md:mt-0 pt-2 md:pt-0">
                     <span className="text-zinc-500 text-[10px] md:text-xs uppercase font-bold mb-1 tracking-wider">Total Fees</span>
                     <span className="text-green-600 font-black text-sm md:text-2xl">₹{(college.financials.fees_per_year/100000).toFixed(1)}L <span className="text-[10px] md:text-sm font-normal text-zinc-400">/yr</span></span>
                 </div>

                 {/* Item 4 */}
                 <div className="w-[45%] md:w-auto md:flex-1 flex flex-col items-start px-2 md:px-6 border-t border-zinc-100 md:border-t-0 mt-2 md:mt-0 pt-2 md:pt-0 relative">
                    <div className="absolute left-0 top-3 bottom-0 w-px bg-zinc-100 md:hidden"></div>
                    <span className="text-zinc-500 text-[10px] md:text-xs uppercase font-bold mb-1 tracking-wider">Reviews</span>
                    <div className="flex items-center gap-1 font-bold text-orange-500 text-sm md:text-2xl">
                        {college.reviews.average_rating} <Star className="w-3 h-3 md:w-5 md:h-5 fill-current" />
                    </div>
                 </div>
            </div>

                     {/* CTA Buttons - Mobile Optimized */}
                     <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                         <Button className="flex-1 sm:flex-none bg-[#FF9900] hover:bg-orange-600 text-white font-bold h-11 md:h-12 px-8 text-sm md:text-base shadow-lg shadow-orange-500/20 transition-all active:scale-95">
                             Check Eligibility
                         </Button>
                         <Button variant="outline" className="flex-1 sm:flex-none border-[#002147] text-[#002147] hover:bg-blue-50 font-bold h-11 md:h-12 px-6 gap-2 bg-white">
                             <Download className="w-4 h-4" /> <span className="hidden sm:inline">Download</span> Brochure
                         </Button>
                     </div>
        </div>
    </div>
  );
}
