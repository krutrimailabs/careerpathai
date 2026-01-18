-- Drop table if exists
DROP TABLE IF EXISTS careerpath.career_categories CASCADE;

-- Create table
CREATE TABLE IF NOT EXISTS careerpath.career_categories (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    name text NOT NULL UNIQUE,
    slug text NOT NULL UNIQUE,
    created_at timestamp with time zone DEFAULT now(),
    CONSTRAINT career_categories_pkey PRIMARY KEY (id)
);

-- Enable RLS
ALTER TABLE careerpath.career_categories ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public can view career categories"
    ON careerpath.career_categories
    FOR SELECT
    USING (true);

CREATE POLICY "Admins can manage career categories"
    ON careerpath.career_categories
    FOR ALL
    USING (auth.uid() IN (SELECT id FROM auth.users WHERE email LIKE '%@admin.com')); -- Replace with real role check later

-- Seed Data
INSERT INTO careerpath.career_categories (name, slug)
VALUES
    ('Engineering', 'engineering'),
    ('Medical', 'medical'),
    ('Design', 'design'),
    ('Law', 'law'),
    ('Management', 'management'),
    ('Arts & Media', 'arts-media'),
    ('Science', 'science'),
    ('Commerce', 'commerce'),
    ('Civil Services', 'civil-services'),
    ('Armed Forces', 'armed-forces'),
    ('Aviation', 'aviation'),
    ('Agriculture/Environment', 'agriculture-environment')
ON CONFLICT (slug) DO NOTHING;
