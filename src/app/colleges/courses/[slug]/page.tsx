import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Clock, Banknote, MapPin } from 'lucide-react';
import { COURSES, COLLEGES } from '@/data/colleges';

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const course = COURSES.find(c => c.slug === slug);
  if (!course) {
    notFound();
  }

  // Find colleges offering this course (based on matching strings in courses_offered)
  // Logic: check if college.academics.courses_offered includes course name or parts of it
  // For simplicity in mock data, let's match roughly or just show all for demo if needed,
  // but better to match 'B.Tech' for 'B.Tech in CSE' etc.
  const offeringColleges = COLLEGES.filter(c => 
     c.academics.courses_offered.some(offered => course.name.includes(offered))
  );

  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      <div className="bg-white border-b py-12">
         <div className="container mx-auto px-4">
            <Link href="/colleges" className="inline-flex items-center text-sm text-zinc-500 hover:text-blue-600 mb-6 transition-colors">
               <ArrowLeft className="w-4 h-4 mr-2" /> Back to Colleges
            </Link>
            <div className="flex items-center gap-3 mb-4">
               <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">{course.duration}</Badge>
               <Badge variant="outline">{course.avg_fees}</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4">{course.name}</h1>
            <div className="flex flex-wrap gap-2">
               {course.careers.map(career => (
                  <Badge key={career} variant="secondary" className="px-3 py-1">
                     Opens path to: {career}
                  </Badge>
               ))}
            </div>
         </div>
      </div>

      <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
         <div className="md:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold">Top Colleges Offering {course.name}</h2>
            
            {offeringColleges.length > 0 ? (
               <div className="grid gap-4">
                  {offeringColleges.map(college => (
                     <Card key={college.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6 flex items-center justify-between">
                           <div>
                              <h3 className="text-lg font-bold mb-1">{college.name}</h3>
                              <p className="text-sm text-zinc-500 mb-2 flex items-center gap-1">
                                 <MapPin className="w-3 h-3" /> {college.overview.location}
                              </p>
                              <div className="flex gap-2 text-xs">
                                 <Badge variant="outline">Rank {college.overview.nirf_rank}</Badge>
                                 <Badge variant="secondary" className="bg-green-50 text-green-700">
                                    ₹{college.financials.fees_per_year.toLocaleString()}/yr
                                 </Badge>
                              </div>
                           </div>
                           <Link href={`/colleges/${college.id}`}>
                              <Button variant="outline">View</Button>
                           </Link>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            ) : (
               <div className="bg-white p-8 rounded-xl border text-center text-zinc-500">
                  No colleges listed for this specific course in our database yet.
               </div>
            )}
         </div>

         <div>
            <Card>
               <CardHeader>
                  <CardTitle>Course Quick Facts</CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                     <Clock className="w-5 h-5 text-zinc-400" />
                     <div>
                        <p className="font-medium">Duration</p>
                        <p className="text-sm text-zinc-500">{course.duration}</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <Banknote className="w-5 h-5 text-zinc-400" />
                     <div>
                        <p className="font-medium">Average Fees</p>
                        <p className="text-sm text-zinc-500">{course.avg_fees}</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <BookOpen className="w-5 h-5 text-zinc-400" />
                     <div>
                        <p className="font-medium">Curriculum</p>
                        <p className="text-sm text-zinc-500">Theory + Practical Labs + Internship</p>
                     </div>
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
