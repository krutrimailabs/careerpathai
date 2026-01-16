import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, DollarSign, CheckCircle } from 'lucide-react';
import { COUNTRIES } from '@/data/study-abroad';
import Link from 'next/link';

export default async function CountryGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const country = COUNTRIES.find((c) => c.slug === slug);

  if (!country) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
       <div className="bg-white border-b py-12">
         <div className="container mx-auto px-4 max-w-5xl">
            <Link href="/study-abroad" className="inline-flex items-center text-sm text-zinc-500 hover:text-blue-600 mb-6 transition-colors">
               <ArrowLeft className="w-4 h-4 mr-2" /> Back to Study Abroad
            </Link>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
               <div className="text-8xl shadow-sm border p-4 rounded-xl bg-zinc-50">{country.flag}</div>
               <div>
                  <h1 className="text-4xl font-bold mb-4">Study in {country.name}</h1>
                  <p className="text-xl text-zinc-600 max-w-2xl mb-6">{country.description}</p>
                  
                  <div className="flex flex-wrap gap-4">
                     <Badge variant="secondary" className="px-3 py-1 text-base flex items-center gap-2">
                        <DollarSign className="w-4 h-4" /> Avg Cost: {country.avgCost}
                     </Badge>
                  </div>
               </div>
            </div>
         </div>
       </div>

       <div className="container mx-auto px-4 max-w-5xl py-12 grid md:grid-cols-3 gap-8">
          
          <div className="md:col-span-2 space-y-8">
             <Card>
                <CardHeader>
                   <CardTitle>Why {country.name}?</CardTitle>
                </CardHeader>
                <CardContent>
                   <ul className="grid gap-4">
                      {country.keyFeatures.map(feat => (
                         <li key={feat} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                            <span className="text-lg">{feat}</span>
                         </li>
                      ))}
                   </ul>
                </CardContent>
             </Card>

             <Card>
                <CardHeader>
                   <CardTitle>Top Universities</CardTitle>
                </CardHeader>
                <CardContent>
                   <div className="grid gap-4">
                      {country.topUniversities.map(uni => (
                         <div key={uni} className="flex items-center justify-between p-4 bg-zinc-50 rounded-lg border">
                            <div className="font-bold">{uni}</div>
                            <Button variant="ghost" size="sm" className="text-blue-600">View Info</Button>
                         </div>
                      ))}
                   </div>
                </CardContent>
             </Card>
          </div>

          <div className="space-y-6">
             <Card className="bg-blue-600 text-white border-none">
                <CardContent className="p-6">
                   <h3 className="text-xl font-bold mb-2">Need Guidance?</h3>
                   <p className="text-blue-100 mb-6">Talk to our experts who specialize in {country.name} admissions.</p>
                   <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">Book Consultation</Button>
                </CardContent>
             </Card>
          </div>

       </div>
    </div>
  );
}
