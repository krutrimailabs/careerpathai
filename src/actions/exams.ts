'use server';

import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';

export async function getExams() {
  const { data, error } = await supabase
    .from('exams') // public schema is default
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching exams:', error);
    return [];
  }

  return data;
}

export async function createExam(formData: FormData) {
  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const description = formData.get('description') as string;

  const { error } = await supabase.from('exams').insert({
    title,
    slug,
    description,
  });

  if (error) {
    console.error('Error creating exam:', error);
    throw new Error('Failed to create exam');
  }

  revalidatePath('/admin/exams');
}
