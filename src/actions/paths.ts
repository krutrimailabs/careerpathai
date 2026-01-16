'use server';

import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';

export async function getPaths() {
  const { data, error } = await supabase
    .schema('careerpath')
    .from('careers')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching careers:', error);
    return [];
  }

  return data;
}

export async function createPath(formData: FormData) {
  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const category = formData.get('category') as string;

  const { error } = await supabase.schema('careerpath').from('careers').insert({
    title,
    slug,
    category,
  });

  if (error) {
    console.error('Error creating career path:', error);
    throw new Error('Failed to create career path');
  }

  revalidatePath('/admin/paths');
}

import { RIASECScore } from "@/lib/ai-engine";

export async function updateCareerWeights(id: string, scores: RIASECScore) {
  const { error } = await supabase
    .schema('careerpath')
    .from('careers')
    .update({ riasec_scores: scores })
    .eq('id', id);

  if (error) {
    console.error('Error updating weights:', error);
    throw new Error('Failed to update weights');
  }

  revalidatePath('/admin/content/careers');
}
