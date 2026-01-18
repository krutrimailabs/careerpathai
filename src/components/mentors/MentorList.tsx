'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Briefcase, Star, Filter } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  experience: string;
  education: string;
  expertise: string[];
  rating: number;
  reviews: number;
  hourly_rate: number;
  about: string;
}

export function MentorList({ initialMentors }: { initialMentors: Mentor[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredMentors = initialMentors.filter(m => 
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      m.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      
      {/* 1. HERO */}
      <div className="bg-[#002147] text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
              <h1 className="text-3xl md:text-5xl font-black mb-4">Find Your Mentor</h1>
              <p className="text-lg text-zinc-300 max-w-2xl mx-auto mb-8">
                  Book 1:1 sessions with experts from Google, Amazon, McKinsey, and more.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-xl mx-auto relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                  <Input 
                      placeholder="Search by name, company, or role..." 
                      className="pl-12 h-14 rounded-full text-black bg-white shadow-lg border-0 text-lg"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                  />
              </div>
          </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col lg:flex-row gap-8">
          
          {/* 2. SIDEBAR FILTERS (Desktop) */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-8">
              <div>
                  <h3 className="font-bold text-[#002147] mb-4 flex items-center gap-2">
                      <Filter className="w-4 h-4" /> Filters
                  </h3>
                  
                  <div className="space-y-6">
                      <div>
                          <h4 className="text-sm font-bold text-zinc-700 mb-3">Domain</h4>
                          <div className="space-y-2">
                              {['Product Management', 'Engineering', 'Data Science', 'Consulting', 'Marketing'].map(d => (
                                  <div key={d} className="flex items-center space-x-2">
                                      <Checkbox id={d} />
                                      <label htmlFor={d} className="text-sm text-zinc-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{d}</label>
                                  </div>
                              ))}
                          </div>
                      </div>

                      <div>
                          <h4 className="text-sm font-bold text-zinc-700 mb-3">Company</h4>
                          <div className="space-y-2">
                              {['Google', 'Microsoft', 'Amazon', 'Startups'].map(c => (
                                  <div key={c} className="flex items-center space-x-2">
                                      <Checkbox id={c} />
                                      <label htmlFor={c} className="text-sm text-zinc-600 font-medium leading-none">{c}</label>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </aside>

          {/* 3. MENTOR LIST */}
          <main className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredMentors.length === 0 ? (
                      <div className="col-span-full py-12 text-center text-zinc-500">
                          No mentors found matching your search.
                      </div>
                  ) : (
                    filteredMentors.map(mentor => (
                      <Card key={mentor.id} className="group hover:shadow-xl transition-all border-zinc-200 overflow-hidden">
                          <CardContent className="p-0">
                              <div className="p-6 flex flex-col gap-4">
                                  {/* Header: Avatar & Info */}
                                  <div className="flex items-start gap-4">
                                      <div className="w-16 h-16 rounded-full bg-zinc-200 shrink-0 overflow-hidden border-2 border-white shadow-sm">
                                          {/* Img placeholder */}
                                          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center font-bold text-2xl text-[#002147]">
                                              {mentor.name[0]}
                                          </div>
                                      </div>
                                      <div>
                                          <h3 className="font-bold text-lg text-[#002147] flex items-center gap-2">
                                              {mentor.name} 
                                              {mentor.rating >= 4.9 && <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 text-xs px-1 py-0 border-yellow-200">Top Rated</Badge>}
                                          </h3>
                                          <p className="text-sm text-zinc-600 font-medium">{mentor.role}</p>
                                          <div className="flex items-center gap-1 text-xs text-zinc-500 mt-1">
                                              <Briefcase className="w-3 h-3" /> {mentor.company}
                                          </div>
                                      </div>
                                  </div>

                                  <div className="space-y-3">
                                      <p className="text-sm text-zinc-600 line-clamp-2">{mentor.about}</p>
                                      
                                      <div className="flex flex-wrap gap-2">
                                          {mentor.expertise?.slice(0, 3).map(skill => (
                                              <Badge key={skill} variant="outline" className="text-xs bg-zinc-50">{skill}</Badge>
                                          ))}
                                      </div>
                                  </div>

                                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between mt-auto">
                                      <div>
                                          <span className="block text-xs text-zinc-400 font-bold uppercase">Rate</span>
                                          <span className="font-bold text-[#002147]">₹{mentor.hourly_rate}<span className="text-xs font-normal text-zinc-500">/hr</span></span>
                                      </div>
                                      <div className="text-right">
                                           <div className="flex items-center gap-1 justify-end font-bold text-sm text-zinc-700">
                                              <Star className="w-4 h-4 text-orange-500 fill-current" /> {mentor.rating} <span className="text-zinc-400 font-normal">({mentor.reviews})</span>
                                           </div>
                                      </div>
                                  </div>
                              </div>
                              
                              <div className="bg-zinc-50 p-4 border-t border-zinc-100 grid grid-cols-2 gap-3">
                                  <Link href={`/mentors/${mentor.id}`} className="block">
                                      <Button variant="outline" className="w-full font-bold border-zinc-300">View Profile</Button>
                                  </Link>
                                  <Button className="w-full bg-[#002147] hover:bg-blue-900 font-bold">Book Now</Button>
                              </div>
                          </CardContent>
                      </Card>
                    ))
                  )}
              </div>
          </main>
      </div>
    </div>
  );
}
