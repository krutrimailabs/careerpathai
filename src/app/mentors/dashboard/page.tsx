import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { IndianRupee, Users, Star, Calendar } from 'lucide-react';
import { MENTOR_STATS } from '@/data/mentors';

export default function MentorDashboardPage() {
  return (
    <div className="min-h-screen bg-zinc-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
         <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Mentor Dashboard</h1>
            <Button>Edit Profile</Button>
         </div>

         {/* Stats Grid */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
               <CardContent className="p-6 text-center">
                  <div className="text-zinc-500 text-xs uppercase font-bold mb-2 flex justify-center items-center gap-1">
                     <IndianRupee className="w-4 h-4" /> Earnings
                  </div>
                  <div className="text-2xl font-bold">₹{(MENTOR_STATS.total_earnings/1000).toFixed(1)}k</div>
               </CardContent>
            </Card>
            <Card>
               <CardContent className="p-6 text-center">
                  <div className="text-zinc-500 text-xs uppercase font-bold mb-2 flex justify-center items-center gap-1">
                     <Users className="w-4 h-4" /> Sessions
                  </div>
                  <div className="text-2xl font-bold">{MENTOR_STATS.sessions_conducted}</div>
               </CardContent>
            </Card>
            <Card>
               <CardContent className="p-6 text-center">
                  <div className="text-zinc-500 text-xs uppercase font-bold mb-2 flex justify-center items-center gap-1">
                     <Star className="w-4 h-4" /> Rating
                  </div>
                  <div className="text-2xl font-bold">{MENTOR_STATS.rating}</div>
               </CardContent>
            </Card>
            <Card>
               <CardContent className="p-6 text-center">
                  <div className="text-zinc-500 text-xs uppercase font-bold mb-2 flex justify-center items-center gap-1">
                     <Calendar className="w-4 h-4" /> Upcoming
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{MENTOR_STATS.upcoming_sessions}</div>
               </CardContent>
            </Card>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            <Card className="md:col-span-2">
               <CardHeader>
                  <CardTitle>Availability Settings</CardTitle>
               </CardHeader>
               <CardContent>
                  <div className="space-y-6">
                     <div className="flex items-center justify-between">
                        <div>
                           <div className="font-medium">Accepting New Bookings</div>
                           <div className="text-sm text-zinc-500">Allow students to book slots for next week.</div>
                        </div>
                        <Switch checked={true} />
                     </div>
                     <div className="flex items-center justify-between">
                        <div>
                           <div className="font-medium">Weekend Availability</div>
                           <div className="text-sm text-zinc-500">Enable slots on Saturday and Sunday.</div>
                        </div>
                        <Switch checked={false} />
                     </div>
                     <div className="flex items-center justify-between">
                        <div>
                           <div className="font-medium">Instant Booking</div>
                           <div className="text-sm text-zinc-500">Auto-confirm bookings without manual approval.</div>
                        </div>
                        <Switch checked={true} />
                     </div>
                  </div>
               </CardContent>
            </Card>

            <Card className="bg-blue-600 text-white border-none">
               <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-4">Pro Tips</h3>
                  <ul className="space-y-3 text-blue-100 text-sm">
                     <li>• Update your calendar weekly to avoid clashes.</li>
                     <li>• Respond to session requests within 24 hours.</li>
                     <li>• Ask students for prep material before the call.</li>
                  </ul>
                  <Button variant="secondary" className="w-full mt-6 text-blue-700">View Mentor Guide</Button>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
