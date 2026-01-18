import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { MentorList } from '@/components/mentors/MentorList';

export const revalidate = 3600; // Revalidate every hour

export default async function MentorDirectoryPage() {
  const supabase = await createClient();

  const { data: mentors, error } = await supabase
    .schema('careerpath')
    .from('mentors')
    .select('*')
    .order('rating', { ascending: false });

  if (error) {
    console.error('Error fetching mentors:', error);
    return <div className="p-8 text-center text-red-500">Failed to load mentors.</div>;
  }

  return (
    <MentorList initialMentors={mentors || []} />
  );
}
