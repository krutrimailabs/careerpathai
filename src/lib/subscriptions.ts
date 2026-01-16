import { supabase } from "@/lib/supabase";

export const PLANS = {
  FREE: {
    id: 'free',
    name: 'Explorer',
    price: 0,
    features: ['Basic Assessment', '5 Roadmaps', 'Community Access']
  },
  PREMIUM: {
    id: 'premium',
    name: 'Guidance',
    price: 999, // INR
    features: ['Unlimited Roadmaps', 'College Predictor', 'ROI Calculator', 'Parent Reports']
  },
  MENTOR_PLUS: {
    id: 'mentor_plus',
    name: 'Placement & Mentorship',
    price: 4999,
    features: ['All Premium Features', '1-on-1 Mentor Session', 'Application Review']
  }
};

export async function getUserSubscription(userId: string) {
  const { data, error } = await supabase
    
    .from('subscriptions')
    .select('*')
    .eq('user_id', userId)
    .eq('status', 'active')
    .single();

  if (!data || error) {
    return PLANS.FREE;
  }

  // Map DB plan string to PLAN object
  return Object.values(PLANS).find(p => p.id === data.plan) || PLANS.FREE;
}

export async function checkFeatureAccess(userId: string, feature: string) {
  const plan = await getUserSubscription(userId);
  // Simple check - in reality, maybe a dedicated permissions map
  if (plan.id === 'mentor_plus') return true;
  if (plan.id === 'premium' && feature !== '1-on-1 Mentor Session') return true;
  if (plan.id === 'free' && feature === 'Basic Assessment') return true;
  
  return false;
}
