import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Activity, Wallet, ShieldCheck, GraduationCap } from 'lucide-react';

export default function ParentPortalPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans py-12 px-4 md:px-6">
       <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Parent Dashboard</h1>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
             <Card className="bg-blue-600 text-white border-blue-500">
                <CardContent className="pt-6">
                   <div className="flex justify-between items-start mb-4">
                      <div>
                         <p className="text-blue-100 text-sm">Child&apos;s Name</p>
                         <h3 className="text-2xl font-bold">Rohan Kumar</h3>
                      </div>
                      <AvatarPlaceholder />
                   </div>
                   <div className="space-y-2">
                      <div className="flex justify-between text-xs text-blue-100">
                         <span>Career Readiness</span>
                         <span>70%</span>
                      </div>
                      <Progress value={70} className="bg-blue-800" />
                   </div>
                </CardContent>
             </Card>

             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                   <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
                   <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                   <ul className="space-y-3 mt-2 text-sm">
                      <li className="flex justify-between">
                         <span>Completed Interest Test</span>
                         <span className="text-muted-foreground">Yesterday</span>
                      </li>
                      <li className="flex justify-between">
                         <span>Shortlisted 3 Colleges</span>
                         <span className="text-muted-foreground">2 days ago</span>
                      </li>
                   </ul>
                </CardContent>
             </Card>

             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                   <CardTitle className="text-sm font-medium">Financial Goal</CardTitle>
                   <Wallet className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                   <div className="text-2xl font-bold">₹15.2L</div>
                   <p className="text-xs text-muted-foreground">Estimated for B.Tech CS</p>
                   <Button size="sm" variant="outline" className="w-full mt-4">Open Planner</Button>
                </CardContent>
             </Card>
          </div>

          <h2 className="text-xl font-semibold mb-4">Tools & Resources</h2>
          <div className="grid md:grid-cols-4 gap-4">
             <ResourceCard title="College Safety Score" icon={ShieldCheck} />
             <ResourceCard title="Loan Calculator" icon={Wallet} />
             <ResourceCard title="Talk to Counselor" icon={GraduationCap} />
             <ResourceCard title="Scholarships" icon={Activity} />
          </div>
       </div>
    </div>
  );
}

function ResourceCard({ title, icon: Icon }: { title: string; icon: React.ElementType }) {
   return (
      <Card className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
         <CardContent className="flex flex-col items-center justify-center py-6 text-center gap-2">
            <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
               <Icon className="w-5 h-5 text-zinc-900 dark:text-zinc-50" />
            </div>
            <span className="font-medium text-sm">{title}</span>
         </CardContent>
      </Card>
   )
}

function AvatarPlaceholder() {
   return <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center font-bold">RK</div>;
}
