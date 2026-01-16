'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const JOURNEYS = {
  class10: {
    title: 'Class 10 Student',
    goal: 'Choosing the Right Stream',
    steps: [
      { step: 1, title: 'Sign Up', time: '3 min', link: '/api/auth/signin' },
      { step: 2, title: 'Take Stream Selector Assessment', time: '15 min', link: '/assessment' },
      { step: 3, title: 'View Recommended Streams', time: '5 min', link: '/assessment/results' },
      { step: 4, title: 'Explore Careers in Each Stream', time: '10 min', link: '/careers' },
      { step: 5, title: 'Book Free Counselor Session', time: '2 min', link: '/mentors' },
      { step: 6, title: 'Create Account for Tracking', time: '2 min', link: '/dashboard' },
      { step: 7, title: 'Receive Weekly Preparation Tips', time: 'Ongoing', link: '#' },
    ]
  },
  class12: {
    title: 'Class 12 Student',
    goal: 'Choosing the Best College',
    steps: [
      { step: 1, title: 'Enter Exam Rank', time: '1 min', link: '#' },
      { step: 2, title: 'Use College Predictor', time: '2 min', link: '/colleges' },
      { step: 3, title: 'Compare Shortlisted Colleges', time: '10 min', link: '/colleges/compare' },
      { step: 4, title: 'Check Placement Records', time: '5 min', link: '/colleges' },
      { step: 5, title: 'Read Student Reviews', time: '8 min', link: '/colleges' },
      { step: 6, title: 'Calculate ROI', time: '3 min', link: '/colleges/roi' },
      { step: 7, title: 'Apply to Colleges', time: '15 min', link: '#' },
      { step: 8, title: 'Track Applications', time: 'Ongoing', link: '/dashboard' },
    ]
  },
  graduate: {
    title: 'Graduate / Professional',
    goal: 'Exploring Career Change',
    steps: [
      { step: 1, title: 'Take Career Transition Assessment', time: '25 min', link: '/assessment' },
      { step: 2, title: 'View Career Match Report', time: '8 min', link: '/assessment/results' },
      { step: 3, title: 'Explore Skill Gap Analysis', time: '5 min', link: '/assessment/skills' },
      { step: 4, title: 'Find Upskill Courses', time: '10 min', link: '#' },
      { step: 5, title: 'Connect with Industry Mentor', time: '3 min', link: '/mentors' },
      { step: 6, title: 'Create Transition Roadmap', time: '10 min', link: '/dashboard' },
      { step: 7, title: 'Join Peer Support Group', time: '2 min', link: '#' },
    ]
  }
};

export default function JourneysPage() {
  const [activeTab, setActiveTab] = useState<'class10' | 'class12' | 'graduate'>('class10');

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans py-12 px-4 md:px-6">
       <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">How It Works</h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">
             Select your current stage to see your personalized roadmap to success.
          </p>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
             <TabButton 
                isActive={activeTab === 'class10'} 
                onClick={() => setActiveTab('class10')}
                label="Class 10 (Stream)" 
             />
             <TabButton 
                isActive={activeTab === 'class12'} 
                onClick={() => setActiveTab('class12')}
                label="Class 12 (College)" 
             />
             <TabButton 
                isActive={activeTab === 'graduate'} 
                onClick={() => setActiveTab('graduate')}
                label="Working Professional" 
             />
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
                <div className="bg-blue-600 p-6 text-white text-center">
                   <h2 className="text-2xl font-bold">{JOURNEYS[activeTab].title}</h2>
                   <p className="text-blue-100">{JOURNEYS[activeTab].goal}</p>
                </div>
                <CardContent className="p-8">
                   <div className="relative">
                      {/* Vertical Line */}
                      <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-zinc-200 dark:bg-zinc-800"></div>

                      <div className="space-y-8">
                         {JOURNEYS[activeTab].steps.map((step, idx) => (
                            <div key={idx} className="relative flex items-center gap-6">
                               <div className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-white bg-blue-100 text-blue-600 dark:border-zinc-950 dark:bg-blue-900 dark:text-blue-300 font-bold text-xl shadow-sm">
                                  {step.step}
                               </div>
                               <div className="flex-1 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex justify-between items-center group">
                                  <div>
                                     <h3 className="font-semibold text-lg">{step.title}</h3>
                                     <Badge variant="secondary" className="mt-1">{step.time}</Badge>
                                  </div>
                                  <Link href={step.link}>
                                     <Button variant="ghost" size="icon" className="group-hover:text-blue-600">
                                        <ArrowRight className="w-5 h-5" />
                                     </Button>
                                  </Link>
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>
                </CardContent>
             </Card>
          </div>

          <div className="text-center mt-12">
             <Link href="/assessment">
                <Button size="lg" className="h-12 px-8">Start Your Journey Now</Button>
             </Link>
          </div>
       </div>
    </div>
  );
}

function TabButton({ isActive, onClick, label }: { isActive: boolean, onClick: () => void, label: string }) {
   return (
      <button 
         onClick={onClick}
         className={`px-6 py-3 rounded-full font-medium transition-all ${
            isActive 
            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
            : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
         }`}
      >
         {label}
      </button>
   )
}
