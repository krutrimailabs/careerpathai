import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Phone } from 'lucide-react';
import { SAFETY_RESOURCES } from '@/data/parents';

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-zinc-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
         <div className="text-center mb-12">
            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">Safety & Well-being</h1>
            <p className="text-zinc-500 max-w-2xl mx-auto">
               Ensuring your child&apos;s safety is our priority. Explore our curated resources, safety ratings, and emergency guides.
            </p>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {SAFETY_RESOURCES.map((resource) => (
               <Card key={resource.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                     <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2">{resource.type}</div>
                     <CardTitle className="text-lg">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <p className="text-zinc-500 text-sm mb-6">{resource.description}</p>
                     <Button variant="outline" className="w-full">View Resource</Button>
                  </CardContent>
               </Card>
            ))}
         </div>

         <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-red-500">
               <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                     <Phone className="w-5 h-5 text-red-500" /> Emergency Helpline
                  </CardTitle>
               </CardHeader>
               <CardContent>
                  <div className="text-3xl font-bold text-red-600 mb-2">1800-123-SAFE</div>
                  <p className="text-zinc-500 text-sm">
                     24/7 dedicated helpline for students and parents facing any distress or safety concerns on campus.
                  </p>
               </CardContent>
            </Card>

             <Card>
               <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                     <MapPin className="w-5 h-5 text-blue-500" /> Live Safety Tracker
                  </CardTitle>
               </CardHeader>
               <CardContent>
                  <p className="text-zinc-500 text-sm mb-4">
                     Enable location sharing (optional) to let parents see the last known safe location when student is travelling.
                  </p>
                  <Button disabled variant="secondary" className="w-full">Coming Soon</Button>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
