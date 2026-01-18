import React from 'react';
import { notFound } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Trophy, Download, Share2, Globe, Heart, Star, CheckCircle, GraduationCap, Building2, Banknote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Helper to map DB record to UI structure
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapCollegeData = (item: any) => ({
    id: item.id,
    slug: item.slug,
    name: item.name,
    short_description: item.description || '',
    background_url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070', // Default
    logo_url: item.logo_url,
    overview: {
        nirf_rank: item.nirf_rank || 0,
        naac_grade: 'A++', 
        established_year: item.established_year || 1900,
        college_type: item.college_type || 'Private',
        campus_size_acres: item.campus_area || 100,
        location: item.city + ', ' + item.state
    },
    academics: {
        courses_offered: ['B.Tech', 'M.Tech', 'PhD'],
        specializations: ['Computer Science', 'Electronics'],
        faculty_student_ratio: '1:15',
        international_collaborations: ['MIT', 'Stanford']
    },
    admission: {
        exams_accepted: ['JEE Mains', 'JEE Advanced'],
        reservation_policy: 'As per Govt norms',
        application_process: ['Apply Online', 'Submit Documents'],
        important_dates: [{ event: 'Applications Open', date: 'Jan 2026' }],
        cutoff_trends: [{ year: 2025, cutoff: '98 Percentile' }]
    },
    placement: {
        avg_package_lpa: item.highlights?.avg_package_lpa || 15,
        highest_package_lpa: item.highlights?.highest_package_lpa || 50,
        placement_percentage: 95,
        top_recruiters: ['Google', 'Microsoft', 'Amazon'],
        alumni_network_strength: 'Strong'
    },
    campus_life: {
       hostel_facilities: true,
       sports_facilities: ['Cricket', 'Football', 'Gym'],
       clubs_committees: ['Robotics', 'Coding Club'],
       safety_score: 9.5
    },
    financials: {
        fees_per_year: 250000,
        scholarship_available: true,
        education_loan_partners: ['SBI', 'HDFC'],
        refund_policy: 'Full refund within 30 days'
    },
    reviews: {
        average_rating: 4.8,
        total_reviews: 1250,
        categories: { infrastructure: 4.8, academics: 4.9, placements: 4.9, campus_life: 4.7, value_for_money: 4.6 }
    }
});

export default async function CollegeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: collegeData, error } = await supabase
    .schema('careerpath')
    .from('colleges')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !collegeData) {
    notFound();
  }

  const college = mapCollegeData(collegeData);

  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
        {/* HERO HEADER */}
        <div className="relative h-[400px] w-full bg-[#002147]">
            <Image 
                src={college.background_url}
                alt="Campus"
                fill
                className="object-cover opacity-20"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002147] via-transparent to-transparent"></div>
            
            <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-10 relative z-10">
                <div className="flex gap-2 mb-4">
                    <Badge className="bg-white/10 text-white backdrop-blur-md border px-3 py-1 hover:bg-white/20 border-white/20">
                        <Trophy className="w-3 h-3 mr-1 text-yellow-400" /> #{college.overview.nirf_rank} NIRF '24
                    </Badge>
                     <Badge className="bg-green-500/20 text-green-300 backdrop-blur-md px-3 py-1 border border-green-500/30">
                        NAAC {college.overview.naac_grade}
                    </Badge>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-end">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-xl shadow-lg border-4 border-white overflow-hidden shrink-0 flex items-center justify-center p-2">
                        {college.logo_url ? (
                             <img src={college.logo_url} alt="Logo" className="w-full h-full object-contain" />
                        ) : (
                            <div className="text-3xl font-bold text-[#002147]">{college.name[0]}</div>
                        )}
                    </div>
                    
                    <div className="flex-1 mb-2">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{college.name}</h1>
                        <p className="text-lg text-blue-200 flex items-center gap-2">
                            <MapPin className="w-4 h-4" /> {college.overview.location}
                            <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                            <span>Est. {college.overview.established_year}</span>
                            <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                            <span>{college.overview.college_type}</span>
                        </p>
                    </div>

                    <div className="flex gap-3 mb-2">
                        <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 hover:text-white">
                            <Share2 className="w-4 h-4 mr-2" /> Share
                        </Button>
                        <Button className="bg-[#FF9900] hover:bg-orange-600 text-white font-bold px-8">
                            Apply Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT COLUMN (Details) */}
            <div className="lg:col-span-2 space-y-8">
                
                {/* About */}
                <section className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                    <h2 className="text-xl font-bold text-[#002147] mb-4 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-blue-600" /> About Institute
                    </h2>
                    <p className="text-zinc-600 leading-relaxed">
                        {college.short_description}
                        {" Located in a sprawling " + college.overview.campus_size_acres + " acre campus."}
                    </p>
                </section>

                {/* Placement Highlights */}
                 <section className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                    <h2 className="text-xl font-bold text-[#002147] mb-6 flex items-center gap-2">
                        <Banknote className="w-5 h-5 text-green-600" /> Placements 2024
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-green-50 p-4 rounded-xl border border-green-100 text-center">
                            <p className="text-xs text-green-700 font-bold uppercase mb-1">Highest Package</p>
                            <p className="text-2xl font-black text-green-800">₹{college.placement.highest_package_lpa} LPA</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
                            <p className="text-xs text-blue-700 font-bold uppercase mb-1">Average Package</p>
                            <p className="text-2xl font-black text-blue-800">₹{college.placement.avg_package_lpa} LPA</p>
                        </div>
                         <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 text-center">
                            <p className="text-xs text-purple-700 font-bold uppercase mb-1">Placement Rate</p>
                            <p className="text-2xl font-black text-purple-800">{college.placement.placement_percentage}%</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-zinc-900 mb-3">Top Recruiters</h3>
                        <div className="flex flex-wrap gap-2">
                            {college.placement.top_recruiters.map(company => (
                                <Badge key={company} variant="secondary" className="px-3 py-1 bg-zinc-100 text-zinc-700 hover:bg-zinc-200">
                                    {company}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </section>

            </div>

            {/* RIGHT COLUMN (Sidebar Info) */}
            <div className="space-y-6">
                 {/* Quick Info Card */}
                 <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm sticky top-24">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-zinc-900">At a Glance</h3>
                        <div className="flex items-center gap-1 text-yellow-600 font-bold bg-yellow-50 px-2 py-1 rounded">
                            {college.reviews.average_rating} <Star className="w-4 h-4 fill-current" />
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="flex justify-between py-2 border-b border-zinc-50">
                            <span className="text-zinc-500 text-sm">Fees (Total)</span>
                            <span className="font-medium">₹ {(college.financials.fees_per_year * 4 / 100000).toFixed(1)} Lakhs</span>
                        </div>
                         <div className="flex justify-between py-2 border-b border-zinc-50">
                            <span className="text-zinc-500 text-sm">Exams Accepted</span>
                            <span className="font-medium text-right text-sm">{college.admission.exams_accepted.join(', ')}</span>
                        </div>
                         <div className="flex justify-between py-2 border-b border-zinc-50">
                             <span className="text-zinc-500 text-sm">Ownership</span>
                            <span className="font-medium">{college.overview.college_type}</span>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-3">
                        <Button className="w-full bg-[#002147] hover:bg-blue-900 font-bold h-12">Download Brochure <Download className="w-4 h-4 ml-2" /></Button>
                        <Button variant="outline" className="w-full border-zinc-300">Visit Website <Globe className="w-4 h-4 ml-2" /></Button>
                    </div>
                 </div>
            </div>

        </div>
    </div>
  );
}
