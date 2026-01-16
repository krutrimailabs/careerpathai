import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ChevronRight, FileText } from 'lucide-react';
import { ASSESSMENT_HISTORY } from '@/data/assessment';

export default function AssessmentHistoryPage() {
  return (
    <div className="min-h-screen bg-zinc-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
         <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Assessment History</h1>
            <Button>Take New Test</Button>
         </div>

         <div className="space-y-4">
            {ASSESSMENT_HISTORY.map((item) => (
               <Card key={item.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 flex items-center justify-between">
                     <div className="flex items-center gap-6">
                        <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                           <FileText className="w-6 h-6" />
                        </div>
                        <div>
                           <h3 className="font-bold text-lg mb-1">{item.type}</h3>
                           <div className="flex items-center text-sm text-zinc-500 gap-4">
                              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
                              <Badge variant="outline" className="text-zinc-500 font-normal">{item.status}</Badge>
                           </div>
                        </div>
                     </div>
                     
                     <div className="flex items-center gap-6">
                        <div className="text-right">
                           <p className="text-xs text-zinc-400 uppercase font-bold">Score/Result</p>
                           <p className="font-bold text-xl">{item.score}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-zinc-300" />
                     </div>
                  </CardContent>
               </Card>
            ))}
         </div>
      </div>
    </div>
  );
}
