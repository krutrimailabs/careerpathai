import { supabase } from '../src/lib/supabase';

const colleges = [
  { name: 'IIT Bombay', city: 'Mumbai', state: 'Maharashtra', fees: 800000, avg_placement: 2000000, slug: 'iit-bombay' },
  { name: 'BITS Pilani', city: 'Pilani', state: 'Rajasthan', fees: 2000000, avg_placement: 1800000, slug: 'bits-pilani' },
  { name: 'Delhi University', city: 'New Delhi', state: 'Delhi', fees: 50000, avg_placement: 600000, slug: 'delhi-university' },
  // Add more...
];

async function seed() {
  console.log('Seeding colleges...');
  
  for (const college of colleges) {
    const { error } = await supabase
      .schema('careerpath')
      .from('colleges')
      .insert(college);
      
    if (error) console.error('Error adding', college.name, error.message);
    else console.log('Added', college.name);
  }
}

seed();
