'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { COLLEGES } from '@/data/colleges';
import { CollegeHero } from '@/components/colleges/CollegeHero';
import { CollegeNav } from '@/components/colleges/CollegeNav';
import { CollegeSidebar } from '@/components/colleges/CollegeSidebar';
import { Check } from 'lucide-react';

export default function CollegeProfileClient() {
  const { slug } = useParams(); 
  const college = COLLEGES.find(c => c.slug === slug);

  if (!college) {
    return <div className="p-20 text-center text-xl font-bold">College not found</div>;
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans pb-20">
       
       <CollegeHero college={college} />
       <CollegeNav />

       <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
             
             {/* LEFT CONTENT COLUMN */}
             <div className="flex-1 space-y-8 min-w-0">
                
                {/* 1. OVERVIEW */}
                <section id="overview" className="scroll-mt-32 space-y-6">
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200 shadow-sm">
                        <h2 className="text-2xl font-bold text-[#002147] mb-4">About {college.name}</h2>
                        <div className="prose max-w-none text-zinc-600">
                            <p>{college.short_description}</p>
                            <p className="mt-4">
                                Established in <b>{college.overview.established_year}</b>, {college.name} is a premier {college.overview.college_type} institute located in {college.overview.location}. 
                                Spanning over <b>{college.overview.campus_size_acres} acres</b>, it offers world-class infrastructure and is accredited with <b>Grade {college.overview.naac_grade}</b> by NAAC.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            <EventBox label="Established" value={college.overview.established_year} />
                            <EventBox label="Institute Type" value={college.overview.college_type} />
                            <EventBox label="Campus Area" value={`${college.overview.campus_size_acres} Acres`} />
                            <EventBox label="Approvals" value="UGC, AICTE" />
                        </div>
                    </div>
                </section>

                {/* 2. COURSES */}
                <section id="courses" className="scroll-mt-32 space-y-6">
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200 shadow-sm">
                         <h2 className="text-2xl font-bold text-[#002147] mb-6">Courses & Fee Structure</h2>
                         <div className="overflow-x-auto">
                             <table className="w-full text-left text-sm">
                                 <thead className="bg-[#002147] text-white">
                                     <tr>
                                         <th className="p-4 rounded-tl-lg">Course</th>
                                         <th className="p-4">Fees (1st Year)</th>
                                         <th className="p-4 rounded-tr-lg">Eligibility</th>
                                     </tr>
                                 </thead>
                                 <tbody className="divide-y divide-zinc-200">
                                     {college.academics.courses_offered.map((course) => (
                                         <tr key={course} className="hover:bg-zinc-50">
                                             <td className="p-4 font-bold text-[#002147]">{course}</td>
                                             <td className="p-4 font-medium text-zinc-600">₹{(college.financials.fees_per_year/100000).toFixed(2)} Lakhs</td>
                                             <td className="p-4 text-zinc-500">10+2 with 75% + {college.admission.exams_accepted[0]}</td>
                                         </tr>
                                     ))}
                                 </tbody>
                             </table>
                         </div>
                    </div>
                </section>

                {/* 3. ADMISSION */}
                 <section id="admission" className="scroll-mt-32 space-y-6">
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200 shadow-sm">
                        <h2 className="text-2xl font-bold text-[#002147] mb-6">Admission Process 2024</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                             <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                 <h3 className="font-bold text-blue-800 mb-3">Eligibility Criteria</h3>
                                 <ul className="space-y-3">
                                     <li className="flex items-start gap-2 text-sm text-blue-900">
                                         <Check className="w-4 h-4 mt-0.5 text-blue-600" />
                                         <span>Passed 10+2 with Physics, Chemistry, Maths looking for {college.name}</span>
                                     </li>
                                     <li className="flex items-start gap-2 text-sm text-blue-900">
                                         <Check className="w-4 h-4 mt-0.5 text-blue-600" />
                                         <span>Valid score in <b>{college.admission.exams_accepted.join(' or ')}</b></span>
                                     </li>
                                 </ul>
                             </div>
                             <div>
                                 <h3 className="font-bold text-zinc-900 mb-3">Application Steps</h3>
                                 <ol className="relative border-l border-zinc-200 ml-3 space-y-6">
                                     {college.admission.application_process.map((step, i) => (
                                         <li key={i} className="ml-6">
                                             <span className="absolute flex items-center justify-center w-6 h-6 bg-zinc-100 rounded-full -left-3 ring-4 ring-white">
                                                 <span className="text-xs font-bold text-zinc-500">{i+1}</span>
                                             </span>
                                             <p className="text-sm font-medium text-zinc-900">{step}</p>
                                         </li>
                                     ))}
                                 </ol>
                             </div>
                        </div>
                    </div>
                </section>

                {/* 4. PLACEMENTS */}
                <section id="placement" className="scroll-mt-32 space-y-6">
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200 shadow-sm">
                         <div className="flex justify-between items-end mb-6">
                             <h2 className="text-2xl font-bold text-[#002147]">Placements 2023-24</h2>
                             <span className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full text-sm">
                                 {college.placement.placement_percentage}% Placement Rate
                             </span>
                         </div>
                         
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                             <StatCard label="Highest Package" value={`₹${college.placement.highest_package_lpa} LPA`} sub="International" color="text-purple-600" />
                             <StatCard label="Average Package" value={`₹${college.placement.avg_package_lpa} LPA`} sub="Domestic" color="text-blue-600" />
                             <StatCard label="Total Offers" value="1250+" sub="This Year" color="text-orange-600" />
                         </div>

                         <div>
                             <h3 className="font-bold text-zinc-900 mb-4">Top Recruiters</h3>
                             <div className="flex flex-wrap gap-4">
                                 {college.placement.top_recruiters.map(r => (
                                     <div key={r} className="px-6 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-600 font-bold hover:bg-white hover:shadow-md transition-all cursor-default">
                                         {r}
                                     </div>
                                 ))}
                             </div>
                         </div>
                    </div>
                </section>

             </div>

             {/* RIGHT SIDEBAR */}
             <div className="w-full lg:w-[350px] shrink-0">
                 <div className="sticky top-24">
                     <CollegeSidebar />
                 </div>
             </div>

          </div>
       </div>
    </div>
  );
}

function EventBox({ label, value }: { label: string, value: string|number }) {
    return (
        <div className="bg-zinc-50 p-3 rounded-lg border border-zinc-100">
            <div className="text-xs text-zinc-500 uppercase font-bold text-center mb-1">{label}</div>
            <div className="text-sm md:text-base font-bold text-zinc-900 text-center">{value}</div>
        </div>
    )
}

function StatCard({ label, value, sub, color }: { label: string, value: string, sub: string, color: string }) {
    return (
        <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 text-center">
             <div className="text-xs text-zinc-500 font-bold uppercase mb-1">{label}</div>
             <div className={`text-2xl md:text-3xl font-black ${color} mb-1`}>{value}</div>
             <div className="text-[10px] text-zinc-400 font-medium tracking-wide">{sub}</div>
        </div>
    )
}
