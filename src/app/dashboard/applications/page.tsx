import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, MoreHorizontal } from 'lucide-react';
import { APPLICATIONS } from '@/data/dashboard';

export default function ApplicationsPage() {
  const columns = ['Interested', 'Applying', 'Submitted', 'Accepted'];

  return (
    <div className="container mx-auto px-4 py-8 h-[calc(100vh-100px)] flex flex-col">
      <div className="flex items-center justify-between mb-8">
         <div>
            <h1 className="text-3xl font-bold mb-2">College Applications</h1>
            <p className="text-zinc-500">Track the status of your university applications.</p>
         </div>
         <Button className="gap-2">
            <PlusCircle className="w-4 h-4" /> Add Application
         </Button>
      </div>

      <div className="flex-1 overflow-x-auto">
         <div className="flex gap-6 h-full min-w-[1000px]">
            {columns.map((col) => (
               <div key={col} className="w-1/4 bg-zinc-50 rounded-xl p-4 flex flex-col h-full border border-zinc-100">
                  <div className="flex items-center justify-between mb-4 px-2">
                     <h3 className="font-bold text-zinc-700">{col}</h3>
                     <Badge variant="secondary" className="bg-white">
                        {APPLICATIONS.filter(a => a.status === col).length}
                     </Badge>
                  </div>

                  <div className="space-y-3 flex-1 overflow-y-auto">
                     {APPLICATIONS.filter(a => a.status === col).map((app) => (
                        <Card key={app.id} className="cursor-grab hover:shadow-md transition-shadow">
                           <CardContent className="p-4">
                              <div className="flex justify-between items-start mb-3">
                                 <div className="w-8 h-8 bg-zinc-100 rounded flex items-center justify-center font-bold text-xs">
                                    {app.logo}
                                 </div>
                                 <Button variant="ghost" size="icon" className="h-6 w-6 -mr-2">
                                    <MoreHorizontal className="w-4 h-4" />
                                 </Button>
                              </div>
                              <h4 className="font-bold text-sm mb-1">{app.college}</h4>
                              <p className="text-xs text-zinc-500 mb-3">{app.program}</p>
                              <div className="text-[10px] text-zinc-400 bg-zinc-50 inline-block px-2 py-1 rounded">
                                 Deadline: {app.deadline}
                              </div>
                           </CardContent>
                        </Card>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
}
