-- Run this in Supabase SQL Editor to complete the Schema Setup

-- 1. Careers Table
CREATE TABLE IF NOT EXISTS careerpath.careers (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
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
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    CONSTRAINT careers_pkey PRIMARY KEY (id)
);

-- 2. Colleges Table
CREATE TABLE IF NOT EXISTS careerpath.colleges (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
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
    updated_at timestamp with time zone DEFAULT now(),
    CONSTRAINT colleges_pkey PRIMARY KEY (id)
);

-- 3. Enable RLS (Optional but recommended)
ALTER TABLE careerpath.careers ENABLE ROW LEVEL SECURITY;
ALTER TABLE careerpath.colleges ENABLE ROW LEVEL SECURITY;

-- 4. Public Access Policy (for reading content)
CREATE POLICY "Public careers are viewable by everyone" ON careerpath.careers FOR SELECT USING (true);
CREATE POLICY "Public colleges are viewable by everyone" ON careerpath.colleges FOR SELECT USING (true);
