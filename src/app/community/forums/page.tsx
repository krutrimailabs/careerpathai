
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, MessageSquare, PlusCircle, Pin } from 'lucide-react';
import { FORUM_TOPICS, FORUM_THREADS } from '@/data/community';

export default function ForumsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 space-y-6">
           <Button className="w-full gap-2" size="lg">
             <PlusCircle className="w-4 h-4" /> New Discussion
           </Button>

           <div className="bg-white rounded-xl border p-4 shadow-sm">
              <h3 className="font-bold mb-4 px-2">Categories</h3>
              <nav className="space-y-1">
                 {FORUM_TOPICS.map((topic) => (
                    <div key={topic.id} className="flex items-center justify-between p-2 hover:bg-zinc-50 rounded-lg cursor-pointer group transition-colors">
                       <span className="text-zinc-600 group-hover:text-blue-600 font-medium text-sm">{topic.name}</span>
                       <Badge variant="secondary" className="text-[10px] h-5">{topic.count}</Badge>
                    </div>
                 ))}
              </nav>
           </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
           <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Recent Discussions</h1>
              <div className="relative w-64">
                 <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                 <Input placeholder="Search discussions..." className="pl-9 bg-white" />
              </div>
           </div>

           <div className="space-y-4">
              {FORUM_THREADS.map((thread) => (
                 <Card key={thread.id} className="hover:border-blue-300 transition-colors cursor-pointer border-zinc-200">
                    <CardContent className="p-4 sm:p-6">
                       <div className="flex gap-4">
                          <div className="flex-col items-center gap-1 hidden sm:flex pt-1 text-zinc-400">
                             <div className="flex flex-col items-center">
                                <span className="text-lg font-bold text-zinc-700">{thread.replies}</span>
                                <span className="text-xs">Replies</span>
                             </div>
                          </div>
                          
                          <div className="flex-1">
                             <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-2">
                                   {thread.isPinned && <Pin className="w-3 h-3 text-blue-600 rotate-45" />}
                                   <Badge variant="outline" className="text-blue-600 border-blue-100 bg-blue-50 py-0 h-5 text-[10px]">{thread.topic}</Badge>
                                   <span className="text-xs text-zinc-400">• {thread.lastActive}</span>
                                </div>
                             </div>
                             
                             <h3 className="font-bold text-lg mb-2 text-zinc-900 group-hover:text-blue-600">
                                {thread.title}
                             </h3>
                             
                             <div className="flex items-center gap-2 mb-3">
                                {thread.tags.map(tag => (
                                   <span key={tag} className="text-xs text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-full">#{tag}</span>
                                ))}
                             </div>

                             <div className="flex items-center justify-between mt-4 border-t pt-3">
                                <div className="flex items-center gap-2">
                                   <Avatar className="w-5 h-5">
                                      <AvatarFallback className="text-[10px]">{thread.avatar}</AvatarFallback>
                                   </Avatar>
                                   <span className="text-xs font-medium text-zinc-600">{thread.author}</span>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-zinc-400 sm:hidden">
                                   <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {thread.replies}</span>
                                </div>
                             </div>
                          </div>
                       </div>
                    </CardContent>
                 </Card>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
