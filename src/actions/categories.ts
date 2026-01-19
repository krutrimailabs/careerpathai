'use server';

import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';
import { createClient } from '@/utils/supabase/server';
import { CategorySchema } from '@/lib/schemas';

export async function getCategories() {
  const { data, error } = await supabase
    .from('career_categories')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  return data;
}

export async function createCategory(formData: FormData) {
  const supabase = await createClient(); // Ensure client
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Unauthorized');
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
  if (profile?.role !== 'admin') throw new Error('Forbidden');

  const name = formData.get('name') as string;
  const slug = formData.get('slug') as string || name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');

  const { error } = await supabase
    .from('career_categories')
    .insert({ name, slug });

  if (error) {
    console.error('Error creating category:', error);
    throw new Error('Failed to create category');
  }

  revalidatePath('/admin/content/careers/categories');
}

export async function updateCategory(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Unauthorized');
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
  if (profile?.role !== 'admin') throw new Error('Forbidden');

  const id = formData.get('id') as string;
  const rawData = {
    name: formData.get('name') as string,
    slug: formData.get('slug') as string,
  };

  const validatedData = CategorySchema.partial().parse(rawData);

  const { error } = await supabase
    .from('career_categories')
    .update(validatedData)
    .eq('id', id);

  if (error) {
    console.error('Error updating category:', error);
    throw new Error('Failed to update category');
  }

  revalidatePath('/admin/content/careers/categories');
}

export async function deleteCategory(id: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Unauthorized');
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
  if (profile?.role !== 'admin') throw new Error('Forbidden');

  const { error } = await supabase
    .from('career_categories')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting category:', error);
    throw new Error('Failed to delete category');
  }

  revalidatePath('/admin/content/careers/categories');
}
