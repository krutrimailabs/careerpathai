-- Run in Supabase SQL Editor

-- 1. Update Mentors for Verification
ALTER TABLE careerpath.mentors 
ADD COLUMN IF NOT EXISTS is_verified boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS status text DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'APPROVED', 'REJECTED')),
ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id);

-- 2. Leads / Admissions
CREATE TABLE IF NOT EXISTS careerpath.leads (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  student_id uuid, -- Link to profile/user
  college_id uuid REFERENCES careerpath.colleges(id),
  status text DEFAULT 'ENQUIRY' CHECK (status IN ('ENQUIRY', 'APPLIED', 'ADMITTED')),
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT leads_pkey PRIMARY KEY (id)
);

-- 3. Assessments Configuration
CREATE TABLE IF NOT EXISTS careerpath.assessment_config (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  trait text NOT NULL, -- e.g. Realistic, Investigative
  weight numeric DEFAULT 1.0,
  description text,
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT assessment_config_pkey PRIMARY KEY (id)
);

-- 4. Subscriptions (Finance)
CREATE TABLE IF NOT EXISTS careerpath.subscriptions (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  plan text NOT NULL,
  amount numeric NOT NULL,
  start_date timestamp with time zone DEFAULT now(),
  expires_at timestamp with time zone,
  status text DEFAULT 'ACTIVE',
  CONSTRAINT subscriptions_pkey PRIMARY KEY (id)
);
