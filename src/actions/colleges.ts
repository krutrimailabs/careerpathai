'use server';

import { supabase } from '@/lib/supabase';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { CollegeSchema } from '@/lib/schemas';

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
  const supabase = await createClient(); // Ensure we use the client inside the action
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) throw new Error('Unauthorized');

  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
  if (profile?.role !== 'admin') throw new Error('Forbidden');

  const startUpload = async (file: File, folder: string) => {
    if (!file || file.size === 0) return undefined;
    const filename = `${folder}/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, '')}`;
    const { data, error } = await supabase.storage.from('images').upload(filename, file);
    if (error) throw error;
    return supabase.storage.from('images').getPublicUrl(data.path).data.publicUrl;
  };

  const logoFile = formData.get('logo') as File;
  const logoUrl = await startUpload(logoFile, 'colleges/logos');

  const heroFile = formData.get('hero_image') as File;
  const heroUrl = await startUpload(heroFile, 'colleges/heroes');

  const rawData = {
    name: formData.get('name') as string,
    slug: formData.get('slug') as string,
    city: formData.get('city') as string,
    state: formData.get('state') as string,
    logo_url: logoUrl,
    hero_image_url: heroUrl,
  };

  const validatedData = CollegeSchema.parse(rawData);

  const { error } = await supabase.from('colleges').insert(validatedData);

  if (error) {
    console.error('Error creating college:', error);
    throw new Error('Failed to create college');
  }

}

export async function updateCollege(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Unauthorized');
  
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
  if (profile?.role !== 'admin') throw new Error('Forbidden');

  const startUpload = async (file: File, folder: string) => {
    if (!file || file.size === 0) return undefined;
    const filename = `${folder}/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, '')}`;
    const { data, error } = await supabase.storage.from('images').upload(filename, file);
    if (error) throw error;
    return supabase.storage.from('images').getPublicUrl(data.path).data.publicUrl;
  };

  const logoFile = formData.get('logo') as File;
  const logoUrl = await startUpload(logoFile, 'colleges/logos');

  const heroFile = formData.get('hero_image') as File;
  const heroUrl = await startUpload(heroFile, 'colleges/heroes');

  const id = formData.get('id') as string;
  const rawData = {
    name: formData.get('name') as string,
    slug: formData.get('slug') as string,
    city: formData.get('city') as string,
    state: formData.get('state') as string,
    ...(logoUrl && { logo_url: logoUrl }),
    ...(heroUrl && { hero_image_url: heroUrl }),
  };

  const validatedData = CollegeSchema.partial().parse(rawData);

  const { error } = await supabase
    .from('colleges')
    .update(validatedData)
    .eq('id', id);

  if (error) {
    console.error('Error updating college:', error);
    throw new Error('Failed to update college');
  }

  revalidatePath('/admin/content/colleges');
}

export async function deleteCollege(id: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Unauthorized');

  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
  if (profile?.role !== 'admin') throw new Error('Forbidden');

  const { error } = await supabase
    .from('colleges')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting college:', error);
    throw new Error('Failed to delete college');
  }

  revalidatePath('/admin/content/colleges');
}
