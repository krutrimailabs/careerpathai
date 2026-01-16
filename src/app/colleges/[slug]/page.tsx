import { supabase } from "@/lib/supabase";
import { Metadata } from 'next';
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { data: colleges } = await supabase
    .schema('careerpath')
    .from('colleges')
    .select('slug');

  return (colleges || []).map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const { data: college } = await supabase
    .schema('careerpath')
    .from('colleges')
    .select('name, city, state')
    .eq('slug', slug)
    .single();

  if (!college) {
    return { title: 'College Not Found' };
  }

  return {
    title: `${college.name}, ${college.city} - Fees & Placements`,
    description: `Admission details for ${college.name} in ${college.state}. ROI score, safety rating, and courses offered.`,
  };
}

export default async function CollegePage({ params }: PageProps) {
  const { slug } = await params;

  const { data: college } = await supabase
    .schema('careerpath')
    .from('colleges')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!college) return notFound();

  // Mock Calculations for UI
  const roiScore = (college.avg_placement / college.fees).toFixed(2);

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">{college.name}</h1>
            <p className="text-zinc-500">{college.city}, {college.state}</p>
          </div>
          <div className="text-right">
              <div className="text-3xl font-bold text-green-600">ROI: {roiScore}x</div>
              <p className="text-xs text-zinc-400">Return on Investment Score</p>
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow rounded-lg border">
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide">Fees (Yearly)</h3>
              <p className="text-2xl font-bold">₹{(college.fees / 100000).toFixed(1)} Lakhs</p>
          </div>
           <div className="p-6 bg-white shadow rounded-lg border">
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide">Avg Placement</h3>
              <p className="text-2xl font-bold">₹{(college.avg_placement / 100000).toFixed(1)} LPA</p>
          </div>
           <div className="p-6 bg-white shadow rounded-lg border">
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide">Safety Rating</h3>
              <p className="text-2xl font-bold text-blue-600">{college.safety_rating || 'N/A'}/10</p>
          </div>
      </div>
    </div>
  );
}
