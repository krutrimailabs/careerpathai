import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { CollegeList } from '@/components/colleges/CollegeList';
import { CollegeFilter } from '@/components/colleges/CollegeFilter';
import { College } from '@/types/college';

export default async function CollegesPage() {
  const supabase = await createClient();

  const { data: collegesData } = await supabase
    .schema('careerpath')
    .from('colleges')
    .select('*')
    .order('nirf_rank', { ascending: true });

  // Map DB flat structure to College nested interface
  // Providing logical defaults for fields that might be missing in the initial simplified DB schema
  const col: College[] = (collegesData || []).map((item) => ({
      id: item.id,
      slug: item.slug,
      name: item.name,
      short_description: item.description || '',
      logo_url: item.logo_url,
      // Mapping flat columns to 'overview'
      overview: {
          nirf_rank: item.nirf_rank || 0,
          naac_grade: 'A', // Default/Mock
          established_year: item.established_year || 2000,
          college_type: item.college_type as any || 'Private',
          campus_size_acres: item.campus_area || 0,
          location: item.city + ', ' + item.state
      },
      // Using JSONB 'highlights' if available, else defaults
      placement: {
          avg_package_lpa: item.highlights?.avg_package_lpa || 0,
          highest_package_lpa: item.highlights?.highest_package_lpa || 0,
          placement_percentage: 90,
          top_recruiters: [],
          alumni_network_strength: 'Strong'
      },
      financials: {
          fees_per_year: 200000, // Default if not in DB
          scholarship_available: true,
          education_loan_partners: [],
          refund_policy: ''
      },
      academics: {
          courses_offered: ['B.Tech'],
          specializations: [],
          faculty_student_ratio: '1:20',
          international_collaborations: []
      },
      admission: {
          exams_accepted: ['JEE Mains'],
          reservation_policy: '',
          application_process: [],
          important_dates: [],
          cutoff_trends: []
      },
      campus_life: {
          hostel_facilities: true,
          sports_facilities: [],
          clubs_committees: [],
          safety_score: 9
      },
      reviews: {
          average_rating: 4.5,
          total_reviews: 100,
          categories: { infrastructure: 4, academics: 4, placements: 4, campus_life: 4, value_for_money: 4 }
      }
  }));

  return (
    <div className="min-h-screen bg-zinc-50/50 dark:bg-black text-zinc-900 dark:text-zinc-50 font-sans pb-20">
      
      {/* 1. Page Header (SEO & Breadcrumbs) */}
      <div className="bg-white border-b border-zinc-200 py-8">
          <div className="container mx-auto px-4 md:px-6">
              <div className="text-sm text-zinc-500 mb-4">Home  /  Colleges  /  <span className="text-zinc-900 font-semibold">Engineering</span></div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#002147] mb-3">Top Colleges in India 2024</h1>
              <p className="text-zinc-600 max-w-3xl">
                  List of Top 5000+ Colleges in India based on 2024 Ranking. Check Fees, Placement, Cutoff & Eligibility.
              </p>
          </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* 2. Sidebar Filters (Desktop) */}
            <div className="hidden lg:block">
                <CollegeFilter />
            </div>

            {/* 3. Main Content Area */}
            <CollegeList initialColleges={col} />

        </div>
      </div>
    </div>
  );
}
