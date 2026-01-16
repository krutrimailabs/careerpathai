import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import { COUNTRIES, EXAMS, APP_GUIDES } from '@/data/study-abroad';

export default function StudyAbroadHome() {
  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      
      {/* Hero */}
      <div className="bg-[#002147] text-white py-20">
         <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">Go Global with CareerPath</h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-10">
               Discover top universities, scholarships, and simplified application guides for your international education journey.
            </p>
            <div className="flex gap-4 justify-center">
               <Link href="/study-abroad/universities">
                  <Button size="lg" className="bg-[#FF9900] hover:bg-orange-600 text-white border-none">Find Universities</Button>
               </Link>
               <Link href="/study-abroad/application">
                  <Button size="lg" variant="outline" className="text-white hover:bg-white/10 border-white hover:text-white">Application Guide</Button>
               </Link>
            </div>
         </div>
      </div>

      {/* Popular Destinations */}
      <div className="container mx-auto px-4 py-16">
         <div className="flex justify-between items-end mb-8">
            <div>
               <h2 className="text-3xl font-bold mb-2">Popular Destinations</h2>
               <p className="text-zinc-500">Explore guides for the world&apos;s best student cities.</p>
            </div>
         </div>

         <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {COUNTRIES.map((country) => (
               <Link key={country.slug} href={`/study-abroad/countries/${country.slug}`}>
                  <Card className="hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer h-full">
                     <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
                        <div className="text-6xl mb-4">{country.flag}</div>
                        <h3 className="font-bold text-xl mb-2">{country.name}</h3>
                        <p className="text-xs text-zinc-500 mb-4">{country.avgCost}</p>
                        <span className="text-blue-600 text-sm font-medium flex items-center gap-1 group">
                           Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                     </CardContent>
                  </Card>
               </Link>
            ))}
         </div>
      </div>

      {/* Exam Prep & Resources Grid */}
      <div className="container mx-auto px-4 py-8">
         <div className="grid md:grid-cols-2 gap-8">
            
            {/* Exam Prep */}
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
               <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                     <BookOpen className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold">Ace Your Exams</h2>
               </div>
               <div className="space-y-4">
                  {EXAMS.map(exam => (
                     <div key={exam.slug} className="flex justify-between items-center p-4 bg-zinc-50 rounded-lg group hover:bg-zinc-100 transition-colors cursor-pointer">
                        <div>
                           <div className="font-bold">{exam.name}</div>
                           <div className="text-xs text-zinc-500">{exam.type}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-zinc-600" />
                     </div>
                  ))}
               </div>
               <Link href="/study-abroad/exams">
                  <Button className="w-full mt-6" variant="outline">View All Exams</Button>
               </Link>
            </div>

            {/* Application Guide */}
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
               <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                     <GraduationCap className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold">Application Toolkit</h2>
               </div>
               <div className="space-y-4">
                  {APP_GUIDES.map(guide => (
                     <div key={guide.id} className="flex justify-between items-center p-4 bg-zinc-50 rounded-lg group hover:bg-zinc-100 transition-colors cursor-pointer">
                        <div>
                           <div className="font-bold">{guide.title}</div>
                           <div className="text-xs text-zinc-500">{guide.duration}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-zinc-600" />
                     </div>
                  ))}
               </div>
               <Link href="/study-abroad/application">
                  <Button className="w-full mt-6" variant="outline">View Full Guide</Button>
               </Link>
            </div>

         </div>
      </div>

    </div>
  );
}
