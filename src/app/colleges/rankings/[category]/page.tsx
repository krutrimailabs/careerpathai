import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Trophy, MapPin, Star } from 'lucide-react';
import { RANKINGS, COLLEGES } from '@/data/colleges';

type CollegeRanking = {
  rank: number;
  id: string;
  name: string;
};

export default async function RankingsPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  
  // Normalize category name for lookup (e.g. 'engineering' -> 'Engineering')
  const categoryKey = Object.keys(RANKINGS).find(
    k => k.toLowerCase() === category.toLowerCase()
  ) as keyof typeof RANKINGS | undefined;

  if (!categoryKey) {
    notFound();
  }

  const rankingList = RANKINGS[categoryKey];

  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      <div className="bg-white border-b py-12">
         <div className="container mx-auto px-4">
            <Link href="/colleges" className="inline-flex items-center text-sm text-zinc-500 hover:text-blue-600 mb-6 transition-colors">
               <ArrowLeft className="w-4 h-4 mr-2" /> Back to Colleges
            </Link>
            <h1 className="text-4xl font-bold mb-4">Top {categoryKey} Colleges 2026</h1>
            <p className="text-xl text-zinc-500 max-w-2xl">
               The most prestigious institutions in {categoryKey} ranked by NIRF and other indices.
            </p>
         </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
         <div className="bg-white rounded-xl border shadow-sm divide-y">
            {rankingList.map((item: CollegeRanking) => {
               const college = COLLEGES.find(c => c.id === item.id);
               if (!college) return null;

               return (
                  <div key={item.rank} className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-zinc-50 transition-colors">
                     <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center border-4 border-yellow-50 text-2xl font-bold text-yellow-700 shadow-sm">
                        #{item.rank}
                     </div>
                     
                     <div className="flex-grow">
                        <Link href={`/colleges/${college.id}`} className="hover:underline">
                           <h3 className="text-xl font-bold text-zinc-900 mb-1">{college.name}</h3>
                        </Link>
                        <div className="flex items-center gap-4 text-sm text-zinc-500 mb-2">
                           <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {college.overview.location}</span>
                           <span className="flex items-center gap-1"><Trophy className="w-3 h-3" /> Rank {college.overview.nirf_rank} NIRF</span>
                        </div>
                        <div className="flex gap-2">
                           <Badge variant="secondary" className="text-xs">
                              {college.overview.college_type}
                           </Badge>
                           <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                              <Star className="w-3 h-3 mr-1 fill-current" /> {college.reviews.average_rating}
                           </Badge>
                        </div>
                     </div>

                     <div className="flex-shrink-0">
                        <Link href={`/colleges/${college.id}`}>
                           <Button>View Profile</Button>
                        </Link>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
    </div>
  );
}
