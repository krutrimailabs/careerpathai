export interface CollegeOverview {
  nirf_rank: number;
  naac_grade: string;
  established_year: number;
  college_type: 'Government' | 'Private' | 'Autonomous';
  campus_size_acres: number;
  location: string;
}

export interface CollegeAcademics {
  courses_offered: string[];
  specializations: string[];
  faculty_student_ratio: string;
  international_collaborations: string[];
}

export interface CollegeAdmission {
  exams_accepted: string[];
  reservation_policy: string;
  application_process: string[];
  important_dates: { event: string; date: string }[];
  cutoff_trends: { year: number; cutoff: string }[];
}

export interface CollegePlacement {
  avg_package_lpa: number;
  highest_package_lpa: number;
  placement_percentage: number;
  top_recruiters: string[];
  alumni_network_strength: 'Strong' | 'Average' | 'Growing' | 'Elite' | 'Very Strong';
}

export interface CollegeCampusLife {
  hostel_facilities: boolean;
  sports_facilities: string[];
  clubs_committees: string[];
  safety_score: number; // out of 10
}

export interface CollegeFinancials {
  fees_per_year: number;
  scholarship_available: boolean;
  education_loan_partners: string[];
  refund_policy: string;
}

export interface CollegeReviews {
  average_rating: number;
  total_reviews: number;
  categories: {
     infrastructure: number;
     academics: number;
     placements: number;
     campus_life: number;
     value_for_money: number;
  };
}

export interface College {
  id: string;
  slug: string;
  name: string;
  short_description: string;
  logo_url?: string;
  banner_url?: string;
  
  overview: CollegeOverview;
  academics: CollegeAcademics;
  admission: CollegeAdmission;
  placement: CollegePlacement;
  campus_life: CollegeCampusLife;
  financials: CollegeFinancials;
  reviews: CollegeReviews;
}
