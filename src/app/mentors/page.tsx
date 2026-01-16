import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Video, Star } from 'lucide-react';

const MENTORS = [
  { id: 1, name: 'Aditi Sharma', role: 'Software Engineer at Google', exp: '5 Yrs', rating: 4.9, tags: ['Coding', 'Interview Prep'], img: '' },
  { id: 2, name: 'Dr. Rahul Verma', role: 'Senior Resident at AIIMS', exp: '3 Yrs', rating: 4.8, tags: ['NEET Strategy', 'Medical'], img: '' },
  { id: 3, name: 'Sneha Gupta', role: 'Product Manager at Uber', exp: '7 Yrs', rating: 5.0, tags: ['Product', 'MBA'], img: '' },
  { id: 4, name: 'Karan Mehra', role: 'Corporate Lawyer', exp: '10 Yrs', rating: 4.7, tags: ['CLAT', 'Law Schools'], img: '' },
];

export default function MentorsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans py-12 px-4 md:px-6">
       <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-8">
             <div>
                <h1 className="text-3xl font-bold mb-2">Connect with Mentors</h1>
                <p className="text-muted-foreground">Book 1:1 sessions with industry experts.</p>
             </div>
             <Button>Join as Mentor</Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {MENTORS.map(mentor => (
                <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
                   <CardHeader className="flex flex-row items-center gap-4">
                      <Avatar className="w-16 h-16">
                         <AvatarImage src={mentor.img} />
                         <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                         <CardTitle className="text-lg">{mentor.name}</CardTitle>
                         <p className="text-sm text-muted-foreground">{mentor.role}</p>
                         <div className="flex items-center gap-1 text-xs mt-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /> {mentor.rating} • {mentor.exp} Exp
                         </div>
                      </div>
                   </CardHeader>
                   <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                         {mentor.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                      </div>
                      <div className="flex gap-2">
                         <Button className="w-full" variant="default">
                            <Calendar className="w-4 h-4 mr-2" /> Book Now
                         </Button>
                         <Button variant="outline" size="icon"><Video className="w-4 h-4" /></Button>
                      </div>
                   </CardContent>
                </Card>
             ))}
          </div>
       </div>
    </div>
  );
}
