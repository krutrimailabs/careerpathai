'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export function HeroSection() {
  const [activeTab, setActiveTab] = React.useState('college');

  return (
      <section className="relative bg-blue-900 text-white pt-20 pb-32 overflow-hidden">
         <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
               <div className="inline-flex items-center gap-2 bg-blue-800/50 px-4 py-1 rounded-full text-sm border border-blue-700">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Guiding lakhs of students
               </div>
               <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Right Guidance, <br/>
                  <span className="text-yellow-400">Bright Future</span>
               </h1>
               <p className="text-xl text-blue-100 max-w-lg">
                  Building a better future for India, one student at a time. Find the right college, course, and career.
               </p>
               <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full h-12 px-8 font-semibold">
                     Find Your College
                  </Button>
               </div>
            </div>
            {/* Hero Form */}
            <div className="md:w-1/3 bg-white text-zinc-900 rounded-2xl p-6 shadow-2xl min-h-[400px]">
               <div className="flex gap-4 border-b border-zinc-100 mb-6 pb-2">
                  <button 
                    onClick={() => setActiveTab('college')}
                    className={`font-bold pb-2 cursor-pointer transition-colors ${activeTab === 'college' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-zinc-500 hover:text-blue-600'}`}
                  >
                    Find College
                  </button>
                  <button 
                    onClick={() => setActiveTab('stream')}
                    className={`font-bold pb-2 cursor-pointer transition-colors ${activeTab === 'stream' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-zinc-500 hover:text-blue-600'}`}
                  >
                    Stream Selector
                  </button>
               </div>
               
               {activeTab === 'college' ? (
                   <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
                      <div>
                         <label className="text-xs font-semibold uppercase text-zinc-500">Select Degree</label>
                         <Select>
                            <SelectTrigger className="w-full mt-1 bg-zinc-50"><SelectValue placeholder="Select Degree" /></SelectTrigger>
                            <SelectContent>
                               <SelectItem value="mba">MBA</SelectItem>
                               <SelectItem value="btech">B.Tech</SelectItem>
                               <SelectItem value="bba">BBA</SelectItem>
                            </SelectContent>
                         </Select>
                      </div>
                      <div>
                         <label className="text-xs font-semibold uppercase text-zinc-500 mt-2 block">Specialization</label>
                         <Select>
                            <SelectTrigger className="w-full mt-1 bg-zinc-50"><SelectValue placeholder="Choose Specialization" /></SelectTrigger>
                            <SelectContent>
                               <SelectItem value="cse">Computer Science</SelectItem>
                               <SelectItem value="mkt">Marketing</SelectItem>
                            </SelectContent>
                         </Select>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg"> Get Free Counselling </Button>
                   </div>
               ) : (
                   <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                       <p className="text-sm text-zinc-500">Class 10 Student? Choose your path.</p>
                       <div className="grid grid-cols-1 gap-3">
                           <Button variant="outline" className="h-12 justify-start px-4 border-l-4 border-l-blue-500 hover:bg-blue-50">Science (PCM/PCB)</Button>
                           <Button variant="outline" className="h-12 justify-start px-4 border-l-4 border-l-green-500 hover:bg-green-50">Commerce</Button>
                           <Button variant="outline" className="h-12 justify-start px-4 border-l-4 border-l-purple-500 hover:bg-purple-50">Humanities / Arts</Button>
                       </div>
                       <div className="text-center text-xs text-zinc-400">
                           Unsure? <span className="text-blue-600 underline cursor-pointer">Take the AI Stream Test</span>
                       </div>
                   </div>
               )}
            </div>
         </div>
      </section>
  );
}
