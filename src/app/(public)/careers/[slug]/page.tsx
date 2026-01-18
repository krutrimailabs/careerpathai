import { createClient } from '@/utils/supabase/server';
import { Metadata } from 'next';
import CareerProfileClient from "@/components/career/CareerProfileClient";
import { CareerProfile } from '@/types/career';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: career } = await supabase.schema('careerpath').from('careers').select('title, category').eq('slug', slug).single();

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

export default async function CareerProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: careerData } = await supabase.schema('careerpath').from('careers').select('*').eq('slug', slug).single();

  if (!careerData) {
    notFound();
  }

  const career: CareerProfile = {
      id: careerData.id,
      slug: careerData.slug,
      title: careerData.title,
      category: careerData.category as CareerProfile['category'],
      short_description: careerData.short_description,
      overview: careerData.overview,
      path_to_become: careerData.path_to_become,
      financials: careerData.financials,
      skills: careerData.skills,
      job_market: careerData.job_market,
      related_careers: careerData.related_careers
  };

  return <CareerProfileClient career={career} />;
}
