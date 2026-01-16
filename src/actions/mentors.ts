'use server';

import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';

export async function getMentors() {
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
  const name = formData.get('name') as string;
  const role = formData.get('role') as string;
  const company = formData.get('company') as string;
  const experience = formData.get('experience') as string;
  const about = formData.get('about') as string;

  const { error } = await supabase.from('mentors').insert({
    name,
    role,
    company,
    experience,
    about,
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

export async function verifyMentor(id: string) {
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
