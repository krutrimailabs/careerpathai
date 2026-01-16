'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar 
} from 'recharts';
import { 
  BookOpen, CheckCircle, Clock, DollarSign, Shield, TrendingUp, AlertTriangle, FileText, ArrowRight 
} from 'lucide-react';

export default function ParentDashboard() {
  
  // Mock Data for Charts
  const roiData = [
    { name: 'Year 1', cost: 400000, earnings: 0 },
    { name: 'Year 2', cost: 800000, earnings: 0 },
    { name: 'Year 3', cost: 1200000, earnings: 0 },
    { name: 'Year 4', cost: 1600000, earnings: 400000 }, // Internship
    { name: 'Year 5', cost: 1600000, earnings: 1800000 }, // Job
    { name: 'Year 6', cost: 1600000, earnings: 3500000 },
  ];

  const safetyData = [
    { name: 'IIT Bombay', score: 98 },
    { name: 'VIT Vellore', score: 95 },
    { name: 'Manipal', score: 92 },
    { name: 'Amity', score: 88 },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans pb-20">
      
      {/* 1. HEADER */}
      <div className="bg-[#002147] text-white pt-24 pb-32 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row justify-between items-end gap-6">
               <div>
                   <h1 className="text-3xl md:text-5xl font-black mb-2">My Child&apos;s Future Board</h1>
                   <p className="text-blue-200 text-lg">Tracking <span className="font-bold text-white">Aarav&apos;s</span> career journey & safety.</p>
               </div>
               <div className="flex gap-3">
                   <Button variant="outline" className="text-[#002147] border-white font-bold bg-white hover:bg-blue-50">
                       <FileText className="w-4 h-4 mr-2" /> Download Report
                   </Button>
               </div>
           </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-20 relative z-20 space-y-8">
          
          {/* 2. PROGRESS TRACKER CARD */}
          <Card className="shadow-xl border-0 overflow-hidden">
              <CardHeader className="bg-white border-b border-zinc-100 pb-8">
                  <div className="flex items-center justify-between mb-2">
                       <CardTitle className="text-xl font-bold text-[#002147] flex items-center gap-2">
                           <TrendingUp className="w-6 h-6 text-green-600" /> Career Readiness Score
                       </CardTitle>
                       <span className="text-2xl font-black text-green-600">65%</span>
                  </div>
                  <Progress value={65} className="h-3 bg-zinc-100 text-green-600" />
                  <div className="flex justify-between text-xs font-bold text-zinc-400 mt-2 uppercase tracking-wider">
                      <span>Discovery</span>
                      <span>Assessment</span>
                      <span>Shortlisting</span>
                      <span>Applications</span>
                      <span>Admission</span>
                  </div>
              </CardHeader>
              <CardContent className="p-0 bg-zinc-50 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
                  <div className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <h4 className="font-bold text-[#002147]">Assessment Taken</h4>
                      </div>
                      <p className="text-sm text-zinc-500 mb-3">Aarav completed the psychometric test. Result: <span className="font-bold text-zinc-700">Realistic-Investigative</span>.</p>
                      <Link href="/assessment/results" className="text-blue-600 text-sm font-bold hover:underline">View Report</Link>
                  </div>
                  <div className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                          <Clock className="w-5 h-5 text-orange-500" />
                          <h4 className="font-bold text-[#002147]">College Shortlist</h4>
                      </div>
                      <p className="text-sm text-zinc-500 mb-3">3 colleges added to compare list. Pending final selection.</p>
                      <Link href="/colleges" className="text-blue-600 text-sm font-bold hover:underline">View Shortlist</Link>
                  </div>
                  <div className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                          <BookOpen className="w-5 h-5 text-zinc-400" />
                          <h4 className="font-bold text-zinc-400">Applications</h4>
                      </div>
                      <p className="text-sm text-zinc-500 mb-3">No applications started yet. Application season starts in <span className="font-bold">2 months</span>.</p>
                  </div>
              </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* 3. ROI CALCULATOR WIDGET */}
              <Card className="shadow-md border-zinc-200">
                  <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-[#002147]">
                          <DollarSign className="w-5 h-5 text-blue-600" /> Financial Reality Check
                      </CardTitle>
                      <p className="text-sm text-zinc-500">Projected cost vs earnings for Engineering degree.</p>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={roiData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                              <XAxis dataKey="name" tick={{fontSize: 12, fill: '#64748b'}} axisLine={false} tickLine={false} />
                              <YAxis tick={{fontSize: 12, fill: '#64748b'}} axisLine={false} tickFormatter={(value) => `₹${value/100000}L`} />
                              <Tooltip 
                                  contentStyle={{backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                                  formatter={(value: number | undefined) => [`₹${(value || 0).toLocaleString()}`, 'Amount']}
                              />
                              <Line type="monotone" dataKey="cost" stroke="#ef4444" strokeWidth={2} name="Cumulative Cost" dot={false} />
                              <Line type="monotone" dataKey="earnings" stroke="#22c55e" strokeWidth={2} name="Cumulative Earnings" dot={false} />
                          </LineChart>
                      </ResponsiveContainer>
                      <div className="mt-4 flex items-center justify-center gap-6 text-sm">
                          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-500 rounded-full"></div> Education Cost</div>
                          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-500 rounded-full"></div> Career Earnings</div>
                      </div>
                  </CardContent>
              </Card>

              {/* 4. SAFETY & RESEARCH */}
              <Card className="shadow-md border-zinc-200">
                  <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-[#002147]">
                          <Shield className="w-5 h-5 text-purple-600" /> Campus Safety Scores
                      </CardTitle>
                      <p className="text-sm text-zinc-500">Based on anti-ragging measures, security, and student reviews.</p>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={safetyData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                               <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e5e7eb" />
                               <XAxis type="number" domain={[0, 100]} hide />
                               <YAxis dataKey="name" type="category" tick={{fontSize: 12, fill: '#334155', fontWeight: 600}} axisLine={false} tickLine={false} />
                               <Tooltip cursor={{fill: 'transparent'}} />
                               <Bar dataKey="score" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} background={{ fill: '#f1f5f9' }}>
                                  {/* Custom logic to color bars could go here */}
                               </Bar>
                          </BarChart>
                      </ResponsiveContainer>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800 flex gap-3 mt-4">
                          <AlertTriangle className="w-5 h-5 shrink-0" />
                          <p>Tip: Always check the &apos;Anti-Ragging Committee&apos; contact on the college official website before finalizing admission.</p>
                      </div>
                  </CardContent>
              </Card>

          </div>

          {/* 5. Recommended Articles */}
          <div className="py-8">
              <h2 className="text-xl font-bold text-[#002147] mb-6">Parenting Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {[
                       { title: "Engineering vs Design: ROI Analysis", read: "5 min read", tag: "Finance" },
                       { title: "How to support your child during exams", read: "3 min read", tag: "Psychology" },
                       { title: "Understanding the New Education Policy", read: "7 min read", tag: "Policy" }
                   ].map((post, i) => (
                       <Card key={i} className="hover:border-blue-300 cursor-pointer transition-all group">
                           <CardContent className="p-6">
                               <Badge variant="outline" className="mb-3 text-zinc-500 border-zinc-200 bg-zinc-50">{post.tag}</Badge>
                               <h3 className="font-bold text-lg text-[#002147] mb-2 group-hover:text-blue-700 transition-colors">{post.title}</h3>
                               <div className="flex items-center justify-between mt-4">
                                   <span className="text-sm text-zinc-400">{post.read}</span>
                                   <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-blue-600 transition-colors" />
                               </div>
                           </CardContent>
                       </Card>
                   ))}
              </div>
          </div>
      </div>
    </div>
  );
}
