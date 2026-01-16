import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MessageSquare, Users, Calendar, Search, } from 'lucide-react';

export default function CommunityPage() {
  const discussions = [
    { title: "Is it worth dropping a year for JEE?", author: "StudentA", replies: 45, views: "1.2k", tag: "Exam Prep" },
    { title: "Best engineering colleges in Bangalore with good placement?", author: "RohanK", replies: 32, views: "850", tag: "Colleges" },
    { title: "Switching from Commerce to Design - is it possible?", author: "PriyaS", replies: 18, views: "500", tag: "Career Advice" },
  ];

  const events = [
    { title: "Webinar: Cracking the SAT", date: "Jan 25, 5:00 PM", attendees: 120 },
    { title: "Live Q&A with Dr. Rao (Career Counselor)", date: "Jan 28, 6:30 PM", attendees: 85 },
  ];

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero */}
      <div className="bg-white border-b py-12">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-4">Beta Access</Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Join the Conversation</h1>
          <p className="text-zinc-500 text-lg mb-8">
            Connect with 50,000+ students, parents, and mentors. Share your journey and get answers.
          </p>
          <div className="relative max-w-md mx-auto">
             <Search className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
             <Input placeholder="Search discussions, experts, topics..." className="pl-10 h-12" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Trending Discussions</h2>
            <Button>Start a Discussion</Button>
          </div>

          <div className="space-y-4">
            {discussions.map((d, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                       <Badge variant="outline">{d.tag}</Badge>
                       <h3 className="font-bold text-lg">{d.title}</h3>
                       <div className="flex items-center gap-2 text-sm text-zinc-500">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback>{d.author[0]}</AvatarFallback>
                          </Avatar>
                          <span>Posted by {d.author}</span>
                          <span>•</span>
                          <span>{d.views} views</span>
                       </div>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-zinc-500">
                      <MessageSquare className="h-5 w-5" />
                      <span className="text-xs">{d.replies}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="pt-8">
            <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {events.map((e, i) => (
                <Card key={i}>
                  <CardHeader>
                     <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-2">
                       <Calendar className="h-5 w-5 text-blue-600" />
                     </div>
                     <CardTitle className="text-base">{e.title}</CardTitle>
                     <CardDescription>{e.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                     <div className="flex items-center justify-between">
                        <span className="text-sm text-zinc-500">{e.attendees} attending</span>
                        <Button variant="outline" size="sm">Register</Button>
                     </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-none">
            <CardContent className="p-6">
               <h3 className="font-bold text-xl mb-2">Become a Mentor</h3>
               <p className="text-blue-100 text-sm mb-4">Share your knowledge and help students succeed.</p>
               <Button variant="secondary" className="w-full">Apply Now</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popular Groups</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               {[
                 { name: "JEE Aspirants 2025", members: "12k" },
                 { name: "Study Abroad Club", members: "8k" },
                 { name: "Commerce Students Association", members: "5k" }
               ].map((g, i) => (
                 <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <div className="h-10 w-10 rounded bg-zinc-100 flex items-center justify-center">
                          <Users className="h-5 w-5 text-zinc-500" />
                       </div>
                       <div>
                          <div className="font-medium text-sm">{g.name}</div>
                          <div className="text-xs text-zinc-500">{g.members} members</div>
                       </div>
                    </div>
                    <Button variant="ghost" size="sm">Join</Button>
                 </div>
               ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
