import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, ChevronUp, MessageCircle } from 'lucide-react';
import { QNA_ITEMS } from '@/data/community';

export default function QnAPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
       <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Community Q&A</h1>
          <p className="text-zinc-500 mb-8">Get answers from experts and peers.</p>
          <div className="max-w-xl mx-auto flex gap-2">
             <div className="relative flex-1">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                 <Input placeholder="Search questions..." className="pl-10" />
             </div>
             <Button>Ask Question</Button>
          </div>
       </div>

       <div className="space-y-4">
          {QNA_ITEMS.map((q) => (
             <Card key={q.id} className="hover:border-orange-200 transition-colors">
                <CardContent className="p-6 flex gap-6">
                   <div className="flex flex-col items-center gap-2 text-zinc-500">
                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-orange-600 hover:bg-orange-50">
                         <ChevronUp className="w-6 h-6" />
                      </Button>
                      <span className="font-bold text-lg text-zinc-900">{q.votes}</span>
                      <span className="text-xs">votes</span>
                   </div>

                   <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 hover:text-orange-600 cursor-pointer transition-colors">
                         {q.question}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                                {q.tags.map(tag => (
                                   <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
                                ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-zinc-500">
                         <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded">
                               <MessageCircle className="w-3 h-3" /> {q.answers} Answers
                            </span>
                         </div>
                         <div className="flex items-center gap-2">
                            <span>asked {q.time} by</span>
                            <span className="text-blue-600 cursor-pointer">{q.author}</span>
                         </div>
                      </div>
                   </div>
                </CardContent>
             </Card>
          ))}
       </div>
    </div>
  );
}
