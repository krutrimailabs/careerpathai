import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';
import { BookingForm } from '@/components/mentors/BookingForm';

export default async function BookingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  // Fetch mentor details
  const { data: mentor, error } = await supabase
    .schema('careerpath')
    .from('mentors')
    .select('id, name, role, company, image, hourly_rate')
    .eq('id', id)
    .single();

  if (error || !mentor) {
      notFound();
  }
  
  return <BookingForm mentor={mentor} />;
}
