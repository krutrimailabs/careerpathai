'use client';

import React from 'react';
import Link from 'next/link';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Brain } from 'lucide-react';

export default function AssessmentResultsPage() {
  
  // Mock Result Data
  const personalityData = [
    { subject: 'Realistic', A: 120, fullMark: 150 },
    { subject: 'Investigative', A: 98, fullMark: 150 },
    { subject: 'Artistic', A: 86, fullMark: 150 },
    { subject: 'Social', A: 99, fullMark: 150 },
    { subject: 'Enterprising', A: 85, fullMark: 150 },
    { subject: 'Conventional', A: 65, fullMark: 150 },
  ];

  const topCareers = [
    { title: "Software Engineer", match: 98, salary: "₹8L - ₹24L", growth: "High", tags: ["Logic", "Building"] },
    { title: "Data Scientist", match: 92, salary: "₹10L - ₹30L", growth: "Very High", tags: ["Math", "Analysis"] },
    { title: "Product Manager", match: 88, salary: "₹12L - ₹35L", growth: "High", tags: ["Leadership", "Strategy"] },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans pb-20">
        
        {/* 1. HEADER */}
        <div className="bg-[#002147] text-white py-12 md:py-20 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                 <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30 backdrop-blur-sm">Analysis Complete</Badge>
                 <h1 className="text-3xl md:text-5xl font-black mb-4">Your Career DNA Results</h1>
                 <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                     Based on your responses, you have a <b>Realistic-Investigative</b> personality type.
                     <br/> You thrive in environments that require logical problem solving.
                 </p>
             </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 -mt-10 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* 2. PERSONALITY CHART (Left Col) */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="shadow-xl border-0 overflow-hidden">
                        <CardHeader className="bg-white border-b border-zinc-100">
                            <CardTitle className="text-lg font-bold text-[#002147] flex items-center gap-2">
                                <Brain className="w-5 h-5 text-blue-600" /> Personality Profile
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 h-[350px] bg-white">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={personalityData}>
                                    <PolarGrid stroke="#e5e7eb" />
                                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10 }} />
                                    <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                                    <Radar name="You" dataKey="A" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.5} />
                                    <Legend />
                                </RadarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    <Card className="shadow-md border-0 bg-blue-600 text-white">
                        <CardContent className="p-6">
                            <h3 className="font-bold text-lg mb-2">Want a deeper analysis?</h3>
                            <p className="text-blue-100 text-sm mb-4">
                                This is a preliminary report. Discuss these results with a certified career counselor.
                            </p>
                            <Link href="/mentors">
                                <Button className="w-full bg-white text-blue-600 font-bold hover:bg-blue-50">Book Counseling</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>

                {/* 3. CAREER RECOMMENDATIONS (Right Col) */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-2xl font-bold text-[#002147]">Top Career Matches</h2>
                    
                    <div className="grid grid-cols-1 gap-4">
                        {topCareers.map((career, i) => (
                            <Card key={i} className="group hover:border-blue-300 transition-all cursor-pointer shadow-sm hover:shadow-md border-zinc-200">
                                <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
                                    <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center font-bold text-2xl text-blue-600 shrink-0 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        {career.match}%
                                    </div>
                                    
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-2 mb-2">
                                            <h3 className="text-xl font-bold text-[#002147]">{career.title}</h3>
                                            {i === 0 && <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-0">Best Fit</Badge>}
                                        </div>
                                        <div className="flex items-center gap-2 mb-3">
                                            {career.tags.map(tag => (
                                                <Badge key={tag} variant="secondary" className="text-xs text-zinc-500 bg-zinc-100">{tag}</Badge>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-6 text-sm text-zinc-600 font-medium">
                                            <span>💰 {career.salary}</span>
                                            <span>📈 {career.growth} Growth</span>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-auto mt-4 md:mt-0">
                                        <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 font-bold">
                                            View Roadmap
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-zinc-200">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-[#002147]">Recommended Colleges</h2>
                            <Link href="/colleges" className="text-blue-600 font-bold hover:underline">View All</Link>
                        </div>
                        
                        {/* Mini College Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm flex items-center gap-4">
                                <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center font-bold text-[#002147]">I</div>
                                <div>
                                    <h4 className="font-bold text-sm">IIT Bombay</h4>
                                    <p className="text-xs text-zinc-500">Best for Software Engg.</p>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm flex items-center gap-4">
                                <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center font-bold text-[#002147]">B</div>
                                <div>
                                    <h4 className="font-bold text-sm">BITS Pilani</h4>
                                    <p className="text-xs text-zinc-500">Best for Startups</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {/* Sticky Download Bar */}
        <div className="fixed bottom-6 left-0 right-0 pointer-events-none">
            <div className="container mx-auto px-4 text-center pointer-events-auto">
                <Button className="bg-[#002147] text-white shadow-2xl hover:bg-black font-bold h-12 px-8 rounded-full border-2 border-white/20">
                    <Download className="w-4 h-4 mr-2" /> Download Full PDF Report
                </Button>
            </div>
        </div>
    </div>
  );
}
