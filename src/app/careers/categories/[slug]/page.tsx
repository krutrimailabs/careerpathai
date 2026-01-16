import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Briefcase, TrendingUp, IndianRupee } from 'lucide-react';
import { CAREERS, CATEGORIES } from '@/data/careers';

// Helper to normalize slugs
const normalize = (str: string) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export default async function CareerCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Find category by matching normalized slug
  const category = CATEGORIES.find(c => normalize(c) === slug);

  if (!category) {
    notFound();
  }

  const categoryCareers = CAREERS.filter(c => c.category === category);

  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      <div className="bg-white border-b py-12">
         <div className="container mx-auto px-4">
            <Link href="/careers" className="inline-flex items-center text-sm text-zinc-500 hover:text-blue-600 mb-6 transition-colors">
               <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Careers
            </Link>
            <h1 className="text-4xl font-bold mb-4">{category} Careers</h1>
            <p className="text-xl text-zinc-500 max-w-2xl">
               Explore top career paths, salary trends, and opportunities in the {category} sector.
            </p>
         </div>
      </div>

      <div className="container mx-auto px-4 py-12">
         {categoryCareers.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {categoryCareers.map(career => (
                  <Card key={career.id} className="hover:shadow-lg transition-shadow">
                     <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                           <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                              <Briefcase className="w-5 h-5" />
                           </div>
                           <Badge variant="outline">{career.category}</Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{career.title}</h3>
                        <p className="text-sm text-zinc-500 line-clamp-3 mb-6">
                           {career.short_description}
                        </p>
                        
                        <div className="space-y-2 mb-6">
                           <div className="flex items-center text-sm text-zinc-600">
                              <IndianRupee className="w-4 h-4 mr-2 text-zinc-400" />
                              <span>₹{(career.financials.starting_salary.min / 100000).toFixed(1)}L - {(career.financials.starting_salary.max / 100000).toFixed(1)}L / year</span>
                           </div>
                           <div className="flex items-center text-sm text-zinc-600">
                              <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                              <span>{career.financials.five_year_growth_percentage}% Growth (5y)</span>
                           </div>
                        </div>
                     </CardContent>
                     <CardFooter className="p-6 pt-0">
                        <Link href={`/careers/${career.slug}`} className="w-full">
                           <Button className="w-full">View Career Details</Button>
                        </Link>
                     </CardFooter>
                  </Card>
               ))}
            </div>
         ) : (
            <div className="text-center py-20">
               <h3 className="text-xl font-bold text-zinc-900 mb-2">No careers found yet</h3>
               <p className="text-zinc-500">We are adding more careers to the {category} category soon.</p>
               <Link href="/careers">
                  <Button variant="outline" className="mt-6">Explore Other Categories</Button>
               </Link>
            </div>
         )}
      </div>
    </div>
  );
}
