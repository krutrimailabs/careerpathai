'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { MentorSchema } from '@/lib/schemas';

export async function getMentors() {
  const supabase = await createClient();
  const { data, error } = await supabase
    
    .from('mentors')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching mentors:', error);
    return [];
  }

  return data;
}

export async function createMentor(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Unauthorized');
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
  if (profile?.role !== 'admin') throw new Error('Forbidden');

  /*
  const rawData = {
    name: formData.get('name') as string,
  */
  
  const startUpload = async (file: File, folder: string) => {
    if (!file || file.size === 0) return undefined;
    const filename = `${folder}/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, '')}`;
    const { data, error } = await supabase.storage.from('images').upload(filename, file);
    if (error) throw error;
    return supabase.storage.from('images').getPublicUrl(data.path).data.publicUrl;
  };

  const image = await startUpload(formData.get('image') as File, 'mentors');
  const companyLogo = await startUpload(formData.get('company_logo') as File, 'logos');

  const rawData = {
    name: formData.get('name') as string,
    role: formData.get('role') as string,
    company: formData.get('company') as string,
    experience: (formData.get('experience') as string) || undefined,
    about: (formData.get('about') as string) || undefined,
    image,
    company_logo: companyLogo,
  };

  const validatedData = MentorSchema.parse(rawData);

  const { error } = await supabase.from('mentors').insert({
    ...validatedData,
    rating: 5.0, // Default
    reviews: 0,
    status: 'PENDING', // Default for new adds
    is_verified: false 
  });

  if (error) {
    console.error('Error creating mentor:', error);
    throw new Error('Failed to create mentor');
  }

  revalidatePath('/admin/mentors/approvals');
}

export async function deleteMentor(id: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Unauthorized');
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
  if (profile?.role !== 'admin') throw new Error('Forbidden');

  const { error } = await supabase
    
    .from('mentors')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting mentor:', error);
    throw new Error('Failed to delete mentor');
  }

  revalidatePath('/admin/mentors/approvals');
}

export async function updateMentor(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Unauthorized');
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
  if (profile?.role !== 'admin') throw new Error('Forbidden');

  const startUpload = async (file: File, folder: string) => {
    // console.error('DEBUG_UPLOAD:', ...);
    // if (!file || file.size === 0) return undefined;
    if (!file) return undefined; // Minimal check to avoid crash if null
    const filename = `${folder}/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, '')}`;
    const { data, error } = await supabase.storage.from('images').upload(filename, file);
    if (error) throw error;
    return supabase.storage.from('images').getPublicUrl(data.path).data.publicUrl;
  };

  const imageFile = formData.get('image') as File;
  const imageUrl = await startUpload(imageFile, 'mentors');

  const logoFile = formData.get('company_logo') as File;
  const logoUrl = await startUpload(logoFile, 'logos');

  const id = formData.get('id') as string;
  const rawData = {
    name: formData.get('name') as string,
    role: formData.get('role') as string,
    company: formData.get('company') as string,
    ...(imageUrl && { image: imageUrl }),
    ...(logoUrl && { company_logo: logoUrl }),
  };

  const validatedData = MentorSchema.partial().parse(rawData);
  
  const { error } = await supabase
    .from('mentors')
    .update(validatedData)
    .eq('id', id);

  if (error) {
    console.error('Error updating mentor:', error);
    throw new Error('Failed to update mentor');
  }

  revalidatePath('/admin/mentors/approvals');
}

export async function verifyMentor(id: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Unauthorized');
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
  if (profile?.role !== 'admin') throw new Error('Forbidden');

  const { error } = await supabase
    
    .from('mentors')
    .update({ 
        is_verified: true,
        status: 'APPROVED'
    })
    .eq('id', id);

  if (error) {
    console.error('Error verifying mentor:', error);
    throw new Error('Failed to verify mentor');
  }

  revalidatePath('/admin/mentors/approvals');
}
