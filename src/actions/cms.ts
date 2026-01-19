'use server';

import { supabase } from '@/lib/supabase';
import { createClient } from '@/utils/supabase/server';
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

import { PostSchema } from '@/lib/schemas';

export async function createPost(formData: FormData) {
  const rawData = {
    title: formData.get('title') as string,
    slug: formData.get('slug') as string,
    content: formData.get('content') as string,
    status: formData.get('status') as string || 'draft',
  };

  const validatedData = PostSchema.parse(rawData);

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('Unauthorized');
  }

  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
  if (profile?.role !== 'admin') throw new Error('Forbidden');

  const { error } = await supabase.from('blogs').insert({
    ...validatedData,
    author_id: user.id
  });

  if (error) {
    console.error('Error creating post:', error);
    throw new Error('Failed to create post');
  }

}

export async function updatePost(formData: FormData) {
  const id = formData.get('id') as string;
  const rawData = {
    title: formData.get('title') as string,
    slug: formData.get('slug') as string,
    content: formData.get('content') as string,
    status: formData.get('status') as string || 'draft',
  };

  const validatedData = PostSchema.partial().parse(rawData);

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('Unauthorized');
  }

  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
  if (profile?.role !== 'admin') throw new Error('Forbidden');

  const { error } = await supabase
    .from('blogs')
    .update(validatedData)
    .eq('id', id);

  if (error) {
    console.error('Error updating post:', error);
    throw new Error('Failed to update post');
  }

  revalidatePath('/admin/cms');
}

export async function deletePost(id: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Unauthorized');
  
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
  if (profile?.role !== 'admin') throw new Error('Forbidden');

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
