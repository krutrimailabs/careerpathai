-- Run this in your Supabase SQL Editor

-- 1. Create Schema if not exists
CREATE SCHEMA IF NOT EXISTS careerpath;

-- 2. Blogs Table in careerpath schema
CREATE TABLE IF NOT EXISTS careerpath.blogs (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  content text,
  excerpt text,
  featured_image text,
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  author_id uuid REFERENCES auth.users(id),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT blogs_pkey PRIMARY KEY (id)
);

-- 3. Mentors Table (assuming careerpath schema for consistency)
CREATE TABLE IF NOT EXISTS careerpath.mentors (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  company text NOT NULL,
  company_logo text,
  experience text,
  education text,
  rating numeric DEFAULT 0,
  reviews integer DEFAULT 0,
  hourly_rate integer DEFAULT 0,
  image text,
  about text,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT mentors_pkey PRIMARY KEY (id)
);

-- 4. Ensure Profiles Exists
CREATE TABLE IF NOT EXISTS careerpath.profiles (
  id uuid NOT NULL REFERENCES auth.users(id),
  username text,
  full_name text,
  avatar_url text,
  website text,
  updated_at timestamp with time zone,
  CONSTRAINT profiles_pkey PRIMARY KEY (id)
);
