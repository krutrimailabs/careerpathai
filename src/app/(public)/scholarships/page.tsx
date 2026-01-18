import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { ScholarshipList } from '@/components/scholarships/ScholarshipList';

export default async function ScholarshipsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Fetch all scholarships
  const { data: scholarships } = await supabase
    .schema('careerpath')
    .from('scholarships')
    .select('*')
    .order('created_at', { ascending: false });

  // Fetch saved scholarships if user is logged in
  let savedIds: string[] = [];
  if (user) {
    const { data: savedData } = await supabase
      .schema('careerpath')
      .from('user_scholarships')
      .select('scholarship_id')
      .eq('user_id', user.id);
    savedIds = savedData?.map((item: { scholarship_id: string }) => item.scholarship_id) || [];
  }

  return (
    <div className="container mx-auto px-4 py-8">
       <div className="mb-8">
           <h1 className="text-3xl font-bold mb-2">Find Scholarships</h1>
           <p className="text-zinc-500">Discover financial aid opportunities tailored for you.</p>
       </div>

       <ScholarshipList 
          initialScholarships={scholarships || []} 
          savedPdfIds={savedIds} 
       />
    </div>
  );
}
