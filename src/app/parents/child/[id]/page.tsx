import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, BookOpen, Star, Activity, Briefcase } from 'lucide-react';
import { CHILD_DATA } from '@/data/parents';

export default async function ChildProgressPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  if (id !== CHILD_DATA.id) {
    // For mock purposes, only one child exists
    // notFound(); // In real app, check DB
  }

  return (
    <div className="min-h-screen bg-zinc-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
         <div className="flex items-center gap-4 mb-8">
             <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <User className="w-8 h-8" />
             </div>
             <div>
                <h1 className="text-3xl font-bold">{CHILD_DATA.name}</h1>
                <p className="text-zinc-500">{CHILD_DATA.school} • {CHILD_DATA.grade}</p>
             </div>
             <Button className="ml-auto" variant="outline">Edit Profile</Button>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
               
               {/* Academic Performance */}
               <Card>
                  <CardHeader>
                     <CardTitle className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-blue-600" /> Academic Overview
                     </CardTitle>
                  </CardHeader>
                  <CardContent>
                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div className="bg-zinc-50 p-4 rounded-lg text-center">
                           <div className="text-2xl font-bold text-zinc-900">{CHILD_DATA.academics.gpa}</div>
                           <div className="text-xs text-zinc-500 uppercase font-bold">GPA</div>
                        </div>
                        <div className="bg-zinc-50 p-4 rounded-lg text-center">
                           <div className="text-2xl font-bold text-zinc-900">{CHILD_DATA.academics.attendance}</div>
                           <div className="text-xs text-zinc-500 uppercase font-bold">Attendance</div>
                        </div>
                     </div>
                     <h4 className="font-bold text-sm mb-3">Recent Grades</h4>
                     <div className="space-y-3">
                        {CHILD_DATA.academics.recent_grades.map((subject, i) => (
                           <div key={i} className="flex justify-between items-center border-b pb-2 last:border-0 last:pb-0">
                              <span className="font-medium text-zinc-700">{subject.subject}</span>
                              <div className="flex items-center gap-3">
                                 <span className="text-zinc-500 text-sm">{subject.score}/100</span>
                                 <Badge className={subject.grade.startsWith('A') ? 'bg-green-600' : 'bg-blue-600'}>{subject.grade}</Badge>
                              </div>
                           </div>
                        ))}
                     </div>
                  </CardContent>
               </Card>

               {/* Recent Activity */}
               <Card>
                  <CardHeader>
                     <CardTitle className="flex items-center gap-2">
                        <Activity className="w-5 h-5 text-orange-600" /> Recent Activity
                     </CardTitle>
                  </CardHeader>
                  <CardContent>
                     <div className="space-y-6 relative border-l border-zinc-200 ml-3 pl-8">
                        {CHILD_DATA.recent_activity.map((activity, i) => (
                           <div key={i} className="relative">
                              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-white border-4 border-orange-100 ring-2 ring-orange-500"></span>
                              <div className="flex justify-between items-start">
                                 <div>
                                    <h4 className="font-bold text-zinc-900">{activity.action}</h4>
                                    <p className="text-zinc-600 text-sm">{activity.detail}</p>
                                 </div>
                                 <span className="text-xs text-zinc-400">{activity.date}</span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </CardContent>
               </Card>

            </div>

            <div className="space-y-8">
               {/* Recommended Careers (Based on Assessment) */}
               <Card className="bg-blue-600 text-white border-none">
                  <CardHeader>
                     <CardTitle className="text-white flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-blue-200" /> Career Matches
                     </CardTitle>
                  </CardHeader>
                  <CardContent>
                     <p className="text-blue-100 text-sm mb-4">
                        Based on Arjun&apos;s recent aptitude test and interests.
                     </p>
                     <div className="flex flex-wrap gap-2">
                        {CHILD_DATA.recommended_careers.map(career => (
                           <Badge key={career} variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-none">
                              {career}
                           </Badge>
                        ))}
                     </div>
                  </CardContent>
               </Card>

               {/* Interests */}
               <Card>
                  <CardHeader>
                     <CardTitle className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500" /> Interests
                     </CardTitle>
                  </CardHeader>
                  <CardContent>
                     <div className="flex flex-wrap gap-2">
                        {CHILD_DATA.interests.map(interest => (
                           <Badge key={interest} variant="outline" className="border-yellow-200 bg-yellow-50 text-yellow-800">
                              {interest}
                           </Badge>
                        ))}
                     </div>
                  </CardContent>
               </Card>
            </div>
         </div>
      </div>
    </div>
  );
}
