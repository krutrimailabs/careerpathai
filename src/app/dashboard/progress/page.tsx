'use client';
// Using 'use client' because charts usually need client-side rendering, though here we use simple divs.

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { PROGRESS_STATS } from '@/data/dashboard';

export default function ProgressPage() {
  return (
    <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-2">Performance Analytics</h1>
       <p className="text-zinc-500 mb-8">Track your skills and test scores.</p>

       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Profile Completion */}
          <Card>
             <CardHeader>
                <CardTitle>Profile Strength</CardTitle>
             </CardHeader>
             <CardContent className="flex flex-col items-center py-8">
                <div className="relative w-40 h-40 flex items-center justify-center">
                   <svg className="w-full h-full transform -rotate-90">
                      <circle cx="80" cy="80" r="70" fill="none" stroke="#e4e4e7" strokeWidth="12" />
                      <circle cx="80" cy="80" r="70" fill="none" stroke="#2563eb" strokeWidth="12" strokeDasharray="440" strokeDashoffset={440 - (440 * PROGRESS_STATS.profileCompletion) / 100} className="transition-all duration-1000 ease-out" />
                   </svg>
                   <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
                      {PROGRESS_STATS.profileCompletion}%
                   </div>
                </div>
                <p className="text-center text-zinc-500 mt-4 text-sm">Great job! Add your extracurriculars to reach 100%.</p>
             </CardContent>
          </Card>

          {/* Skill Radar (simulated with bars for simplicity) */}
          <Card className="lg:col-span-2">
             <CardHeader>
                <CardTitle>Subject Mastery</CardTitle>
             </CardHeader>
             <CardContent>
                <div className="space-y-6">
                   {PROGRESS_STATS.skills.map(skill => (
                      <div key={skill.subject}>
                         <div className="flex justify-between text-sm mb-2">
                            <span className="font-medium">{skill.subject}</span>
                            <span className="text-zinc-500">{skill.A} / {skill.fullMark}</span>
                         </div>
                         <Progress value={(skill.A / skill.fullMark) * 100} className="h-2" />
                      </div>
                   ))}
                </div>
             </CardContent>
          </Card>

          {/* Mock Test Trends (Bar Chart) */}
          <Card className="md:col-span-2 lg:col-span-3">
             <CardHeader>
                <CardTitle>Mock Test Performance Trend</CardTitle>
             </CardHeader>
             <CardContent>
                <div className="h-64 flex items-end gap-4 md:gap-8 pt-8">
                   {PROGRESS_STATS.mockTests.map(test => (
                      <div key={test.date} className="flex-1 flex flex-col items-center gap-2 group">
                         <div className="relative w-full bg-blue-100 rounded-t-sm hover:bg-blue-200 transition-colors" style={{ height: `${(test.score / 200) * 100}%` }}>
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                               {test.score}
                            </div>
                         </div>
                         <span className="text-xs font-medium text-zinc-500">{test.date}</span>
                      </div>
                   ))}
                </div>
             </CardContent>
          </Card>

       </div>
    </div>
  );
}
