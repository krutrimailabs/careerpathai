import { supabase } from "@/lib/supabase";
import { Metadata } from 'next';
import CareerProfileClient from "@/components/career/CareerProfileClient";

export async function generateStaticParams() {
  const { data: paths } = await supabase.from('careers').select('slug');
  return (paths || []).map((path) => ({ slug: path.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { data: career } = await supabase.from('careers').select('title, category').eq('slug', slug).single();

  if (!career) return { title: 'Career Not Found' };

  return {
    title: `How to become a ${career.title} in India`,
    description: `Complete roadmap for ${career.title}. Salary, colleges, and skills.`,
    openGraph: {
        title: `How to become a ${career.title}`,
        description: `Everything you need to know about ${career.title} careers in India.`
    }
  };
}

export default function CareerProfilePage() {
  return <CareerProfileClient />;
}
