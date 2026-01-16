'use server';

import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';

export async function getColleges() {
  const { data, error } = await supabase
    
    .from('colleges')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching colleges:', error);
    return [];
  }

  return data;
}

export async function createCollege(formData: FormData) {
  const name = formData.get('name') as string;
  const slug = formData.get('slug') as string;
  const city = formData.get('city') as string;
  const state = formData.get('state') as string;

  const { error } = await supabase.from('colleges').insert({
    name,
    slug,
    city,
    state,
  });

  if (error) {
    console.error('Error creating college:', error);
    throw new Error('Failed to create college');
  }

  revalidatePath('/admin/colleges');
}
