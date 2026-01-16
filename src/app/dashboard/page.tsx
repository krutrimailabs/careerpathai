'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Star, ArrowRight, Bell, Target, TrendingUp } from 'lucide-react';
import { COLLEGES } from '@/data/colleges'; // Mock data

export default function StudentDashboard() {
  // Mock Data
  const savedColleges = COLLEGES.slice(0, 3);
  const nextSession = {
    mentor: "Aditi S.",
    role: "PM @ Google",
    date: "Sat, 24 Aug",
    time: "10:00 AM",
    topic: "Resume Review"
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans pb-20">
      
      {/* 1. HEADER */}
      <div className="bg-white border-b border-zinc-200 sticky top-16 z-30">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
             <div>
                 <h1 className="text-xl md:text-2xl font-black text-[#002147]">Dashboard</h1>
                 <p className="text-sm text-zinc-500">Welcome back, <span className="font-bold text-zinc-900">Aarav</span> 👋</p>
             </div>
             <div className="flex gap-4">
                 <Button variant="outline" size="icon" className="rounded-full relative border-zinc-200">
                     <Bell className="w-5 h-5 text-zinc-600" />
                     <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                 </Button>
                 <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center font-bold text-blue-800 border-2 border-white shadow-sm">
                     AS
                 </div>
             </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 space-y-8">
          
          {/* 2. PROFILE COMPLETION (Action Center) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               <Card className="lg:col-span-2 shadow-sm border-zinc-200 bg-gradient-to-r from-[#002147] to-[#003366] text-white overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <CardContent className="p-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="space-y-4 flex-1">
                            <div>
                                <Badge className="bg-yellow-400 text-yellow-900 hover:bg-yellow-500 border-0 mb-2">Next Step</Badge>
                                <h2 className="text-2xl font-bold">Complete your Profile</h2>
                                <p className="text-blue-100">You are <span className="font-bold text-white">80%</span> there! Add your Class 12th marks to get better college recommendations.</p>
                            </div>
                            <div className="w-full bg-blue-900/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-green-400 h-full w-[80%] rounded-full"></div>
                            </div>
                        </div>
                        <Button className="bg-white text-[#002147] hover:bg-blue-50 font-bold px-8 h-12 shadow-lg">
                            Update Profile
                        </Button>
                    </CardContent>
               </Card>

               <Card className="shadow-sm border-zinc-200">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-bold text-[#002147] flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-orange-500" /> Upcoming Session
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h4 className="font-bold text-[#002147]">{nextSession.topic}</h4>
                                    <p className="text-sm text-zinc-600">with {nextSession.mentor}</p>
                                </div>
                                <Badge variant="outline" className="bg-white text-orange-700 border-orange-200">{nextSession.time}</Badge>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 mt-3 pt-3 border-t border-orange-200/50">
                                <span>{nextSession.date}</span>
                                <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                                <span className="text-blue-600 cursor-pointer hover:underline">Join Link</span>
                            </div>
                        </div>
                        <Link href="/mentors" className="block mt-4 text-center">
                            <Button variant="ghost" className="text-sm text-zinc-500 hover:text-[#002147]">Book another session</Button>
                        </Link>
                    </CardContent>
               </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* 3. MY ASSESSMENT */}
              <div className="lg:col-span-1 space-y-6">
                  <h3 className="text-lg font-bold text-[#002147] flex items-center gap-2">
                      <Target className="w-5 h-5" /> Career Compass
                  </h3>
                   <Card className="shadow-sm border-zinc-200 hover:border-blue-300 transition-colors group cursor-pointer">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <TrendingUp className="w-6 h-6 text-green-600" />
                                </div>
                                <span className="text-xs font-bold text-zinc-400">Completed 2 days ago</span>
                            </div>
                            <h4 className="font-bold text-lg text-[#002147] mb-1">Realistic - Investigative</h4>
                            <p className="text-sm text-zinc-500 mb-4">Your top matches are Engineering and Product Design.</p>
                            <Link href="/assessment/results">
                                <Button variant="outline" className="w-full gap-2 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200">
                                    View Full Report <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </CardContent>
                   </Card>
              </div>

              {/* 4. MY SHORTLIST */}
              <div className="lg:col-span-2 space-y-6">
                   <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-[#002147] flex items-center gap-2">
                            <Star className="w-5 h-5" /> Saved Colleges
                        </h3>
                        <Link href="/colleges" className="text-sm font-bold text-blue-600 hover:underline">Explore More</Link>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {savedColleges.map((college) => (
                           <Card key={college.id} className="shadow-sm border-zinc-200 hover:shadow-md transition-all">
                               <CardContent className="p-4 flex items-center gap-4">
                                   <div className="w-16 h-16 bg-zinc-100 rounded-lg flex items-center justify-center font-bold text-[#002147] shrink-0">
                                       {college.name[0]}
                                   </div>
                                   <div className="flex-1 min-w-0">
                                       <h4 className="font-bold text-[#002147] truncate">{college.name}</h4>
                                       <p className="text-xs text-zinc-500 truncate">{college.overview.location}</p>
                                       <div className="flex items-center gap-2 mt-2">
                                           <Badge variant="secondary" className="text-[10px] px-1 h-5 bg-green-50 text-green-700 border-green-100">Avg: ₹{college.placement.avg_package_lpa} LPA</Badge>
                                       </div>
                                   </div>
                                   <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-zinc-400 hover:text-red-500">
                                       <Star className="w-4 h-4 fill-current" />
                                   </Button>
                               </CardContent>
                           </Card>
                       ))}
                   </div>
              </div>

          </div>

      </div>
    </div>
  );
}
