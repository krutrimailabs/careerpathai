import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, Flag } from 'lucide-react';
import { MODERATION_QUEUE } from '@/data/admin';

export default function ModerationPage() {
  return (
    <div className="p-8">
       <div className="flex justify-between items-center mb-8">
         <h1 className="text-3xl font-bold">Content Moderation</h1>
         <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            {MODERATION_QUEUE.length} Items Pending Review
         </div>
      </div>

      <div className="grid gap-6">
         {MODERATION_QUEUE.map((item) => (
            <Card key={item.id} className="border-l-4 border-l-orange-400">
               <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                     <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-zinc-100 rounded-full flex items-center justify-center font-bold text-zinc-500">
                           {item.user.substring(0, 2)}
                        </div>
                        <div>
                           <div className="font-bold">{item.user}</div>
                           <div className="text-xs text-zinc-500">{item.date} • {item.type}</div>
                        </div>
                     </div>
                     <Badge variant="outline" className={item.status === 'Flagged' ? 'border-red-200 text-red-600 bg-red-50' : 'bg-orange-50 text-orange-600 border-orange-200'}>
                        {item.status}
                     </Badge>
                  </div>

                  <div className="bg-zinc-50 p-4 rounded-lg text-zinc-700 mb-6 italic">
                     &quot;{item.content}&quot;
                  </div>

                  <div className="flex gap-4">
                     <Button className="flex-1 bg-green-600 hover:bg-green-700 gap-2">
                        <Check className="w-4 h-4" /> Approve
                     </Button>
                     <Button variant="outline" className="flex-1 border-red-200 text-red-600 hover:bg-red-50 gap-2">
                        <X className="w-4 h-4" /> Reject
                     </Button>
                     <Button variant="ghost" className="flex-1 gap-2 text-zinc-500">
                        <Flag className="w-4 h-4" /> Escalate
                     </Button>
                  </div>
               </CardContent>
            </Card>
         ))}

         {MODERATION_QUEUE.length === 0 && (
            <div className="text-center py-20 bg-zinc-50 rounded-xl text-zinc-500">
               <Check className="w-12 h-12 mx-auto text-green-500 mb-4" />
               <p className="text-lg">All caught up! No items to match.</p>
            </div>
         )}
      </div>
    </div>
  );
}
