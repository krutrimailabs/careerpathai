import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' }); // Load env vars first

import { createClient } from '@supabase/supabase-js';
import { COLLEGES } from '../src/data/colleges';

// Create a local client instance
// CRITICAL: Use Service Role Key to bypass RLS
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Environment Variables!');
  console.error('Ensure .env.local exists and contains:');
  console.error('  NEXT_PUBLIC_SUPABASE_URL');
  console.error('  SUPABASE_SERVICE_ROLE_KEY (Found in Supabase Dashboard > Settings > API)');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function seed() {
  console.log(`🚀 Seeding ${COLLEGES.length} colleges to 'public' schema...`);
  
  for (const college of COLLEGES) {
    // Map nested data to flat DB columns
    const dbRow = {
        name: college.name,
        slug: college.slug,
        location: college.overview.location,
        city: college.overview.location.split(',')[0].trim(),
        state: college.overview.location.split(',')[1]?.trim() || '',
        rating: 4.5, 
        established_year: college.overview.established_year,
        campus_size_acres: college.overview.campus_size_acres,
        logo_url: `https://ui-avatars.com/api/?name=${encodeURIComponent(college.name)}&background=random`,
        website_url: `https://www.google.com/search?q=${encodeURIComponent(college.name)}`
    };

    const { error } = await supabase
      .from('colleges') // Uses 'public' schema by default
      .upsert(dbRow, { onConflict: 'slug' });
      
    if (error) {
        console.error(`❌ Error adding ${college.name}:`, error.message);
    } else {
        console.log(`✅ Added: ${college.name}`);
    }
  }
}

seed();
