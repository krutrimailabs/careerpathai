import { supabase } from "@/lib/supabase";

// src/lib/admin-utils.ts
export async function bulkUpdateCollegeROI() {
  const { data: colleges, error } = await supabase
    
    .from('colleges')
    .select('id, fees, avg_placement');

  if (error || !colleges) {
      console.error("Failed to fetch colleges for ROI update", error);
      return;
  }

  const updates = colleges.map(college => {
    // ROI Score = Expected Salary / Education Cost [cite: 142, 212]
    // fees might be stored as integer, ensure no division by zero
    const fees = college.fees || 1; 
    const roiScore = (college.avg_placement || 0) / fees;
    
    return supabase
      
      .from('colleges')
      .update({ roi_score: roiScore }) 
      .eq('id', college.id);
  });

  await Promise.all(updates);
  console.log(`Updated ROI for ${updates.length} colleges.`);
}
