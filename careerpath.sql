-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE careerpath.careers (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  category text NOT NULL,
  description text,
  salary_range text,
  education_level text,
  CONSTRAINT careers_pkey PRIMARY KEY (id)
);
CREATE TABLE careerpath.college_courses (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  college_id uuid,
  course_name character varying,
  degree_type character varying,
  duration character varying,
  specialization character varying,
  fees numeric,
  seats integer,
  eligibility text,
  entrance_exams jsonb,
  created_at timestamp without time zone DEFAULT now(),
  CONSTRAINT college_courses_pkey PRIMARY KEY (id),
  CONSTRAINT college_courses_college_id_fkey FOREIGN KEY (college_id) REFERENCES careerpath.colleges(id)
);
CREATE TABLE careerpath.college_cutoffs (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  college_id uuid,
  course_id uuid,
  exam_name character varying,
  year integer,
  category character varying,
  opening_rank integer,
  closing_rank integer,
  round integer,
  CONSTRAINT college_cutoffs_pkey PRIMARY KEY (id),
  CONSTRAINT college_cutoffs_college_id_fkey FOREIGN KEY (college_id) REFERENCES careerpath.colleges(id),
  CONSTRAINT college_cutoffs_course_id_fkey FOREIGN KEY (course_id) REFERENCES careerpath.college_courses(id)
);
CREATE TABLE careerpath.college_facilities (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  college_id uuid,
  facility_type character varying,
  description text,
  availability boolean,
  additional_info jsonb,
  CONSTRAINT college_facilities_pkey PRIMARY KEY (id),
  CONSTRAINT college_facilities_college_id_fkey FOREIGN KEY (college_id) REFERENCES careerpath.colleges(id)
);
CREATE TABLE careerpath.college_photos (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  college_id uuid,
  image_url character varying,
  caption character varying,
  category character varying,
  uploaded_by uuid,
  created_at timestamp without time zone DEFAULT now(),
  CONSTRAINT college_photos_pkey PRIMARY KEY (id),
  CONSTRAINT college_photos_college_id_fkey FOREIGN KEY (college_id) REFERENCES careerpath.colleges(id),
  CONSTRAINT college_photos_uploaded_by_fkey FOREIGN KEY (uploaded_by) REFERENCES auth.users(id)
);
CREATE TABLE careerpath.college_placements (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  college_id uuid,
  year integer,
  average_package numeric,
  highest_package numeric,
  placement_rate numeric,
  top_recruiters jsonb,
  internship_companies jsonb,
  created_at timestamp without time zone DEFAULT now(),
  CONSTRAINT college_placements_pkey PRIMARY KEY (id),
  CONSTRAINT college_placements_college_id_fkey FOREIGN KEY (college_id) REFERENCES careerpath.colleges(id)
);
CREATE TABLE careerpath.college_reviews (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  college_id uuid,
  user_id uuid,
  rating numeric,
  placement_rating integer,
  faculty_rating integer,
  infrastructure_rating integer,
  title character varying,
  review_text text,
  pros ARRAY,
  cons ARRAY,
  is_verified boolean DEFAULT false,
  created_at timestamp without time zone DEFAULT now(),
  updated_at timestamp without time zone DEFAULT now(),
  CONSTRAINT college_reviews_pkey PRIMARY KEY (id),
  CONSTRAINT college_reviews_college_id_fkey FOREIGN KEY (college_id) REFERENCES careerpath.colleges(id),
  CONSTRAINT college_reviews_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
);
CREATE TABLE careerpath.colleges (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name character varying NOT NULL,
  slug character varying NOT NULL UNIQUE,
  logo_url character varying,
  banner_url character varying,
  established_year integer,
  college_type character varying,
  ownership character varying,
  accreditation character varying,
  website character varying,
  email character varying,
  phone character varying,
  address text,
  city character varying,
  state character varying,
  pincode character varying,
  latitude numeric,
  longitude numeric,
  nirf_rank integer,
  nirf_year integer,
  nirf_category character varying,
  state_rank integer,
  campus_area numeric,
  total_students integer,
  total_faculty integer,
  description text,
  highlights jsonb,
  created_at timestamp without time zone DEFAULT now(),
  updated_at timestamp without time zone DEFAULT now(),
  CONSTRAINT colleges_pkey PRIMARY KEY (id)
);
CREATE TABLE careerpath.exams (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  slug text NOT NULL UNIQUE,
  name text NOT NULL,
  date date,
  description text,
  website_url text,
  CONSTRAINT exams_pkey PRIMARY KEY (id)
);
CREATE TABLE careerpath.profiles (
  id uuid NOT NULL,
  updated_at timestamp with time zone,
  username text UNIQUE CHECK (char_length(username) >= 3),
  full_name text,
  avatar_url text,
  website text,
  CONSTRAINT profiles_pkey PRIMARY KEY (id),
  CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id)
);
CREATE TABLE careerpath.user_colleges (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid,
  college_id uuid,
  status character varying,
  application_status character varying,
  notes text,
  application_deadline date,
  created_at timestamp without time zone DEFAULT now(),
  CONSTRAINT user_colleges_pkey PRIMARY KEY (id),
  CONSTRAINT user_colleges_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id),
  CONSTRAINT user_colleges_college_id_fkey FOREIGN KEY (college_id) REFERENCES careerpath.colleges(id)
);