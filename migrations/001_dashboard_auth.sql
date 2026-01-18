-- Create psychometric_assessments table
CREATE TABLE IF NOT EXISTS public.psychometric_assessments (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES auth.users(id),
    scores jsonb NOT NULL, -- e.g., { "R": 10, "I": 20, ... }
    primary_trait character varying NOT NULL, 
    secondary_trait character varying,
    completed_at timestamp with time zone DEFAULT now(),
    CONSTRAINT psychometric_assessments_pkey PRIMARY KEY (id)
);

-- RLS for psychometric_assessments
ALTER TABLE public.psychometric_assessments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own assessment" 
    ON public.psychometric_assessments 
    FOR SELECT 
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own assessment" 
    ON public.psychometric_assessments 
    FOR INSERT 
    WITH CHECK (auth.uid() = user_id);

-- Ensure mock_interviews exists (if not already from db.sql)
CREATE TABLE IF NOT EXISTS public.mock_interviews (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id),
  job_context text NOT NULL,
  conversation_json jsonb NOT NULL,
  avg_score numeric,
  feedback_summary text,
  detailed_scores jsonb DEFAULT '{}'::jsonb,
  created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  CONSTRAINT mock_interviews_pkey PRIMARY KEY (id)
);

-- RLS for mock_interviews
ALTER TABLE public.mock_interviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own interviews"
    ON public.mock_interviews
    FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own interviews"
    ON public.mock_interviews
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own interviews"
    ON public.mock_interviews
    FOR UPDATE
    USING (auth.uid() = user_id);
