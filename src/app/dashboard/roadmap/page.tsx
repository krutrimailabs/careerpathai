import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CAREER_ROADMAP } from '@/data/dashboard';
import { CheckCircle2, Circle } from 'lucide-react';

export default function RoadmapPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
         <div>
            <h1 className="text-3xl font-bold mb-2">My Career Roadmap</h1>
            <p className="text-zinc-500">Your step-by-step guide to success.</p>
         </div>
         <Button>Update Progress</Button>
      </div>

      <div className="max-w-3xl mx-auto relative">
         {/* Vertical Line */}
         <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-200"></div>

         <div className="space-y-12">
            {CAREER_ROADMAP.map((stage) => {
               const Icon = stage.icon;
               return (
                  <div key={stage.id} className="relative pl-24">
                     {/* Icon Marker */}
                     <div className={`absolute left-4 top-0 w-8 h-8 rounded-full border-2 bg-white flex items-center justify-center z-10 ${
                        stage.status === 'completed' ? 'border-green-600 text-green-600' :
                        stage.status === 'current' ? 'border-blue-600 text-blue-600 ring-4 ring-blue-100' :
                        'border-zinc-300 text-zinc-300'
                     }`}>
                        <Icon className="w-4 h-4" />
                     </div>

                     <Card className={`border-l-4 ${
                        stage.status === 'current' ? 'border-l-blue-600 shadow-md' : 'border-l-transparent'
                     }`}>
                        <CardContent className="p-6">
                           <h3 className="text-xl font-bold mb-4">{stage.stage}</h3>
                           <div className="space-y-3">
                              {stage.items.map((item) => (
                                 <div key={item.id} className="flex items-start gap-3">
                                    {item.completed ? (
                                       <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                    ) : (
                                       <Circle className="w-5 h-5 text-zinc-300 shrink-0 mt-0.5" />
                                    )}
                                    <span className={item.completed ? 'text-zinc-500 line-through' : 'text-zinc-700 font-medium'}>
                                       {item.title}
                                    </span>
                                 </div>
                              ))}
                           </div>
                        </CardContent>
                     </Card>
                  </div>
               );
            })}
         </div>
      </div>
    </div>
  );
}
