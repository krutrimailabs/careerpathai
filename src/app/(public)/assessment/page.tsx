'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Target, Sparkles, ArrowRight, CheckCircle2, FileText, Users } from 'lucide-react';

export default function AssessmentLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-[#002147]">
          {/* Background Effects */}
          <div className="absolute inset-0 z-0">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
              <Badge variant="secondary" className="mb-6 bg-blue-500/10 text-blue-200 border-blue-500/20 backdrop-blur-sm px-4 py-1">
                  <Sparkles className="w-3 h-3 mr-2 text-yellow-400" /> AI-Powered Career Analysis
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                  Stop Guessing.<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Start Knowing.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Discover your perfect career path based on your <b>Personality</b>, <b>Interests</b>, and <b>Aptitude</b>.
                  <br className="hidden md:block" /> Backed by 10 years of data and modern psychology.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/assessment/tests/interest">
                      <Button className="h-14 px-8 text-lg font-bold bg-[#FF9900] hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20 transition-all hover:scale-105">
                          Start Free Assessment <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                  </Link>
                  <Button variant="outline" className="h-14 px-8 text-lg font-bold border-zinc-700 text-white hover:bg-white/10 hover:text-white bg-transparent">
                      View Sample Report
                  </Button>
              </div>

              <div className="mt-12 flex items-center justify-center gap-8 text-zinc-400 text-sm font-medium">
                  <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> 15 Min Test
                  </div>
                  <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Scientific
                  </div>
                  <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Free Report
                  </div>
              </div>
          </div>
      </section>

      {/* 2. THE PROCESS */}
      <section className="py-24 bg-zinc-50 relative">
          <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-black text-[#002147] mb-4">How It Works</h2>
                  <p className="text-lg text-zinc-600">A simple 3-step process to clarify your future.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                  {/* Connecting Line (Desktop) */}
                  <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-zinc-200 -z-10 bg-[linear-gradient(to_right,transparent_50%,#cbd5e1_50%)] bg-[length:20px_100%]"></div>

                  {/* Step 1 */}
                  <div className="text-center group">
                      <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 border border-zinc-100">
                          <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                             <Target className="w-8 h-8" />
                          </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#002147] mb-2">1. Take the Test</h3>
                      <p className="text-zinc-600 px-4">Answer simple questions about your likes, dislikes, and style.</p>
                  </div>

                  {/* Step 2 */}
                  <div className="text-center group">
                      <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 border border-zinc-100">
                           <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                             <Brain className="w-8 h-8" />
                          </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#002147] mb-2">2. AI Analysis</h3>
                      <p className="text-zinc-600 px-4">Our engine maps your profile against 500+ career paths.</p>
                  </div>

                  {/* Step 3 */}
                  <div className="text-center group">
                      <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 border border-zinc-100">
                           <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                             <FileText className="w-8 h-8" />
                          </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#002147] mb-2">3. Get Your Plan</h3>
                      <p className="text-zinc-600 px-4">Receive a detailed report with College & Course recommendations.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* 3. REPORT PREVIEW (Teaser) */}
      <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="flex-1 text-left">
                      <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-4 border-purple-200">
                          Sample Insights
                      </Badge>
                      <h2 className="text-3xl md:text-5xl font-black text-[#002147] mb-6 leading-tight">
                          Not just a Result.<br/>
                          A complete roadmap.
                      </h2>
                      <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                          Most tests just engage you. We guide you. Your report includes detailed SWOT analysis, 
                          top college matches based on your academic record, and actionable next steps.
                      </p>
                      
                      <div className="space-y-4">
                          <div className="flex items-center gap-4 p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                  <Brain className="w-5 h-5" />
                              </div>
                              <div>
                                  <h4 className="font-bold text-[#002147]">Personality Breakdown</h4>
                                  <p className="text-sm text-zinc-500">Big 5 Traits analysis for self-awareness.</p>
                              </div>
                          </div>
                          <div className="flex items-center gap-4 p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0">
                                  <Users className="w-5 h-5" />
                              </div>
                              <div>
                                  <h4 className="font-bold text-[#002147]">Peer Comparison</h4>
                                  <p className="text-sm text-zinc-500">See where you stand among peers.</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Blurred/Clean Report UI Mockup */}
                  <div className="flex-1 w-full max-w-lg relative">
                      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20"></div>
                      <Card className="relative shadow-2xl border-zinc-200 overflow-hidden bg-white/80 backdrop-blur-sm">
                          <CardContent className="p-0">
                              <div className="bg-zinc-100 p-4 border-b border-zinc-200 flex justify-between items-center">
                                  <div className="h-3 w-20 bg-zinc-300 rounded-full"></div>
                                  <div className="h-8 w-8 bg-zinc-200 rounded-full"></div>
                              </div>
                              <div className="p-6 space-y-6">
                                  <div className="space-y-2">
                                      <div className="h-6 w-3/4 bg-zinc-200 rounded animate-pulse"></div>
                                      <div className="h-4 w-1/2 bg-zinc-100 rounded animate-pulse"></div>
                                  </div>
                                  
                                  {/* Fake Chart */}
                                  <div className="flex items-end gap-2 h-32 pl-4 pb-4 border-l border-b border-zinc-200">
                                      <div className="flex-1 bg-blue-500 rounded-t-sm h-[60%] animate-[pulse_2s_ease-in-out_infinite]"></div>
                                      <div className="flex-1 bg-purple-500 rounded-t-sm h-[80%] animate-[pulse_2s_ease-in-out_infinite_0.2s]"></div>
                                      <div className="flex-1 bg-green-500 rounded-t-sm h-[40%] animate-[pulse_2s_ease-in-out_infinite_0.4s]"></div>
                                      <div className="flex-1 bg-orange-500 rounded-t-sm h-[90%] animate-[pulse_2s_ease-in-out_infinite_0.6s]"></div>
                                  </div>

                                  <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
                                      <div className="h-6 w-1/3 bg-green-600/20 rounded mb-2"></div>
                                      <div className="h-4 w-full bg-green-600/10 rounded"></div>
                                  </div>
                              </div>
                              
                              {/* CTA Overlay */}
                              <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] flex items-center justify-center">
                                   <Link href="/assessment/tests/interest">
                                      <Button className="font-bold shadow-xl scale-125">Unlock Full Report</Button>
                                   </Link>
                              </div>
                          </CardContent>
                      </Card>
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
}
