'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Share2, Download, CheckCircle, Brain, Target } from 'lucide-react';
import { ASSESSMENT_RESULTS } from '@/data/assessment';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

export default function DetailedResultsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
         <div className="flex justify-between items-start mb-8">
            <div>
               <h1 className="text-4xl font-bold mb-2">Detailed Analysis</h1>
               <p className="text-zinc-500">Based on your assessment completed on Jan 15, 2026</p>
            </div>
            <div className="flex gap-2">
               <Button variant="outline"><Share2 className="w-4 h-4 mr-2" /> Share</Button>
               <Button><Download className="w-4 h-4 mr-2" /> Download Report</Button>
            </div>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {/* Main Chart */}
            <Card className="md:col-span-2">
               <CardHeader>
                  <CardTitle>Personality Traits Profile</CardTitle>
               </CardHeader>
               <CardContent>
                  <div className="h-[400px] w-full">
                     <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={ASSESSMENT_RESULTS.traits}>
                           <PolarGrid />
                           <PolarAngleAxis dataKey="label" />
                           <PolarRadiusAxis />
                           <Radar name="You" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
                           <Legend />
                        </RadarChart>
                     </ResponsiveContainer>
                  </div>
               </CardContent>
            </Card>

            {/* Key Insight */}
            <div className="space-y-6">
               <Card className="bg-blue-600 text-white border-none">
                  <CardContent className="p-8 text-center">
                     <Brain className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                     <h3 className="text-2xl font-bold mb-2">{ASSESSMENT_RESULTS.personality_type}</h3>
                     <p className="text-blue-100">Your Archetype</p>
                  </CardContent>
               </Card>

               <Card>
                  <CardHeader><CardTitle>Top Career Matches</CardTitle></CardHeader>
                  <CardContent>
                     <div className="space-y-4">
                        {ASSESSMENT_RESULTS.career_matches.map((match, i) => (
                           <div key={i} className="flex items-center justify-between">
                              <span className="font-medium">{match.title}</span>
                              <Badge className={i === 0 ? "bg-green-600" : "bg-blue-600"}>{match.match}% Match</Badge>
                           </div>
                        ))}
                     </div>
                  </CardContent>
               </Card>
            </div>
         </div>

         {/* Detailed Text Analysis */}
         <Card className="mt-8">
            <CardHeader className="flex flex-row items-center gap-4">
               <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                  <Target className="w-6 h-6" />
               </div>
               <CardTitle>Psychometric Analysis</CardTitle>
            </CardHeader>
            <CardContent>
               <p className="text-lg text-zinc-700 leading-relaxed">
                  {ASSESSMENT_RESULTS.analysis}
               </p>
               <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                     <h4 className="font-bold flex items-center gap-2 mb-4">
                        <CheckCircle className="w-5 h-5 text-green-500" /> Strengths
                     </h4>
                     <ul className="list-disc pl-5 space-y-2 text-zinc-600">
                        <li>Strategic thinking and long-term planning</li>
                        <li>High standards of performance</li>
                        <li>Independent and self-motivated</li>
                     </ul>
                  </div>
                  <div>
                     <h4 className="font-bold flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-orange-500" /> Growth Areas
                     </h4>
                     <ul className="list-disc pl-5 space-y-2 text-zinc-600">
                        <li>May overlook emotional aspects of decisions</li>
                        <li>Can be overly critical of others</li>
                        <li>Tendency to over-analyze simple problems</li>
                     </ul>
                  </div>
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}

// Mock component for missing lucide icon in this file scope (AlertTriangle was imported but I missed adding it to import list above if I copy-pasted wrong, checking...)
// Actually I see AlertTriangle is NOT imported. Fixing import.
import { AlertTriangle } from 'lucide-react'; 
