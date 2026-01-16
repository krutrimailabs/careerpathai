import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, Users, Clock } from 'lucide-react';
import { EVENTS } from '@/data/community';
// Note: In a real app we would use Next.js Image component, but regular img is fine for external placeholder URLs in mock

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
       <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Upcoming Events</h1>
            <p className="text-zinc-500">Webinars, workshops, and virtual fairs.</p>
          </div>
       </div>

       <div className="grid md:grid-cols-2 gap-8">
          {EVENTS.map((event) => (
             <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row h-full md:h-64">
                <div className="md:w-2/5 bg-zinc-100 relative">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img src={event.image} alt={event.title} className="w-full h-48 md:h-full object-cover" />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-sm font-bold shadow-sm">
                      {event.type}
                   </div>
                </div>
                <div className="p-6 md:w-3/5 flex flex-col justify-between">
                   <div>
                       <div className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-2">
                          <Calendar className="w-4 h-4" /> {event.date}
                       </div>
                       <h3 className="text-xl font-bold mb-3 line-clamp-2">{event.title}</h3>
                       <div className="space-y-2 text-sm text-zinc-500">
                          <div className="flex items-center gap-2">
                             <Clock className="w-4 h-4" /> {event.time}
                          </div>
                          <div className="flex items-center gap-2">
                             <Users className="w-4 h-4" /> {event.attendees} Attending
                          </div>
                       </div>
                   </div>
                   <div className="mt-6 md:mt-0 pt-4 md:pt-0">
                      <Button className="w-full" variant="outline">Register Now</Button>
                   </div>
                </div>
             </Card>
          ))}
       </div>
    </div>
  );
}
