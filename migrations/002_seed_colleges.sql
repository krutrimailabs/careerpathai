-- Seed Colleges Data (Mock data from src/data/colleges.ts)
INSERT INTO careerpath.colleges (id, name, slug, logo_url, nirf_rank, established_year, college_type, campus_area, city, state, description, highlights)
VALUES 
(
    '11111111-1111-1111-1111-111111111111',
    'Indian Institute of Technology, Bombay',
    'iit-bombay',
    'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png',
    3,
    1958,
    'Government',
    550,
    'Mumbai',
    'Maharashtra',
    'Premier engineering institute known for its research, innovation, and vibrant campus life.',
    '{"avg_package_lpa": 28.5, "highest_package_lpa": 360}'::jsonb
),
(
    '22222222-2222-2222-2222-222222222222',
    'All India Institute of Medical Sciences, Delhi',
    'aiims-delhi',
    'https://upload.wikimedia.org/wikipedia/dp/AIIMS_New_Delhi.jpg',
    1,
    1956,
    'Government',
    115,
    'New Delhi',
    'Delhi',
    'The most prestigious medical college in India, setting standards for medical education and healthcare.',
    '{"avg_package_lpa": 18, "highest_package_lpa": 40}'::jsonb
),
(
    '33333333-3333-3333-3333-333333333333',
    'Indian Institute of Science, Bangalore',
    'iisc-bangalore',
    'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Indian_Institute_of_Science_Logo.svg/1200px-Indian_Institute_of_Science_Logo.svg.png',
    1,
    1909,
    'Government',
    400,
    'Bangalore',
    'Karnataka',
    'India’s premier institute for advanced scientific and technological research and education.',
    '{"avg_package_lpa": 35, "highest_package_lpa": 85}'::jsonb
),
(
    '44444444-4444-4444-4444-444444444444',
    'College of Engineering, Pune',
    'coep-pune',
    'https://upload.wikimedia.org/wikipedia/en/thumb/8/87/COEP_Logo.png/220px-COEP_Logo.png',
    73,
    1854,
    'Government',
    36,
    'Pune',
    'Maharashtra',
    'One of the oldest engineering colleges in Asia, known for its strong alumni network and student culture.',
    '{"avg_package_lpa": 12.5, "highest_package_lpa": 52}'::jsonb
),
(
    '55555555-5555-5555-5555-555555555555',
    'Indian Institute of Technology, Madras',
    'iit-madras',
    'https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png',
    1,
    1959,
    'Government',
    617,
    'Chennai',
    'Tamil Nadu',
    'Consistently ranked #1 in NIRF, known for its lush green campus and research ecosystem.',
    '{"avg_package_lpa": 26, "highest_package_lpa": 180}'::jsonb
)
ON CONFLICT (slug) DO NOTHING;

-- RLS for user_colleges
ALTER TABLE careerpath.user_colleges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own saved colleges"
    ON careerpath.user_colleges
    FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can save colleges"
    ON careerpath.user_colleges
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove saved colleges"
    ON careerpath.user_colleges
    FOR DELETE
    USING (auth.uid() = user_id);

-- RLS for colleges (Public Read)
ALTER TABLE careerpath.colleges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view colleges"
    ON careerpath.colleges
    FOR SELECT
    USING (true);
