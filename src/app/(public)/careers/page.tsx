import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { CareersList } from '@/components/career/CareersList';
import { CareerProfile } from '@/types/career';

export default async function CareersPage() {
  const supabase = await createClient();
  const { data: careersData } = await supabase
    .schema('careerpath')
    .from('careers')
    .select('*');

  const careers: CareerProfile[] = (careersData || []).map((item) => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
      // category: item.category as any, // Removed to fix duplicate key error
      category: item.category as CareerProfile['category'],
      short_description: item.short_description,
      overview: item.overview,
      path_to_become: item.path_to_become,
      financials: item.financials,
      skills: item.skills,
      job_market: item.job_market,
      related_careers: item.related_careers
  }));

  // Fetch categories
  const { data: categoriesData } = await supabase
    .schema('careerpath')
    .from('career_categories')
    .select('name')
    .order('name');
    
  const categories = (categoriesData || []).map(c => c.name);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 font-sans">
      <CareersList initialCareers={careers} categories={categories} />
    </div>
  );
}
