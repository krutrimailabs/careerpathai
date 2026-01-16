export type CareerCategory =
  | "Engineering"
  | "Medical"
  | "Design"
  | "Law"
  | "Management"
  | "Arts & Media"
  | "Science"
  | "Commerce"
  | "Civil Services"
  | "Armed Forces"
  | "Aviation"
  | "Agriculture/Environment";

export interface Overview {
  what_is: string;
  day_in_life: string[];
  who_is_it_for: string[];
  future_outlook_2030: string;
}

export interface PathToBecome {
  stream_selection_10th: string[];
  subject_combination_12th: string[];
  entrance_exams: string[];
  degree_requirements: string[];
  skill_development_timeline: {
    stage: string;
    skills: string[];
  }[];
}

export interface Financials {
  education_cost_india: { min: number; max: number; currency: "INR" };
  education_cost_abroad: {
    min: number;
    max: number;
    currency: "USD" | "EUR" | "GBP";
  };
  starting_salary: { min: number; max: number; currency: "INR" };
  five_year_growth_percentage: number;
  top_paying_companies: string[];
  roi_calculator_data: {
    avg_total_cost: number;
    avg_starting_salary: number;
  };
}

export interface Skills {
  technical_skills: string[];
  soft_skills: string[];
  tools_and_software: string[];
  certifications: string[];
}

export interface JobMarket {
  demand_trend: "High" | "Medium" | "Low" | "Growing" | "Stable" | "Declining";
  top_hiring_cities: string[];
  remote_opportunities_score: number; // 0-100
  future_proof_score: number; // 0-100
}

export interface RelatedCareerLink {
  id: string;
  name: string;
  type: "Alternative" | "Vertical" | "Horizontal" | "Hybrid";
}

export interface CareerProfile {
  id: string;
  slug: string;
  title: string;
  category: CareerCategory;
  short_description: string;
  overview: Overview;
  path_to_become: PathToBecome;
  financials: Financials;
  skills: Skills;
  job_market: JobMarket;
  related_careers: RelatedCareerLink[];
}
