-- Final Setup: Create Public Tables
-- We skip copying from 'careerpath' because it seems to have schema mismatches.
-- Instead, we will create these tables and then YOU run the seed script to fill them.

-- 1. Create Independent Tables (Careers, Colleges, Exams)
CREATE TABLE IF NOT EXISTS public.careers (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title text NOT NULL,
    slug text NOT NULL UNIQUE,
    category text NOT NULL,
    short_description text,
    description text,
    salary_range_min integer,
    salary_range_max integer,
    growth_rate integer,
    demand_score integer,
    future_outlook text,
    riasec_scores jsonb,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.colleges (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    slug text NOT NULL UNIQUE,
    location text,
    city text,
    state text,
    rating numeric,
    established_year integer,
    campus_size_acres integer,
    logo_url text,
    website_url text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.exams (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title text NOT NULL,
    slug text NOT NULL UNIQUE,
    description text,
    date date,
    created_at timestamp with time zone DEFAULT now()
);

-- 2. Create Dependent Tables (Rankings) - MUST BE AFTER COLLEGES
CREATE TABLE IF NOT EXISTS public.rankings (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    college_id uuid REFERENCES public.colleges(id),
    rank integer,
    category text,
    year integer
);

-- 3. Enable RLS
ALTER TABLE public.careers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.colleges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rankings ENABLE ROW LEVEL SECURITY;

-- 4. Public Access Policies
CREATE POLICY "Public items are viewable_3" ON public.careers FOR SELECT USING (true);
CREATE POLICY "Public items are viewable_3" ON public.colleges FOR SELECT USING (true);
CREATE POLICY "Public items are viewable_3" ON public.exams FOR SELECT USING (true);
CREATE POLICY "Public items are viewable_3" ON public.rankings FOR SELECT USING (true);
