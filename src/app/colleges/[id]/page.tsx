'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { COLLEGES } from '@/data/colleges';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MapPin, Building2, BookOpen, GraduationCap, 
  Briefcase, DollarSign, Star, Info
} from 'lucide-react';

export default function CollegeProfilePage() {
  const { id } = useParams(); // Using 'id' though route param handles slug
  const college = COLLEGES.find(c => c.slug === id);
  const [activeTab, setActiveTab] = useState('overview');

  if (!college) {
    return <div className="p-10 text-center">College not found.</div>;
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'academics', label: 'Academics', icon: BookOpen },
    { id: 'admission', label: 'Admission', icon: GraduationCap },
    { id: 'placement', label: 'Placement', icon: Briefcase },
    { id: 'campus', label: 'Campus Life', icon: Building2 },
    { id: 'financials', label: 'Financials', icon: DollarSign },
    { id: 'reviews', label: 'Reviews', icon: Star },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans pb-20">
       {/* Hero */}
       <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 pb-0 pt-10 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
             <div className="flex flex-col md:flex-row gap-6 mb-8">
                {/* Logo Placeholder */}
                <div className="w-24 h-24 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-200 dark:border-zinc-700 font-bold text-3xl text-zinc-400">
                   {college.name[0]}
                </div>
                
                <div className="flex-1">
                   <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">NIRF #{college.overview.nirf_rank}</Badge>
                      <Badge variant="outline">{college.overview.college_type}</Badge>
                      <Badge variant="outline" className="flex gap-1 items-center"><MapPin className="w-3 h-3" /> {college.overview.location}</Badge>
                   </div>
                   <h1 className="text-3xl md:text-4xl font-bold mb-2">{college.name}</h1>
                   <p className="text-muted-foreground">{college.short_description}</p>
                </div>

                <div className="flex gap-3 items-start">
                   <Button>Apply Now</Button>
                   <Button variant="outline">Download Brochure</Button>
                </div>
             </div>

             {/* Tab Nav */}
             <div className="flex overflow-x-auto gap-8">
               {tabs.map(tab => (
                 <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                       flex items-center gap-2 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap
                       ${activeTab === tab.id 
                         ? 'border-blue-600 text-blue-600' 
                         : 'border-transparent text-muted-foreground hover:text-zinc-900 dark:hover:text-zinc-100'}
                    `}
                 >
                   <tab.icon className="w-4 h-4" />
                   {tab.label}
                 </button>
               ))}
             </div>
          </div>
       </div>

       {/* Content */}
       <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
          
          {/* OVERVIEW */}
          {activeTab === 'overview' && (
             <div className="grid md:grid-cols-2 gap-6 animate-in fade-in">
                <Card>
                   <CardHeader><CardTitle>Highlights</CardTitle></CardHeader>
                   <CardContent className="space-y-4">
                      <div className="flex justify-between border-b pb-2">
                         <span className="text-muted-foreground">Established</span>
                         <span className="font-medium">{college.overview.established_year}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                         <span className="text-muted-foreground">Campus Size</span>
                         <span className="font-medium">{college.overview.campus_size_acres} Acres</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                         <span className="text-muted-foreground">NAAC Grade</span>
                         <span className="font-medium">{college.overview.naac_grade}</span>
                      </div>
                   </CardContent>
                </Card>
                <Card>
                   <CardHeader><CardTitle>Virtual Tour</CardTitle></CardHeader>
                   <CardContent className="h-64 bg-zinc-100 dark:bg-zinc-800 rounded flex items-center justify-center text-muted-foreground">
                      360° View Placeholder
                   </CardContent>
                </Card>
             </div>
          )}

          {/* ACADEMICS */}
          {activeTab === 'academics' && (
             <div className="grid md:grid-cols-2 gap-6 animate-in fade-in">
                <Card>
                   <CardHeader><CardTitle>Courses Offered</CardTitle></CardHeader>
                   <CardContent className="flex flex-wrap gap-2">
                      {college.academics.courses_offered.map(c => <Badge key={c}>{c}</Badge>)}
                   </CardContent>
                </Card>
                <Card>
                   <CardHeader><CardTitle>Stats</CardTitle></CardHeader>
                   <CardContent>
                      <div className="mb-4">
                         <div className="text-sm text-muted-foreground">Faculty Student Ratio</div>
                         <div className="text-2xl font-bold">{college.academics.faculty_student_ratio}</div>
                      </div>
                      <div>
                         <div className="text-sm text-muted-foreground mb-2">International Collaborations</div>
                         <ul className="list-disc pl-5 text-sm">
                            {college.academics.international_collaborations.map(c => <li key={c}>{c}</li>)}
                         </ul>
                      </div>
                   </CardContent>
                </Card>
             </div>
          )}

          {/* PLACEMENT */}
          {activeTab === 'placement' && (
             <div className="space-y-6 animate-in fade-in">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   <Card className="p-4 text-center">
                      <div className="text-3xl font-bold text-emerald-600">{college.placement.placement_percentage}%</div>
                      <div className="text-xs text-muted-foreground">Placement Rate</div>
                   </Card>
                   <Card className="p-4 text-center">
                      <div className="text-3xl font-bold text-blue-600">₹{college.placement.avg_package_lpa} LPA</div>
                      <div className="text-xs text-muted-foreground">Average Package</div>
                   </Card>
                   <Card className="p-4 text-center">
                      <div className="text-3xl font-bold text-indigo-600">₹{college.placement.highest_package_lpa} LPA</div>
                      <div className="text-xs text-muted-foreground">Highest Package</div>
                   </Card>
                </div>
                
                <Card>
                   <CardHeader><CardTitle>Top Recruiters</CardTitle></CardHeader>
                   <CardContent className="flex flex-wrap gap-4">
                      {college.placement.top_recruiters.map(r => (
                         <div key={r} className="font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded">
                            {r}
                         </div>
                      ))}
                   </CardContent>
                </Card>
             </div>
          )}

          {/* ADMISSION */}
          {activeTab === 'admission' && (
             <div className="grid md:grid-cols-2 gap-6 animate-in fade-in">
                <Card>
                   <CardHeader><CardTitle>Process</CardTitle></CardHeader>
                   <CardContent>
                      <ol className="list-decimal pl-5 space-y-2">
                         {college.admission.application_process.map(step => <li key={step}>{step}</li>)}
                      </ol>
                   </CardContent>
                </Card>
                <Card>
                   <CardHeader><CardTitle>Cutoff Trends</CardTitle></CardHeader>
                   <CardContent className="space-y-4">
                      {college.admission.cutoff_trends.map(trend => (
                         <div key={trend.year} className="flex justify-between items-center border-b pb-2">
                            <span className="font-semibold">{trend.year}</span>
                            <span className="text-muted-foreground">{trend.cutoff}</span>
                         </div>
                      ))}
                   </CardContent>
                </Card>
             </div>
          )}
          
          {/* Default fallback for other tabs */}
          {['campus', 'financials', 'reviews'].includes(activeTab) && (
             <div className="p-10 text-center text-muted-foreground border-2 border-dashed rounded-xl">
                 Detailed content for {activeTab} coming soon...
             </div>
          )}

       </div>
    </div>
  );
}
