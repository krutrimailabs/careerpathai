import { supabase } from "@/lib/supabase";
import { Metadata } from 'next';
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. Generate Static Params for SSG
export async function generateStaticParams() {
  const { data: paths } = await supabase
    .schema('careerpath')
    .from('careers')
    .select('slug');

  return (paths || []).map((path) => ({
    slug: path.slug,
  }));
}

// 2. SEO Metadata Generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  const { data: career } = await supabase
    .schema('careerpath')
    .from('careers')
    .select('title, category')
    .eq('slug', slug)
    .single();

  if (!career) {
    return { title: 'Career Not Found' };
  }

  return {
    title: `${career.title} | Career Path Guide India`,
    description: `Complete roadmap on how to become a ${career.title} in India. Salary, colleges, and skills required.`,
    openGraph: {
        title: `How to become a ${career.title}`,
        description: `Everything you need to know about ${career.title} careers in India.`
    }
  };
}

// 3. Page Content
export default async function CareerPage({ params }: PageProps) {
  const { slug } = await params;

  const { data: career } = await supabase
    .schema('careerpath')
    .from('careers')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!career) return notFound();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">{career.title}</h1>
      <div className="flex gap-2 mb-8">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{career.category}</span>
        {/* Add more tags like Salary, Demand here */}
      </div>

      <div className="prose lg:prose-xl">
        <h2>Overview</h2>
        <p>{/* Add description */}</p>
        
        {/* Integrate Roadmap visualization here */}
        <h2>Career Roadmap</h2>
        <div className="bg-slate-50 p-6 rounded-lg border">
            <pre className="text-xs overflow-auto">{JSON.stringify(career.roadmap, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
