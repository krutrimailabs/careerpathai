import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Video, Calendar, Clock, Star } from 'lucide-react';
const USER_SESSIONS = [
  { id: 1, mentorName: 'Dr. Emily Chen', role: 'Psychologist', date: 'Oct 24, 2023', time: '10:00 AM', status: 'Upcoming' },
  { id: 2, mentorName: 'Mark Thompson', role: 'Career Coach', date: 'Oct 20, 2023', time: '2:00 PM', status: 'Completed' }
];

export default function SessionsPage() {
  const upcoming = USER_SESSIONS.filter(s => s.status === 'Upcoming');
  const past = USER_SESSIONS.filter(s => s.status === 'Completed');

  return (
    <div className="min-h-screen bg-zinc-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
         <h1 className="text-3xl font-bold mb-8">My Sessions</h1>

         <div className="space-y-8">
            <section>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Video className="w-5 h-5 text-blue-600" /> Upcoming
                </h2>
                {upcoming.length > 0 ? (
                    <div className="space-y-4">
                        {upcoming.map(session => (
                            <Card key={session.id} className="border-l-4 border-l-blue-600">
                                <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-12 w-12">
                                            <AvatarFallback>{session.mentorName[0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="font-bold text-lg">{session.mentorName}</h3>
                                            <p className="text-sm text-zinc-500">{session.role}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-6">
                                        <div className="text-right">
                                            <div className="font-bold flex items-center justify-end gap-2">
                                                <Calendar className="w-4 h-4 text-zinc-400" /> {session.date}
                                            </div>
                                            <div className="text-sm text-zinc-500 flex items-center justify-end gap-2">
                                                <Clock className="w-4 h-4 text-zinc-400" /> {session.time}
                                            </div>
                                        </div>
                                        <Button className="w-32">Join Call</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <div className="p-8 bg-white rounded-xl border text-center text-zinc-500">No upcoming sessions.</div>
                )}
            </section>

            <section>
                <h2 className="text-xl font-bold mb-4 text-zinc-500">Past Sessions</h2>
                <div className="space-y-4 opacity-80">
                    {past.map(session => (
                        <Card key={session.id}>
                            <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <Avatar className="h-12 w-12 grayscale">
                                        <AvatarFallback>{session.mentorName[0]}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="font-bold text-lg">{session.mentorName}</h3>
                                        <div className="flex gap-2 mt-1">
                                            <Badge variant="secondary">Completed</Badge>
                                        </div>
                                    </div>
                                </div>
                                <Button variant="outline"><Star className="w-4 h-4 mr-2" /> Write Review</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
         </div>
      </div>
    </div>
  );
}
