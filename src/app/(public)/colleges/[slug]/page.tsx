import { supabase } from "@/lib/supabase";
import { Metadata } from 'next';
import CollegeProfileClient from "@/components/colleges/CollegeProfileClient";

export async function generateStaticParams() {
  const { data: colleges } = await supabase.from('colleges').select('slug');
  return (colleges || []).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { data: college } = await supabase.from('colleges').select('name, city, state').eq('slug', slug).single();

  if (!college) return { title: 'College Not Found' };

  return {
    title: `${college.name} - Fees & Placements`,
    description: `Admission details for ${college.name} in ${college.city}.`,
  };
}

export default function CollegeProfilePage() {
  return <CollegeProfileClient />;
}
