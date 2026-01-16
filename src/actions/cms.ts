'use server';

import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';

export async function getPosts() {
  const { data, error } = await supabase
    
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }

  return data;
}

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const content = formData.get('content') as string;
  const status = formData.get('status') as string || 'draft';

  const { error } = await supabase.from('blogs').insert({
    title,
    slug,
    content,
    status,
    // author_id: TODO: Add auth user id
  });

  if (error) {
    console.error('Error creating post:', error);
    throw new Error('Failed to create post');
  }

  revalidatePath('/admin/cms');
}

export async function deletePost(id: string) {
  const { error } = await supabase
    
    .from('blogs')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting post:', error);
    throw new Error('Failed to delete post');
  }

  revalidatePath('/admin/cms');
}
